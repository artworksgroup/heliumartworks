<template>
    <div class="flex flex-col w-full">
        <label class="text-black my-3" :for="name">{{ label }}</label>
        <input class="placeholder:italic placeholder:text-slate-400 block bg-[#F1F1F1] w-full border-none h-14 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none  focus:ring-[#0E0E2C] focus:ring-1 sm:text-sm"
         :type="type" :name="name" :id="name" :placeholder="placeholder"  />
    </div>
</template>

<script >
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        type: {
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
       
    },
};
</script>