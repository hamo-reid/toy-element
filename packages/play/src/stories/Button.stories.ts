import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { fn } from '@storybook/test';

import { HmButton } from 'toy-element';

const meta: Meta<typeof HmButton> = {
  title: "Example/Button",
  component: HmButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    size: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    useThrottle: {
      control: "boolean",
    },
    throttleDuration: {
      control: "number",
    },
    autofocus: {
      control: "boolean",
    },
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset", ""],
    },
    icon: {
      control: { type: "text" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
  },
  args: { onClick: fn() },
};

const container = (val: string) => `
  <div style="margin: 5px">
    ${val}
  </div>
`

export const Default: StoryObj & { args: { content: string, type: string } } = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  args: {
    type: "primary",
    content: "Button",
  },
  render: (args) => ({
    components: { HmButton },
    setup() {
      return { args }
    },
    template: container(
      `<hm-button v-bind="args">{{args.content}}</hm-button>`
    )
  }),
}

export default meta






