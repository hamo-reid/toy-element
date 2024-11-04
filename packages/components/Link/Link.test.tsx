import { describe, it, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import type { LinkType, targetType } from './types';
import Link from './Link.vue';
import Icon from '../Icon/Icon.vue';

describe('Link.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Link href="https://example.com">Example</Link>);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.element.tagName.toLowerCase()).toBe('a');
    expect(wrapper.text()).toBe('Example');
    expect(wrapper.attributes('href')).toBe('https://example.com');
  });

  it('should has the correct type class when type prop is set', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info'];
    types.forEach((type) => {
      const wrapper = mount(Link, {
        props: { type: type as LinkType },
      });
      expect(wrapper.classes()).toContain(`hm-link--${type}`);
    });
  });

  it('should has the correct target class when target prop is set', () =>{
    const targets = ['_blank', '_self', '_parent', '_top'];
    targets.forEach((target) => {
      const wrapper = mount(Link, {
        props: { target: target as targetType },
      });
      expect(wrapper.attributes('target')).toBe(target);
    });
  });

  it('should has icon when icon prop is set', () => {
    const wrapper = mount(<Link icon={'edit'}>Edit</Link>, {
      global: {
        stubs: ['HmIcon'],
      },
    });
    const IconElement = wrapper.findComponent(Icon);
    expect(IconElement.exists()).toBe(true);
    expect(IconElement.props('icon')).toBe('edit');
  });

  it('should be disabled when disabled prop is set', () => {
    const wrapper = mount(<Link href='https://example.com' disabled>Disabled</Link>);

    expect(wrapper.find('a').attributes('href')).toBe(void 0);
    expect(wrapper.classes()).toContain('is-disabled');
  });

  it('should be underline when underline prop is set', () => {
    const wrapper = mount(<Link href='https://example.com' underline={true}>Underline</Link>);
    expect(wrapper.element.style.textDecoration).toBe('underline');
    const wrapper2 = mount(<Link href='https://example.com' underline={false}>Underline</Link>);
    expect(wrapper2.element.style.textDecoration).toBe('none');
  })
});
