import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidatorFn, NG_VALIDATORS } from '@angular/forms';

/**
 * NOTE: The built-in Angular Validators for min and max do not seem to work in 4.4.4. It appears that they are not exported as validators but their source code still exists. 
 * So here I have built a custom validator using that source code.
 */
@Directive({
  selector: '[min]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDirective, multi: true }]
})
export class MinDirective implements Validator {
  @Input() min: number;

  validate(control: AbstractControl): { [key: string]: number } {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(this.min)) return null;

    const value = parseFloat(control.value);

    return !isNaN(value) && control.value < this.min ? { 'min': this.min } : null;
  }
}

export function isEmptyInputValue(value) {
  return value == null || value.length === 0;
}