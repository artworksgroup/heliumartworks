import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import configs from "~/configs";

// Initialize Firebase
const app = initializeApp(configs.firebase.appConfigs);

export default { app, auth: getAuth(app) };
