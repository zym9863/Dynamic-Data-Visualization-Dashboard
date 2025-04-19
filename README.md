[中文] [English](README_EN.md)

# Dynamic Data Visualization Dashboard

一个基于 Vue 3、TypeScript、Vite 构建的动态数据可视化仪表盘，集成了 Element Plus 和 ECharts，支持多种数据展示与交互，适合快速搭建数据分析与展示平台。

## 技术栈
- [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) 极速开发与构建
- [Element Plus](https://element-plus.org/) 组件库
- [ECharts](https://echarts.apache.org/) 数据可视化
- [Axios](https://axios-http.com/) 数据请求

## 主要功能
- 多卡片式数据展示，支持自定义标题与加载状态
- 丰富的图表组件（ECharts）
- 响应式布局，适配不同屏幕
- 主题色与样式自定义
- 一键刷新数据
- 组件化开发，易于扩展

## 目录结构
```
├── public/                # 静态资源
├── src/
│   ├── App.vue            # 应用主入口
│   ├── main.ts            # 入口文件
│   ├── assets/            # 图片与图标
│   ├── components/        # 业务组件
│   │   ├── DashboardCard.vue  # 仪表盘卡片组件
│   │   ├── HelloWorld.vue     # 示例组件
│   │   └── charts/            # 图表相关组件（可扩展）
│   ├── services/          # 数据服务与 mock
│   │   └── mockData.ts
│   └── style.css          # 全局样式
├── package.json           # 项目依赖与脚本
├── vite.config.ts         # Vite 配置
└── README.md              # 项目说明
```

## 快速开始
1. 安装依赖：
   ```bash
   npm install
   ```
2. 启动开发服务器：
   ```bash
   npm run dev
   ```
3. 构建生产环境：
   ```bash
   npm run build
   ```
4. 预览生产环境：
   ```bash
   npm run preview
   ```

## 预览
启动后访问本地 http://localhost:5173/ 查看仪表盘效果。

## 参考文档
- [Vue 3 官方文档](https://vuejs.org/)
- [Element Plus 文档](https://element-plus.org/zh-CN/)
- [ECharts 文档](https://echarts.apache.org/zh/index.html)
- [Vite 官方文档](https://vitejs.dev/)

---
如需扩展更多图表或数据源，可在 `src/components/charts/` 目录下添加自定义组件，并在主页面中引入使用。
