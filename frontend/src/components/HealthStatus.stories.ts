import type { Meta, StoryObj } from '@storybook/vue3';
import HealthStatus from '@/components/HealthStatus.vue';

const meta: Meta<typeof HealthStatus> = {
  title: 'Components/HealthStatus',
  component: HealthStatus,
};

export default meta;

type Story = StoryObj<typeof HealthStatus>;

export const Default: Story = {};
