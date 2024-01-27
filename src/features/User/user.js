
function assign(target, source) {
    source = source || {};

    target.email = source.email || null;

    target.firstName = source.firstName || null;
    target.lastName = source.lastName || null;
    target.contactNumber = source.contactNumber || null;

    target.workPreferences = source.workPreferences || [];
    target.skillSets = source.skillSets || [];
    target.jobHistory = source.jobHistory || [];

    target.modifiedUTCDateTime = source.modifiedUTCDateTime || null;

    return target;
}

function createInstance(options) {
    return assign({}, options);
}

const mixin = {
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

export {
    mixin,
    assign,
    createInstance
}