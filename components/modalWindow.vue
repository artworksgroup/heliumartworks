<template>
  <TransitionRoot as="template" :show="modelValue">
    <Dialog as="div" class="relative z-10 dialog" @close="onClose">
      <!-- Modal content -->
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full text-center justify-center dialog-content"
          :class="[
            alert
              ? 'items-start sm:items-start p-4'
              : 'items-end sm:items-center',
            {
              '!justify-start': side == 'left',
              '!justify-end': side == 'right',
            },
          ]"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="dialog-panel relative transform overflow-hidden text-left shadow-xl transition-all"
              :class="[
                {
                  'side-dialog-panel': side,
                },
              ]"
            >
              <slot></slot>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
      <!-- Overlay -->
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-black bg-opacity-50 transition-opacity dialog-overlay"
          :class="{ blur: alert || blur }"
        />
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
Dialog,
DialogPanel,
TransitionChild,
TransitionRoot
} from "@headlessui/vue";

const emit = defineEmits(["update:modelValue", "onClose"]);

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  alert: { type: Boolean, default: false },
  blur: { type: Boolean, default: false },
  side: {
    type: [string, undefined, null],
    default: undefined,
    validator: () => ["left", "right"].includes(value),
  },
});

const onClose = () => {
  emit("update:modelValue", !props.modelValue);
  emit("onClose", !props.modelValue);
};
</script>
