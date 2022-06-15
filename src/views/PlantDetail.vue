<template>
  <div class="pDetail">
    <b-container class="header">
       <b-row>
        <b-col class="returnlink" cols="1" offset="0">
          <router-link class="returnlink" to="/">
            <b-button variant="outline-secondary">
              <b-icon icon="arrow-left"></b-icon>
            </b-button>
          </router-link>
        </b-col>
      </b-row>
      <b-row class="mb-1 plantname">
        <h3>{{ this.curPlant }}</h3>
      </b-row>
    </b-container>

    <b-container fluid class="main-view">
      <b-container class="banner">
      <b-row v-if="!!images.image2">
        <b-carousel
          ref="myCarousel"
          id="family photos"
          v-model="slide"
          :interval="3000"
          controls
          indicators
          class="plantphotos"
          label-prev=""
          label-next=""
          :no-hover-pause="true"
        >
          <b-carousel-slide
            v-for="(image,pid) in images"
            :key="pid"
            :img-src="image | filterImg"
            class="plantImg"
          />
        </b-carousel>
      </b-row>
      <b-row v-else>
         <img v-bind:src="getImgUrl(cnt)" class="plantImg" />
      </b-row>
    </b-container>

      <b-row class="cards">
        <horizontal-scroll class="scroller">
          <b-button
            v-for="(tag, number) in tags"
            v-bind:key="number"
            variant="outline-dark"
            id="plantTag"
            disabled
            class="button"
            >{{ tag }}</b-button
          >
        </horizontal-scroll>
      </b-row>

      <b-container class="columnsgrid">
        <b-row class="description">
            <h6>Description:</h6>
            <p class="justifiedtext">
              {{ this.discription }}
            </p>
        </b-row>

        <b-row class="instruction">
            <h6>Gardening Instruction:</h6>
            <p
              class="justifiedtext"
              v-for="(val, name) in instructions"
              :key="val.id"
            >
            {{ name }}: {{ val }}
            </p>
        </b-row>
      </b-container>

    </b-container>
  </div>
</template>

<script>
import HorizontalScroll from "vue-horizontal-scroll";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";

export default {
  name: "plantDetail",
  components: {
    HorizontalScroll,
  },
  props: {
    plant_id: {
      type: String,
    },
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      curPlant: this.$route.params.plant_id,
      plants_data: this.$plant_fixtures,
      images: {
        type: Object,
      },
      tags: {
        type: Object,
      },
      instructions: {
        type: Object,
      },
      discription: {
        type: String,
      },
      cnt: 1,
      num: {
        type: Number,
        default: 1,
      },
      lefttt: false,
      righttt: {
        type: Boolean,
        default: false,
      },
    };
  },
  filters:{
      filterImg(val){
        return require('../assets/plants/' + val + '.jpg')
      }
  },
  created() {
    this.images = this.plants_data[this.curPlant].images;
    this.tags = this.plants_data[this.curPlant].tags;
    this.discription = this.plants_data[this.curPlant].description;
    this.instructions = this.plants_data[this.curPlant].instruction;
    this.num = Object.keys(this.images).length;
    this.righttt = this.num == 1 ? false : true;
    // console.log(11,this.images)
  },
  methods: {
    getImgUrl(img) {
      return require("../assets/plants/" + this.images["image" + img] + ".jpg");
    },
    toLeft() {
      this.cnt--;
      if (this.cnt <= 1) {
        this.lefttt = false;
      } else {
        this.lefttt = true;
      }

      this.righttt = true;
    },
    toRight() {
      this.cnt++;
      if (this.cnt >= this.num) {
        this.righttt = false;
      } else {
        this.righttt = true;
      }
      this.lefttt = true;
    },
  },
};
</script>

<style scoped>
.header{
  position: fixed;
  z-index: 99;
  background: #fff;
  top:0;
}

@media (min-width:600px){
  .pDetail {
    margin-left: 200px;
  }
  .columnsgrid {
    columns:2;
    margin:20px;
  }
  .cards {
    margin-right:10px;
    margin-left: 5px;
  }
  .back{
    font-size: 22px;
  }
  .header{
    width: calc(100% - 200px);
  }
}

@media only screen and (max-width:600px) {
  .pDetail{
    width: 100%;
    min-width: 360px;
    margin-bottom:100px;
  }
  .header{
    width: 100%;
  }
}

/* For Large screen */
@media (min-width:768px){
  .columnsgrid {
    position: relative;
    column-count: 2;
    column-gap: 30px;
  }
  .justifiedtext {
    font-size: 18px;
  }
  .description {
    height: auto;
  }
  .instruction {
    height: auto;
  }

}
/* For small screen */
@media only screen and (max-width:768px) {
  .columnsgrid {
    position: relative;
    column-count: 1 !important;
    column-gap: 10px;
  }
  .cards {
    margin-right:10px;
    margin-left: 5px;
  }
  .description {
    width: 100%;
    height: 100%;
  }
  .instruction {
    width: 100%;
    height: 100%;
  }
}

.main-view {
  min-width: 300px;
  margin-top: 130px;
}

.columnsgrid{
  margin-top: 20px;
  margin-left: 10px;
}

.scroller {
  width: 100%;
  margin-top: 10px;
  position: relative;
  height: auto;
  max-height:120px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.justifiedtext {
  text-align: left;
}

.returnlink {
  text-decoration: none;
  color: #1b1b1b;
  margin-left: 0px;
  margin-top: 20px;
}
.plantname {
  margin-top: 10px;
  justify-content: center;
}
.plantinfo {
  flex-direction:column;
}
.cards {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 15px;
}

.button {
  margin-right: 3px;
  display: inline-block;
  padding: 5px;
}

h6 {
  text-align: left;
  margin-top: 0px;
  font-weight:bold;
  font-size: 20px;
}

.plantImg {
  max-width: 100%;
  width: 100%;
  max-height: 500px;
  min-height:200px;
  object-fit: cover;
}

#left {
  position: absolute;
  left: 10px;
  top: 180px;
  z-index: 99;
  width: 24px;
  height: 32px;
  background-color: black;
  color: white;
  font-size: 24px;
  opacity: 0.6;
  cursor: pointer;
  font-weight: bold;
  line-height: 32px;
}
#right {
  position: absolute;
  right: 10px;
  top: 180px;
  z-index: 99;
  width: 24px;
  height: 32px;
  background-color: black;
  color: white;
  font-size: 24px;
  opacity: 0.6;
  cursor: pointer;
  font-weight: bold;
  line-height: 32px;
}

.plantphotos {
  text-shadow: 1px 1px 2px #333;
}
</style>
