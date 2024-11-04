import type { StoryObj, Meta, ArgTypes } from '@storybook/vue3';
import { HmLink } from 'toy-element';

const meta: Meta<typeof HmLink> = {
  title: 'Example/Link',
  component: HmLink,
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: { type: 'text' },
    },
    target: {
      control: { type: 'select' },
      options: ['_blank', '_self', '_parent', '_top'],
    },
    type: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'danger', 'warning', 'info'],
    },
    underline: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'text' },
    },
  },
};

export const Default: StoryObj<typeof HmLink> = {
  args: {
    href: 'https://www.baidu.com',
    target: '_blank',
    type: 'default',
    underline: true,
    disabled: false,
  },
  render: (args) => ({
    components: { HmLink },
    setup() {
      return { args };
    },
    template: '<hm-link v-bind="args">Default</hm-link>',
  })
}

export const Icon: StoryObj<typeof HmLink> = {
  args: {
    href: 'https://www.baidu.com',
    target: '_blank',
    type: 'default',
    underline: true,
    disabled: false,
    icon: 'search',
  },
  render: (args) => ({
    components: { HmLink },
    setup() {
      return { args };
    },
    template: '<hm-link v-bind="args">Icon</hm-link>',
  })
}

export default meta;
