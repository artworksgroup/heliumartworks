<template>
  <div class="dashboard-page home">
    <div class="header">
      <h1>Welcome back, john.</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>
    <div class="stats">
      <div v-for="(stat, i) in 3" :key="i" class="stat-card">
        <div class="stat-card-header">
          <SmsIcon></SmsIcon>
          <p>Medias</p>
        </div>
        <h1 class="count">24</h1>
      </div>
    </div>
    <h2>Sells history.</h2>
  </div>
</template>
