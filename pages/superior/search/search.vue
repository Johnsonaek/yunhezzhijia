<template>
	<page :headbor="false">
		<view slot="top" class="flex plr24 ptb24 a-center">
			<view class="mr30 cuIcon-back" @click="goBack"></view>
			<view class="flex-item radius30 flex a-center pl20" style="background-color: #dadada; height: 54rpx;">
				<text class="cuIcon-search mr20"></text>
				<input confirm-type="search" v-model="keyw" @confirm="search" class="fs28" type="text" value="" placeholder="请输入搜索内容" />
			</view>
			<view class="fs24 ml30" @click="goBack()">
				取消
			</view>
		</view>
		
		<view v-if="keyWord.length>0" class="plr24 ptb24 ">
			<view class="flex a-center">
				<view class="flex-item fs30 fw600">
					历史搜索
				</view>
				<view class="cuIcon-delete fs30"></view>
			</view>
			<view class="flex mt30" style="flex-wrap: wrap;">
				<view v-for="(item,index) in keyWord" :key="index" class="ptb5 plr20 radius30 fs24 mr20 mb20" style="background-color: #DADADA;">
					{{item.name}}
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
				<view @click="quickSearch(item.name)" v-for="(item,index) in hotkeyWord" :key="index" class="ptb5 plr20 radius30 fs24 mr20 mb20" style="background-color: #DADADA;">
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
				keyw:'',
				hotkeyWord: [],
				keyWord:[]
			}
		},
		onLoad() {
			this.isLogin(false);
			this.getHotKeyWord()
			this.getkeyWord()
		},
		methods: {
		
			quickSearch(key) {
				uni.navigateTo({
					url: '/pages/superior/search/search-result/search-result?key='+key
				})
				console.log(key)
			},
			// 热搜
			async getHotKeyWord(){
				const res = await this.post('/wap/Bases/KeywordList')
				if(res.code == 200){
					this.hotkeyWord = res.data.list
				}
			},
			// 历史
			async getkeyWord() {
				const res = await this.post('/wap/Cis/KeywordList')
				if(res.code == 200){
					this.keyWord = res.data.keyword
				}
			},
			search(e){
				if(e.detail.value == '') {
					uni.showToast({
						title: '请输入搜索关键词',
						icon: 'none'
					})
					return
				}
				console.log(e.detail.value)
				this.quickSearch(e.detail.value)
			}
		}
	}
</script>

<style>

</style>
