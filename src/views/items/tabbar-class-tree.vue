<template>
	<div class="class_tree clearfix">
		<ul class="class_tree_nav">
			<li 
				v-for="(item, index) in items"
				:class="{active_nav: navActive == index}"
				@click="navclick(index)">大牌奶粉</li>
		</ul>
		<div class="class_tree_content">
			<div class="class_tree_all">全部 <i class="van-icon van-icon-arrow"></i></div>
			<div class="class_tree_items_wrap clearfix">
				<div @click="classClick(5254)">
					<div class="class_tree_item_img"><img src="http://mm-test.img-cn-shanghai.aliyuncs.com/user/448929/bsizxG4Zw4.jpg" alt="固体奶粉"></div>
					<div class="class_tree_item_name">固体奶粉</div>
				</div>
				<div @click="classClick(5254)">
					<div class="class_tree_item_img"><img src="http://mm-test.img-cn-shanghai.aliyuncs.com/user/448929/bsizxG4Zw4.jpg" alt="固体奶粉"></div>
					<div class="class_tree_item_name">固体奶粉</div>
				</div>
				<div @click="classClick(5254)">
					<div class="class_tree_item_img"><img src="http://mm-test.img-cn-shanghai.aliyuncs.com/user/448929/bsizxG4Zw4.jpg" alt="固体奶粉"></div>
					<div class="class_tree_item_name">固体奶粉</div>
				</div>
				<div @click="classClick(5254)">
					<div class="class_tree_item_img"><img src="http://mm-test.img-cn-shanghai.aliyuncs.com/user/448929/bsizxG4Zw4.jpg" alt="固体奶粉"></div>
					<div class="class_tree_item_name">固体奶粉</div>
				</div>
				<div @click="classClick(5254)">
					<div class="class_tree_item_img"><img src="http://mm-test.img-cn-shanghai.aliyuncs.com/user/448929/bsizxG4Zw4.jpg" alt="固体奶粉"></div>
					<div class="class_tree_item_name">固体奶粉</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "class-tree",
		 model: {
			prop: 'activeIndex'
		},
		props: {
			activeIndex: {
				type: Number,
				default: 0
			},
		},
		data(){
			let navActive = this.activeIndex;
			return {
				items: new Array(8),
				navActive,
			}
		},
		methods: {
			navclick(i){
				this.navActive = i;
				this.$emit("navClick", i);
			},
			classClick(id){
				this.$emit("classClick", id);
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "../../assets/scss/var";
	@import "../../assets/scss/mixin";
	.class_tree{
		position: relative;
		background-color: #fff;
		overflow-x: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow-y: auto;
	}
	.class_tree_nav{
		float: left;
		width: 100px;
		height: 100%;
		background-color: $bg-color;
		>li{
			@include one-border;
			height: 40px;
			line-height: 40px;
			text-align: center;
			border-left: 2px solid $bg-color;
		}
		>li.active_nav{
				background-color: #fff;
				border-left: 2px solid $red;
				color: $red;
			}
	}
	.class_tree_content{
		margin-left: 100px;
		.class_tree_all{
			text-align: right;
			height: 40px;
			line-height: 40px;
			color: $font-color-gray;
			font-size: $font-size-normal;
		}
		.van-icon-arrow{
			font-size: $font-size-small;
		}
		.class_tree_items_wrap{
			padding: 10px 20px;
			margin-right: -3%;
			text-align: center;
			>div{
				float: left;
				padding-right: 3%;
				box-sizing: border-box;
				width: 33.333%;
				margin-bottom: 20px;
			}
			img{
				max-width: 100%;
			}
			
			.class_tree_item_img{
				display: inline-block;
				max-width: 100%;
				width: 70px;
				height: 70px;
			}
			.class_tree_item_name{
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>