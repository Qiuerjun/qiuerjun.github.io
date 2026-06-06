---
title: StoryForge AI - 本地化 AI 小说与跑团辅助创作平台
date: 2026-06-06 00:00:00
tags:
  - 项目
  - AI
  - TRPG
  - Next.js
top_img: https://bpic.588ku.com/back_our/bg/20200819/bg/10f353d76bcdf_396574.jpg
comments: true
---

## 项目简介

StoryForge AI 是我开发的一个**本地化 AI 小说与跑团辅助创作平台**，专为小说家和跑团（TRPG）玩家打造。它将大语言模型的能力与结构化的世界观、角色、记忆管理深度结合，解决 AI 写作中"容易遗忘设定"和"逻辑不连贯"的痛点。

<!-- more -->

## 演示视频

<iframe src="//player.bilibili.com/player.html?bvid=BV1RbEJ6fEVx&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width:100%;height:500px;"></iframe>

## 为什么选择 StoryForge AI？

- **本地化部署** - 数据完全在本地，支持本地模型（Ollama）和云端 API，你的创作内容不会上传到第三方
- **上下文感知** - 自动注入角色设定、世界观、记忆，保持故事连贯性
- **流式输出** - 实时显示 AI 生成内容，支持 Markdown 渲染
- **灵活配置** - 兼容 OpenAI API、Ollama、vLLM 等多种模型后端

## 核心功能

### 📝 创作空间

类似聊天的交互界面，支持流式输出和打字机效果。自动注入项目设定、角色信息、世界状态作为上下文，还支持置顶重要信息作为长期记忆，以及快捷指令系统（/describe、/roll、/npc）。

### 👥 角色管理

定义角色性格、外貌、背景、说话风格，支持隐藏设定（KP 模式）——仅 AI 可见的秘密信息。还可以让 AI 一键生成角色，支持参考世界观和其他角色。

### 🌍 世界观知识库

Wiki 式词条管理，支持多种分类（地理、历史、魔法、阵营等）。通过关键词触发机制，自动注入相关词条到对话上下文。同样支持 AI 一键生成世界观词条。

### 🧠 记忆索引

AI 自动从对话中提取关键事实和重要事件，支持手动添加和编辑记忆。按重要性分级，标签分类管理，基于关键词进行相关性检索。

### ⚙️ 灵活配置

支持多种 AI 模型后端（OpenAI、Ollama、vLLM 等），可调节温度、Top-P、最大 Token 数等参数，还有浅色/深色主题切换。

### 📦 数据导出导入

一键导出项目完整数据为 JSON 文件，支持从 JSON 文件导入项目数据，方便备份、迁移和分享项目。

## 技术栈

| 类别 | 技术 | 说明 |
| --- | --- | --- |
| 框架 | Next.js 16 | App Router, Server Components |
| 语言 | TypeScript 5 | 类型安全 |
| 样式 | Tailwind CSS v4 | 原子化 CSS |
| 组件 | shadcn/ui 风格 | Radix UI + CVA |
| 数据库 | Prisma 5 + SQLite | 轻量级本地数据库 |
| AI | Vercel AI SDK | 流式输出支持 |
| 状态 | Zustand | 轻量级状态管理 |

## 快速开始

### 前置要求

- Node.js 18.17 或更高版本
- npm 9 或更高版本
- （可选）Ollama - 用于本地模型运行

### 安装步骤

```bash
# 1. 克隆项目
git clone https://github.com/Qiuerjun/storyforge-ai.git
cd storyforge-ai

# 2. 安装依赖
npm install

# 3. 初始化数据库
npm run db:push
npm run db:generate

# 4. 启动开发服务器
npm run dev
```

打开 http://localhost:3000 即可访问。

### 配置 AI 模型

在应用的「设置」页面中配置模型参数：

**Ollama（本地运行，推荐）**
```
API Base URL: http://localhost:11434/v1
API Key: ollama
Model: llama3 / qwen2 / deepseek-coder 等
```

**OpenAI**
```
API Base URL: https://api.openai.com/v1
API Key: sk-xxxxxxxxxxxxxxxxxxxxxxxx
Model: gpt-4o / gpt-4o-mini / gpt-3.5-turbo
```

也支持任何 OpenAI 兼容接口，如 vLLM、LocalAI、LiteLLM 等。

## 项目地址

GitHub: [https://github.com/Qiuerjun/storyforge-ai](https://github.com/Qiuerjun/storyforge-ai)

欢迎 Star、Fork 和提 Issue！
