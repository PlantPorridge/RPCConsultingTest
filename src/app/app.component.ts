import { Component } from '@angular/core';
import { Acturial } from './models/acturial.model';
import { CalculationService } from './services/calculation.service';
import { ResultsService } from './services/results.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private calculationService: CalculationService, private resultsService: ResultsService) { }

  calculating: boolean;

  onSubmitted(event: Acturial){
    this.calculating = true;
    this.calculationService.doCalculation(event).then(result => {
      this.resultsService.saveResult(result);
      this.calculating = false;
    }, (err) => {
      console.error(err);
      this.calculating = false;            
    });
  }
}


