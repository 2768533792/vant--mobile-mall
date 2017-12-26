<template>
	<div class="item_detail">
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in goods.thumb" :key="index">
				<img v-lazy="image" />
			</van-swipe-item>
		</van-swipe>
		
		<van-cell-group class="item_cell_group">
      <van-cell class="item_info">
        <div>
        	<span class="item_price">{{ goods.price | yuan }}</span>
        	<span class="item_market_price">{{goods.market_price | yuan}}</span>
        </div>
        <div class="item-title">
        	<van-tag plain type="danger">海淘</van-tag>
        	{{ goods.title }}
        </div>
        <div class="item_intro">
					花王全型号特价限时抢购	花王全型号特价限时抢购花王全型号特价限时抢购	花王全型号特价限时抢购花王全型号特价限时抢购	花王全型号特价限时抢购花王全型号特价限时抢购	花王全型号特价限时抢购花王全型号特价限时抢购	花王全型号特价限时抢购
        </div>
        <div class="item_dispatch">发货地: 杭州</div>
      </van-cell>
    </van-cell-group>
		
		<component
		 	ref="goodAction"
			v-bind:is="goods.isVirtual ? 'virtual-group'  : 'entity-group'"
			:skuComb.sync="skuComb"
			:addressVal.sync="addressVal"
			:mobile="mobile"
			@skuBuy="doBuyNow"
			/>
		
		<div class="item_desc">
			<div class="item_desc_title">商品详情</div>
			<div>
				<p>sdasdsad</p>
				<img src="http://mm-test.img-cn-shanghai.aliyuncs.com/shop/448929/RmHJ6XZyT8.jpg" alt="">
			</div>
		</div>
		
		 <van-goods-action>
      <van-goods-action-mini-btn @click="doContact" icon="wangwang" iconClass="red afterTag" />
			<van-goods-action-mini-btn @click="toCart" icon="cart" :info="cartInfo"/>
      <van-goods-action-mini-btn @click="addCollect" icon="shoucang" />
      <van-goods-action-big-btn @click="addCart" text="加入购物车" />
      <van-goods-action-big-btn primary @click="doBuyNow" text="立即购买" />
    </van-goods-action>
		
		<van-popup v-model="showContact">
			<div class="contact_popup">
				<div class="contact_box contact_top">
					<div>微信长按识别店主二维码</div>
					<div><img src="../../../assets/images/qc_code.png" alt="店主二维码"></div>
				</div>
				<div class="contact_box">
					<div><van-icon name="phone"></van-icon>{{mobile}}</div>
					<div class="contact_btn"><a :href="'tel:' + mobile">联系店家</a></div>
				</div>
			</div>
		</van-popup>
		
	</div>
</template>

<script>
	import {
		Popup,
		Swipe,
		SwipeItem,
		GoodsAction,
		GoodsActionBigBtn,
		GoodsActionMiniBtn,
		Sku,
	} from 'vant';
	import sku from "./sku";
	export default {
		props: {
			itemId: [String, Number]
		},
		
		created(){
			console.log(this.itemId);
		},
		
		data() {
			return {
				showContact: false,
				cartInfo: "5",
				mobile: "13454193338",
				skuComb: {},
				addressVal: {
					area_name: "浙江省 杭州市 西湖区",
					district: "130406",
					city: "130400",
					province: "130000"
				},
				goods: {
					title: '美国伽力果（约680g/3个）',
					isVirtual: 1,
					price: 2680,
					express: '免运费',
					remain: 19,
					market_price: 4000,
					thumb: [
						'http://mm-test.img-cn-shanghai.aliyuncs.com/shop/448929/RmHJ6XZyT8.jpg',
						'http://mm-test.img-cn-shanghai.aliyuncs.com/user/327/8D28JTB6Hy.jpg',
						'http://mm-test.img-cn-shanghai.aliyuncs.com/shop/448929/RmHJ6XZyT8.jpg'
					]
				}
			}
		},
		
		methods: {
			doBuyNow(){
				if(this.skuComb.id){
					this.$dialog.confirm({ message:"您还未登录, 请先登录账号"}).then(() => {
						console.log("去登录");
					}).catch(() => {})
				}else{
					let goodAction = this.$refs.goodAction
					goodAction.showSku = true;
					goodAction.isSkuBuy = true;
				}
			},
			addCart(){
				this.$toast({
					message: "已添加至购物车",
					duration: 1500
				});
				this.cartInfo = String(parseInt(this.cartInfo) + 1);
			},
			doContact(){
				this.showContact = true;
			},
			toCart(){
				this.$router.push({name: "cart"})
			},
			addCollect(){
				this.$toast({
					message: "已添加至我的收藏",
					duration: 1500
				});
			}
		},
		
		components: {
			[Sku.name]: Sku,
			[Popup.name]: Popup,
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[GoodsAction.name]: GoodsAction,
			[GoodsActionBigBtn.name]: GoodsActionBigBtn,
			[GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
			["entity-group"]:() => import(/* webpackChunkName: "EntityGroup" */ './EntityGroup'),
			["virtual-group"]: () => import(/* webpackChunkName: "VirtualGroup" */ './VirtualGroup'),
		},
	}

</script>

<style lang="scss" scoped>
	@import "../../../assets/scss/var";
	@import "../../../assets/scss/mixin";
	.item_detail {
		img {
			width: 100%;
		}
	}
	
	.item_cell_group{
		margin-bottom: 15px;
	}
	.item_price {
		font-size: 20px;
		color: $red;
		margin-right: 10px;
	}
	.item_market_price{
		color: $font-color-gray;
		text-decoration: line-through;
		font-size: $font-size-small;
	}

	.item-title{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.item_dispatch{
		font-size: $font-size-small;
		color: $font-color-gray;
	}
	.item_intro{
		line-height: 18px;
		margin: 5px 0;
		font-size: $font-size-small;
		color: $font-color-gray;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
	}
	
	.item_desc{
		background-color: #fff;
		p{
			padding: 0 10px;
		}
		img{
			max-width: 100%;
		}
	}
	
	.item_desc_title{
		@include one-border;
		padding: 10px 0;
		text-align: center;
	}
	
	.contact_popup{
		white-space: nowrap;
		background-color: $bg-color;
		text-align: center;
		border-radius: 5px;
		.contact_box{
			padding: 20px 30px;
			>div:first-child{
				margin-bottom: 20px;
			}
		}
		.contact_top{
			@include one-border;
			&::after{
				border-bottom-color: #999;
			}
		}
		.contact_btn{
			border: 1px solid $red;
			width: 80%;
			margin: 0 auto;
			color: #fff;
			background-color: $red;
			padding: 5px 0;
			border-radius: 3px;
			a{
				color: #fff;
				display: block;
			}
		}
	}
</style>
