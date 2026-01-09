---
title: HTML学习笔记
published: 2026-01-09
description: 'HTML学习笔记'
image: ''
tags: ['HTML']
category: '前端'
draft: false 
lang: ''
---

# HTML学习笔记

## 1. 基础标签

### 1.1 标题标签

```html
<!-- 标题标签：h1-h6，h1级别最高，h6级别最低 -->
<h1>一级标题</h1> <!-- 一个页面建议只使用一次h1 -->
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

### 1.2 段落与换行

```html
<!-- 段落标签：独占一行，段落之间有间隙 -->
<p>这是一个段落。</p>
<p>这是另一个段落。</p>

<!-- 换行标签：单标签，强制换行 -->
这是第一行<br>
这是第二行

<!-- 水平线标签：单标签，显示一条水平线 -->
<hr>
```

## 2. 文本格式化标签

| 标签   | 语义       | 描述                 |
|--------|------------|----------------------|
| `<strong>` | 加粗       | 语义化标签，强调重要性 |
| `<b>`       | 加粗       | 非语义化标签         |
| `<em>`      | 倾斜       | 语义化标签，强调语气   |
| `<i>`       | 倾斜       | 非语义化标签         |
| `<ins>`     | 下划线     | 语义化标签，插入内容   |
| `<u>`       | 下划线     | 非语义化标签         |
| `<del>`     | 删除线     | 语义化标签，删除内容   |
| `<s>`       | 删除线     | 非语义化标签         |

```html
<strong>这是strong加粗</strong>
<b>这是b加粗</b>
<em>这是em倾斜</em>
<i>这是i倾斜</i>
<ins>这是ins下划线</ins>
<u>这是u下划线</u>
<del>这是del删除线</del>
<s>这是s删除线</s>
```

## 3. 图片标签

```html
<!-- 图片标签：单标签，用于插入图片 -->
<img src="./cat.jpg" alt="猫咪图片" title="这是一只可爱的猫咪">
```

### 图片标签属性

| 属性   | 描述                     |
|--------|--------------------------|
| `src`  | 图片路径（必填）         |
| `alt`  | 图片替代文本（必填）     |
| `title`| 鼠标悬停时显示的文本     |
| `width`| 图片宽度                 |
| `height`| 图片高度                |

## 4. 列表标签

### 4.1 无序列表

```html
<!-- 无序列表：ul>li -->
<ul>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
</ul>
```

### 4.2 有序列表

```html
<!-- 有序列表：ol>li -->
<ol>
    <li>第一步</li>
    <li>第二步</li>
    <li>第三步</li>
</ol>
```

### 4.3 定义列表

```html
<!-- 定义列表：dl>dt+dd -->
<dl>
    <dt>HTML</dt> <!-- 定义术语 -->
    <dd>超文本标记语言</dd> <!-- 术语描述 -->
    <dt>CSS</dt>
    <dd>层叠样式表</dd>
</dl>
```

## 5. 表格标签

### 5.1 基本表格结构

```html
<table border="1">
    <tr> <!-- 行 -->
        <th>表头1</th> <!-- 表头单元格 -->
        <th>表头2</th>
    </tr>
    <tr>
        <td>单元格1</td> <!-- 普通单元格 -->
        <td>单元格2</td>
    </tr>
</table>
```

### 5.2 完整表格结构

```html
<table border="1">
    <thead> <!-- 表格头部 -->
        <tr>
            <th>姓名</th>
            <th>年龄</th>
        </tr>
    </thead>
    <tbody> <!-- 表格主体 -->
        <tr>
            <td>张三</td>
            <td>18</td>
        </tr>
        <tr>
            <td>李四</td>
            <td>20</td>
        </tr>
    </tbody>
    <tfoot> <!-- 表格底部 -->
        <tr>
            <td>总计</td>
            <td>2人</td>
        </tr>
    </tfoot>
</table>
```

### 5.3 合并单元格

```html
<table border="1">
    <tr>
        <!-- rowspan：纵向合并单元格 -->
        <td rowspan="2">纵向合并2行</td>
        <td>普通单元格</td>
    </tr>
    <tr>
        <!-- colspan：横向合并单元格 -->
        <td colspan="2">横向合并2列</td>
    </tr>
</table>
```

## 6. 表单标签

### 6.1 表单基本结构

```html
<form action="" method="get">
    <!-- 表单内容 -->
</form>
```

### 6.2 input标签

| type属性值 | 描述               |
|------------|--------------------|
| `text`     | 文本框             |
| `password` | 密码框             |
| `radio`    | 单选按钮           |
| `checkbox` | 复选框             |
| `file`     | 文件上传           |
| `submit`   | 提交按钮           |
| `reset`    | 重置按钮           |
| `button`   | 普通按钮           |

#### 文本框与密码框

```html
<!-- placeholder：输入提示文本 -->
文本框：<input type="text" placeholder="请输入用户名">
<br><br>
密码框：<input type="password" placeholder="请输入密码">
```

#### 单选框与复选框

```html
<!-- 单选框：name属性相同的单选框为一组，只能选择一个 -->
性别：
<input type="radio" name="gender" id="man" checked> <label for="man">男</label>
<input type="radio" name="gender" id="woman"> <label for="woman">女</label>
<br><br>

<!-- 复选框：可以选择多个 -->
爱好：
<input type="checkbox" name="hobby" id="reading"> <label for="reading">阅读</label>
<input type="checkbox" name="hobby" id="sports"> <label for="sports">运动</label>
<input type="checkbox" name="hobby" id="music"> <label for="music">音乐</label>
```

#### 文件上传

```html
<!-- multiple：允许选择多个文件 -->
上传文件：<input type="file" multiple>
```

### 6.3 select下拉菜单

```html
<!-- select：下拉菜单 -->
<select>
    <option selected>请选择城市</option> <!-- selected：默认选中 -->
    <option>北京</option>
    <option>上海</option>
    <option>广州</option>
    <option>深圳</option>
</select>
```

### 6.4 textarea文本域

```html
<!-- textarea：多行文本输入框 -->
<textarea rows="4" cols="50" placeholder="请输入评论"></textarea>
```

### 6.5 button按钮

```html
<!-- button按钮 -->
<button type="submit">提交</button> <!-- 提交表单 -->
<button type="reset">重置</button>   <!-- 重置表单 -->
<button type="button">普通按钮</button> <!-- 无默认行为 -->
```

### 6.6 label标签

```html
<!-- label标签：增大点击区域，与表单元素关联 -->
<!-- 方式1：使用for属性关联id -->
<input type="radio" name="gender" id="man"> <label for="man">男</label>

<!-- 方式2：直接包裹 -->
<label><input type="radio" name="gender"> 女</label>
```

## 7. 语义化标签

| 标签       | 语义           |
|------------|----------------|
| `<header>` | 网页头部       |
| `<nav>`    | 网页导航       |
| `<main>`   | 网页主要内容   |
| `<article>`| 网页文章       |
| `<section>`| 网页区块       |
| `<aside>`  | 网页侧边栏     |
| `<footer>` | 网页底部       |

### 语义化布局示例

```html
<header>
    <h1>网站标题</h1>
    <nav>
        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">联系方式</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h2>文章标题</h2>
        <p>文章内容...</p>
    </article>
    
    <aside>
        <h3>相关推荐</h3>
        <ul>
            <li>推荐1</li>
            <li>推荐2</li>
        </ul>
    </aside>
</main>

<footer>
    <p>版权信息 © 2026</p>
</footer>
```