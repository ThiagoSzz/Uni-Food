export enum TagTypes {
  Positive = 'positive',
  Negative = 'negative',
  Neutral = 'neutral'
}

export interface Tag {
  name: string;
  type: TagTypes;
}
