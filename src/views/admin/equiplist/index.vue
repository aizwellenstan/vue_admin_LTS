<template>
  <div>
    <div class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">設備清單</div>
      <div class="el-card__body">
        <!-- {{this.colddataList}} -->
        <div class="table-responsive">
          <table border="1" style="color:black;" class="table table-striped table-hover">
            <thead class="bg-info">
              <tr>
                <th>EquipmentId</th>
                <th>EquipmentName</th>
                <th>Type</th>
                <th>製造商</th>
                <th>維護日期</th>
                <th>下次維護日期</th>
                <th>部門</th>
                <th>更多資訊</th>
                <th>編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(equip, key, index) in equipList" :key="index">
                <td>{{ equip.EquipmentId }}</td>
                <td>{{ equip.Name }}</td>
                <td>{{ equip.Type }}</td>
                <td>{{ equip.Manufacturer }}</td>
                <td>{{ equip.MaintenanceDate }}</td>
                <td>{{ equip.NextMaintenanceDate }}</td>
                <td>{{ equip.Department }}</td>
                <td>
                  <router-link :to="{ name: 'EquipListViewMore', params: { id : equip.EquimentId }}">
                    <button class="btn btn-success"
                    >View More
                    </button>
                  </router-link>
                </td>
                <td>
                  <router-link :to="{ name: 'EditEquip', params: { id : equip.EquimentId }}">
                    <button class="btn btn-warning"
                    >Edit
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
          Name:"電子定位製程卡 電子定位卡",
          Type:"電子定位卡",
          Manufacturer:"Manufacturer",
          MaintenanceDate: "20191031",
          NextMaintenanceDate: "20191231",
          Department: "Department1"
        },
        {
          EquipmentId: "AXIS002",
          Name:"電子定位製程卡 電子定位卡",
          Type:"電子定位卡",
          Manufacturer:"Manufacturer",
          MaintenanceDate: "20191031",
          NextMaintenanceDate: "20191231",
          Department: "Department1"
        },
        {
          EquipmentId: "AXIS003",
          Name:"電子定位製程卡 電子定位卡",
          Type:"電子定位卡",
          Manufacturer:"Manufacturer",
          MaintenanceDate: "20191031",
          NextMaintenanceDate: "20191231",
          Department: "Department1"
        },
        {
          EquipmentId: "AXIS004",
          Name:"電子定位製程卡 電子定位卡",
          Type:"電子定位卡",
          Manufacturer:"Manufacturer",
          MaintenanceDate: "20191031",
          NextMaintenanceDate: "20191231",
          Department: "Department1"
        },
        {
          EquipmentId: "AXIS005",
          Name:"電子定位製程卡 電子定位卡",
          Type:"電子定位卡",
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
