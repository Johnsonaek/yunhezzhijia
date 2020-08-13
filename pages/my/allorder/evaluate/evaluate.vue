<template>
	<view>
		<page title="商品评价" bgClass="bg-white">
			<view class="qui-cells">
				<view class="qui-cell">
					<view class="w100 mr20">评分</view>
					<view class="cell-bd"><sx-rate :value.sync="form.level"></sx-rate></view>
				</view>
			</view>
			
			<view class="qui-grids column3 gutter10 plr10">
				
				<view v-for="(item, index) in tags" :key="index" class="qui-grid">
					<view @click="clickItem(index)" class="qui-btn small" :class="item.check?'bg-theme outline':'bg-white'">
						<text>{{item.name}}</text>
					</view>
				</view>
				
			</view>
			<view class="qui-cells">
				<view class="qui-cell flex-start">
					
					<view class="cell-bd">
						<view class="w160 mr20 mb20">评价内容</view>
						<view class="bg-gray-muted plr20 ptb20 radius12">
							<textarea v-model="form.content" style="width: 100%; height: 100rpx;" value="" placeholder="请填写评价内容" />
						</view>
					</view>
				</view>
			</view>
	
			<view class="h100"></view>
			<view class="plr100"><view @click="submit" class="qui-btn round">发布</view></view>
		</page>
	</view>
</template>

<script>
import sxRate from '@/components/sx-rate/index.vue';
import quiRadioGroup from '@/components/radio-group.vue';
export default {
	components: {
		sxRate,
		quiRadioGroup
	},
	data() {
		return {
			tags: [],
			form: {
				order_id:0,
				level: 4,
				line_comment_tags_id: '1',
				content: ''
			},
			tagIds: []
		};
	},
	onLoad(e) {
		this.form.order_id = e.id
		this.getTags()
	},
	computed:{
		ids() {
			let str = ''
			
			let arr = this.tags.filter(v => {
				if(v.check) {
					// console.log(v.id)
					return v
				}
			})
			
			
			return arr.map(v => {
				return v.id
			}).join(',')
		}
	},
	methods: {
		clickItem(index) {
			this.tags[index].check = !this.tags[index].check;
		},
		async getTags() {
			const res = await this.post('/wap/LineOrder/commentTagsList')
			this.tags = res.data.list.map(v=> {
				return {
					id: v.id,
					name: v.name,
					check: false
				}
			})
			console.log(this.tags)
		},
		submit() {
			this.form.line_comment_tags_id = this.ids
			this.comment()
		},
		async comment() {
			const res = await this.post('/wap/LineOrder/orderComment', this.form)
			this.success(res, '评价成功', ()=>{
				setTimeout(()=>{
					uni.navigateBack({
						delta:1
					})
				},600)
			})
		}
	}
};
</script>

<style>
	.active{
		border-color: 1px solid red !important;
	}
</style>
