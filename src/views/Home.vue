<template>
  <section class="home">
    <SearchBar placeholder="Enter warehouse name" />
  </section>
</template>

<script>
import SearchBar from "@/components/SearchBar/SearchBar";
export default {
  name: "Home",
  components: { SearchBar },
};
</script>
