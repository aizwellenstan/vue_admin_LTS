<template>
  <div>
    <div class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">維修保養紀錄</div>
      <div class="el-card__body">
        <!-- {{this.colddataList}} -->
        <div class="table-responsive">
          <table border="1" style="color:black;" class="table table-striped table-hover">
            <thead class="bg-info">
              <tr>
                <th>設備名稱</th>
                <th>最後保養日期</th>
                <th>下次保養日期</th>
                <th>保養紀錄</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(equip, key, index) in equipList" :key="index">
                <td>{{ equip.EquipmentId }}</td>
                <td>{{ equip.Name }}</td>
                <td>{{ equip.Type }}</td>
                <td>
                  <router-link :to="{ name: 'RepairViewMore', params: { id : equip.EquimentId }}">
                    <button class="btn btn-success"
                    >保養紀錄
                    </button>
                  </router-link>
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
export default {
  data() {
    return {
      equipList:[
        {
          EquipmentId: "AXIS001",
          Name:"20161213",
          Type:"20201213",
          Manufacturer:"Manufacturer",
          MaintenanceDate: "20191031",
          NextMaintenanceDate: "20191231",
          Department: "Department1"
        },
        {
          EquipmentId: "AXIS002",
          Name:"20161215",
          Type:"20201215",
          Manufacturer:"Manufacturer",
          MaintenanceDate: "20191031",
          NextMaintenanceDate: "20191231",
          Department: "Department1"
        },
        {
          EquipmentId: "AXIS003",
          Name:"20161217",
          Type:"20201217",
          Manufacturer:"Manufacturer",
          MaintenanceDate: "20191031",
          NextMaintenanceDate: "20191231",
          Department: "Department1"
        },
        {
          EquipmentId: "AXIS004",
          Name:"20161219",
          Type:"20201219",
          Manufacturer:"Manufacturer",
          MaintenanceDate: "20191031",
          NextMaintenanceDate: "20191231",
          Department: "Department1"
        },
        {
          EquipmentId: "AXIS005",
          Name:"20161218",
          Type:"20201218",
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
