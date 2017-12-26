<template>
	<div class="tabbar-user">
		<user-header />
		<order-group />
		<ecoupon-group />
		<user-module />
		<van-button  size="large" style="border: 0;border-radius: 0">退出当前账户</van-button>
	</div>
</template>

<script>
	import userHeader from "./tabbar-user-header";
	import orderGroup from "./tabbar-user-order";
	import ecouponGroup from "./tabbar-user-ecoupon";
	import userModule from "./tabbar-user-module";
	
	
	export default {
		
		data(){
			return {
				items: []
			}
		},
		
		components: {
			[userHeader.name]: userHeader,
			[orderGroup.name]: orderGroup,
			[ecouponGroup.name]: ecouponGroup,
			[userModule.name]: userModule,
		}
	}
</script>


<style scoped lang="scss">
	.tabbar-user{
		>div{
			margin-bottom: 10px;
		}
	}
</style>