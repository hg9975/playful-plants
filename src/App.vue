<template>
  <div id="app">
    <navBar class="nav" />
    <router-view />
  </div>
</template>

<script>
import navBar from "@/components/NavigationBar.vue";

export default {
  name: "mainView",
  components: {
    navBar,
  },
  created() {
    //saveToLocalStorage
    window.localStorage.removeItem("origin_journals");
    window.localStorage.removeItem("update_journals");
    var originDataToLocal = JSON.stringify(this.$journal_fixtures.shown);
    var updateDataToLocal = JSON.stringify(this.$journal_fixtures.update);
    window.localStorage.setItem("origin_journals", originDataToLocal);
    window.localStorage.setItem("update_journals", updateDataToLocal);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}

/* set layout for phones */
@media only screen and (max-width:600px) {
  #app {
    min-width: 360px;
  }
}
/* set layout for tablets */
@media only screen and (min-width:600px) and (max-width:768px) {
  #app {
    min-width: 600px;
  }
}

.nav {
  position: absolute;
  bottom: 0;
  padding-bottom: 13px;
}

</style>
