<template>
	<view class="container">
		<view class="top">
			<view class="game-world">
				<view class="line" v-for="(item, index) in worldData" :key="index">
					<view class="block" :class="{'act_block': block == 1}" v-for="(block, i) in item" :key="i"></view>
				</view>
			</view>
			<view class="game-info">
				<view class="game-score">
					<view class="score-title">
						HI-SCORE
					</view>
					<view id="hiscore" class="score-line">
						<score :value="hiScore"></score>
					</view>
				</view>
				<view class="game-score">
					<view class="score-title">
						NOW-SCORE
					</view>
					<view id="hiscore" class="score-line">
						<score :value="score"></score>
					</view>
				</view>
				<view class="game-score">
					<view class="score-title">
						LINES
					</view>
					<view id="lines" class="score-line">
						<score :value="lines"></score>
					</view>
				</view>
				<view class="game-score">
					<view class="score-title">
						LEVEL
					</view>
					<view id="level" class="score-line">
						<score :value="level"></score>
					</view>
				</view>
				<view class="game-score">
					<view class="score-title">
						NEXT
					</view>
					<view class="next-world">
						<view class="line" v-for="(item, index) in nextData" :key="index">
							<view class="block" :class="{'act_block': block == 1}" v-for="(block, i) in item" :key="i"></view>
						</view>
					</view>
				</view>
				<view class="game-btn" @tap="startGame" v-if="ended">
					<span>开始游戏</span>
				</view>
				<view class="game-btn" @tap="endGame" v-if="!ended">
					<span>结束游戏</span>
				</view>
				<view class="game-btn" @tap="pauseGame" v-if="!ended && !pause">
					<span>暂停游戏</span>
				</view>
			</view>
		</view>
		<view class="control">
			<view class="direction">
				<view class="control-btn control-top" @tap="changeBlock"></view>
				<view class="control-btn control-left" @tap="left"></view>
				<view class="control-btn control-right" @tap="right"></view>
				<view class="control-btn control-bottom" @tap="drop"></view>
			</view>
			<view class="circle-btn" @tap="quickDrop"></view>
		</view>
	</view>
</template>

<script>
	import Score from '@/components/score/score.vue';
	import { deepClone } from '@/assets/js/utils.js';
	import { mapGetters, mapMutations } from 'vuex';
	//展示用方块
	const NEXTBLOCKS = [
		[0x0660],//粉碎男孩
		[0x4444, 0x0F00],//英雄
		[0x4460, 0x2e0, 0x6220, 0x740],//橙色瑞克
		[0x2260, 0xe20, 0x6440, 0x4700],//蓝色瑞克
		[0x6C00, 0x4620],//罗德岛Z
		[0x2640, 0xC600],//克利夫兰Z
		[0x2620, 0x720, 0x2320, 0x2700]//小T
	]
	
	//游戏用方块
	// const BLOCKS = [
	// 	[0x6600],//粉碎男孩
	// 	[0x2222, 0xf00],//英雄
	// 	[0x4460, 0x2e0, 0x6220, 0x740],//橙色瑞克
	// 	[0x2260, 0xe20, 0x6440, 0x4700],//蓝色瑞克
	// 	[0x6c00, 0x4620],//罗德岛Z
	// 	[0x2640, 0xc600],//克利夫兰Z
	// 	[0x2620, 0x720, 0x2320, 0x2700]//小T
	// ];
	const BLOCKS = [
		[
			[[1,1],[1,1]],
		],//粉碎男孩
		[
			[[1],[1],[1],[1]],
			[[1,1,1,1]],
		],//英雄
		[
			[[0,1],[0,1],[1,1]],
			[[1,0,0],[1,1,1]],
			[[1,1],[1,0],[1,0]],
			[[1,1,1],[0,0,1]],
		],//橙色瑞克
		[
			[[1,0],[1,0],[1,1]],
			[[1,1,1],[1,0,0]],
			[[1,1],[0,1],[0,1]],
			[[0,0,1],[1,1,1]],
		],//蓝色瑞克
		[
			[[1,1,0],[0,1,1]],
			[[0,1],[1,1],[1,0]],
		],//罗德岛Z
		[
			[[1,0],[1,1],[0,1]],
			[[0,1,1],[1,1,0]],
		],//克利夫兰Z
		[
			[[1,0],[1,1],[1,0]],
			[[1,1,1],[0,1,0]],
			[[0,1],[1,1],[0,1]],
			[[0,1,0],[1,1,1]],
		]//小T
	];
	export default {
		data() {
			return {
				//绘制的游戏世界（给玩家看的游戏世界）
				worldData: [],
				//真实的游戏世界
				oldWorldData: [],
				//展示方块地图
				nextData: [],
				//当前方块
				nowBlock: '',
				//下个方块
				nextBlock: '',
				//方块是否完整展示在游戏地图上，用于判断游戏是否失败
				isShowAll: false,
				position: {
					x: 3,
					y: -1
				},
				//消除行数
				lines: 0,
				
				//是否暂停游戏
				pause: false,
				//是否结束游戏
				ended: true,
				//游戏失败
				error: false
			}
		},
		created() {
			this.init();
		},
		computed: {
			...mapGetters(['getHiScore']),
			//方块下降时间
			downTime () {
				let time = 1000 - (this.level * 50);
				return time > 40 ? time : 40;
			},
			//等级
			level () {
				return Math.floor(this.lines / 10); 
			},
			//分数
			score () {
				return this.lines * 10;
			},
			//最高分数
			hiScore () {
				return this.getHiScore;
			}
		},
		methods: {
			...mapMutations(['setHiScore']),
			//初始化地图数据
			init () {
				let worldData = [];
				for (let i = 0; i < 20; i++) {
					worldData.push([])
					for (let j = 0; j < 10; j++) {
						worldData[i].push(0)
					}
				}
				this.worldData = deepClone(worldData);
				this.oldWorldData = deepClone(worldData);
				this.nextData = this.scale2Arr();
			},
			//16进制转2维数组
			scale2Arr (value = 0x0000) {
				let arr = [[],[],[],[]];
				for (let i = 0; i < 4; i++) {
					for (let j = 0; j < 4; j++) {
						arr[Math.abs(i - 3)].push((value & Math.pow(2, i * 4 + j)) ? 1 : 0);
					}
				}
				return arr;
			},
			//随机方块
			randomBlock () {
				let index = ~~(Math.random() * 7);
				let direction = ~~(Math.random() * NEXTBLOCKS[index].length);
				return {
					index: index,
					direction: direction
				};
			},
			//开始游戏
			startGame () {
				this.ended = false;
				this.nowBlock = this.nextBlock || this.randomBlock();
				this.nextBlock = this.randomBlock();
				this.nextData = this.scale2Arr(NEXTBLOCKS[this.nextBlock.index][this.nextBlock.direction]);
				this.position = {
					x: 5,
					y: -1
				}
				this.down();
			},
			//结束游戏
			endGame () {
				this.pause = false;
				this.error = false;
				this.ended = true;
				this.lines = 0;
				clearTimeout(this.downTimer);
				this.init();
			},
			//暂停游戏
			pauseGame () {
				this.pause = true;
				clearTimeout(this.downTimer);
				uni.showModal({
					title: '提示',
					content: '游戏暂停',
					showCancel: false,
					confirmText: '继续游戏',
					success: (res) => {
						if (res.confirm) {
							this.pause = false;
							this.downTimer = setTimeout(() => {
								this.down();
							}, this.downTime)
						}
					}
				})
			},
			//补全方块横向到10位
			completionColumn (arr, positionX) {
				let len = arr.length;
				let nowBlock = [];
				let maxLen = arr[0].length;
				//根据positionX计算出方块横向位置
				for ( let i = 0; i < len; i++) {
					let x = positionX - (maxLen - 1) > 0 ? (positionX - (maxLen - 1)) : 0;
					let obj = new Array(x).fill(0).concat(arr[i]);
					obj = obj.concat(new Array(10 - (x + maxLen)).fill(0));
					nowBlock.push(obj);
				}
				return nowBlock;
			},
			//生成当前方块 10 X 20 地图
			getNowBlock (positionX, direction) {
				let arr = BLOCKS[this.nowBlock.index][direction];
				let nowBlock = this.completionColumn(arr, positionX);
				let len = nowBlock.length;
				let y = this.position.y - (len - 1) > 0 ? (this.position.y - (len - 1)) : 0;
				//刚开始下落要截取方块一部分显示
				let start = len - (this.position.y + 1) > 0 ? len - (this.position.y + 1) : 0;
				nowBlock = nowBlock.slice(start, len);
				//判断方块是否完整展示在地图上
				this.isShowAll = len == nowBlock.length;
				//补全方块竖向到20位
				len = nowBlock.length;
				nowBlock = new Array(y).fill(new Array(10).fill(0)).concat(nowBlock);
				nowBlock = nowBlock.concat(new Array(20 - (y + len)).fill(new Array(10).fill(0)));
				return nowBlock;
			},
			//判断方块有没有遇到阻挡
			isBlock (nowBlock) {
				for ( let i in nowBlock ) {
					for ( let j in nowBlock[i] ) {
						if ( this.oldWorldData[i][j] == 1 && nowBlock[i][j] == 1 ) {
							return true;
						}
					}
				}
			},
			//绘制方块到地图上
			drawWorld (nowBlock) {
				for ( let i in nowBlock ) {
					for ( let j in nowBlock[i] ) {
						this.$set(this.worldData[i], j, this.oldWorldData[i][j] | nowBlock[i][j]);
					}
				}
			},
			//方块下落
			down (isQuick = false) {
				if ( this.ended ) {
					return;
				}
				this.position.y++;
				let nowBlock = this.getNowBlock(this.position.x, this.nowBlock.direction);
				//判断方块有没有遇到阻挡
				let isBlock = this.isBlock(nowBlock);
				if ( isBlock ) {
					if ( !this.isShowAll ) {
						//如果遇到阻挡，且方块没有完整展示在地图上，则游戏失败
						this.error = true;
					}
				} else {
					//没有遇到阻挡才将下移的方块绘制到地图上
					this.drawWorld(nowBlock);
				}
				if ( this.error ) {//方块超出界面游戏失败
					//如果当前游戏分数大于最高记录分数。则更新最高记录分数
					if ( this.score > this.hiScore ) {
						this.setHiScore(this.score);
					}
					uni.showModal({
						title: '提示',
						content: '游戏结束',
						showCancel: false,
						success: (res) => {
							if (res.confirm) {
							   this.endGame();
							}
						}
					})
				} else if ( this.ended ) {//用户主动结束游戏
					return;
				} else if ( this.pause ) {//用户暂停游戏
					return;
				} else if (this.position.y >= 19 || isBlock) {//方块停止，继续降落下一个方块
					//非快速下降，需要等待一段时间后再进行下一次方块下降 （方便玩家做骚操作）
					if ( !isQuick ) {
						this.downTimer = setTimeout(() => {
							this.next();
						}, this.downTime)
					} else {
						this.next();
					}
				} else if ( isQuick ) {//用户选择快速降落方块
					this.down(true);
				} else {//默认速度降落方块
					this.downTimer = setTimeout(() => {
						this.down();
					}, this.downTime)
				}
			},
			//当方块停止下落时需要进行的操作
			next () {
				//去除满足消除条件的行
				let worldData = this.worldData.filter(item => item.toString().replace(/,/g, '') != '1111111111');
				//增加消除行数
				this.lines +=( this.worldData.length - worldData.length);
				//补全世界地图到20行
				this.worldData = deepClone(new Array (this.worldData.length - worldData.length).fill(new Array(10).fill(0)).concat(worldData));
				//记录当前游戏地图
				this.oldWorldData = deepClone(this.worldData);
				//开始下一个方块下落
				this.startGame();
			},
			//左移方块
			left () {
				this.move(-1);
			},
			//左移方块
			right () {
				this.move(1);
			},
			//手动降落方块
			drop () {
				clearTimeout(this.downTimer);
				if ( this.position.y >= 19 ) {
					this.next();
				} else {
					this.down();
				}
			},
			//快速降落方块
			quickDrop () {
				clearTimeout(this.downTimer);
				this.down(true);
			},
			//切换方块
			changeBlock () {
				let maxLen = BLOCKS[this.nowBlock.index].length;
				let direction = this.nowBlock.direction + 1 < maxLen ? this.nowBlock.direction + 1 : 0;
				let nowBlock = this.getNowBlock(this.position.x, direction);
				//判断方块切换时有没有遇到阻挡
				let isBlock = this.isBlock(nowBlock);
				//没有遇到阻挡才将变化的方块绘制到地图上
				if ( !isBlock ) {
					this.nowBlock.direction = direction;
					this.drawWorld(nowBlock);
				}
			},
			//移动方块
			move (x) {
				if ( this.ended ) {
					return;
				}
				let positionX = 0;
				if ( x < 0 ) {
					positionX = this.position.x + x > 0 ? (this.position.x + x) : 0;
				} else {
					positionX = this.position.x + x < 9 ? (this.position.x + x) : 9;
				}
				let nowBlock = this.getNowBlock(positionX, this.nowBlock.direction);
				//判断方块移动时有没有遇到阻挡
				let isBlock = this.isBlock(nowBlock);
				//没有遇到阻挡才将移动的方块绘制到地图上
				if ( !isBlock ) {
					this.position.x = positionX;
					this.drawWorld(nowBlock);
				}
			}
		},
		components: {
			Score
		}
	}
</script>

<style scoped>
@import url("../../assets/css/control.css");
.container {
	display: flex;
	flex-direction: column;
	height: 100vh;
	padding: 5rpx;
	box-sizing: border-box;
	margin: 0;
	background-color: #A1AA8D;
}
.top {
	display: flex;
}
.game-world {
	border: 4rpx solid #060E03;
	height: 100%;
	padding: 5rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 960rpx;
}

.line {
	display: flex;
}

.block {
	width: 40rpx;
	height: 40rpx;
	margin: 4rpx;
	border: 4rpx solid #8A9378;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
}

.block::after {
	content: '';
	width: 70%;
	height: 70%;
	background-color: #8A9378;
}

.act_block {
	border: 4rpx solid #030504;
}
.act_block::after {
	background-color: #030504;
}

.game-info {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 10px;
	box-sizing: border-box;
}
.game-score {
	width: 100%;
	margin-top: 20rpx;
}

.score-title {
	font-size: 18rpx;
	font-weight: bold;
}

.score-line {
	margin-top: 10rpx;
}
.next-world {
	margin-top: 10rpx;
}
.game-btn {
	border: 4rpx solid #030504;
	padding: 10rpx 5rpx;
	color: #8A9378;
	font-size: 24rpx;
	margin-top: 30rpx;
	box-sizing: border-box;
}
.game-btn span {
	background-color: #030504;
	padding: 5rpx;
}

.control {
	padding: 0 100rpx;
	flex: 1;
}
</style>
