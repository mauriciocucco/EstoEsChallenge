import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormComponent } from './components/form/form.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';
import { ImagePipe } from './pipes/image.pipe';
import { NamePipe } from './pipes/name.pipe';
import { ProjectsRoutingModule } from './projects-routing.module';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    EditComponent,
    FormComponent,
    ImagePipe,
    NamePipe,
    DialogComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProjectsModule {}
