import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { acceptHMRUpdate, defineStore } from "pinia";
import firebase from "~/helpers/firebase";
import User from "~/models/user";

export type AuthCredentials = {
  email: string;
  password: string;
};

export const useAuthStore = defineStore("auth", () => {
  const localePath = useLocalePath();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    login_hint: "user@example.com",
  });

  const user = ref<User | null>(null);
  const accessToken = ref<String | null>(null);
  const refreshToken = ref<String | null>(null);

  const isAuthenticated = computed<boolean>(
    () => user != null && accessToken != null && refreshToken != null
  );

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

  const signInWithGoogle = () =>
    signInWithPopup(firebase.auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        accessToken.value = credential?.accessToken ?? null;
        refreshToken.value = result.user.refreshToken;
        user.value = new User(result.user.uid, result.user.email!);
        onAuthSuccess();
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);

        console.log(
          "🚀 ~ file: auth.ts:53 ~ useAuthStore ~ errorMessage:",
          errorMessage
        );
      });

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

        onAuthSuccess();
      } else {
        await navigateTo("auth");
      }
    });

  const onAuthSuccess = async () => await navigateTo(localePath("/dashboard"));

  return {
    isAuthenticated,
    user,
    signIn,
    signInWithGoogle,
    register,
    logout,
    listenToFirebaseAuthStateChanges,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
