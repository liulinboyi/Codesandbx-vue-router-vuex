<template>
  <div class="nav">
    <ul>
      <li><router-link to="/card"><i class="iconfont icon-weibo"></i></router-link></li>
      <li><router-link to="/center"><i class="iconfont icon-qq_connect"></i></router-link></li>
      <li><router-link to="/about"><i class="iconfont icon-wechat"></i></router-link></li>
      <li><router-link to="/home"><i class="iconfont icon-douban"></i></router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.nav{
  display: flex;
  width: 100%;
  ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0 1em;
    li{
      list-style: none;
      a{
        text-decoration: none;
        color: black;
      }
      .router-link-active{
        color: red;
      }
    }
  }
}
</style>


