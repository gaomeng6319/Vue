<template>
  <div  >
    <mt-header  fixed v-bind:title="headerTitle">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>

    </mt-header>
    <div style="margin-top: 50px;">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="userMessage.userName"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="userMessage.userPassword"></mt-field>
      <mt-button type="primary" v-on:click="login" size="large">登录</mt-button>
    </div>
  </div>
</template>

<script>
  import { Toast } from "mint-ui";
  import { MessageBox } from 'mint-ui';
    export default {
      name: "PersonalLogin",
      data(){
        return {
          headerTitle:"登录",
          userMessage:{userName:"",
                       userPassword:""}
        }
      },
      methods:{
        login :function (){
        //实际应该使用axios请求后台,我这边简单处理
        console.log("用户登录 输入用户信息:"+JSON.stringify(this.userMessage))
          if(this.userMessage.userName.length<1){
            Toast('请输入用户名');
            return;
          }
          if(this.userMessage.userPassword.length<1){
            Toast('请输入密码');
            return;
          }
          if(this.userMessage.userName!="system"||this.userMessage.userPassword!='123'){
            MessageBox('提示 ', '用户名或密码错误');
            return;
          }
          sessionStorage.setItem("userMeesage",JSON.stringify(this.userMessage));
          //登录成功路由到用户中心登录状态
          this.$router.push({ path: '/PersonalCenterLoginState',query:{"userName":this.userMessage.userName}})
    }
      }
    }
</script>

<style scoped>

</style>
