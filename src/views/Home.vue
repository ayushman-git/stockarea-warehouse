<template>
  <section class="home">
    <aside class="searchbar-warp">
      <SearchBar placeholder="Enter warehouse name" @search="searchHandler" />
    </aside>
    <main>
      <section>
        <div v-for="warehouse in filteredWarehouses" :key="warehouse.id">
          <router-link
            :to="{
              name: 'Warehouse',
              params: {
                id: warehouse.id,
              },
            }"
          >
            <WarehouseCard
              :name="warehouse.name"
              :isLive="warehouse.is_live"
              :isRegistered="warehouse.is_registered"
              :city="warehouse.city"
              :space="warehouse.space_available"
              :type="warehouse.type"
              :cluster="warehouse.cluster"
            />
          </router-link>
        </div>
      </section>
      <aside><FilterTool @dropdown="dropdownHandler" /></aside>
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
  data() {
    return {
      searchFilterParam: "",
      cityFilterParam: "",
      clusterFilterParam: "",
      typeFilterParam: "",
      spaceFilterParam: 0,
    };
  },
  computed: {
    filteredWarehouses() {
      // let result = [];
      if (
        this.searchFilterParam ||
        this.cityFilterParam ||
        this.clusterFilterParam ||
        this.typeFilterParam ||
        this.spaceFilterParam
      ) {
        return this.warehouses.filter((warehouse) => {
          // return (
          //   warehouse.city.toLowerCase() === this.cityFilterParam &&
          //   warehouse.type.toLowerCase() === this.typeFilterParam
          // );

          return warehouse.city.toLowerCase() === this.cityFilterParam;
          // return warehouse.type.toLowerCase() === this.typeFilterParam;
          // return warehouse.name.toLowerCase().includes(this.searchFilterParam);
          // return warehouse.cluster.toLowerCase() === this.clusterFilterParam;
          // return warehouse.space_available >= this.spaceFilterParam;
        });
        // result = [...filteredByName];
      }
      return this.warehouses;
    },
    ...mapState(["warehouses"]),
  },
  methods: {
    searchHandler(searchWord) {
      this.searchFilterParam = searchWord;
    },
    dropdownHandler(inp) {
      if (Object.keys(inp).toString() === "city") {
        this.cityFilterParam = inp[Object.keys(inp)];
      }
      if (Object.keys(inp).toString() === "cluster") {
        this.clusterFilterParam = inp[Object.keys(inp)];
      }
      if (Object.keys(inp).toString() === "type") {
        this.typeFilterParam = inp[Object.keys(inp)].toLowerCase();
      }
      if (Object.keys(inp).toString() === "space") {
        this.spaceFilterParam = inp[Object.keys(inp)];
      }
    },
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
