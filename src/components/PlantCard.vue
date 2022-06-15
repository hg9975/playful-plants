<template>
    <b-card
      :img-src="getImgUrl()"
      img-alt="Plant Image"
      img-top
      class="plantCard"
    >
      <b-card-title> {{ plant_id }} </b-card-title>
      <horizontal-scroll class="horizontalscroll">
        <b-button
          v-for="(tag, number) in tags"
          v-bind:key="number"
          variant="outline-dark"
          id="plantTag"
          disabled
          class="tags"
          >{{ tag }}</b-button
        >
      </horizontal-scroll>
    </b-card>
</template>

<script>
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'

export default {
  name: "plantCard",
  components: {
    HorizontalScroll
  },
  props: {
    plant_id: {
      type: String,
    },
  },
  data: function () {
    return {
      tags: this.$plant_fixtures[this.plant_id]["tags"],
    };
  },
  methods: {
    getImgUrl() {
      var plant_data = this.$plant_fixtures[this.plant_id];
      var images = plant_data.images;
      var image_url = images["image1"];
      return require("../assets/plants/" + image_url + ".jpg");
    },
  },
};
</script>

<style scoped>
.scrollx {
  margin-top: 10px;
  position: relative;
  overflow-x: scroll;
}
#plantTag {
  margin: 2px;
  font-size: 9px;
}
.card-title {
  text-align: left;
}
.card{
  width:100%;
  break-inside: avoid;
  margin-bottom: 10px;
}

.tags {
  margin-right: 3px;
  display: inline-block;
  padding: 5px;
}

.horizontalscroll {
  overflow-x: auto;
}
</style>
