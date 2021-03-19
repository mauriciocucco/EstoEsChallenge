import { Employee, Manager, Project } from '../interfaces/project.interface';

export const MANAGERS: Manager[] = [
  {
    id: 1,
    fullname: 'Mauricio Cucco',
    imageUrl:
      'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg',
  },
  {
    id: 2,
    fullname: 'Ignacio Truffa',
    imageUrl: 'https://realestatemarket.com.mx/images/influencers/mark.jpg',
  },
];

export const EMPLOYEES: Employee[] = [
  {
    id: 1,
    fullname: 'Carlos Gonzalez',
  },
  {
    id: 2,
    fullname: 'Pablo Pereira',
  },
  {
    id: 3,
    fullname: 'Mario Ledesma',
  },
  {
    id: 4,
    fullname: 'Mauro Zárate',
  },
];

export const STATUS: string[] = ['Enabled', 'In progress', 'Finished'];

export const PROJECTS: Project[] = [
  {
    id: 1,
    date: new Date(),
    name: 'Landing Page',
    description: 'Proyecto que busca atraer clientes a la empresa',
    manager: 1,
    employee: 1,
    status: STATUS[0],
  },
  {
    id: 2,
    date: new Date(),
    name: 'E-commerce',
    description:
      'Una tienda virtual para vender y comprar artículos de electrónica',
    manager: 2,
    employee: 2,
    status: STATUS[2],
  },
];
