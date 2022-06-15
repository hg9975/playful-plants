<template>
    <div class="jDetail">
        <b-container class="header">
            <b-row>
                <b-col cols="1" offset="0" class="returnlink">
                    <router-link class="returnlink" to="/journal">
                        <b-button variant="outline-secondary">
                            <b-icon icon="arrow-left"></b-icon>
                        </b-button>
                    </router-link>
                </b-col>
            </b-row>
             <b-row class="journaltitle">
                <h3>{{ this.curJournal.title }}</h3>
            </b-row>
            <b-row>
                <b-col>
                    <p>
                        Created by {{ this.curJournal.creator }}, on
                        {{ this.curJournal.date }}
                    </p>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid class="main-view">
            <b-row>
                <b-col class="image">
                    <img :src="getImgUrl()" alt="Kids planning garden" class="plantImg"/>
                </b-col>
            </b-row>
            <b-row>
                <p class="justifiedtext"> {{this.curJournal.text}}</p>
            </b-row>
            <b-row class="todo">
                <todolist v-bind:todo="todo" v-bind:todoStatus="todoStatus"/>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import todolist from "@/components/TodoList.vue";

    export default {
        name: "JournalDetail",
        components: {
            todolist,
        },
        data() {
            return {
                jid: {
                    type: String,
                },
                curJournal: {
                    type: Object,
                },
                todo: {
                    type: Object,
                },
                todoStatus: {
                    type: Array
                }
            };
        },
        created() {
            this.jid = this.$route.params.journal_id;
            // console.log(this.$route.params);
            var getdataFromLocal = JSON.parse(window.localStorage.getItem("origin_journals"));

            this.original_journals = Object.keys(getdataFromLocal);
            if (this.original_journals.includes(this.jid)) {
                this.curJournal = getdataFromLocal[this.jid];
            }
            else {
                this.curJournal = JSON.parse(window.localStorage.getItem("update_journals"))[this.jid];
            }
            this.todo = this.curJournal['to-do'];
            this.todoStatus = this.curJournal['checked']
        },
        methods: {
            getImgUrl() {
                if (this.original_journals.includes(this.jid)) {
                    return require("../assets/journals/" + this.curJournal.image + ".jpg");
                }
                else {
                    if (this.curJournal.image == null) return require("../assets/journals/journal 6.jpg");
                    else return this.curJournal.image;
                }
            },
        },
    };
</script>

<style>
@media (min-width: 600px) {
    .jDetail {
        margin-left: 200px;
    }
    .header{
        width: calc(100% - 200px);
    }
}

@media only screen and (max-width: 600px) {
    .jDetail {
        width: 100%;
        min-width: 360px;
        margin-bottom: 100px;
    }
    .header{
        width: 100%;
    }
}

@media screen and (min-width: 768px) {
    .justifiedtext {
        font-size: 20px;
    }
}
.header{
  position: fixed;
  z-index: 99;
  background: #fff;
  top:0;
}

.main-view {
    min-width: 300px;
    margin-top: 150px;
}

.image {
    max-width: 100%;
    width: 100%;
    max-height: 500px;
    min-height:200px;
    object-fit: cover;
    overflow: hidden;
    position: relative;
    margin-left: 20px;
    margin-right:20px;
}

.justifiedtext {
    text-align: justify;
    padding-left:30px;
    padding-right: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.todo {
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 20px;
}

.journaltitle {
    margin-top: 10px;
}

.returnlink {
    text-decoration: none;
    color: #1b1b1b;
    margin-left: 0px;
    margin-top: 20px;
}

.plantImg {
    width: 100%;
    left: 50%;
    top: 50%;
}
</style>
