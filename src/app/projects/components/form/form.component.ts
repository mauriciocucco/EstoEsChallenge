import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, Manager, Project } from '../../interfaces/project.interface';
import { STATUS } from '../../mocks/mock';
import { ProjectsService } from '../../services/projects.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input('section') section: string = '';
  project!: Project;
  managers: Manager[] = [];
  employees: Employee[] = [];
  status: string[] = STATUS;
  form: FormGroup = this.fb.group({
    id: [],
    date: [],
    name: ['', [Validators.required, Validators.minLength(4)]],
    description: ['', [Validators.required, Validators.minLength(4)]],
    manager: ['', Validators.required],
    employee: ['', Validators.required],
    status: [this.status[0]],
  });

  constructor(
    private fb: FormBuilder,
    private projectsService: ProjectsService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.managers = this.projectsService.getManagers();
    this.employees = this.projectsService.getEmployees();
    if (this.section === 'edit') {
      this.project = this.projectsService.getProject(
        this.route.snapshot.params.id
      );

      this.form.setValue({
        id: this.project.id,
        date: this.project.date,
        name: this.project.name,
        description: this.project.description,
        manager: this.project.manager,
        employee: this.project.employee,
        status: this.project.status,
      });
    }
  }

  noValidField(field: string) {
    return this.form.get(field)?.errors && this.form.get(field)?.touched;
  }

  getErrorMessage(field: string) {
    if (this.form.get(field)?.hasError('required')) {
      return `Please, enter a ${field}`;
    } else if (this.form.get(field)?.hasError('minlength')) {
      return 'The minimun is 4 characters';
    } else {
      return 'Error';
    }
  }

  createProject() {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    this.projectsService.createProject(this.form.value);
    this.snackbarService.showSnackbar('Project created');
    this.router.navigate(['/projects/home']);
  }

  editProject() {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    this.projectsService.editProyect(this.form.value);
    this.snackbarService.showSnackbar('Project updated');
    this.router.navigate(['projects/home']);
  }
}
