import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidatorFn, NG_VALIDATORS } from '@angular/forms';
import { isEmptyInputValue } from './min.directive';

/**
 * NOTE: The built-in Angular Validators for min and max do not seem to work in 4.4.4. It appears that they are not exported as validators but their source code still exists. 
 * So here I have built a custom validator using that source code.
 */
@Directive({
  selector: '[max]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxDirective, multi: true }]
})
export class MaxDirective implements Validator {
  @Input() max: number;

  validate(control: AbstractControl): { [key: string]: number } {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(this.max)) return null;

    const value = parseFloat(control.value);

    return !isNaN(value) && control.value > this.max ? { 'max': this.max } : null;
  }
}
