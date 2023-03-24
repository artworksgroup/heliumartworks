<template>
  <div id="login-views" class="flex w-full">
    <div class="auth-form flex flex-col items-start">
      <AppLogo />
      <div class="head-texts mt-auto">
        <h1>Join the millions of creative.</h1>
        <p>Join our community of photographers and creatives.</p>
      </div>
      <div class="google flex">
        <button
          class="button button--surface google--button flex-1 flex"
          @click.prevent="signInWithGoogle"
        >
          <GoogleIcon />
          <span>Sign in with google.</span>
        </button>
      </div>
      <div class="sep w-full">
        <p>OR</p>
      </div>
      <form class="mb-auto w-full" @submit.prevent="authenticate">
        <div class="inputs w-full">
          <div class="input">
            <SmsIcon />
            <input
              v-model="userCredentials.email"
              type="text"
              placeholder="Email."
              autocomplete="email"
            />
          </div>
          <div class="input">
            <CheckIcon />
            <input
              v-model="userCredentials.password"
              type="password"
              placeholder="Password."
              autocomplete="current-password"
            />
          </div>
        </div>
        <div class="actions flex justify-between w-full">
          <button class="button button--primary" type="submit">
            Get started
          </button>
          <button class="button button--flat" type="button">
            Forgot your password?
          </button>
        </div>
      </form>
      <div class="flex items-center justify-between">
        <p>Help</p>
        <p>copyright</p>
      </div>
    </div>
    <AuthScreenGallery class="flex-1" />
  </div>
</template>

<script setup lang="ts">
import { AuthErrorCodes } from "@firebase/auth";
import type { FirebaseError } from "@firebase/util";
import type { AuthCredentials } from "~/stores/repositories/auth";
import { useAuthStore } from "~/stores/repositories/auth";

const auth = useAuthStore();
const { $isValidEmail } = useNuxtApp();

const userCredentials = ref<AuthCredentials>({
  email: "",
  password: "",
});
/**
 * Handle errors
 * attributes are of boolean type
 * Ex: if `email` is true, the email input will be outlined with red border.
 */
const errors = ref<{ email: boolean; password: boolean }>();

/**
 * Validate input values
 */
const credentialsAreValid = (): boolean => {
  if (
    userCredentials.value.email.length > 0 &&
    $isValidEmail(userCredentials.value.email) &&
    userCredentials.value.password.length > 0
  ) {
    errors.value = {
      email: false,
      password: false,
    };
    return true;
  } else if (
    (userCredentials.value.email.length === 0 ||
      !$isValidEmail(userCredentials.value.email)) &&
    userCredentials.value.password.length > 0
  ) {
    errors.value = {
      email: true,
      password: false,
    };
  } else if (
    userCredentials.value.email.length > 0 &&
    $isValidEmail(userCredentials.value.email) &&
    userCredentials.value.password.length === 0
  ) {
    errors.value = {
      email: false,
      password: true,
    };
  } else if (
    (userCredentials.value.email.length === 0 ||
      !$isValidEmail(userCredentials.value.email)) &&
    userCredentials.value.password.length === 0
  ) {
    errors.value = {
      email: true,
      password: true,
    };
  }
  return false;
};

/**
 * Handle firebase registration
 * This will only be called if credentials given by the user are not registered in firebase database.
 */
const register = async () => {
  await auth.register(userCredentials.value).catch((err: FirebaseError) => {
    console.log(err.message);
  });
};

/**
 * Handle Email/Password authentication.
 * If credentials given are not registered yet, the `register` function is called.
 */
const authenticate = async () =>
  // Check credentials validity
  credentialsAreValid()
    ? await auth.signIn(userCredentials.value).catch((err: FirebaseError) => {
        // For firebase auth error codes, please check
        // https://firebase.google.com/docs/reference/js/auth#autherrorcodes
        if (err.code === AuthErrorCodes.USER_DELETED) register();
        else console.log(err.message);
      })
    : // Todo: Display invalid credentials errors.
      alert("invalid credentials");

/**
 * Handle Google account based authentication.
 * Check https://firebase.google.com/docs/auth/web/google-signin if you want know more.
 */
const signInWithGoogle = async () =>
  await auth.signInWithGoogle().catch((err: FirebaseError) => {
    console.log("🚀 ~ file: index.vue:129 ~ err:", err);
  });

/**
 * Reset errors when input value changes
 * https://vuejs.org/guide/essentials/watchers.html#eager-watchers
 */
watch(
  () => userCredentials.value,
  () => {
    credentialsAreValid();
  }
);
</script>
