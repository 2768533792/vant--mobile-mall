<template>
	<div class="item_list"
		v-waterfall-lower="loadMore"
		waterfall-disabled="disabled"
		waterfall-offset="100">
		
		<form action="/search" class="fixedTop">
			<van-search 
			placeholder="请输入商品名称" 
			v-model="searchVal"
			@search="getItemList" 
			showAction />
		</form>
		
		<van-tabs @click="handleTabClick">
			<van-tab 
				v-for="tab in tabsItem"
			 	:title="tab.name" 
				:key="tab.type" 
				:disabled="tabDisabled">
			</van-tab>
		</van-tabs>
		
		<van-popup 
			class="filterItem"
			v-model="filterItemShow" 
			position="right" 
		>
			<ul>
				<li 
					v-for="(li, i) in filterItem" 
					@click="filterMethod(i)" 
					:class="{filter_active: li.isActive}">
						{{li.name}}
					<van-icon name="success" v-show="li.isActive" class="float-r" />
				</li>
			</ul>
		</van-popup>
		
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
				@click="itemClick(i)"
			 />
		</item-group>
		
		<van-loading 
			type="gradient-circle" 
			color="black" 
			class="items_loading" 
			v-show="isLoading"
		/>
		
		<is-empty v-model="isEmpty">抱歉,没有找到符合条件商品</is-empty>
		
		<van-popup 
			v-model="noMore" 
			position="bottom" 
			:overlay="false"
		>没有更多了</van-popup>
		
		<transition name="fade">
			<van-icon name="arrowupcircle" class="backTop" @click.native="backTop" v-show="showArrow"></van-icon>
		</transition>
	</div>
</template>

<script>
	import ItemGroup from "@/vue/components/ItemGroup/";
	import IsEmpty from "@/vue/components/IsEmpty/";
	import ItemCardHori from '@/vue/components/ItemCardHori/';
	import { Search, Loading, Popup, Tab, Tabs } from 'vant';
	import mixin from '@/vue/mixin/noMore';
	import util from "@/assets/js/util";
	export default {
		name: "Item-list",
		props: {
			keyword: {
				type: String,
				default: ""
			},
			itemClass: {
				type: [String, Number],
				default: 0
			}
		},
		
		mixins: [mixin],
		
		data(){
			return {
				tabDisabled: false,
				tabsItem: [
					{name: "默认", type: 10},
					{name: "销量", type: 20},
					{name: "最新", type: 30},
					{name: "筛选", type: 40}
				],
				tabActiveVal: 10,
				filterItem: [{
					name: "全部",
					filterType: 50,
					isActive: true,
				},{
					name: "店铺商品",
					filterType: 60,
					isActive: false,
				},{
					name: "海淘商品",
					filterType: 70,
					isActive: false,
				}],
				searchVal: "",
				items: [],
				filterItemShow: false,
				showArrow: false
			}
		},
		
		activated(){
//			this.items = [];
			this.searchVal = this.keyword;
//			this.getItemList();
		},
		
		created(){
			this.getItemList = util.debounce(this.getItemList, 200);
			this.getItemList();
		},
		
		mounted(){
			let app = document.getElementById('app')
			app.addEventListener("scroll", util.throttle(() => {
					this.showArrow = app.scrollTop > 120
			}, 100))
		},
		
		methods:{
			getItemList(loadMore = false){
				this.toggle(true);
				console.log(this.tabActiveVal, this.itemClass, this.pages.currPage);
				setTimeout(() => {
					this.pages.currPage += 1;
					this.items = !loadMore ? new Array(1) : [...this.items, ...new Array(2)];
					this.toggle(false);
					this.$nextTick(this.isNotPage);
				}, 1000);
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
			handleTabClick(index){
				if(index === 3){
					this.filterItemShow = true;
				}else{
					this.tabActiveVal = this.tabsItem[index].type
					this.getItemList();
					this.clearItem()
				}
			},
			filterMethod(i){
				this.clearItem();
				this.filterItem = this.filterItem.map( (item, index) => {
					item.isActive = i === index
					return item
				})
				this.filterItemShow = false;
				this.tabActiveVal = this.filterItem[i].filterType;
				this.getItemList();
			},
			clearItem(){
				this.items = [];
				this.pages.currPage = 1;
			},
			backTop(){
				document.getElementById('app').scrollTop = 0;
			},
			itemClick(i){
				this.$router.push({name: "detail", params: {itemId: i}})
			},
		},
		
		components:{
			[ItemGroup.name]: ItemGroup,
			[ItemCardHori.name]: ItemCardHori,
			[Tab.name]: Tab,
			[Tabs.name]: Tabs,
			[Search.name]: Search,
			[Loading.name]: Loading,
			[Popup.name]: Popup,
			[IsEmpty.name]: IsEmpty,
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../assets/scss/var";
	
	.fade-enter,
	.fade-leave-to{
		opacity: 0;
	}
	
	.fade-enter-active,
	.fade-leave-active,{
		transition:  all .5s;
	}
	
	
	.item_list{
		background-color: #fff;
		padding-top: 50px;
		box-sizing: border-box;
	}
	.fixedTop{
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 999;
	}
	
	.items_loading{
		margin: 0 auto;
	}
	.filterItem{
		width: 40%;
		height: 100%;
		li{
			padding: 10px;
			&.filter_active{
				color: $red;
			}
		}
	}
	.backTop{
		position: fixed;
		right: 20px;
		bottom: 20px;
		font-size: 24px;
	}
</style>
