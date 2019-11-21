<template>
  <div>
    <div class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">Query HotData</div>
      <div class="el-card__body">
        <!-- {{this.hotdataList}} -->
        <table border="1" style="color:black;">
          <tr><th>ObjectId</th><th>Edit</th></tr>
          <tr v-for="(val, key, index) in hotdataList" :key="index">
            <td>{{ val.ObjectData.ObjectId }} </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../../../../api.js'
const CompanyId = localStorage.getItem('CompanyId')
const ProductId = localStorage.getItem('ProductId')
const ProjectId = localStorage.getItem('ProjectId')
const QUERY_URL = api + `/${CompanyId}/${ProductId}/${ProjectId}/hotdata`
export default {
  data() {
    return {
      search: '',
      hotdataList: []
    }
  },
  mounted() {
    fetch(QUERY_URL, {
      method: 'get',
      headers: {
        'Token': localStorage.getItem('token')
      }
    })
      .then(
        response =>
          response.json().then(data => ({
            data: data
          }))
      )
      .then(json => {
        this.hotdataList = Object(json.data)
        console.log(this.hotdataList)
      })
  }
}
</script>
