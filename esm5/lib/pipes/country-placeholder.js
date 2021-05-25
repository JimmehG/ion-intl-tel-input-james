/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
var CountryPlaceholder = /** @class */ (function () {
    function CountryPlaceholder() {
    }
    /**
     * @param {?} country
     * @param {?} inputPlaceholder
     * @param {?} separateDialCode
     * @param {?} fallbackPlaceholder
     * @return {?}
     */
    CountryPlaceholder.prototype.transform = /**
     * @param {?} country
     * @param {?} inputPlaceholder
     * @param {?} separateDialCode
     * @param {?} fallbackPlaceholder
     * @return {?}
     */
    function (country, inputPlaceholder, separateDialCode, fallbackPlaceholder) {
        if (inputPlaceholder && inputPlaceholder.length > 0) {
            return inputPlaceholder;
        }
        /** @type {?} */
        var phoneUtil = PhoneNumberUtil.getInstance();
        try {
            /** @type {?} */
            var placeholder = phoneUtil.format(phoneUtil.getExampleNumber(country.isoCode), PhoneNumberFormat.INTERNATIONAL);
            if (placeholder) {
                if (separateDialCode) {
                    return placeholder.substr(placeholder.indexOf(' ') + 1);
                }
                else {
                    return placeholder;
                }
            }
        }
        catch (e) {
            return fallbackPlaceholder;
        }
    };
    CountryPlaceholder.decorators = [
        { type: Pipe, args: [{ name: 'countryPlaceholder' },] }
    ];
    return CountryPlaceholder;
}());
export { CountryPlaceholder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9jb3VudHJ5LXBsYWNlaG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHM0U7SUFBQTtJQXFCQSxDQUFDOzs7Ozs7OztJQW5CQyxzQ0FBUzs7Ozs7OztJQUFULFVBQVUsT0FBaUIsRUFBRSxnQkFBd0IsRUFBRSxnQkFBeUIsRUFBRSxtQkFBMkI7UUFDM0csSUFBSSxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELE9BQU8sZ0JBQWdCLENBQUM7U0FDekI7O1lBRUssU0FBUyxHQUFHLGVBQWUsQ0FBQyxXQUFXLEVBQUU7UUFDL0MsSUFBSTs7Z0JBQ0ksV0FBVyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7WUFDbEgsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSSxnQkFBZ0IsRUFBRTtvQkFDcEIsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3pEO3FCQUFNO29CQUNMLE9BQU8sV0FBVyxDQUFDO2lCQUNwQjthQUNGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sbUJBQW1CLENBQUM7U0FDNUI7SUFDSCxDQUFDOztnQkFwQkYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFDOztJQXFCbEMseUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQaG9uZU51bWJlckZvcm1hdCwgUGhvbmVOdW1iZXJVdGlsIH0gZnJvbSAnZ29vZ2xlLWxpYnBob25lbnVtYmVyJztcbmltcG9ydCB7IENvdW50cnlJIH0gZnJvbSAnLi8uLi9tb2RlbHMvY291bnRyeS5tb2RlbCc7XG5cbkBQaXBlKHtuYW1lOiAnY291bnRyeVBsYWNlaG9sZGVyJ30pXG5leHBvcnQgY2xhc3MgQ291bnRyeVBsYWNlaG9sZGVyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShjb3VudHJ5OiBDb3VudHJ5SSwgaW5wdXRQbGFjZWhvbGRlcjogc3RyaW5nLCBzZXBhcmF0ZURpYWxDb2RlOiBib29sZWFuLCBmYWxsYmFja1BsYWNlaG9sZGVyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChpbnB1dFBsYWNlaG9sZGVyICYmIGlucHV0UGxhY2Vob2xkZXIubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGlucHV0UGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgcGhvbmVVdGlsID0gUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gcGhvbmVVdGlsLmZvcm1hdChwaG9uZVV0aWwuZ2V0RXhhbXBsZU51bWJlcihjb3VudHJ5Lmlzb0NvZGUpLCBQaG9uZU51bWJlckZvcm1hdC5JTlRFUk5BVElPTkFMKTtcbiAgICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgICBpZiAoc2VwYXJhdGVEaWFsQ29kZSkge1xuICAgICAgICAgIHJldHVybiBwbGFjZWhvbGRlci5zdWJzdHIocGxhY2Vob2xkZXIuaW5kZXhPZignICcpICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbGxiYWNrUGxhY2Vob2xkZXI7XG4gICAgfVxuICB9XG59XG4iXX0=