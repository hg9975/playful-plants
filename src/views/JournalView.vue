<template>
  <div class="journal">
    <div  class="header">
       <h2>Garden Journal</h2>
       <div class="smallicons">
         <b-button v-on:click="AddJournal" size="sm" variant="success" class="addButton">
           <b-icon-journal-plus /> <p class="ButtonNote">Let's Journal</p>
         </b-button>
        </div>
        <p class="today">Today is {{ getCurrentDate() }}</p>
        <div class="time-box">
           <b-form-datepicker
            v-model="startDate"
            class="startDatePicker"
            size="sm"
            :date-format-options="{
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            }"
            locale="en"
            :max="setMax()"
            placeholder="start date"
            reset-button
          ></b-form-datepicker>
           <b-form-datepicker
            v-model="endDate"
            class="endDatePicker_sm"
            size="sm"
            :date-format-options="{
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            }"
            locale="en"
            :min="setMin()"
            placeholder="end date"
            reset-button
            offset="-80"
          ></b-form-datepicker>
          <!-- for large screen -->
          <b-form-datepicker
            v-model="endDate"
            class="endDatePicker"
            size="sm"
            :date-format-options="{
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            }"
            locale="en"
            :min="setMin()"
            placeholder="end date"
            reset-button
          ></b-form-datepicker>
          <b-button size="sm" variant="outline-success" v-on:click="filterDate()"
            ><b-icon-check-circle-fill
          /></b-button>
        </div>
    </div>
    <b-container fluid class="main-view">
        <div class="scroller">
            <journalCard
              id="update"
              v-for="jid in Object.keys(this.updates).reverse()"
              v-bind:journal_id="jid"
              :updated="true"
              :key="jid.id"
              @delData="delClick"
            />

          <journalCard
            id="original"
            v-for="(journal, jid) in journals"
            v-bind:journal_id="jid"
            :updated="false"
            :key="jid"
            @delData="delClick"
          />
        </div>

    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import journalCard from "@/components/JournalCard.vue";

export default {
  name: "PlantView",
  components: {
    journalCard,
  },
  data: function () {
    return {
      journals: {},
      updates: {},
      startDate: "",
      endDate: "",
      update_arr: [],
    };
  },
  created() {
    this.journals = JSON.parse(window.localStorage.getItem("origin_journals"));
    this.updates = JSON.parse(window.localStorage.getItem("update_journals"));
      // console.log(666);
  },
  methods: {
    AddJournal() {
      this.$router.push("/journal/new");
    },
    chooseDateRange() {
      // console.log("choose date range");
    },
    delClick(val) {
      // console.log("delete id:", val);
      let shown_ids = Object.keys(this.$journal_fixtures.shown);
      if (shown_ids.includes(val)) {
        var orj = JSON.parse(window.localStorage.getItem("origin_journals"));
        delete orj[val];
        window.localStorage.setItem("origin_journals", JSON.stringify(orj));
        this.$set(this, "journals", orj);
      } else {
        var orju = JSON.parse(window.localStorage.getItem("update_journals"));
        delete orju[val];
        window.localStorage.setItem("update_journals", JSON.stringify(orju));
        this.$set(this, "updates", orju);
      }
    },

    checkUpdate() {
      var getUpdate = JSON.parse(window.localStorage.getItem("update_journals"));
      // console.log(Object.keys(getUpdate));
      if (Object.keys(getUpdate).length > 0) {
        return true;
      } else {
        return false;
      }
    },
    getCurrentDate() {
      var date = new Date();
      return date.toLocaleDateString();
    },
    //
    // set maximum for startDate picker based on current date
    //
    setMax() {
      return new Date();
    },
    //
    // set minimum for endDate picker based on selected startDate
    //
    setMin() {
      if (this.startDate != "") {
        return this.startDate;
      } else {
        return "";
      }
    },
    //
    // create a function to process date filtering
    //
    filterDate() {
      if (this.checkUpdate() === true) {
        this.filter("update");
      }
      this.filter("shown");
    },
    filter(type) {
      let tempt = {};
      let data;
      if (type === "update") {
        data = this.$journal_fixtures.update;
      } else {
        data = this.$journal_fixtures.shown;
      }
      let start = new Date(this.startDate);
      let end = new Date(this.endDate);

      // Iterate over all journal data
      for (const journal in data) {
        var curDate = new Date(data[journal].date);
        // if there is not startDate selected
        if (this.startDate === "") {
          if (this.endDate === "") {
            tempt = { ...data };
          } else {
            if (curDate <= end) {
              tempt[journal] = data[journal];
            }
          }
        }
        // if startDate is selected
        else {
          if (this.endDate === "") {
            if (curDate >= start) {
              tempt[journal] = data[journal];
            }
          } else {
            if (curDate >= start && curDate <= end) {
              tempt[journal] = data[journal];
            }
          }
        }
        // console.log("tempt:", tempt);
      }
      if (type === "update") {
        this.updates = tempt;
      } else {
        this.journals = tempt;
      }
    },
  },
};
</script>

<style scoped>
.header{
  position: fixed;
  z-index: 99;
  background: #fff;
  padding-bottom: 20px;
  top:0;
}
.smallicons {
  position: fixed;
  right:20px;
  top:20px;
}
.time-box{
  display: flex;
  justify-content: center;
}
.endDatePicker_sm{
   margin:0 5px;
}
/* set layout for tablets, large tablets, and desktops*/
@media only screen and (min-width:600px) {
  .journal {
    margin-left: 200px;
  }
  .header{
    width: calc(100% - 200px);
  }
  .time-box{
    padding: 0 15px;
  }
  .endDatePicker{
    margin:0 15px;
  }
}

/* set layout for phones */
@media only screen and (max-width:600px) {
  .journal{
    width: 100%;
    min-width: 360px;
    margin-bottom:100px
  }
  .header{
    width: 100%;
  }
  .time-box{
    padding: 0 5px;
  }
  .smallicons {
    right:10px;
  }
}

/* Responsive styling for datepicker dropdown */
@media screen and (max-width:515px){
  .endDatePicker_sm {
    display: flex;
  }
  .endDatePicker {
    display: none
  }
}
@media screen and (min-width:515px) and (max-width:600px){
  .endDatePicker_sm {
    display: none;
  }
  .endDatePicker {
    display: flex;
  }
}
@media screen and (min-width:600px) and (max-width:720px) {
  .endDatePicker_sm {
    display: flex;
  }
  .endDatePicker {
    display: none
  }
}
@media screen and (min-width:720px){
  .endDatePicker_sm {
    display: none;
  }
  .endDatePicker {
    display: flex;
  }
}

/* for large screen products */
@media screen and (max-width: 960px){
  .scroller {
    position: relative;
    column-count: 2 !important;
    column-gap: 20px;
  }
}
/* for tablets and phones */
@media screen and (max-width: 768px){
  .scroller {
    position: relative;
    column-count: 1 !important;
    column-gap: 20px;
  }
  .addButton {
    font-size: 16px;
  }
  .ButtonNote {
    display: none;
  }
  .today {
    font-size: 16px;
    justify-content: center;
  }
}
@media screen and (min-width: 768px){
  .addButton {
    font-size: 18px;
  }
  .ButtonNote {
    display: inline;
  }
  .today {
    font-size: 20px;
    justify-content: center;
  }
}

h2 {
  margin-top: 20px;
  margin-bottom: 15px;
}

.time {
  font-size: 20px;
  padding-left: 16px;
}

.icons {
  cursor: pointer;
}

.closeicons {
  padding-left: 0px;
}

.main-view {
  min-width: 300px;
}
.scroller {
  position: relative;
  column-count: 3;
  -moz-column-count:3;
  column-gap: 20px;
  width: 100%;
  margin-top: 170px;
}

</style>
