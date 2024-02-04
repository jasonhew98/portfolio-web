<template>
    <div class="skills__content">
        <h3 class="skills__title">{{ title }}</h3>
        <div class="skills__box">
            <div class="skills__group">
                <div class="skills__data"
                    v-for="skill in skills"
                    :key="skill.id">
                    <i class='bx bxs-badge-check'></i>
                    <div>
                        <h3 class="skills__name">{{ skill.name }}</h3>
                        <span class="skills__level">{{ proficiencyLevel(skill.proficiencyLevel) }}</span>
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
            proficiencyLevelOptions: []
        };
    },
    async created() {
        await this.loadOptions();
    },
    computed: {
        lookupRepository() {
            return this.$repository.lookupRepository;
        },
    },
    methods: {
        async loadOptions() {
            const [
                [err, proficiencyLevelOptions],
            ] = await Promise.all([
                this.lookupRepository.getProficiencyLevels(),
            ]);

            this.proficiencyLevelOptions = proficiencyLevelOptions;
        },
        proficiencyLevel(proficiencyLevel) {
            if (this.proficiencyLevelOptions.length <= 0)
                return;

            return this.proficiencyLevelOptions.find(x => x.id === proficiencyLevel).name;
        }
    }
};
</script>
