import {
  ValidatorFn,
  ValidationErrors,
  AbstractControl,
  FormArray,
} from '@angular/forms';

export function badLengthValidator(min: number, max: number): ValidatorFn {
  return function (control: AbstractControl): ValidationErrors | null {
    // const length = (control as FormArray).length;
    const length = (control as FormArray).length;
    if (length > max || length < min) {
      return { badLength: { min, max, actual: length } };
    } else {
      return null;
    }
  };
}
