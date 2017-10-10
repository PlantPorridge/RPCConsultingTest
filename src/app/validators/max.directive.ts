import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidatorFn, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[max]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxDirective, multi: true }]
})
export class MaxDirective implements Validator {
  @Input() max: number;

  validate(control: AbstractControl): { [key: string]: number } {
    if (control.value == null) return null;

    return control.value > this.max ? { 'max': this.max } : null;
  }
}
