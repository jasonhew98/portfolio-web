<template>
    <div>
        <job-history-timeline :jobHistory="jobHistory"/>
    </div>
</template>

<script>
    import { createInstance, mixin as RecordMixin, assign } from './user.js';
    import JobHistoryTimeline from './@components/JobHistoryTimeline.vue';
    
    export default {
        name: 'UserProfileViewPage',
        mixins: [RecordMixin],
        components: { JobHistoryTimeline },
        props: { },
        data: function () {
            return {
                ...createInstance()
            }
        },
        async created() {
            await this.getUserDetails();
        },
        computed: {
            userRepository() {
                return this.$repository.userRepository;
            }
        },
        methods: {
            async getUserDetails() {
                try {
                    const [error, result] = await this.userRepository.getMyProfile();
                    if (error)
                        console.log(error);
                    else
                        assign(this, result);
                } catch (ex) {
                    console.log(ex)
                }
            }
        },
        watch: {
        }
    }
</script>

<style lang="scss" scoped>
    .profile__view--container {
        width: 100%;
    }
</style>