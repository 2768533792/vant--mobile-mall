<template>
	<div class="set_nickname">
		<van-cell-group>
			<van-field
			v-model="nickName"
			label="昵称"
			>
			</van-field>
		</van-cell-group>
		
		<div class="bottom_btn">
			<van-button size="large" type="danger" @click="saveMobile">保存</van-button>
		</div>
	</div>
</template>


<script>
	export default {
		data(){
			return {
				nickName: "马家驹"
			}
		}
	}
</script>


<style scoped>
	.bottom_btn{
		padding: 30px 15px 0 15px; 
	}
</style>