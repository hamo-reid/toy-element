import type { Component, Ref } from 'vue';
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ButtonSize = 'small' | 'default' | 'large';
export type NativeType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  size?: ButtonSize;
  nativeType?: NativeType;
  disabled?: boolean;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  loading?: boolean;
  icon?: string;
  loadingIcon?: string;
  autofocus?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
}

export interface ButtonEmits {
  (e: 'click', event: MouseEvent): void;
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>;
}