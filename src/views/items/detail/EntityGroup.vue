<template>
	<div class="item_cell_group">
		<van-cell-group>
			<van-cell title="选择规格" isLink :value="skuComb.sku_str" @click.native="skuClick" />
			<van-cell title="商品属性" isLink @click.native="showPopup = true" />
			<van-cell title="配送至" isLink :value="addressVal.area_name"  @click.native="addressPopup = true" />
		</van-cell-group>
		
		<van-sku
			v-model="showSku"
			:showAddCartBtn="showAddCartBtn"
			:buyText="buyText"
			:sku="sku.sku"
			:goods="sku.goods_info"
			:goodsId="sku.goods_id"
			:disableStepperInput="true"
			@buy-clicked="buyGoods"
		/>
		
		<van-popup v-model="showPopup"  position="bottom">
			<div class="popup_wrap">
				<van-icon name="clear" class="cancel_popup" @click.native="showPopup = false"></van-icon>
				<div class="popup_header">商品属性</div>
				<div class="popup_content">
					<van-cell-group>
						<van-cell>
							<van-row>
								<van-col span="8">产地</van-col>
								<van-col span="16">新西兰新西兰新西兰新西兰新西兰</van-col>
							</van-row>
						</van-cell>
						<van-cell>
							<van-row>
								<van-col span="8">生产产日产日日期</van-col>
								<van-col span="16">新西兰新西兰新兰</van-col>
							</van-row>
						</van-cell>
						<van-cell>
							<van-row>
								<van-col span="8">产地</van-col>
								<van-col span="16">新西兰新西兰新西兰新西兰新西兰</van-col>
							</van-row>
						</van-cell>
					</van-cell-group>
				</div>
			</div>
		</van-popup>
		
		<van-popup v-model="addressPopup" position="bottom">
			<div class="popup_wrap address_wrap">
				<van-icon name="clear" class="cancel_popup" @click.native="addressPopup = false"></van-icon>
				<div class="popup_header">配送至</div>
				<div class="popup_content">
					<div>
						<van-tag plain type="danger" style="margin-right: 5px;">默认</van-tag>
						浙江省杭州市西湖区紫荆花路马家坞交叉口月桂花园4单元5楼501室
						<van-icon name="success" class="address_active"></van-icon>
					</div>
					<div>
						浙江省杭州市西湖区紫荆花路马家坞交叉口月桂花园4单元5楼501室
						<van-icon name="success"></van-icon>
					</div>
					<div>
						浙江省杭州市西湖区紫荆花路马家坞交叉口月桂花园4单元5楼501室
						<van-icon name="success"></van-icon>
					</div>
					<div>
						浙江省杭州市西湖区紫荆花路马家坞交叉口月桂花园4单元5楼501室
						<van-icon name="success"></van-icon>
					</div>
				</div>
				<div class="popup_footer">
					<van-cell-group>
						<van-cell is-link title="其他区域" @click.native="areaChoose"></van-cell>
					</van-cell-group>
				</div>
			</div>
		</van-popup>
		
		<van-popup v-model="areaPopup" position="bottom">
			<van-area :areaList="areaList" @confirm="areaConfirm" @cancel="areaCanccel" />
		</van-popup>
		
	</div>
</template>

<script>
	import sku from "./sku";
	import actionMixin from "@/vue/mixin/goodsAction";
	import {Col, Row, NavBar, Area } from "vant";
	import areaList from './area.json';
	export default{
		name: "entity-group",
		
		props: {
			skuComb: {
      	type: Object,
      	default: () => ({})
			},
			addressVal: {
				type: Object,
				default: () => ({})
			},
			propVal: String,
		},
		mixins: [actionMixin],
		data(){
			return {
				sku,
				areaList,
				addressPopup: false,
				areaPopup: false,
			}
		},
		
		methods:{
			areaChoose(){
				this.addressPopup = false;
				this.areaPopup = true;
			},
			areaCanccel(){
				this.areaPopup = false;
			},
			areaConfirm(areaData){
				this.$emit("update:addressVal", this.analyArea(areaData));
				this.areaPopup = false;
			},
			analyArea(areaData){
				const province = areaData[0] || {}
				const city = areaData[1] || {}
				const district = areaData[2] || {}
				return {
					area_name: `${province.name}  ${city.name}  ${district.name} `,
					district: district.code,
					city: city.code,
					province: province.code
				}
			},
			addressClick(){}
		},
		
		components: {
			[Col.name]: Col,
			[Row.name]: Row,
			[Area.name]: Area,
			[NavBar.name]: NavBar,
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../assets/scss/var";
	@import "../../../assets/scss/mixin";
	.popup_wrap{
		position: relative;
		padding-bottom: 30px;
		box-sizing: border-box;
		.popup_header{
			padding: 15px 0 30px 0;
			text-align: center;
		}

		.popup_content{
			min-height: 150px;
			max-height: 400px;
			box-sizing: border-box;
			overflow-x: hidden;
			overflow-y: scroll;
			padding: 0 10px;
			line-height: 30px;
			&::-webkit-scrollbar{
				background-color: #fff;
				width: 5px;
			}
			&::-webkit-scrollbar-thumb{
				border-radius: 3px;
				background-color: #bebebe;
			}
			ol{
				padding-left: 15px;
				list-style: decimal;
			}
		}

		.cancel_popup{
			position: absolute;
			right: 15px;
			top: 15px;
			z-index: 9;
			font-size: 18px;
		}
	}
	
	.address_wrap{
		.popup_header{
			@include one-border;
			text-align: left;
			padding-bottom: 15px;
			padding-left: 10px;
			margin-bottom: 15px;
		}
		.popup_content{
			@include one-border;
			line-height: 22px;
			max-height: 300px;
			overflow-x: hidden;
			overflow-y: auto;
			>div{
				position: relative;
				margin-bottom: 10px;
				padding-right: 30px;
			}
			>div i{
				position: absolute;
				right: 0;
				top: 50%;
				transform: translate(0, -50%);
				color: #fff;
				&.address_active{
					color: $red;
				}
			}
		}
	}
</style>