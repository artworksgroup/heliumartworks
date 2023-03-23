import { defineStore } from "pinia";
import { useMediasStore } from "../repositories/medias";

export const useUploaderStore = defineStore("upload", () => {
  const medias = useMediasStore();

  let timer: NodeJS.Timer;

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

  const cancelUpload = (deleteFromServer = false) => {
    clearInterval(timer);
    removeFile();

    if (uploadInProgess && deleteFromServer) medias.remove();

    uploadProgress.value = 0;
  };

  const upload = () => {
    let elapsedTime = -1;
    timer = setInterval(() => {
      if (uploadProgress.value >= 100) {
        cancelUpload();
        medias.upload();
      } else {
        elapsedTime++;
        uploadProgress.value = Math.round((100 * elapsedTime) / 5000);
      }
    }, 5);
  };

  return {
    hasFile,
    file,
    fileIsImage,
    selectFile,
    getPreview,
    upload,
    uploadProgress,
    cancelUpload,
  };
});
