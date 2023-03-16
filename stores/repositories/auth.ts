import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { acceptHMRUpdate, defineStore } from "pinia";
import firebase from "~/helpers/firebase";

export type AuthCredentials = {
  email: string;
  password: string;
};

export const useAuthStore = defineStore("auth", () => {
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
    signOut(firebase.auth).catch((error) => {
      console.log(error);
    });

  const listenToFirebaseAuthStateChanges = () =>
    onAuthStateChanged(firebase.auth, (user: any) => {
      if (user) {
        console.log(user);
      } else {
        console.log("redirect");
      }
    });

  return { signIn, register, logout, listenToFirebaseAuthStateChanges };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
