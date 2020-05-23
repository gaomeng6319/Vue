<!--随便找了的 mintui组件 在拿来改改 -->
<template>

  <div  >
    <mt-header fixed v-bind:title=headerTitle></mt-header>
    <div style="margin-top: 50px;">

      <router-link :to="{path:  '/' +menu.menuHref }"  v-for="menu in menus">
        <mt-cell      v-bind:title="menu.menuName" value=""></mt-cell>
      </router-link>
      <mt-button type="primary" v-on:click="logout" size="large">退出登录</mt-button>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
    export default {
        name: "PersonalCenter",
        data(){
          return {
            headerTitle:"个人中心(用户名:"+this.$route.query.userName+")",
            menus:[{menuName:"体检预约",menuHref:""},
                   {menuName:"报告查询",menuHref:""},
                   {menuName:"基本信息",menuHref:""},
                  ]
          }
        },
      methods:{
        logout:function () {
          MessageBox.confirm('你确定要退出登录吗?').then(action => {
            sessionStorage.removeItem("userMeesage")
            this.$router.push({ path: '/PersonalCenter'})
            return;
        }).catch(action=>{
            console.log("用户取消了操作")
          });
        }
      }
    }
</script>

<style scoped>

</style>
