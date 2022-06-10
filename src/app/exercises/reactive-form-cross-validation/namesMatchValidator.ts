import { AbstractControl, ValidationErrors } from '@angular/forms';
import { first } from 'rxjs';

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
