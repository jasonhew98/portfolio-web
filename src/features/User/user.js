import { proficiencyLevelEnum, skillTypeEnum } from '@/seedwork/enums.js'

function assign(target, source) {
    source = source || {};
    
    target.email = source.email || '';

    target.firstName = source.firstName || '';
    target.lastName = source.lastName || '';
    target.preferredName = source.preferredName || '';
    target.countryCode = source.countryCode || '';
    target.contactNumber = source.contactNumber || '';
    target.introduction = source.introduction || '';

    target.workPreferences = source.workPreferences || [];
    target.skillSets = source.skillSets || [];
    target.jobHistory = source.jobHistory || [];
    target.projects = source.projects || [];

    return target;
}

function createInstance(options) {
    return assign({}, options);
}

const mixin = {
    methods: {
        getProficiencyLevel(level) {
            return proficiencyLevelEnum[level];
        },
        getSkillType(type) {
            return skillTypeEnum[type];
        }
    },
    computed: {
        fullName() {
            return `${this.firstName} (${this.preferredName}) ${this.lastName}`;
        },
        nickname() {
            return `${this.preferredName} ${this.lastName}`;
        }
    }
}

export {
    mixin,
    assign,
    createInstance
}