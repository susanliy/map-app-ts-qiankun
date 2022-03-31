import "../common/qiankun/public-path.js";
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./router";
import store from "./store";

let instance = null;

function render(props: any = {} ) {
  const { container } = props;
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  });

  instance = createApp(App);
  instance
    .use(ElementPlus, { locale: zhCn })
    .use(store)
    .use(router)
    .mount(container ? container.querySelector("#mapapp") : "#mapapp");
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  console.log("独立运行");
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props: any) {
  console.log("[vue] props from main framework", props);
  //只有在值改变的时候会进行传值--存vuex
  props.onGlobalStateChange((state: any, prev: any) => {
    console.log('1111',state, prev);
    store.commit('qiankunModule/setActiveMenu',state)
  });
  props.setGlobalState((state: any)=>{
    console.log('state',state)
  });
  render(props);
}

export async function unmount() {
  // instance.$destroy();
  // instance.$el.innerHTML = "";
  // instance = null;
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
 export async function update(props: any) {
  console.log('update props', props);
}

