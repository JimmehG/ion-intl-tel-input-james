import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';
export declare class IonIntlTelInputValidators {
    static phone(control: AbstractControl): ValidationErrors | null;
}
export declare class IonIntlTelInputValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null;
}
