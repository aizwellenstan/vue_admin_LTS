<template>
  <div>
    <!-- #edit user {{ $route.params.id }} -->
    <div class="el-card login-card text-primary fs-xl is-always-shadow">
      <div class="el-card__header">修改使用者</div>
      <div v-if="errorMessage" class="alert alert-danger" role="alert">
        {{ errorMessage }}
      </div>
      <div v-if="successMessage" class="alert alert-success" role="alert">
        {{ successMessage }}
      </div>
      <form v-if="!signingUp" @submit.prevent="signup">
        <div class="form-group">
          <div class="el-form-item">
            <label class="el-form-item__label">使用者名稱</label>
            <div class="el-form-item__content">
              <div class="el-input">
                <input
                  id="username"
                  v-model="user.username"
                  type="text"
                  class="el-input__inner"
                  aria-describedby="usernameHelp"
                  placeholder="Username"
                  required
                >
              </div>
            </div>
          </div>
          <h5 id="usernameHelp" class="form-text text-muted" />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <span class="tag">密碼</span><br><br>
            <input
              id="password"
              v-model="user.password"
              type="password"
              class="textbox"
              aria-describedby="passwordHelp"
              placeholder="Password"
              required
            >
            <h5 id="passwordHelp" class="form-text text-muted" />
          </div>
          <div class="form-group col-md-6">
            <span class="tag">確認密碼</span><br><br>
            <input
              id="confirmPassword"
              v-model="user.confirmPassword"
              type="password"
              class="textbox"
              aria-describedby="confirmPasswordHelp"
              placeholder="ConfirmPassword"
              required
            >
          </div>
          <div class="form-group col-md-6">
            <span class="tag">Email</span><br><br>
            <input
              v-model="user.email"
              type="text"
              class="textbox"
              aria-describedby="emailHelp"
              placeholder="Email"
              required
            >
          </div>
          <div class="form-group col-md-6">
            <span class="tag">電話號碼</span><br><br>
            <input
              v-model="user.phone"
              type="text"
              class="textbox"
              aria-describedby=""
              placeholder="Phone"
              required
            >
          </div>
          <hr>
          <div class="form-group col-md-6">
            <span class="tag">地址</span><br><br>
            <input
              v-model="user.address"
              type="text"
              class="textbox"
              aria-describedby=""
              placeholder="Address"
              required
            >
          </div>
          <div class="form-group col-md-6">
            <span class="tag">語言</span><br><br>
            <input
              v-model="user.language"
              type="text"
              class="textbox"
              aria-describedby=""
              placeholder="Language"
              required
            >
          </div>
          <div class="form-group col-md-6">
            <span class="tag">備註</span><br><br>
            <input
              v-model="user.description"
              type="text"
              class="textbox"
              aria-describedby=""
              placeholder="Description"
              required
            >
          </div>
          <div class="form-group col-md-6">
            <label class="tag">權限</label>
            <form>
              <select v-if="group == 'Manager'" v-model="user.group">
                <option selected>Guest</option>
                <option>User</option>
                <option>Manager</option> 
              </select>
              <select v-else-if="group == 'User'" v-model="user.group">
                <option selected>Guest</option>
                <option>User</option>
              </select>
              <select v-if="group == 'Guest'" v-model="user.group">
                <option selected>Guest</option>
              </select>
            </form>
          </div>
        </div>
        <div style="padding-top: 21px">
          <button type="submit" class="btn-cyan">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {railsApi} from '../../../../../api.js'
const UPDATE_URL = railsApi+'/user/'
// import Joi from 'joi'

// const schema = Joi.object().keys({
//   username: Joi.string().regex(/(^[a-zA-Z0-9_]+$)/).min(2).max(30).required(),
//   password: Joi.string().regex(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(^[a-zA-Z0-9@\$=!:.#%]+$)/).trim().min(8).required(),
//   confirmPassword: Joi.string().regex(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(^[a-zA-Z0-9@\$=!:.#%]+$)/).trim().min(8).required()
// })
export default {
  data: () => ({
    group: '',
    userid: '',
    signingUp: false,
    errorMessage: '',
    successMessage: '',
    user: {
      username: '',
      password: '',
      confirmPassword: '',
      companyId: '',
      productId: '',
      projectId: '',
      description: '',
      group: '',
      language: '',
      address: '',
      phone: '',
      email: ''
    },
    isChecked: true,
    okRegister: false
  }),
  watch: {
    user: {
      handler() {
        this.errorMessage = ''
      },
      deep: true
    }
  },
  created() {
    this.id = this.$route.params.id
    this.userid = localStorage.getItem('userid')
    this.group = localStorage.getItem('group')
  },
  methods: {
    signup() {
      this.errorMessage = ''
      this.successMessage = ''
      this.signingUp = true
      // if(localStorage.getItem('selectProjectId')=="") {
      //   alert("Please Select Project From ProjectPage")
      //   this.$router.push('/admin/project')
      // } else {
      //   this.user.companyId = localStorage.getItem('selectCompanyId')
      //   this.user.productId = localStorage.getItem('selectProductId')
      //   this.user.projectId = localStorage.getItem('selectProjectId')
      //   this.okRegister=true
      // }
      this.user.companyId = localStorage.getItem('CompanyId')
      this.user.productId = localStorage.getItem('ProductId')
      this.user.projectId = localStorage.getItem('ProjectId')
      this.okRegister = true
      if(this.okRegister) {
        fetch(UPDATE_URL+this.id, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(
          this.user
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
            this.$router.push('/admin/accounts/update')
          }, 1000)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 63px;
  height: 32px;
  margin-left: 76px;
  margin-top: 20px;
}
.navbar {
  height: 72px;
  overflow: hidden;
  position: relative;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  z-index: 1001;
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;
    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
  .breadcrumb-container {
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
        transition: background .3s;
        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }
    .avatar-container {
      margin-right: 30px;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
.form {
  margin-top:72px;
  padding-top:68px;
  padding-left:377px;
  padding-bottom: 0;
  height: calc(100%-72px)
}
.lightblue {
  color: #32d4d7
}
.tag {
  font-size: 16px;
  color: #666
}
.title {
  font-size: 28px
}
.btn-cyan {
  background-color: #32d4d7;
  color: #fff;
  width: 176px;
  height: 40px
}
.btn-white {
  background-color: #fff;
  color: #32d4d7;
  width: 223px;
  height: 40px
}
.textbox{
  -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 400px;
}
.alert{
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
  width: 571px
}
.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
</style>
