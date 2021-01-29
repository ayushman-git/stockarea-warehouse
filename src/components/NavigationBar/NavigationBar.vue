<template>
  <nav id="navbar">
    <router-link :to="{ name: 'Home' }">
      <img class="logo" src="../../assets/logo/logo.png" alt="logo" />
    </router-link>
    <router-link :to="{ name: 'Home' }">
      <button class="button button-clear">Warehouses</button>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style scoepd>
#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10%;
  box-shadow: 2px 2px 35px -1px rgba(0, 0, 0, 0.45);
}

.logo {
  height: 2.2rem;
}
</style>