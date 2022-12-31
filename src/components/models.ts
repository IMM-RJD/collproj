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
  homepage?: string;
  homepageText?: string;
}
export interface Event {
  id: number;
  imgSrc: string;
  imgPosition?: string;
  imgContainerWidth?: string;
  title: string;
  date: Date;
  dateText?: string;
  link?: string;
  linkText?: string;
  location: string;
  description?: string;
  phone?: string;
  email?: string;
  emailText?: string;
  expanded?: boolean;
  allowShare?: boolean;
  canceled?: boolean;
}
