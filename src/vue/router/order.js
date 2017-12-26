const tab_cart = () => import(/* webpackChunkName: "tabbar-cart" */ '@/views/order/tabbar-cart.vue');
const PlaceOrderEntity = () => import(/* webpackChunkName: "placeOrderEntity" */ '@/views/order/place-order-entity/');
const PlaceOrderVirtual = () => import(/* webpackChunkName: "placeOrderVirtual" */ '@/views/order/place-order-virtual/');
const Payment = () => import(/* webpackChunkName: "placeOrderVirtual" */ '@/views/order/payment/');
const PaymentStatus = () => import(/* webpackChunkName: "placeOrderVirtual" */ '@/views/order/payment-status/');

const Tabbar = () => import(/* webpackChunkName: "Tabbar" */ '@/vue/components/Tabbar/');

export default [{
			path: "/order",
			name: "cart",
			components: {default: tab_cart, tabbar: Tabbar }
	},{
			path: "/order/placeOrderEntity",
			name: "placeOrderEntity",
			component: PlaceOrderEntity
	},{
			path: "/order/placeOrderVirtual",
			name: "PlaceOrderVirtual",
			component: PlaceOrderVirtual
	},{
			path: "/order/payment",
			name: "payment",
			component: Payment
	},{
			path: "/order/payment/:status",
			name: "paymentStatus",
			component: PaymentStatus,
			props: true
	}]