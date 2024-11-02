import { describe, it, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import type { TextSize, TextType } from './types';

import Text from './Text.vue';

describe('Text.vue', () => {
  it('should render correctly', () => {
    const wrapper = mount(()=> <Text>Hello World</Text>);
    expect(wrapper.text()).toBe('Hello World');
  })

  it('should has the correct class when type prop is set', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info'];
    types.forEach((type) => {
      const wrapper = mount(Text, {
        props: {
          type: type as TextType,
        }
      });
      expect(wrapper.classes()).toContain(`hm-text--${type}`);
    })
  })

  it('should has the correct class when size prop is set', () => {
    const sizes = ['small', 'large'];
    sizes.forEach((size) => {
      const wrapper = mount(Text, {
        props: {
          size: size as TextSize
        }
      });
      expect(wrapper.classes()).toContain(`hm-text--${size}`);
    })
  })

  it('should has the correct class when truncated is true', () => {
    const wrapper = mount(Text, {
      props: {
        truncated: true
      }
    });
    expect(wrapper.classes()).toContain('is-truncated');
  })

  it('should has the correct style when truncated and line-clamp prop is set',() => {
    const wrapper = mount(Text, {
      props: {
        truncated: true,
        lineClamp: 3
      }
    });
    expect(wrapper.element.style.cssText).toContain('-webkit-line-clamp: 3;');

  })

  it('should renders the custom tag when tag prop is set', () => {
    const wrapper = mount(Text, {
      props: {
        tag: 'b'
      }
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe('b');
  })
});