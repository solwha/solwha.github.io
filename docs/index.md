####  柯里化（Currying）

文档地址 ：[柯里化（Currying）](https://zh.javascript.info/currying-partials)

```JavaScript
// 辅助函数,执行柯里化转换
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this,args)
    } else {
      return (...args2) => curried.apply(this,args.concat(args2))
    }
  }
}

function add(a, b, c) {
  return a + b + c
}

let addTo = curry(add)

addTo(1)(2, 3)

```