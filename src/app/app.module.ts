import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ActurialFormComponent } from './components/acturial-form/acturial-form.component';

import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { ResultsTableComponent } from './components/results-table/results-table.component';
import { MatTableModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';

import { CalculationService } from './services/calculation.service';
import { ResultsService } from './services/results.service';

import { MinDirective } from './validators/min.directive';
import { MaxDirective } from './validators/max.directive';

@NgModule({
  declarations: [
    AppComponent,
    ActurialFormComponent,
    MinDirective,
    MaxDirective,
    ResultsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [CalculationService, ResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
