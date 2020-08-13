<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			// 获取配置
			console.log('App Launch')
			// #ifdef APP-PLUS
			plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {  
				Vue.prototype.curVersion = widgetInfo.version
			    uni.request({  
			        url: Config.http + Config.hostName +'/api/app/version',  
			        data: {  
			            version: widgetInfo.version,
			        },
					method: 'GET',
			        success: (result) => {  
			            var res = result.data;  
						console.log(res.data)
			            if (res.data.is_need_update && res.data.app_package) {  
			                uni.downloadFile({  
			                    url: res.data.app_package,  
			                    success: (downloadResult) => {  
									 // console.log(downloadResult);
								   
			                        if (downloadResult.statusCode === 200) {  
			                            plus.runtime.install(downloadResult.tempFilePath, {  
			                                force: false
			                            }, function() {  
			                                console.log('install success...');
			                                plus.runtime.restart();  
			                            }, function(e) {  
			                                console.error('install fail...');  
			                            });  
			                        }  
			                    }  
			                });  
			            }  
			        },
					fail(res) {
						console.log('fail')
					}
			    });  
			});  
			// #endif

			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif

					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif

					// 手机品牌
					let modelmes = e.model;
					// console.log(modelmes)
					// 如果是 X,XS,XR,XS MAX 均可适配
					if (modelmes.indexOf('iPhone X') != -1) {
						Vue.prototype.IpxBottom = '64rpx'
					} else {
						Vue.prototype.IpxBottom = '0rpx'
					}
				}
			})
		},
		onShow: async function() {
			
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* #ifndef APP-PLUS-NVUE */
	   @import "/common/styles/main.css";
	   @import "/common/styles/icon.css";
	   @import "/common/styles/qui.scss";
	/* #endif */
	
	/* #ifdef APP-PLUS-NVUE */
	   @import "/common/styles/qui_weex.scss";
	/* #endif */
	
	
	/* #ifndef APP-PLUS-NVUE */
	.teamfs_bg{
		background-image:linear-gradient(90deg, #484848 , #18191E);
		color: #FFFFFF !important;
	}
	.titlebgMain{
		background-image: linear-gradient(45deg,#f82840, #fb3c76);
		color: #FFFFFF !important;
	}
	.scb{
		position: relative;
		&::before,&::after{
			position: absolute;
			content: "";
			width: 18rpx;
			height: 18rpx;
			background-color: #ffffff;
			border-radius: 50%;
			transform: translateY(-50%);
			top: 50%;
		}
		&::before{
			left: -10rpx;
		}
		&::after{
			right: -10rpx;
		}
	}
	.filter-nav {
		color: var(--grayColor);
		font-size: 28rpx;
	
		.arrow {
			display: inline-block;
			position: relative;
			padding-right: 36rpx;
	
			&::before {
				color: var(--grayColor);
				font-size: 40rpx;
				line-height: 1em;
				font-family: 'cuIcon';
				position: absolute;
				content: '\e79c';
				right: 0;
				top: -4rpx;
			}
	
			&::after {
				color: var(--grayColor);
				font-size: 40rpx;
				line-height: 1em;
				font-family: 'cuIcon';
				position: absolute;
				content: '\e79b';
				right: 0;
				bottom: -10rpx;
			}
		}
	
		.active {
			color: var(--defaultTextColor);
			font-weight: 600;
			line-height: 1.4em;
		}
	
		.up.arrow {
			&::before {
				color: var(--defaultTextColor);
			}
		}
	
		.down.arrow {
			&::after {
				color: var(--defaultTextColor);
			}
		}
	}
	
	/* #endif */
</style>
