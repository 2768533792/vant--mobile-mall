<template>
	<div class="items_group">
		<van-cell-group v-if="!!title">
			<van-cell>
				<slot v-if="$slots.title_right" name="title_right"></slot>
				<template slot="icon">
					<van-icon v-if="icon" :name="icon"/>
				</template>
				<template slot="title">
					<span class="group_title">{{title}}</span>
					<slot name="titleDesc">
						<span class="group_title_desc">{{titleDesc}}</span>
					</slot>
				</template>
			</van-cell>
		</van-cell-group>
		
		<div class="group_banner" v-if="banner">
			<img :src="banner" alt="海报" width="100%">
		</div>
		
		<div class="item_scroll_box" v-if="layout == 'H'">
			<div class="item_scroll" v-scrollArrow="scrollMore">
				<div class="item_scroll_wrap" :style="{width: scrollWidth}">
					<slot></slot>
<!--
						<van-icon name="miaosha" style="font-size: 28px;color: #ff005e" slot="leftTopIcon" />
						<van-icon name="clear" style="font-size: 60px;color: #000; opacity: .5" slot="mask" />
-->
					
				</div>
			</div>
			
			<transition name="fade">
				<van-icon name="arrow" v-show="leftOver && isShowArrow" class="items_arrow right_arrow" />
			</transition>
			<transition name="fade">
				<van-icon name="arrow-left" v-show="rightOver && isShowArrow" class="items_arrow left_arrow" />
			</transition>
		</div>
		
		<div v-else>
			<slot></slot>
		</div>
		
	</div>
</template>
<script>
	import ItemCardVert from '@/vue/components/ItemCardVert/';
	import ItemCardHori from '@/vue/components/ItemCardHori/';
	import { Cell, CellGroup, Icon } from 'vant';
	import scrollArrow from '../_directive/scrollMore';
	import util from "@/assets/js/util";
	
	export default{
		name: "item-group",
		props: {
			titleDesc: {
				type: String,
				default: ""
			},
			title: String,
			titleColor: {
				type: String,
				default: "#000"
			},
			icon: {
				type: String,
				default: ""
			},
			banner: {
				type: String
			},
			itemLen: {
				type: Number
			},
			col: {
				type: Number,
				default: 3
			},
			layout: {
				type: String,
				default: "H"
			}
		},
		data(){
			const clientW = document.body.clientWidth || document.documentElement.clientWidth,
						col = this.col,
						itemW = Math.floor(clientW / col),
						itemsLen = this.itemLen
			return {
				itemW,
				scrollWidth: (itemW * itemsLen) + "px",
				rightOver: false,
				leftOver: true,
				isShowArrow: itemsLen > col,
			}
		},
		methods: {
			scrollMore(obj){
				this.rightOver = !obj.isLeftOver;
				this.leftOver = !obj.isRightOver;
			},
		},
		directives:{
			scrollArrow,
		},
		components: {
			[Cell.name]: Cell,
			[CellGroup.name]: CellGroup,
			[Icon.name]: Icon,
			[ItemCardVert.name]: ItemCardVert,
			[ItemCardHori.name]: ItemCardHori,
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../assets/scss/var";
	.items_group{
		background-color: #fff;
	}
	.group_title{
		font-weight: 700;
	}
	
	.group_title_desc{
		font-size: 12px;
		color: $font-color-gray;
	}
	.group_banner{
		margin-bottom: 10px;
	}
	.group_banner img{
		max-height: 200px;
		display: block;
	}
	
	.item_scroll_box{
		position: relative;
		width: 100%;
	}
	.item_scroll{
		width: 100%;
		overflow-y: hidden;
		overflow-x: scroll;
	}
	.item_scroll_wrap{
		display: flex
	}
	
	.items_arrow{
		position: absolute;
		top: 50%;
		transform: translate(0, -50%);
		font-size: 18px;
	}
	
	.left_arrow{
		left: 0;
	}
	
	.right_arrow {
		right: 0;
	}
	
	.fade-enter,.fade-leave-to{
		opacity: 0;
	}
	.fade-enter-active,
	.fade-leave-active{
		transition: all .3s;
	}
	
	.fade-enter-to,.fade-leave{
		opacity: 1;
	}
	
</style>