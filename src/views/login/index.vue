<template>
  <!-- <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>

      <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: any</span>
      </div>

    </el-form>
  </div> -->
  <section>
    <div class="box">
      <div class="square" style="--i:0;" />
      <div class="square" style="--i:1;" />
      <div class="square" style="--i:2;" />
      <div class="square" style="--i:3;" />
      <div class="square" style="--i:4;" />
      <div class="square" style="--i:5;" />

      <div class="container">
        <div class="form">
          <h2>启弘信息科技</h2>
          <form action="">
            <div class="inputBx">
              <input
                v-model="loginForm.username"
                type="text"
                required="required"
              >
              <span>账号</span>
              <div class=" icon el-icon-user" />
            </div>
            <div class="inputBx password">
              <input
                id="password-input"
                v-model="loginForm.password"
                type="password"
                name="password"
                required="required"
              >
              <span>密码</span>
              <div
                class="password-control"
                @click="show_hide_password($event)"
              />
              <div class="el-icon-lock icon" />
            </div>
            <label class="remember"><input type="checkbox"> 记住密码</label>
            <div class="inputBx">
              <el-button
                v-loading="loading"
                :disabled="loading"
                class="login"
                @click="handleLogin"
              >
                登录
              </el-button>
            </div>
          </form>
          <p> 账号、密码：任意</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    show_hide_password($event) {
      var input = document.getElementById('password-input')
      if (input.getAttribute('type') == 'password') {
        $event.currentTarget.classList.add('view')
        input.setAttribute('type', 'text')
      } else {
        $event.currentTarget.classList.remove('view')
        input.setAttribute('type', 'password')
      }
      return false
    },
    handleLogin() {
      this.loading = true
      console.log(this.loginForm, 'this.loginForm')
      this.$store
        .dispatch('user/login', this.loginForm)
        .then(() => {
          this.$router.push({ path: this.redirect || '/' })
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-loading-mask {
  background-color: rgb(184 186 212 / 50%);
  border-radius: 10px;
}
::v-deep .el-loading-spinner .path {
  stroke: #9cb6d2 !important;
}
* {
  margin: 0;
  padding: 0;
  box-shadow: border-box;
  font-family: 'El Messiri', sans-serif;
}

section {
  background: #031323;
  overflow: hidden;
}

img {
  width: 32px;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.box {
  position: relative;

  .square {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 15px;
    animation: square 10s linear infinite;
    animation-delay: calc(-1s * var(--i));
  }

  @keyframes square {
    0%,
    100% {
      transform: translateY(-20px);
    }

    50% {
      transform: translateY(20px);
    }
  }

  .square:nth-child(1) {
    width: 100px;
    height: 100px;
    top: -15px;
    right: -45px;
  }

  .square:nth-child(2) {
    width: 150px;
    height: 150px;
    top: 105px;
    left: -125px;
    z-index: 2;
  }

  .square:nth-child(3) {
    width: 60px;
    height: 60px;
    bottom: 85px;
    right: -45px;
    z-index: 2;
  }

  .square:nth-child(4) {
    width: 50px;
    height: 50px;
    bottom: 35px;
    left: -95px;
  }

  .square:nth-child(5) {
    width: 50px;
    height: 50px;
    top: -15px;
    left: -25px;
  }

  .square:nth-child(6) {
    width: 85px;
    height: 85px;
    top: 165px;
    right: -155px;
    z-index: 2;
  }
}

.container {
  position: relative;
  padding: 50px;
  // width: 260px;
  min-height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
}

.container::after {
  content: '';
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  border-radius: 5px;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.1) 2%
  );
}

.form {
  position: relative;
  width: 100%;
  height: 100%;

  h2 {
    color: #fff;
    letter-spacing: 20px;
    margin-bottom: 30px;
    padding-left: 10px;
  }

  .inputBx {
    position: relative;
    width: 100%;
    margin-bottom: 20px;

    input {
      width: 100%;
      outline: none;
      border: none;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.2);
      padding: 8px 10px;
      padding-left: 40px;
      border-radius: 15px;
      color: #fff;
      font-size: 16px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }

    .password-control {
      position: absolute;
      top: 11px;
      right: 10px;
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;
      transition: 0.5s;
    }

    .view {
      background: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;
      transition: 0.5s;
    }

    .icon {
      position: absolute;
      top: 2px;
      left: 8px;
      transform: scale(0.6);
      filter: invert(1);
      font-size: 30px;
    }

    .login {
      background: #fff;
      color: #111;
      max-width: 100px;
      padding: 8px 20px;
      box-shadow: none;
      letter-spacing: 5px;
      cursor: pointer;
      transition: 1.5s;
      border-radius: 10px;
      text-align: center;
    }

    .login:hover {
      background: linear-gradient(
        115deg,
        rgba(0, 0, 0, 0.1),
        rgba(255, 255, 255, 0.25)
      );
      color: #fff;
      transition: 0.5s;
    }
    span {
      position: absolute;
      left: 30px;
      padding: 10px;
      display: inline-block;
      color: #fff;
      transition: 0.5s;
      pointer-events: none;
    }

    input:focus ~ span,
    input:valid ~ span {
      transform: translateX(-30px) translateY(-25px);
      font-size: 12px;
    }
  }

  p {
    color: #fff;
    font-size: 15px;
    margin-top: 5px;

    a {
      color: #fff;
    }

    a:hover {
      background-color: #000;
      background-image: linear-gradient(to right, #434343 0%, black 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}

.remember {
  position: relative;
  display: inline-block;
  color: #fff;
  margin-bottom: 10px;
  cursor: pointer;
}
// $bg: #2d3a4b;
// $dark_gray: #889aa4;
// $light_gray: #eee;

// .login-container {
//   min-height: 100%;
//   width: 100%;
//   background-color: $bg;
//   overflow: hidden;

//   .login-form {
//     position: relative;
//     width: 520px;
//     max-width: 100%;
//     padding: 160px 35px 0;
//     margin: 0 auto;
//     overflow: hidden;
//   }

//   .tips {
//     font-size: 14px;
//     color: #fff;
//     margin-bottom: 10px;

//     span {
//       &:first-of-type {
//         margin-right: 16px;
//       }
//     }
//   }

//   .svg-container {
//     padding: 6px 5px 6px 15px;
//     color: $dark_gray;
//     vertical-align: middle;
//     width: 30px;
//     display: inline-block;
//   }

//   .title-container {
//     position: relative;

//     .title {
//       font-size: 26px;
//       color: $light_gray;
//       margin: 0px auto 40px auto;
//       text-align: center;
//       font-weight: bold;
//     }
//   }

//   .show-pwd {
//     position: absolute;
//     right: 10px;
//     top: 7px;
//     font-size: 16px;
//     color: $dark_gray;
//     cursor: pointer;
//     user-select: none;
//   }
// }
</style>
