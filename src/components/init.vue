
<template>
<div class="hello">
<mt-header  fixed  :title="selected">
</mt-header>
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="首页">
    <router-link to="/main" tag="li">
    <section >跳转至main</section>
    </router-link>
    <main_content></main_content>
  </mt-tab-container-item>
  <mt-tab-container-item id="消息">
     <mt-cell title="content1" />
     <mt-cell title="content2" />
     <mt-cell title="content3" />
     <mt-cell title="content4" />
     <mt-cell title="content5" />
  </mt-tab-container-item>
  <mt-tab-container-item  id="管车">
    <h1>{{msg}}</h1>
    <section >跳转至car</section>
  </mt-tab-container-item>
  <mt-tab-container-item  id="我的">
    <main_content></main_content>
  </mt-tab-container-item>
</mt-tab-container>
<mt-tabbar v-model="selected" >
  <mt-tab-item v-for="(item, index) in tabs" :key="index" :id="item.id">
  <img slot="icon" :src="selected == item.id ? item.tab_img_active : item.tab_img"> {{item.name}}
  </mt-tab-item>
</mt-tabbar>
</div>
</template>
<script>
import Vue from 'vue'
import MainContent from './MainContent'
import { Header, Tabbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Header.name, Header)
export default {
  name: 'init',
  data () {
    return {
      selected: '首页',
      msg: 'Welcome!!',
      tabs: [{
        id: '首页',
        name: '首页',
        active: 'false',
        tab_img: require('../assets/nav_home.png'),
        tab_img_active: require('../assets/nav_home_active.png')
      }, {
        id: '消息',
        name: '消息',
        active: 'false',
        tab_img: require('../assets/nav_cxl.png'),
        tab_img_active: require('../assets/nav_cxl_now.png')
      }, {
        id: '管车',
        name: '管车',
        active: 'false',
        tab_img: require('../assets/nav_car.png'),
        tab_img_active: require('../assets/nav_car_now.png')
      }, {
        id: '我的',
        name: '我的',
        active: 'false',
        tab_img: require('../assets/nav_my.png'),
        tab_img_active: require('../assets/nav_my_now.png')
      }]
    }
  },
  components: {
    'main_content': MainContent
  },
  computed: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
