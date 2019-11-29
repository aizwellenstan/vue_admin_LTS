<template>
  <div>
    <div class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">歷史警報</div>
      <div class="el-card__body">
        <!-- <div v-for="(alert, index) in alerts" :key="index">
          <span style="color:black;">
            Id: {{ alert.alarmListInfo.Id }}&nbsp;|
            name: {{ alert.alarmListInfo.name }}&nbsp;|
            time: {{ alert.alarmListInfo.startTime }}&nbsp;|
            cam: {{ alert.alarmListInfo.camera }}&nbsp;|
          </span>
        </div> -->
        <!-- <button @click="queryAlert()">全部</button>
        <button @click="lastday(1)">過去1天</button>
        <button @click="lastday(7)">過去7天</button>
        <button @click="lastday(30)">過去1個月</button> -->
        <div class="table-responsive">
          <table border="1" style="color:black;" class="table table-striped table-hover">
            <thead class="bg-info">
              <tr>
                <th>AlarmCategory</th>
                <!-- <th>AlarmCategory__id</th> -->
                <th>AlarmFunction__AlarmFunction</th>
                <!-- <th>AlarmFunction__id</th> -->
                <th>AlarmStatus</th>
                <th>Duration</th>
                <th>FromTime</th>
                <!-- <th>Id</th> -->
                <!-- <th>IsValueAberrant</th> -->
                <th>ObjectId__ObjectId</th>
                <th>SensorName</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(alert, index) in alerts" :key="index">
                <th>{{ alert.AlarmHistoryList.AlarmCategory__AlarmCategory }}</th>
                <!-- <th>{{ alert.AlarmHistoryList.AlarmCategory__id }}</th> -->

                <th v-if="alert.AlarmHistoryList.AlarmFunction__AlarmFunction == 'AlarmNeedAckNoReset'"
                >Single check</th>
                <th v-else-if="alert.AlarmHistoryList.AlarmFunction__AlarmFunction == 'AlarmNeedAckNeedReset'"
                >Doble check</th>
                <th v-else>Close</th>

                <!-- <th>{{ alert.AlarmHistoryList.AlarmFunction__id }}</th> -->
                <th>{{ alert.AlarmHistoryList.AlarmStatus }}</th>
                <th>{{ alert.AlarmHistoryList.Duration }}</th>
                <th>{{ alert.AlarmHistoryList.FromTime }}</th>
                <!-- <th>{{ alert.AlarmHistoryList.Id }}</th> -->
                <!-- <th>{{ alert.AlarmHistoryList.IsValueAberrant }}</th> -->
                <th>{{ alert.AlarmHistoryList.ObjectId__ObjectId }}</th>
                <th>{{ alert.AlarmHistoryList.SensorName }}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {alarmApi} from '../../../../../api.js'
// const QUERY_URL = api2+'/alarmEventHistory/'
const QUERY_URL = alarmApi+'/alarmEventHistory/'

// AlarmHistoryList---History

export default {
  data() {
    return {
      alerts: []
    }
  },
  computed: {
    // corrections start
    time: function() {
      return this.alerts.map(function(alert) {
        var sec = alert.alarmListInfo.startTime
        var date = new Date(sec * 1000)
        // var timestr = date.toLocaleTimeString()
        return date
      })
    }
    // corrections end
  },
  created() {
    this.queryAlert()
    // this.timer = setInterval(this.queryAlert, 1000)
  },
  methods: {
    queryAlert() {
      fetch(QUERY_URL, {
        method: 'get'
      })
        .then(
          response =>
            response.json().then(data => ({
              data: data
            }))
        )
        .then(json => {
          this.alerts = Object(json.data)
          console.log(json.data)
        })
    },
    // toTimestamp(strDate) {
    //   var datum = Date.parse(strDate)
    //   return datum / 1000
    // },
    // lastday(day) {
    //   var date = new Date()
    //   var last = new Date(date.getTime() - (day * 24 * 60 * 60 * 1000))
    //   var lastTimestamp = this.toTimestamp(last)
    //   var nowTimestamp = this.toTimestamp(date)

    //   var queryLastUrl = QUERY_URL + '&from=' + lastTimestamp + '&to=' + nowTimestamp
    //   fetch(queryLastUrl, {
    //     method: 'get',
    //     headers: {
    //       'Token': localStorage.getItem('token')
    //     }
    //   })
    //     .then(
    //       response =>
    //         response.json().then(data => ({
    //           data: data
    //         }))
    //     )
    //     .then(json => {
    //       this.alerts = Object(json.data)
    //       console.log(json.data)
    //     })

    //   console.log('-----------------------------------------------------')
    //   console.log(lastTimestamp)
    //   console.log(nowTimestamp)
    // }

  }
}
</script>
