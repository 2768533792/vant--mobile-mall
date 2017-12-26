<template>
	<div>
		<md-field-group>
			<md-field 
				v-model.trim="username"
				icon="username" 
				@input="onInput"
				right-icon="clear-full"
				@right-click="clearText" />
				
			<md-field 
				v-model="password" 
				icon="lock" 
				:type="visiblePass ? 'text' : 'password'" 
				:right-icon="visiblePass ? 'eye-open' : 'eye-close'"
				@right-click="visiblePass = !visiblePass" />
				
			<div class="clearfix">
				<div class="float-l red">可用妈妈去哪儿账号登录</div>
				<div class="float-r"><router-link to="/login/forget">忘记密码</router-link></div>
			</div>
			
			<van-button size="large" type="danger">登录</van-button>
		</md-field-group>
		
		<div class="register clearfix">
			<div class="float-l connect">联系客服</div>
			<div class="float-r"><router-link to="/login/registerGetCode">免费注册</router-link></div>
		</div>
	</div>
</template>

<script>
	import field from '@/vue/components/field/';
	import fieldGroup from '@/vue/components/field-group/';
	
	export default {
		name: "login-request",
		
		data(){
			return {
				username: "",
				password: "",
				visiblePass: false,
			}	
		},
		
		methods:{
			clearText(){
				this.username = "";
			},
			onInput(){
				console.log(this.username);
			}
		},
		
		components: {
			[field.name]: field,
			[fieldGroup.name]: fieldGroup,
		}	
	}
</script>

<style lang="scss" scoped>
	@import "../../assets/scss/var";
	@import "../../assets/scss/mixin";
	.register{
		padding-top: 40px;
		color: $font-color-gray;
		a{
			color: $font-color-gray;
		}
		>div{
			width: 50%;
			box-sizing: border-box;
			padding: 0 20px;
		}
		.connect{
			@include one-border(right);
			text-align: right;
		}
	}
</style>