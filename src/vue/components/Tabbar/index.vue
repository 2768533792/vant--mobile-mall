<template>
	<van-tabbar v-model="active" style="z-index: 9999">
		<van-tabbar-item 
			v-for="(tab, index) in tabbar" 
			:icon="tab.icon" 
			:to="tab.path"
			:dot="tab.dot"
			:info="tab.info"
			:key="index">
			{{tab.name}}
		</van-tabbar-item>
	</van-tabbar>	
</template>


<script>
	import { Tabbar, TabbarItem } from 'vant';
	export default {
		data() {
			return {
				active: 0,
				tabbar: [{
						name: "精选",
						path: "/",
						pathName: "home",
						icon: "compass-full",
						dot: false,
						info: ""
					},
					{
						name: "分类",
						path: "/items",
						pathName: "class",
						icon: "class-full",
						dot: false,
						info: ""
					},
					{
						name: "购物车",
						path: "/order",
						pathName: "cart",
						icon: "cart-full",
						dot: false,
						info: ""
					},
					{
						name: "我的",
						path: "/user",
						pathName: "user",
						icon: "wode",
						dot: false,
						info: ""
					}
				]
			}
		},
		created(){
			const toName = this.$route.name
			this.tabbar.forEach((tab, i) => {
				if(tab.pathName == toName){
					this.active = i;
					return false;
				}
			})
		},
		components:{
			 [Tabbar.name]: Tabbar,
			 [TabbarItem.name]: TabbarItem,
		}
	}

</script>
