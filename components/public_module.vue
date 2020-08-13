<template>
	<view>
		<!-- 加载动画组件 -->
		<z-loading></z-loading>
		
		<!-- #ifdef MP-WEIXIN -->
		<!-- 小程序登录弹窗组件 -->
		
		<!-- #endif -->
	</view>
</template>

<script>
	import zLoading  from "@/components/loading.vue"
	export default {
		components:{
			zLoading
		}
	};
</script>
<style lang="scss" scoped>

</style>
