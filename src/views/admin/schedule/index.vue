<template>
  <div class="app">
    <div class="container">
      <div class="row header">
        <h1 class="col s6 offset-s3 center-align teal-text">排程</h1>
      </div>
      <div class="row">
        <form class="col s6 offset-s3" @submit.prevent="submitTodo">
          <div class="input-field">
            <i class="material-icons prefix">列表</i>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Object</th>
                  <th>Value</th>
                  <th>Day</th>
                  <th>Time(HH:mm)</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr v-for="todo in todos" :key="todo.id">
                  <td>
                    <select id="new-object" v-model="todo.object" type="text">
                      <option>A</option>
                      <option>B</option>
                    </select>
                  </td>

                  <td><input id="icon_prefix2" v-model="todo.value" type="text"></td>

                  <td>
                    <select id="new-day" v-model="todo.day" type="text">
                      <option>Mon</option>
                      <option>Tue</option>
                      <option>Wed</option>
                      <option>Thu</option>
                      <option>Fri</option>
                    </select>
                  </td>

                  <td><vue-timepicker id="new-time" v-model="todo.time" format="HH:mm" /></td>
                  <td>
                    <a @click.prevent="deleteTodo(todo)">
                      <i class="btn btn-danger">delete</i>
                    </a>
                  </td>
                </tr>

              </tbody>
              <button class="btn btn-primary">Submmit</button>
              <br>
              <h3>新增排程</h3>
              <tbody>
                <tr>
                  <td>
                    <select id="new-object" v-model="newObject" type="text">
                      <option>A</option>
                      <option>B</option>
                    </select>
                  </td>

                  <td><input id="icon_prefix2" v-model="newValue" type="text"></td>

                  <td>
                    <select id="new-day" v-model="newDay" type="text">
                      <option>Mon</option>
                      <option>Tue</option>
                      <option>Wed</option>
                      <option>Thu</option>
                      <option>Fri</option>
                    </select>
                  </td>

                  <td><vue-timepicker id="new-time" v-model="newTime" format="HH:mm" /></td>
                  <td>
                    <button class="btn btn-primary">Add</button>
                  </td>
                </tr>
              </tbody>
              <br>
            </table>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const API = 'http://192.168.1.199:6843/receiveScheduleEvent/'

import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'
export default {
  name: 'App',
  components: { VueTimepicker },
  data() {
    return {
      scheduleList: '',
      todos: [
        {
          object: 'A',
          value: '12',
          day: 'Mon',
          time: {
            HH: '12',
            mm: '03'
          }
        },
        {
          object: 'B',
          value: '13',
          day: 'Tue',
          time: {
            HH: '12',
            mm: '03'
          }
        }
      ],
      newObject: '',
      newValue: '',
      newDay: '',
      elements: [],
      newTime: {
        HH: '00',
        mm: '00'
      }
    }
  },
  watch: {
    todos: {
      handler() {
        localStorage.todos = JSON.stringify(this.todos)
      },
      deep: true
    }
  },
  mounted() {
    this.query()
  },
  methods: {
     query() {
      fetch(SETTING_URL, {
        method: 'get'
      })
        .then(
          response =>
            response.json().then(data => ({
              data: data
            }))
        )
        .then(json => {
          this.sheduleList = Object(json.data)
          console.log(json.data)
        })
    },
    submitTodo() {
      // this.todos.push({
      //   object: this.newObject,
      //   value: this.newValue,
      //   day: this.newDay,
      //   time: this.newTime
      // })
      // // this.newObject = ''
      // // this.newValue = ''
      // // this.newDay = ''
      // // this.newTime =
      // // {
      // //   HH: '00',
      // //   mm: '00'
      // // }
    },
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
    }
  }
}
</script>
