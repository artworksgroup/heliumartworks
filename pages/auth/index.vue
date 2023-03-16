<template>
  <div id="login-views" class="flex w-full">
    <form
      class="auth-form flex flex-col items-start"
      @submit.prevent="authenticate"
    >
      <AppLogo />
      <div class="head-texts mt-auto">
        <h1>
          Enter our world of photography and join the millions of creative.
        </h1>
        <p>Join our community of photographers and creatives.</p>
      </div>
      <div class="google flex">
        <button class="button button--surface flex-1 flex">
          <IconGoogle />
          <span>Sign in with google.</span>
        </button>
      </div>
      <div class="sep w-full">
        <p>OR</p>
      </div>
      <div class="inputs w-full">
        <div class="input">
          <IconSms />
          <input
            v-model="userCredentials.email"
            type="text"
            placeholder="Email."
            autocomplete="disabled"
          />
        </div>
        <div class="input">
          <IconCheck />
          <input
            v-model="userCredentials.password"
            type="password"
            placeholder="Password."
          />
        </div>
      </div>
      <div class="actions flex justify-between w-full mb-auto">
        <button class="button button--flat" type="button">
          Forgot your password?
        </button>
        <button class="button button--primary" type="submit">
          Get started
        </button>
      </div>
      <div class="flex items-center justify-between">
        <p>Help</p>
        <p>copyright</p>
      </div>
    </form>
    <AuthScreenGallery class="flex-1" />
  </div>
</template>

<script setup lang="ts">
import { emailIsValid } from "~/helpers/utils";
import type { AuthCredentials } from "~/stores/repositories/auth";
import { useAuthStore } from "~/stores/repositories/auth";

const auth = useAuthStore();

const userCredentials = ref<AuthCredentials>({
  email: "",
  password: "",
});
const errors = ref<{ email: boolean; password: boolean }>();

const credentialsAreValid = (): boolean => {
  if (
    userCredentials.value.email.length > 0 &&
    emailIsValid(userCredentials.value.email) &&
    userCredentials.value.password.length > 0
  ) {
    errors.value = {
      email: false,
      password: false,
    };
    return true;
  } else if (
    (userCredentials.value.email.length === 0 ||
      !emailIsValid(userCredentials.value.email)) &&
    userCredentials.value.password.length > 0
  ) {
    errors.value = {
      email: true,
      password: false,
    };
  } else if (
    userCredentials.value.email.length > 0 &&
    emailIsValid(userCredentials.value.email) &&
    userCredentials.value.password.length === 0
  ) {
    errors.value = {
      email: false,
      password: true,
    };
  } else if (
    (userCredentials.value.email.length === 0 ||
      !emailIsValid(userCredentials.value.email)) &&
    userCredentials.value.password.length === 0
  ) {
    errors.value = {
      email: true,
      password: true,
    };
  }
  return false;
};

const authenticate = async () => {
  if (credentialsAreValid()) {
    await auth.signIn(userCredentials.value).catch(async (err) => {
      if (err.code === "400") {
        await auth.register(userCredentials.value).catch((err) => {
          console.log(err);
        });
      } else console.log(err);
    });
  } else alert("invalid credentails");
};

watch(
  () => userCredentials.value,
  () => {
    credentialsAreValid();
  }
);
</script>
