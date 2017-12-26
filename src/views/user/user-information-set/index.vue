<template>
	<div class="user_information">
		<van-cell-group>
			<van-cell title="头像" class="cell_middle">
				<van-uploader :afterRead="avatarAfterRead">
					<div class="user_avatar_upload">
						<img :src="avatarUrl + '?x-oss-process=image/resize,m_fill,h_50,w_50'" alt="你的头像" v-if="avatarUrl">
						<van-icon name="camera_full" v-else></van-icon>
					</div>
				</van-uploader>
			</van-cell>
			<van-cell title="背景图" to="/user/information/setbg" isLink></van-cell>
			<van-cell title="昵称" to="/user/information/setNickname" value="马家沟" isLink />
			<van-cell title="性别" value="男" @click="showSex = true" isLink />
			<van-cell title="密码设置" to="/user/information/setPassword" isLink />
			<van-cell title="手机号" to="/user/information/setMobile" value="13454193338" isLink></van-cell>
		</van-cell-group>
		
		<van-popup v-model="showSex" position="bottom">
			<van-picker 
				showToolbar
				:columns="sexColumns"
				title="选择性别"
				@cancel="showSex = false"
				@confirm="onSexConfirm"/>
		</van-popup>
	</div>
</template>

<script>
	import { Popup, Uploader, Picker } from 'vant';
	
	export default {
		
		data(){
			return {
				sexColumns: [{
					values: ["男", "女"],
					defaultIndex: 0
				}],
				showSex: false,
				avatarUrl: ""
			}
		},
		
		methods: {
			avatarAfterRead(file){
				console.log(file);
			},
			onSexConfirm(){
				console.log("性别");
			}
		},
		
		components: {
			[Popup.name]: Popup,
			[Uploader.name]: Uploader,
			[Picker.name]: Picker,
		}	
	}
</script>


<style lang="scss" scoped>
	@import "../../../assets/scss/var";
	.user_information{
		.user_avatar_upload{
			position: relative;
			width: 50px;
			height: 50px;
			border: 1px solid $border-color;
			img{
				max-width: 100%;
				max-height: 100%;
			}
			i{
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				font-size: 20px;
				color: $border-color;
			}
		}
	}
</style>