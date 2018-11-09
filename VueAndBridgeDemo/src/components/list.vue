<template>
  <div class="vux-1px-t">
    <ul class="list" style="list-style-type:none">
      <li class="list_item" v-for='(item,index) in json' :key="index">
        <div>
          <img class="item_img" src="../assets/img/banner.jpeg">
          <p class="item_title"></p>
          <p class="item_name">最新手机iPhoneXm</p>
          <p class="item_type">价格：{{ item }}</p>
          <p class="item_num">上架时间：2020-09-18</p>
          <div class="item_line"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { LoadMore } from 'vux';
export default {
  components: {
    LoadMore
	},
  props: {
      json: Array
  },
  data () {
    return {

    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{text-decoration: none;}
.list{background-color: rgb(255,255,255);}
.list_item{position: relative;}
.item_img{padding-left: 5px;padding-top: 5px;width:2.346rem;position: absolute;}
.item_title{padding-left: 34%;padding-top: 5px;font-size: 18px;width: 66%;text-overflow: ellipsis;overflow:hidden; white-space: nowrap;color: black;}
.item_name{padding-left: 34%;font-size: 14px;width: 66%;text-overflow: ellipsis;overflow:hidden; white-space: nowrap;color: black;}
.item_type{padding-left: 34%;font-size: 14px;width: 66%;text-overflow: ellipsis;overflow:hidden; white-space: nowrap;color: rgb(100,100,100);}
.item_num{padding-left: 34%;padding-bottom: 5px;font-size: 15px;width: 66%;text-overflow: ellipsis;overflow:hidden; white-space: nowrap;color: rgb(100,100,100);}
.item_line{margin-left: 5px;margin-right: 5px;background: rgb(155,155,155);height: 1px;}
</style>
