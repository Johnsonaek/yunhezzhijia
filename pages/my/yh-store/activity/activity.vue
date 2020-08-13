<template>
	<view>
		<page title="创建活动">
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="mr30">
						<view class="radius16">
							<q-image :lazyLoad="true" :isRatio="false" :imgwh="[256,256]" :src="info.imgUrl"></q-image>
						</view>
					</view>
					<view class="cell-bd">
						<view class="fs36">
							{{info.title}}
						</view>
						<view class="fs24 mt20">
							{{info.content}}
						</view>
						<view class="flex a-center mt30">
							<view class="flex-item text-muted fs24">
								
							</view>
							<view @click="goto('/pages/my/yh-store/create-activity/create-activity')" class="qui-btn inline round small">
								立即创建
							</view>
						</view>
					</view>
				</view>
			</view>
		</page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {}
			}
		},
		onLoad() {
		   this.getInfo()	
		},
		methods: {
			async getInfo() {
				const res = await this.post('/wap/OwnSmallShop/activityDescribe')
				this.info = res.data
			}
		}
	}
</script>

<style>

</style>
