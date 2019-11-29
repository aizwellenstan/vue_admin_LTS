<template>
  <div>
    <div style="color: black" class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">通知</div>
      <div class="el-card__body">
        <label><input type="checkbox" v-model="val" value="Email"> Email</label>
        <div class="el-form-item__content">
              <div class="el-input">
                <input
                  id="username"
                  v-model="contact.email"
                  type="text"
                  class="el-input__inner"
                  aria-describedby=""
                  placeholder="input Email"
                >
              </div>
            </div>
        <label><input type="checkbox" v-model="val" value="Line"> Line</label>
        <div class="el-form-item__content">
              <div class="el-input">
                <input
                  id="username"
                  v-model="contact.line"
                  type="text"
                  class="el-input__inner"
                  aria-describedby=""
                  placeholder="input Line"
                >
              </div>
            </div>
        <label><input type="checkbox" v-model="val" value="簡訊"> 簡訊</label>
        <div class="el-form-item__content">
              <div class="el-input">
                <input
                  id="username"
                  v-model="contact.message"
                  type="text"
                  class="el-input__inner"
                  aria-describedby=""
                  placeholder="input Phone"
                >
              </div>
            </div>
            <div data-v-dc72230a="" style="padding-top: 21px;">
              <button data-v-dc72230a="" type="submit" class="btn btn-primary">Submit</button>
        <!-- <p>{{ val }}</p> -->
           </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: [],
      contact: {
        email: '',
        line: '',
        message: ''
      },
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

<style scoped>
.text-primary {
    color: #000!important;
}
</style>