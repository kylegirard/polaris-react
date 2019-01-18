export type DropZoneEvent = DragEvent | React.ChangeEvent<HTMLInputElement>;

export enum Size {
  ExtraLarge = 'extraLarge',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}
export interface DropZoneContext {
  width: string;
  type: string;
}
