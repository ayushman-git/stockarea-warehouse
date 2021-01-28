<template>
  <div class="warehouse-detail">
    <div class="warehouse-title-wrap">
      <img
        class="warehouse-detail-img"
        :src="
          require(`../../assets/icons/${Object.keys(
            warehouseDetail
          ).toString()}.svg`)
        "
        alt="warehouse detail"
      />
      <strong>{{ detailTitle }} - </strong>
    </div>
    <span>{{ warehouseDetail[Object.keys(warehouseDetail)] }}</span>
  </div>
</template>

<script>
export default {
  name: "CardDetail",
  props: {
    warehouseDetail: {
      type: Object,
      required: true,
    },
  },
  computed: {
    detailTitle() {
      const title = Object.keys(this.warehouseDetail).toString();
      const firstLetterCap = title.charAt(0).toUpperCase() + title.slice(1);
      return firstLetterCap;
    },
  },
};
</script>

<style scoped>
.warehouse-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  width: max-content;
}
.warehouse-detail > :not(:first-child) {
  margin-left: 2rem;
}
.warehouse-detail-img {
  height: 1.6rem;
}
.warehouse-title-wrap {
  display: flex;
  align-items: center;
}

.warehouse-title-wrap > :last-child {
  margin-left: 1rem;
}
</style>