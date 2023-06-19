import { exprPools } from "./pools";
export const render = (vm) => {
  for (const [node, exp] of exprPools) {
    _render(vm, node, exp);
  }
};
export const update = (vm, key) => {
  //提供给reactive中的监听使用
  for (const [node, exp] of exprPools) {
    if (key === exp.key) {
      _render(vm, node, exp);
    }
  }
};
export const _render = (vm, node, exp) => {
  const { key, expression } = exp;
  //   console.log(vm[exp.key]);
  //   vm[exp.key] = eval(`vm.${exp.expression}`); 不应放在这里执行，会触发无限递归
  const r = new Function( // with语法是为了能够让expression中的变量获取，比如表达式为{{ count + 1 }}那么with的vm里面才有count属性
    "vm",
    "node",
    `
    with(vm){
        node.textContent = ${expression};
    }
    `
  );
  r(vm, node);
};
