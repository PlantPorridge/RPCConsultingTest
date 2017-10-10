import { Injectable } from '@angular/core';
import { CalculationResult } from '../models/calculation-result';
import { Acturial } from '../models/acturial.model';
import { ExecutionType } from '../enums/execution-type.enum';

@Injectable()
export class CalculationService {

  constructor() { }

  doCalculation(acturial: Acturial): Promise<CalculationResult> {
    return new Promise(resolve => {
      let todaysDate = new Date();      
      let benchmarkOne = (acturial.mainLimit / 100) * (acturial.executionType == ExecutionType.Simple ? 1 : 2); 
      let benchmarkTwo = (acturial.mainRetention / 100) * (acturial.executionType == ExecutionType.Simple ? 1 : 2); 
      let result = new CalculationResult(todaysDate, benchmarkOne, benchmarkTwo);

      // Simulate server latency with 3 second delay
      setTimeout(() => resolve(result), 3000);
    });
  }

}
