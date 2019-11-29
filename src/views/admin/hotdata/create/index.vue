<template>
  <div class="app-container">
    <h3>創造動態資料點位 匯入csv檔</h3>
    <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
    <button class="btn btn-primary" @click="handleSubmit">Submit</button>
    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
    </el-table>
  </div>
</template>

<script>
import UploadExcelComponent from '@/components/UploadExcel/index.vue'
import {railsApi} from '../../../../../api.js'
const CompanyId = localStorage.getItem('CompanyId')
const ProductId = localStorage.getItem('ProductId')
const ProjectId = localStorage.getItem('ProjectId')
const REGISTER_URL = railsApi + `/${CompanyId}/${ProductId}/${ProjectId}/hotdata`

export default {
  name: 'UploadExcel',
  components: { UploadExcelComponent },
  data() {
    return {
      tableData: [],
      tableHeader: []
    }
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1

      if (isLt1M) {
        return true
      }

      this.$message({
        message: 'Please do not upload files larger than 1m in size.',
        type: 'warning'
      })
      return false
    },
    handleSuccess({ results, header }) {
      this.tableData = results
      this.tableHeader = header
    },
    handleSubmit() {
      this.errorMessage = ''
      this.successMessage = ''
      this.signingUp = true
      for (var i = 0; i < this.tableData.length; i++) {
        fetch(REGISTER_URL, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(
            this.tableData[i]
          )
        })
        .then(res => res.json())
        .then(parsedResponse => {
          console.log(parsedResponse)
          this.successMessage = parsedResponse.message
        })
        .then((result) => {
          setTimeout(() => {
            this.signingUp = false
          }, 1000)
        })
      }
      this.tableData = ''
      this.tableHeader = ''
    }
  }
}
</script>
