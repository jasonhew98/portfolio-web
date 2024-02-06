<template>
    <div class="auth__container d-flex justify-content-center align-items-center min-vh-100">
        <div class="row border rounded-5 p-3 bg-white shadow box-area auth__box">
            <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style="background: #103cbe;">
                <div class="featured-image mb-3">
                    <img src="@/images/1.png" class="img-fluid" style="width: 250px;">
                </div>
                <p class="text-white fs-2" style="font-family: 'Courier New', Courier, monospace; font-weight: 600;">Be Verified</p>
                <small class="text-white text-wrap text-center" style="width: 17rem;font-family: 'Courier New', Courier, monospace;">Join experienced Designers on this platform.</small>
            </div>
            <div class="col-md-6 right-box">
                <div class="row align-items-center">
                    <div class="header-text mb-4">
                        <h2>Welcome!</h2>
                        <p>We are happy to have you back.</p>
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control form-control-lg bg-light fs-6" placeholder="Username/Email" v-model="userName">
                    </div>
                    <div class="input-group mb-1">
                        <input type="password" class="form-control form-control-lg bg-light fs-6" placeholder="Password" v-model="password">
                    </div>
                    <div class="input-group mb-5 d-flex justify-content-between">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="formCheck" v-model="rememberMe">
                            <label for="formCheck" class="form-check-label text-secondary"><small>Remember Me</small></label>
                        </div>
                        <div class="forgot">
                            <small><a href="#">Forgot Password?</a></small>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <button class="btn btn-lg btn-primary w-100 fs-6" @click="login">Login</button>
                    </div>
                    <div class="row">
                        <small>Don't have account? <a href="#">Sign Up</a></small>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginPage',
        props: {
        },
        components: {},
        data: function () {
            return {
                userName: null,
                password: null,
                rememberMe: false,
            }
        },
        async created() {
            if (localStorage.getItem('jwt'))
                this.goToProfile();
        },
        computed: {
            authRepository() {
                return this.$repository.authRepository;
            }
        },
        methods: {
            async login() {
                const record = {
                    userName: this.userName,
                    password: this.password
                }

                try {
                    const [error, result] = await this.authRepository.login(record);
                    let jwtToken = result.jwtToken;

                    // Assuming you have the JWT token available as 'accessToken'
                    const accessToken = jwtToken.token;
                    const expiryDate = jwtToken.expiry;

                    localStorage.setItem("jwt", accessToken);

                    // Set the cookie
                    document.cookie = `accessToken=${accessToken}; expires=${expiryDate}; path=/;`;

                    this.goToProfile();
                } catch (ex) {
                    console.log(ex);
                }
            },
            goToProfile() {
                this.$router.push({
                    name: "UserProfileViewPage"
                })
            }
        },
        watch: {
        }
    }
</script>


<style lang="scss" scoped>
.box-area {
    width: 930px;
}

.right-box {
    padding: 40px 30px 40px 40px;
}

::placeholder {
    font-size: 16px;
}

.rounded-4 {
    border-radius: 20px;
}

.rounded-5 {
    border-radius: 30px;
}

@media only screen and (max-width: 992px) {
    .auth__box {
        margin: 0 10px;
    }
}

@media only screen and (max-width: 768px) {
    .box-area {
        margin: 0 10px;
    }
    .left-box {
        height: 100px;
        overflow: hidden;
    }
    .right-box {
        padding: 20px;
    }
}
</style>
