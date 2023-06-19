import { propsType, propsTypes } from "./propTpes.js";

export const methodsPools = new Map();
export const exprPools = new Map();
const reg4Expressions = /\{\{(.+?)\}\}/;
const reg4Fun = /(.+?)\((.+?)\)/;
// 将$nodes中的包含可执行表达式正则匹配出来，并按照一定顺序塞入exprPools的map中
export function pools(vm, methods) {
  const { $nodes } = vm;
  const nodeList = [...$nodes.querySelectorAll("*")]; //获取template下的所有节点
  nodeList.forEach((f) => {
    const content = f.textContent;
    const match = content.match(reg4Expressions); // 匹配出带有{{}}表达式的元素,放入表达式数组中
    if (match) {
      exprPools.set(f, divideExpressionsWithData(vm.$data, match[1].trim())); //将元素和表达式对应起来
    }
    propsTypes.forEach((fe) => {
      const bundle = f.getAttribute(`@${fe}`);
      if (bundle) {
        const { methodName, args } = divideFunction(bundle);
        const handler = methods[methodName].bind(vm, ...args);
        if (methodsPools.get(f)) {
          methodsPools.get(f).push({
            type: fe,
            handler,
          });
        } else {
          methodsPools.set(f, [
            {
              type: fe,
              handler,
            },
          ]);
        }
      }
    });
  });
}

// 分流出变量和表达式
const divideExpressionsWithData = (data, expression) => {
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      if (expression.includes(key) && expression != key) {
        return {
          key,
          expression,
        };
      }
      return {
        key,
        expression: key,
      };
    }
  }
};

// 分流出函数的类型和vm中的函数
const divideFunction = (str) => {
  const match = str.match(reg4Fun);
  if (match) {
    let name = match[1];
    let argsArr = match[2].split(",");
    return {
      methodName: name,
      args: argsArr,
    };
  } else {
    return {
      methodName: str,
      args: [],
    };
  }
};

// 判断入参是什么类型
const paramsTypeIsStr = (param) => {
  const reg = /\'(.+?)\'/;
};
