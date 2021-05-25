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
export class IonIntlTelInputValidators {
    /**
     * @param {?} control
     * @return {?}
     */
    static phone(control) {
        /** @type {?} */
        const error = { phone: true };
        /** @type {?} */
        const isRequired = control.errors && control.errors.required;
        /** @type {?} */
        let phoneNumber;
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
    }
}
export class IonIntlTelInputValidatorDirective {
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        console.log('validate');
        return IonIntlTelInputValidators.phone(control);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9pb24taW50bC10ZWwtaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFFTCxhQUFhLEdBS2QsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNyRSxNQUFNLE9BQU8seUJBQXlCOzs7OztJQUNwQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQXdCOztjQUM3QixLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFOztjQUN2QixVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVE7O1lBQ3hELFdBQXdCO1FBRTVCLElBQUk7WUFDRixXQUFXLEdBQUcsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FDL0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUN0QixDQUFDO1NBQ0g7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2YsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBRUQsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7aUJBQU07Z0JBQ0wsSUFDRSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsQ0FDbkQsV0FBVyxFQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUN0QixFQUNEO29CQUNBLE9BQU8sS0FBSyxDQUFDO2lCQUNkO2FBQ0Y7U0FDRjtRQUNELE9BQU87SUFDVCxDQUFDO0NBQ0Y7QUFhRCxNQUFNLE9BQU8saUNBQWlDOzs7OztJQUM1QyxRQUFRLENBQUMsT0FBd0I7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7WUFmRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLGlDQUFpQzt3QkFDOUMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVmFsaWRhdG9yRm4sXG4gIE5HX1ZBTElEQVRPUlMsXG4gIFZhbGlkYXRvcixcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtR3JvdXAsXG4gIFZhbGlkYXRpb25FcnJvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFBob25lTnVtYmVyLCBQaG9uZU51bWJlclV0aWwgfSBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xuXG4vKiBjb25zdCB2YWxpZGF0ZUlucHV0OiBWYWxpZGF0b3JGbiA9IChcbiAgY29udHJvbDogRm9ybUdyb3VwXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGVycm9yID0geyBpblZhbGlkOiB0cnVlIH07XG4gIGNvbnN0IGlzUmVxdWlyZWQgPSBjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9ycy5yZXF1aXJlZDtcbiAgbGV0IHBob25lTnVtYmVyOiBQaG9uZU51bWJlcjtcblxuICB0cnkge1xuICAgIHBob25lTnVtYmVyID0gUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkucGFyc2UoXG4gICAgICBjb250cm9sLnZhbHVlLm51bWJlcixcbiAgICAgIGNvbnRyb2wudmFsdWUuaXNvQ29kZVxuICAgICk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoIWlzUmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBpZiAoY29udHJvbC52YWx1ZSkge1xuICAgIGlmICghcGhvbmVOdW1iZXIpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKFxuICAgICAgICAhUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkuaXNWYWxpZE51bWJlckZvclJlZ2lvbihcbiAgICAgICAgICBwaG9uZU51bWJlcixcbiAgICAgICAgICBjb250cm9sLnZhbHVlLmlzb0NvZGVcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuO1xufTsgKi9cblxuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dFZhbGlkYXRvcnMge1xuICBzdGF0aWMgcGhvbmUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IGVycm9yID0geyBwaG9uZTogdHJ1ZSB9O1xuICAgIGNvbnN0IGlzUmVxdWlyZWQgPSBjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9ycy5yZXF1aXJlZDtcbiAgICBsZXQgcGhvbmVOdW1iZXI6IFBob25lTnVtYmVyO1xuXG4gICAgdHJ5IHtcbiAgICAgIHBob25lTnVtYmVyID0gUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkucGFyc2UoXG4gICAgICAgIGNvbnRyb2wudmFsdWUubnVtYmVyLFxuICAgICAgICBjb250cm9sLnZhbHVlLmlzb0NvZGVcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCFpc1JlcXVpcmVkKSB7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udHJvbC52YWx1ZSkge1xuICAgICAgaWYgKCFwaG9uZU51bWJlcikge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIVBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpLmlzVmFsaWROdW1iZXJGb3JSZWdpb24oXG4gICAgICAgICAgICBwaG9uZU51bWJlcixcbiAgICAgICAgICAgIGNvbnRyb2wudmFsdWUuaXNvQ29kZVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbaW9uSW50bFRlbElucHV0VmFsaWRdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBJb25JbnRsVGVsSW5wdXRWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJb25JbnRsVGVsSW5wdXRWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc29sZS5sb2coJ3ZhbGlkYXRlJyk7XG4gICAgcmV0dXJuIElvbkludGxUZWxJbnB1dFZhbGlkYXRvcnMucGhvbmUoY29udHJvbCk7XG4gIH1cbn1cbiJdfQ==