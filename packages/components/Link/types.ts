export type LinkType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type targetType = '_blank' | '_self' | '_parent' | '_top'

export interface LinkProps {
  type?: LinkType
  href?: string
  target?: targetType
  underline?: boolean
  disabled?: boolean
  icon?: string
}
