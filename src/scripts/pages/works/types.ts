export type CardImage = {
  large: [string, string];
  small: [string, string];
};

export type CardMarketing = string | null;
export type CardMarketingKeys =
  | FilterTypes.DEVELOPMENT
  | FilterTypes.DESIGN
  | FilterTypes.CONTEXT
  | FilterTypes.SMM;

export type CardResponse = {
  id: number;
  types: string[];
  title: string;
  kind: string;
  tags: string[];
  text: string;
  imgs: CardImage;
  href: string;
  marketing: {
    [FilterTypes.DEVELOPMENT]: CardMarketing;
    [FilterTypes.DESIGN]: CardMarketing;
    [FilterTypes.CONTEXT]: CardMarketing;
    [FilterTypes.SMM]: CardMarketing;
  };
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
  marketing: {
    [FilterTypes.DEVELOPMENT]: CardMarketing;
    [FilterTypes.DESIGN]: CardMarketing;
    [FilterTypes.CONTEXT]: CardMarketing;
    [FilterTypes.SMM]: CardMarketing;
  };
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
