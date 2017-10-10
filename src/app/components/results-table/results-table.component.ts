import { Component, OnInit } from '@angular/core';
import { CalculationResult } from '../../models/calculation-result';
import { DataSource } from '@angular/cdk/collections';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {

  constructor(private resultsService: ResultsService) { }

  displayedColumns: Array<string>;
  datasource: DataSource<CalculationResult>;

  ngOnInit() {
    this.displayedColumns = ['referenceDate', 'benchmarkOne', 'benchmarkTwo'];   
    this.datasource = this.resultsService.dataSource;
  }
}


