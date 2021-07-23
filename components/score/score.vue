<template>
	<view class="scores">
		<view class="default-score" :class="'score_' + item" v-for="(item, index) in valueSync" :key="index">
			<view class="score score-top"></view>
			<view class="score score-bottom"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: String | Number,
				default: 0
			},
			maxLength: {
				type: String | Number,
				default: 6
			}
		},
		computed: {
			valueSync () {
				let valueSync = this.value.toString();
				return valueSync.length <= this.maxLength ? this.str2arr(valueSync) : new Array(this.maxLength).fill(9);
			}
		},
		methods: {
			str2arr (value) {
				return value.length > 1 ? value.split('') : [value]
			},
			zeroFilling (value) {
				for ( let i = value.length - 1; i < this.maxLength; i++ ) {
					value = '0' + value;
				}
				return value
			}
		}
	}
</script>

<style scoped>
	.scores {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background-color: #030504;
		padding: 5rpx;
	}
	.default-score {
		margin: 0 0 0 10rpx;
	}
	.default-score .score {
		width: 22rpx;
		height: 18rpx;
		position: relative;
	}
	.default-score .score::before, .default-score .score::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		box-sizing: border-box;
		border-width: 4rpx;
		border-style: solid;
	}
	.default-score .score::before {
		width: 100%;
		height: 80%;
		border-left-color: #030504;
		border-right-color: #030504;
		border-top-color: transparent;
		border-bottom-color: transparent;
	}
	.default-score .score::after {
		width: 80%;
		height: 100%;
		border-left-color: transparent;
		border-right-color: transparent;
	}
	.default-score .score-top::after {
		border-top-color: #030504;
		border-bottom-color: #030504;
		border-bottom-width: 2rpx;
	}
	.default-score .score-bottom::after {
		border-top-color: #030504;
		border-bottom-color: #030504;
		border-top-width: 2rpx;
	}
	
	/* 0 */
	.score_0 .score-top::before {
		border-left-color: #8A9378;
		border-right-color: #8A9378;
	}
	.score_0 .score-top::after {
		border-top-color: #8A9378;
	}
	.score_0 .score-bottom::before {
		border-left-color: #8A9378;
		border-right-color: #8A9378;
	}
	.score_0 .score-bottom::after {
		border-bottom-color: #8A9378;
	}
	
	/* 1 */
	.score_1 .score-top::before, .score_1 .score-bottom::before {
		border-right-color: #8A9378;
	}
	
	/* 2 */
	.score_2 .score-top::before {
		border-right-color: #030504;
	}
	.score_2 .score-top::after {
		border-top-color: #030504;
		border-bottom-color: #030504;
	}
	.score_2 .score-bottom::before {
		border-left-color: #030504;
	}
	.score_2 .score-bottom::after {
		border-top-color: #030504;
		border-bottom-color: #030504;
	}
	
	/* 3 */
	.score_3 .score-top::before, .score_3 .score-bottom::before {
		border-right-color: #8A9378;
	}
	.score_3 .score-top::after, .score_3 .score-bottom::after {
		border-top-color: #8A9378;
		border-bottom-color: #8A9378;
	}
	
	/* 4 */
	.score_4 .score-top::before {
		border-left-color: #8A9378;
		border-right-color: #8A9378;
	}
	.score_4 .score-top::after {
		border-bottom-color: #8A9378;
	}
	.score_4 .score-bottom::after {
		border-top-color: #8A9378;
	}
	.score_4 .score-bottom::before {
		border-right-color: #8A9378;
	}
	
	/* 5 */
	.score_5 .score-top::before {
		border-left-color: #8A9378;
	}
	.score_5 .score-top::after {
		border-top-color: #8A9378;
		border-bottom-color: #8A9378;
	}
	.score_5 .score-bottom::before {
		border-right-color: #8A9378;
	}
	.score_5 .score-bottom::after {
		border-top-color: #8A9378;
		border-bottom-color: #8A9378;
	}
	
	/* 6 */
	.score_6 .score-top::before {
		border-left-color: #8A9378;
	}
	.score_6 .score-top::after {
		border-top-color: #8A9378;
		border-bottom-color: #8A9378;
	}
	.score_6 .score-bottom::before {
		border-left-color: #8A9378;
		border-right-color: #8A9378;
	}
	.score_6 .score-bottom::after {
		border-top-color: #8A9378;
		border-bottom-color: #8A9378;
	}
	
	/* 7 */
	.score_7 .score-top::before {
		border-right-color: #8A9378;
	}
	.score_7 .score-top::after {
		border-top-color: #8A9378;
	}
	.score_7 .score-bottom::before {
		border-right-color: #8A9378;
	}
	
	/* 8 */
	.score_8 .score-top::before, .score_8 .score-bottom::before {
		border-left-color: #8A9378;
		border-right-color: #8A9378;
	}
	.score_8 .score-top::after, .score_8 .score-bottom::after {
		border-top-color: #8A9378;
		border-bottom-color: #8A9378;
	}
	
	/* 9 */
	.score_9 .score-top::before {
		border-left-color: #8A9378;
		border-right-color: #8A9378;
	}
	.score_9 .score-top::after, .score_9 .score-bottom::after {
		border-top-color: #8A9378;
		border-bottom-color: #8A9378;
	}
	.score_9 .score-bottom::before {
		border-right-color: #8A9378;
	}
</style>
