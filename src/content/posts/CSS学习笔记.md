---
title: CSS学习笔记
published: 2026-01-09
description: 'CSS学习笔记'
image: ''
tags: ['CSS']
category: '前端'
draft: false 
lang: ''
---

# CSS学习笔记

## 1. 选择器

### 1.1 基础选择器

#### 标签选择器

```css
/* 语法：标签名 { 样式规则 } */
p {
    color: #077;
    font-size: 30px;
}
```

**作用**：选中所有指定标签名的元素，设置统一样式。

#### 类选择器

```css
/* 语法：.类名 { 样式规则 } */
.red {
    color: red;
}
```

**作用**：选中所有带有指定类名的元素，可以给多个元素设置相同样式。

**使用**：`<div class="red">红色文本</div>`

#### ID选择器

```css
/* 语法：#id名 { 样式规则 } */
#header {
    color: red;
}
```

**作用**：选中带有指定ID的唯一元素，一个ID在页面中只能使用一次。

**使用**：`<div id="header">头部</div>`

#### 通配符选择器

```css
/* 语法：* { 样式规则 } */
* {
    margin: 0;
    padding: 0;
}
```

**作用**：选中页面中所有元素，通常用于重置默认样式。

### 1.2 复合选择器

#### 后代选择器

```css
/* 语法：父选择器 后代选择器 { 样式规则 } */
div span {
    color: red;
}
```

**作用**：选中指定父元素内的所有后代元素（包括子元素、孙元素等）。

#### 子代选择器

```css
/* 语法：父选择器 > 子选择器 { 样式规则 } */
div > span {
    color: green;
}
```

**作用**：只选中指定父元素的直接子元素。

#### 并集选择器

```css
/* 语法：选择器1, 选择器2, 选择器3 { 样式规则 } */
div,
p,
span {
    color: red;
}
```

**作用**：同时选中多个选择器匹配的元素，设置相同样式。

#### 交集选择器

```css
/* 语法：选择器1选择器2 { 样式规则 } */
p.box {
    color: red;
}
```

**作用**：选中同时满足多个条件的元素（既是p标签又带有box类）。

#### 伪类选择器

```css
/* 语法：选择器:伪类 { 样式规则 } */
a {
    color: blue; /* 默认状态 */
}

a:hover {
    color: red; /* 鼠标悬停状态 */
}

a:active {
    color: green; /* 鼠标点击状态 */
}

a:visited {
    color: purple; /* 已访问链接 */
}
```

**作用**：选中元素的特定状态，设置样式。

### 1.3 结构伪类选择器

```css
/* 选中第一个子元素 */
li:first-child {
    background-color: green;
}

/* 选中最后一个子元素 */
li:last-child {
    background-color: red;
}

/* 选中第n个子元素 */
li:nth-child(2) {
    background-color: blue;
}

/* 选中偶数位置的子元素 */
li:nth-child(2n) {
    background-color: yellow;
}

/* 选中奇数位置的子元素 */
li:nth-child(2n+1) {
    background-color: gray;
}
```

**作用**：根据元素在文档中的位置来选择元素。

## 2. CSS特性

### 2.1 继承性

**概念**：子元素会继承父元素的某些样式属性。

**可继承的属性**：
- 字体相关：font-family, font-size, font-weight等
- 文本相关：color, text-align, line-height等
- 列表相关：list-style等

**示例**：
```css
body {
    font-family: 'Arial', sans-serif;
    color: #333;
}
```

body内的所有子元素都会继承这些字体和颜色样式，除非子元素自己设置了相同属性。

### 2.2 层叠性

**概念**：当多个CSS规则应用于同一个元素时，会根据一定的规则进行叠加或覆盖。

**规则**：
1. 同一属性，后面的规则会覆盖前面的规则
2. 不同属性，会叠加生效

**示例**：
```css
p {
    color: red;
    font-size: 16px;
}

p {
    color: blue; /* 覆盖前面的红色 */
    font-weight: bold; /* 新增加粗样式 */
}
```

最终p标签的样式为：color: blue; font-size: 16px; font-weight: bold;

### 2.3 优先级

**概念**：当多个选择器匹配同一元素时，优先级高的选择器样式会生效。

**优先级规则**：
| 选择器类型 | 权重值 |
|------------|--------|
| 通配符选择器 | 0 |
| 标签选择器 | 1 |
| 类选择器/伪类选择器 | 10 |
| ID选择器 | 100 |
| 行内样式 | 1000 |
| !important | 无穷大 |

**计算方法**：将选择器中各类选择器的权重值相加，数值大的优先级高。

**示例**：
```css
/* 权重：1 (标签) */
p {
    color: red;
}

/* 权重：10 (类) */
.text {
    color: blue;
}

/* 权重：11 (标签+类) */
p.text {
    color: green;
}
```

## 3. 字体与文本

### 3.1 字体属性

| 属性 | 描述 | 取值示例 |
|------|------|----------|
| font-family | 字体系列 | `'Microsoft YaHei', sans-serif` |
| font-size | 字体大小 | `16px`, `1rem`, `2em` |
| font-weight | 字体粗细 | `normal`, `bold`, `400-900` |
| font-style | 字体样式 | `normal`, `italic` |
| line-height | 行高 | `1.5`, `24px` |

**复合属性**：
```css
/* 语法：font: style weight size/line-height family */
font: italic bold 16px/1.5 'Microsoft YaHei', sans-serif;
```

### 3.2 文本属性

| 属性 | 描述 | 取值示例 |
|------|------|----------|
| color | 文本颜色 | `red`, `#ff0000`, `rgb(255,0,0)` |
| text-align | 文本对齐 | `left`, `center`, `right`, `justify` |
| text-decoration | 文本装饰 | `none`, `underline`, `line-through`, `overline` |
| text-indent | 首行缩进 | `2em`, `32px` |
| text-transform | 文本转换 | `none`, `uppercase`, `lowercase`, `capitalize` |
| letter-spacing | 字符间距 | `2px`, `-1px` |
| word-spacing | 单词间距 | `5px` |

**示例**：
```css
.text {
    color: #333;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    text-indent: 2em;
}
```

## 4. 背景与边框

### 4.1 背景属性

| 属性 | 描述 | 取值示例 |
|------|------|----------|
| background-color | 背景颜色 | `red`, `#ff0000` |
| background-image | 背景图片 | `url('./img/1.jpg')` |
| background-repeat | 背景平铺 | `repeat`, `no-repeat`, `repeat-x`, `repeat-y` |
| background-position | 背景位置 | `center`, `top left`, `50% 50%`, `10px 20px` |
| background-size | 背景缩放 | `cover`, `contain`, `100px 200px`, `50%` |
| background-attachment | 背景固定 | `scroll`, `fixed` |

**复合属性**：
```css
/* 语法：background: color image repeat position/size attachment */
background: #f0f0f0 url('./img/1.jpg') no-repeat center/cover fixed;
```

### 4.2 边框属性

#### 边框样式

| 取值 | 描述 |
|------|------|
| solid | 实线 |
| dashed | 虚线 |
| dotted | 点线 |
| double | 双线 |
| none | 无边框 |

#### 边框简写

```css
/* 语法：border: width style color */
border: 1px solid #000;
```

#### 单方向边框

```css
border-top: 1px solid #000;
border-right: 2px dashed red;
border-bottom: 5px dotted green;
border-left: 10px solid orange;
```

#### 圆角边框

```css
/* 语法：border-radius: 水平半径/垂直半径 */
border-radius: 10px;
/* 椭圆角 */
border-radius: 10px 20px;
/* 不规则角 */
border-radius: 10px 20px 30px 40px;
/* 圆形 */
border-radius: 50%;
```

## 5. 盒子模型

### 5.1 盒模型组成

盒子模型由以下四部分组成：
1. **内容区域（content）**：盒子的实际内容，由width和height控制
2. **内边距（padding）**：内容与边框之间的距离
3. **边框（border）**：盒子的边框线
4. **外边距（margin）**：盒子与其他元素之间的距离

### 5.2 内边距（padding）

```css
/* 单方向内边距 */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 40px;
padding-left: 80px;

/* 简写方式 */
padding: 10px; /* 四边相同 */
padding: 10px 20px; /* 上下 左右 */
padding: 10px 20px 40px; /* 上 左右 下 */
padding: 10px 20px 40px 80px; /* 上 右 下 左（顺时针） */
```

### 5.3 外边距（margin）

```css
/* 单方向外边距 */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 40px;
margin-left: 80px;

/* 简写方式 */
margin: 10px; /* 四边相同 */
margin: 10px 20px; /* 上下 左右 */
margin: 10px 20px 40px; /* 上 左右 下 */
margin: 10px 20px 40px 80px; /* 上 右 下 左（顺时针） */

/* 水平居中 */
margin: 0 auto; /* 上下0 左右自动 */
```

### 5.4 盒模型计算

#### 标准盒模型（content-box）

盒子总宽度 = width + border-left + border-right + padding-left + padding-right
盒子总高度 = height + border-top + border-bottom + padding-top + padding-bottom

#### 怪异盒模型（border-box）

```css
/* 开启怪异盒模型 */
box-sizing: border-box;
```

盒子总宽度 = width（包含border和padding）
盒子总高度 = height（包含border和padding）

**建议**：在项目中统一使用怪异盒模型，避免计算繁琐。

### 5.5 外边距合并

#### 1. 垂直相邻元素外边距合并

```css
.one {
    margin-bottom: 80px;
}

.two {
    margin-top: 50px;
}
```

**结果**：两个元素之间的间距是80px（取较大值），而不是130px。

#### 2. 父子元素外边距合并

```css
.father {
    background-color: pink;
}

.son {
    margin-top: 50px;
    background-color: blue;
}
```

**结果**：整个父元素向下移动50px，而不是子元素在父元素内向下移动50px。

**解决方法**：
- 给父元素添加边框或内边距
- 给父元素添加 `overflow: hidden`
- 使用Flex或Grid布局

### 5.6 元素溢出

```css
/* 隐藏溢出内容 */
overflow: hidden;

/* 自动显示滚动条 */
overflow: auto;

/* 始终显示滚动条 */
overflow: scroll;

/* 显示溢出内容 */
overflow: visible;
```

**单方向溢出**：
```css
overflow-x: hidden; /* 水平方向隐藏 */
overflow-y: auto; /* 垂直方向自动 */
```

## 6. 浮动（Float）

### 6.1 基本使用

```css
/* 取值：left, right, none */
float: left;
```

### 6.2 浮动特性

1. 浮动元素脱离标准流，不占据文档流位置
2. 浮动元素具有行内块特性，可以设置宽高
3. 浮动元素会并排显示，超出父容器宽度会换行
4. 浮动元素会影响后续元素的布局
5. 浮动元素不会影响其父元素的高度（导致父元素高度塌陷）

### 6.3 清除浮动

#### 1. 额外标签法

```html
<div class="parent">
    <div class="child float-left"></div>
    <div class="child float-left"></div>
    <!-- 额外添加一个空标签 -->
    <div style="clear: both;"></div>
</div>
```

#### 2. 父元素添加overflow

```css
.parent {
    overflow: hidden; /* 或 auto */
}
```

#### 3. 伪元素清除法

```css
.parent::after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
}

.parent {
    zoom: 1; /* 兼容IE6/7 */
}
```

#### 4. 双伪元素清除法

```css
.parent::before,
.parent::after {
    content: "";
    display: table;
}

.parent::after {
    clear: both;
}

.parent {
    zoom: 1; /* 兼容IE6/7 */
}
```

### 6.4 浮动的应用场景

- 文字环绕效果
- 传统的多栏布局
- 导航菜单

**注意**：现代布局建议使用Flexbox或Grid，浮动主要用于兼容性场景。

## 7. Flex布局

### 7.1 基本概念

- **Flex容器**：设置了`display: flex`的元素
- **Flex项目**：Flex容器的直接子元素
- **主轴**：Flex项目排列的主要方向，默认水平方向
- **侧轴**：与主轴垂直的方向，默认垂直方向

### 7.2 容器属性

#### 1. flex-direction（主轴方向）

| 取值 | 描述 |
|------|------|
| row | 水平方向，从左到右（默认） |
| row-reverse | 水平方向，从右到左 |
| column | 垂直方向，从上到下 |
| column-reverse | 垂直方向，从下到上 |

#### 2. justify-content（主轴对齐方式）

| 取值 | 描述 |
|------|------|
| flex-start | 从起点开始排列（默认） |
| flex-end | 从终点开始排列 |
| center | 居中排列 |
| space-between | 两端对齐，项目间间距相等 |
| space-around | 项目两侧间距相等，项目间间距是两侧的2倍 |
| space-evenly | 项目间间距和项目与容器间间距相等 |

#### 3. align-items（侧轴对齐方式）

| 取值 | 描述 |
|------|------|
| stretch | 拉伸填充（默认，项目未设置高度时） |
| flex-start | 从侧轴起点开始排列 |
| flex-end | 从侧轴终点开始排列 |
| center | 侧轴居中排列 |
| baseline | 基线对齐（文本基线） |

#### 4. flex-wrap（换行方式）

| 取值 | 描述 |
|------|------|
| nowrap | 不换行（默认） |
| wrap | 换行 |
| wrap-reverse | 反向换行 |

#### 5. align-content（多行对齐方式）

**作用**：当Flex项目换行时，设置多行在侧轴上的对齐方式。

| 取值 | 描述 |
|------|------|
| stretch | 拉伸填充（默认） |
| flex-start | 从侧轴起点开始排列 |
| flex-end | 从侧轴终点开始排列 |
| center | 侧轴居中排列 |
| space-between | 两端对齐，行间距相等 |
| space-around | 行两侧间距相等 |
| space-evenly | 行间距和行与容器间间距相等 |

### 7.3 项目属性

#### 1. flex（弹性伸缩比）

```css
/* 语法：flex: grow shrink basis */

/* 简写形式 */
flex: 1; /* 等同于 flex: 1 1 0% */
flex: 2; /* 占据2份空间 */
```

| 取值 | 描述 |
|------|------|
| grow | 放大比例，默认0（不放大） |
| shrink | 缩小比例，默认1（允许缩小） |
| basis | 基础尺寸，默认auto（项目自身尺寸） |

#### 2. align-self（单独对齐方式）

```css
/* 取值与align-items相同，用于单独设置某个项目的侧轴对齐方式 */
align-self: center;
```

#### 3. order（排列顺序）

```css
/* 默认值0，数值越小，排列越靠前 */
order: 1;
```

### 7.4 典型应用

#### 1. 水平居中

```css
.container {
    display: flex;
    justify-content: center;
}
```

#### 2. 垂直居中

```css
.container {
    display: flex;
    align-items: center;
    height: 200px;
}
```

#### 3. 水平垂直居中

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}
```

#### 4. 两栏布局

```css
.container {
    display: flex;
}

.sidebar {
    width: 200px;
}

.main {
    flex: 1; /* 占据剩余空间 */
}
```

#### 5. 三栏布局

```css
.container {
    display: flex;
}

.left {
    width: 100px;
}

.center {
    flex: 1; /* 占据剩余空间 */
}

.right {
    width: 150px;
}
```

## 7. 列表样式

### 7.1 基本列表样式

```css
/* 移除列表项符号 */
list-style: none;

/* 设置列表项符号类型 */
list-style-type: disc; /* 默认，实心圆 */
list-style-type: circle; /* 空心圆 */
list-style-type: square; /* 实心方块 */
list-style-type: decimal; /* 十进制数字 */
list-style-type: lower-alpha; /* 小写字母 */
list-style-type: upper-roman; /* 大写罗马数字 */

/* 设置列表项符号位置 */
list-style-position: inside; /* 符号在内容区内 */
list-style-position: outside; /* 符号在内容区外（默认） */

/* 使用图片作为列表项符号 */
list-style-image: url('./img/icon.png');

/* 复合属性 */
list-style: none outside none;
```

### 7.2 实际应用

```css
/* 导航菜单常用样式 */
.nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

.nav-list li {
    margin-right: 20px;
}

.nav-list a {
    text-decoration: none;
    color: #333;
}
```

## 8. CSS书写规范

1. **缩进**：使用4个空格或1个Tab进行缩进
2. **选择器**：
   - 选择器与大括号之间留一个空格
   - 多个选择器逗号后换行
3. **属性**：
   - 属性名与冒号之间无空格
   - 冒号与属性值之间留一个空格
   - 属性值后加分号
   - 多个属性值逗号后留一个空格
4. **注释**：
   - 单行注释：`/* 注释内容 */`
   - 多行注释：`/* 多行注释 */`
5. **命名规范**：
   - 使用语义化的类名和ID名
   - 类名使用小写字母，多个单词用连字符连接（kebab-case）
   - ID名使用驼峰命名（camelCase）或连字符命名
6. **代码组织**：
   - 按功能或模块组织CSS代码
   - 先写布局相关样式，再写样式细节
   - 相同功能的样式放在一起

**示例**：
```css
/* 导航菜单样式 */
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-logo {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    text-decoration: none;
}

.nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-list li {
    margin-left: 20px;
}

.nav-list a {
    color: #666;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-list a:hover {
    color: #007bff;
}
```

## 9. CSS最佳实践

1. **使用CSS预处理器**：如Sass、Less、Stylus，提高开发效率
2. **使用CSS变量**：便于主题切换和样式统一管理
3. **避免使用!important**：除非万不得已
4. **避免使用行内样式**：保持样式与结构分离
5. **使用语义化HTML**：减少不必要的CSS
6. **优化选择器**：避免使用复杂的选择器，提高渲染性能
7. **使用Flex或Grid布局**：替代传统的浮动布局
8. **响应式设计**：使用媒体查询适配不同屏幕尺寸
9. **模块化开发**：将CSS拆分为多个模块，便于维护
10. **定期清理冗余代码**：使用工具如PurgeCSS移除未使用的CSS

## 10. 常见问题与解决方案

### 10.1 行内元素的内外边距

**问题**：行内元素的垂直外边距无效，垂直内边距不影响布局。

**解决方案**：
- 将行内元素转换为行内块元素：`display: inline-block`
- 使用line-height调整垂直位置

### 10.2 图片下方的空白

**问题**：图片底部会出现3-5px的空白。

**解决方案**：
- 将图片转换为块级元素：`display: block`
- 设置图片的vertical-align：`vertical-align: middle`
- 给父元素设置`font-size: 0`

### 10.3 清除默认样式

**问题**：不同浏览器的默认样式不一致。

**解决方案**：
- 使用CSS Reset或Normalize.css重置默认样式
- 自定义重置样式：
  ```css
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  body {
      font-family: 'Microsoft YaHei', sans-serif;
      color: #333;
      background-color: #fff;
  }
  
  ul, ol {
      list-style: none;
  }
  
  a {
      text-decoration: none;
      color: inherit;
  }
  
  img {
      max-width: 100%;
      height: auto;
      vertical-align: middle;
  }
  ```

### 10.4 浏览器兼容性

**问题**：不同浏览器对CSS属性的支持不一致。

**解决方案**：
- 使用Autoprefixer自动添加浏览器前缀
- 查阅Can I Use（caniuse.com）了解属性支持情况
- 为不支持的浏览器提供降级方案
- 考虑使用PostCSS等工具处理兼容性问题

## 总结

CSS是网页设计的重要组成部分，掌握好CSS需要理解其核心概念和特性，同时不断实践和总结。本笔记从基础的选择器和CSS特性开始，逐步深入到字体、背景、盒子模型、浮动和Flex布局等核心内容，最后介绍了CSS书写规范和最佳实践。

学习CSS的关键是：
1. 理解概念，掌握原理
2. 多写代码，积累经验
3. 关注细节，注重实践
4. 与时俱进，学习新特性

希望本笔记能帮助你更好地学习和掌握CSS，为网页设计打下坚实的基础。