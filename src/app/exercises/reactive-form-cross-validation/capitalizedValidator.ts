import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function CapitalizedValidator(): ValidatorFn {
  return (formControl: AbstractControl): ValidationErrors | null => {
    let firstChar: string = formControl.value.charAt(0);
    console.log(firstChar);
    if (firstChar && firstChar !== firstChar.toUpperCase()) {
      return { capitalized: true };
    }
    return null;
  };
}
