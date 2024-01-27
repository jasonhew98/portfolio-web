<template>
    <div>
        <about 
            :firstName="firstName"
            :lastName="lastName"
            :preferredName="preferredName"
            :introduction="introduction"/>
        <job-history-timeline :jobHistory="jobHistory"/>
        <skill-set-list :skillSets="skillSets"/>
        <project-list :projects="projects"/>
        <contact 
            :countryCode="countryCode"
            :contactNumber="contactNumber"
            :email="email"/>
    </div>
</template>

<script>
import { createInstance, mixin as RecordMixin, assign } from './user.js';
import About from './@components/About.vue';
import JobHistoryTimeline from './@components/JobHistoryTimeline.vue';
import SkillSetList from './@components/SkillSetList.vue';
import ProjectList from './@components/ProjectList.vue';
import Contact from './@components/Contact.vue';

export default {
    name: 'UserProfileViewPage',
    mixins: [RecordMixin],
    components: {
        About,
        JobHistoryTimeline,
        SkillSetList,
        ProjectList,
        Contact
    },
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