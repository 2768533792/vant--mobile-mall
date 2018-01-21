<template>
	<md-field-group class="foget_view">
		<md-field 
			v-model="mobile"
			icon="mobile"
			placeholder="请输入手机号"/>
			
		<md-field 
			v-model="code"
			icon="lock"
			placeholder="请输入短信验证码">
			
			<div slot="rightIcon" @click="getCode" class="getCode" :class="{time_down: isTimeDown}">
				{{downText}}
			</div>
		</md-field >
			
		<div class="foget_submit">
			<van-button size="large" type="danger" @click="submitCode">下一步</van-button>
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
				mobile: "",
				code: ""
			}	
		},
		
		activated(){
			this.timeDown();	
		},
		
		mixins: [time_down],
		
		computed: {
			downText(){
				return this.isTimeDown ? `${this.downTime}s后获取` : '获取验证码'
			}
		},
		
		methods: {
			submitCode(){
				this.$router.push({name: "forgetReset"})
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
	
	div.foget_view{
		background-color: #fff;
		padding-top: 30px;
	}
	
	div.foget_submit{
		padding-top: 30px;
		padding-bottom: 20px;
	}
	
	.getCode{
		@include one-border(left);
		text-align: center;
	}
	
	.time_down{
		color: $red;
	}
	
</style>

