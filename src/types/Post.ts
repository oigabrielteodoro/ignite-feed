export enum ContentType {
  PARAGRAPH = "paragraph",
  LINK = "link",
}

export type Author = {
  avatarUrl: string;
  name: string;
  role: string;
};

export type Content = {
  type: ContentType;
  content: string;
};

export type Post = {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
};
