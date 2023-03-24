import { defineStore } from "pinia";
import { useMediasStore } from "../repositories/medias";
import { UploadedMedia, MediaTypes } from "~/models/media";

export const useUploaderStore = defineStore("upload", () => {
  const medias = useMediasStore();

  const file = ref<File | null>(null);
  const uploadProgress = ref<number>(0);

  const hasFile = computed(
    () => file.value != null && file.value !== undefined
  );
  const fileIsImage = computed<boolean>(() => {
    if (hasFile.value) {
      const ext = file.value!.name.split(".").pop();
      return ext === "jpg" || ext === "png";
    }

    return false;
  });
  const uploadInProgess = computed<boolean>(() => uploadProgress.value > 0);

  const selectFile = (fileInput: HTMLInputElement | undefined) => {
    if (fileInput?.files) file.value = fileInput.files[0];
    else console.error("Cannot load file! Invalid file input reference");
  };
  const removeFile = () => {
    file.value = null;
  };

  const getPreview = (): string | undefined => {
    if (hasFile.value && fileIsImage.value)
      return URL.createObjectURL(file.value!);
    else console.error("Cannot load preview !!!");
  };

  const cancelUpload = () => {
    removeFile();
    uploadProgress.value = 0;
  };

  const upload = (): Promise<void> =>
    new Promise((resolve, reject) =>
      medias
        .upload(
          new UploadedMedia(file.value!.name, MediaTypes.Photos, file.value!),
          (progress) => {
            uploadProgress.value = progress;
          }
        )
        .then(() => resolve())
        .catch((err) => {
          cancelUpload();
          reject(err);
        })
    );

  return {
    hasFile,
    file,
    fileIsImage,
    selectFile,
    getPreview,
    upload,
    uploadProgress,
    uploadInProgess,
    cancelUpload,
  };
});
