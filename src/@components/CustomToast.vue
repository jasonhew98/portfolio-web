<template>
    <div class="notification-toast" :class="{ [type]: true, 'toast--slide-up': showToast }">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: "CustomToast",
    props: {
        show: { type: Boolean, required: false, default: false },
        type: { type: String, required: false, default: '' }, // 'success', 'info', 'warning', 'error', etc.
        message: { type: String, required: false, default: '' },
    },
    data () {
        return {
            showToast: false
        }
    },
    created() {
        setTimeout(this.toggleShowToast, 300);
    },
    computed: {
    },
    methods: {
        toggleShowToast() {
            this.showToast = true;
        }
    }
};
</script>

<style lang="scss" scoped>
.notification-toast {
    position: fixed;
    top: -20%;
    right: 20px;
    padding: 10px;
    color: #fff;
    border-radius: 5px;
    max-width: 300px;
    word-wrap: break-word;
    z-index: 9999;
    transition: .4s;
}

.toast--slide-up {
    top: 3rem;
}

.success {
    background-color: #28a745; /* Bootstrap success color */
}

.info {
    background-color: #17a2b8; /* Bootstrap info color */
}

.warning {
    background-color: #ffc107; /* Bootstrap warning color */
}

.error {
    background-color: #dc3545; /* Bootstrap danger color */
}
</style>
