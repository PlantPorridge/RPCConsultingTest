import { Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { CalculationResult } from '../models/calculation-result';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ResultsService {

  private database: ExampleDatabase;
  dataSource: ExampleDataSource;

  constructor() {
    this.database = new ExampleDatabase();
    this.dataSource = new ExampleDataSource(this.database);
  }

  saveResult(result: CalculationResult) {
    this.database.saveResult(result);
  }

}

export class ExampleDataSource extends DataSource<any> {

  constructor(private _exampleDatabase: ExampleDatabase) {
    super();
  }

  /* Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<CalculationResult[]> {
    return Observable.merge(this._exampleDatabase.dataChange);
  }

  disconnect() { }
}

class ExampleDatabase {
  /* Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<CalculationResult[]> = new BehaviorSubject<CalculationResult[]>([]);
  get data(): CalculationResult[] { return this.dataChange.value; }

  constructor() {
    //Populate with some default results.
    let yesterday = new Date(Date.now() - 864e5);
    this.saveResult(new CalculationResult(yesterday, 0.5, 0.1));
    this.saveResult(new CalculationResult(yesterday, 0.41, 0.23));
  }

  /* Adds a new result to the database. */
  saveResult(result: CalculationResult) {
    const copiedData = this.data.slice();
    copiedData.push(result);
    this.dataChange.next(copiedData);
  }
}