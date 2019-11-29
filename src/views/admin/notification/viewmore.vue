<template>
  <div>
    <div class="col-md-9">
      <div class="table-responsive">
        <table class="table table-striped table-hover ">
          <thead class="bg-info">
            <tr>
              <td colspan="2">保養紀錄</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>日期</td>
              <td>20201231</td>
            </tr>
            <tr>
              <td>費用</td>
              <td>99999USD</td>
            </tr>
            <tr>
              <td>廠商</td>
              <td>NADI</td>
            </tr>
            <tr>
              <td>備註</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <router-link to="/admin/repair">
          <button class="btn btn-primary">Go Back</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      equipList:[
        {
          EquipmentId: "aaa",
          Name:"aaa",
          Type:"type",
          Manufacturer:"Manufacturer",
          MaintenanceDate: "20191031",
          NextMaintenanceDate: "20191231",
          Department: "Department1"
        },
        {
          EquipmentId: "qa",
          Name:"aaa",
          Type:"type",
          Manufacturer:"Manufacturer",
          MaintenanceDate: "20191031",
          NextMaintenanceDate: "20191231",
          Department: "Department1"
        },
        {
          EquipmentId: "aqeqaa",
          Name:"aaa",
          Type:"type",
          Manufacturer:"Manufacturer",
          MaintenanceDate: "20191031",
          NextMaintenanceDate: "20191231",
          Department: "Department1"
        },
        {
          EquipmentId: "aqqaa",
          Name:"aaa",
          Type:"type",
          Manufacturer:"Manufacturer",
          MaintenanceDate: "20191031",
          NextMaintenanceDate: "20191231",
          Department: "Department1"
        },
        {
          EquipmentId: "veaaa",
          Name:"aaa",
          Type:"type",
          Manufacturer:"Manufacturer",
          MaintenanceDate: "20191031",
          NextMaintenanceDate: "20191231",
          Department: "Department1"
        }
      ]
    }
  }
}
</script>
