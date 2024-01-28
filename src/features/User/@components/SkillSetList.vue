<template>
    <section class="skills section">
        <h2 class="section__title">Skills</h2>
        <span class="section__subtitle">My technical level</span>

        <div class="skills__container content__container grid">
            <skill :title="frontendTitle" :skills="frontendSkills"/>
            <skill :title="backendTitle" :skills="backendSkills"/>
        </div>
    </section>
</template>

<script>
import Skill from './Skill.vue';

export default {
    name: "SkillSetList",
    props: {
        skillSets: {type: Array, required: true, default() { return []; }}
    },
    components: { Skill },
    data: function () {
        return {
            
        };
    },
    created() {},
    computed: {
        frontendTitle() {
            return "Frontend developer";
        },
        backendTitle() {
            return "Backend developer";
        },
        frontendSkills() {
            return [
                {
                    name: "HTML",
                    level: "Intermediate"
                },
                {
                    name: "CSS",
                    level: "Intermediate"
                },
                {
                    name: "JavaScript",
                    level: "Advanced"
                },
                {
                    name: "Vue.js",
                    level: "Advanced"
                },
                {
                    name: "Angular",
                    level: "Intermediate"
                }
            ];
        },
        backendSkills() {
            return [
                {
                    name: "C#",
                    level: "Advanced"
                },
                {
                    name: ".Net Core",
                    level: "Advanced"
                },
                {
                    name: "Node.js",
                    level: "Intermediate"
                },
                {
                    name: "Java",
                    level: "Intermediate"
                },
                {
                    name: "Python",
                    level: "Intermediate"
                },
                {
                    name: "MongoDb",
                    level: "Intermediate"
                },
            ];
        }
    }
};
</script>

<style>

.skills__container {
    grid-template-columns: repeat(2, 350px);
    column-gap: 3rem;
    justify-content: center;
}

.skills__content {
    background-color: var(--container-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 4rem;
    border-radius: 1.25rem;
}

.skills__title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-1-5);
    text-align: center;
}

.skills__box {
    display: flex;
    justify-content: center;
    column-gap: 2.5rem;
}

.skills__group {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 2.5rem;
    align-items: flex-start;
    row-gap: 1rem;
}

.skills__data {
    display: flex;
    column-gap: 0.5rem;
}

.skills .bx-badge-check {
    font-size: 1rem;
    color: var(--title-color);
}

.skills__name {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    line-height: 18px
}

.skills__level {
    font-size: var(--tiny-font-size);
}

@media only screen and (max-width: 992px) {
    .skills__container {
        grid-template-columns: max-content;
        row-gap: 2rem;
    }
}

@media only screen and (max-width: 576px) {
    .skills__container {
        grid-template-columns: 1fr;
    }

    .skills__content {
        padding: 1.5rem;
    }
}

@media only screen and (max-width: 350px) {
    .skills__box {
        column-gap: 1.25rem;
    }

    .skills__name {
        font-size: var(--small-font-size);
    }
}

</style>
