export type Language = {
  name: string;
  size: number;
  color: string;
};

export type Repository = {
  id: string;
  name: string;
  description: string;
  languages: Language[];
  totalSize: number;
  stargazerCount: number;
  forkCount: number;
};
