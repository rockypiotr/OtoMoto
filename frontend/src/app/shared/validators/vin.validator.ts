import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export function vinValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const vinPattern = /^[A-HJ-NPR-Z\d]{17}$/;

    if (Validators.required(control) || !vinPattern.test(control.value)) {
      return { invalidVin: true };
    }

    return null;
  };
}
