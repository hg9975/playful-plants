import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import plantFixtures from './data/plants.json'
import journalFixtures from './data/journals.json'
import profileFixtures from './data/profiles.json'

import { BootstrapVue, IconsPlugin, LayoutPlugin, ModalPlugin } from 'bootstrap-vue'

// Import Bootstrap, BootstrapVue CSS files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// create global fixture dataVariables
Vue.prototype.$plant_fixtures = plantFixtures;
Vue.prototype.$journal_fixtures = journalFixtures;
Vue.prototype.$profile_fixtures = profileFixtures;

//temporary journal data
Vue.prototype.$photo = null;  //object
Vue.prototype.$title = null;
Vue.prototype.$date = null;
Vue.prototype.$creator = null;
Vue.prototype.$text = null;
Vue.prototype['$to-do'] = {};

Vue.prototype.$update_data = journalFixtures['update'];
//global variable to calculate the total number of journals
Vue.prototype.$cnt = 6;

//dictionary from "tags" to plants
var allplanttags = ['edible', 'visually appealing', 'nature attracting', 'bird friendly', 'colorful'];
var PlantTags = {'edible': [], 'visually appealing': [], 'nature attracting': [], 'bird friendly': [], 'colorful': []};
for (var plant in plantFixtures) {
  for (var tag in plantFixtures[plant]["tags"]) {
    var cur_tag = plantFixtures[plant]["tags"][tag];
    if (allplanttags.includes(cur_tag)) {
      PlantTags[cur_tag].push(plant);
    }
  }
}
Vue.prototype.$tags_obj = PlantTags;
Vue.prototype.$selectedPlants = Object.keys(plantFixtures);
// console.log(Vue.prototype.$selectedPlants);
Vue.prototype.$selectedtags = allplanttags;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Install BootstapVue Layout plugin
Vue.use(LayoutPlugin)
// Install Vue Modal plugin
Vue.use(ModalPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
