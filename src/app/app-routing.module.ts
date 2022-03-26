import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatrizComponent } from './components/matriz/matriz.component';

const routes: Routes = [
  {path:'matrix',component: MatrizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
