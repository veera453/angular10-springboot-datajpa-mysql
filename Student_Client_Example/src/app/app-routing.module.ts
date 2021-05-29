import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'student', component: StudentFormComponent},
  {path: 'search', component: SearchStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
