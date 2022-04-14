export interface Person {
  id: number;
  imgSrc: string;
  firstName: string;
  lastName: string;
  role: string;
  description: string;
  phone: string;
  email: string;
}

export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}
