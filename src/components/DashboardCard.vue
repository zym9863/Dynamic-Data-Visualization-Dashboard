<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  title: string;
  loading?: boolean;
}>();
</script>

<template>
  <div class="dashboard-card">
    <div class="card-header">
      <h3>{{ title }}</h3>
      <div v-if="loading" class="loading-indicator">加载中...</div>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.dashboard-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.card-header h3 {
  margin: 0;
  font-size: 16px;
  color: #303133;
}

.loading-indicator {
  font-size: 12px;
  color: #909399;
}

.card-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>