import type { Meta, StoryObj } from '@storybook/vue3';
import { HmCollapse, HmCollapseItem } from 'toy-element';
import 'toy-element/dist/theme/Collapse.css'

type Story = StoryObj<typeof HmCollapse>;
const meta: Meta<typeof HmCollapse> = {
  title: "Example/Collapse",
  component: HmCollapse,
  subcomponents: { HmCollapseItem },
  tags: ["autodocs"],
};

export const Default: Story = {
  render: (args: any) => ({
    components: {
      HmCollapse,
      HmCollapseItem,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
    <hm-collapse v-bind="args">
      <hm-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </hm-collapse-item>
      <hm-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </hm-collapse-item>
      <hm-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </hm-collapse-item>
    </hm-collapse>
    `,
  }),
  args: {
    accordion: true,
    modelValue: ["a"],
  },
};


export default meta;