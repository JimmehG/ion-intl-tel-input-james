/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
export class CountryPlaceholder {
    /**
     * @param {?} country
     * @param {?} inputPlaceholder
     * @param {?} separateDialCode
     * @param {?} fallbackPlaceholder
     * @return {?}
     */
    transform(country, inputPlaceholder, separateDialCode, fallbackPlaceholder) {
        if (inputPlaceholder && inputPlaceholder.length > 0) {
            return inputPlaceholder;
        }
        /** @type {?} */
        const phoneUtil = PhoneNumberUtil.getInstance();
        try {
            /** @type {?} */
            const placeholder = phoneUtil.format(phoneUtil.getExampleNumber(country.isoCode), PhoneNumberFormat.INTERNATIONAL);
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
    }
}
CountryPlaceholder.decorators = [
    { type: Pipe, args: [{ name: 'countryPlaceholder' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9jb3VudHJ5LXBsYWNlaG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJM0UsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7SUFDN0IsU0FBUyxDQUFDLE9BQWlCLEVBQUUsZ0JBQXdCLEVBQUUsZ0JBQXlCLEVBQUUsbUJBQTJCO1FBQzNHLElBQUksZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuRCxPQUFPLGdCQUFnQixDQUFDO1NBQ3pCOztjQUVLLFNBQVMsR0FBRyxlQUFlLENBQUMsV0FBVyxFQUFFO1FBQy9DLElBQUk7O2tCQUNJLFdBQVcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1lBQ2xILElBQUksV0FBVyxFQUFFO2dCQUNmLElBQUksZ0JBQWdCLEVBQUU7b0JBQ3BCLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN6RDtxQkFBTTtvQkFDTCxPQUFPLFdBQVcsQ0FBQztpQkFDcEI7YUFDRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLG1CQUFtQixDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7O1lBcEJGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBob25lTnVtYmVyRm9ybWF0LCBQaG9uZU51bWJlclV0aWwgfSBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xuaW1wb3J0IHsgQ291bnRyeUkgfSBmcm9tICcuLy4uL21vZGVscy9jb3VudHJ5Lm1vZGVsJztcblxuQFBpcGUoe25hbWU6ICdjb3VudHJ5UGxhY2Vob2xkZXInfSlcbmV4cG9ydCBjbGFzcyBDb3VudHJ5UGxhY2Vob2xkZXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGNvdW50cnk6IENvdW50cnlJLCBpbnB1dFBsYWNlaG9sZGVyOiBzdHJpbmcsIHNlcGFyYXRlRGlhbENvZGU6IGJvb2xlYW4sIGZhbGxiYWNrUGxhY2Vob2xkZXI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKGlucHV0UGxhY2Vob2xkZXIgJiYgaW5wdXRQbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gaW5wdXRQbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBwaG9uZVV0aWwgPSBQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBwaG9uZVV0aWwuZm9ybWF0KHBob25lVXRpbC5nZXRFeGFtcGxlTnVtYmVyKGNvdW50cnkuaXNvQ29kZSksIFBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpO1xuICAgICAgaWYgKHBsYWNlaG9sZGVyKSB7XG4gICAgICAgIGlmIChzZXBhcmF0ZURpYWxDb2RlKSB7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyLnN1YnN0cihwbGFjZWhvbGRlci5pbmRleE9mKCcgJykgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsbGJhY2tQbGFjZWhvbGRlcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==