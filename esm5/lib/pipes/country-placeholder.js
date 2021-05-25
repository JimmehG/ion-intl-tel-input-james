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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9jb3VudHJ5LXBsYWNlaG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHM0U7SUFBQTtJQXFCQSxDQUFDOzs7Ozs7OztJQW5CQyxzQ0FBUzs7Ozs7OztJQUFULFVBQVUsT0FBaUIsRUFBRSxnQkFBd0IsRUFBRSxnQkFBeUIsRUFBRSxtQkFBMkI7UUFDM0csSUFBSSxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELE9BQU8sZ0JBQWdCLENBQUM7U0FDekI7O1lBRUssU0FBUyxHQUFHLGVBQWUsQ0FBQyxXQUFXLEVBQUU7UUFDL0MsSUFBSTs7Z0JBQ0ksV0FBVyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7WUFDbEgsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSSxnQkFBZ0IsRUFBRTtvQkFDcEIsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3pEO3FCQUFNO29CQUNMLE9BQU8sV0FBVyxDQUFDO2lCQUNwQjthQUNGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sbUJBQW1CLENBQUM7U0FDNUI7SUFDSCxDQUFDOztnQkFwQkYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFDOztJQXFCbEMseUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBob25lTnVtYmVyRm9ybWF0LCBQaG9uZU51bWJlclV0aWwgfSBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xyXG5pbXBvcnQgeyBDb3VudHJ5SSB9IGZyb20gJy4vLi4vbW9kZWxzL2NvdW50cnkubW9kZWwnO1xyXG5cclxuQFBpcGUoe25hbWU6ICdjb3VudHJ5UGxhY2Vob2xkZXInfSlcclxuZXhwb3J0IGNsYXNzIENvdW50cnlQbGFjZWhvbGRlciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShjb3VudHJ5OiBDb3VudHJ5SSwgaW5wdXRQbGFjZWhvbGRlcjogc3RyaW5nLCBzZXBhcmF0ZURpYWxDb2RlOiBib29sZWFuLCBmYWxsYmFja1BsYWNlaG9sZGVyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKGlucHV0UGxhY2Vob2xkZXIgJiYgaW5wdXRQbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dFBsYWNlaG9sZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBob25lVXRpbCA9IFBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBwaG9uZVV0aWwuZm9ybWF0KHBob25lVXRpbC5nZXRFeGFtcGxlTnVtYmVyKGNvdW50cnkuaXNvQ29kZSksIFBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpO1xyXG4gICAgICBpZiAocGxhY2Vob2xkZXIpIHtcclxuICAgICAgICBpZiAoc2VwYXJhdGVEaWFsQ29kZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyLnN1YnN0cihwbGFjZWhvbGRlci5pbmRleE9mKCcgJykgKyAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gZmFsbGJhY2tQbGFjZWhvbGRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19