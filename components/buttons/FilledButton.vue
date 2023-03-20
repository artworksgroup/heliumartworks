<template>
    <div>
        <button class="bg-[#FF0051] text-white py-3 px-10  rounded-md">{{ label }}</button>
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