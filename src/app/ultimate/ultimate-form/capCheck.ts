import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function capitalizedCheck(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }
    const firstLetter = value.charAt(0);
    if (firstLetter !== firstLetter.toUpperCase()) {
      return { capitalized: true };
    }

    return null;
  };
}
