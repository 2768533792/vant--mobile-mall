export default {
	data(){
		return {
			pages:{
				'per-page': 8,
				currPage: 1,
				pageCount: 1
			},
			disabled: true,
			isLoading: true,
			noMore: false,
			isEmpty: false
		}
	},
	methods: {
		isNoMore() {
			this.noMore = true;
			this.disabled = true;
			this.isLoading = false;
			setTimeout(() => {
				this.noMore = false;
			}, 1500);
		},
		toggle(isMore, isLoading) {
			if (typeof isLoading === "undefined") {
				isLoading = isMore;
			}
			this.disabled = !!isMore;
			this.isLoading = !!isLoading;
			isLoading && this.$nextTick(this.toBottom);
		},
		isNotPage(){
			if(this.$el.offsetHeight < window.innerHeight){
				this.disabled = true;
			}
		},
		toBottom() {
			this.$el.scrollTop = this.$el.scrollHeight;
		}
	}
}
