<!-- Build a selection form input who accept props -->

<template>
    <div class="flex flex-col w-full">
        <label class="text-black my-3" :for="name">{{ label }}</label>
        <select class="placeholder:italic placeholder:text-slate-400 block bg-[#F1F1F1] w-full border-none h-14 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none  focus:ring-[#0E0E2C] focus:ring-1 sm:text-sm"
                :name="name" :id="name" :placeholder="placeholder"  >
            <option v-for="option in options" :value="option.value">{{ option.label }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: false,
        },
        options: {
            type: Array,
            required: true,
        },
    },
};


</script>