---
title: git学习
published: 2026-02-10
description: 'git学习'
image: ''
tags: [git]
category: 'git'
draft: false 
lang: ''
---

# Git 复习文档

## 1. Git 简介

### 1.1 什么是 Git？

Git 是一个分布式版本控制系统，用于跟踪项目中文件的更改。它是由 Linus Torvalds 为了更好地管理 Linux 内核开发而创建的。

### 1.2 Git 的核心优势

- **分布式架构**：每个开发者都有完整的代码库副本
- **高效的分支管理**：轻松创建、合并和切换分支
- **强大的版本控制**：详细记录每一次更改，支持回滚到任意版本
- **数据完整性**：使用 SHA-1 哈希确保数据不被损坏
- **离线工作**：大多数操作不需要网络连接

### 1.3 Git 与其他版本控制系统的区别

- **Git vs SVN**：Git 是分布式的，SVN 是集中式的
- **Git vs CVS**：Git 性能更好，分支管理更强大
- **Git vs Mercurial**：命令行界面不同，但核心概念相似

## 2. Git 基本概念

### 2.1 仓库 (Repository)

仓库是 Git 用来存储项目文件和版本历史的地方。分为本地仓库和远程仓库。

### 2.2 工作区 (Working Directory)

工作区是你在电脑上看到的文件和文件夹，是你实际编辑文件的地方。

### 2.3 暂存区 (Staging Area)

暂存区是一个临时区域，用于存放你打算提交的更改。它允许你选择性地提交部分更改，而不是所有更改。

### 2.4 提交 (Commit)

提交是 Git 中的一个快照，记录了项目在特定时间点的状态。每个提交都有一个唯一的哈希值作为标识符。

### 2.5 分支 (Branch)

分支是从主代码库中分离出来的一个独立的开发线。默认分支通常是 `main` 或 `master`。

### 2.6 合并 (Merge)

合并是将一个分支的更改集成到另一个分支的过程。

### 2.7 远程仓库 (Remote)

远程仓库是托管在网络或其他位置的 Git 仓库，用于团队协作和代码共享。

### 2.8 HEAD

HEAD 是一个指针，指向当前所在的分支或提交。

## 3. Git 安装与配置

### 3.1 Git 安装

- **Windows**：从 [Git官网](https://git-scm.com/downloads) 下载安装程序
- **macOS**：使用 Homebrew (`brew install git`) 或从官网下载
- **Linux**：使用包管理器 (`apt install git` 或 `yum install git`)

### 3.2 首次配置

```bash
# 配置用户名
git config --global user.name "Your Name"

# 配置邮箱
git config --global user.email "your.email@example.com"

# 配置默认编辑器
git config --global core.editor "code --wait"  # 使用 VS Code

# 配置差异比较工具
git config --global diff.tool vscode
git config --global difftool.vscode.cmd "code --wait --diff $LOCAL $REMOTE"

# 启用彩色输出
git config --global color.ui true
```

### 3.3 查看配置

```bash
# 查看所有配置
git config --list

# 查看特定配置
git config user.name
```

## 4. Git 基本工作流程

### 4.1 初始化仓库

```bash
# 在当前目录初始化仓库
git init

# 克隆远程仓库
git clone https://github.com/username/repository.git
```

### 4.2 基本操作流程

1. **修改文件**：在工作区编辑文件
2. **添加到暂存区**：`git add <file>` 或 `git add .`
3. **提交更改**：`git commit -m "commit message"`
4. **推送到远程**：`git push origin main`

### 4.3 完整工作流程示例

```bash
# 克隆仓库
git clone https://github.com/username/repository.git
cd repository

# 创建并切换到新分支
git checkout -b feature-branch

# 编辑文件
# ... 编辑文件 ...

# 查看更改
git status
git diff

# 暂存更改
git add .

# 提交更改
git commit -m "Add new feature"

# 推送到远程
git push origin feature-branch

# 创建 Pull Request（在 GitHub/Gitee 上）

# 合并后切换到主分支
git checkout main

# 拉取最新更改
git pull origin main

# 删除分支
git branch -d feature-branch
```

## 5. Git 常用命令详解

### 5.1 仓库操作

| 命令                | 说明           | 示例                                                         |
| ------------------- | -------------- | ------------------------------------------------------------ |
| `git init`          | 初始化本地仓库 | `git init`                                                   |
| `git clone`         | 克隆远程仓库   | `git clone https://github.com/username/repo.git`             |
| `git remote add`    | 添加远程仓库   | `git remote add origin https://github.com/username/repo.git` |
| `git remote -v`     | 查看远程仓库   | `git remote -v`                                              |
| `git remote rename` | 重命名远程仓库 | `git remote rename origin github`                            |
| `git remote remove` | 删除远程仓库   | `git remote remove origin`                                   |

### 5.2 文件操作

| 命令              | 说明             | 示例                              |
| ----------------- | ---------------- | --------------------------------- |
| `git add`         | 添加文件到暂存区 | `git add file.txt` 或 `git add .` |
| `git rm`          | 删除文件         | `git rm file.txt`                 |
| `git mv`          | 重命名文件       | `git mv old.txt new.txt`          |
| `git checkout --` | 撤销工作区更改   | `git checkout -- file.txt`        |
| `git reset HEAD`  | 撤销暂存区更改   | `git reset HEAD file.txt`         |

### 5.3 提交操作

| 命令                     | 说明           | 示例                                             |
| ------------------------ | -------------- | ------------------------------------------------ |
| `git commit`             | 提交更改       | `git commit -m "Commit message"`                 |
| `git commit -a`          | 自动暂存并提交 | `git commit -a -m "Commit message"`              |
| `git commit --amend`     | 修改上次提交   | `git commit --amend -m "Updated commit message"` |
| `git commit --no-verify` | 跳过钩子验证   | `git commit -m "Commit message" --no-verify`     |

### 5.4 分支操作

| 命令              | 说明           | 示例                             |
| ----------------- | -------------- | -------------------------------- |
| `git branch`      | 查看分支       | `git branch`                     |
| `git branch -a`   | 查看所有分支   | `git branch -a`                  |
| `git branch -r`   | 查看远程分支   | `git branch -r`                  |
| `git checkout`    | 切换分支       | `git checkout main`              |
| `git checkout -b` | 创建并切换分支 | `git checkout -b feature-branch` |
| `git merge`       | 合并分支       | `git merge feature-branch`       |
| `git branch -d`   | 删除分支       | `git branch -d feature-branch`   |
| `git branch -D`   | 强制删除分支   | `git branch -D feature-branch`   |

### 5.5 远程操作

| 命令                | 说明               | 示例                                |
| ------------------- | ------------------ | ----------------------------------- |
| `git push`          | 推送到远程         | `git push origin main`              |
| `git push -u`       | 推送并设置上游分支 | `git push -u origin feature-branch` |
| `git pull`          | 拉取并合并         | `git pull origin main`              |
| `git fetch`         | 拉取但不合并       | `git fetch origin`                  |
| `git fetch --prune` | 拉取并清理         | `git fetch --prune`                 |

### 5.6 查看历史

| 命令                | 说明              | 示例                   |
| ------------------- | ----------------- | ---------------------- |
| `git log`           | 查看提交历史      | `git log`              |
| `git log --oneline` | 简洁查看历史      | `git log --oneline`    |
| `git log -n`        | 查看最近 n 次提交 | `git log -5`           |
| `git log --stat`    | 查看更改统计      | `git log --stat`       |
| `git log --graph`   | 查看分支图        | `git log --graph`      |
| `git show`          | 查看提交详情      | `git show commit-hash` |
| `git reflog`        | 查看引用日志      | `git reflog`           |

### 5.7 差异比较

| 命令                       | 说明                     | 示例                           |
| -------------------------- | ------------------------ | ------------------------------ |
| `git diff`                 | 查看工作区与暂存区差异   | `git diff`                     |
| `git diff --cached`        | 查看暂存区与上次提交差异 | `git diff --cached`            |
| `git diff HEAD`            | 查看工作区与上次提交差异 | `git diff HEAD`                |
| `git diff branch1 branch2` | 查看分支差异             | `git diff main feature-branch` |

### 5.8 暂存操作

| 命令              | 说明           | 示例                        |
| ----------------- | -------------- | --------------------------- |
| `git stash`       | 暂存更改       | `git stash`                 |
| `git stash list`  | 查看暂存列表   | `git stash list`            |
| `git stash show`  | 查看暂存内容   | `git stash show stash@{0}`  |
| `git stash apply` | 应用暂存       | `git stash apply stash@{0}` |
| `git stash pop`   | 应用并删除暂存 | `git stash pop`             |
| `git stash drop`  | 删除暂存       | `git stash drop stash@{0}`  |
| `git stash clear` | 清空暂存       | `git stash clear`           |

### 5.9 标签操作

| 命令              | 说明             | 示例                                   |
| ----------------- | ---------------- | -------------------------------------- |
| `git tag`         | 查看标签         | `git tag`                              |
| `git tag -a`      | 创建带注释的标签 | `git tag -a v1.0.0 -m "Version 1.0.0"` |
| `git tag -l`      | 搜索标签         | `git tag -l "v1.0*"`                   |
| `git show`        | 查看标签详情     | `git show v1.0.0`                      |
| `git push --tags` | 推送所有标签     | `git push --tags`                      |
| `git push origin` | 推送特定标签     | `git push origin v1.0.0`               |

### 5.10 撤销操作

| 命令                | 说明               | 示例                       |
| ------------------- | ------------------ | -------------------------- |
| `git checkout --`   | 撤销工作区更改     | `git checkout -- file.txt` |
| `git reset HEAD`    | 撤销暂存区更改     | `git reset HEAD file.txt`  |
| `git reset --soft`  | 撤销提交但保留更改 | `git reset --soft HEAD^`   |
| `git reset --mixed` | 撤销提交并取消暂存 | `git reset --mixed HEAD^`  |
| `git reset --hard`  | 撤销提交并丢弃更改 | `git reset --hard HEAD^`   |
| `git revert`        | 创建新提交撤销更改 | `git revert commit-hash`   |

## 6. Git 分支管理策略

### 6.1 常用分支策略

#### 6.1.1 Git Flow

- **master**：主分支，用于发布稳定版本
- **develop**：开发分支，整合功能分支
- **feature**：功能分支，开发新功能
- **release**：发布分支，准备发布
- **hotfix**：热修复分支，修复生产环境问题

#### 6.1.2 GitHub Flow

- **main**：主分支，随时可部署
- **feature**：功能分支，完成后合并到 main

#### 6.1.3 GitLab Flow

- **main**：主分支
- **environment**：环境分支（如 production, staging）
- **feature**：功能分支

### 6.2 分支命名规范

- **功能分支**：`feature/feature-name`
- **修复分支**：`fix/bug-description`
- **文档分支**：`docs/documentation-update`
- **重构分支**：`refactor/code-refactoring`
- **测试分支**：`test/testing-changes`

### 6.3 分支管理最佳实践

- 每个功能使用独立分支
- 定期从主分支合并最新更改
- 分支完成后及时合并并删除
- 使用 Pull Request 进行代码审查
- 保持提交历史清晰简洁

## 7. Git 高级功能

### 7.1 变基 (Rebase)

变基是将一个分支的更改集成到另一个分支的另一种方式，它会重写提交历史。

```bash
# 在 feature 分支上变基到 main
git checkout feature-branch
git rebase main

# 解决冲突后继续变基
git add .
git rebase --continue

# 取消变基
git rebase --abort
```

### 7.2 交互式变基

交互式变基允许你修改、重新排序或合并提交。

```bash
# 修改最近 5 次提交
git rebase -i HEAD~5
```

### 7.3 子模块 (Submodules)

子模块允许你将一个 Git 仓库作为另一个 Git 仓库的子目录。

```bash
# 添加子模块
git submodule add https://github.com/username/submodule.git path/to/submodule

# 克隆包含子模块的仓库
git clone --recursive https://github.com/username/repo.git

# 更新子模块
git submodule update --remote
```

### 7.4 子树合并 (Subtree Merge)

子树合并是另一种将一个仓库集成到另一个仓库的方法。

```bash
# 添加子树
git remote add subtree-repo https://github.com/username/subtree.git
git fetch subtree-repo
git subtree add --prefix=subtree-folder subtree-repo main --squash

# 更新子树
git subtree pull --prefix=subtree-folder subtree-repo main --squash
```

### 7.5 Git 钩子 (Hooks)

Git 钩子是在特定 Git 事件发生时自动执行的脚本。

常用钩子：

- `pre-commit`：提交前执行
- `commit-msg`：提交消息验证
- `pre-push`：推送前执行
- `post-merge`：合并后执行

## 8. Git 最佳实践

### 8.1 提交消息规范

#### 8.1.1 基本格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### 8.1.2 类型说明

- **feat**：新功能
- **fix**：修复 bug
- **docs**：文档更新
- **style**：代码格式调整
- **refactor**：代码重构
- **test**：测试相关
- **chore**：构建过程或辅助工具变动

#### 8.1.3 示例

```
feat(auth): Add login with GitHub

Add GitHub OAuth authentication to allow users to log in with their GitHub account.

Closes #123
```

### 8.2 代码审查

- 使用 Pull Request/Merge Request
- 建立审查 checklist
- 保持审查专注于代码质量
- 及时给出反馈

### 8.3 冲突解决

1. **识别冲突**：Git 会标记冲突文件
2. **解决冲突**：编辑文件，保留需要的更改
3. **标记为已解决**：`git add <file>`
4. **完成合并**：`git commit`

### 8.4 性能优化

- **大文件处理**：使用 Git LFS
- **浅克隆**：`git clone --depth 1`
- **垃圾回收**：`git gc`
- **压缩历史**：`git repack -a -d --depth=250 --window=250`

### 8.5 安全最佳实践

- 不要提交敏感信息（密码、API 密钥等）
- 使用 `.gitignore` 文件
- 定期检查提交历史中的敏感信息
- 考虑使用 Git Secrets 等工具

## 9. Git 工具与集成

### 9.1 Git 图形界面工具

- **GitHub Desktop**：GitHub 官方客户端
- **GitKraken**：跨平台 Git 客户端
- **SourceTree**：Atlassian 出品的 Git 客户端
- **VS Code Git 集成**：内置 Git 支持

### 9.2 代码托管平台

- **GitHub**：最大的代码托管平台
- **Gitee**：国内代码托管平台
- **GitLab**：开源代码托管平台
- **Bitbucket**：Atlassian 旗下的代码托管平台

### 9.3 CI/CD 集成

- **GitHub Actions**：GitHub 内置的 CI/CD 服务
- **GitLab CI/CD**：GitLab 内置的 CI/CD 服务
- **Jenkins**：开源 CI/CD 工具
- **Travis CI**：持续集成服务

### 9.4 Git 与 IDE 集成

- **VS Code**：内置 Git 支持
- **IntelliJ IDEA**：内置 Git 支持
- **Eclipse**：通过 EGit 插件
- **Visual Studio**：内置 Git 支持

## 10. 常见问题与解决方案

### 10.1 常见错误

| 错误                                         | 原因             | 解决方案                                                     |
| -------------------------------------------- | ---------------- | ------------------------------------------------------------ |
| `fatal: not a git repository`                | 不在 Git 仓库中  | 执行 `git init` 或 `cd` 到仓库目录                           |
| `fatal: remote origin already exists`        | 远程仓库已存在   | 使用 `git remote -v` 查看，或 `git remote remove origin` 删除后重新添加 |
| `error: failed to push some refs`            | 远程分支有新更改 | 先执行 `git pull` 合并更改                                   |
| `CONFLICT (content): Merge conflict in file` | 合并冲突         | 手动编辑冲突文件，然后 `git add` 和 `git commit`             |
| `fatal: Authentication failed`               | 认证失败         | 检查用户名密码或 SSH 密钥                                    |

### 10.2 疑难问题

#### 10.2.1 丢失提交

```bash
# 查看引用日志
git reflog

# 恢复到丢失的提交
git checkout <commit-hash>

# 创建新分支保存
git checkout -b recovered-branch
```

#### 10.2.2 撤销已推送的提交

```bash
# 方法 1：使用 revert（推荐）
git revert <commit-hash>
git push origin main

# 方法 2：使用 reset（谨慎使用）
git reset --hard <commit-hash>
git push origin main --force
```

#### 10.2.3 清理大文件

```bash
# 查找大文件
git ls-files -l | sort -k 5 -n -r | head -20

# 使用 BFG Repo-Cleaner 清理
bfg --delete-files large-file.zip
```

### 10.3 性能问题

| 问题         | 解决方案                                     |
| ------------ | -------------------------------------------- |
| 仓库过大     | 使用 Git LFS，定期执行 `git gc`              |
| 克隆速度慢   | 使用 `git clone --depth 1` 浅克隆            |
| 提交速度慢   | 检查 `.gitignore` 文件，避免提交不必要的文件 |
| 合并冲突频繁 | 定期合并主分支，保持分支同步                 |

## 11. Git 学习资源

### 11.1 官方文档

- [Git 官方文档](https://git-scm.com/doc)
- [Pro Git 电子书](https://git-scm.com/book/en/v2)

### 11.2 在线教程

- [GitHub Git 教程](https://docs.github.com/en/get-started/using-git)
- [Git 教程 - 菜鸟教程](https://www.runoob.com/git/git-tutorial.html)
- [Learn Git Branching](https://learngitbranching.js.org/)

### 11.3 视频教程

- [Git 入门教程 - B 站](https://www.bilibili.com/search?keyword=git%E5%85%A5%E9%97%A8)
- [Git & GitHub Crash Course - YouTube](https://www.youtube.com/watch?v=SWYqp7iY_Tc)

### 11.4 书籍推荐

- 《Pro Git》
- 《Git 权威指南》
- 《GitHub 入门与实践》

### 11.5 社区资源

- [Stack Overflow Git 标签](https://stackoverflow.com/questions/tagged/git)
- [GitHub 社区](https://github.community/)
- [Git 邮件列表](https://git-scm.com/community)



