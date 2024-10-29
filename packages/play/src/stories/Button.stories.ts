import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { fn, within, userEvent, expect, clearAllMocks } from '@storybook/test';

import { HmButton } from 'toy-element';
import { set } from 'lodash-es';

type Story = StoryObj<typeof HmButton> & { argTypes?: ArgTypes };

const meta: Meta<typeof HmButton> = {
  title: 'Example/Button',
  component: HmButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', ''],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'default', 'small', ''],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    useThrottle: {
      control: 'boolean',
    },
    throttleDuration: {
      control: 'number',
    },
    autofocus: {
      control: 'boolean',
    },
    tag: {
      control: { type: 'select' },
      options: ['button', 'a', 'div'],
    },
    nativeType: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset', ''],
    },
    icon: {
      control: { type: 'text' },
    },
    loadingIcon: {
      control: { type: 'text' },
    },
  },
  args: { onClick: fn() },
};

const container = (val: string) => `
  <div style="margin: 5px">
    ${val}
  </div>
`;

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: 'text' },
    },
  },
  args: {
    type: 'primary',
    content: 'Button',
  },
  render: (args) => ({
    components: { HmButton },
    setup() {
      return { args };
    },
    template: container(
      `<hm-button v-bind="args">{{args.content}}</hm-button>`
    ),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const btn = await canvas.findByRole('button');
    await step(
      'when useThrottle is set to true and button is clicked three times, the onClick should be called once',
      async () => {
        set(args, 'useThrottle', true);
        await userEvent.tripleClick(btn);

        expect(args.onClick).toBeCalledTimes(1);
        clearAllMocks();
      }
    );

    await step(
      'when useThrottle is set to false and button is clicked three times, the onClick should be called three times',
      async () => {
        set(args, 'useThrottle', false);
        await userEvent.tripleClick(btn);

        expect(args.onClick).toBeCalledTimes(3);
        clearAllMocks();
      }
    );

    await step(
      'when disabled is set to true and button is clicked, the onClick should not be called',
      async () => {
        set(args, 'disabled', true);
        await userEvent.click(btn);
        expect(args.onClick).toBeCalledTimes(0);
        set(args, 'disabled', false);
        clearAllMocks();
      }
    );

    await step(
      'when loading is set to true and button is clicked, the onClick should not be called',
      async () => {
        set(args, 'loading', true);
        await userEvent.click(btn);
        expect(args.onClick).toBeCalledTimes(0);
        set(args, 'loading', false);
        clearAllMocks();
      }
    )
  },
};

export const Autofocus: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: 'text',
    },
    autofocus: {
      control: 'boolean',
    },
  },
  args: {
    content: 'Button',
    autofocus: true,
  },
  render: (args) => ({
    components: { HmButton },
    setup() {
      return { args };
    },
    template: `
      <p>请点击浏览器的刷新页面来获取按钮聚焦</p>
      <hm-button data-testid="story-test-btn" v-bind="args">{{args.content}}</hm-button>
    `,
  }),
  play: async ({ args }) => {
    await userEvent.keyboard('{Enter}');
    expect(args.autofocus).toBe(true);
    expect(args.onClick).toHaveBeenCalledOnce();
    clearAllMocks();
  }
}

export const Circle: Story = {
  args: {
    icon: 'search'
  },
  render: (args) => ({
    components: { HmButton },
    setup() {
      return { args };
    },
    template: `
      <hm-button circle v-bind="args"></hm-button>
    `
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step('click button', async () => {
      await userEvent.click(canvas.getByRole('button'))
    })

    expect(args.onClick).toHaveBeenCalled();
  }
}

export default meta;
