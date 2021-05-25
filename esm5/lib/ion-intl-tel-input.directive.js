/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { NG_VALIDATORS, } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';
/* const validateInput: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const error = { inValid: true };
  const isRequired = control.errors && control.errors.required;
  let phoneNumber: PhoneNumber;

  try {
    phoneNumber = PhoneNumberUtil.getInstance().parse(
      control.value.number,
      control.value.isoCode
    );
  } catch (e) {
    if (!isRequired) {
      return error;
    }
  }

  if (control.value) {
    if (!phoneNumber) {
      return error;
    } else {
      if (
        !PhoneNumberUtil.getInstance().isValidNumberForRegion(
          phoneNumber,
          control.value.isoCode
        )
      ) {
        return error;
      }
    }
  }
  return;
}; */
var /* const validateInput: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const error = { inValid: true };
  const isRequired = control.errors && control.errors.required;
  let phoneNumber: PhoneNumber;

  try {
    phoneNumber = PhoneNumberUtil.getInstance().parse(
      control.value.number,
      control.value.isoCode
    );
  } catch (e) {
    if (!isRequired) {
      return error;
    }
  }

  if (control.value) {
    if (!phoneNumber) {
      return error;
    } else {
      if (
        !PhoneNumberUtil.getInstance().isValidNumberForRegion(
          phoneNumber,
          control.value.isoCode
        )
      ) {
        return error;
      }
    }
  }
  return;
}; */
IonIntlTelInputValidators = /** @class */ (function () {
    function IonIntlTelInputValidators() {
    }
    /**
     * @param {?} control
     * @return {?}
     */
    IonIntlTelInputValidators.phone = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var error = { phone: true };
        /** @type {?} */
        var isRequired = control.errors && control.errors.required;
        /** @type {?} */
        var phoneNumber;
        try {
            phoneNumber = PhoneNumberUtil.getInstance().parse(control.value.number, control.value.isoCode);
        }
        catch (e) {
            if (!isRequired) {
                return error;
            }
        }
        if (control.value) {
            if (!phoneNumber) {
                return error;
            }
            else {
                if (!PhoneNumberUtil.getInstance().isValidNumberForRegion(phoneNumber, control.value.isoCode)) {
                    return error;
                }
            }
        }
        return;
    };
    return IonIntlTelInputValidators;
}());
/* const validateInput: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const error = { inValid: true };
  const isRequired = control.errors && control.errors.required;
  let phoneNumber: PhoneNumber;

  try {
    phoneNumber = PhoneNumberUtil.getInstance().parse(
      control.value.number,
      control.value.isoCode
    );
  } catch (e) {
    if (!isRequired) {
      return error;
    }
  }

  if (control.value) {
    if (!phoneNumber) {
      return error;
    } else {
      if (
        !PhoneNumberUtil.getInstance().isValidNumberForRegion(
          phoneNumber,
          control.value.isoCode
        )
      ) {
        return error;
      }
    }
  }
  return;
}; */
export { IonIntlTelInputValidators };
var IonIntlTelInputValidatorDirective = /** @class */ (function () {
    function IonIntlTelInputValidatorDirective() {
    }
    /**
     * @param {?} control
     * @return {?}
     */
    IonIntlTelInputValidatorDirective.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        console.log('validate');
        return IonIntlTelInputValidators.phone(control);
    };
    IonIntlTelInputValidatorDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[ionIntlTelInputValid]',
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: IonIntlTelInputValidatorDirective,
                            multi: true,
                        },
                    ],
                },] }
    ];
    return IonIntlTelInputValidatorDirective;
}());
export { IonIntlTelInputValidatorDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9pb24taW50bC10ZWwtaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFFTCxhQUFhLEdBS2QsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQTtJQWlDQSxDQUFDOzs7OztJQWhDUSwrQkFBSzs7OztJQUFaLFVBQWEsT0FBd0I7O1lBQzdCLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7O1lBQ3ZCLFVBQVUsR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUTs7WUFDeEQsV0FBd0I7UUFFNUIsSUFBSTtZQUNGLFdBQVcsR0FBRyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUMvQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDcEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3RCLENBQUM7U0FDSDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDZixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDaEIsT0FBTyxLQUFLLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxJQUNFLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLHNCQUFzQixDQUNuRCxXQUFXLEVBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3RCLEVBQ0Q7b0JBQ0EsT0FBTyxLQUFLLENBQUM7aUJBQ2Q7YUFDRjtTQUNGO1FBQ0QsT0FBTztJQUNULENBQUM7SUFDSCxnQ0FBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVEO0lBQUE7SUFnQkEsQ0FBQzs7Ozs7SUFKQyxvREFBUTs7OztJQUFSLFVBQVMsT0FBd0I7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkFmRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLGlDQUFpQzs0QkFDOUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7O0lBTUQsd0NBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQUxZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVmFsaWRhdG9yRm4sXG4gIE5HX1ZBTElEQVRPUlMsXG4gIFZhbGlkYXRvcixcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtR3JvdXAsXG4gIFZhbGlkYXRpb25FcnJvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFBob25lTnVtYmVyLCBQaG9uZU51bWJlclV0aWwgfSBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xuXG4vKiBjb25zdCB2YWxpZGF0ZUlucHV0OiBWYWxpZGF0b3JGbiA9IChcbiAgY29udHJvbDogRm9ybUdyb3VwXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGVycm9yID0geyBpblZhbGlkOiB0cnVlIH07XG4gIGNvbnN0IGlzUmVxdWlyZWQgPSBjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9ycy5yZXF1aXJlZDtcbiAgbGV0IHBob25lTnVtYmVyOiBQaG9uZU51bWJlcjtcblxuICB0cnkge1xuICAgIHBob25lTnVtYmVyID0gUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkucGFyc2UoXG4gICAgICBjb250cm9sLnZhbHVlLm51bWJlcixcbiAgICAgIGNvbnRyb2wudmFsdWUuaXNvQ29kZVxuICAgICk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoIWlzUmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBpZiAoY29udHJvbC52YWx1ZSkge1xuICAgIGlmICghcGhvbmVOdW1iZXIpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKFxuICAgICAgICAhUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkuaXNWYWxpZE51bWJlckZvclJlZ2lvbihcbiAgICAgICAgICBwaG9uZU51bWJlcixcbiAgICAgICAgICBjb250cm9sLnZhbHVlLmlzb0NvZGVcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuO1xufTsgKi9cblxuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dFZhbGlkYXRvcnMge1xuICBzdGF0aWMgcGhvbmUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IGVycm9yID0geyBwaG9uZTogdHJ1ZSB9O1xuICAgIGNvbnN0IGlzUmVxdWlyZWQgPSBjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9ycy5yZXF1aXJlZDtcbiAgICBsZXQgcGhvbmVOdW1iZXI6IFBob25lTnVtYmVyO1xuXG4gICAgdHJ5IHtcbiAgICAgIHBob25lTnVtYmVyID0gUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkucGFyc2UoXG4gICAgICAgIGNvbnRyb2wudmFsdWUubnVtYmVyLFxuICAgICAgICBjb250cm9sLnZhbHVlLmlzb0NvZGVcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCFpc1JlcXVpcmVkKSB7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udHJvbC52YWx1ZSkge1xuICAgICAgaWYgKCFwaG9uZU51bWJlcikge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIVBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpLmlzVmFsaWROdW1iZXJGb3JSZWdpb24oXG4gICAgICAgICAgICBwaG9uZU51bWJlcixcbiAgICAgICAgICAgIGNvbnRyb2wudmFsdWUuaXNvQ29kZVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbaW9uSW50bFRlbElucHV0VmFsaWRdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBJb25JbnRsVGVsSW5wdXRWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJb25JbnRsVGVsSW5wdXRWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc29sZS5sb2coJ3ZhbGlkYXRlJyk7XG4gICAgcmV0dXJuIElvbkludGxUZWxJbnB1dFZhbGlkYXRvcnMucGhvbmUoY29udHJvbCk7XG4gIH1cbn1cbiJdfQ==