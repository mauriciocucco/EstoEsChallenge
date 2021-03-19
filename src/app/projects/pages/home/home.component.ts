import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../../services/projects.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private projectsService: ProjectsService,
    private snackbarService: SnackbarService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }

  delete(id: number, name: string) {
    const dialog = this.dialog.open(DialogComponent, {
      width: '400px',
      data: name,
    });

    dialog.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      this.projectsService.deleteProject(id);
      this.snackbarService.showSnackbar('Project deleted');
      this.projects = this.projectsService.getProjects();
    });
  }
}
