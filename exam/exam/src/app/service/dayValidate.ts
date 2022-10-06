import {AbstractControl, ValidationErrors} from '@angular/forms';

export function date(control: AbstractControl): ValidationErrors | null {
  const dateValid = new Date(control.value);
  if (new Date().getFullYear() - dateValid.getFullYear() >= 18) {
    return null;
  } else {
    return {dateLessThan18: true};
  }
}
