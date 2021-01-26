<template>
  <nav id="navbar">
    <img class="logo" src="../../assets/logo/logo.png" alt="logo" />
    <button class="button button-clear">Warehouses</button>
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
  padding: 1rem 5rem;
  border-bottom: 1px solid black;
}

.logo {
  height: 2.2rem;
}
</style>