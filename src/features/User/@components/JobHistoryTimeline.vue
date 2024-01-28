<template>
    <section class="skills section">
        <h2 class="section__title">Work Experiences</h2>

        <div class="timeline__container">
            <div class="timeline">
                <ul>
                    <JobHistoryTimelineRecord v-for="(job, index) in jobHistory"
                        :key="index"
                        :record="job">
                    </JobHistoryTimelineRecord>
                </ul>
            </div>
        </div>
    </section>
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

<style lang="scss">
.timeline__container {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
}

.timeline {
    width: 80%;
    height: auto;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
}

.timeline ul {
    list-style: none;
}

.timeline ul li {
    padding: 20px;
    background-color: #FFFFFF;
    border-radius: 10px;
    margin-bottom: 20px;
}

.timeline ul li:last-child {
    margin-bottom: 0;
}

.timeline__content {
    min-height: 120px;

    .title {
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
    }

    p {
        font-family: var(--font-family--roboto);
        font-size: 16px;
        line-height: 30px;
        font-weight: 300;
    }

    .date__period {
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 10px;
        letter-spacing: 2px;
    }
}

// For medium devices
@media only screen and (min-width: 768px) {

    .timeline:before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 100%;
        background-color: var(--text-color);
    }

    .timeline ul li {
        width: 50%;
        position: relative;
        margin-bottom: 50px;
    }

    .timeline ul li:nth-child(odd) {
        float: left;
        clear: right;
        transform: translateX(-30px);
        border-radius: 20px 0px 20px 20px;
    }
    
    .timeline ul li:nth-child(even) {
        float: right;
        clear: left;
        transform: translateX(30px);
        border-radius: 0px 20px 20px 20px;
    }

    .timeline ul li::before {
        content: "";
        position: absolute;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: var(--text-color);
        top: 0px;
    }

    .timeline ul li:nth-child(odd)::before {
        transform: translate(50%, -50%);
        right: -30px;
    }

    .timeline ul li:nth-child(even)::before {
        transform: translate(-50%, -50%);
        left: -30px;
    }
}
</style>