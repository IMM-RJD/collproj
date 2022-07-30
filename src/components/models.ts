export interface Person {
  id: number;
  imgSrc: string;
  imgPosition?: string;
  firstName: string;
  lastName: string;
  role: string;
  description: string;
  phone?: string;
  email?: string;
}
export interface Event {
  id: number;
  imgSrc: string;
  imgPosition?: string;
  imgContainerWidth?: string;
  title: string;
  dateText: string;
  link?: string;
  linkText?: string;
  place: string;
  description: string;
  phone?: string;
  email?: string;
  emailText?: string;
  expanded: boolean;
  past?: boolean;
  allowShare?: boolean;
}
