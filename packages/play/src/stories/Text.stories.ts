import type { StoryObj, Meta, ArgTypes } from '@storybook/vue3';
import { ref, watch } from 'vue';
import {
  within,
  expect,
} from '@storybook/test';
import { HmText } from 'toy-element';
import 'toy-element/dist/theme/Text.css'

type Story = StoryObj<typeof HmText>;

const meta: Meta<typeof HmText> = {
  title: 'Example/Text',
  component: HmText,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'success', 'danger', 'warning', 'info'],
    },
    size: {
      control: 'select',
      options: ['large', 'default', 'small'],
    },
    truncated: {
      control: 'boolean',
    },
    lineClamp: {
      control: 'number',
    },
    tag: {
      control: 'select',
      options: ['span', 'p', 'b', 'i', 'mark', 'sub', 'sup', 'del', 'ins'],
    },
  },
};



export const Default: Story = {
  args: {
    type: 'primary',
    size: 'default',
    truncated: false,
  },
  render: (args) => ({
    components: { HmText },
    setup() {
      return { args };
    },
    template: '<hm-text v-bind="args">Hello World</hm-text>',
  })
}


export default meta;