<template>
	<div class="item_search">
		<form action="/search">
			<van-search placeholder="请输入商品名称" v-model="keyword" @search="enterSearch" autofocus/>
		</form>
		<div class="item_search_content">
			<div class="item_search_text clearfix">
				<div class="float-l">历史搜索</div>
				<div class="float-r" @click="clearHistory"><van-icon name="lajitong" style="font-size: 12px;margin-right: 3px" />清空历史记录</div>
			</div>
			<div class="item_search_history">
				<word-tag v-for="(his, i) in wordHistory" :key="i" @click="toSearchResult(his)">{{his}}</word-tag>
			</div>
		</div>
	</div>	
</template>

<script>
	import { Search } from 'vant';
	import SrarchTag from './search-tag';
	export default {
		data(){
			return {
				keyword: "",
				focusStatus: true,
				wordHistory: []
			}
		},
		methods:{
			enterSearch(){
				const keyword = this.keyword;
				this.pushHistoryTolocal(keyword);
				this.toSearchResult(keyword);
			},
			toSearchResult(word){
				this.keyword = word;
				this.$router.push({name: "list", query: {keyword: word, itemClass: 0}})
			},
			pushHistoryTolocal(keyword){
				let wordHistory = this.wordHistory;
				let historyKeyWord = this.getKeyWordHistory();
				if(historyKeyWord.indexOf(keyword) < 0){
					wordHistory.push(keyword);
					localStorage.setItem("keyword", wordHistory.join(","));
				}
			},
			getKeyWordHistory(){
				return localStorage.getItem("keyword") || ""
			},
			clearHistory(){
				localStorage.setItem("keyword", "");
				this.wordHistory = [];
			},
		},
		activated(){
			const wordHistory = this.getKeyWordHistory();
			this.wordHistory = wordHistory ? wordHistory.split(",") : [];
		},
		components: {
			[Search.name]: Search,
			[SrarchTag.name]: SrarchTag,
		}
	}
</script>


<style lang="scss" scoped>
	@import "../../../assets/scss/var";
	.item_search{
		background-color: #fff;
	}
	.item_search_content{
		padding: 15px 10px 0;
	}
	.item_search_text{
		font-size: $font-size-normal;
		color: $font-color-gray;
		margin-bottom: 20px;
	}
	
	.item_search_history > span{
		margin-right: 10px;
		margin-bottom: 10px;
	}
</style>