import Vue from "vue";
import App from "./App.vue";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import ZephyrMonitor from 'zephyr-monitor';

Vue.config.productionTip = false;

Vue.use(ElementUI);

ZephyrMonitor.initError({
  pageId: "001",
  url: "http://localhost:3000/monitor", //错误上报地址
  error: {
    vue: true,
    console: true,
  },
  vue: Vue, //如需监控vue错误信息，则需要传入vue
});

// 页面性能监控初始化代码
ZephyrMonitor.initPerformance({
  pageId: "001",
  url: "http://localhost:3000/performance", //错误上报地址
  useNetworkSpeed: true,
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
