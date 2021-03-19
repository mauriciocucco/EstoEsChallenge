import { Pipe, PipeTransform } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  constructor(private projectsService: ProjectsService) {}

  transform(id: number): string {
    return this.projectsService.getManager(id).imageUrl;
  }
}
