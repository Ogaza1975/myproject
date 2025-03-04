<template>
  <div class="app-container">
    <nav>
      <router-link to="/" class="nav-link">🏠หน้าหลัก</router-link>
      <router-link to="/basket" class="nav-link">🛒ตะกร้า</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  display: flex;
  gap: 15px;
  padding: 15px;
  background: linear-gradient(to right, #66ff8c, #8fe5ac);
  margin: 0;
  font-family: Arial, sans-serif;
}

.nav-link {
  color: rgb(0, 38, 255);
  text-decoration: none;
  font-size: 25px;
  margin-right: 30px;
}


body {
  background: linear-gradient(to right, #d4e48e, #e99b68);
  color: rgb(0, 0, 0);
  margin: 0;
  font-family: Arial, sans-serif;
}

.app-container {
  padding: 20px;
}
</style>