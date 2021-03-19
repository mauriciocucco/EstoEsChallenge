import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: Project[], filter: string): any {
    if (!filter || !items) {
      return items;
    }
    return items.filter((project) =>
      project.name.toLowerCase().includes(filter)
    );
  }
}
