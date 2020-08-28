export default {
	data() {
		return {
			getUrl:'',
			listName: 'list',
			list: [],
			loaded: false,
			currentPage: 0,
			nomore: false,
			totalCount: 0,
			autoLoad: true,
			otherData: null,
			params: {
				currentPage: 1,
				pageSize: 10
			},
		}
	},
	onLoad() {
		if(this.autoLoad) {
			this.getListInit()
		}
	},
	methods: {
		Scrolltolower() {
			this.loadMore()
		},
		loadMore() {
			this.params.currentPage++;
			
			if (this.params.currentPage >= this.totalCount) {
				this.nomore = true
				return
			} 
			this.getList()
		},
		getListInit(){
			this.list = [];
			this.currentPage = 0;
			this.getList()
		},
		getListResult(items){
			this.list = [...this.list, ...items]
		},
		getOther(otherData){
			this.otherData = otherData
		},
		async getList() {
			if(this.getUrl === '') return;
			this.loaded = false;
			try {
				let res = await this.post(this.getUrl, this.params)
				this.totalCount = res.data.pageCount
				//this.list = [...this.list, ...res.result.items]
				this.getListResult(res.data[this.listName])
				
				this.loaded = true;
			} catch (e) {
				//TODO handle the exception
			}
		}
	}
}