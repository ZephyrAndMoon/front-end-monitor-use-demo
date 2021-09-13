import Vue from "vue";
import App from "./App.vue";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import FrontEndMonitor from "../../front-end-monitor/src/index";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new FrontEndMonitor().init({
  url: "http://localhost:3000/monitor", //错误上报地址
  consoleError: true, //配置是否需要记录console.error错误信息
  vueError: true, //配置是否需要记录vue错误信息
  vue: Vue, //如需监控vue错误信息，则需要传入vue
  extendsInfo: {
   
  },
});


new Vue({
  render: (h) => h(App),
}).$mount("#app");
