<template>
	<view class="plr20 pt20">
		<view class="bg-white radius10 " style="margin-bottom: 150rpx;">
			<view class="flex a-center h80 plr20" style="border-bottom:1px solid #e2e2e2 ;">
				<view class="flex-item fs26">小店头像</view>
				<image src="../../../static/business/user.png" class="wh60"></image>
			</view>
			<view class="flex a-center h80 plr20" style="border-bottom:1px solid #e2e2e2 ;">
				<view class="flex-item fs26">店铺名称</view>
				<view class="flex-item flex fs26" style="justify-content: flex-end;">陈欢欢商城</view>
			</view>
			<view class="plr20 pt20 pb40">
				<view class="fs26 mb20">小店公告</view>
				<textarea value="" class="ptb10 plr10 fs26" placeholder="请输入店铺公告描述（最多100字）" style="width: 100%; border:1px solid #e2e2e2 ;" />
			</view>
		</view>
		<view class="flex a-center j-center h80 fs28 radius40 text-white w400" style="margin: auto; background-color: #2493f4;">保存</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
