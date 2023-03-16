<template>
  <div id="login-views" class="flex w-full">
    <form class="auth-form flex flex-col items-start" @submit.prevent="login">
      <AppLogo />
      <div class="head-texts mt-auto">
        <h1>Enter our world of photography and join the millions of creative.</h1>
        <p>Join our community of photographers and creatives.</p>
      </div>
      <div class="google flex">
        <button class="button button--surface flex-1 flex">
          <IconGoogle/>
          <span>Sign in with google.</span>
        </button>
      </div>
      <div class="sep w-full">
        <p>OR</p>
      </div>
      <div class="inputs w-full">
        <div class="input">
          <IconSms/>
          <input type="text" placeholder="Email.">
        </div>
        <div class="input">
          <IconCheck/>
          <input type="password" placeholder="Password.">
        </div>
      </div>
      <div class="actions flex justify-between w-full mb-auto">
        <button class="button button--flat" type="button">Forgot your password?</button>
        <button class="button button--primary" type="submit">Get started</button>
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
  const login = () => {}
</script>
