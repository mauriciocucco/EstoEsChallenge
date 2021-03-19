import { Injectable } from '@angular/core';
import { Employee, Manager, Project } from '../interfaces/project.interface';
import { EMPLOYEES, MANAGERS, PROJECTS } from '../mocks/mock';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = PROJECTS;
  managers: Manager[] = MANAGERS;

  constructor() {
    this.loadStorage();
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getProject(id: string) {
    const numberId = new Number(id).valueOf();
    return this.projects.find((project) => project.id === numberId)!;
  }

  getManagers(): Manager[] {
    return this.managers;
  }

  getManager(id: number): Manager {
    return this.managers.find((manager) => manager.id === id)!;
  }

  getEmployees(): Employee[] {
    return EMPLOYEES;
  }

  createProject({ id, date, ...rest }: Project) {
    const project: Project = {
      id: Math.floor(Math.random() * 10000),
      date: new Date(),
      ...rest,
    };
    this.projects.unshift(project);
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  editProyect(formValue: Project) {
    const indexOldProyect = this.projects.findIndex(
      (project) => project.id === formValue.id
    );
    this.projects.splice(indexOldProyect, 1, formValue);
    localStorage.setItem('projects', JSON.stringify(this.projects));
    this.loadStorage();
  }

  deleteProject(id: number) {
    const indexProject = this.projects.findIndex(
      (proyect) => proyect.id === id
    );
    this.projects.splice(indexProject, 1);
    localStorage.setItem('projects', JSON.stringify(this.projects));
    this.loadStorage();
  }

  loadStorage() {
    if (localStorage.getItem('projects')) {
      this.projects = JSON.parse(localStorage.getItem('projects')!);
    }
  }
}
