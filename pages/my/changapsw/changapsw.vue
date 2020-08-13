<template>
	<view>
		<u-cell-group>
			<u-field
				v-model="mobile"
				label=""
				placeholder=""
				value="18819393368"
			>
			</u-field>
			<u-field
				v-model="code"
				label=""	
				placeholder="请填写验证码"
			>
			</u-field>
			<u-field
				v-model="mobile"
				label=""
				placeholder="请填写手机号"
			>
			</u-field>
			<u-field
				v-model="code"
				label=""	
				placeholder="请填写验证码"
			>
			</u-field>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',
				code: ''
			}
		}
	}
</script>	