import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { acceptHMRUpdate, defineStore } from "pinia";
import firebase from "~/helpers/firebase";
import User from "~/models/user";

export type AuthCredentials = {
  email: string;
  password: string;
};

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const accessToken = ref<String | null>(null);
  const refreshToken = ref<String | null>(null);

  const signIn = (credentials: AuthCredentials): Promise<any> => {
    return new Promise<void>((resolve, reject) =>
      signInWithEmailAndPassword(
        firebase.auth,
        credentials.email,
        credentials.password
      )
        .then(() => resolve())
        .catch((error: any) => reject(error.message))
    );
  };

  const register = (data: AuthCredentials): Promise<any> => {
    return new Promise<void>((resolve, reject) =>
      createUserWithEmailAndPassword(firebase.auth, data.email, data.password)
        .then(() => resolve())
        .catch((error: any) => reject(error.message))
    );
  };

  const logout = () =>
    signOut(firebase.auth)
      .then(async () => await navigateTo("/fr/auth"))
      .catch((error) => {
        console.log(error);
      });

  const listenToFirebaseAuthStateChanges = () =>
    onAuthStateChanged(firebase.auth, async (data: any) => {
      if (data) {
        accessToken.value = data.accessToken;
        refreshToken.value = data.refreshToken;
        user.value = new User(data.uid, data.email);

        await navigateTo(localePath("/dashboard/profile"));
      } else {
        await navigateTo(localePath("auth"));
      }
    });

  return { user, signIn, register, logout, listenToFirebaseAuthStateChanges };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
