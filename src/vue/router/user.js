const tab_user = () => import(/* webpackChunkName: "tabbar-user" */ '@/views/user/tabbar-user');
const UserCollect = () => import(/* webpackChunkName: "UserCollect" */ '@/views/user/module-collect/');
const UserTeam = () => import(/* webpackChunkName: "UserTeam" */ '@/views/user/module-team/');
const UserInvitation = () => import(/* webpackChunkName: "UserInvitation" */ '@/views/user/module-invitation/');
const UserAddress = () => import(/* webpackChunkName: "UserAddress" */ '@/views/user/module-address/');
const UserAddressEdit = () => import(/* webpackChunkName: "UserAddressEdit" */ '@/views/user/module-address-edit/');
const UserAutonym = () => import(/* webpackChunkName: "UserAutonym" */ '@/views/user/module-autonym/');
const UserAutonymEdit = () => import(/* webpackChunkName: "UserAutonymEdit" */ '@/views/user/module-autonym-edit/');
const UserServer = () => import(/* webpackChunkName: "UserServer" */ '@/views/user/module-server/');

const UserInformation = () => import(/* webpackChunkName: "UserInformation" */ '@/views/user/user-information-set/');
const UserInfo_SetBg = () => import(/* webpackChunkName: "UserInfo_SetBg" */ '@/views/user/user-information-set/set-bg/');
const UserInfo_SetMobile = () => import(/* webpackChunkName: "UserInfo_SetMobile" */ '@/views/user/user-information-set/set-mobile/');
const UserInfo_SetNickname = () => import(/* webpackChunkName: "UserInfo_SetNickname" */ '@/views/user/user-information-set/set-nickname/');
const UserInfo_SetPassword = () => import(/* webpackChunkName: "UserInfo_SetPassword" */ '@/views/user/user-information-set/set-password/');

const Tabbar = () => import(/* webpackChunkName: "Tabbar" */ '@/vue/components/Tabbar/');

export default [{
			path: "/user",
			name: "user",
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
			component: UserAddress
	},{
			path: "/user/address/edit/:addressId",
			name: "address-edit",
			props: true,
			component: UserAddressEdit
	},{
			path: "/user/autonym",
			name: "autonym",
			component: UserAutonym
	},{
			path: "/user/autonym/edit",
			name: "autonym-edit",
			component: UserAutonymEdit
	},{
			path: "/user/server",
			name: "user-server",
			component: UserServer
	},{
			path: "/user/information",
			name: "user-information",
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
	}]