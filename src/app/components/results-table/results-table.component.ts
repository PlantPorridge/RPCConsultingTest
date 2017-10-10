import { Component, OnInit } from '@angular/core';
import { CalculationResult } from '../../models/calculation-result';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ResultsService, ExampleDataSource } from '../../services/results.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {

  constructor(private resultsService: ResultsService) { }

  displayedColumns: Array<string>;
  datasource: ExampleDataSource;

  ngOnInit() {
    this.displayedColumns = ['referenceDate', 'benchmarkOne', 'benchmarkTwo'];   
    this.datasource = this.resultsService.dataSource;
  }
}


