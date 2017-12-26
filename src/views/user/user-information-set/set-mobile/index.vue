<template>
	<div>
		<van-cell-group>
			<van-field label="登录密码" v-model="password" placeholder="请输入登录密码" />
			<van-field label="新手机号" v-model="new_password" placeholder="请输入新手机号" />
			<van-field label="验证码" v-model="repeat_password" placeholder="请输入验证码">
				<span slot="icon" class="verifi_code red" @click="getCode">发送验证码</span>
			</van-field>
		</van-cell-group>
		
		<div class="bottom_btn">
			<van-button size="large" type="danger" @click="saveMobile">保存</van-button>
		</div>
	</div>
</template>


<script>
	export default {
		data: () => ({
			password: "",
			new_password: "",
			repeat_password: ""
		}),
		
		methods: {
			getCode(){
				console.log("获取验证码");
			},
			saveMobile(){
				console.log("保存手机号");
			}
		}
	}

</script>

<style lang="scss" scoped>
	@import "../../../../assets/scss/var";
	@import "../../../../assets/scss/mixin";
	.bottom_btn{
		padding: 30px 15px 0 15px; 
	}
	
	.verifi_code{
		@include one-border;
		padding-left: 10px;
		&::after{
			border-bottom: 0;
			border-left: 1px solid $border-color;
		}
	}
</style>
