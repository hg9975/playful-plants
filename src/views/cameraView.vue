<template>
  <div class="camera-box">
    <b-container class="header">
      <b-row>
        <b-col cols="1" offset="0">
          <b-button
            class="ml-0 close"
            variant="outline-secondary"
            @click="close()"
          >
            <b-icon icon="arrow-left" />
          </b-button>
        </b-col>
        <b-col class="px-0" offset="8">
          <b-button
            class="upload"
            v-on:click="returnAndSave()"
            variant="success"
          >
            Upload
          </b-button>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="take-photo">
      <b-row>
        <b-col class="yourCamera" sm="12">
          <div v-if="isCameraOpen" class="camera-canvas">
            <video
              ref="camera"
              :width="canvasHeight"
              :height="canvasWidth"
              autoplay
              id="cameratag"
            ></video>
            <canvas
              v-show="false"
              ref="canvas"
              :width="canvasHeight"
              :height="canvasWidth"
            ></canvas>
          </div>
        </b-col>
        <b-col class="captureBtn" sm="12">
          <b-button
            pill
            class="capturesave"
            variant="outline-success"
            @click="capture"
          >
            <b-icon-camera-fill /> Capture
          </b-button>
            <b-icon-arrow-repeat
              v-on:click="switchCam"
              ref="canshowswitch"
              font-scale="1.5"
              class="flipBtn"
            />
        </b-col>

        <div v-if="this.item != null" class="imgshow">
          <img :src="this.item" />
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "CameraApi",
  components: {
  },
  data() {
    return {
      isCameraOpen: true,
      canvasHeight: 400,
      canvasWidth: 400,
      mode: "face",
      twocam: true,
      item: [],
    };
  },
  created() {
  },
  mounted() {
    this.startCameraStream();
  },
  methods: {
    startCameraStream() {
      var constraints;
      if (this.mode == "face") {
        constraints = {
          audio: false,
          video: {
            width: { ideal: 400 },
            height: { ideal: 400 },
            facingMode: "face",
          },
        };
      } else if (this.mode == "environment") {
        constraints = {
          audio: false,
          video: {
            width: { ideal: 400 },
            height: { ideal: 400 },
            facingMode: {
              exact: "environment",
            },
          },
        };
      }
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.$refs.camera.srcObject = stream;
        })
        .catch((error) => {
          alert("Browser doesn't support or there is some errors." + error);
        });
    },
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
    },
    capture() {
      const FLASH_TIMEOUT = 50;
      let self = this;
      setTimeout(() => {
        const context = self.$refs.canvas.getContext("2d");
        context.drawImage(
          self.$refs.camera,
          0,
          0,
          self.canvasWidth,
          self.canvasHeight
        );
        const dataUrl = self.$refs.canvas
          .toDataURL("image/jpeg")
          .replace("image/jpeg", "image/octet-stream");
        self.addToPhotoGallery(dataUrl);
        console.log(dataUrl);
      }, FLASH_TIMEOUT);
    },
    addToPhotoGallery(dataURI) {
      this.item = dataURI;
    },
    returnAndSave() {
      this.stopCameraStream();
      if (this.item != null) {
        Vue.prototype.$photo = this.item;
      }
      this.$router.push("/journal/new");
    },
    close() {
      this.stopCameraStream();
      this.$router.push("/journal/new");
    },
    switchCam() {
      this.stopCameraStream();
      if (this.mode == "environment") {
        this.mode = "face";
      } else {
        this.mode = "environment";
      }
      this.startCameraStream();
    },
  },
};
</script>

<style scoped>
.header{
  position: fixed;
  background: #fff;
  padding-bottom: 10px;
  top:0;
}

@media (min-width: 600px) {
  .camera-box {
    margin-left: 200px;
  }
  .header{
    width: calc(100% - 200px);
  }
}

@media only screen and (max-width: 600px) {
  .camera-box {
    width: 100%;
    min-width: 360px;
    margin-bottom: 100px;
  }
  .header{
    width: 100%;
  }
}

/* Responsive Styling for Large screen */
@media only screen and (min-width: 768px) {
  .upload {
    position: fixed;
    right: 20px;
    top: 20px;
  }
  .close {
    margin-left: 5px;
    margin-top: 20px;
  }
}

/* Responsive Styling for Small screen */
@media only screen and (max-width: 768px) {
  .upload {
    position: fixed;
    right: 10px;
    top: 20px;
  }
  .close {
    margin-left: 5px;
    margin-top: 20px;
  }
}

/* Responsive Styling for Flip Camera Button */
@media only screen and (min-width: 992px) {
  .flipBtn{
    display: none;
  }
}

.flipBtn{
  margin-left: 10px;
}

.camera-box {
  padding: 2px;
  min-height: 1100px;
}

.take-photo {
  min-width: 300px;
  display: flex;
  justify-content: center;
  margin-top: 70px;
}
.imgshow {
  margin-top: 30px;
  margin-bottom: 100px;
}
</style>
