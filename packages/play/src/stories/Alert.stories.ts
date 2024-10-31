import type { StoryObj, Meta, ArgTypes } from '@storybook/vue3';
import { ref, watch } from 'vue';
import {
  fn,
  within,
  userEvent,
  expect,
  waitFor,
} from '@storybook/test';
import { HmAlert, type AlertInstance } from 'toy-element';
import 'toy-element/dist/theme/Alert.css';

type Story = StoryObj<typeof HmAlert> & { argTypes?: ArgTypes };

const meta: Meta<typeof HmAlert> = {
  title: 'Example/Alert',
  component: HmAlert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'warning', 'info', 'danger'],
    },
    effect: {
      control: 'select',
      options: ['light', 'dark'],
    },
    center: {
      control: 'boolean',
    },
  },
  args: {
    onClose: fn(),
  },
};

export const Default: Story & { args: { visible: boolean } } = {
  args: {
    title: '标题',
    description: '这是一段描述',
    type: 'success',
    effect: 'light',
    closable: true,
    showIcon: true,
    visible: true,
  },
  render: (args: any) => ({
    components: { HmAlert },
    setup() {
      const alertRef = ref<AlertInstance>();
      watch(
        () => (args as any).visible,
        (val: boolean) => {
          if (val) {
            alertRef.value?.open();
          } else {
            alertRef.value?.close();
          }
        }
      );
      return { args, alertRef };
    },
    template: `
     <hm-alert ref="alertRef" v-bind="args"></hm-alert>
    `,
  }),
};

export const Close: Story & { args: { visible: boolean } } = {
  args: {
    title: 'Alert Title',
    description: 'Alert Content',
    visible: true,
  },
  argTypes: {
    visible: {
      control: 'boolean',
    },
  },
  name: 'Close',
  render: (args) => ({
    components: { HmAlert },
    setup() {
      const alertRef = ref<AlertInstance>();
      watch(
        () => (args as any).visible,
        (val: boolean) => {
          if (val) {
            alertRef.value?.open();
          } else {
            alertRef.value?.close();
          }
        }
      );
      return { args, alertRef };
    },
    template: `
      <hm-alert ref="alertRef" v-bind="args" />
    `,
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const alert = canvas.queryByRole('alert');

    await step('close alert', async () => {
      await userEvent.click(
        alert!.querySelector('.hm-alert__close i') as HTMLElement
      );

      // 等待 alert 被移除
      await waitFor(() => {
        const updatedAlert = canvas.queryByRole('alert');
        expect(args.onClose).toHaveBeenCalled();
        expect(updatedAlert).not.toBeInTheDocument();
      });
    });
  },
};

export default meta;
