<template>
  <div id="app">
    <!-- 视图层 -->
    <keep-alive> 
      <router-view v-if="$route.meta.keepAlive"></router-view> 
    </keep-alive> 
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  * {   
    -webkit-touch-callout:none;  /*系统默认菜单被禁用*/   
    -webkit-user-select:none; /*webkit浏览器*/   
    -khtml-user-select:none; /*早期浏览器*/   
    -moz-user-select:none;/*火狐*/   
    -ms-user-select:none; /*IE10*/   
    user-select:none;   
  }
  input {      
    -webkit-user-select:auto; /*webkit浏览器*/     
  }
  html {
    background: rgb(240,240,240);
  }
  body {
    background: rgb(240,240,240);
    margin: 0px;
  }
</style>
