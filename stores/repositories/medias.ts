import { defineStore } from "pinia";

export const useMediasStore = defineStore("medias", () => {
  const waitingMedias = ref<number>(0);

  const upload = () => {
    waitingMedias.value++;
  };

  const remove = () => {};

  return { waitingMedias, upload, remove };
});
