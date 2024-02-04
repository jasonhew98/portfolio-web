<template>
    <div>
        <button @click="login">Login</button>
        <button @click="getMyProfile">Profile</button>
    </div>
</template>

<script>
export default {
    name: "UserProfileEditPage",
    props: {

    },
    data: function () {
        return {
            
        };
    },
    created() {},
    computed: {
        userRepository() {
            return this.$repository.userRepository;
        },
    },
    methods: {
        async login() {
            try {
                const [error, result] = await this.userRepository.login();
                console.log(result.jwtToken.token)
                if (error)
                    return;

                localStorage.setItem("jwtToken", result.jwtToken.token);
            } catch (ex) {

            }
        },
        async getMyProfile() {
            try {
                const [error, result] = await this.userRepository.getMyProfileV2();
                console.log(result)
                if (error)
                    return;
            } catch (ex) {

            }
        }
    }
};
</script>

<style>
</style>