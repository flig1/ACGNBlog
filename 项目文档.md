# Mizuki 项目文档

## 1. 项目概述

Mizuki 是一个基于 Astro 构建的现代化静态博客模板，具有丰富的功能和精美的设计。本文档将指导您如何调试项目、修改主题（中英文切换、图片切换）以及编写新博客。

## 2. 项目结构

```
├── src/
│   ├── components/          # 组件目录
│   ├── content/             # 内容目录（博客文章等）
│   ├── i18n/                # 国际化支持
│   ├── layouts/             # 布局文件
│   ├── pages/               # 页面文件
│   ├── styles/              # 样式文件
│   ├── utils/               # 工具函数
│   └── config.ts            # 主配置文件
├── public/                  # 静态资源
│   ├── assets/              # 图片、CSS、JS 等资源
│   └── images/              # 博客图片
└── package.json             # 项目依赖
```

## 3. 调试指南

### 3.1 环境要求

- Node.js >= 20
- pnpm >= 9

### 3.2 安装依赖

```bash
pnpm install
```

### 3.3 启动开发服务器

```bash
pnpm dev
```

开发服务器将在 `http://localhost:4321` 启动，您可以在浏览器中访问该地址查看博客效果。

### 3.4 常用调试命令

| 命令                    | 功能描述                                  |
|:------------------------|:------------------------------------------|
| `pnpm dev`              | 启动本地开发服务器                        |
| `pnpm build`            | 构建生产版本                              |
| `pnpm preview`          | 预览生产构建                              |
| `pnpm check`            | 运行 Astro 错误检查                       |
| `pnpm format`           | 使用 Prettier 格式化代码                  |
| `pnpm lint`             | 检查并修复代码问题                        |

### 3.5 调试技巧

1. **实时预览**：开发服务器启动后，修改代码会自动刷新页面，便于实时查看效果
2. **控制台日志**：使用浏览器开发者工具的控制台查看日志信息
3. **Astro 调试**：运行 `pnpm check` 检查 Astro 相关错误
4. **网络请求**：使用浏览器开发者工具的网络面板查看 API 请求和响应

## 4. 主题修改

### 4.1 中英文切换

Mizuki 支持多语言切换，默认支持 English、中文简体、中文繁体和日本語。

#### 4.1.1 修改默认语言

在 `src/config.ts` 文件中修改 `lang` 字段：

```typescript
export const siteConfig: SiteConfig = {
  // ...
  lang: "zh_CN", // 可选值："en", "zh_CN", "zh_TW", "ja"
  // ...
};
```

#### 4.1.2 添加新语言

1. 在 `src/i18n/languages/` 目录下创建新的语言文件，例如 `fr.ts`
2. 参考现有语言文件结构，添加翻译内容
3. 在 `src/i18n/translation.ts` 中导入并注册新语言

#### 4.1.3 修改翻译内容

编辑 `src/i18n/languages/` 目录下对应的语言文件，修改翻译内容：

```typescript
// src/i18n/languages/zh_CN.ts
export const zh_CN: Translation = {
  // ...
  themeColor: "主题颜色",
  // ...
};
```

### 4.2 图片切换

#### 4.2.1 横幅图片切换

横幅图片位于 `public/assets/desktop-banner/`（桌面端）和 `public/assets/mobile-banner/`（移动端）目录下。

**修改横幅图片：**

1. 将新图片添加到对应的目录中
2. 在 `src/config.ts` 中修改 `banner` 配置：

```typescript
export const siteConfig: SiteConfig = {
  // ...
  banner: {
    src: {
      desktop: [
        "/assets/desktop-banner/1.webp",
        "/assets/desktop-banner/2.webp",
        // 添加新图片路径
      ],
      mobile: [
        "/assets/mobile-banner/1.webp",
        "/assets/mobile-banner/2.webp",
        // 添加新图片路径
      ],
    },
    carousel: {
      enable: true, // 启用轮播
      interval: 1.5, // 轮播间隔（秒）
    },
  },
  // ...
};
```

#### 4.2.2 全屏壁纸切换

全屏壁纸配置位于 `src/config.ts` 中的 `fullscreenWallpaperConfig` 字段：

```typescript
export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
  src: {
    desktop: [
      "/assets/desktop-banner/1.webp",
      // 添加更多图片
    ],
    mobile: [
      "/assets/mobile-banner/1.webp",
      // 添加更多图片
    ],
  },
  carousel: {
    enable: true, // 启用轮播
    interval: 5, // 轮播间隔（秒）
  },
  opacity: 0.8, // 壁纸透明度
  blur: 1, // 背景模糊程度
};
```

#### 4.2.3 壁纸模式切换

Mizuki 支持三种壁纸模式：
- `banner`：顶部横幅
- `fullscreen`：全屏壁纸
- `none`：无壁纸

**修改默认壁纸模式：**

```typescript
export const siteConfig: SiteConfig = {
  // ...
  wallpaperMode: {
    defaultMode: "banner", // 可选值："banner", "fullscreen", "none"
  },
  // ...
};
```

## 5. 编写新博客

### 5.1 创建新博客

使用以下命令创建新博客：

```bash
pnpm new-post <filename>
```

例如：

```bash
pnpm new-post my-first-blog
```

这将在 `src/content/posts/` 目录下创建一个新的博客文件 `my-first-blog.md`。

### 5.2 博客文件结构

博客文件使用 Markdown 格式，包含 YAML 前置元数据（Frontmatter）和 Markdown 内容。

```yaml
---
title: My First Blog
published: 2024-01-01
description: This is my first blog post.
image: ./cover.jpg
tags: [tag1, tag2]
category: Frontend
draft: false
pinned: false
lang: en
toc: true
---

# My First Blog

This is the content of my first blog post.
```

### 5.3 Frontmatter 字段说明

| 字段名       | 描述                                  | 必填 |
|:-------------|:--------------------------------------|:-----|
| `title`      | 博客标题                              | 是   |
| `published`  | 发布日期（格式：YYYY-MM-DD）          | 是   |
| `description`| 博客描述（用于 SEO 和预览）           | 否   |
| `image`      | 封面图片路径（相对路径）              | 否   |
| `tags`       | 标签数组                              | 否   |
| `category`   | 分类                                  | 否   |
| `draft`      | 是否为草稿（true/false）              | 否   |
| `pinned`     | 是否置顶（true/false）                | 否   |
| `lang`       | 博客语言（默认使用站点语言）          | 否   |
| `toc`        | 是否显示目录（true/false）            | 否   |

### 5.4 博客内容编写

#### 5.4.1 基本 Markdown 语法

Mizuki 支持标准的 GitHub Flavored Markdown 语法，包括：

- 标题：`# H1` 至 `###### H6`
- 加粗：`**bold**`
- 斜体：`*italic*`
- 列表：有序列表 `1. item` 和无序列表 `- item`
- 链接：`[link text](url)`
- 图片：`![alt text](image url)`
- 代码块：使用三个反引号 ``` 
- 表格
- 引用：`> quote`

#### 5.4.2 增强功能

Mizuki 还支持以下增强功能：

1. **Callouts**：
   ```
   > [!NOTE]
   > This is a note callout.
   
   > [!TIP]
   > This is a tip callout.
   
   > [!WARNING]
   > This is a warning callout.
   ```

2. **数学公式**：
   - 行内公式：`$E = mc^2$`
   - 块级公式：
     ```
     $$
     E = mc^2
     $$
     ```

3. **GitHub Cards**：
   ```
   ::github{repo="user/repo"}
   ```

4. **代码高亮**：
   ```javascript
   function hello() {
     console.log("Hello, World!");
   }
   ```

### 5.5 添加图片

1. 将图片复制到 `public/images/` 目录下
2. 在博客中使用相对路径引用图片：
   ```markdown
   ![图片描述](/images/image-name.jpg)
   ```

### 5.6 预览和发布

1. 在本地开发服务器中预览博客效果：`pnpm dev`
2. 确保 `draft` 字段设置为 `false`
3. 运行 `pnpm build` 构建生产版本
4. 部署构建后的 `dist/` 目录到您的托管平台

## 6. 高级配置

### 6.1 主题颜色修改

在 `src/config.ts` 中修改 `themeColor` 配置：

```typescript
export const siteConfig: SiteConfig = {
  // ...
  themeColor: {
    hue: 230, // 主题色的色相，范围 0-360
    fixed: false, // 是否隐藏主题色选择器
  },
  // ...
};
```

### 6.2 导航栏配置

编辑 `src/config.ts` 中的 `navBarConfig` 字段，修改导航栏链接：

```typescript
export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    {
      name: "About",
      url: "/about/",
      icon: "material-symbols:info",
    },
    // 添加更多导航链接
  ],
};
```

### 6.3 侧边栏配置

编辑 `src/config.ts` 中的 `sidebarLayoutConfig` 字段，修改侧边栏组件：

```typescript
export const sidebarLayoutConfig: SidebarLayoutConfig = {
  position: "both", // 侧边栏位置："unilateral"（单侧）或 "both"（双侧）
  components: [
    {
      type: "profile", // 组件类型
      enable: true, // 是否启用
      order: 1, // 显示顺序
      sidebar: "left", // 所在侧边栏
      // ...
    },
    // 添加更多组件配置
  ],
};
```

## 7. 常见问题

### 7.1 如何修改网站标题和副标题？

编辑 `src/config.ts` 中的 `siteConfig` 字段：

```typescript
export const siteConfig: SiteConfig = {
  title: "Your Blog Name",
  subtitle: "Your Blog Subtitle",
  // ...
};
```

### 7.2 如何添加新页面？

1. 在 `src/pages/` 目录下创建新的 Astro 或 Markdown 文件
2. 配置页面内容和布局
3. 在导航栏中添加对应的链接

### 7.3 如何修改页脚信息？

编辑 `src/config.ts` 中的 `footerConfig` 字段：

```typescript
export const footerConfig: FooterConfig = {
  enable: true,
  customHtml: "© 2024 Your Name. All rights reserved.",
};
```

或者编辑 `src/FooterConfig.html` 文件。

## 8. 部署指南

Mizuki 可以部署到任何静态托管平台，如：

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

### 8.1 使用 GitHub Pages 部署

1. 修改 `src/config.ts` 中的 `siteURL` 为您的 GitHub Pages URL
2. 推送代码到 GitHub 仓库
3. 启用 GitHub Pages，选择 `gh-pages` 分支
4. 等待部署完成

### 8.2 使用 Vercel 部署

1. 登录 Vercel
2. 导入您的 GitHub 仓库
3. 按照提示完成部署配置
4. 部署完成后，访问 Vercel 提供的 URL

## 9. 总结

本文档介绍了 Mizuki 项目的调试方法、主题修改（中英文切换、图片切换）以及新博客的编写方法。通过本文档，您应该能够熟练地使用和定制 Mizuki 博客。

如果您遇到任何问题，可以查看项目的 GitHub 仓库或提交 Issue 寻求帮助。

---

**祝您使用愉快！** 🎉
