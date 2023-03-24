import { FirebaseError } from "firebase/app";
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
  provider.setCustomParameters({});

  const user = ref<User | null>(null);
  const accessToken = ref<string | null>(null);
  const refreshToken = ref<string | null>(null);

  const isAuthenticated = computed<boolean>(
    () => user != null && accessToken != null && refreshToken != null
  );

  /**
   * Asynchronously signs in using an email and password.
   * @param credentials: { email: string; password: string; }
   * @returns Promise<void | FirebaseError>
   */
  const signIn = (credentials: AuthCredentials): Promise<void> =>
    new Promise<void>((resolve, reject) =>
      signInWithEmailAndPassword(
        firebase.auth,
        credentials.email,
        credentials.password
      )
        .then(() => resolve())
        .catch((error: FirebaseError) => reject(error))
    );

  /**
   * Authenticate Using Google.
   * @returns Promise<void | FirebaseError>
   */
  const signInWithGoogle = (): Promise<void> =>
    new Promise<void>((resolve, reject) =>
      signInWithPopup(firebase.auth, provider)
        .then(() => resolve())
        .catch((error: FirebaseError) => reject(error))
    );

  /**
   * Creates a new user account associated with the specified email address and password.
   * @param data: { email: string; password: string; }
   * @returns Promise<void | FirebaseError>
   */
  const register = (data: AuthCredentials): Promise<any> =>
    new Promise<void>((resolve, reject) =>
      createUserWithEmailAndPassword(firebase.auth, data.email, data.password)
        .then(() => resolve())
        .catch((error: FirebaseError) => reject(error))
    );

  /**
   * Handle user's sign-in state changes.
   */
  const listenToFirebaseAuthStateChanges = () =>
    onAuthStateChanged(firebase.auth, async (data: any) => {
      console.log("Auth state changed", data);
      if (data) {
        accessToken.value = data.accessToken;
        refreshToken.value = data.refreshToken;
        user.value = new User(data.uid, data.email);

        /**
         * Since this event is triggered when user login or register,
         * we check if user exist in order to know which action will be the next one.
         * - Creation request if user doesn't exist.
         * - Access user data if user is already registered.
         */
        await user.value
          .refresh({ createIfNotFound: true })
          .then(async () => await navigateTo(localePath("/dashboard")))
          .catch(async (err) => {
            console.log(
              "🚀 ~ file: auth.ts:90 ~ onAuthStateChanged ~ err:",
              err
            );
            await navigateTo(localePath("/dashboard"));
          });
      } else {
        await navigateTo(localePath("/auth"));
      }
    });

  /**
   * Signs out the current user.
   */
  const logout = () =>
    signOut(firebase.auth)
      .then(async () => await navigateTo("/fr/auth"))
      .catch((error: FirebaseError) => {
        console.log(error);
      });

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
