import { methodsPools } from "./pools";
export const bundleEvent = (vm) => {
  for (let [node, info] of methodsPools) {
    info.forEach((element) => {
      let { type, handler } = element;
      vm[handler.name] = handler;
      node.addEventListener(type, vm[handler.name], false);
    });
  }
};
