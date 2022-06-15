<template>
  <div class="todolist">
    <b-form-group
      v-slot="{ ariaDescribedby }"
    >
    <label class="labels">Todo List</label>
      <b-form-checkbox-group
        @change="updateStatus"
        v-model="selected"
        :options="todolist"
        :aria-describedby="ariaDescribedby"
        name="todo-list"
        stacked
        size="sm"
        class="todo"
      ></b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jid: { type: String },
      selected: this.todoStatus,
      todolist: Object.values(this.todo),
    };
  },
  props: {
    todo: {
      type: Object,
    },
    todoStatus: {
      type: Array,
    },
  },
  methods: {
    updateStatus() {
      this.jid = this.$route.params.journal_id;

      var originCheck = JSON.parse(
        window.localStorage.getItem("origin_journals")
      );
      if (Object.keys(originCheck).includes(this.jid)) {
        originCheck[this.jid]["checked"] = this.selected;
        window.localStorage.setItem(
          "origin_journals",
          JSON.stringify(originCheck)
        );
      }
      else {
        var updateCheck = JSON.parse(
        window.localStorage.getItem("update_journals")
      );
      updateCheck[this.jid]["checked"] = this.selected;
        window.localStorage.setItem(
          "update_journals",
          JSON.stringify(updateCheck)
        );

      }
    },
  },
};
</script>

<style>
.todolist {
  text-align:left;
  margin:auto;
  width:100%;
}

@media screen and (min-width: 768px) {
  .custom-control-label {
    font-size: 20px;
  }
  .labels {
    font-size: 24px;
    font-weight: bold;
  }
}

@media only screen and (max-width: 768px) {
  .labels {
    font-weight: bold;
    font-size: 20px;
  }
  .custom-control-label {
    font-size: 16px;
  }
}

.custom-checkbox.b-custom-control-sm {
  margin-left: 0px;
  padding-left: 0px;
  margin-bottom: 5px;
}
.todo{
  width: 100%;
  margin-left: 0px;
}
.custom-control-input{
  margin-right: 5px;
}

.bv-no-focus-ring{
  margin: 5px 0 0 0;
  padding-bottom:0;
}
</style>
