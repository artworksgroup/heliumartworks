import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import configs from "~/configs";

// Initialize Firebase
const app = initializeApp(configs.firebase.appConfigs);
const auth = getAuth(app);

auth.languageCode = "en"; // Todo: Use website locale

export default { app, auth };
