# Personal Portfolio Site

一个基于 `React + TypeScript + Vite` 的个人作品集网站，用于展示个人信息、工作经历和项目案例。

## 技术栈

- React 19
- TypeScript
- Vite
- Lucide React
- Tailwind CSS（通过 CDN 在 `index.html` 中加载）

## 本地运行

**环境要求：**

- Node.js 18+

**启动步骤：**

1. 安装依赖：
   `npm install`
2. 启动开发环境：
   `npm run dev`
3. 打开浏览器访问提示的本地地址（默认通常为 `http://localhost:3000`）

## 生产构建

1. 执行构建：
   `npm run build`
2. 本地预览构建结果：
   `npm run preview`

## 项目结构

```text
.
├── components/      # 页面模块（导航、首页、技能、经历、项目、页脚）
├── public/          # 静态资源（头像、图片等）
├── App.tsx          # 页面主入口
├── constants.tsx    # 页面内容数据
├── types.ts         # TypeScript 类型定义
├── index.tsx        # React 挂载入口
└── vite.config.ts   # Vite 配置
```
