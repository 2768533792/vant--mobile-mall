<template>
	<div class="user_collect"
		v-waterfall-lower="loadMore"
		waterfall-disabled="disabled"
		waterfall-offset="100">
		
		<form action="/search" class="fixedTop">
			<van-search 
			placeholder="请输入商品名称" 
			v-model="searchVal"
			 />
		</form>
		
		<item-group
			layout="V"
			>
			<item-card-hori
				v-for="(it, i) in items" 
				item-img-desc="我收藏过"
				item-img="http://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
				price="12314"
				marketPrice="122"
				:key="i"
				item-type="海淘"
			 >
			 <van-icon name="lajitong" slot="footer" style="float: right;"/>
			</item-card-hori>
		</item-group>
		
		<div class="clear_invalid" v-if="items.length" @click="clearInvalid">
			<van-icon name="lajitong"/>
			清除失效商品
		</div>
		
	</div>	
</template>

<script>
	import ItemGroup from "@/vue/components/ItemGroup/";
	import ItemCardHori from '@/vue/components/ItemCardHori/';
	import IsEmpty from "@/vue/components/IsEmpty/";
	
	import { Search, Loading } from 'vant';
	import noMore from '@/vue/mixin/load-more';
	
	export default {
		
		mixins: [noMore],
		
		data(){
			return {
				items: new Array(8),
				searchVal: ""
			}
		},
		
		methods:{
			clearInvalid(){
				console.log(1);
			},
			itemClick(i){
				this.$router.push({name: "detail", params: {itemId: i}})
			},
			loadMore() {
				var vm = this;
				if (this.pages.pageCount < this.pages.currPage) {
					this.isNoMore();
					return;
				}
				vm.toggle(true);
				this.getItemList(true);
			},
		},
		
		components:{
			[ItemGroup.name]: ItemGroup,
			[ItemCardHori.name]: ItemCardHori,
			[Search.name]: Search,
			[Loading.name]: Loading,
			[IsEmpty.name]: IsEmpty,
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../assets/scss/var";
	.clear_invalid{
		width: 120px;
		color: $font-color-gray;
		border: 1px solid $font-color-gray;
		margin: 0 auto;
		text-align: center;
		padding: 5px 3px;
		margin-top: 20px;
		border-radius: 3px;
	}
</style>