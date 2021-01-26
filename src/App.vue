<template>
  <NavigationBar />
  <router-view />
</template>

<script>
import NavigationBar from "@/components/NavigationBar/NavigationBar";
export default {
  name: "App",
  components: { NavigationBar },
};
</script>

<style>
#nav {
  background-color: rgb(24, 24, 24);
  padding: 1rem;
}
body {
  background-color: #f5f7fa;
}
</style>
