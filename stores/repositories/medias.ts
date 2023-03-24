import { defineStore } from "pinia";
import { Media, UploadedMedia, FileUploadCallback } from "~/models/media";

export const useMediasStore = defineStore("medias", () => {
  const medias = ref<Array<Media>>([]);
  const waitingMedias = ref<number>(0);

  const getAll = (): Promise<void> =>
    new Promise((resolve, reject) =>
      Media.getAll()
        .then((__medias) => {
          medias.value = __medias;
          resolve();
        })
        .catch((err) => reject(err))
    );

  const upload = (
    media: UploadedMedia,
    onUploadProgress?: FileUploadCallback
  ): Promise<void> =>
    new Promise((resolve, reject) =>
      media
        .up(onUploadProgress)
        .then(() => {
          waitingMedias.value++;
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        })
    );

  const remove = () => {};

  return { waitingMedias, getAll, upload, remove };
});
