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
        var phoneNumber;
        console.log(control.value);
        if (!control.value) {
            return error;
        }
        try {
            phoneNumber = PhoneNumberUtil.getInstance().parse(control.value.nationalNumber, control.value.isoCode);
        }
        catch (e) {
            return error;
        }
        if (!phoneNumber) {
            return error;
        }
        else {
            if (!PhoneNumberUtil.getInstance().isValidNumberForRegion(phoneNumber, control.value.isoCode)) {
                return error;
            }
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9pb24taW50bC10ZWwtaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFFTCxhQUFhLEdBS2QsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQTtJQWlDQSxDQUFDOzs7OztJQWhDUSwrQkFBSzs7OztJQUFaLFVBQWEsT0FBd0I7O1lBQzdCLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7O1lBQ3pCLFdBQXdCO1FBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2xCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJO1lBQ0YsV0FBVyxHQUFHLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDdEIsQ0FBQztTQUNIO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU07WUFDTCxJQUNFLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLHNCQUFzQixDQUNuRCxXQUFXLEVBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3RCLEVBQ0Q7Z0JBQ0EsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO0lBQ0gsQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQ7SUFBQTtJQWVBLENBQUM7Ozs7O0lBSEMsb0RBQVE7Ozs7SUFBUixVQUFTLE9BQXdCO1FBQy9CLE9BQU8seUJBQXlCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7O2dCQWRGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLEVBQUUsaUNBQWlDOzRCQUM5QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs7SUFLRCx3Q0FBQztDQUFBLEFBZkQsSUFlQztTQUpZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIFZhbGlkYXRvckZuLFxyXG4gIE5HX1ZBTElEQVRPUlMsXHJcbiAgVmFsaWRhdG9yLFxyXG4gIEFic3RyYWN0Q29udHJvbCxcclxuICBGb3JtR3JvdXAsXHJcbiAgVmFsaWRhdGlvbkVycm9ycyxcclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFBob25lTnVtYmVyLCBQaG9uZU51bWJlclV0aWwgfSBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xyXG5cclxuLyogY29uc3QgdmFsaWRhdGVJbnB1dDogVmFsaWRhdG9yRm4gPSAoXHJcbiAgY29udHJvbDogRm9ybUdyb3VwXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9IHsgaW5WYWxpZDogdHJ1ZSB9O1xyXG4gIGNvbnN0IGlzUmVxdWlyZWQgPSBjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9ycy5yZXF1aXJlZDtcclxuICBsZXQgcGhvbmVOdW1iZXI6IFBob25lTnVtYmVyO1xyXG5cclxuICB0cnkge1xyXG4gICAgcGhvbmVOdW1iZXIgPSBQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKS5wYXJzZShcclxuICAgICAgY29udHJvbC52YWx1ZS5udW1iZXIsXHJcbiAgICAgIGNvbnRyb2wudmFsdWUuaXNvQ29kZVxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoIWlzUmVxdWlyZWQpIHtcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGNvbnRyb2wudmFsdWUpIHtcclxuICAgIGlmICghcGhvbmVOdW1iZXIpIHtcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKS5pc1ZhbGlkTnVtYmVyRm9yUmVnaW9uKFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXIsXHJcbiAgICAgICAgICBjb250cm9sLnZhbHVlLmlzb0NvZGVcclxuICAgICAgICApXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm47XHJcbn07ICovXHJcblxyXG5leHBvcnQgY2xhc3MgSW9uSW50bFRlbElucHV0VmFsaWRhdG9ycyB7XHJcbiAgc3RhdGljIHBob25lKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIGNvbnN0IGVycm9yID0geyBwaG9uZTogdHJ1ZSB9O1xyXG4gICAgbGV0IHBob25lTnVtYmVyOiBQaG9uZU51bWJlcjtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjb250cm9sLnZhbHVlKTtcclxuXHJcbiAgICBpZiAoIWNvbnRyb2wudmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHBob25lTnVtYmVyID0gUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkucGFyc2UoXHJcbiAgICAgICAgY29udHJvbC52YWx1ZS5uYXRpb25hbE51bWJlcixcclxuICAgICAgICBjb250cm9sLnZhbHVlLmlzb0NvZGVcclxuICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcGhvbmVOdW1iZXIpIHtcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKS5pc1ZhbGlkTnVtYmVyRm9yUmVnaW9uKFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXIsXHJcbiAgICAgICAgICBjb250cm9sLnZhbHVlLmlzb0NvZGVcclxuICAgICAgICApXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tpb25JbnRsVGVsSW5wdXRWYWxpZF0nLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogSW9uSW50bFRlbElucHV0VmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dFZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIElvbkludGxUZWxJbnB1dFZhbGlkYXRvcnMucGhvbmUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==