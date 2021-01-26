<template>
  <section class="home">
    <SearchBar placeholder="Enter warehouse name" />
    <section>
      <WarehouseCard
        v-for="warehouse in warehouses"
        :key="warehouse.id"
        :name="warehouse.name"
        :isLive="warehouse.is_live"
        :isRegistered="warehouse.is_registered"
      />
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";
import SearchBar from "@/components/SearchBar/SearchBar";
import WarehouseCard from "@/components/WarehouseCard/WarehouseCard";
export default {
  name: "Home",
  components: { SearchBar, WarehouseCard },
  computed: {
    ...mapState(["warehouses"]),
  },
};
</script>
