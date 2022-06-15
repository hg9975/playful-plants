<template>
    <b-card
            :img-src="getImgUrl()"
            img-alt="Journal Image"
            img-top
            v-on:click.stop="ShowDetail(journal_id)"
    >
      <b-card-title v-on:click.stop="ShowDetail(journal_id)"> {{ journal_name }} </b-card-title>
      <b-card-text id="date" v-on:click.stop="ShowDetail(journal_id)"> {{ journal_date }} </b-card-text>
      <b-card-text id="creatorName" v-on:click.stop="ShowDetail(journal_id)"> {{ journal_creator }}</b-card-text>
      <b-button id="delete" variant="outline-dark" size="sm" @click.stop="delClick">
        <b-icon icon="trash"></b-icon></b-button>
    </b-card>
</template>

<script>
export default {
  name: "journalCard",
  props: {
    journal_id: {
      type: String,
    },
    updated: {
      type: Boolean,
    },
  },
  data() {
    return {
      cur_journal: {
        type: Object,
      },
      journal_date: {
        type: String,
      },
      journal_name: {
        type: String,
      },
      journal_creator: {
        type: String,
      },
      original_journals: {
        type: Object,
      },
    };
  },
  created() {
    this.original_journals = Object.keys(this.$journal_fixtures.shown);
    if ( !this.original_journals.includes(this.journal_id) ) {
      // console.log("get update data")
      this.cur_journal = JSON.parse(window.localStorage.getItem("update_journals"))[this.journal_id];
    }
    else {
      this.cur_journal = JSON.parse(window.localStorage.getItem("origin_journals"))[this.journal_id];
    }
    this.journal_name = this.cur_journal.title;
    this.journal_date = this.cur_journal.date;
    this.journal_creator = this.cur_journal.creator;
  },
  methods: {
    ShowDetail(journalId) {
        // console.log(journalId);
        this.$router.push(`/journal/${journalId}`);
    },
    getImgUrl() {
      if (this.updated) {
        return this.cur_journal.image;
      }
      else {
        var jimg = this.cur_journal.image;
        return require("../assets/journals/" + jimg + ".jpg");
      }
    },
    delClick() {
      this.$emit('delData',this.journal_id)
      // console.log(this.journal_id)
    },
  },
};
</script>

<style scoped>
#date {
  text-align: left;
}
#creatorName {
  text-align: right;
  position: absolute;
  right: 55px;
  bottom: 17px;
}
#delete {
  position: absolute;
  right: 10px;
  bottom: 30px;
}
.card{
  width:100%;
  break-inside: avoid;
  margin-bottom: 10px;
  text-align: left;
}
</style>
