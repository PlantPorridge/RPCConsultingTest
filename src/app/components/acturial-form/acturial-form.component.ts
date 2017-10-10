import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Acturial } from '../../models/acturial.model';
import { ExecutionType } from '../../enums/execution-type.enum';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-acturial-form',
  templateUrl: './acturial-form.component.html',
  styleUrls: ['./acturial-form.component.css']
})
export class ActurialFormComponent implements OnInit {

  @Output() onSubmitted = new EventEmitter<Acturial>();

  constructor() { }

  millionSuffix = ",000,000.00";

  acturial: Acturial = new Acturial(null, null, ExecutionType.Simple);

  executionTypes: Array<string>;

  ngOnInit() {
    this.executionTypes = this.enumToArray(ExecutionType);
  }

  onSubmit() {
    console.log("Submitting: " + JSON.stringify(this.acturial));    
    this.onSubmitted.emit(this.acturial);
  }

  enumToArray(object: {}) {
    let keys = Object.keys(object);
    return keys.slice(keys.length / 2);
  }

  onExecutionTypeChange($event: string) {
    this.acturial.executionType = Number.parseInt($event);
  }

  getNumberErrorMessage(errors: any): string {
    if (errors.required) {
      return "is required";
    }

    if (errors.min != null) {
      return "must be no less than " + errors.min + this.millionSuffix;
    }

    if (errors.max != null) {
      return "must be no greater than " + errors.max + this.millionSuffix;
    }
  }

  getSelectErrorMessage(errors: any): string {
    if (errors.required) {
      return "is required";
    }
  }

}
