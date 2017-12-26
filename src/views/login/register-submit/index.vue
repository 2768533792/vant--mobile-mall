<template>
	<md-field-group class="register_submit">
		<md-field v-model="code" icon="mobile" placeholder="请输入验证码">
			<div slot="rightIcon" @click="getCode" class="getCode" :class="{time_down: isTimeDown}">
				{{downText}}
			</div>
		</md-field>
		<md-field v-model="password" icon="lock" placeholder="请输入密码"/>
		<md-field v-model="repeatPassword" icon="lock" placeholder="请再次确认密码"/>
		
		<div class="register_submit_btn">
			<van-button type="danger" size="large" @click="registerSubmit">确定</van-button>
		</div>
	</md-field-group>
</template>

<script>
	import field from '@/vue/components/field/';
	import fieldGroup from '@/vue/components/field-group/';
	import time_down from '@/vue/mixin/time-down';
	
	export default {
		data(){
			return {
				code: "",
				password: "",
				repeatPassword: "",
			}	
		},
		
		mixins: [time_down],
		
		activated(){
			this.init();	
		},
		
		computed: {
			downText(){
				return this.isTimeDown ? `${this.downTime}s后获取` : '获取验证码'
			}
		},
		
		methods: {
			init(){
				this.isTimeDown = true;
				this.timeDown();
			},
			registerSubmit(){
				this.$router.push({name: "registerStatus", params: {status: "success"}})
			},
			
			getCode(){
				this.isTimeDown = true;
			}
		},
		
		components: {
			[field.name]: field,
			[fieldGroup.name]: fieldGroup,
		}
	}
</script>


<style lang="scss" scoped>
	@import "../../../assets/scss/var";
	@import "../../../assets/scss/mixin";
	
	.register_submit{
		padding-top: 40px;
		background-color: #fff;
	}
	
	.register_submit_btn{
		padding-top: 30px;
	}
	
	.getCode{
		@include one-border(left);
		text-align: center;
	}
	
	.time_down{
		color: $red;
	}
</style>