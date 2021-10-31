export type Item = {
  id: number;
  types: string[];
  title: string;
  kind: string;
  tags: string[];
  text: string;
  img: string;
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

export type ItemInfo = {
  img: string;
  kind: string;
  tags: string;
  text: string;
};
