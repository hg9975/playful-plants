<template>
  <div class="plant">
     <div  class="header">
       <!-- Header for sidebar existing -->
        <h2 class="planttitle">Plant Catalog</h2>
        <!-- Header for bottom navigation bar existing -->
        <h2 class="sm_planttitle">Playful Plants</h2>
        <div class="inp-box">
          <b-form-input
            type="text"
            class="form-control"
            placeholder="Search"
            readonly
          ></b-form-input>
          <b-button type="submit" variant="success"
          class="search-btn">Search</b-button>
          <filterList v-on:update-plantlist="updatePlants"
                      v-on:selected-tags="updateTags"
                      class="updateplants"/>
        </div>
     </div>
    <b-container fluid class="main-view">
      <b-row>
        <div v-if="this.$selectedtags.length < 5" class="filterTags">
            <h5 class="tagHeader">Selected Plant Tags: </h5>
            <b-button
              v-for="(tag, number) in this.$selectedtags"
              v-bind:key="number"
              variant="success"
              id="plantTag"
              disabled
              class="tags"
              >{{ tag }}
            </b-button>
        </div>
      </b-row>
      <b-row>
        <div class="waiBox">
          <div class="scroller">
            <plantCard
              v-for="value in plants"
              v-bind:plant_id="value"
              v-on:click.native="ShowDetail(value)"
              v-bind:key="value.id"
            />
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import plantCard from "@/components/PlantCard.vue";
import filterList from "@/components/FilterList.vue";
import Vue from "vue";
export default {
  name: "PlantView",
  components: {
    plantCard,
    filterList,
  },
  data: function () {
    return {
      plants: Vue.prototype.$selectedPlants,
    };
  },
  methods: {
    ShowDetail(plantId) {
      this.$router.push(`/plant/${plantId}`);
    },
    updatePlants(p1) {
      this.plants = p1;
      // console.log("Plants: ", p1);
    },
    updateTags(t1) {
      console.log("T1", t1);
      this.$selectedtags = t1;
    }
  },
};
</script>

<style scoped>
.header{
  position: fixed;
  z-index: 99;
  background: #fff;
  padding-bottom: 10px;
  top:0;
}
.inp-box{
  display: flex;
  justify-content: center;
}
.search-btn{
  margin-left: 10px;
  flex:1;
}
/* set layout for tablets, large tablets, and desktops*/
@media only screen and (min-width:600px) {
  .plant {
    margin-left: 200px;
  }
  .header{
    width: calc(100% - 200px);
  }
  .inp-box{
    padding: 0 15px;
  }
  .planttitle{
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
  }
  .sm_planttitle{
    display: none;
  }
}
/* set layout for phones */
@media only screen and (max-width:600px) {
  .plant{
    width: 100%;
    min-width: 360px;
    margin-bottom:100px
  }
  .header{
    width: 100%;
  }
  .inp-box{
    padding: 0 5px;
  }
  .search-btn{
    margin-left: 5px;
  }
  .planttitle{
    display: none;
  }
  .sm_planttitle{
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
  }
}
@media screen and (max-width: 960px){
  .scroller {
    position: relative;
    column-count: 2 !important;
    column-gap: 20px;
  }
}

@media screen and (max-width: 768px){
  .scroller {
    position: relative;
    column-count: 1 !important;
    column-gap: 20px;
  }
  .filterTags {
    margin-top: 0px;
    margin-bottom: 10px;
  }
  .tagHeader {
    font-size: 16px;
  }
  .tags {
    font-size: 10px;
  }
}
@media screen and (min-width: 768px){
  .filterTags {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .tags {
    font-size: 12px;
  }
}

.main-view {
  width: 100%;
  min-width: 300px;
  margin-top: 130px;
}
.scroller {
  position: relative;
  column-count: 3;
  column-gap: 20px;
  text-align: left;
}
.searchButton {
  margin-left: 0px;
}

.filterTags {
  width: 100%;
  text-align: left;
}
.tagHeader {
  display: inline;
  margin-right: 5px;
  color: #198754
}
.tags {
  display: inline;
  justify-content: start;
  margin-left: 3px;
  margin-bottom: 2px;
  padding: 5px;
  font-weight: bold;
}

.form-control {
  flex:6;
}

.updateplants {
  flex:1;
}
</style>
