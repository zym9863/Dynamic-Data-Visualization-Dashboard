[English] [中文](README.md)

# Dynamic Data Visualization Dashboard

A dynamic data visualization dashboard built with Vue 3, TypeScript, and Vite, integrated with Element Plus and ECharts. It supports various data displays and interactions, suitable for quickly building data analysis and presentation platforms.

## Tech Stack
- [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for fast development and build
- [Element Plus](https://element-plus.org/) component library
- [ECharts](https://echarts.apache.org/) for data visualization
- [Axios](https://axios-http.com/) for data requests

## Main Features
- Multi-card data display with customizable titles and loading states
- Rich chart components (ECharts)
- Responsive layout for different screens
- Theme color and style customization
- One-click data refresh
- Component-based development, easy to extend

## Directory Structure
```
├── public/                # Static assets
├── src/
│   ├── App.vue            # App entry
│   ├── main.ts            # Main entry file
│   ├── assets/            # Images and icons
│   ├── components/        # Business components
│   │   ├── DashboardCard.vue  # Dashboard card component
│   │   ├── HelloWorld.vue     # Example component
│   │   └── charts/            # Chart-related components (extensible)
│   ├── services/          # Data services and mock
│   │   └── mockData.ts
│   └── style.css          # Global styles
├── package.json           # Project dependencies and scripts
├── vite.config.ts         # Vite config
└── README.md              # Project documentation
```

## Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## Preview
After starting, visit http://localhost:5173/ to view the dashboard.

## Reference Docs
- [Vue 3 Official Docs](https://vuejs.org/)
- [Element Plus Docs](https://element-plus.org/)
- [ECharts Docs](https://echarts.apache.org/)
- [Vite Official Docs](https://vitejs.dev/)

---
To extend more charts or data sources, add custom components in `src/components/charts/` and import them in the main page.