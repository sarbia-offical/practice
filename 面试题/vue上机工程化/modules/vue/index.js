import { reactive } from "./reactive";
import { pools, methodsPools, exprPools } from "./pools";
import { bundleEvent } from "./bundleEvent";
import { render } from "./render";
const vm = {};
const mount = (el) => {
  document.querySelector(el).appendChild(vm.$nodes);
};

// 将template转换为实际元素
const createNode = (template) => {
  const ele = document.createElement("div");
  ele.innerHTML = template;
  return [...ele.childNodes].filter((ele) => {
    return ele.nodeType == 1;
  })[0];
};

// 创建vm实例的函数
const creareApp = (component) => {
  const { template, data, methods } = component; // 解构
  vm.$nodes = createNode(template); // 将vue文件中的template例子转换为真实node节点
  vm.mount = mount; // 虚拟节点绑定mount挂载函数，用于渲染
  function init() {
    reactive(vm, data); // 传入data监听vm上的$data数据变化
    pools(vm, methods);
    bundleEvent(vm);
    render(vm);
  }
  init();
  return vm;
};

const Vue = {
  creareApp,
};

export { creareApp }; // 直接导出函数，可通过createApp创建vue实例
export default Vue; // 导出vue对象，通过对象.方法创建vue实例
