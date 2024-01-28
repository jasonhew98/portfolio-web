<template>
        <section class="home section">
            <div class="home__container content__container grid">
                <div class="home__content grid">
                    <social/>
                    <div class="home__img"></div>
                    <introduction
                        :firstName="firstName"
                        :lastName="lastName"
                        :preferredName="preferredName"
                        :introduction="introduction"/>
                </div>
                <scroll-to-button/>
            </div>
        </section>
</template>

<script>
import Social from './Social.vue';
import Introduction from './Introduction.vue';
import ScrollToButton from '@/@components/ScrollToButton.vue';
import { mixin as RecordMixin } from '../user.js';
export default {
    name: "About",
    mixins: [RecordMixin],
    components: { Social, Introduction, ScrollToButton },
    props: {
        firstName: {type: String, required: true, default: ''},
        lastName: {type: String, required: true, default: ''},
        preferredName: {type: String, required: true, default: ''},
        introduction: {type: String, required: true, default: ''}
    },
    data: function () {
        return {
            
        };
    },
    created() {},
    computed: {
    }
};
</script>

<style lang="scss">
.home__container {
    row-gap: 7rem;
}

.home__content {
    grid-template-columns: 116px repeat(2, 1fr);
    padding-top: 5.5rem;
    column-gap: 2rem;
    align-items: center;
}

.home__img {
    background: url('@/images/profile.gif');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: inset 0 0 0 9px rgba(255, 255, 255, 0.3);
    order: 1;
    justify-self: center;
    width: 300px;
    height: 300px;
    animation: profile__animate 8s ease-in-out infinite 1s;
}

@keyframes profile__animate {
    0% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    50% {
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }

    100% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
}

@media screen and (max-width: 992px) {
    .home__content {
        grid-template-columns: 100px repeat(2, 1fr);
        column-gap: 1.25rem;
    }

    .home__img {
        width: 250px;
        height: 250px;
        box-shadow: inset 0 0 0 8px rgba(255, 255, 255, 0.3);
    }
}

@media screen and (max-width: 768px) {
    .home__content {
        grid-template-columns: 0.5fr 3fr;
        padding-top: 3.5rem;
    }

    .home__img {
        order: initial;
        justify-self: initial;
        width: 200px;
        height: 200px;
        box-shadow: inset 0 0 0 6px rgba(255, 255, 255, 0.3);
    }

    .home__data {
        grid-column: 1/3;
    }
}

@media screen and (max-width: 350px) {
    .home__img {
        width: 180px;
        height: 180px;
    }
}
</style>
