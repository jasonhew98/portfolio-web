<template>
    <li class="timeline__list--row">
        <div class="timeline__content">
            <div class="title">{{ jobTitle }}</div>
            <div class="title">{{ companyName }}</div>
            <div class="date__period">{{ datePeriod }}</div>
            <div class="description" v-html="description"></div>
        </div>
    </li>
</template>

<script>
import { formatDateExcludeDay } from '@/seedwork/formatters/dateFormatter.js'

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
            return formatDateExcludeDay(this.job.startDate) || "";
        },
        endDate() {
            return formatDateExcludeDay(this.job.endDate) || "";
        },
        isCurrentJob() {
            return this.job.isCurrentJob;     
        },
        description() {
            return this.job.description || "";
        },
        datePeriod() {
            return this.isCurrentJob ? `${this.startDate} - Present` : `${this.startDate} - ${this.endDate}`;
        }
    }
};
</script>

<style>
    .description {
        padding: 0 15px;
    }

    .description ul {
        list-style: circle;
        /* Override bootstrap */
        padding-left: 0;
    }

    .description ul li {
        margin-bottom: 0.25rem;
        line-height: 20px;
    }
</style>