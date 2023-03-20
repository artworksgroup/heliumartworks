<template>
    <div>
        <button class="text-[#FF0051] font-bold py-3 px-10  rounded-md">{{ label }}</button>
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