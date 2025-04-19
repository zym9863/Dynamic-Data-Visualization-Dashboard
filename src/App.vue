<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import DashboardCard from './components/DashboardCard.vue';
import LineChart from './components/charts/LineChart.vue';
import PieChart from './components/charts/PieChart.vue';
import GaugeChart from './components/charts/GaugeChart.vue';
import { salesData, userData, performanceData, updateMockData } from './services/mockData';
import 'element-plus/dist/index.css';
import { ElSwitch } from 'element-plus';

const darkMode = ref(false);
const autoRefresh = ref(true);
let refreshInterval: number | null = null;

// 设置自动刷新
onMounted(() => {
  startAutoRefresh();
});

const startAutoRefresh = () => {
  if (refreshInterval) clearInterval(refreshInterval);
  if (autoRefresh.value) {
    refreshInterval = setInterval(() => {
      updateMockData();
    }, 3000) as unknown as number;
  }
};

const toggleAutoRefresh = () => {
  if (autoRefresh.value) {
    startAutoRefresh();
  } else if (refreshInterval) {
    clearInterval(refreshInterval);
    refreshInterval = null;
  }
};

const toggleTheme = () => {
  document.body.classList.toggle('dark-theme', darkMode.value);
};

// 监听主题变化
watch(darkMode, toggleTheme);

// 监听自动刷新变化
watch(autoRefresh, toggleAutoRefresh);
</script>

<template>
  <div class="dashboard" :class="{ 'dark-theme': darkMode }">
    <svg style="display:none">
      <use href="./assets/dashboard-icons.svg#icon-trend"/>
      <use href="./assets/dashboard-icons.svg#icon-pie"/>
      <use href="./assets/dashboard-icons.svg#icon-gauge"/>
      <use href="./assets/dashboard-icons.svg#icon-refresh"/>
    </svg>
    <header class="dashboard-header">
      <h1>
        <svg width="28" height="28" style="vertical-align:middle;margin-right:8px;"><use href="./assets/dashboard-icons.svg#icon-trend"/></svg>
        动态数据可视化仪表盘
      </h1>
      <div class="dashboard-controls">
        <div class="control-item">
          <svg width="20" height="20"><use href="./assets/dashboard-icons.svg#icon-refresh"/></svg>
          <span>自动刷新</span>
          <el-switch v-model="autoRefresh" />
        </div>
        <div class="control-item">
          <svg width="20" height="20"><use href="./assets/dashboard-icons.svg#icon-gauge"/></svg>
          <span>暗黑模式</span>
          <el-switch v-model="darkMode" />
        </div>
        <button class="refresh-btn" @click="updateMockData">
          <svg width="18" height="18" style="vertical-align:middle;margin-right:4px;"><use href="./assets/dashboard-icons.svg#icon-refresh"/></svg>
          刷新数据
        </button>
      </div>
    </header>
    <div class="dashboard-content">
      <div class="row">
        <div class="col">
          <DashboardCard title="销售趋势" icon="icon-trend">
            <LineChart :chart-data="salesData" color="#67C23A" />
          </DashboardCard>
        </div>
      </div>
      <div class="row">
        <div class="col col-half">
          <DashboardCard title="用户分布" icon="icon-pie">
            <PieChart :chart-data="userData" />
          </DashboardCard>
        </div>
        <div class="col col-half">
          <DashboardCard title="系统性能" icon="icon-gauge">
            <GaugeChart :chart-data="performanceData" />
          </DashboardCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --bg-color: #f4f6fb;
  --card-bg: #fff;
  --text-color: #22223b;
  --border-color: #e0e3eb;
  --header-bg: #f9fafc;
  --primary: #409EFF;
  --success: #67C23A;
  --danger: #F56C6C;
  --shadow: 0 4px 24px 0 rgba(64,158,255,0.08);
}

.dark-theme {
  --bg-color: #181a20;
  --card-bg: #23262f;
  --text-color: #e0e0e0;
  --border-color: #353945;
  --header-bg: #23262f;
  --shadow: 0 4px 24px 0 rgba(64,158,255,0.12);
}

body {
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}
</style>

<style scoped>
.dashboard {
  padding: 20px;
  min-height: 100vh;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 28px;
  background-color: var(--header-bg);
  border-radius: 16px;
  box-shadow: var(--shadow);
  margin-bottom: 24px;
}

.dashboard-header h1 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--primary);
  display: flex;
  align-items: center;
}

.dashboard-controls {
  display: flex;
  align-items: center;
  gap: 24px;
}

.control-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(64,158,255,0.06);
  border-radius: 8px;
  padding: 4px 10px;
}

.refresh-btn {
  background: linear-gradient(90deg, #409EFF 0%, #67C23A 100%);
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 2px 8px 0 rgba(64,158,255,0.10);
  transition: background 0.3s, box-shadow 0.3s;
  display: flex;
  align-items: center;
}

.refresh-btn:hover {
  background: linear-gradient(90deg, #67C23A 0%, #409EFF 100%);
  box-shadow: 0 4px 16px 0 rgba(64,158,255,0.18);
}

.dashboard-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.col {
  flex: 1;
  min-width: 0;
}

.col-half {
  flex: 0.5;
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }
  
  .dashboard-header {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  
  .dashboard-controls {
    width: 100%;
    flex-wrap: wrap;
  }
}
</style>
