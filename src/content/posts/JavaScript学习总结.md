---
title: JavaScript学习总结.md
published: 2026-01-20
description: 'avaScript学习总结'
image: ''
tags: ['avaScript']
category: '前端'
draft: false 
lang: ''
---

# JavaScript学习笔记

## 一、JavaScript基础

### 1.1 引入方式

JavaScript 程序不能独立运行，它需要被嵌入 HTML 中，然后浏览器才能执行 JavaScript 代码。通过 `script` 标签将 JavaScript 代码引入到 HTML 中，有两种方式：

#### 1.1.1 内部方式

通过 `script` 标签包裹 JavaScript 代码

```html
<script>
    alert('嗨，欢迎来学习前端技术！')
</script>
```

#### 1.1.2 外部方式

一般将 JavaScript 代码写在独立的以 .js 结尾的文件中，然后通过 `script` 标签的 `src` 属性引入

```html
<script src="demo.js"></script>
```

### 1.2 注释和结束符

#### 1.2.1 单行注释

使用 `// ` 注释单行代码

```javascript
// 这是单行注释
```

#### 1.2.2 多行注释

使用 `/* */` 注释多行代码

```javascript
/*
这是多行注释
可以换行
*/
```

#### 1.2.3 结束符

在 JavaScript 中 `;` 代表一段代码的结束，多数情况下可以省略 `;` 使用回车（enter）替代。

### 1.3 输入和输出

#### 1.3.1 输出

- `alert()`：弹出警告框
- `document.write()`：向文档中写入内容
- `console.log()`：向控制台输出内容

#### 1.3.2 输入

- `prompt()`：弹出输入框，获取用户输入的内容

### 1.4 变量和常量

#### 1.4.1 变量

变量是计算机中用来存储数据的"容器"，它可以让计算机变得有记忆。

**声明变量**

```javascript
let age; // 声明变量
age = 18; // 赋值
let name = '小明'; // 声明并赋值
```

**变量命名规则**

1. 只能是字母、数字、下划线、$，且不能能数字开头
2. 字母区分大小写，如 Age 和 age 是不同的变量
3. JavaScript 内部已占用于单词（关键字或保留字）不允许使用
4. 尽量保证变量具有一定的语义，见字知义

#### 1.4.2 常量

使用 const 声明的变量称为"常量"，常量不允许重新赋值，声明的时候必须赋值（初始化）。

```javascript
const PI = 3.14;
```

### 1.5 数据类型

JavaScript 中的数据类型分为基本数据类型和引用数据类型。

#### 1.5.1 基本数据类型

- **数值类型（number）**：整数、小数、正数、负数
- **字符串类型（string）**：单引号、双引号或反引号包裹的数据
- **布尔类型（boolean）**：true 或 false
- **undefined**：只声明变量，不赋值的情况下，变量的默认值为 undefined
- **null**：表示不存在的对象

#### 1.5.2 检测数据类型

使用 `typeof` 关键字检测数据类型

```javascript
console.log(typeof 123); // number
console.log(typeof 'hello'); // string
```

### 1.6 类型转换

#### 1.6.1 隐式转换

某些运算符被执行时，系统内部自动将数据类型进行转换，这种转换称为隐式转换。

```javascript
let num = 13; // 数值
let num2 = '2'; // 字符串
console.log(num + num2); // 132（数值转字符串）
console.log(num - num2); // 11（字符串转数值）
```

#### 1.6.2 显式转换

编写程序时过度依靠系统内部的隐式转换是不严禁的，因为隐式转换规律并不清晰，大多是靠经验总结的规律。为了避免因隐式转换带来的问题，通常根逻辑需要对数据进行显示转换。

**Number()**：将其他类型转换为数值类型

```javascript
let t = '12';
t = Number(t); // 12
```

**String()**：将其他类型转换为字符串类型

```javascript
let num = 123;
let str = String(num); // '123'
```

**Boolean()**：将其他类型转换为布尔类型

```javascript
let num = 123;
let bool = Boolean(num); // true
```

### 1.7 运算符

#### 1.7.1 算术运算符

| 运算符 | 作用                                                 |
| ------ | ---------------------------------------------------- |
| +      | 求和                                                 |
| -      | 求差                                                 |
| *      | 求积                                                 |
| /      | 求商                                                 |
| %      | 取模（取余数），开发中经常用于作为某个数字是否被整除 |

#### 1.7.2 赋值运算符

| 运算符 | 作用     |
| ------ | -------- |
| +=     | 加法赋值 |
| -=     | 减法赋值 |
| *=     | 乘法赋值 |
| /=     | 除法赋值 |
| %=     | 取余赋值 |

#### 1.7.3 自增/自减运算符

| 符号 | 作用 | 说明                       |
| ---- | ---- | -------------------------- |
| ++   | 自增 | 变量自身的值加1，例如: x++ |
| --   | 自减 | 变量自身的值减1，例如: x-- |

#### 1.7.4 比较运算符

| 运算符 | 作用                                   |
| ------ | -------------------------------------- |
| >      | 左边是否大于右边                       |
| <      | 左边是否小于右边                       |
| >=     | 左边是否大于或等于右边                 |
| <=     | 左边是否小于或等于右边                 |
| ===    | 左右两边是否`类型`和`值`都相等（重点） |
| ==     | 左右两边`值`是否相等                   |
| !=     | 左右值不相等                           |
| !==    | 左右两边是否不全等                     |

#### 1.7.5 逻辑运算符

| 符号 | 名称   | 日常读法 | 特点                       | 口诀           |
| ---- | ------ | -------- | -------------------------- | -------------- |
| &&   | 逻辑与 | 并且     | 符号两边有一个假的结果为假 | 一假则假       |
| \|\| | 逻辑或 | 或者     | 符号两边有一个真的结果为真 | 一真则真       |
| !    | 逻辑非 | 取反     | true变false  false变true   | 真变假，假变真 |

### 1.8 流程控制

#### 1.8.1 分支语句

**if 分支语句**

```javascript
if(条件表达式) {
  // 满足条件要执行的语句
}
```

**if-else 分支语句**

```javascript
if(条件表达式) {
  // 满足条件要执行的语句
} else {
  // 不满足条件要执行的语句
}
```

**if-else if-else 分支语句**

```javascript
if(条件表达式1) {
  // 满足条件1要执行的语句
} else if(条件表达式2) {
  // 满足条件2要执行的语句
} else {
  // 不满足所有条件要执行的语句
}
```

**三元运算符**

```javascript
条件 ? 表达式1 : 表达式2
```

**switch 语句**

```javascript
switch(表达式) {
  case 值1:
    // 执行语句1
    break;
  case 值2:
    // 执行语句2
    break;
  default:
    // 执行默认语句
}
```

#### 1.8.2 循环语句

**while 循环**

```javascript
while(条件表达式) {
  // 循环体
}
```

**for 循环**

```javascript
for(起始值; 终止条件; 变化量) {
  // 循环体
}
```

**循环嵌套**

```javascript
for(let i = 1; i <= 5; i++) {
  for(let j = 1; j <= i; j++) {
    console.log('★');
  }
  console.log('\n');
}
```

**中止循环**

- `break`：中止整个循环
- `continue`：中止本次循环，继续下一次循环

### 1.9 数组

#### 1.9.1 定义数组

```javascript
let arr = []; // 空数组
let arr = ['小明', '小刚', '小红']; // 非空数组
```

#### 1.9.2 访问数组

使用索引访问数组元素，索引从 0 开始

```javascript
let arr = ['小明', '小刚', '小红'];
console.log(arr[0]); // '小明'
console.log(arr[1]); // '小刚'
```

#### 1.9.3 数组长度

使用 `length` 属性获取数组长度

```javascript
let arr = ['小明', '小刚', '小红'];
console.log(arr.length); // 3
```

#### 1.9.4 操作数组

| 方法       | 说明                           |
| ---------- | ------------------------------ |
| push()     | 向数组末尾添加一个或多个元素   |
| pop()      | 删除数组最后一个元素           |
| unshift()  | 向数组开头添加一个或多个元素   |
| shift()    | 删除数组第一个元素             |
| splice()   | 添加或删除数组中的元素         |
| slice()    | 截取数组中的元素，返回新数组   |
| concat()   | 合并两个或多个数组，返回新数组 |
| join()     | 将数组中的元素转换为字符串     |
| indexOf()  | 查找数组中元素的索引           |
| includes() | 检查数组是否包含某个元素       |
| reverse()  | 反转数组                       |
| sort()     | 对数组元素进行排序             |

### 1.10 函数

#### 1.10.1 声明和调用

**声明函数**

```javascript
function 函数名(参数1, 参数2, ...) {
  // 函数体
  return 返回值;
}
```

**调用函数**

```javascript
函数名(参数1, 参数2, ...);
```

#### 1.10.2 函数参数

- **形参**：声明函数时写在函数名右边小括号里的叫形参（形式上的参数）
- **实参**：调用函数时写在函数名右边小括号里的叫实参（实际上的参数）

#### 1.10.3 函数返回值

使用 `return` 关键字将函数内部的执行结果返回给调用者

```javascript
function sum(x, y) {
  return x + y;
}
let result = sum(5, 10); // 15
```

#### 1.10.4 作用域

- **全局作用域**：作用于所有代码执行的环境(整个 script 标签内部)或者一个独立的 js 文件
- **局部作用域**：作用于函数内的代码环境，也称为函数作用域

#### 1.10.5 匿名函数

**函数表达式**

```javascript
let fn = function() {
  console.log('函数表达式');
}
fn();
```

**立即执行函数**

```javascript
(function(){ 
  console.log('立即执行函数');
})();
```

### 1.11 对象

#### 1.11.1 定义对象

```javascript
let obj = {}; // 空对象
let obj = {
  name: '小明',
  age: 18,
  gender: '男'
};
```

#### 1.11.2 访问对象属性

- 使用 `.` 访问对象属性
- 使用 `[]` 访问对象属性

```javascript
let obj = {
  name: '小明',
  age: 18
};
console.log(obj.name); // '小明'
console.log(obj['age']); // 18
```

#### 1.11.3 访问对象方法

```javascript
let obj = {
  name: '小明',
  sayHi: function() {
    console.log('嗨，我是' + this.name);
  }
};
obj.sayHi(); // '嗨，我是小明'
```

#### 1.11.4 遍历对象

使用 `for...in` 循环遍历对象

```javascript
let obj = {
  name: '小明',
  age: 18,
  gender: '男'
};
for(let key in obj) {
  console.log(key + ': ' + obj[key]);
}
```

### 1.12 内置对象

#### 1.12.1 Math

`Math` 是 JavaScript 中内置的对象，称为数学对象，这个对象下即包含了属性，也包含了许多的方法。

**属性**

- `Math.PI`：获取圆周率

**方法**

- `Math.random()`：生成 0 到 1 间的随机数
- `Math.ceil()`：数字向上取整
- `Math.floor()`：数字向下取整
- `Math.round()`：四舍五入取整
- `Math.max()`：在一组数中找出最大的
- `Math.min()`：在一组数中找出最小的
- `Math.pow()`：幂方法
- `Math.sqrt()`：平方根

#### 1.12.2 Date

`Date` 是 JavaScript 中内置的对象，用于处理日期和时间。

**实例化**

```javascript
let date = new Date(); // 系统默认时间
let date = new Date('2020-05-01'); // 指定时间
```

**方法**

- `getFullYear()`：获取四位年份
- `getMonth()`：获取月份，取值为 0 ~ 11
- `getDate()`：获取月份中的每一天
- `getDay()`：获取星期，取值为 0 ~ 6
- `getHours()`：获取小时，取值为 0 ~ 23
- `getMinutes()`：获取分钟，取值为 0 ~ 59
- `getSeconds()`：获取秒，取值为 0 ~ 59
- `getTime()`：获取时间戳

## 二、webAPI

### 2.1 DOM

#### 2.1.1 概述

DOM（Document Object Model）是将整个 HTML 文档的每一个标签元素视为一个对象，这个对象下包含了许多的属性和方法，通过操作这些属性或者调用这些方法实现对 HTML 的动态更新，为实现网页特效以及用户交互提供技术支撑。

#### 2.1.2 获取DOM对象

- `querySelector()`：返回匹配指定选择器的第一个元素
- `querySelectorAll()`：返回匹配指定选择器的所有元素
- `getElementById()`：根据 ID 获取元素
- `getElementsByTagName()`：根据标签名获取元素
- `getElementsByClassName()`：根据类名获取元素

#### 2.1.3 操作元素内容

- `innerText`：将文本内容添加/更新到任意标签位置，文本中包含的标签不会被解析
- `innerHTML`：将文本内容添加/更新到任意标签位置，文本中包含的标签会被解析

#### 2.1.4 操作元素属性

- 直接修改属性值

  ```javascript
  let img = document.querySelector('img');
  img.src = './images/lion.webp';
  img.alt = '图片不见了...';
  ```

- 操作样式属性

  ```javascript
  let box = document.querySelector('.box');
  box.style.color = 'red';
  box.style.fontSize = '20px';
  box.style.backgroundColor = 'pink';
  ```

- 操作类名

  ```javascript
  let box = document.querySelector('.box');
  box.className = 'pink'; // 替换类名
  box.classList.add('pink'); // 添加类名
  box.classList.remove('pink'); // 删除类名
  box.classList.toggle('pink'); // 切换类名
  ```

- 操作表单属性

  ```javascript
  let input = document.querySelector('input');
  input.value = '小米手机';
  input.type = 'password';
  
  let btn = document.querySelector('button');
  btn.disabled = false;
  
  let checkbox = document.querySelector('.agree');
  checkbox.checked = true;
  ```

- 操作自定义属性

  ```html
  <div data-id="1">自定义属性</div>
  <script>
    let div = document.querySelector('div');
    console.log(div.dataset.id); // 1
  </script>
  ```

#### 2.1.5 事件

**事件监听**

```javascript
元素.addEventListener('事件类型', function() {
  // 事件处理程序
});
```

**常见事件类型**

| 事件类型   | 说明         |
| ---------- | ------------ |
| click      | 点击事件     |
| dblclick   | 双击事件     |
| mouseenter | 鼠标移入事件 |
| mouseleave | 鼠标移出事件 |
| mousemove  | 鼠标移动事件 |
| keydown    | 键盘按下事件 |
| keyup      | 键盘抬起事件 |
| focus      | 获取焦点事件 |
| blur       | 失去焦点事件 |
| input      | 输入事件     |
| submit     | 表单提交事件 |

**事件对象**
事件回调函数的第一个参数即为事件对象

```javascript
元素.addEventListener('click', function(event) {
  console.log(event.type); // 事件类型
  console.log(event.clientX, event.clientY); // 光标相对浏览器窗口的位置
  console.log(event.offsetX, event.offsetY); // 光标相对当前元素的位置
});
```

**事件冒泡**
事件冒泡是指事件从触发事件的元素开始，逐级向上传播到父元素，直到传播到 document 对象。

**阻止事件冒泡**
使用 `stopPropagation()` 方法阻止事件冒泡

```javascript
元素.addEventListener('click', function(event) {
  event.stopPropagation();
});
```

**事件委托**
事件委托是利用事件冒泡的特性，将事件监听器添加到父元素上，而不是添加到每个子元素上，从而提高性能。

```javascript
父元素.addEventListener('click', function(event) {
  if(event.target.tagName === 'BUTTON') {
    // 事件处理程序
  }
});
```

### 2.2 BOM

#### 2.2.1 window 对象

- window 对象是一个全局对象，也可以说是 JavaScript 中的顶级对象
- 像 document、alert()、console.log() 这些都是 window 的属性
- 所有通过 var 定义在全局作用域中的变量、函数都会变成 window 对象的属性和方法
- window 对象下的属性和方法调用的时候可以省略 window

#### 2.2.2 定时器

**setTimeout()**：延迟执行函数

```javascript
let timerId = setTimeout(function() {
  console.log('延迟执行');
}, 1000);
```

**setInterval()**：重复执行函数

```javascript
let timerId = setInterval(function() {
  console.log('重复执行');
}, 1000);
```

**clearTimeout()**：清除延迟函数

```javascript
clearTimeout(timerId);
```

**clearInterval()**：清除间隔函数

```javascript
clearInterval(timerId);
```

#### 2.2.3 location 对象

location (地址) 它拆分并保存了 URL 地址的各个组成部分，它是一个对象

| 属性/方法 | 说明                                                 |
| --------- | ---------------------------------------------------- |
| href      | 属性，获取完整的 URL 地址，赋值时用于地址的跳转      |
| search    | 属性，获取地址中携带的参数，符号 ? 后面部分          |
| hash      | 属性，获取地址中的哈希值，符号 # 后面部分            |
| reload()  | 方法，用来刷新当前页面，传入参数 true 时表示强制刷新 |

#### 2.2.4 navigator 对象

navigator 是对象，该对象下记录了浏览器自身的相关信息

**常用属性和方法**

- 通过 userAgent 检测浏览器的版本及平台

  ```javascript
  const userAgent = navigator.userAgent;
  ```

#### 2.2.5 history 对象

history (历史) 是对象，主要管理历史记录，该对象与浏览器地址栏的操作相对应，如前进、后退等

| 方法      | 说明               |
| --------- | ------------------ |
| back()    | 后退               |
| forward() | 前进               |
| go()      | 前进或后退指定步数 |

#### 2.2.6 本地存储

**localStorage**

- 数据可以长期保留在本地浏览器中，刷新页面和关闭页面，数据也不会丢失

- 特性：以键值对的形式存储，并且存储的是字符串

  ```javascript
  // 存储
  localStorage.setItem('age', 18);
  
  // 获取
  console.log(localStorage.getItem('age'));
  
  // 删除
  localStorage.removeItem('age');
  
  // 清空所有数据
  localStorage.clear();
  ```

**sessionStorage**

- 用法跟 localStorage 基本相同
- 区别是：当页面浏览器被关闭时，存储在 sessionStorage 的数据会被清除

**存储复杂数据类型**

- 使用 `JSON.stringify()` 将复杂数据类型转换为 JSON 字符串

- 使用 `JSON.parse()` 将 JSON 字符串转换为复杂数据类型

  ```javascript
  const goods = {
    name: '小米',
    price: 1999
  };
  
  // 存储
  localStorage.setItem('goods', JSON.stringify(goods));
  
  // 获取
  const goodsData = JSON.parse(localStorage.getItem('goods'));
  ```

### 2.3 正则表达式

#### 2.3.1 基本语法

```javascript
const reg = /表达式/;
```

#### 2.3.2 匹配方法

- `test()`：用来查看正则表达式与指定的字符串是否匹配，返回布尔值

  ```javascript
  const reg = /web/;
  console.log(reg.test('web前端')); // true
  ```

- `match()`：用于查找字符串，支持正则匹配，返回匹配结果的数组

  ```javascript
  const str = 'web前端开发';
  const reg = /web/;
  console.log(str.match(reg)); // ['web']
  ```

- `replace()`：用于替换字符串，支持正则匹配

  ```javascript
  const str = 'web前端开发';
  const reg = /web/;
  console.log(str.replace(reg, 'JavaScript')); // 'JavaScript前端开发'
  ```

#### 2.3.3 元字符

**边界符**

| 边界符 | 说明             |
| ------ | ---------------- |
| ^      | 匹配字符串的开头 |
| $      | 匹配字符串的结尾 |

**量词**

| 量词  | 说明                     |
| ----- | ------------------------ |
| *     | 重复次数 >= 0 次         |
| +     | 重复次数 >= 1 次         |
| ?     | 重复次数 0 或 1 次       |
| {n}   | 重复 n 次                |
| {n,}  | 重复次数 >= n 次         |
| {n,m} | 重复次数 >= n 且 <= m 次 |

**范围**

| 范围        | 说明                       |
| ----------- | -------------------------- |
| [abc]       | 匹配包含的单个字符         |
| [a-z]       | 匹配小写字母               |
| [A-Z]       | 匹配大写字母               |
| [0-9]       | 匹配数字                   |
| [a-zA-Z0-9] | 匹配字母和数字             |
| [^a-z]      | 匹配除了小写字母以外的字符 |

**字符类**

| 字符类 | 说明                                 |
| ------ | ------------------------------------ |
| .      | 匹配除换行符以外的任意字符           |
| \w     | 匹配字母、数字、下划线               |
| \W     | 匹配除了字母、数字、下划线以外的字符 |
| \d     | 匹配数字                             |
| \D     | 匹配除了数字以外的字符               |
| \s     | 匹配空白字符                         |
| \S     | 匹配除了空白字符以外的字符           |

#### 2.3.4 修饰符

- `i`：忽略大小写

- `g`：全局匹配

  ```javascript
  const str = 'Web前端开发，web前端工程师';
  const reg = /web/gi;
  console.log(str.replace(reg, 'JavaScript')); // 'JavaScript前端开发，JavaScript前端工程师'
  ```

## 三、JavaScript高级语法

### 3.1 面向对象编程

#### 3.1.1 面向过程 vs 面向对象

- **面向过程**：分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个的依次调用就可以了。
- **面向对象**：把事务分解成为一个个对象，然后由对象之间分工与合作。

#### 3.1.2 构造函数

构造函数是专门用于创建对象的函数，如果一个函数使用 `new` 关键字调用，那么这个函数就是构造函数。

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function() {
    console.log('大家好，我是' + this.name);
  };
}

let p1 = new Person('小明', 18);
p1.sayHi(); // '大家好，我是小明'
```

#### 3.1.3 原型对象

- JavaScript 规定，每一个构造函数都有一个 prototype 属性，指向另一个对象，所以我们也称为原型对象
- 这个对象可以挂载函数，对象实例化不会多次创建原型上函数，节约内存
- 我们可以把那些不变的方法，直接定义在 prototype 对象上，这样所有对象的实例就可以共享这些方法

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 为构造函数的原型对象添加方法
Person.prototype.sayHi = function() {
  console.log('大家好，我是' + this.name);
};

let p1 = new Person('小明', 18);
p1.sayHi(); // '大家好，我是小明'
```

#### 3.1.4 原型链

基于原型对象的继承使得不同构造函数的原型对象关联在一起，并且这种关联的关系是一种链状的结构，我们将原型对象的链状结构关系称为原型链。

当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性。如果没有就查找它的原型（也就是 `__proto__` 指向的 `prototype` 原型对象），如果还没有就查找原型对象的原型（Object的原型对象），依此类推一直找到 Object 为止（null）。

#### 3.1.5 继承

继承是面向对象编程的另一个特征，通过继承进一步提升代码封装的程度，JavaScript 中大多是借助原型对象实现继承的特性。

```javascript
// 父构造函数
function Person() {
  this.eyes = 2;
  this.head = 1;
}

// 子构造函数
function Woman() {
}

// 子类的原型 = new 父类
Woman.prototype = new Person();
// 指回原来的构造函数
Woman.prototype.constructor = Woman;

// 给女人添加一个方法
Woman.prototype.baby = function() {
  console.log('宝贝');
};

const red = new Woman();
console.log(red.eyes); // 2
red.baby(); // '宝贝'
```

### 3.2 深浅拷贝

#### 3.2.1 浅拷贝

- 浅拷贝：拷贝的是地址
- 常见方法：
  - 拷贝对象：`Object.assign()` / 展开运算符 `{...obj}`
  - 拷贝数组：`Array.prototype.concat()` 或者 `[...arr]`
- 注意：如果是简单数据类型拷贝值，引用数据类型拷贝的是地址（如果是单层对象，没问题，如果有多层就有问题）

#### 3.2.2 深拷贝

- 深拷贝：拷贝的是对象，不是地址
- 常见方法：
  - 通过递归实现深拷贝
  - lodash/cloneDeep
  - 通过 `JSON.stringify()` 和 `JSON.parse()` 实现

**递归实现深拷贝**

```javascript
function deepCopy(newObj, oldObj) {
  for (let k in oldObj) {
    // 处理数组
    if (oldObj[k] instanceof Array) {
      newObj[k] = [];
      deepCopy(newObj[k], oldObj[k]);
    } 
    // 处理对象
    else if (oldObj[k] instanceof Object) {
      newObj[k] = {};
      deepCopy(newObj[k], oldObj[k]);
    } 
    // 处理简单数据类型
    else {
      newObj[k] = oldObj[k];
    }
  }
}
```

### 3.3 异常处理

#### 3.3.1 throw

抛出异常信息，程序也会终止执行

```javascript
function counter(x, y) {
  if(!x || !y) {
    throw new Error('参数不能为空!');
  }
  return x + y;
}
```

#### 3.3.2 try...catch

捕获错误信息，避免程序终止执行

```javascript
try {
  // 可能发生错误的代码
  const p = document.querySelector('.p');
  p.style.color = 'red';
} catch (error) {
  // 错误处理
  console.log(error.message);
} finally {
  // 无论是否发生错误都会执行的代码
  console.log('执行完毕');
}
```

### 3.4 this 指向

#### 3.4.1 普通函数

普通函数的调用方式决定了 `this` 的值，即【谁调用 `this` 的值指向谁】

```javascript
function sayHi() {
  console.log(this);
}

sayHi(); // window

const user = {
  name: '小明',
  sayHi: sayHi
};

user.sayHi(); // user 对象
```

#### 3.4.2 箭头函数

箭头函数中的 `this` 与普通函数完全不同，也不受调用方式的影响，事实上箭头函数中并不存在 `this`！箭头函数中访问的 `this` 不过是箭头函数所在作用域的 `this` 变量。

```javascript
const user = {
  name: '小明',
  walk: () => {
    console.log(this); // window
  },
  sleep: function() {
    let fn = () => {
      console.log(this); // user 对象
    };
    fn();
  }
};
```

#### 3.4.3 改变 this 指向

**call()**

```javascript
function sayHi() {
  console.log(this);
}

let user = { name: '小明' };
sayHi.call(user); // user 对象
```

**apply()**

```javascript
function counter(x, y) {
  return x + y;
}

let result = counter.apply(null, [5, 10]); // 15
```

**bind()**

```javascript
function sayHi() {
  console.log(this);
}

let user = { name: '小明' };
let sayHello = sayHi.bind(user);
sayHello(); // user 对象
```

### 3.5 防抖节流

#### 3.5.1 防抖

所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。

```javascript
function debounce(fn, delay) {
  let timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
```

#### 3.5.2 节流

所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。

```javascript
function throttle(fn, delay) {
  let flag = true;
  return function() {
    if(!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, delay);
  };
}
```

### 3.6 异步编程

#### 3.6.1 同步 vs 异步

- **同步**：代码按顺序执行，前一个任务完成后，才能执行后一个任务。
- **异步**：代码不按顺序执行，前一个任务没有完成，后一个任务也可以执行。

#### 3.6.2 回调函数

回调函数是异步编程的一种实现方式，它是指在函数执行完毕后，再执行的函数。

```javascript
function getData(callback) {
  setTimeout(() => {
    let data = '这是异步获取的数据';
    callback(data);
  }, 1000);
}

getData(function(data) {
  console.log(data); // '这是异步获取的数据'
});
```

#### 3.6.3 Promise

Promise 是 ES6 中引入的异步编程解决方案，它可以避免回调地狱。

```javascript
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    let data = '这是异步获取的数据';
    if(data) {
      resolve(data);
    } else {
      reject('获取数据失败');
    }
  }, 1000);
});

promise.then(function(data) {
  console.log(data); // '这是异步获取的数据'
}).catch(function(error) {
  console.log(error); // '获取数据失败'
});
```

#### 3.6.4 async/await

async/await 是 ES7 中引入的异步编程解决方案，它是基于 Promise 的语法糖，让异步代码看起来像同步代码。

```javascript
async function getData() {
  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      let data = '这是异步获取的数据';
      resolve(data);
    }, 1000);
  });
  
  let data = await promise;
  console.log(data); // '这是异步获取的数据'
}

getData();
```

### 3.7 ES6+ 新特性

#### 3.7.1 let 和 const

- `let`：声明变量，具有块级作用域，不能重复声明，不存在变量提升
- `const`：声明常量，具有块级作用域，不能重复声明，不能重新赋值

#### 3.7.2 解构赋值

- **数组解构**：`let [a, b, c] = [1, 2, 3];`
- **对象解构**：`let { name, age } = { name: '小明', age: 18 };`
- **字符串解构**：`let [a, b, c] = 'abc';`

#### 3.7.3 模板字符串

使用反引号 `` ` `` 包裹字符串，可以使用 `${}` 插入变量或表达式

```javascript
let name = '小明';
let age = 18;
let str = `大家好，我是${name}，今年${age}岁`;
```

#### 3.7.4 箭头函数

箭头函数是函数表达式的简写形式，它没有自己的 `this`，它的 `this` 是继承自父级作用域的 `this`。

```javascript
let sum = (x, y) => x + y;
```

#### 3.7.5 扩展运算符

使用 `...` 可以展开数组或对象

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]

let obj1 = { name: '小明' };
let obj2 = { ...obj1, age: 18 }; // { name: '小明', age: 18 }
```

#### 3.7.6 剩余参数

使用 `...` 可以收集剩余的参数

```javascript
function sum(...args) {
  let total = 0;
  for(let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

sum(1, 2, 3, 4, 5); // 15
```

#### 3.7.7 模块化

- **export**：导出模块

  ```javascript
  // 导出单个变量
  export let name = '小明';
  
  // 导出多个变量
  let age = 18;
  let gender = '男';
  export { age, gender };
  
  // 导出函数
  export function sayHi() {
    console.log('嗨');
  }
  
  // 导出默认值
  export default function() {
    console.log('默认导出');
  }
  ```

- **import**：导入模块

  ```javascript
  // 导入单个变量
  import { name } from './module.js';
  
  // 导入多个变量
  import { age, gender } from './module.js';
  
  // 导入函数
  import { sayHi } from './module.js';
  
  // 导入默认值
  import defaultFn from './module.js';
  
  // 导入所有
  import * as module from './module.js';
  ```

## 四、总结

本笔记总结了 JavaScript 的基础知识、webAPI 和高级语法，涵盖了 JavaScript 开发中的核心概念和常用技术。通过学习本笔记，你可以掌握 JavaScript 的基本语法、DOM 操作、BOM 操作、正则表达式、面向对象编程、异步编程等内容，为成为一名优秀的前端工程师打下坚实的基础。

JavaScript 是一门不断发展的语言，新的特性和语法不断被引入，建议你持续关注 JavaScript 的最新发展，不断学习和实践，提升自己的技术水平。

祝你学习愉快！
