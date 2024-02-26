<template>
  	<div class="content__container">
		<!-- <CustomToast
			v-for="notification in activeNotifications"
			:key="notification.id"
			:type="notification.type"
			:message="notification.message" /> -->
		<router-view></router-view>
	</div>
</template>

<script>
import CustomToast from './@components/CustomToast.vue';

export default {
	name: "App",
	components: {
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