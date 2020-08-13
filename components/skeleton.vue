<template>
	<view>
		<!--首页-->
		<view v-if="pagename=='home'" class="skeleton bg-white" style="position: fixed; left: 0; right: 0; top: 0; bottom:0; z-index: 9999;">
			<view class="plr30 ptb30">
				<view class="h375 bg-gray-muted"></view>
			</view>
			<view class="qui-grids gutter30 column4">
				<view class="qui-grid" v-for="(item,index) in 4" :key="index">
					<view class="wh100 bg-gray-muted radius20"></view>
					<view class="h20 bg-gray-muted w80 mt20"></view>
				</view>
			</view>
			<view class="h20 mb20 bg-gray-muted"></view>
			
			<view class="flex plr30 ptb30">
				<view class="w80 h30 bg-red light mr30"></view>
				<view class="h30 bg-gray-muted w400"></view>
			</view>
			<view class="qui-grids gutter20 column2">
				<view class="qui-grid" v-for="(item,index) in 2" :key="index">
					<view class="h160 block bg-gray-muted radius20"></view>
				</view>
			</view>
			<view class="h20 mb20 bg-gray-muted"></view>
			<view class="plr30">
				<view class="h280 bg-gray-muted"></view>
			</view>
		</view>
		
		<view v-if="pagename == 'productList'" class="skeleton plr10 ptb30">
			<view class="qui-grids gutter10 column2">
				<view class="qui-grid" v-for="(item,index) in 4" :key="index">
					<view class="bg-white radius12" style="width: 100%; height: 540rpx;">
						<view class="plr20 ptb20">
							<view class="img1x1 bg-gray-muted"></view>
							<view class="h30 mt20 bg-gray-muted"></view>
							<view class="h30 mt20 bg-gray-muted mr30"></view>
							<view class="flex mt30 mr50">
								<view class="flex-item h30 bg-red" style="opacity: 0.05;"></view>
								<view class="h30 w50 ml40 bg-gray-muted"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view v-if="pagename == 'detail'"  class="skeleton bg-white" style="position: fixed; left: 0; right: 0; top: 0; bottom:0; z-index: 9999;">
			<view class="img1x1 bg-gray-muted"></view>
			<view class="plr20 ptb20">
				<view class="h30 mb20 bg-gray-muted mr40 radius10"></view>
				<view class="h30 mb20 bg-gray-muted mr40 radius10"></view>
				<view class="h30 mb20 bg-gray-muted radius10 w400"></view>
				<view class="h30 mt40 mb20 bg-red radius10 w260" style="opacity: 0.1;"></view>
			</view>
			<view class="h20 mb20 bg-gray-muted"></view>
			<view class="plr20 pb20">
				<view class="flex mb20" v-for="(item,index) in 3" :key="index">
					<view class="w80 h30 bg-gray-muted radius10 mr20"></view>
					<view class="h30 flex-item bg-gray-muted radius10"></view>
					<view class="w160"></view>
					<view class="w60 h30 bg-gray-muted radius10"></view>
				</view>
				<view class="abs flex" style="left: 0; right: 0; bottom: 0;">
					<view class="flex-item bg-gray h100"></view>
					<view class="w300 h100 bg-red" style="opacity: 0.2;"></view>
				</view>
			</view>
		</view>
		
		<view v-if="pagename == 'orderList'"  class="skeleton" style="opacity: 0.8;">
			<view  v-for="(item, index) in 2" :key="index" class="qui-card mt20">
				<view class="flex space-between plr30 ptb20">
					<text class="w300 h30 bg-gray-muted"></text>
					<view class="bg-yellow h20"></view>
				</view>
				<view class="bor-1px-b mlr30"></view>
				<view class="block plr30 ptb20">
					<view class="flex a-center mb20">
						<view class="wh140 bg-gray-muted radius12 mr20"></view>
						<view class="flex-item">
							<view class="bg-gray-muted h30"></view>
							<view class="bg-gray-muted h30 mt10 w300"></view>
							<view class="w120 bg-red h20 mt10" style="opacity: 0.05;"></view>
						</view>
					</view>
				</view>
				<view class="bor-1px-b mlr30"></view>
				<view class="plr30 ptb20 tr">
					<text style="display: inline-block;" class="w120 h20 bg-gray-muted"></text>
					<view class="mt10">
						<text style="display: inline-block;" class="w80 h30 bg-gray-muted"></text>
					</view>
					<view class="mt10">
						<text style="display: inline-block;" class="w80 h20 bg-gray-muted"></text>
					</view>
				</view>
				<view class="bor-1px-b mlr30"></view>
				<view  class="tr ptb20 plr30">
					<view style="display: inline-block;" class="w120 h50 radius bg-gray-muted"></view>
					<view style="display: inline-block; opacity: 0.05;" class="w120 h50 radius bg-red ml10"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Skeleton',
		props: {
			pagename: {
				type: String,
				default: 'home'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
