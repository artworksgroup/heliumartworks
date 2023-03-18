import { FirebaseOptions } from "firebase/app";

const http: { baseUrl: string; requestTimeout: number } = {
  baseUrl: import.meta.env.VITE_API_BASE_URL as string,
  requestTimeout:
    (import.meta.env.VITE_HTTP_REQUEST_TIMEOUT as unknown as number) ?? 5000,
};

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase: { appConfigs: FirebaseOptions } = {
  appConfigs: {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY as string | undefined,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN as string | undefined,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID as string | undefined,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET as
      | string
      | undefined,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID as
      | string
      | undefined,
    appId: import.meta.env.VITE_FIREBASE_APPID as string | undefined,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID as
      | string
      | undefined,
  },
};

export default { http, firebase };
