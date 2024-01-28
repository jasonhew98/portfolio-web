<template>
    <div class="skills__content">
        <h3 class="skills__title">{{ title }}</h3>
        <div class="skills__box">
            <div class="skills__group">
                <div class="skills__data"
                    v-for="skill in skills"
                    :key="skill.id">
                    <i class="bx bx-badge-check"></i>
                    <div>
                        <h3 class="skills__name">{{ skill.name }}</h3>
                        <span class="skills__level">{{ skill.level }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Skill",
    props: {
        title: {type: String, required: true, default: ''},
        skills: {type: Array, required: true, default() { return []; }},
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
