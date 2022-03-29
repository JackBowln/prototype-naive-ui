export interface iCard {
  title: string
  label: string
  collects?: string
  approves?: string
  disaproves?: string
  lastCollect?: string | Date
  isDisabled: boolean
}
