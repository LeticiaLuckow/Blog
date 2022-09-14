export type PostType = {
  id: number;
  attributes: Attributes;
};

export interface Attributes {
  Title: string;
  Image: string;
  ShortDescription: string;
  LongDescription: string;
  DatePost: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
