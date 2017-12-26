<template>
	<div class="tab_home">
		<sign-board 
			:boardUrl="shopInfo.banner"
			:storeName="shopInfo.shop_name"/>
			
		<shop-info-group 
			class="interval_bot"
			:address="shopInfo.address"
			:mobile="shopInfo.contact"/>
		
		<item-group
			class="interval_bot"
			title="明星商品1"
			titleDesc="分享购买得金豆"
			icon="n4"
			banner="https://mm-test.oss-cn-shanghai.aliyuncs.com/20171026/dsP6fXQ82Y.jpg"
			:item-len="mingxing.items.length"
			>
			<item-card-vert
				v-for="(it, i) in mingxing.items" 
				item-img-desc="我收藏过"
				item-img="http://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
				price="12314"
				item-type="海淘"
				:key="i"
			></item-card-vert>
		</item-group>
		
		<item-group
			class="interval_bot"
			title="店家推荐"
			icon="good"
			banner="https://mm-test.oss-cn-shanghai.aliyuncs.com/20171026/dsP6fXQ82Y.jpg"
			layout="V"
			:item-len="mingxing.items.length"
			>
			<item-card-hori
				v-for="(it, i) in mingxing.items" 
				item-img-desc="我收藏过"
				item-img="http://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
				price="12314"
				marketPrice="122"
				:key="i"
				item-type="海淘"
			 />
		</item-group>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'vant';
	import SignBoard from "./tabbar-home-sign-board";
	import ShopInfoGroup from "./tabbar-home-shop-info";
	import ItemGroup from "@/vue/components/ItemGroup/";
	
	import ItemCardVert from '@/vue/components/ItemCardVert/';
	import ItemCardHori from '@/vue/components/ItemCardHori/';
	
	export default {
		data(){
			return {
				shopInfo: {
					shop_name: "乐宝妈咪馆",
					banner: "http://mm-test.img-cn-shanghai.aliyuncs.com/shop/448929/RmHJ6XZyT8.jpg",
					address: "文一路花蒋路交叉口",
					contact: "13454193338"
				},
				mingxing: {
					items: new Array(8)
				}
			}
		},
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[SignBoard.name]: SignBoard,
			[ShopInfoGroup.name]: ShopInfoGroup,
			[ItemGroup.name]: ItemGroup,
			[ItemCardVert.name]: ItemCardVert,
			[ItemCardHori.name]: ItemCardHori,
		}
	}
</script>


<style lang="scss" scoped>
	@import "../../assets/scss/var";
	.interval_bot{
		margin-bottom: 10px;
	}
	
</style>