<template>
  	<div>
		<!-- <CustomToast
			v-for="notification in activeNotifications"
			:key="notification.id"
			:type="notification.type"
			:message="notification.message" /> -->
		<router-view></router-view>
		<custom-footer v-if="showFooter"/>
	</div>
</template>

<script>
import CustomFooter from './@components/CustomFooter.vue';
import CustomToast from './@components/CustomToast.vue';

export default {
	name: "App",
	components: {
		CustomFooter,
		// CustomToast
	},
	data() {
		return {
			activeNotifications: [],
			notification: {
				show: true,
				type: "info",
				message: "Message sent.",
			},
		};
	},
	provide() {
        return {
            pushNotification: this.pushNotification,
			removeNotification: this.removeNotification
        }
    },
	computed: {
		showFooter() {
			return !['/auth', '/edit/me'].includes(this.$route.path);
		},
	},
	methods: {
		pushNotification(type, message) {
			this.activeNotifications.push({id: this.activeNotifications.length + 1, type: type, message: message})
		},
		removeNotification(id) {
			this.activeNotifications.splice(this.activeNotifications.findIndex(item => item.id === id), 1);
		}
	}
};
</script>

<style lang="scss">
	@import "./styles.scss";
</style>