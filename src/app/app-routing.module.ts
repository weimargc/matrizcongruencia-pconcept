import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatrixCongruenciaComponent } from './components/matrix-congruencia/matrix-congruencia.component';
import { MatrizCongruenciaComponent } from './components/matriz-congruencia/matriz-congruencia.component';
import { MatrizComponent } from './components/matriz/matriz.component';

const routes: Routes = [
  {path:'matrix',component: MatrizComponent},
  {path:'matriz',component: MatrizCongruenciaComponent},
  {path:'',component: MatrixCongruenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
