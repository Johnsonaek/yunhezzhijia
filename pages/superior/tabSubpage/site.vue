<template>
	<!-- 定位地址 -->
	<view>
		<citySelect @back_city="back_city"></citySelect>
	</view>
	
</template>

<script>
	import citySelect from "../../../components/linzq-citySelect/linzq-citySelect.vue"
	export default {
		components:{
			citySelect
		},
		methods:{
			back_city(item) {
				if (item) {
					this.$emit('back_city', item);
					//unshift 把数据插入到首位，与push相反
					this.Visit.unshift(item)
					this.searchValue = "";
					this.disdingwei = true
					var arr = this.Visit
					//数组去重
					function distinct(arr) {
						let newArr = []
						for (let i = 0; i < arr.length; i++) {
							if (newArr.indexOf(arr[i]) < 0) {
								newArr.push(arr[i])
							}
						}
						return newArr
					}
					this.Visit = distinct(arr)
					console.log(this.Visit, "---最近访问")
					uni.setStorage({
						key: 'Visit_key',
						data: this.Visit
					});
				} else {
					this.$emit('back_city', 'no');
				}
			
			},
		}
		}
</script>

<style>
</style>
