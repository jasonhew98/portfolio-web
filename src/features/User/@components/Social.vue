<template>
    <div class="home__social">
        <a href="https://www.instagram.com/" class="home__social-icon" target="_blank">
            <i class="uil uil-instagram"></i>
        </a>
        <a href="https://linkedin.com/in/jia-sheng-hew" class="home__social-icon" target="_blank">
            <i class="uil uil-linkedin-alt"></i>
        </a>
        <a href="https://github.com/jasonhew98" class="home__social-icon" target="_blank">
            <i class="uil uil-github-alt"></i>
        </a>
    </div>
</template>

<script>
import { mixin as RecordMixin } from '../user.js';
export default {
    name: "Social",
    mixins: [RecordMixin],
    props: {},
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

.home__social {
    display: grid;
    grid-template-columns: max-content;
    row-gap: 1rem;
}

.home__social-icon {
    font-size: 1.25rem;
    color: var(--title-color)
}

.home__social-icon:hover {
    color: var(--title-color-dark)
}

</style>
