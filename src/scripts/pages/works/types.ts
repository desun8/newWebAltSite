export type CardResponse = {
  id: number;
  types: string[];
  title: string;
  kind: string;
  tags: string[];
  text: string;
  imgPath: {
    large: [string, string];
    small: [string, string];
  };
  href: string;
};

export type Card = {
  id: number;
  types: string[];
  title: string;
  kind: string;
  tags: string[];
  text: string;
  imgPath: [string, string];
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
