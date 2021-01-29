<template>
  <section class="home">
    <img
      class="hero-img"
      src="../assets/images/warehouse.jpg"
      alt="warehouse"
    />
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
      <aside><FilterTool @dropdown="dropdownHandler" @reset="reset" /></aside>
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
      const filterParams = {};
      if (this.searchFilterParam) filterParams.name = [this.searchFilterParam];
      if (this.cityFilterParam) filterParams.city = [this.cityFilterParam];
      if (this.clusterFilterParam)
        filterParams.cluster = [this.clusterFilterParam];
      if (this.typeFilterParam) filterParams.type = [this.typeFilterParam];
      if (this.spaceFilterParam)
        filterParams.space_available = [this.spaceFilterParam];

      const filterKeys = Object.keys(filterParams);
      const a = this.warehouses.filter((warehouse) => {
        return filterKeys.every((key) => {
          if (!filterParams[key].length) {
            return true;
          }
          return filterParams[key].find((filter) => {
            if (key === "space_available") {
              return warehouse[key] >= filter;
            } else {
              return warehouse[key]
                .toLowerCase()
                .includes(filter.toLowerCase());
            }
          });
        });
      });
      return a;
    },
    ...mapState(["warehouses"]),
  },
  methods: {
    reset() {
      this.searchFilterParam = "";
      this.searchFilterParam = "";
      this.cityFilterParam = "";
      this.clusterFilterParam = "";
      this.typeFilterParam = "";
      this.spaceFilterParam = 0;
    },
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
        console.log(inp);
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
  position: relative;
}
main a {
  color: rgb(94 94 94);
}
.searchbar-warp {
  text-align: center;
}
</style>
