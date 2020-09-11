<template>
	<page title="全部订单">
		
		<view class="mt5">
			<view class="bg-white mb20">
				<view class="pt20 mlr30 pb20 fw600" style="border-bottom: 1px solid #f3f3f3;">平台订单</view>
				<view class="flex pt40 pb20" style="flex-wrap: wrap;">
					<navigator :url="'../ptorder/ptorder?source='+0" class="flex a-center j-center mb40" style="width: 25%;flex-wrap: wrap;">
						<image src="../../../static/business/ordericon/ordericon1.png" class="wh70 mb10 mb10"></image>
						<text class="flex a-center j-center fs22" style="width: 100%;">全部订单</text>
					</navigator>
					<navigator :url="'../ptorder/ptorder?source='+2" class="flex a-center j-center mb40" style="width: 25%;flex-wrap: wrap;">
						<image src="/static/index/index6.png" class="wh80 mb10 mb10"></image>
						<text class="flex a-center j-center fs22" style="width: 100%;">淘宝</text>
					</navigator>
					<navigator :url="'../ptorder/ptorder?source='+1" class="flex a-center j-center mb40" style="width: 25%;flex-wrap: wrap;">
						<image src="/static/index/index16.png" class="wh80 mb10 mb10"></image>
						<text class="flex a-center j-center fs22" style="width: 100%;">拼多多</text>
					</navigator>
					<navigator url="../ptorder/ptorder" class="flex a-center j-center mb40" style="width: 25%;flex-wrap: wrap;">
						<image src="/static/index/index14.png" class="wh80 mb10"></image>
						<text class="flex a-center j-center fs22" style="width: 100%;">话费充值</text>
					</navigator>
			
					
				</view>
			</view>
			
		    
			
			<view class="qui-card panel mt24">
		    	<view class="card-hd bor-1px-b">
		    		<text>云合优品订单</text>
		    	</view>
		    	<view class="qui-grids column4 gutter30-tb">
		    		<view @click="goto('/pages/superior/order-list/order-list')" class="qui-grid">
		    			<view class="">
		    				<q-image :lazyLoad="false" :isRatio="false" :imgwh="[80,80]" src="/static/business/ordericon/ordericon12.png"></q-image>
		    			</view>
		    			<view class="fs24 mt10">全部订单</view>
		    		</view>
					<!-- <view class="qui-grid">
						<view class="">
							<q-image :isRatio="false" :imgwh="[80,80]" src="/static/business/ordericon/ordericon13.png"></q-image>
						</view>
						<view class="fs24 mt10">推广订单</view>
					</view> -->
					<view @click="goto('/pages/superior/order-list/order-list?type=4')" class="qui-grid">
						<view class="">
							<q-image :lazyLoad="false" :isRatio="false" :imgwh="[80,80]" src="/static/business/ordericon/ordericon14.png"></q-image>
						</view>
						<view class="fs24 mt10">已完成</view>
					</view>
					<view @click="goto('/pages/superior/order-list/order-list?type=1')" class="qui-grid">
						<view class="">
							<q-image :lazyLoad="false" :isRatio="false" :imgwh="[80,80]" src="/static/business/ordericon/ordericon15.png"></q-image>
						</view>
						<view class="fs24 mt10">待支付</view>
					</view>
					<view @click="goto('/pages/superior/order-list/order-list?type=2')" class="qui-grid">
						<view class="">
							<q-image :isRatio="false" :imgwh="[80,80]" src="/static/business/ordericon/ordericon16.png"></q-image>
						</view>
						<view class="fs24 mt10">待发货</view>
					</view>
					<view @click="goto('/pages/superior/order-list/order-list?type=3')" class="qui-grid">
						<view class="">
							<q-image :isRatio="false" :imgwh="[80,80]" src="/static/business/ordericon/ordericon17.png"></q-image>
						</view>
						<view class="fs24 mt10">待收货</view>
					</view>
		    	</view>
		    </view>
			<view class="qui-card panel mt24">
		    	<view class="card-hd bor-1px-b">
		    		<text>线下门店消费订单</text>
		    	</view>
		    	<view class="qui-grids column4 gutter30-tb">
		    		<navigator url="/pages/my/allorder/offline-order/offline-order" class="qui-grid">
		    			<view class="">
		    				<q-image :lazyLoad="false" :isRatio="false" :imgwh="[80,80]" src="/static/business/ordericon/ordericon12.png"></q-image>
		    			</view>
		    			<view class="fs24 mt10">全部订单</view>
		    		</navigator>
		    	</view>
		    </view>
		</view>
	</page>
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
