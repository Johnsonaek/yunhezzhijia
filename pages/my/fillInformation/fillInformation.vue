<template>
	<view>
		<view class="mb5" style="position: relative;">
			<view class="arrow-l"></view>
			<view class="flex a-center j-center h100 bg-white fw600">填写信息</view>
			<view class="refresh">
				<image src="../../../static/business/refresh.png" class="wh50"></image>
			</view>
		</view>
		<view class="flex a-center h80 fs30 fw600 plr20">
			企业信息<text class="fs24 fw300" style="color: #999999;">（按照证书上的内容逐字填写）</text>
		</view>
		<view class="bg-white plr20">
			<view class="flex a-center h80" style="border-bottom: 1px solid #f3f3f3;">
				<text class="w200 fs26">公司名称</text>
				<input class="flex-item fs26" type="text" value="" placeholder="请填写公司名称" />
			</view>
			<view class="flex a-center h80">
				<text class="w200 fs26">社会信用代码</text>
				<input class="flex-item fs26" type="text" value="" placeholder="输入统一社会信用代码" />
			</view>
		</view>
		<view class="flex a-center h80 fs30 fw600 plr20">法人代表信息</view>
		<view class="bg-white plr20">
			<view class="flex a-center h80" style="border-bottom: 1px solid #f3f3f3;">
				<text class="w200 fs26">法人代表姓名</text>
				<input class="flex-item fs26" type="text" value="" placeholder="填写法人代表姓名" />
			</view>
			<view class="flex a-center h80">
				<text class="w200 fs26">身份证号码</text>
				<input class="flex-item fs26" type="text" value="" placeholder="输入身份证号码" />
			</view>
		</view>
		<view class="flex a-center h80 fs30 fw600 plr20">企业营业执照</view>
		<view class="bg-white plr20">
			<view class="flex a-center h80 fs26">营业执照</view>
			<view class="ptb20">
				<view class="flex a-center j-center mb20">
					<image src="../../../static/business/rangking/v2_qaxhld.jpg" class="wh300 radius10"></image>
				</view>
				<view class="flex a-center j-center">
					<text class="w120 h40 fs24 flex a-center j-center" style="background-color: #E6E5E5;">查看样图</text>
				</view>
			</view>
		</view>
		<view class="flex a-center h80 fs30 fw600 plr20">法人代表证件照片</view>
		<view class="bg-white plr20">
			<view class="flex a-center h80 fs26" style="border-bottom: 1px solid #f3f3f3;">证件类型：二代身份证</view>
			<view class="flex a-center h80 fs26">证件正面</view>
			<view class="pt20 pb40" style="border-bottom: 1px solid #f3f3f3;">
				<view class="flex a-center j-center mb20">
					<view class="flex a-center j-center wh150 radius10" style="border: 2px dashed #E6E5E5; color: #E6E5E5; font-size: 50px;">+</view>
				</view>
				<view class="flex a-center j-center">
					<text class="w120 h40 fs24 flex a-center j-center" style="background-color: #E6E5E5;">查看样图</text>
				</view>
			</view>
			<view class="flex a-center h80 fs26">证件反面</view>
			<view class="pt20 pb40" style="border-bottom: 1px solid #f3f3f3;"  @tap="openFile">
				<view class="flex a-center j-center mb20">
					<view class="flex a-center j-center wh150 radius10" style="border: 2px dashed #E6E5E5; color: #E6E5E5; font-size: 50px;">+</view>
				</view>
				<view class="flex a-center j-center">
					<text class="w120 h40 fs24 flex a-center j-center" style="background-color: #E6E5E5;">查看样图</text>
				</view>
			</view>
			<view class="flex a-center h80">
				<text class="w200 fs26">联系地址</text>
				<input class="flex-item fs26" type="text" value="" placeholder="输入详细商家地址" />
				<view class="wh30">
					<image src="../../../static/business/arrow-l-b.png" class="wh30"></image>
				</view>
			</view>
		</view>
		<view class="flex a-center j-center ptb50">
			<text class="flex a-center j-center h80 text-white fs28" style="width: 80%; background-color: #F82840; border-radius: 30px;">下一步</text>
		</view>
		<view class="flex a-center j-center " v-if="fileImg" style="position: fixed; left: 0; top: 0; width: 100%; height: 100%; z-index: 99;">
			<view @tap="closeFile" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index: 10; background-color: rgba(0,0,0,.5);"></view>
			<view class="bg-white plr30 pt30 radius10" style="z-index: 20;width: 80%;">
				<view class="flex a-center j-center mb30">
					<image src="../../../static/business/rangking/v2_qaxhld.jpg" class="wh400"></image>
				</view>
				<text class="flex a-center j-center fs24 mb20" style="color: #666666;">提示：证件上文字清晰可识别</text>
				<text class="flex a-center j-center fs30 h100 fw600" @tap="closeFile">确定</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileImg:false,
			}
		},
		methods: {
			openFile(){
				this.fileImg = true
			},
			closeFile(){
				this.fileImg = false
			}
		}
	}
</script>

<style scoped>
	.arrow-l{
		position: absolute;
		left: 20rpx;
		top: 50%;
		transform: rotateZ(45deg) translateY(-50%);
		border: 2px solid #444444;
		border-top: 0;
		border-right: 0;
		width: 20rpx;
		height: 20rpx;
		z-index: 999;
	}
	.refresh{
		position: absolute;
		right: 20rpx;
		top: 50%;
		z-index: 999;
		transform: translateY(-50%);
	}
</style>
