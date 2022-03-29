import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatrizComponent } from './components/matriz/matriz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatrizCongruenciaComponent } from './components/matriz-congruencia/matriz-congruencia.component';
import { NgMaterialModule } from '../material.module';
import { MatrixCongruenciaComponent } from './components/matrix-congruencia/matrix-congruencia.component';

@NgModule({
  declarations: [
    AppComponent,
    MatrizComponent,
    MatrizCongruenciaComponent,
    MatrixCongruenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
