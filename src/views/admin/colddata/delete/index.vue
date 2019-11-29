<template>
  <div>
    <div class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">刪除靜態資料點位</div>
      <div class="el-card__body">
        <!-- {{this.colddataList}} -->
        <div class="table-responsive">
          <table border="1" style="color:black;" class="table table-striped table-hover">
            <thead class="bg-info">
              <tr><th>ParentId</th><th>ObjectId</th><th>Delete</th></tr>
            </thead>
            <tbody>
              <tr v-for="(val, key, index) in colddataList" :key="index">
                <td>{{ val.ObjectData.ParentId }}</td>
                <td>{{ val.ObjectData.ObjectId }} </td>
                <td>
                  <button @click="handleDelete(val.ObjectData.id)" class="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {railsApi} from '../../../../../api.js'
const CompanyId = localStorage.getItem('CompanyId')
const ProductId = localStorage.getItem('ProductId')
const ProjectId = localStorage.getItem('ProjectId')
const QUERY_URL = railsApi + `/${CompanyId}/${ProductId}/${ProjectId}/colddata`
export default {
  data() {
    return {
      search: '',
      colddataList: []
    }
  },
  mounted() {
    this.query()
  },
  methods:{
    query() {
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
        this.colddataList = Object(json.data)
        console.log(this.colddataList)
      })
    },
    handleDelete(id) {
      fetch(QUERY_URL+`/+${id}`, {
        method: 'delete',
        headers: {
          'Token': localStorage.getItem('token')
        }
      })
    }
  }
}
</script>
