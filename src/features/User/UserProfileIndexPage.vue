<template>
    <div>
        <nav-bar
            :options="navBarOptions"></nav-bar>
        <home 
            ref="home"
            :firstName="firstName"
            :lastName="lastName"
            :preferredName="preferredName"
            :shortIntroduction="shortIntroduction"/>
        <about 
            ref="about"
            :firstName="firstName"
            :lastName="lastName"
            :preferredName="preferredName"
            :introduction="introduction"/>
        <skill-set-list ref="skills" :skillSets="skillSets"/>
        <job-history-timeline ref="experiences" :jobHistory="jobHistory"/>
        <!-- <project-list ref="projects" :projects="projects"/> -->
        <contact 
            ref="contact"
            :countryCode="countryCode"
            :contactNumber="contactNumber"
            :email="email"/>
        <custom-footer/>
        <scroll-to-small-button/>
    </div>
</template>

<script>
import { createInstance, mixin as RecordMixin, assign } from './user.js';
import CustomFooter from '@/@components/CustomFooter.vue';
import NavBar from './@components/NavBar.vue';
import Home from './@components/Home.vue';
import About from './@components/About.vue';
import JobHistoryTimeline from './@components/JobHistoryTimeline.vue';
import SkillSetList from './@components/SkillSetList.vue';
import ProjectList from './@components/ProjectList.vue';
import Contact from './@components/Contact.vue';
import pageBehaviour from '@/seedwork/pageBehaviour.js';

import ScrollToSmallButton from '@/@components/ScrollToSmallButton.vue';

export default {
    name: 'UserProfileViewPage',
    mixins: [RecordMixin, pageBehaviour],
    components: {
        CustomFooter,
        NavBar,
        Home,
        About,
        JobHistoryTimeline,
        SkillSetList,
        ProjectList,
        Contact,
        ScrollToSmallButton
    },
    props: { },
    data: function () {
        return {
            ...createInstance()
        }
    },
    provide() {
        return {
            goToView: this.scrollToView
        }
    },
    async created() {
        await this.getUserDetails();
    },
    computed: {
        userRepository() {
            return this.$repository.userRepository;
        },
        navBarOptions() {
            return [
                {
                    id: 1,
                    displayName: "Home",
                    iconClass: "uil-estate",
                    ref: "home"
                },
                {
                    id: 2,
                    displayName: "About",
                    iconClass: "uil-user",
                    ref: "about"
                },
                {
                    id: 3,
                    displayName: "Skills",
                    iconClass: "uil-file-alt",
                    ref: "skills"
                },
                {
                    id: 4,
                    displayName: "Experiences",
                    iconClass: "uil-briefcase-alt",
                    ref: "experiences"
                },
                // {
                //     id: 5,
                //     displayName: "Projects",
                //     iconClass: "uil-scenery",
                //     ref: "projects"
                // },
                {
                    id: 6,
                    displayName: "Contact",
                    iconClass: "uil-message",
                    ref: "contact"
                }
            ]
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

<style lang="scss">
    .profile__view--container {
        width: 100%;
    }
</style>