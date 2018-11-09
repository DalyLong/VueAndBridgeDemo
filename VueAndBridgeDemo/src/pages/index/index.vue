<template>
  <div id="index">
    <my-list :json='listJson'></my-list>
    <button v-on:click="buttonClick">调用原生getScreenHeight方法</button>
    <p class="content">通过Swift获得屏幕的高度:{{ height }}</p>
  </div>
</template>

<script>
import { XButton,cookie } from 'vux';
export default {
  components: {
    XButton
	},
  data () {
    return {
      listJson:[],
      height: 0
    }
  },
  methods:{
    buttonClick(){
      //调用原生注册过的方法
      this.$bridge.callhandler('getScreenHeight', "调用getScreenHeight方法", (data) => {
        // 处理返回数据
        this.height = data
      })
    },
    init(){
      this.$bridge.registerhandler('showAlert', (data, responseCallback) => {
        this.$vux.toast.show({
          text: data,
          type: 'text'
        });
      })
      this.$bridge.registerhandler('getCurrentPageUrl', (data, responseCallback) => {
        responseCallback("https://www.baidu.com")
      })
    }
  },
  mounted() {
    this.init() 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  margin-left: 2%;
  height: 35px;
  text-align: center;
  font-size: 17px;
  width:96%;
  border-radius: 5px;
  background-color: teal;
  color: white;
}
.content{
  font-size: 17px;
  text-align: center;
  height: 30px;
  margin: 5px;
}
</style>
