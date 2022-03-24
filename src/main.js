import Vue from "vue";
import App from "./App.vue";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import ZephyrMonitor from "zephyr-monitor";

Vue.config.productionTip = false;

Vue.use(ElementUI);

// 初始化监控工具基础配置
const ZM = new ZephyrMonitor({
  pageId: "demo", // 页面标示
});

// 错误监控初始化代码
ZM.initError({
  url: "http://localhost:3000/monitor", //错误上报地址
  error: {
    vue: true,
    console: true,
  },
  vue: Vue, //如需监控vue错误信息，则需要传入vue
});

// 页面性能监控初始化代码
ZM.initPerformance({
  url: "http://localhost:3000/performance", // 上报地址
  useNetworkSpeed: true, // 是否定时间隔上报网速情况 默认为 false
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
