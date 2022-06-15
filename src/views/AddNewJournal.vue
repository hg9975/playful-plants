<template>
<div class="addNew">
    <b-container class="header">
      <b-row>
        <b-col cols="1" offset="0">
          <!-- Creating close warning message -->
          <b-button class="returnlink" variant="outline-secondary" v-b-modal.warning-message>
            <b-icon icon="arrow-left" />
          </b-button>
          <b-modal
            id="warning-message"
            header-bg-variant="dark"
            header-text-variant="light"
            centered
          >
            <template #modal-header>
              <h4>Please confirm</h4>
            </template>
            <template #default>
              <p class="my-4">
                You haven't save your journal entry! Are you sure that you want
                to discard the editing?
              </p>
            </template>
            <template #modal-footer>
              <b-button outline-secondary @click="discard()">
                Discard
              </b-button>
              <b-button variant="success" @click="save()"> Save </b-button>
            </template>
          </b-modal>
        </b-col>

        <b-col class="px-0" offset="8">
          <b-button class="postBtn" variant="success" v-on:click="post">Post</b-button>
        </b-col>
      </b-row>

      <b-row>
        <h4 class="dateTitle">{{ date }}</h4>
      </b-row>
    </b-container>

    <b-container class="main-view">
      <b-row class="forms" align-h="center">
        <b-col class="labels" sm="12">
          <label class="label" for="title"><p class="star">* </p>Journal Title:</label>
        </b-col>
        <b-col class="inputs" sm="12">
          <b-form-input
            id="title"
            class="titlebox"
            v-model="title"
            v-on:change="changeGlobalTitle(title)"
            placeholder="Enter Journal Title"
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row class="forms" align-h="center">
        <b-col class="labels" sm="12">
          <label class="label" for="creators"><p class="star">* </p>Creators:</label>
        </b-col>
        <b-col class="inputs" sm="12">
          <b-form-select
            id="creators"
            v-model="creator"
            class="w-100"
            required
            v-on:change="changeGlobalCreator(creator)"
          >
            <template #first>
              <b-form-select-option :value="null" disabled
                >Please select your name</b-form-select-option
              >
            </template>

            <b-form-select-option
              v-for="(detail, mid) in members"
              v-bind:key="mid"
              :value="mid"
            >
              {{ detail.name }}
            </b-form-select-option>
          </b-form-select>
        </b-col>
      </b-row>

      <b-row class="forms" align-h="center">
        <b-col class="labels" sm="12">
          <label class="label" for="journalentry"><p class="star">* </p>Journal Entry:</label>
        </b-col>
        <b-col class="inputs" sm="12">
          <b-form-textarea
            id="journalentry"
            class="form-control"
            v-model="text"
            v-on:change="changeGlobalText(text)"
            placeholder="Write down something about gardening of the day..."
            rows="10"
          ></b-form-textarea>
        </b-col>
      </b-row>

      <b-container class="to-do" align-h="center">
        <b-row class="forms">
          <b-col class="labels" sm="12">
            <label class="label" for="todo">To-Do List:</label>
          </b-col>
          <b-col align-self="start" class="todoInput" sm="9">
            <b-form-input
              id="todo"
              v-model="task"
              placeholder="Enter your gardening task"
            ></b-form-input>
          </b-col>
          <b-col align-self="start" class="todoAdd" sm="3">
            <b-button @click="addTask()">
              <b-icon-plus-lg></b-icon-plus-lg>
            </b-button>
          </b-col>
        </b-row>
        <b-row class="todo" cols="1">
          <b-col v-for="task in todo_list" v-bind:key="task.id" align-self="start">
            <b-form-checkbox
              id="checkbox"
              name="checkbox"
              value="completed"
              unchecked-value="not_completed"
            >
            <p class="task_detail">{{ task }}</p>
            </b-form-checkbox>
          </b-col>
        </b-row>
      </b-container>

      <b-row align-h="center" class="forms">
        <b-col class="labels" sm="12">
          <label class="label" for="photo">Upload Photo:</label>
        </b-col>
        <b-col class="camera" sm="12">
          <b-button-group>
            <b-button class="photoBtn" v-on:click="openCamera()">
              <b-icon icon="camera-fill"></b-icon> Open Camera
            </b-button>
            <b-button v-if="photo != null" class="photoBtn" variant="outline-secondary" v-on:click="deletePhoto()">
              <b-icon icon="trash-fill"></b-icon> Delete Photo
            </b-button>
          </b-button-group>
        </b-col>
        <b-col v-if="photo != null" class="uploadImg" sm="12">
          <img :src="photo" class="upload" />
        </b-col>
      </b-row>

    </b-container>
</div>
</template>

<script>
import Vue from "vue";
export default {
  name: "AddNewJournal",
  data() {
    return {
      photo: Vue.prototype.$photo,
      title: Vue.prototype.$title,
      date: new Date(),
      creator: Vue.prototype.$creator,
      members: this.$profile_fixtures.members,
      text: Vue.prototype.$text,
      task: "",
      todo_list: Vue.prototype["$to-do"],
    };
  },
  created() {
    this.date = this.date.toLocaleDateString();
  },

  methods: {
    addTask() {
      let id = Object.keys(this.todo_list).length + 1;
      let task_id = "task " + id.toString();
      this.todo_list[task_id] = this.task;
      Vue.prototype["$to-do"][task_id] = this.task;
      this.task = "";
    },

    discard() {
      this.$bvModal.hide("warning-message");
      this.$router.push("/journal");
    },
    save() {
      this.$bvModal.hide("warning-message");
      this.post();
    },
    post() {
      var updated_journals = JSON.parse(window.localStorage.getItem("update_journals"));
      Vue.prototype.$cnt++;
      var new_len = Vue.prototype.$cnt;
      var updateid = "journal " + new_len.toString();
      updated_journals[updateid] = {
        title: this.title,
        date: this.date,
        creator: this.members[this.creator].name,
        image: Vue.prototype.$photo,
        text: this.text,
        "to-do": this.todo_list,
      };
      window.localStorage.setItem("update_journals", JSON.stringify(updated_journals));

      Vue.prototype.$photo = null;
      Vue.prototype.$title = null;
      Vue.prototype.$creator = null;
      Vue.prototype.$text = null;
      Vue.prototype["$to-do"] = {};
      this.$router.push("/journal");
    },
    openCamera() {
      this.$router.push("/journal/new/camera");
    },
    deletePhoto() {
      Vue.prototype.$photo = null;
      this.photo = null;
    },
    changeGlobalTitle(text) {
      Vue.prototype.$title = text;
    },
    changeGlobalCreator(text) {
      Vue.prototype.$creator = text;
    },
    changeGlobalText(t) {
      Vue.prototype.$text = t;
    },
  },
};
</script>

<style scoped>
.header{
  position: fixed;
  background: #fff;
  top:0;
}
.main-view{
  min-width: 300px;
  margin-top: 110px;
}

@media (min-width:600px){
  .addNew{
    margin-left: 200px;
  }
  .header{
    width: calc(100% - 200px);
  }
}

@media only screen and (max-width:600px) {
  .addNew{
    width: 100%;
    min-width: 360px;
    margin-bottom:100px;
  }
  .header{
    width: 100%;
  }
}

/* Responsive Styling for Large screen */
@media only screen and (min-width: 768px){
  .dateTitle {
    font-size: 20px;
  }
  .labels {
    width: 30%;
    text-align: right;
  }
  .label {
    text-align: right;
    font-weight: bold;
    font-size: 20px;
  }
  .inputs {
    width: 70%;
    text-align: left;
    height: 100%;
  }
  .forms {
    margin-top: 20px;
  }
  .todoInput {
    width: 60%;
    margin-right: 0px;
    padding-right: 0px;
  }
  .todoAdd {
    width: 10%;
    margin-left: 0px;
    padding-left: 0px;
  }
  .todo{
    margin-left: 30%;
    margin-top: 5px;
    font-size: 18px;
  }
  .camera {
    width: 70%;
    text-align: left;
  }
  .uploadImg {
    margin-left: 30%;
    margin-top: 10px;
    margin-bottom: 15px;
    width: 70%;
  }
  .main-view {
    width: 90%;
  }
  .postBtn {
    position: fixed;
    right: 20px;
    top: 20px;
  }
}
/* Responsive Styling for Small screen */
@media only screen and (max-width: 768px){
  .dateTitle {
    font-size: 16px;
  }
  .label {
    text-align: left;
    width: 100%;
    margin: 5px 0;
    font-weight: bold;
  }
  .todoInput {
    width: 85%;
    margin-right: 0px;
    padding-right: 0px;
  }
  .todoAdd {
    width: 10%;
    margin-left: 0px;
    padding-left: 0px;
  }
  .forms {
    margin-top: 5px;
  }
  .photoBtn {
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .postBtn {
    position: fixed;
    right: 10px;
    top: 20px;
  }
}

#creators {
  height: 42px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.375rem 0.375rem;
  font-size: 1rem;
  font-weight: 400;
  color: #212529;
  line-height: 1rem;
}
.star {
  display: inline;
  color: rgb(216, 8, 8);
}

.justifiedtext {
  text-align: justify;
}

.to-do {
  width: 100%;
  padding: 0px;
  text-align:left;
}
.task_detail {
  margin-left: 10px;
}

#warning-message {
  width: 100%;
}

.upload {
  height: auto;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
}
.returnlink {
    text-decoration: none;
    color: #1b1b1b;
    margin-left: 0px;
    margin-top: 20px;
}
.dateTitle{
  justify-content: center;
}

</style>
