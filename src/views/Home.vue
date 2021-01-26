<template>
  <section class="home">
    <aside class="searchbar-warp">
      <SearchBar placeholder="Enter warehouse name" />
    </aside>
    <main>
      <section>
        <WarehouseCard
          v-for="warehouse in warehouses"
          :key="warehouse.id"
          :name="warehouse.name"
          :isLive="warehouse.is_live"
          :isRegistered="warehouse.is_registered"
          :city="warehouse.city"
          :space="warehouse.space_available"
          :type="warehouse.type"
          :cluster="warehouse.cluster"
        />
      </section>
      <aside><FilterTool /></aside>
    </main>
  </section>
</template>

<script>
import { mapState } from "vuex";
import SearchBar from "@/components/SearchBar/SearchBar";
import WarehouseCard from "@/components/WarehouseCard/WarehouseCard";
import FilterTool from "@/components/FilterTool/FilterTool";
export default {
  name: "Home",
  components: { SearchBar, WarehouseCard, FilterTool },
  computed: {
    ...mapState(["warehouses"]),
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: center;
}
.searchbar-warp {
  text-align: center;
}
</style>
