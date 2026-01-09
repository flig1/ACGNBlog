---
title: JavaScript学习笔记
published: 2026-01-09
description: 'JavaScript学习笔记'
image: ''
tags: ['JavaScript']
category: '前端'
draft: false 
lang: ''
---

# JavaScript学习笔记

Web 技术文档中心（MDN）:[MDN Web Docs](https://developer.mozilla.org/zh-CN/)

## 1. 基础语法

### 1.1 输出与输入

#### 输出方式

```javascript
// 1. 弹出对话框
alert('你好，JavaScript');

// 2. 打印到页面上
document.write('你好，页面');

// 3. 打印到控制台（开发常用）
console.log('你好，控制台');
```

#### 输入语句

```javascript
// 弹出输入框，获取用户输入
let age = prompt('请输入年龄：');
```

### 1.2 变量声明

```javascript
// 声明变量
let 变量名 = 值;

// 声明常量（不允许再次赋值）
const 常量名 = 值;
```

## 2. 数据类型

### 2.1 基本数据类型

| 类型       | 描述               | 示例                  |
|------------|--------------------|-----------------------|
| number     | 数字型             | `let num = 123;`      |
| string     | 字符串型           | `let str = 'hello';`  |
| boolean    | 布尔型             | `let isTrue = true;`  |
| undefined  | 未定义型           | `let undef;`          |
| null       | 空类型             | `let empty = null;`   |

### 2.2 引用数据类型

- **object**：对象类型，用于存储键值对集合

## 3. 运算符

### 3.1 算术运算符

```javascript
// 加减乘除
let sum = 10 + 5;      // 15
let diff = 10 - 5;     // 5
let product = 10 * 5;  // 50
let quotient = 10 / 5; // 2

// 求余数
let remainder = 10 % 3; // 1
```

### 3.2 赋值运算符

| 运算符 | 描述               | 示例               |
|--------|--------------------|--------------------|
| =      | 基本赋值           | `let a = 5;`       |
| +=     | 加后赋值           | `a += 3;` → `a = a + 3` |
| -=     | 减后赋值           | `a -= 3;` → `a = a - 3` |
| *=     | 乘后赋值           | `a *= 3;` → `a = a * 3` |
| /=     | 除后赋值           | `a /= 3;` → `a = a / 3` |
| %=     | 取余后赋值         | `a %= 3;` → `a = a % 3` |

### 3.3 一元运算符

```javascript
// 自增
let num = 1;
num++; // 等价于 num = num + 1
++num; // 等价于 num = num + 1

// 自减
num--; // 等价于 num = num - 1
--num; // 等价于 num = num - 1
```

### 3.4 比较运算符

| 运算符 | 描述                   | 结果类型 |
|--------|------------------------|----------|
| >      | 大于                   | boolean  |
| <      | 小于                   | boolean  |
| >=     | 大于等于               | boolean  |
| <=     | 小于等于               | boolean  |
| ==     | 等于（不比较类型）     | boolean  |
| ===    | 全等（比较类型和值）   | boolean  |
| !=     | 不等于（不比较类型）   | boolean  |
| !==    | 不全等（比较类型和值） | boolean  |

> **开发建议**：判断是否相等时，强烈推荐使用 `===`（全等）

### 3.5 逻辑运算符

| 运算符 | 名称     | 规则                     |
|--------|----------|--------------------------|
| &&     | 逻辑与   | 两边都为true，结果才为true |
| \|\|    | 逻辑或   | 一边为true，结果就为true   |
| !      | 逻辑非   | 取反，true变false         |

## 4. 模板字符串

使用反引号（`）创建字符串，可以方便地拼接变量：

```javascript
let name = '张三';
let age = 18;

// 使用模板字符串拼接
let message = `你好，我是${name}，今年${age}岁。`;
console.log(message); // 输出：你好，我是张三，今年18岁。
```

## 5. 数据类型转换

### 5.1 判断数据类型

使用 `typeof` 操作符判断数据类型：

```javascript
console.log(typeof 123);       // number
console.log(typeof 'hello');   // string
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object（特殊情况）
```

### 5.2 隐式转换

JavaScript 会自动进行类型转换：

- **+ 号**：两边只要有一个是字符串，就会把另一个转为字符串
- **其他算术运算符**（-、*、/ 等）：会把数据转为数字类型

```javascript
// 隐式转换示例
console.log('123' + 456); // '123456'（字符串拼接）
console.log('123' - 456); // -333（数字运算）
```

### 5.3 显式转换

#### 转换为数字型

```javascript
// 1. Number()：转换为数字类型
let num1 = Number('123');     // 123
let num2 = Number('abc');     // NaN（Not a Number）

// 2. parseInt()：转换为整数
let int1 = parseInt('123.45'); // 123

// 3. parseFloat()：转换为浮点数
let float1 = parseFloat('123.45'); // 123.45
```

#### 转换为字符串型

```javascript
// 1. String()：转换为字符串
let str1 = String(123); // '123'

// 2. toString()：调用对象的toString方法
let str2 = (123).toString(); // '123'
let str3 = true.toString();  // 'true'
```

### 5.4 转换为布尔型

以下值转换为布尔值后为 `false`，其余均为 `true`：
- `''`（空字符串）
- `0`
- `undefined`
- `null`
- `false`
- `NaN`

```javascript
console.log(Boolean(''));      // false
console.log(Boolean(0));       // false
console.log(Boolean('hello')); // true
console.log(Boolean(123));     // true
```

## 6. 流程控制

### 6.1 分支语句

#### if 语句

```javascript
// 单分支
if (条件) {
    // 满足条件执行的代码
}

// 双分支
if (条件) {
    // 满足条件执行的代码
} else {
    // 不满足条件执行的代码
}

// 多分支
if (条件1) {
    // 代码1
} else if (条件2) {
    // 代码2
} else if (条件3) {
    // 代码3
} else {
    // 代码n
}
```

#### 三元运算符

```javascript
// 语法：条件 ? 表达式1 : 表达式2
let result = 3 > 5 ? 3 : 5; // 5
```

#### switch 语句

```javascript
switch (表达式) {
    case 值1:
        // 代码1
        break;
    case 值2:
        // 代码2
        break;
    default:
        // 代码n
        break;
}
```

### 6.2 循环语句

#### while 循环

```javascript
while (循环条件) {
    // 要重复执行的代码（循环体）
}
```

#### for 循环

```javascript
for (变量起始值; 终止条件; 变量变化量) {
    // 循环体
}

// 示例：打印1-5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

#### 循环控制

- **break**：退出整个循环
- **continue**：结束本次循环，继续下次循环

```javascript
// break示例：找到目标值后退出循环
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // 当i=5时，退出循环
    }
    console.log(i); // 输出：0,1,2,3,4
}

// continue示例：跳过某些值
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // 跳过偶数
    }
    console.log(i); // 输出：1,3,5,7,9
}
```

## 7. 数组

### 7.1 数组创建

```javascript
// 1. 数组字面量
let arr1 = [1, 2, 3, 4, 5];

// 2. Array构造函数
let arr2 = new Array(1, 2, 3, 4, 5);
```

### 7.2 数组操作

| 操作     | 方法                                  | 描述                          |
|----------|---------------------------------------|-------------------------------|
| 查询     | `数组[下标]`                          | 访问数组元素                  |
| 修改     | `数组[下标] = 新值`                   | 修改数组元素                  |
| 新增末尾 | `数组.push(元素)`                     | 添加到数组末尾，返回新长度    |
| 新增开头 | `数组.unshift(元素)`                  | 添加到数组开头，返回新长度    |
| 删除末尾 | `数组.pop()`                          | 删除最后一个元素，返回该元素  |
| 删除开头 | `数组.shift()`                        | 删除第一个元素，返回该元素    |
| 删除指定 | `数组.splice(起始下标, 删除个数)`     | 删除指定元素，返回删除的元素  |

## 8. 函数

### 8.1 函数定义与调用

```javascript
// 函数定义
function 函数名() {
    // 函数体
}

// 函数调用
函数名();
```

### 8.2 函数参数

```javascript
// 带参数的函数
function greet(name) {
    console.log(`你好，${name}`);
}

// 调用函数并传递参数
greet('张三'); // 输出：你好，张三
```

### 8.3 函数返回值

```javascript
// 带返回值的函数
function add(a, b) {
    return a + b;
}

// 获取函数返回值
let result = add(10, 5); // 15
```

### 8.4 匿名函数

```javascript
// 函数表达式
let sayHello = function() {
    console.log('你好');
};

sayHello(); // 调用

// 立即执行函数（IIFE）
(function() {
    console.log('立即执行');
})();
// 或者
(function() {
    console.log('立即执行');
}());
```

## 9. 作用域

### 9.1 全局作用域

- 作用于所有代码执行的环境（整个 script 标签内部或独立的 js 文件）
- 全局变量在任何地方都可以访问

### 9.2 局部作用域

- 作用于函数内的代码环境，也称为函数作用域
- 局部变量只在函数内部可以访问

```javascript
// 全局变量
let globalVar = '全局变量';

function test() {
    // 局部变量
    let localVar = '局部变量';
    console.log(globalVar); // 可以访问全局变量
    console.log(localVar);  // 可以访问局部变量
}

test();
console.log(globalVar); // 可以访问全局变量
// console.log(localVar); // 报错：局部变量在外部不可访问
```

## 10. 对象

### 10.1 对象创建

```javascript
// 1. 对象字面量
let person = {
    name: '张三',
    age: 18,
    sex: '男',
    sayHello: function() {
        console.log(`你好，我是${this.name}`);
    }
};

// 2. Object构造函数
let car = new Object();
car.brand = '特斯拉';
car.model = 'Model 3';
```

### 10.2 对象操作

| 操作 | 语法                          | 描述                  |
|------|-------------------------------|-----------------------|
| 查询 | `对象.属性` 或 `对象['属性']` | 访问对象属性          |
| 修改 | `对象.属性 = 新值`            | 修改对象属性          |
| 新增 | `对象.新属性 = 值`            | 添加新属性            |
| 删除 | `delete 对象.属性`            | 删除属性              |
| 方法 | `对象.方法名()`               | 调用对象方法          |

### 10.3 对象遍历

使用 `for...in` 循环遍历对象：

```javascript
let person = {
    name: '张三',
    age: 18,
    sex: '男'
};

for (let key in person) {
    console.log(key);          // 输出属性名：name, age, sex
    console.log(person[key]);  // 输出属性值：张三, 18, 男
}
```

## 11. 内置对象

### 11.1 Math对象

Math对象提供了一系列数学运算方法：

| 方法        | 描述                                  |
|-------------|---------------------------------------|
| `Math.random()` | 生成0-1之间的随机数（包含0，不包含1）|
| `Math.ceil(x)`  | 向上取整                              |
| `Math.floor(x)` | 向下取整                              |
| `Math.max(x, y, ...)` | 求最大值                     |
| `Math.min(x, y, ...)` | 求最小值                     |
| `Math.pow(x, y)` | 求x的y次幂                        |
| `Math.abs(x)`  | 求绝对值                              |

```javascript
// 示例：生成1-100的随机整数
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);
```

## 12. 逻辑运算符的短路

- **&&**：左边为false时，右边代码不执行
- **\|\|**：左边为true时，右边代码不执行

```javascript
// &&短路示例
false && console.log('右边不会执行');
true && console.log('右边会执行');

// \|\|短路示例
true || console.log('右边不会执行');
false || console.log('右边会执行');
```