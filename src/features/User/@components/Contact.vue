<template>
    <div>
        
    </div>
</template>

<script>
export default {
    name: "Contact",
    props: {
        countryCode: {type: String, required: true, default: ''},
        contactNumber: {type: String, required: true, default: ''},
        email: {type: String, required: true, default: ''}
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
