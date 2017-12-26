<template>
	<div>
		<van-cell-group>
			<van-field label="原密码" v-model="password" placeholder="请输入原密码" />
			<van-field label="新密码" v-model="new_password" placeholder="请输入新密码" />
			<van-field label="确认密码" v-model="repeat_password" placeholder="请再次输入密码" />
		</van-cell-group>
		
		<div class="bottom_btn">
			<van-button size="large" type="danger">保存</van-button>
		</div>
	</div>
</template>


<script>
	export default {
		data: () => ({
			password: "",
			new_password: "",
			repeat_password: ""
		})
	}

</script>

<style scoped>
	.bottom_btn{
		padding: 30px 15px 0 15px; 
	}
</style>
