<template>
    <a href="" class="scrollup" :class="showScrollClass">
        <i class="uil uil-arrow-up scrollup__icon"></i>
    </a>
</template>

<script>
export default {
    name: "ScrollToSmallButton",
    props: {
    },
    data: function () {
        return {
            
        };
    },
    created() {},
    computed: {
        showScrollClass() {
            return window.scrollY >= 560 ? "show-scroll" : "";
        }
    }
};
</script>

<style lang="scss">

.scrollup {
    position: fixed;
    right: 2.5rem;
    bottom: -20%;
    background-color: var(--title-color);
    opacity: 0.8;
    padding: 0.3rem 0.5rem;
    border-radius: 0.4rem;
    z-index: var(--z-tooltip);
    transition: .4s;
}

.scrollup__icon {
    font-size: 1.5rem;
    color: var(--container-color);
}

.scrollup:hover {
    background-color: var(--title-color-dark);
}

.show-scroll {
    bottom: 3rem;
}

</style>
