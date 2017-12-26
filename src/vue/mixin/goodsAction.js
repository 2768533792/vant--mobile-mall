import {
	Cell,
	CellGroup,
	Sku,
	Popup,
	Icon,
} from 'vant';
export default {
	props: {
		skuComb: Object,
	},
	data(){
		return {
			showSku: false,
			showAddCartBtn: false,
			isSkuBuy: false,
			buyText: "确定",
			goods_prop: true,
			showPopup: false
		}
	},
	methods:{
		buyGoods(data){
			this.showSku = false;
			this.$emit("update:skuComb", data.selectedSkuComb);
			this.isSkuBuy && this.$emit("skuBuy");
			this.isSkuBuy = false;
		},
		skuClick(){
			this.showSku = true;
		},
	},
	components:{
		[Cell.name]: Cell,
		[Icon.name]: Icon,
		[Sku.name]: Sku,
		[CellGroup.name]: CellGroup,
		[Popup.name]: Popup,
	}
}