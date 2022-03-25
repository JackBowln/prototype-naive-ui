export interface CardProps{
  Card: Card[]
}
export interface Card {
  title: string,
  label: string, 
  collects?: string,
  approves?: string,
  disaproves?: string,
  lastCollect?: Date
}
