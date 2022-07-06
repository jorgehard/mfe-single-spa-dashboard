import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { HomeComponent } from './components/home/home.component';
import { PageRoutes } from './enums/page-routes.enum';

const routes: Routes = [
  {
    path: PageRoutes.DASHBOARD,
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: PageRoutes.EXERCISES,
    component: ExercisesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
