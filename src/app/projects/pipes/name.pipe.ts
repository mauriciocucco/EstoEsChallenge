import { Pipe, PipeTransform } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Pipe({
  name: 'name',
})
export class NamePipe implements PipeTransform {
  constructor(private projectsService: ProjectsService) {}

  transform(id: number): string {
    return this.projectsService.getManager(id).fullname;
  }
}
