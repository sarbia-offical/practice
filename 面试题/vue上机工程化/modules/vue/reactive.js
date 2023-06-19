import { update } from "./render";

export function reactive(vm, data) {
  vm.$data = data(); //执行data函数
  for (const key in vm.$data) {
    if (Object.hasOwnProperty.call(vm.$data, key)) {
      Object.defineProperty(vm, key, {
        get() {
          return vm.$data[key];
        },
        set(newValue) {
          console.log("set");
          vm.$data[key] = newValue;
          update(vm, key);
        },
      });
    }
  }
}
