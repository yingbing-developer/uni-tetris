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
				<view class="game-btn" @tap="startGame">
					<span>开始游戏</span>
				</view>
			</view>
		</view>
		<view class="control">
			<view class="direction">
				<view class="control-btn control-top"></view>
				<view class="control-btn control-left"></view>
				<view class="control-btn control-right"></view>
				<view class="control-btn control-bottom"></view>
			</view>
			<view class="circle-btn"></view>
		</view>
	</view>
</template>

<script>
	import Score from '@/components/score/score.vue';
	//展示用方块
	const nextBlocks = [
		[0x0660],//粉碎男孩
		[0x4444, 0x0F00],//英雄
		[0x4460, 0x2e0, 0x6220, 0x740],//橙色瑞克
		[0x2260, 0xe20, 0x6440, 0x4700],//蓝色瑞克
		[0x6C00, 0x4620],//罗德岛Z
		[0x2640, 0xC600],//克利夫兰Z
		[0x2620, 0x720, 0x2320, 0x2700]//小T
	]
	
	//游戏用方块
	const BLOCKS = [
		[0x6600],//粉碎男孩
		[0x2222, 0xf00],//英雄
		[0x4460, 0x2e0, 0x6220, 0x740],//橙色瑞克
		[0x2260, 0xe20, 0x6440, 0x4700],//蓝色瑞克
		[0x6c00, 0x4620],//罗德岛Z
		[0x2640, 0xc600],//克利夫兰Z
		[0x2620, 0x720, 0x2320, 0x2700]//小T
	];
	export default {
		data() {
			return {
				//游戏世界地图
				worldData: [],
				//展示方块地图
				nextData: [],
				//当前方块
				nowBlock: '',
				//下个方块
				nextBlock: '',
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
				error: false
			}
		},
		created() {
			this.init();
		},
		computed: {
			downTime () {
				let time = 1000 - (this.level * 50);
				return time > 40 ? time : 40;
			},
			level () {
				return Math.floor(this.lines / 10); 
			},
			score () {
				return this.lines * 10;
			},
			nowBlockSync () {
				let nowBlock = this.scale2Arr(this.nowBlock);
				for ( let i in nowBlock ) {
					nowBlock[i] = new Array(this.position.x).fill(0).concat(nowBlock[i]);
					nowBlock[i] = nowBlock[i].concat(new Array(10 - (this.position.x + 4)).fill(0));
				}
				nowBlock = new Array(16).fill(new Array(10).fill(0)).concat(nowBlock);
				return nowBlock;
			}
		},
		methods: {
			//初始化地图数据
			init () {
				let worldData = [];
				for (let i = 0; i < 20; i++) {
					worldData.push([])
					for (let j = 0; j < 10; j++) {
						worldData[i].push(0)
					}
				}
				this.worldData = worldData;
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
			randomBlock (blocks) {
				let index = ~~(Math.random() * 7);
				let direction = ~~(Math.random() * nextBlocks[index].length);
				return blocks[index][direction];
			},
			//开始游戏
			startGame () {
				this.ended = false;
				this.nowBlock = this.nextBlock || this.randomBlock(BLOCKS);
				this.nextBlock = this.randomBlock(nextBlocks);
				this.nextData = this.scale2Arr(this.nextBlock);
				this.position = {
					x: 3,
					y: -1
				}
				this.downTimer = setTimeout(() => {
					this.down();
				}, this.downTime)
			},
			//结束游戏
			endGame () {
				this.pause = false;
				this.ended = true;
				clearTimeout(this.downTimer);
				this.init();
			},
			//暂停游戏
			pauseGame () {
				this.pause = true;
			},
			//继续游戏
			continueGame () {
				this.pause = false;
			},
			//方块下落
			down () {
				this.position.y++;
				for ( let i = 19; i >= 0; i-- ) {
					let y = this.position.y - (19 - i);
					let isBreak = false;
					if ( y >= 0 && !isBreak ) {
						for ( let j in this.nowBlockSync[i] ) {
							this.$set(this.worldData[y], j, this.worldData[y][j] | this.nowBlockSync[i][j]);
							if ( i == 3 ) {
								if ( this.worldData[y][j] == 1 && this.nowBlockSync[i][j] == 1 ) {
									isBreak = true;
									break;
								}
							}
						}
					} else {
						break;
					}
				}
				if ( this.error ) {
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
				} else if ( this.ended ) {
					uni.showToast({
						title: '游戏结束'
					})
				} else if ( this.pause ) {
					uni.showModal({
						title: '提示',
						content: '游戏暂停',
						showCancel: false,
						confirmText: '继续游戏',
						success: (res) => {
							if (res.confirm) {
								this.downTimer = setTimeout(() => {
									this.down();
								}, this.downTime)
							}
						}
					})
				} else if (this.position.y == 19) {
					this.startGame();
				} else {
					this.downTimer = setTimeout(() => {
						this.down();
					}, this.downTime)
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
@import url("../../assets/css/score.css");
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
	width: 480rpx;
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
