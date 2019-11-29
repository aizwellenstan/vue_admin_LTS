<template>
  <div>
    <div class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">查詢帳戶</div>
      <div class="el-card__body">
        <label>查詢</label>
        <input v-model="search" type="text" placeholder="輸入關鍵字">
        <div class="table-responsive">
          <div class="table table-striped table-hover">
            <table v-for="(val, key, index) in filteredList" :key="index" border="1" style="color:black;" width="242px" class="table table-striped table-hover">
              <tr><td width="92px">使用者名稱</td><td>{{ val.username }} </td></tr>
              <tr><td width="92px">備註</td><td>{{ val.description }}</td></tr>
              <tr><td width="92px">權限</td><td>{{ val.group }}</td></tr>
              <tr><td width="92px">語言</td><td>{{ val.language }}</td></tr>
              <tr><td width="92px">地址</td><td>{{ val.address }}</td></tr>
              <tr><td width="92px">電話號碼</td><td>{{ val.phone }}</td></tr>
              <tr><td width="92px">email</td><td>{{ val.email }}</td></tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {railsApi} from '../../../../../api.js'
const QUERY_URL = railsApi + '/user/search'
const CompanyId = localStorage.getItem('CompanyId')
const ProductId = localStorage.getItem('ProductId')
const ProjectId = localStorage.getItem('ProjectId')
export default {
  data() {
    return {
      search: '',
      userslist: ''
    }
  },
  computed: {
    filteredList() {
      return Object.keys(this.userslist)
        .filter(key => (key).toLowerCase().indexOf(this.search.toLowerCase()) !== -1)
        .reduce((obj, key) => {
          obj[key] = this.userslist[key]
          return obj
        }, {})
      // return Object.entries(this.userslist).map(([key, value]) => ({key, value}))
      //         .filter((data) =>
      //         JSON.stringify(data).toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
    }
  },
  mounted() {
    this.query()
  },
  methods: {
    query() {
      fetch(QUERY_URL, {
      method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Token': localStorage.getItem('token')
        },
        body: JSON.stringify({
          'CompanyId': CompanyId,
          'ProductId': ProductId,
          'ProjectId': ProjectId
        })
      })
      .then(
        response =>
          response.json().then(data => ({
            data: data
          }))
      )
      .then(json => {
        this.userslist = Object(json.data)
      })
    },
    searchData() {
      fetch(QUERY_URL, {
        method: 'post',
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
          this.userslist = Object(json.data)
          console.log(json.data)
        })
    }
  }
}
</script>
