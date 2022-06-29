import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export function badPasswordValidator(): ValidatorFn {
  return function (control: AbstractControl): ValidationErrors | null {
    let value = control.value;

    if (!value) {
      return null; // Return null if the field is empty. You might want to combine this with Angular's built-in required validator.
    }

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpcialChar = /[!@#$%^&*()]/.test(value);

    // OR, concise but harder to send error message
    const passAll =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,}$/.test(value);
    console.log(passAll);

    if (!passAll) {
      return {
        badPassword: {
          hasUpperCase,
          hasLowerCase,
          hasNumber,
          hasSpcialChar,
        },
      };
    }

    return null;
  };
}
