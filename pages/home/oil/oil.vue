<template>
	<view>
		<page title="加油7折起"></page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		created() {
			this.reg();
		},
		methods: {
			async reg() {
				let me = this;
				const res = await this.post('/wap/Coalition/CzbSecretCode', {phone:'13212345678'});
				console.log(res)
				
				// this.success(res, '注册成功,请登录~', function() {
				// 	me.cur = 1;
				// });
			},
		}
	}
</script>

<style>

</style>
