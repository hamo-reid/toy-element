export type TextType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type TextSize = 'small' | 'default' | 'large'

export interface TextProps {
  type?: TextType
  size?: TextSize
  truncated?: boolean
  lineClamp?: number
  tag?: string
}