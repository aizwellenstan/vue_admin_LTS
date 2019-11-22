<template>
  <div class="app">
    <div class="" style="margin-left:0!important; margin-right:0!important; width:100%!important">
      <div class="row header">
        <h1 class="col s6 offset-s3 center-align teal-text">Alarm Setting</h1>
      </div>
      <div class="row">
        <form class="col s6 offset-s3" @submit.prevent="submitTodo">
          <div class="input-field">
            <i class="material-icons prefix">list</i>
            <div style="overflow-x:auto;">
              <!-- <table >
    <thead>
      <tr>
      <th>Object</th>
      <th>Alarm Category</th>
      <th>Alarm Function</th>
      <th>Trigger<br>Logic</th>
      <th>Trigger Value</th>
      <th>Is Value Aberrant</th>
      <th>Is Open Trigger</th>
      <th>Is Trigger</th>
      <th>Alarm Message Chinese</th>
      <th>Alarm Message Spanish</th>
      <th>Alarm Message Japanese</th>
      <th/>
    </tr>
    </thead>
    <tbody class="chat-area">
      <tr v-for="todo in todos" :key="todo.id" >
      <td>
                    <select id="new-object" v-model="todo.object" type="text">
                      <option>A</option>
                      <option>B</option>
                    </select>
                  </td>

                  <td>
                    <select id="new-object" v-model="todo.alarmcategory" type="text">
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                      <option>Fault</option>
                    </select>
                  </td>

                  <td>
                    <select id="new-object" v-model="todo.alarmfunction" type="text">
                      <option>AlarmNeedAckNoReset</option>
                      <option>AlarmNeedAckNeedReset</option>
                      <option>AlarmNoAckNoReset</option>
                      <option>AlarmNeedAckNeedReset</option>
                    </select>
                  </td>

                  <td>
                    <select id="new-object" v-model="todo.trigger_logic" type="text">
                      <option><</option>
                      <option>=</option>
                      <option>></option>
                    </select>
                  </td>

                  <td ><input id="icon_prefix2" v-model="todo.trigger_value" type="text"></td>

                  <td>
                    <select id="new-object" v-model="todo.isvalueaberrant" type="text">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </td>

                  <td>
                    <select id="new-object" v-model="todo.isopentrigger" type="text">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </td>

                  <td>
                    <select id="new-object" v-model="todo.istrigger" type="text">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </td>

                  <td><input id="new-object" v-model="todo.alarmmessagechinese" type="text"></td>

                  <td><input id="new-object" v-model="todo.alarmmessagechinese" type="text"></td>

                  <td><input id="new-object" v-model="todo.alarmmessagechinese" type="text"></td>

                  <td>
                    <a @click.prevent="deleteTodo(todo)">
                      <i class="btn btn-danger">delete</i>
                    </a>
                  </td>
    </tr>
    </tbody>
  </table> -->

              <body class="vsc-initialized">

                <div class="scrollableContainer">
                  <div class="scrollingArea">
                    <table class="cruises scrollable">
                      <thead>
                        <tr>
                          <th class="name"><div>Object</div></th>
                          <th class="operator"><div>Alarm Category</div></th>
                          <th class="began"><div>Alarm Function</div></th>
                          <th class="tonnage"><div>Trigger Logic</div></th>
                          <th class="status"><div>Trigger Value</div></th>
                          <th class="name1"><div>Is Value Aberrant</div></th>
                          <th class="operator1"><div>Is Open Trigger</div></th>
                          <th class="began1"><div>Is Trigger</div></th>
                          <th class="tonnage1"><div>Alarm Message Chinese</div></th>
                          <th class="status1"><div>Alarm Message Spanish</div></th>
                          <th class="name2"><div>Alarm Message Japanese</div></th>
                          <th class="operator2"><div>Delete?</div></th>
                        </tr>
                      </thead>
                      <tbody style="margin-top:52px">
                        <tr v-for="todo in todos" :key="todo.id">
                          <td class="name"><div><select id="new-object" v-model="todo.object" type="text">
                            <option>A</option>
                            <option>B</option>
                          </select></div></td>
                          <td class="operator"><div><select id="new-object" v-model="todo.alarmcategory" type="text">
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                            <option>Fault</option>
                          </select></div></td>
                          <td class="began"><div><select id="new-object" v-model="todo.alarmfunction" type="text">
                            <option>AlarmNeedAckNoReset</option>
                            <option>AlarmNeedAckNeedReset</option>
                            <option>AlarmNoAckNoReset</option>
                            <option>AlarmNeedAckNeedReset</option>
                          </select></div></td>
                          <td class="tonnage"><div><select id="new-object" v-model="todo.trigger_logic" type="text">
                            <option><</option>
                            <option>=</option>
                            <option>></option>
                          </select></div></td>
                          <td class="status"><div><input id="icon_prefix2" v-model="todo.trigger_value" type="text"></div></td>
                          <td class="name1"><div><select id="new-object" v-model="todo.isvalueaberrant" type="text">
                            <option>Yes</option>
                            <option>No</option>
                          </select></div></td>
                          <td class="operator1"><div><select id="new-object" v-model="todo.isopentrigger" type="text">
                            <option>Yes</option>
                            <option>No</option>
                          </select></div></td>
                          <td class="began1"><div><select id="new-object" v-model="todo.istrigger" type="text">
                            <option>Yes</option>
                            <option>No</option>
                          </select></div></td>
                          <td class="tonnage1"><div><input id="new-object" v-model="todo.alarmmessagechinese" type="text"></div></td>
                          <td class="status1"><div><input id="new-object" v-model="todo.alarmmessagechinese" type="text"></div></td>
                          <td class="name2"><div><input id="new-object" v-model="todo.alarmmessagechinese" type="text"></div></td>
                          <td class="operator2"><div><a @click.prevent="deleteTodo(todo)">
                            <i class="btn btn-danger">delete</i>
                          </a></div></td>
                        </tr>
                        <span id="scrollToMe" />
                      </tbody>
                    </table>
                  </div>
                </div>

              </body>

            </div>
            <button class="btn btn-primary" @click="addTodo()"><a href="#scrollToMe" style="color:#fff">AddNewRow</a></button>
            <button class="btn btn-primary">Submmit</button>
            <!-- <h3>Add New Task</h3>
<div style="overflow-x:auto;">
              <table >
                <tr>
      <th>Object</th>
                  <th>Alarm Category</th>
                  <th>Alarm Function</th>
                  <th>Trigger<br>Logic</th>
                  <th>Trigger Value</th>
                  <th>Is Value Aberrant</th>
                  <th>Is Open Trigger</th>
                  <th>Is Trigger</th>
                  <th>Alarm Message Chinese</th>
                  <th>Alarm Message Spanish</th>
                  <th>Alarm Message Japanese</th>
                  <th/>
    </tr>
    <tr>
      <td>
                    <select id="new-object" v-model="newObject" type="text">
                      <option>A</option>
                      <option>B</option>
                    </select>
                  </td>

                  <td>
                    <select id="new-object" v-model="newAlarmcategory" type="text">
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                      <option>Fault</option>
                    </select>
                  </td>

                  <td>
                    <select id="new-object" v-model="newAlarmfunction" type="text">
                      <option>AlarmNeedAckNoReset</option>
                      <option>AlarmNeedAckNeedReset</option>
                      <option>AlarmNoAckNoReset</option>
                      <option>AlarmNeedAckNeedReset</option>
                    </select>
                  </td>

                  <td>
                    <select id="new-object" v-model="newTrigger_logic" type="text">
                      <option><</option>
                      <option>=</option>
                      <option>></option>
                    </select>
                  </td>

                  <td ><input id="icon_prefix2" v-model="newTrigger_value" type="text"></td>

                  <td>
                    <select id="new-object" v-model="newIsvalueaberrant" type="text">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </td>

                  <td>
                    <select id="new-object" v-model="newIsopentrigger" type="text">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </td>

                  <td>
                    <select id="new-object" v-model="newIstrigger" type="text">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </td>

                  <td><input id="new-object" v-model="newAlarmmessagechinese" type="text"></td>

                  <td><input id="new-object" v-model="newAlarmmessagechinese" type="text"></td>

                  <td><input id="new-object" v-model="newAlarmmessagechinese" type="text"></td>

                  <td>

                  </td>
    </tr>
  </table>
</div> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      todos: [],
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
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.todos)
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        object: this.newObject,
        value: this.newValue,
        day: this.newDay,
        time: this.newTime
      })
      this.newObject = ''
      this.newValue = ''
      this.newDay = ''
      this.newTime =
      {
        HH: '00',
        mm: '00'
      }
    },
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
    }
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

.chat-area {
/*   border: 1px solid #ccc; */
  height: 500px;
  overflow: auto;
}

  * { padding: 0; margin: 0; }
  table.cruises {
    font-family: verdana, arial, helvetica, sans-serif;
    font-size: 11.5px;
    cellspacing: 0;
    border-collapse: collapse;
    width: 535px;
    }
  table.cruises td {
    border-left: 1px solid #999;
    border-top: 1px solid #999;
    padding: 2px 4px;
    }
  table.cruises tr:first-child td {
    border-top: none;
  }
  table.cruises th {
    border-left: 1px solid #999;
    padding: 2px 4px;
    background: #6b6164;
    color: white;
    font-variant: small-caps;
    }
  table.cruises td { background: #eee; overflow: hidden; }

  div.scrollableContainer {
    position: relative;
    width: 1265px;
    padding-top: 36px;
    margin: 0px;
    border: 1px solid #999;
    background: #6b6164;
    }
  div.scrollingArea {
    height: 400px;
    overflow: auto;
    }

  table.scrollable thead tr {
    left: -1px; top: 0;
    position: absolute;
    }

  table.cruises .name     div { width: 68px; }
  table.cruises .operator div { width: 65px; }
  table.cruises .began    div { width: 166px;  text-align:center; }
  table.cruises .tonnage  div { width: 40px;  text-align:center; }
  table.cruises .status   div { width: 160px; }
  table.cruises .name1     div { width: 48px; }
  table.cruises .operator1 div { width: 48px; }
  table.cruises .began1   div { width: 48px;  text-align:center; }
  table.cruises .tonnage1  div { width: 150px;  text-align:center; }
  table.cruises .status1   div { width: 150px; }
  table.cruises .name2    div { width: 108px; }
  table.cruises .operator2 div { width: 126px; }

  table.cruises td.operator { background: #ebcb4d; }
  table.cruises td.tonnage  { background: white; }
  table.cruises td.name     { background: #C7E0C1; }
  table.cruises td.began    { background: #B7C3E8; }

</style>
