<template>
	<view>
		<page title="红利宝明细" @scrolltolower="loadMore('qlist')">
			<qui-list ref="qlist" getUrl="/wap/Bonus/logList" v-slot="data">
				<view class="qui-cells">
					<view class="qui-cell" v-for="(item,index) in data.list" :key="index">
						<view class="cell-bd fs28">
							<view v-if="item.type == 2">
							   转出红利宝 <text class="text-red ml20">-{{item.bonus_amount}}</text>
							</view>
							<view v-if="item.type == 1">
							   转入红利宝 <text class="text-green ml20">+{{item.bonus_amount}}</text>
							</view>
							<view v-if="item.type == 3">
							   收益入账 <text class="text-green ml20">+{{item.bonus_amount}}</text>
							</view>
						</view>
						<view class="text-muted fs24">
							{{item.created_at}}
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
