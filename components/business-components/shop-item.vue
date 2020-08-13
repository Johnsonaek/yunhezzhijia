<template>
	<view v-if="itemData" class="flex mt24 bor-1px-b pb30">
		<view class="mr30" v-if="itemData.path">
			<q-image :imgwh="190" :src="itemData.path"></q-image>
		</view>
		<view class="flex-item">
			<view>
				<text  class="fs30 fw600">{{itemData.name}}</text> <text v-if="itemData.tags" class="fs20 plr10 ptb5 bg-red light">{{itemData.tags}}</text>
			</view>
			<view class="flex a-center mt20">
				<view class="flex-item flex a-center">
					<image v-for="(item,index) in itemData.rating" :key="index" style="width: 28rpx; height: 28rpx;" src="../../static/index/index34.png"></image>
					<view class="text-yellow fs24 ml10">{{itemData.rating}}分</view>
				</view>
				<view v-if="itemData.range" class="fs24 text-gray">
					 {{itemData.range}}m
				</view>
			</view>
			<view v-if="!shopIndex" class="mt20 text-gray fs24">
				最高红包金   <text class="text-red ml10">￥{{itemData.redPrice}}</text>
			</view>
			<view class="mt20 text-gray fs24">
				<text>{{itemData.street}}</text>   
				<!-- <text class="ml30">月售3035</text> -->
			</view>
			<view class="mt20">
				<text v-for="(item,index) in itemData.shopTags" :key="index" class="plr10 ptb5 bg-orange light fs24 mr20">{{item}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			shopIndex: {
				type: Boolean,
				default: false
			},
			itemData: {
				type: Object
			}
		}
	}
</script>

<style>
	
</style>
