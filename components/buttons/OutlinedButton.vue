<template>
    <div>
        <button class="border-[#FF0051] border-2 text-[#FF0051]  py-3 px-10  rounded-md">{{ label }}</button>
    </div>
</template>
<script >
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        enabled: {
            type: Boolean,
            required: false,
        },
       
    },
};
</script>