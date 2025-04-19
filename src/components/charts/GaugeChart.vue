<script setup lang="ts">
import { ref, onMounted, watch, defineProps } from 'vue';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';

const props = defineProps<{
  chartData: { name: string; value: number[] }[];
  title?: string;
}>();

const chartContainer = ref<HTMLElement | null>(null);
let chart: echarts.ECharts | null = null;

const initChart = () => {
  if (chartContainer.value) {
    chart = echarts.init(chartContainer.value);
    updateChart();
    window.addEventListener('resize', () => {
      chart?.resize();
    });
  }
};

const updateChart = () => {
  if (!chart) return;
  
  const option: EChartsOption = {
    title: props.title ? {
      text: props.title,
      left: 'center'
    } : undefined,
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: props.chartData.map(item => item.name),
      bottom: 'bottom'
    },
    radar: {
      indicator: [
        { name: '指标1', max: 100 },
        { name: '指标2', max: 100 },
        { name: '指标3', max: 100 },
        { name: '指标4', max: 100 },
        { name: '指标5', max: 100 },
        { name: '指标6', max: 100 }
      ]
    },
    series: [
      {
        type: 'radar',
        data: props.chartData.map(item => ({
          value: item.value,
          name: item.name
        })),
        areaStyle: {}
      }
    ]
  };

  chart.setOption(option);
};

onMounted(() => {
  initChart();
});

watch(
  () => props.chartData,
  () => {
    updateChart();
  },
  { deep: true }
);
</script>

<template>
  <div ref="chartContainer" class="chart-container"></div>
</template>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  min-height: 300px;
}
</style>