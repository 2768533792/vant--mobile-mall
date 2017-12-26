<template>
	<van-cell-group>
		<van-cell>
			<van-notice-bar
				text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
				background="white"
				leftIcon="./static/img/trumpet.png"
				style="padding-left: 0"
			/>
		</van-cell>
		<van-cell :title="address" icon="dingwei" isLink url="http://m.amap.com/navi/?dest=120.145409,30.238695&key=ab67b14d58d47912a9feb63ba862450c&destName=三潭印月"></van-cell>
		<van-cell icon="phone">
			<template slot="title">
				<a :href="'tel:' + mobile" class="store_mobile">{{mobile}}</a>
			</template>
		</van-cell>
	</van-cell-group>
</template>

<script>
//	leftIcon="http://www-dev.mamaqunaer.com/images/common/star_color_big.png"
	import { NoticeBar } from 'vant';
	
	export default {
		name: "shop-info-group",
		props: {
			address: {
				type: String,
				required: true
			},
			mobile: {
				type: String,
				required: true
			}
		},
		components: {
			[NoticeBar.name]: NoticeBar,
		}
	}
</script>


<style lang="scss" scoped>
	.store_mobile{
		color: #0000a0;
		text-decoration: underline;
	}
</style>