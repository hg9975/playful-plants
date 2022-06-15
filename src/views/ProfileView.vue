<template>
  <div class="profile">
    <div  class="header">
        <h2>{{ family_name }}</h2>
        <b-icon icon="pencil-square" class="iconSize smallicons"></b-icon>
    </div>

    <b-container class="banner">
      <b-row>
        <b-carousel
          ref="myCarousel"
          id="family photos"
          class="familyphoto"
          v-model="slide"
          :interval="3000"
          controls
          indicators
          label-prev=""
          label-next=""
          :no-hover-pause="true"
        >
          <b-carousel-slide
            v-for="(photo,pid) in photos"
            :key="pid"
            :img-src="photo | filterImg"
            class="slideImg"
          />
        </b-carousel>
      </b-row>

      <b-row>
        <h4 class="location_title">Location: {{ location }}</h4>
      </b-row>
    </b-container>

    <b-container class="member_list">
      <b-row><h3 class="bottom_name">Family Members</h3></b-row>
      <b-container class="listView">
        <b-row class="familyList"
          v-for="(member, id) in members"
          :key="id">
          <b-col cols="4" class="leftImg" align-self="start">
            <img class="memberPhoto" :src="member.photo| filterImg" alt="">
          </b-col>

          <b-col cols="8" class="rightName">
            <b-row class="smTitle">{{ member.name }}</b-row>
            <b-row class="smText">{{ member.role }}</b-row>
          </b-col>
        </b-row>
      </b-container>

      <b-container class="footer">
        <b-row align-h="center">
          <b-button variant="secondary" class="my-2">
            <b-icon icon="power"></b-icon> Logout
          </b-button>
        </b-row>
      </b-container>
    </b-container>

  </div>
</template>

<script>
  export default{
    data() {
      return{
        slide: 0,
        sliding: null,

        profiles: this.$profile_fixtures,
        family_name: this.$profile_fixtures['family name'],
        location: this.$profile_fixtures.location,
        members: this.$profile_fixtures.members,
        photos: this.$profile_fixtures['family photos'],
      }
    },

    filters:{
      filterImg(val){
        return require('../assets/profiles/' + val + '.jpg')
      }
    },

    methods:{
      prev() {
        this.$refs.myCarousel.prev()
      },
      next() {
        this.$refs.myCarousel.next()
      }
    }
  }
</script>


<style scoped>
.header{
  position: fixed;
  z-index: 99;
  background: #fff;
  top:0;
}
.header h2{
  line-height: 50px;
}
.smallicons {
  position: fixed;
  right:30px;
  top:15px;
}
.banner{
    padding-top: 59px;
  }
/* set layout for tablets, large tablets, and desktops*/
@media only screen and (min-width:600px) {
  .profile {
    margin-left: 200px;
  }
  .footer {
    display: none;
  }
  .header{
    width: calc(100% - 200px);
  }
  .iconSize{
    font-size: 24px;
  }
}

/* set layout for phones */
@media only screen and (max-width:600px) {
  .profile {
    width: 100%;
    min-width: 360px;
    margin-bottom:100px
  }
  .banner{
    width: 100%;
  }
  .location_title{
    width: 100%;
    font-size: 18px;
    margin-top: 10px;
    color: rgb(151, 151, 151);
  }
  .iconSize{
    font-size: 20px;
  }
  .footer {
    display: block;
    align-items: center;
    width: 100%;
  }
  .header{
    width: 100%;
  }
  .smallicons {
    right:20px;
    top:15px;
  }
}

.location_title{
  width: 100%;
  text-align: left;
  font-size: 18px;
  margin-top: 10px;
  color: rgb(151, 151, 151);
}

.slideImg{
  max-height: 500px;
  overflow-y: hidden;
}
.member_list{
  width: 100%;
  margin-top: 10px;
}
.listView{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.listView>.familyList{
  width: 49%;
  margin-bottom: 20px;
}
@media screen and (max-width: 768px){
  .listView>.familyList{
    width: 100%;
    margin-bottom: 5px;
  }
}
.bottom_name{
  font-size: 28px;
  font-weight: bold;
  width: 100%;
  text-align: left;
}

.familyList{
  border: 2px solid #2c3e50;
  margin-top: 5px;
  display: flex;
}

.leftImg{
  padding: 0;
  height: auto;
  overflow: hidden;
}

.memberPhoto{
  width: 100%;
  height: 100%;
}

.rightName{
  padding: 5px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.smTitle{
  font-size: 20px;
  font-weight: bold;
}

.smText{
  font-size: 16px;
  color: rgb(161, 158, 158);
}

.familyphoto {
  text-shadow: 1px 1px 2px #333;
}

</style>
