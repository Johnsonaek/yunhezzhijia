<template>
	<page title="联系我们">
		<view class="">
			<q-image :lazyLoad="false" :isRatio="true" :imgwh="[750,375]" :src="info.banner"></q-image>
			<!-- <image :src="info.banner" class="plr20" mode="widthFix" style="width: 100%; margin-bottom: 50px;"></image> -->
			<view class="flex a-center j-center fs30 mt30">方法一：复制微信号添加客服微信</view>
			<view class="flex a-center j-center mb50 mt30">
				<view class="flex a-center w400 h80 plr20" style="border: 2px solid #FCE1E4; border-radius: 30px;">
					<image src="/static/business/share/share1.png" class="wh40 mr20"></image>
					<text class="flex-item">{{info.weixin}}</text>
					<image @click="paste(info.weixin)" src="/static/business/copy2.png" class="wh40 ml20"></image>
				</view>
			</view>
			<view class="flex a-center j-center mb30">方法二：长按保存二维码添加客服微信</view>
			<view class="flex a-center j-center">
				<view  class="flex a-center j-center wh400 radius10 plr20 ptb20"  style="border: 4px solid #FCE1E4;">
					<image @longtap="saveImgToLocal" :src="info.weixinQrcode" mode="widthFix" style="width: 100%;"></image>
				</view>
			</view>
			<view class="h30">
				
			</view>
		</view>
	</page>
</template>

<script>
	import '@/utils/ican-H5Api.js';
	export default {
		data() {
			return {
				info: {}
			}
		},
		onLoad() {
			this.getContactUs()
		},
		methods: {
			async getContactUs() {
				const res = await this.post('/wap/Setting/contactUs')
				this.info = res.data
			},
			paste(value) {
				uni.setClipboardData({
					data: value,
					success() {
						uni.showToast({
							title: '复制成功'
						})
					}
				});
			},
			saveImgToLocal: function(e) {
			   let me = this;
			   uni.showModal({
			    title: '提示',
			    content: '确定保存到相册吗',
			    success: function(res) {
			     if (res.confirm) {
			      uni.downloadFile({
			       url: me.kf.kf_img, //图片地址
			       success: res => {
			        if (res.statusCode === 200) {
			         uni.saveImageToPhotosAlbum({
			          filePath: res.tempFilePath,
			          success: function() {
			           uni.showToast({
			            title: '保存成功',
			            icon: 'none'
			           });
			          },
			          fail: function() {
			           uni.showToast({
			            title: '保存失败',
			            icon: 'none'
			           });
			          }
			         });
			        }
			       }
			      });
			     } else if (res.cancel) {
			     }
			    }
			   });
			  }
		}
	}
</script>

<style scoped>
	page{
		background-color: #FFFFFF;
	}
</style>
