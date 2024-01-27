<template>
    <li>
        <div class="timeline__content">
            <div class="title">{{ jobTitle }}</div>
            <div class="title">{{ companyName }}</div>
            <div class="date__period">{{ datePeriod }}</div>
            <p>{{ description }}</p>
        </div>
    </li>
</template>

<script>
export default {
    name: "JobHistoryTimelineRecord",
    props: {
        record: { type: Object, required: true, default: {} },
    },
    data: function () {
        return {
            
        };
    },
    created() {},
    computed: {
        job() {
            return this.record;
        },
        jobTitle() {
            return this.job.jobTitle || "";
        },
        companyName() {
            return this.job.companyName || "";
        },
        startDate() {
            return this.job.startDate || "";
        },
        endDate() {
            return this.job.endDate || "";
        },
        isCurrentJob() {
            return this.job.isCurrentJob;     
        },
        description() {
            return this.job.description || "";
        },
        datePeriod(job) {
            return this.isCurrentJob ? this.startDate : `${this.startDate} - ${this.endDate}`;
        }
    }
};
</script>
