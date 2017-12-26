<template>
	<div class="user_header">
		<van-icon name="set" class="user_set" @click="toSetting" />
		<div class="user_avatar">
			<img src="../../assets/images/avatar_default.png" alt="头像" width="55" height="55">
		</div>
		<div>昵称</div>
	</div>
</template>

<script>
	export default {
		name: "user-header",
		methods: {
			toSetting(){
				this.$router.push({name: "user-information"})
			}
		}
	}

</script>

<style lang="scss" scoped>
	.user_header {
		position: relative;
		background: url(../../assets/images/user_head_bg.png) no-repeat;
		background-size: cover;
		height: 130px;
		box-sizing: border-box;
		text-align: center;
		color: #fff;
		padding-top: 30px;
	}

	i.user_set {
		position: absolute;
		top: 10px;
		right: 10px;
		font-size: 24px;
	}
	.user_avatar{
		margin-bottom: 10px;
		img{
			border: 0;
			border-radius: 50%;
		}
	}

</style>
