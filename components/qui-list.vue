<template>
	<view>
		<empty v-if="list.length === 0 && loaded"></empty>
		<view class="loading ptb30" v-if="!loaded"></view>
		<slot :list="list"></slot>
		<loading-more nomore-text="我是有底线的" :nomore="nomore" :list="list"></loading-more>
	</view>
</template>

<script>
export default {
	props: {
		getUrl: {
			type: String,
			default: ''
		},
		listName: {
			type: String,
			default: 'list'
		},
		autoLoad: {
			type: Boolean,
			default: true
		},
		otherParams: {
			type: Object
		},
		pageSize: {
			type: Number,
			default: 10
		}
	},
	data() {
		return {
			min_id: 0,
			list: [],
			loaded: false,
			currentPage: 0,
			nomore: false,
			totalCount: 0,
			// autoLoad: true,
			otherData: null,
			params: {
				currentPage: 1,
				pageSize: this.pageSize
			}
		};
	},
	created() {
		if(this.autoLoad) {
			this.getListInit()
		}
	},
	methods: {
		Scrolltolower() {
			this.loadMore();
		},
		loadMore() {
			this.params.currentPage++;

			if (this.params.currentPage >= this.totalCount) {
				this.nomore = true;
				return;
			}
			this.getList();
		},
		getListInit() {
			this.list = [];
			this.currentPage = 0;
			this.getList();
		},
		getListResult(items) {
			this.list = [...this.list, ...items];
		},
		getOther(otherData) {
			this.otherData = otherData;
		},
		async getList() {
			console.log(this.otherParams)
			console.log(this.getUrl)
			if (this.getUrl === '') return;
			this.loaded = false;
			try {
				let res = await this.post(this.getUrl, {...this.params,...this.otherParams});
				this.totalCount = res.data.pageCount;
				this.min_id = res.min_id
				//this.list = [...this.list, ...res.result.items]
				this.getListResult(res.data[this.listName]);

				this.loaded = true;
			} catch (e) {
				//TODO handle the exception
			}
		}
	}
};
</script>

<style></style>
