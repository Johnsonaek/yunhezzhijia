<template>
	<page title="找回订单"   :headbor="false">
		
		<view class="flex aj-center ptb50">
			<q-image :lazyLoad="false" :isRatio="false" :imgwh="[400,328]" src="/static/images/retrieveOrder_img.png"></q-image>
		</view>
		<view class="plr30 ptb30">
			<view class="flex radius10 mb30" style="border: 1px solid #FFBB37; overflow: hidden;">
				<view class="flex-item flex a-center plr30">
					<input class="text-white" placeholder="请输入或粘贴订单编号"/>
				</view>
				<view class="w180 h80 flex a-center j-center text-white" style="background-color: #FFBB37;">搜索</view>
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

<style scoped="">
	page{
		background-color: #E15363;
		padding: 0 30px;
	}
	.bgcolor3{
		background-color: #E15363;
	}
</style>
