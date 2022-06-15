<template>
  <b-container class="filterlist">
    <b-icon
      class="icons"
      icon="filter"
      scale="2"
      @click="$bvModal.show('filter-options')"
      variant="dark"
    ></b-icon>

    <b-modal
      id="filter-options"
      class="filter-popup"
      size="sm"
      centered
    >
      <template #modal-header="{ close }">
        <h4>Filter by Purpose</h4>
        <b-icon-x-lg size="sm" @click="close()">
        </b-icon-x-lg>
      </template>

       <template #default>
        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-checkbox class="options"
            v-for="option in options"
            v-model="selected"
            :key="option.value"
            :value="option.value"
            :aria-describedby="ariaDescribedby"
            name="filterlist"
          >
            <p class="option_text"> {{ option.text }} </p>
          </b-form-checkbox>
        </b-form-group>
       </template>

       <template #modal-footer>
         <b-button variant="outline-secondary" @click="ClearAllOptions()">Clear</b-button>
         <b-button variant="outline-secondary" @click="SelectAllOptions()">Select All</b-button>
         <b-button variant="success" @click="ApplyFilter()">Apply</b-button>
       </template>
    </b-modal>
  </b-container>
</template>

<script>
import Vue from "vue";
export default {
  name: "FilterList",
  data() {
    return {
      selected: Vue.prototype.$selectedtags,
      options: [
        { text: "Edible", value: "edible" },
        { text: "Visual Interest", value: "visually appealing" },
        { text: "Nature Attracting", value: "nature attracting" },
        { text: "Bird Attracting", value: "bird friendly" },
        { text: "Colorful", value: "colorful" },
      ],
    };
  },
  methods: {
    ApplyFilter() {
      Vue.prototype.$selectedtags = this.selected;
      // console.log(this.$selectedtags);
      var plantSet = new Set();
      for (var tag in this.selected) {
        for (var plant in Vue.prototype.$tags_obj[this.selected[tag]]) {
          plantSet.add(Vue.prototype.$tags_obj[this.selected[tag]][plant]);
        }
      }
      plantSet = Array.from(plantSet);
      Vue.prototype.$selectedPlants = plantSet;
      // console.log(Vue.prototype.$selectedPlants);
      this.$emit('update-plantlist', plantSet);
      this.$emit('selected-tags', this.selected);
      console.log(this.selected);
      this.$bvModal.hide("filter-options");
    },

    ClearAllOptions() {
      this.selected = [];
    },
    SelectAllOptions() {
      this.selected = ['edible', 'visually appealing', 'nature attracting', 'bird friendly', 'colorful'];
    }
  },
};
</script>

<style scoped>
@media only screen and (max-width:850px){
  .icons{
    font-size: 20px;
  }
}
@media only screen and (min-width:850px){
  .icons{
    font-size: 24px;
  }
}

.icons{
  position: absolute;
  right: 15px;
}

.option_text {
  margin-left:10px;
}

.filteroptions {
  text-align: left;
  font-size: 20px;
  margin-left: 30px;
}

.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.labels {
  font-weight:bold;
  font-size:24px;
  margin-bottom:10px;
  margin-left:auto;
  margin-right:auto;
  text-align:center;
}

</style>
