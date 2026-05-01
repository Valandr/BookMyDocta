import { onMounted, ref } from 'vue';
import { apiClient, type HealthResponse } from '@/services/api';

export const useHealthStatus = () => {
  const health = ref<HealthResponse | null>(null);
  const loading = ref(true);
  const error = ref<string | null>(null);

  onMounted(async () => {
    try {
      health.value = await apiClient.getHealthStatus();
    } catch (fetchError) {
      error.value =
        fetchError instanceof Error ? fetchError.message : 'Unknown error while fetching health';
    } finally {
      loading.value = false;
    }
  });

  return {
    health,
    loading,
    error,
  };
};
