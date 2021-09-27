export type CardImage = {
  large: [string, string];
  small: [string, string];
};

export type CardResponse = {
  id: number;
  types: string[];
  title: string;
  kind: string;
  tags: string[];
  text: string;
  imgPath: CardImage;
  href: string;
};

export type Card = {
  id: number;
  types: string[];
  title: string;
  kind: string;
  tags: string[];
  text: string;
  imgPath: CardImage;
  href: string;
};

export enum FilterTypes {
  ALL = "все",
  DEVELOPMENT = "разработка",
  DESIGN = "дизайн",
  CONTEXT = "контекст",
  SMM = "smm",
}

export type FilterItem = {
  value: string;
  name: string;
  checked: boolean;
};
