<template>
	<div class="tab_class">
		<div class="tal_class_searchBox">
			<van-search placeholder="请输入分类名称"/>
			<div class="tal_class_searchMask"  @click="$router.push({ name: 'search' })"></div>
		</div>
		<class-tree
			@navClick="changeNav"
			@classClick="toItemList"
		></class-tree>
	</div>
</template>

<script>
	import { Search } from 'vant';
	import classTree from './tabbar-class-tree';
	export default {
		data(){
			return {
				
			}
		},
		methods: {
			changeNav(i){
				console.log(i);
			},
			toItemList(id){
				this.$router.push({name: "list", query: {keyword: "", itemClass: id}})
			}
		},
		components: {
			[Search.name]: Search,
			[classTree.name]: classTree
		}
	}
</script>


<style scoped>
	.tab_class{
		background-color: #fff;
		height: 100%;
	}
	
	.tal_class_searchBox{
		position: relative;
	}
	
	.tal_class_searchMask{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9;
	}
</style>