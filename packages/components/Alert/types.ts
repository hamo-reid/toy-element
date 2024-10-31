export type AlertType = 'success' | 'warning' | 'danger' | 'info'

export interface AlertProps {
  title?: string
  type?: AlertType
  description?: string
  closable?: boolean
  center?: boolean
  effect?: 'light' | 'dark'
  showIcon?: boolean
}

export interface AlertEmits {
  (e: 'close'): void
  (e: 'open'): void
}

export interface AlertInstance {
  open(): void
  close(): void
}