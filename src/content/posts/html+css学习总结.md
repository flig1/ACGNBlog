---
title: html+css学习总结.md
published: 2026-01-20
description: 'html+css学习总结'
image: ''
tags: ['html','css']
category: '前端'
draft: false 
lang: ''
---

# HTML+CSS学习笔记

## 1. HTML基础

### 1.1 HTML基本概念

- HTML（HyperText Markup Language）：超文本标记语言
- 作用：用于创建网页结构
- 特点：使用标签来描述网页内容

### 1.2 HTML基本骨架

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

### 1.3 标签的关系和写法

- 单标签：`<标签名>` 如 `<br>`, `<hr>`

- 双标签：`<标签名>内容</标签名>` 如 `<div>内容</div>`

- 父子关系（嵌套关系）：

  ```html
  <div>
      <p>段落内容</p>
  </div>
  ```

- 兄弟关系（并列关系）：

  ```html
  <div>第一个div</div>
  <div>第二个div</div>
  ```

### 1.4 常用HTML标签

- 标题标签：`<h1>` 到 `<h6>`，重要性递减
- 段落标签：`<p>`
- 换行标签：`<br>`
- 水平线标签：`<hr>`
- 文本格式化标签：
  - `<strong>` 或 `<b>`：加粗
  - `<em>` 或 `<i>`：倾斜
  - `<del>` 或 `<s>`：删除线
  - `<ins>` 或 `<u>`：下划线
- 图像标签：`<img src="路径" alt="替换文本" title="提示文本" width="宽度" height="高度">`
- 超链接标签：`<a href="链接地址" target="_blank">链接文本</a>`

### 1.5 路径

- 相对路径：从当前文件出发找目标文件
  - 同级：直接写文件名 `./文件名` 或 `文件名`
  - 下级：`文件夹名/文件名`
  - 上级：`../文件名`
- 绝对路径：从根目录或完整URL出发
  - 本地：`file:///D:/project/index.html`
  - 网络：`https://www.example.com`

### 1.6 媒体标签

- 音频标签：

  ```html
  <audio src="音频路径" controls autoplay loop></audio>
  ```

- 视频标签：

  ```html
  <video src="视频路径" controls autoplay loop muted></video>
  ```

### 1.7 列表标签

- 无序列表（ul）：

  ```html
  <ul>
      <li>列表项1</li>
      <li>列表项2</li>
  </ul>
  ```

- 有序列表（ol）：

  ```html
  <ol>
      <li>列表项1</li>
      <li>列表项2</li>
  </ol>
  ```

- 定义列表（dl）：

  ```html
  <dl>
      <dt>名词</dt>
      <dd>解释</dd>
  </dl>
  ```

### 1.8 表格标签

```html
<table border="1">
    <caption>表格标题</caption>
    <thead>
        <tr>
            <th>表头1</th>
            <th>表头2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>数据1</td>
            <td>数据2</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>合计</td>
            <td>100</td>
        </tr>
    </tfoot>
</table>
```

- 合并单元格：
  - 跨行合并：`rowspan="合并行数"`
  - 跨列合并：`colspan="合并列数"`

### 1.9 表单标签

```html
<form action="提交地址" method="提交方式">
    <!-- 文本输入框 -->
    <input type="text" name="username" placeholder="请输入用户名">
    
    <!-- 密码输入框 -->
    <input type="password" name="password" placeholder="请输入密码">
    
    <!-- 单选框 -->
    <input type="radio" name="gender" value="male" id="male">
    <label for="male">男</label>
    <input type="radio" name="gender" value="female" id="female">
    <label for="female">女</label>
    
    <!-- 复选框 -->
    <input type="checkbox" name="hobby" value="reading">
    <label>阅读</label>
    
    <!-- 下拉菜单 -->
    <select name="city">
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
    </select>
    
    <!-- 文本域 -->
    <textarea name="desc" rows="5" cols="30" placeholder="请输入描述"></textarea>
    
    <!-- 提交按钮 -->
    <input type="submit" value="提交">
    
    <!-- 重置按钮 -->
    <input type="reset" value="重置">
    
    <!-- 普通按钮 -->
    <input type="button" value="普通按钮">
    <button>普通按钮</button>
</form>
```

## 2. CSS基础

### 2.1 CSS基本概念

- CSS（Cascading Style Sheets）：层叠样式表
- 作用：用于美化网页内容，控制网页布局
- 特点：实现了内容（HTML）与样式（CSS）的分离

### 2.2 CSS引入方式

- 行内样式：直接写在HTML标签的style属性中

  ```html
  <div style="color: red; font-size: 16px;">内容</div>
  ```

- 内部样式：写在HTML文件的head标签内的style标签中

  ```html
  <head>
      <style>
          div {
              color: red;
              font-size: 16px;
          }
      </style>
  </head>
  ```

- 外部样式：写在独立的CSS文件中，通过link标签引入

  ```html
  <head>
      <link rel="stylesheet" href="style.css">
  </head>
  ```

### 2.3 CSS选择器

- 基础选择器：
  - 标签选择器：`div { }`
  - 类选择器：`.classname { }`
  - ID选择器：`#idname { }`
  - 通配符选择器：`* { }`

- 复合选择器：
  - 后代选择器：`ul li { }`（选择ul下的所有li）
  - 子代选择器：`ul > li { }`（选择ul的直接子元素li）
  - 并集选择器：`div, p, span { }`（选择所有div、p、span）
  - 交集选择器：`div.box { }`（选择class为box的div）
  - 伪类选择器：
    - `a:hover { }`（鼠标悬停时的样式）
    - `input:focus { }`（获取焦点时的样式）
  - 伪元素选择器：
    - `div::before { }`（在div内容前插入）
    - `div::after { }`（在div内容后插入）

### 2.4 CSS特性

- 继承性：子元素会继承父元素的某些样式（如字体、文本颜色等）
- 层叠性：多个样式规则作用于同一元素时，会根据优先级叠加或覆盖
- 优先级：
  - !important > 行内样式 > ID选择器 > 类选择器 > 标签选择器 > 通配符选择器
  - 计算方式：行内样式(1000) > ID选择器(100) > 类/伪类/属性选择器(10) > 标签/伪元素选择器(1)

### 2.5 字体样式

- 字体大小：`font-size: 16px;`

- 字体粗细：`font-weight: normal/bold/100-900;`

- 字体倾斜：`font-style: normal/italic;`

- 字体族：`font-family: 'Microsoft YaHei', sans-serif;`

- 复合属性：`font: style weight size/line-height family;`

  ```css
  font: italic bold 16px/24px 'Microsoft YaHei', sans-serif;
  ```

### 2.6 文本样式

- 文本颜色：`color: red;` 或 `color: #ff0000;` 或 `color: rgb(255, 0, 0);`
- 文本对齐：`text-align: left/center/right/justify;`
- 文本缩进：`text-indent: 2em;`（首行缩进2个字符）
- 行高：`line-height: 24px;` 或 `line-height: 1.5;`（行高为字体大小的1.5倍）
- 文本装饰：`text-decoration: none/underline/overline/line-through;`
- 文本阴影：`text-shadow: 水平偏移 垂直偏移 模糊半径 颜色;`

### 2.7 背景样式

- 背景颜色：`background-color: #f0f0f0;`

- 背景图片：`background-image: url('image.jpg');`

- 背景平铺：`background-repeat: repeat/no-repeat/repeat-x/repeat-y;`

- 背景位置：`background-position: center top;` 或 `background-position: 50% 0;`

- 背景尺寸：`background-size: cover/contain/100% 100%;`

- 背景固定：`background-attachment: scroll/fixed;`

- 复合属性：`background: color image repeat position/size attachment;`

  ```css
  background: #f0f0f0 url('image.jpg') no-repeat center/cover fixed;
  ```

### 2.8 显示模式

- 块级元素（block）：
  - 独占一行
  - 可以设置宽高
  - 代表元素：div, p, h1-h6, ul, ol, li

- 行内元素（inline）：
  - 不独占一行
  - 无法设置宽高（宽高由内容决定）
  - 代表元素：span, a, strong, em

- 行内块元素（inline-block）：
  - 不独占一行
  - 可以设置宽高
  - 代表元素：img, input, button

- 显示模式转换：
  - `display: block;`
  - `display: inline;`
  - `display: inline-block;`
  - `display: none;`（隐藏元素，不占据空间）

## 3. CSS进阶

### 3.1 盒子模型

- 基本概念：CSS将所有元素都视为一个盒子，包括内容、内边距、边框和外边距

- 组成部分：

  - 内容（content）：盒子内部的实际内容
  - 内边距（padding）：内容与边框之间的空间
  - 边框（border）：包裹内容和内边距的边框
  - 外边距（margin）：盒子与其他盒子之间的空间

- 盒子尺寸计算：

  - 标准盒模型：width/height = 内容区宽度/高度
  - CSS3盒模型：width/height = 内容区宽度/高度 + 内边距 + 边框
  - 通过 `box-sizing` 属性设置：
    - `box-sizing: content-box;`（默认，标准盒模型）
    - `box-sizing: border-box;`（CSS3盒模型）

- 边框样式：

  ```css
  /* 单边框 */
  border-top: 1px solid red;
  
  /* 复合边框 */
  border: 1px solid red;
  
  /* 边框半径 */
  border-radius: 5px;
  ```

- 内边距：

  ```css
  /* 单方向内边距 */
  padding-top: 10px;
  
  /* 复合内边距 */
  padding: 10px; /* 上下左右都是10px */
  padding: 10px 20px; /* 上下10px，左右20px */
  padding: 10px 20px 30px; /* 上10px，左右20px，下30px */
  padding: 10px 20px 30px 40px; /* 上10px，右20px，下30px，左40px */
  ```

- 外边距：

  ```css
  /* 单方向外边距 */
  margin-top: 10px;
  
  /* 复合外边距 */
  margin: 10px; /* 上下左右都是10px */
  margin: 10px 20px; /* 上下10px，左右20px */
  margin: 10px 20px 30px; /* 上10px，左右20px，下30px */
  margin: 10px 20px 30px 40px; /* 上10px，右20px，下30px，左40px */
  
  /* 外边距合并：垂直方向相邻元素的外边距会合并为较大值 */
  /* 外边距塌陷：父元素与第一个/最后一个子元素的外边距会合并 */
  ```

### 3.2 浮动

- 基本概念：使元素脱离文档流，向左或向右移动，直到碰到父元素或其他浮动元素

- 作用：实现多列布局，图文混排

- 语法：`float: left/right/none;`

- 浮动的特性：

  - 脱离文档流
  - 不独占一行
  - 具有行内块元素的特性（可以设置宽高）
  - 会影响后续元素的布局

- 清除浮动：

  - 额外标签法：在浮动元素末尾添加一个空的块级元素，设置 `clear: both;`

  - 单伪元素法：

    ```css
    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }
    ```

  - 双伪元素法：

    ```css
    .clearfix::before,
    .clearfix::after {
        content: '';
        display: table;
    }
    .clearfix::after {
        clear: both;
    }
    ```

  - overflow属性法：给父元素设置 `overflow: hidden/auto;`

### 3.3 Flex布局

- 基本概念：Flexbox（弹性盒子）是一种一维布局模型，用于在容器中灵活排列项目
- 作用：实现复杂的响应式布局，替代传统的浮动和定位布局

- 容器属性：
  - `display: flex;`（将容器设置为Flex布局）
  - `flex-direction: row/row-reverse/column/column-reverse;`（主轴方向）
  - `justify-content: flex-start/flex-end/center/space-between/space-around/space-evenly;`（主轴对齐方式）
  - `align-items: stretch/flex-start/flex-end/center/baseline;`（交叉轴对齐方式）
  - `flex-wrap: nowrap/wrap/wrap-reverse;`（是否换行）
  - `align-content: flex-start/flex-end/center/space-between/space-around/space-evenly/stretch;`（多根轴线对齐方式）

- 项目属性：
  - `flex-grow: 0;`（项目的放大比例）
  - `flex-shrink: 1;`（项目的缩小比例）
  - `flex-basis: auto;`（项目在主轴上的初始尺寸）
  - `flex: 0 1 auto;`（复合属性，grow shrink basis）
  - `align-self: auto/stretch/flex-start/flex-end/center/baseline;`（单个项目的交叉轴对齐方式，覆盖align-items）
  - `order: 0;`（项目的排列顺序，数值越小越靠前）

### 3.4 定位

- 基本概念：用于精确控制元素在页面中的位置
- 定位模式：
  - 静态定位（static）：默认值，元素按照正常文档流排列
  - 相对定位（relative）：相对于元素原来的位置进行偏移，不脱离文档流
  - 绝对定位（absolute）：相对于最近的已定位祖先元素进行定位，脱离文档流
  - 固定定位（fixed）：相对于浏览器窗口进行定位，脱离文档流
  - 粘性定位（sticky）：结合了相对定位和固定定位的特性，在滚动到指定位置时固定

- 定位属性：
  - `position: static/relative/absolute/fixed/sticky;`（定位模式）
  - `top: 0; left: 0; bottom: 0; right: 0;`（定位偏移量）
  - `z-index: 1;`（堆叠顺序，数值越大越靠上）

- 定位应用：
  - 相对定位：微调元素位置，作为绝对定位的参考
  - 绝对定位：实现复杂布局，如导航栏下拉菜单
  - 固定定位：实现固定导航栏、回到顶部按钮
  - 粘性定位：实现滚动时固定的标题栏

### 3.5 圆角和阴影

- 圆角：

  ```css
  /* 基本圆角 */
  border-radius: 5px;
  
  /* 椭圆圆角 */
  border-radius: 50%; /* 圆形 */
  border-radius: 50px / 25px; /* 水平半径/垂直半径 */
  
  /* 单角圆角 */
  border-top-left-radius: 5px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 20px;
  ```

- 盒子阴影：

  ```css
  box-shadow: 水平偏移 垂直偏移 模糊半径 扩散半径 颜色 内外阴影;
  
  /* 示例 */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* 外阴影 */
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.3); /* 内阴影 */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3), -2px -2px 5px rgba(255, 255, 255, 0.5); /* 多重阴影 */
  ```

## 4. CSS高级

### 4.1 空间转换（3D转换）

- 基本概念：

  - 空间：由X、Y、Z三条坐标轴构成的立体空间
  - 空间转换也叫3D转换
  - 属性：`transform`

- 平移：

  ```css
  transform: translate3d(x, y, z);
  transform: translateX(value);
  transform: translateY(value);
  transform: translateZ(value);
  ```

  - 取值与平面转换相同
  - 默认情况下，Z轴平移没有效果，需要设置视距

- 视距：

  - 作用：指定观察者与Z=0平面的距离，添加透视效果
  - 透视效果：近大远小、近实远虚
  - 属性：`perspective: 视距;`（添加给父级，取值范围800-1200）

- 旋转：

  ```css
  transform: rotateX(角度);
  transform: rotateY(角度);
  transform: rotateZ(角度);
  transform: rotate3d(x, y, z, 角度);
  ```

  - 左手法则：左手握住旋转轴，拇指指向正值方向，其他手指弯曲方向为旋转正值方向

- 立体呈现：

  - 作用：设置元素的子元素是位于3D空间中还是平面中
  - 属性：`transform-style: flat/preserve-3d;`
    - `flat`：子级处于平面中（默认）
    - `preserve-3d`：子级处于3D空间

- 缩放：

  ```css
  transform: scale3d(x, y, z);
  transform: scaleX(value);
  transform: scaleY(value);
  transform: scaleZ(value);
  ```

### 4.2 动画

- 基本概念：

  - 过渡：实现两个状态间的变化过程
  - 动画：实现多个状态间的变化过程，动画过程可控（重复播放、最终画面、是否暂停）

- 动画实现步骤：

  1. 定义动画：

     ```css
     /* 方式一：from-to */
     @keyframes 动画名称 {
         from { /* 初始状态 */ }
         to { /* 结束状态 */ }
     }
     
     /* 方式二：百分比 */
     @keyframes 动画名称 {
         0% { /* 初始状态 */ }
         50% { /* 中间状态 */ }
         100% { /* 结束状态 */ }
     }
     ```

  2. 使用动画：

     ```css
     animation: 动画名称 动画时长;
     ```

- animation复合属性：

  ```css
  animation: 动画名称 动画时长 延迟时间 重复次数 运动曲线 动画方向 执行完毕后的状态;
  ```

  - 提示：
    - 动画名称和动画时长必须赋值
    - 取值不分先后顺序
    - 如果有两个时间值，第一个表示动画时长，第二个表示延迟时间

- 常用属性：

  - `animation-name`：动画名称
  - `animation-duration`：动画时长
  - `animation-delay`：延迟时间
  - `animation-iteration-count`：重复次数（infinite表示无限循环）
  - `animation-timing-function`：运动曲线（ease、linear、ease-in、ease-out、ease-in-out、steps()）
  - `animation-direction`：动画方向（normal、reverse、alternate、alternate-reverse）
  - `animation-fill-mode`：执行完毕后的状态（none、forwards、backwards、both）
  - `animation-play-state`：动画播放状态（running、paused）

- 精灵动画：

  - 核心：使用steps()函数实现逐帧动画
  - 制作步骤：
    1. 准备显示区域，盒子尺寸与一张精灵小图尺寸相同
    2. 定义动画，移动背景图（移动距离=精灵图宽度）
    3. 使用动画，steps(N)，N与精灵小图个数相同

### 4.3 过渡

- 基本概念：

  - 过渡效果：使元素从一个状态平滑地过渡到另一个状态
  - 作用：增强用户体验，使页面更具动态感

- 过渡属性：

  - `transition-property`：过渡属性（all、具体属性名）
  - `transition-duration`：过渡时长
  - `transition-timing-function`：过渡曲线（ease、linear、ease-in、ease-out、ease-in-out）
  - `transition-delay`：过渡延迟

- 复合写法：

  ```css
  transition: 过渡属性 过渡时长 过渡曲线 过渡延迟;
  ```

- 示例：

  ```css
  .box {
      width: 100px;
      height: 100px;
      background-color: red;
      transition: width 0.5s ease 0s, background-color 0.5s ease 0s;
  }
  
  .box:hover {
      width: 200px;
      background-color: blue;
  }
  ```

## 5. 移动Web开发

### 5.1 移动Web基础

- 谷歌模拟器：

  - 作用：模拟移动设备，方便查看页面效果
  - 如何使用：在浏览器开发者工具中切换到移动设备视图

- 屏幕分辨率：

  - 物理分辨率：硬件分辨率（出厂设置）
  - 逻辑分辨率：软件/驱动设置
  - 结论：制作网页参考逻辑分辨率

- 视口：

  - 作用：显示HTML网页的区域，用来约束HTML的尺寸

  - 视口标签：

    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```

  - 属性说明：

    - `width=device-width`：视口宽度=设备宽度
    - `initial-scale=1.0`：初始缩放比例为1（不缩放）
    - `maximum-scale=1.0`：最大缩放比例为1
    - `minimum-scale=1.0`：最小缩放比例为1
    - `user-scalable=no`：禁止用户缩放

- 二倍图：

  - 概念：设计稿里面每个元素的尺寸的倍数
  - 作用：防止图片在高分辨率屏幕下模糊失真
  - 使用方法：设计稿尺寸 ÷ 2 = 实际使用尺寸

### 5.2 适配方案

- 宽度适配：
  - 百分比布局
  - Flex布局
  - 特点：宽度自适应，高度固定

- 等比适配：
  - rem布局
  - vw/vh布局
  - 特点：宽高等比缩放，适配不同屏幕尺寸

### 5.3 rem布局

- rem单位：

  - 相对单位
  - 相对于HTML标签的字号计算结果
  - 1rem = 1HTML字号大小

- 媒体查询：

  - 作用：检测视口的宽度，编写差异化的CSS样式

  - 语法：

    ```css
    @media (width: 320px) {
        html {
            font-size: 14px;
        }
    }
    ```

  - 可以根据不同的视口宽度设置不同的HTML字号

- rem布局方案：

  - 将网页等分成10份，HTML标签的字号为视口宽度的1/10
  - 公式：1rem = 1/10视口宽度
  - 例如：视口宽度375px，HTML字号=37.5px，1rem=37.5px

- flexible.js：

  - 作用：手淘开发的用来适配移动端的js库

  - 核心原理：根据不同的视口宽度给html根节点设置不同的font-size

  - 使用方法：在HTML文件末尾引入flexible.js

    ```html
    <script src="./js/flexible.js"></script>
    ```

- rem单位尺寸计算：

  1. 确定基准根字号：设计稿宽度 ÷ 10 = 基准根字号
  2. 计算rem单位尺寸：元素尺寸 ÷ 基准根字号 = rem单位尺寸

### 5.4 vw/vh单位

- 基本概念：

  - vw（viewport width）：视口宽度的1/100
  - vh（viewport height）：视口高度的1/100
  - 例如：视口宽度375px，1vw=3.75px；视口高度667px，1vh=6.67px

- 优势：

  - 直接基于视口尺寸，无需媒体查询
  - 计算简单，易于理解和使用

- 使用方法：

  ```css
  .box {
      width: 50vw; /* 宽度为视口宽度的50% */
      height: 30vh; /* 高度为视口高度的30% */
      font-size: 4vw; /* 字体大小为视口宽度的4% */
  }
  ```

### 5.5 Less预处理器

- 基本概念：

  - Less是一个CSS预处理器，文件后缀是.less
  - 扩充了CSS语言，使CSS具备一定的逻辑性、计算能力
  - 注意：浏览器不识别Less代码，需要编译成CSS文件使用
  - VS Code插件：Easy LESS（保存less文件后自动生成对应的CSS文件）

- 注释：

  - 单行注释：`// 注释内容`（不会被编译到CSS中）
  - 块注释：`/* 注释内容 */`（会被编译到CSS中）

- 运算：

  - 加、减、乘直接书写计算表达式

  - 除法需要添加小括号或点

  - 表达式存在多个单位以第一个单位为准

  - 示例：

    ```less
    width: 100px + 50px; /* 结果：150px */
    height: 100px - 30px; /* 结果：70px */
    font-size: 16px * 2; /* 结果：32px */
    padding: (100px / 2); /* 结果：50px */
    margin: 100px ./ 4; /* 结果：25px */
    ```

- 嵌套：

  - 作用：快速生成后代选择器

  - 示例：

    ```less
    .box {
        width: 200px;
        
        .inner {
            color: red;
        }
        
        &:hover {
            background-color: blue;
        }
    }
    ```

  - 注意：用`&`表示当前选择器，不会生成后代选择器，通常配合伪类或伪元素使用

- 变量：

  - 概念：容器，存储数据

  - 作用：存储数据，方便使用和修改

  - 语法：

    - 定义变量：`@变量名: 数据;`
    - 使用变量：`CSS属性: @变量名;`

  - 示例：

    ```less
    @myColor: pink;
    
    .box {
        color: @myColor;
    }
    
    a {
        color: @myColor;
    }
    ```

- 导入：

  - 作用：导入less公共样式文件

  - 语法：`@import "文件路径";`

  - 提示：如果是less文件可以省略后缀

  - 示例：

    ```less
    @import './base.less';
    @import './common';
    ```

- 导出：

  - 写法：在less文件的第一行添加 `// out: 存储路径`

  - 提示：文件夹名称后面添加 `/`

  - 示例：

    ```less
    // out: ./index.css
    // out: ./css/
    ```

- 禁止导出：

  - 写法：在less文件第一行添加 `// out: false`
  - 作用：用于导入的公共样式文件，不生成对应的CSS文件

## 6. 响应式设计

### 6.1 媒体查询

- 基本概念：

  - 媒体查询能够检测视口的宽度，然后编写差异化的CSS样式
  - 当某个条件成立时，执行对应的CSS样式
  - 作用：实现响应式设计，使网页在不同设备上都能良好显示

- 语法：

  ```css
  /* 方式一：直接写在CSS文件中 */
  @media 媒体类型 and (条件1) and (条件2) {
      /* CSS样式 */
  }
  
  /* 方式二：通过link标签引入 */
  <link rel="stylesheet" media="媒体类型 and (条件)" href="样式文件路径">
  ```

- 媒体类型：

  - `all`：所有媒体类型（默认）
  - `screen`：屏幕设备
  - `print`：打印设备

- 条件：

  - `width`：视口宽度
  - `height`：视口高度
  - `min-width`：最小视口宽度（大于等于）
  - `max-width`：最大视口宽度（小于等于）
  - `orientation`：屏幕方向（portrait：竖屏，landscape：横屏）

- 媒体查询的使用：

  - 书写顺序：建议从移动端到桌面端（从小到大）或从桌面端到移动端（从大到小）
  - 断点设置：根据常见设备宽度设置断点
    - 移动端：< 768px
    - 平板：768px - 992px
    - 桌面：992px - 1200px
    - 大屏：> 1200px

- 示例：

  ```css
  /* 移动端样式（默认） */
  .box {
      width: 100%;
  }
  
  /* 平板样式 */
  @media screen and (min-width: 768px) {
      .box {
          width: 50%;
      }
  }
  
  /* 桌面样式 */
  @media screen and (min-width: 992px) {
      .box {
          width: 33.33%;
      }
  }
  
  /* 大屏样式 */
  @media screen and (min-width: 1200px) {
      .box {
          width: 25%;
      }
  }
  ```

### 6.2 Bootstrap框架

- 基本概念：

  - Bootstrap是一个流行的前端框架，由Twitter开发
  - 提供了一套完整的CSS组件和JavaScript插件
  - 特点：响应式设计、移动优先、易于使用

- 版本：

  - Bootstrap 3：移动优先，基于Less
  - Bootstrap 4：使用Sass，增强了响应式设计
  - Bootstrap 5：移除了jQuery依赖，使用原生JavaScript

- 核心特性：

  - 栅格系统：12列网格布局，适配不同屏幕尺寸
  - 响应式工具：显示/隐藏元素，根据屏幕尺寸
  - 组件：按钮、表单、导航、模态框等
  - 图标：内置字体图标
  - JavaScript插件：轮播图、下拉菜单、模态框等

- 栅格系统：

  - 容器：

    - `.container`：固定宽度容器，有响应式边距
    - `.container-fluid`：全屏宽度容器，无响应式边距

  - 行：`.row`

  - 列：`.col-*-*`

    - 第一个星号：屏幕尺寸（xs、sm、md、lg、xl、xxl）
    - 第二个星号：列数（1-12）

  - 示例：

    ```html
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                内容1
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                内容2
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                内容3
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                内容4
            </div>
        </div>
    </div>
    ```

- 使用步骤：

  1. 引入Bootstrap CSS文件
  2. 引入jQuery（Bootstrap 3和4需要）和Bootstrap JS文件
  3. 使用Bootstrap提供的类名编写HTML结构
  4. 根据需要自定义样式

- 示例：

  ```html
  <!DOCTYPE html>
  <html lang="zh-CN">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bootstrap示例</title>
      <!-- 引入Bootstrap CSS -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  </head>
  <body>
      <!-- 导航栏 -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
              <a class="navbar-brand" href="#">Logo</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">首页</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">关于我们</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">产品</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">联系我们</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  
      <!-- 主要内容 -->
      <div class="container mt-5">
          <div class="row">
              <div class="col-md-6">
                  <h2>响应式设计</h2>
                  <p>Bootstrap提供了强大的响应式设计能力，使网页在不同设备上都能良好显示。</p>
              </div>
              <div class="col-md-6">
                  <h2>栅格系统</h2>
                  <p>12列栅格系统，轻松实现复杂布局。</p>
              </div>
          </div>
      </div>
  
      <!-- 引入Bootstrap JS -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  </html>
  ```
