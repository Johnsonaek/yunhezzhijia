<template>
	<page title="详情">
		<view class="plr20 pt20" style="padding-bottom: 80px;">
			<view class="fw600 fs30 mb20">{{detail.title}}</view>
			<view class="fs22 mb20" style="color: #999999;">{{detail.created_at}}</view>
			<view class="fs24 mb20" style="line-height: 1.8;">
				<!-- <rich-text :nodes="detail.content"></rich-text> -->
				<parser :html="detail.content" />
			</view>

		</view>
		<view class="flex a-center" style="position: fixed;left: 0;bottom: 0;background-color: #f8f8f8;width: 100%;">
			<view @click="putZan" class="flex-item flex a-center j-center fs22 h100" style="color: #999999;">
				<image src="../../../static/business/thumbsup.png" class="wh40 mr10"></image>{{detail.zanNum}}
			</view>
			<view class="flex-item flex a-center j-center fs22 h100" style="color: #999999;">
				<image src="../../../static/business/eyes.png" class="wh40 mr10"></image>{{detail.pageView}}
			</view>
		</view>
	</page>
</template>

<script>
	import Parser from '@/components/jyf-parser/jyf-parser.vue';
	export default {
		components:{
			Parser
		},
		data() {
			return {
				detail:{}
			}
		},
		onLoad(e) {
			this.id = e.id
			this.getDetail()
		},
		methods: {
			async getDetail(){
				const res = await this.post('/wap/BusniessCollege/articleDetail',{id: this.id});
				this.detail = res.data.article
			},
			// /wap/BusniessCollege/zanHandle
			async putZan(){
				const res = await this.post('/wap/BusniessCollege/zan',{id: this.id});
				this.detail = res.data
				this.success(res,'', ()=>{
					this.getDetail()
				})
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #FFFFFF;
	}
</style>
