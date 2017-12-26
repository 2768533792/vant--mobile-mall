<template>
	<div class="item_card_H_wrap one_border" v-once @click="OnClick">
		<div class="clearfix">
			<div class="item_card_image float-l">
				<div v-if="$slots.leftTopIcon" class="leftTopIcon">
					<slot name="leftTopIcon"></slot>
				</div>

				<div v-if="$slots.mask" class="item_img_mask">
					<slot name="mask"></slot>
				</div>
				<img :src="itemImg" alt="商品名称">
				<div class="item_image_desc" v-if="itemImgDesc">{{itemImgDesc}}</div>
			</div>
			
			<div class="item_card_info">
				<div class="item_card_name">
					<van-tag plain type="danger" v-if="itemType">{{itemType}}</van-tag>
					<span v-if="$slots.icon" class="item_card_icon"><slot name="icon"></slot></span>
					花王全型号特价限时抢购	花王全型号特价限时抢购
				</div>
				
				<div class="item_card_info_desc">
					花王全型号特价限时抢购	花王全型号特价限时抢购花王全型号特价限时抢购	花王全型号特价限时抢购花王全型号特价限时抢购	花王全型号特价限时抢购花王全型号特价限时抢购	花王全型号特价限时抢购花王全型号特价限时抢购	花王全型号特价限时抢购
				</div>
				
				<div class="item_card_price" v-if="price">
					<span>{{price | yuan}}</span>
					<span class="marketPrice" v-if="marketPrice">{{marketPrice | yuan}}</span>
				</div>
				
				<div class="item_cart_footer" v-if="$slots.footer">
					<slot name="footer"></slot>
				</div>
				
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		name: "item-card-hori",
		props: {
			itemType: {
				type: String,
				default: ""
			},
			itemImg: {
				type: String,
				default: ""
			},
			itemImgDesc: String,
			price: [String, Number],
			marketPrice: [String, Number],
		},
		methods:{
			OnClick(){
				this.$emit("click")
			}
		},
	}

</script>

<style lang="scss" scoped>
	@import "../../../assets/scss/var";
	.item_card_H_wrap {
		padding: 15px 10px;
	}

	
	.item_card_image {
		position: relative;
		padding-top: 5px;
		width: 90px;
		height: 90px;
		text-align: center;
		img{
			display: inline-block;
			max-height: 100%;
			max-width: 100%;
		}
		.leftTopIcon{
			position: absolute;
			left: 0;
			top: 0;
			width: 50%;
			text-align: left;
		}
		.item_image_desc{
			position: absolute;
			bottom: 0;
			background-color: rgba(244,133,145, .5);
			width: 100%;
			color: #fff;
			font-size: 12px;
		}
		.item_img_mask{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			max-width: 80%;
			max-height: 80%;
			overflow: hidden;
		}
	}
	
	.item_card_info{
		position: relative;
		margin-left: 110px;
		height: 100px;
		.item_card_name {
			font-size: 12px;
			margin-bottom: 10px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		
		.item_card_name .item_card_icon {
			width: 25px;
			height: 14px;
			vertical-align: middle;
			display: inline-block;
			background-repeat: no-repeat;
		}
		
		.isHaiTao{
			background-image: url(http://mamaqunaer.oss-cn-shanghai.aliyuncs.com/20171121/xMACDPN2Bz.png);
		}
		
		.item_card_info_desc{
			font-size: 12px;
			color: $font-color-gray;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
		}

		.item_card_icon img{
			max-height: 100%;
			max-width: 100%;
		}

		.item_card_price{
			position: absolute;
			bottom: 0;
			z-index: 1;
			color: $red;
			width: 50%;
		}
		.item_card_price .marketPrice{
			color: $font-color-gray;
			font-size: 12px;
			text-decoration: line-through;
			margin-left: 10px;
		}
		
		.item_cart_footer{
			position: absolute;
			right: 0;
			bottom: 0;
			z-index: 1;
			width: 50%;
		}
		
	}
	

</style>
