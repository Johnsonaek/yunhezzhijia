<template>
	<uni-popup ref="popup" type="bottom">
		<view class="keyboard-box">
			<view class="keyboard">
				<view class="ptb30 tc bor-1px-b">{{title}}</view>
				<view class="flex number-box  tc aj-center mlr50 mb20">
					<view :class="pwdArr.length > index ? 'dot' : ''" class="flex-item h100 flex aj-center" v-for="(item, index) in len" :key="index"></view>
				</view>
				<view class="qui-grids border gutter30-tb">
					<view class="qui-grid fs34 fw600" v-for="(item, index) in gridItems" :key="index" @tap="handleClick" :data-val="item">
						<view v-if="item < 10">{{ item }}</view>
						<view v-if="item == 10" class="fs30">关闭</view>
						<view v-if="item == 11">0</view>
						<view v-if="item == 12" class="tui-icon tui-keyboard-delete fs40"></view>
					</view>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
export default {
	name: 'Keyboard',
	components: { uniPopup },
	props: {
		//控制键盘显示
		show: {
			type: Boolean,
			default: true
		},
		len: {
			type: Number,
			default: 6
		},
		title: {
			type: String,
			default: '请输入密码'
		}
	},
	data() {
		return {
			gridItems: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			pwdArr: []
		};
	},
	methods: {
		open() {
			this.$refs['popup'].open();
			this.pwdArr = []
		},
		close() {
			this.$refs['popup'].close();
		},
		finish(res) {
			this.$emit('finish', res);
		},
		handleClick(e) {
			const dataset = e.currentTarget.dataset;
			let val = Number(dataset.val);

			if (val == 10) {
				//关闭键
				this.close()
				this.pwdArr = [];
			} else if (val == 12) {
				//退格键
				let length = this.pwdArr.length;
				if (length > 0) {
					this.pwdArr.splice(length - 1, 1);
				}
			} else {
				// 数字
				if (this.pwdArr.length < this.len) {
					this.pwdArr.push(val);
				}
				if (this.pwdArr.length === this.len) {
					let pwd = this.pwdArr.join('');
					this.finish(pwd);
				}
			}
		}
	}
};
</script>

<style lang="scss">
.keyboard-box {
	.qui-grid:active {
		background-color: #f8f8f8;
	}
	.keyboard {
		background-color: #fff;
	}
}

@font-face {
	font-family: 'keyboardFont';
	src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAASgAA0AAAAABugAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEhAAAABoAAAAch/nJvUdERUYAAARkAAAAHgAAAB4AKQAKT1MvMgAAAZwAAABDAAAAVj4mSapjbWFwAAAB8AAAAD4AAAFCAA/rY2dhc3AAAARcAAAACAAAAAj//wADZ2x5ZgAAAjwAAACsAAAA0BLVU2FoZWFkAAABMAAAAC0AAAA2FXPmsWhoZWEAAAFgAAAAHAAAACQH3gOFaG10eAAAAeAAAAAOAAAAEAwAAABsb2NhAAACMAAAAAoAAAAKAGgAAG1heHAAAAF8AAAAHwAAACABEQBLbmFtZQAAAugAAAFJAAACiCnmEVVwb3N0AAAENAAAACgAAAA6nLlLs3jaY2BkYGAAYukqK754fpuvDNwsDCBwU+tiFBKtwMLA9ABIczAwgUQB4ccH+gAAAHjaY2BkYGBu+N/AEMPCAAJAkpEBFbAAAEcKAm142mNgZGBgYGGwZ2BmAAEmIOYCQgaG/2A+AwAPIgFdAHjaY2BkYWCcwMDKwMDUyXSGgYGhH0IzvmYwYuQAijKwMjNgBQFprikMDs93PN/B3PC/gSGGuYGhASjMCJIDAPenDU0AeNpjYYAAFigGAACAAA0AAHjaY2BgYGaAYBkGRgYQsAHyGMF8FgYFIM0ChED+8x3//0NICW+oSgZGNgYYk4GRCUgwMaACRoZhDwAItAhZAAAAAAAAAAAAAABoAAB42l3MTQqCUBSG4fNpqBxECS/+YFTXRGcFKteZjW0nuoqWVtOgPbgKZ1cqaBDN3snzkklE+xUZEwUkqSOCzGx4EGGEsJYd2vURgQdbomhayC0iu8h8lEVmiR1sS4TVGVFYqeaEVjXmVT8TsWjf83yYIjFq1QM9I0/1c9HMMI06zfHgmMeRY8HDwOKnjSlYZvdQ5u4yB+gVbqrX97cAOxsHn9GF/9G3iV4WbSWBeNp9kD1OAzEQhZ/zByQSQiCoXVEA2vyUKRMp9Ailo0g23pBo1155nUg5AS0VB6DlGByAGyDRcgpelkmTImvt6PObmeexAZzjGwr/3yXuhBWO8ShcwREy4Sr1F+Ea+V24jhY+hRvUf4SbuFUD4RYu1BsdVO2Eu5vSbcsKZxgIV3CKJ+Eq9ZVwjfwqXMcVPoQb1L+EmxjjV7iFa2WpDOFhMEFgnEFjig3jAjEcLJIyBtahOfRmEsxMTzd6ETubOBso71dilwMeaDnngCntPbdmvkon/mDLgdSYbh4FS7YpjS4idCgbXyyc1d2oc7D9nu22tNi/a4E1x+xRDWzU/D3bM9JIbAyvkJI18jK3pBJTj2hrrPG7ZynW814IiU68y/SIx5o0dTr3bmniwOLn8owcfbS5kj33qBw+Y1kIeb/dTsQgil2GP5PYcRkAAAB42mNgYoAALjDJyIAOWMCiTIxM/FmZiXkFiXnxxRmJeckZpQA1nQZRAAAAAf//AAIAAQAAAAwAAAAWAAAAAgABAAMAAwABAAQAAAACAAAAAHjaY2BgYGQAgqtL1DlA9E2ti1EwGgA9dwYGAAA=)
		format('woff');
	font-weight: normal;
	font-style: normal;
}

.tui-icon {
	font-family: 'keyboardFont' !important;
	font-size: 22px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	line-height: 1;
	color: #333;
}

.tui-keyboard-delete:before {
	content: '\e7b8';
}
.number-box {
	.flex-item {
		position: relative;
		&::after {
			content: '';
			position: absolute;
			bottom: 10rpx;
			left: 0;
			right: 0;
			margin: 0 auto;
			width: 86rpx;
			height: 4rpx;
			background-color: #aaa;
		}
	}
	.dot:before {
		content: '';
		position: absolute;
		bottom: 40rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 20rpx;
		height: 20rpx;
		border-radius: 50%;
		background-color: #000;
	}
}
</style>
