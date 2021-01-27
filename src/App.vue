<template>
  <div id="app" :style="changeTheme">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar/NavigationBar";
export default {
  name: "App",
  components: { NavigationBar },
  computed: {
    changeTheme() {
      let style = {};
      if (this.$route.name === "Home") {
        style = {
          "background-color": "#f5f7fa",
        };
      } else {
        style = {
          "background-color": "#191919",
        };
      }
      return style;
    },
  },
};
</script>

<style>
#nav {
  background-color: rgb(24, 24, 24);
  padding: 1rem;
}
#app {
  min-height: 100vh;
  color: rgb(26, 26, 26);
  transition: all 0.4s ease-in-out;
}
</style>
