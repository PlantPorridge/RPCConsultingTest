import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidatorFn, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[min]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDirective, multi: true }]
})
export class MinDirective implements Validator {
  @Input() min: number;

  validate(control: AbstractControl): { [key: string]: number } {
    if (control.value == null) return null;

    return control.value < this.min ? { 'min': this.min } : null;
  }
}
