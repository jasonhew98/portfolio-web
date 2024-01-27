<template>
  <div class="container">
    <div class="timeline">
        <ul>
            <JobHistoryTimelineRecord v-for="(job, index) in jobHistory"
                :key="index"
                :record="job">
            </JobHistoryTimelineRecord>
        </ul>
    </div>
  </div>
</template>

<script>
import JobHistoryTimelineRecord from './JobHistoryTimelineRecord.vue';

export default {
    name: "JobHistoryTimeline",
    mixins: [],
    components: { JobHistoryTimelineRecord },
    props: {
        jobHistory: { type: Array, required: true, default() { return []; }, },
    },
    data: function () {
        return {
            
        };
    },
    created() {},
    computed: {
        datePeriod(job) {
            return job.isCurrentJob ? job.startDate : `${job.startDate} - ${job.endDate}`;
        }
    },
    methods: {},
    watch: {},
};
</script>

<style lang="scss" scoped>

@import '@/variables.css';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    
</style>