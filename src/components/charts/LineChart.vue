<script setup lang="ts">
import { ref, onMounted, watch, defineProps } from 'vue';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';

const props = defineProps<{
  chartData: { date: string; value: number }[];
  title?: string;
  color?: string;
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
    xAxis: {
      type: 'category',
      data: props.chartData.map(item => item.date),
      axisLine: {
        lineStyle: {
          color: '#ddd'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#ddd'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#eee'
        }
      }
    },
    series: [
      {
        data: props.chartData.map(item => item.value),
        type: 'line',
        smooth: true,
        color: props.color || '#409EFF',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: props.color ? props.color + 'CC' : 'rgba(64, 158, 255, 0.8)'
            },
            {
              offset: 1,
              color: props.color ? props.color + '11' : 'rgba(64, 158, 255, 0.1)'
            }
          ])
        }
      }
    ],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: props.title ? '60' : '30',
      containLabel: true
    }
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