<template>
	<view>
		<page title="直播间">
			<view class="tab_choose">
				<!-- 直播商家选择 -->
				<view class="brand">
					<view class="brand_name">
						{{brandList[chooseBrand].name}}
						<view :class="{brand_list:true,brand_show:brandisShow}">
							<view :class="{brand_item:true,choose_item:brandList[chooseBrand].name == item.name}" v-for="(item,index) in brandList" :key="item.type" @click="brandChoose(item.type)">{{item.name}}</view>
						</view>
					</view>
					<image :class="{rotating:brandisShow}" src="../../../static/home/jiayou/jx.png" @click="showBrand"></image>
				</view>
				
				<!-- 直播类型选择 -->
				<ms-tabs :list="list2" v-model="active" lineColor="#F82840" itemColor="#F82840"></ms-tabs>
			</view>
		</page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				brandList:[
					{
						name:'淘宝',
						type:1
					},
					{
						name:'拼多多',
						type:2
					},
					{
						name:'京东',
						type:3
					}
				],
				brandisShow:false,
				chooseBrand:0,
				active:0,
				list2:[{title:'热门推荐'},{title:'热门推荐'},{title:'热门推荐'},{title:'热门推荐'},{title:'热门推荐'},{title:'热门推荐'},{title:'热门推荐'}]
			}
		},
		methods: {
			showBrand(){
				if(this.brandisShow == false){
					this.brandisShow = true
				}else{
					this.brandisShow = false
				}
			},
			brandChoose(type){
				this.chooseBrand = type -1
				this.brandisShow = false
			}
		}
	}
</script>

<style lang="scss">
	.tab_choose{
		background-color: #FFFFFF;
		padding-left: 10rpx;
		padding-bottom: 6rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.brand{
			flex:0 0 25%;
			font-size: 30rpx;
			color: #666666;
			width: 200rpx;
			display: flex;
			align-items: center;
			justify-content:space-around;
			padding-left: 30rpx;
			.brand_name{
				position: relative;
				color: #F82840;
				font-weight: 600;
				margin-right: 18rpx;
			}
			.brand_list{
				display: none;
				text-align: center;
				background-color: #FFFFFF;
				width: 150rpx;
				position: absolute;
				padding-bottom: 10rpx;
				top: 44rpx;
				z-index: 999;
				box-shadow: 2rpx 2rpx 10rpx #888888;
				.brand_item{
					margin-top: 10rpx;
					color: #666666;
					font-weight: 400;
				}
				.choose_item{
					color: #F82840;
					border: 1rpx;
					
				}
			}
			.brand_show{
				display: block;
			}
			.rotating{
				transform: rotate(180deg);
			}
			image{
				width: 20rpx;
				height: 20rpx;
			}
		}
	
		/deep/ .tab__item{
			height: 70rpx;
			color: #666666 ;	
		}
		/deep/ .tabBlock{
			flex:0 0 80%;
			overflow-x: auto;
			overflow-y: auto;
		}
	}
</style>
