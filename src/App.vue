<template>
  <div id="app">
		<keep-alive>
			<router-view class="view-router"></router-view>
		</keep-alive>
		<router-view name="tabbar"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" src="./assets/scss/global.scss" />
