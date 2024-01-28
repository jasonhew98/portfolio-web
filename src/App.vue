<template>
  	<div>
		<router-view></router-view>
		<custom-footer/>
		<scroll-to-small-button/>
	</div>
</template>

<script>
import CustomFooter from './@components/CustomFooter.vue';
import ScrollToSmallButton from './@components/ScrollToSmallButton.vue';
export default {
	components: {
		CustomFooter,
		ScrollToSmallButton
	},
	data() {
		return {
		};
	},
};
</script>

<style lang="scss">
	@import "./styles.scss";
</style>