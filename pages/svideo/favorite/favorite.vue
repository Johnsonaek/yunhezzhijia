<template>
	<view>
		<page title="我的收藏" @scrolltolower="loadMore('getList')">
			<qui-list ref="getList"  :otherParams="otherParams" :autoLoad="false"  getUrl="/wap/Coalition/CollectionList" v-slot="data">
				<view class="qui-cells qui-card shadow" v-for="(item,index) in data.list" :key="index">
					<view class="qui-cell">
						<view class="mr24">
							<q-image :lazyLoad="false" :isRatio="false" :imgwh="[260,260]" src="/static/images/default-tx.png"></q-image>
						</view>
						<view class="cell-bd">
							<view class="fs30 line2">月光石花花耳圈，银针防过 敏耳环</view>
							<view class="fs24 text-gray mt20">淘宝</view>
							<view class="mt20">
								<text class="bg-red plr10 ptb5 fs24 mr20">分享赚￥2.4</text><text class="bg-yellow plr10 ptb5 fs24">分享赚￥2.4</text>
							</view>
							<view class="flex a-center mt20">
								<view class="flex-item">
									<text class="text-red">￥29.9</text> ￥30.0
								</view>
								<view class="text-gray fs24">已售525</view>
							</view>
						</view>
					</view>
				</view>
			</qui-list>
			
			
		</page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				otherParams: {
					type:1,
				}
			}
		},
		onLoad() {
			
		},
		mounted() {
		    this.$refs.getList.getListInit()
		},
		methods: {
			loadData() {
				this.$refs.getList.getListInit()
			}
		}
	}
</script>

<style>

</style>
