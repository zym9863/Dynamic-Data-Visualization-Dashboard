<script setup lang="ts">
import { ref, onMounted, watch, defineProps } from 'vue';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';

const props = defineProps<{
  chartData: { name: string; value: number }[];
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
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      bottom: 'bottom',
      data: props.chartData.map(item => item.name)
    },
    series: [
      {
        name: props.title || '数据分布',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '16',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: props.chartData
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