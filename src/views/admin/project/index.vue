<template>
  <div class="app">
    <div class="container">
      <div class="row header">
        <h1 class="col s6 offset-s3 center-align teal-text">Project</h1>
      </div>
      <div class="row">
        <form class="col s6 offset-s3">
          <div class="input-field">
            <i class="material-icons prefix">list</i>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Select</th>
                  <th>ProjectID</th>
                  <th>CompanyID</th>
                  <th>ProductID</th>
                  <th>Title</th>
                  <th>Disctiption</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody v-if="renderComponent">
                <tr v-for="project in projectList" :key="project.id">
                  <td>
                    &nbsp;&nbsp;
                    <input type="radio" :id="project.id" :value="project.ProjectId" v-model="picked" @click="handlePorjectId(project.ProjectId, project.CompanyId, project.ProductId)">
                    <!-- {{project.id}} -->
                  </td>

                  <td>{{project.ProjectId}}</td>

                  <td>{{project.CompanyId}}</td>

                  <td>{{project.ProductId}}</td>

                  <td>{{project.Title}}</td>

                  <td>{{project.Description}}</td>

                  <td>
                    <router-link :to="{ name: 'EditProject', params: { id : project.id }}">
                      <button
                        class="btn btn-warning"
                      >Edit
                      </button>
                    </router-link>
                    
                    <!-- <button class="btn btn-warning" @click="handleEdit()">Edit</button> -->
                  </td>
                </tr>
              </tbody>
              <span>Picked: {{ picked }}</span>
              <br>
              <br>
              <h3>Add New Project</h3>
              <thead>
                <tr>
                  <th>ProjectID</th>
                  <th>CompanyID</th>
                  <th>ProductID</th>
                  <th>Title</th>
                  <th>Disctiption</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input id="icon_prefix2" v-model="newProjectId" type="text"></td>

                  <td><input id="icon_prefix2" v-model="newCompanyId" type="text"></td>

                  <td><input id="icon_prefix2" v-model="newProductId" type="text"></td>

                  <td><input id="icon_prefix2" v-model="newTitle" type="text"></td>

                  <td><input id="icon_prefix2" v-model="newDescription" type="text"></td>

                  <td><button class="btn btn-primary" @click="handleSubmit()">Add</button></td>
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
import railsApi from '../../../../api.js'
const QUERY_URL = {railsApi} + `/projectinfo`
export default {
  name: 'App',
  data() {
    return {
      renderComponent: true,
      picked: '',
      projectList: '',
      newProjectId: '',
      newCompanyId: '',
      newProductId: '',
      newTitle: '',
      newDescription: '',
    }
  },
  mounted() {
    this.query()
  },
  methods:{
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
      fetch(QUERY_URL+`?SiUsername=${localStorage.getItem('SiUsername')}`, {
      method: 'get',
    })
    .then(
          response =>
            response.json().then(data => ({
              data: data
            }))
        )
        .then(json => {
          this.projectList = Object(json.data)
          console.log(json.data)
        })
    },
    handlePorjectId(company,product,project) {
      localStorage.setItem('selectCompanyId', company)
      localStorage.setItem('selectProductId', product)
      localStorage.setItem('selectProjectId', project)
    },
    handleSubmit() {
      fetch(QUERY_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          'ProjectId': this.newProjectId,
          'CompanyId': this.newCompanyId,
          'ProductId': this.newProductId,
          'Title': this.newTitle,
          'Description': this.newDescription,
          'SiUsername': localStorage.getItem('SiUsername')
        })
      })
      .then(
        this.newProjectId= '',
        this.newCompanyId= '',
        this.newProductId= '',
        this.newTitle= '',
        this.newDescription= '',
      )
      this.forceRerender()   
    }
  }
}
</script>
