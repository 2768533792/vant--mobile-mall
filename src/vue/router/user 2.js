const tab_user = () => import(/* webpackChunkName: "tabbar-user" */ '@/views/user/tabbar-user');
const UserCollect = () => import(/* webpackChunkName: "UserCollect" */ '@/views/user/module-collect/');
const UserTeam = () => import(/* webpackChunkName: "UserTeam" */ '@/views/user/module-team/');
const UserInvitation = () => import(/* webpackChunkName: "UserInvitation" */ '@/views/user/module-invitation/');
const UserAddress = () => import(/* webpackChunkName: "UserAddress" */ '@/views/user/module-address/');
const UserAddressEdit = () => import(/* webpackChunkName: "UserAddressEdit" */ '@/views/user/module-address-edit/');
const UserAutonym = () => import(/* webpackChunkName: "UserAutonym" */ '@/views/user/module-autonym/');
const UserAutonymEdit = () => import(/* webpackChunkName: "UserAutonymEdit" */ '@/views/user/module-autonym-edit/');
const UserServer = () => import(/* webpackChunkName: "user-server" */ '@/views/user/module-server/');
const UserServerProblem= () => import(/* webpackChunkName: "user-server-problem" */ '@/views/user/module-server/problem/');
const UserServerFeedback= () => import(/* webpackChunkName: "user-server-feedback" */ '@/views/user/module-server/feedback/');

const UserInformation = () => import(/* webpackChunkName: "UserInformation" */ '@/views/user/user-information-set/');
const UserInfo_SetBg = () => import(/* webpackChunkName: "UserInfo_SetBg" */ '@/views/user/user-information-set/set-bg/');
const UserInfo_SetMobile = () => import(/* webpackChunkName: "UserInfo_SetMobile" */ '@/views/user/user-information-set/set-mobile/');
const UserInfo_SetNickname = () => import(/* webpackChunkName: "UserInfo_SetNickname" */ '@/views/user/user-information-set/set-nickname/');
const UserInfo_SetPassword = () => import(/* webpackChunkName: "UserInfo_SetPassword" */ '@/views/user/user-information-set/set-password/');

const UserOrderEntityList= () => import(/* webpackChunkName: "order-entity-list" */ '@/views/user/order-entity-list/');
const UserOrderDetail= () => import(/* webpackChunkName: "order-entity-detail" */ '@/views/user/order-entity-detail/');
const UserOrderRefund= () => import(/* webpackChunkName: "order-sponsor-refund" */ '@/views/user/order-sponsor-refund/');

const UserOrderEleList= () => import(/* webpackChunkName: "order-ele-list" */ '@/views/user/order-ele-list/');
const UserOrderEleDetail= () => import(/* webpackChunkName: "order-ele-detail" */ '@/views/user/order-ele-detail/');
const UserRefundList= () => import(/* webpackChunkName: "user-refund-list" */ '@/views/user/refund-list/');

const Tabbar = () => import(/* webpackChunkName: "Tabbar" */ '@/components/Tabbar/');

export default [{
			path: "/user",
			name: "user",
			meta: {
				keepAlive: true	
			},
			components: {default: tab_user, tabbar: Tabbar }
	},{
			path: "/user/collect",
			name: "collect",
			component: UserCollect
	},{
			path: "/user/team",
			name: "team",
			component: UserTeam
	},{
			path: "/user/invitation",
			name: "invitation",
			component: UserInvitation
	},{
			path: "/user/address",
			name: "address",
			meta: {
				login: true,	
			},
			component: UserAddress
	},{
			path: "/user/address/edit/:addressId",
			name: "address-edit",
			props: true,
			meta: {
				login: true,	
			},
			component: UserAddressEdit
	},{
			path: "/user/autonym",
			name: "autonym",
			meta: {
				login: true,	
			},
			component: UserAutonym
	},{
			path: "/user/autonym/edit/:autonym_id",
			name: "autonym-edit",
			props: true,
			meta: {
				login: true,	
			},
			component: UserAutonymEdit
	},{
			path: "/user/server",
			name: "user-server",
			component: UserServer
	},{
			path: "/user/server/problem",
			name: "user-server-problem",
			component: UserServerProblem
	},{
			path: "/user/server/feedback",
			name: "user-server-feedback",
			component: UserServerFeedback
	},{
			path: "/user/information",
			name: "user-information",
			meta: {
				login: true,	
			},
			component: UserInformation
	},{
			path: "/user/information/setbg",
			name: "user-info-setbg",
			component: UserInfo_SetBg
	},{
			path: "/user/information/setMobile",
			name: "user-info-setMobile",
			component: UserInfo_SetMobile
	},{
			path: "/user/information/setNickname",
			name: "user-info-setNickname",
			component: UserInfo_SetNickname
	},{
			path: "/user/information/setPassword",
			name: "user-info-setPassword",
			component: UserInfo_SetPassword
	},{
			path: "/user/order/list/:status",
			name: "user-order-list",
			props: true,
			component: UserOrderEntityList
	},{
			path: "/user/order/detail/:order_id",
			name: "user-order-detail",
			props: true,
			component: UserOrderDetail
	},{
			path: "/user/order/detail/refund/:item_order_id",
			name: "user-order-refund",
			props: true,
			component: UserOrderRefund
	},{
			path: "/user/orderEle/list/:status",
			name: "user-order-ele-list",
			props: true,
			component: UserOrderEleList
	},{
			path: "/user/orderEle/detail/:order_id",
			name: "user-order-ele-detail",
			props: true,
			component: UserOrderEleDetail
	},{
			path: "/user/refund/list",
			name: "user-refund-list",
			component: UserRefundList
	}]