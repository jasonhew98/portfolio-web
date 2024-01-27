<template>
    <div>
        {{ fullName }}
        {{ introduction }}
    </div>
</template>

<script>
import { mixin as RecordMixin } from '../user.js';
export default {
    name: "About",
    mixins: [RecordMixin],
    props: {
        firstName: {type: String, required: true, default: ''},
        lastName: {type: String, required: true, default: ''},
        preferredName: {type: String, required: true, default: ''},
        introduction: {type: String, required: true, default: ''}
    },
    data: function () {
        return {
            
        };
    },
    created() {},
    computed: {
    }
};
</script>
