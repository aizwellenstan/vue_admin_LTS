<template>
  <div>
    <div class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">刪除帳戶</div>
      <div class="el-card__body">
        <div v-if="renderComponent" class="table-responsive">
        <table v-for="(val, key, index) in userslist" :key="index" border="1" style="color:black;" width="242px" class="table table-striped table-hover">
            <tr><td width="92px">使用者名稱</td><td>{{ val.username }} </td></tr>
              <tr><td width="92px">說明</td><td>{{ val.description }}</td></tr>
              <tr><td width="92px">權限</td><td>{{ val.group }}</td></tr>
              <tr><td width="92px">語言</td><td>{{ val.language }}</td></tr>
              <tr><td width="92px">地址</td><td>{{ val.address }}</td></tr>
              <tr><td width="92px">電話號碼</td><td>{{ val.phone }}</td></tr>
              <tr><td width="92px">email</td><td>{{ val.email }}</td></tr>
            <tr>
              <td colspan="2">
                <center>
                  <span 
                  v-if="
                    group == 'Guest' || 
                    group == 'User' && ((val.group == 'User' && userid !== val.id)|| val.group =='Manger')
                  "
                  style="color: red"
                  >權限不足</span>
                  <button v-else class="btn btn-danger" @click="handleDelete(val.id)">Delete</button>
                </center>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {railsApi} from '../../../../../api.js'
const QUERY_URL = railsApi + '/user/search'
const DESTORY_URL = railsApi + '/user'
const CompanyId = localStorage.getItem('CompanyId')
const ProductId = localStorage.getItem('ProductId')
const ProjectId = localStorage.getItem('ProjectId')
export default {
  data() {
    return {
      userid: '',
      group: '',
      renderComponent: true,
      search: '',
      userslist: []
    }
  },
  created() {
    this.userid = localStorage.getItem('userid')
    this.group = localStorage.getItem('group')
  },
  mounted() {
    this.query() 
  },
  methods: {
    forceRerender() {
      // Remove my-component from the DOM
      this.renderComponent = false

      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true
        this.query()
      })
    },
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
    handleDelete(id) {
      fetch(DESTORY_URL+`/${id}`, {
        method: 'delete',
        headers: {
          'Token': localStorage.getItem('token')
        }
      })
      if (this.userid == id) {
        setTimeout(() => {
          localStorage.removeItem('token')
          localStorage.removeItem('level')
          localStorage.removeItem('userid')
          this.$store.dispatch('user/logout')
          // this.$router.push(`/login?redirect=${this.$route.fullPath}`)
          document.location.href = '/'
          delete localStorage.token
        }, 1000)
      }else {
        this.userslist = ''
        this.forceRerender()
      }
    }
  }
}
</script>
