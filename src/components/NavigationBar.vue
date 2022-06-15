<template>
  <div>
    <div class="sidebar">
      <b-sidebar
        width="200px"
        class="side-nav"
        :visible="true"
        no-header-close
        :no-close-on-route-change="true"
        :no-close-on-esc="true"
        :no-close-on-backdrop="true"
        bg-variant="success"
        text-variant="light"
        shadow
      >
        <!-- Customize Header -->
        <template v-slot:header>
          <b-img :src="require('../assets/icons/logo.png')" width=60 height=60 class="logo">
          </b-img>
          <h4 class="brand">Playful Plants</h4>
        </template>
        <!-- Customize Footer -->
        <template v-slot:footer>
          <b-button squared block variant="outline-light" class="logoutButton">
            <b-icon icon="power" aria-hidden="true"></b-icon>
            <p class="logout">Logout</p>
          </b-button>
        </template>

        <!-- Navigation Bar -->
        <b-nav vertical class="w-100 desktop">
          <b-nav-item class="w-100 navItem" to="/" exact>
            <b-icon
              icon="flower1"
              size="lg"
              class="icons"
            ></b-icon>
            <p class="sidebarp">Plant</p>
          </b-nav-item>
          <b-nav-item
            class="w-100 navItem"
            to="/journal"
            exact
          >
            <b-icon
              icon="journal-richtext"
              size="lg"
              class="icons"
            ></b-icon>
            <p class="sidebarp">Journal</p>
          </b-nav-item>
          <b-nav-item class="w-100 navItem" to="/profile" exact>
            <b-icon
              icon="person-fill"
              size="lg"
              class="icons"
            ></b-icon>
            <p class="sidebarp">Profile</p>
          </b-nav-item>
        </b-nav>
      </b-sidebar>
    </div>

    <div class="hnavbar">
      <b-navbar class="navBar" type="dark" variant="success" fixed="bottom">
        <b-navbar-nav class="w-100 ml-auto" align="center" justified>
          <!-- to Plant Catalog Page -->
          <b-nav-item class="navItem" to="/" exact>
            <b-icon icon="flower1" class="mt-3"></b-icon>
            <b-nav-text class="hnavbarp"> Plant </b-nav-text>
          </b-nav-item>
          <!-- to Journal Page -->
          <b-nav-item class="navItem" to="/journal" exact>
            <b-icon icon="journal-richtext" class="mt-3"></b-icon>
            <b-nav-text class="hnavbarp"> Journal </b-nav-text>
          </b-nav-item>
          <!-- to Profile Page -->
          <b-nav-item class="navItem" to="/profile" exact>
            <b-icon icon="person-fill" class="mt-3"></b-icon>
            <b-nav-text class="hnavbarp"> Profile </b-nav-text>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style scooped>
/* set layout for phones */
@media only screen and (max-width:600px) {
  /* show bottom navigation */
  .hnavbar {
    display: block;
  }
  /* hide side navigation */
  .sidebar {
    display: none;
  }
  .navbar {
    position: absolute;
  }
  .navBar {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    width: 100%;
    min-width: 360px;
    height: 80px;
    position: fixed;
    bottom: 0;
  }

}
/* set layout for tablets, large tablets, and desktops*/
@media only screen and (min-width:600px) {
  .nav-link {
    color: white;
  }
  /* hide bottom navigation */
  .hnavbar {
    display: none;
  }
  .desktop {
    position: absolute;
    top: 100px;
    left: 0px;
  }
  /* show sidebar navigation */
  .navItem {
    display: flex;
    align-items: left;
    margin-left: 20px;
    margin-top: 25px;
    font-size: 20px;
    fill: white;
  }
  .icons {
    margin-right: 20px;
    color: white;
  }
}

.brand{
  margin-left: 5px;
  text-align: left;
  margin-top: 15px;
  font-family: Chalkduster, fantasy;
  font-size: 25px;
}

.logoutButton {
  width: 100%;
  /* margin-bottom: 15px; */
}

.logout {
  font-weight: bold;
  display: inline;
  margin-left: 10px;
}

.sidebarp {
  color: white;
  display: inline;
}

.sidebarp:hover{
  font-weight:bold;
}

.router-link-exact-active {
  font-weight: bold;
}

.hnavbarp {
  color: white;
}

.hnavbarp:hover{
  font-weight:bold;
}

.mt-3 {
  color:white;
}


</style>
