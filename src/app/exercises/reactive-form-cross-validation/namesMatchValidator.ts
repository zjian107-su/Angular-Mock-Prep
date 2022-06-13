import { AbstractControl, ValidationErrors } from '@angular/forms';

export function NamesMatchValidator(
  controlGroup: AbstractControl
): ValidationErrors | null {
  const firstName = controlGroup.get('firstName')?.value;
  const lastName = controlGroup.get('lastName')?.value;

  if (firstName && lastName && firstName === lastName) {
    return { namesMatch: true };
  }

  return null;
}
