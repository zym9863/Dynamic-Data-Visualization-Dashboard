// 模拟数据服务
import { ref } from 'vue';

// 销售数据
export const salesData = ref([
  { date: '1月', value: 150 },
  { date: '2月', value: 230 },
  { date: '3月', value: 224 },
  { date: '4月', value: 218 },
  { date: '5月', value: 135 },
  { date: '6月', value: 147 }
]);

// 用户数据
export const userData = ref([
  { name: '新用户', value: 1048 },
  { name: '活跃用户', value: 735 },
  { name: '付费用户', value: 580 },
  { name: '流失用户', value: 484 }
]);

// 性能数据
export const performanceData = ref([
  { name: 'CPU使用率', value: [55, 70, 45, 60, 80, 65] },
  { name: '内存使用率', value: [40, 50, 35, 45, 60, 40] },
  { name: '网络流量', value: [25, 45, 65, 35, 55, 40] }
]);

// 模拟数据更新
export function updateMockData() {
  // 更新销售数据
  salesData.value = salesData.value.map(item => {
    return {
      ...item,
      value: Math.floor(item.value * (0.9 + Math.random() * 0.3))
    };
  });

  // 更新用户数据
  userData.value = userData.value.map(item => {
    return {
      ...item,
      value: Math.floor(item.value * (0.95 + Math.random() * 0.1))
    };
  });

  // 更新性能数据
  performanceData.value = performanceData.value.map(item => {
    return {
      ...item,
      value: item.value.map((v: number) => Math.min(100, Math.floor(v * (0.9 + Math.random() * 0.2))))
    };
  });
}