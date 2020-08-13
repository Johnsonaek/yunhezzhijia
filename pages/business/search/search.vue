<template>
	<page :headbor="false">
		
		<view slot="top" class="flex plr24 ptb24 a-center">
			<view class="mr30 cuIcon-back" @click="goBack"></view>
			<view class="flex-item radius30 flex a-center pl20" style="background-color: #dadada; height: 54rpx;">
				<text class="cuIcon-search mr20"></text>
				<input confirm-type="search" @confirm="search" class="fs28" type="text" value="" placeholder="请输入搜索内容" />
			</view>
			<view class="fs24 ml30" @click="goBack()">
				取消
			</view>
		</view>
		
		<view class="plr24 ptb24 ">
			<view class="flex a-center">
				<view class="flex-item fs30 fw600">
					历史搜索
				</view>
				<view class="cuIcon-delete fs30"></view>
			</view>
			<view class="flex mt30" style="flex-wrap: wrap;">
				<view v-for="(item,index) in 6" :key="index" class="ptb5 plr20 radius30 fs24 mr20 mb20" style="background-color: #DADADA;">
					洗衣液
				</view>
			</view>
		</view>
		<view class="plr24 ptb24 ">
			<view class="flex a-center">
				<view class="flex-item fs30 fw600">
					大家都在搜
				</view>
			</view>
			<view class="mt30 flex" style="flex-wrap: wrap;">
				<view @click="quickSearch(item.name)" v-for="(item,index) in keyWord" :key="index" class="ptb5 plr20 radius30 fs24 mr20 mb20" style="background-color: #DADADA;">
					{{item.name}}
				</view>
			</view>
		</view>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				keyWord:[]
			}
		},
		onLoad() {
			this.isLogin(false);
			this.getKeyWordList()
		},
		methods: {
			quickSearch(key) {
				console.log(key)
			},
			async getKeyWordList(){
				const res = await this.post('/wap/Bases/KeywordList')
				if(res.code == 200){
					this.keyWord = res.data.keyword
				}
			},
			search(e){
				console.log(e.detail.value)
			}
		}
	}
</script>

<style>

</style>
