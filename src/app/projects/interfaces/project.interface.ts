export interface Project {
  id: number;
  date: Date;
  name: string;
  description: string;
  manager: number;
  employee: number;
  status: string;
}

export interface Manager {
  id: number;
  fullname: string;
  imageUrl: string;
}

export interface Employee {
  id: number;
  fullname: string;
}
