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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9jb3VudHJ5LXBsYWNlaG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJM0UsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7SUFDN0IsU0FBUyxDQUFDLE9BQWlCLEVBQUUsZ0JBQXdCLEVBQUUsZ0JBQXlCLEVBQUUsbUJBQTJCO1FBQzNHLElBQUksZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuRCxPQUFPLGdCQUFnQixDQUFDO1NBQ3pCOztjQUVLLFNBQVMsR0FBRyxlQUFlLENBQUMsV0FBVyxFQUFFO1FBQy9DLElBQUk7O2tCQUNJLFdBQVcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1lBQ2xILElBQUksV0FBVyxFQUFFO2dCQUNmLElBQUksZ0JBQWdCLEVBQUU7b0JBQ3BCLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN6RDtxQkFBTTtvQkFDTCxPQUFPLFdBQVcsQ0FBQztpQkFDcEI7YUFDRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLG1CQUFtQixDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7O1lBcEJGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGhvbmVOdW1iZXJGb3JtYXQsIFBob25lTnVtYmVyVXRpbCB9IGZyb20gJ2dvb2dsZS1saWJwaG9uZW51bWJlcic7XHJcbmltcG9ydCB7IENvdW50cnlJIH0gZnJvbSAnLi8uLi9tb2RlbHMvY291bnRyeS5tb2RlbCc7XHJcblxyXG5AUGlwZSh7bmFtZTogJ2NvdW50cnlQbGFjZWhvbGRlcid9KVxyXG5leHBvcnQgY2xhc3MgQ291bnRyeVBsYWNlaG9sZGVyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKGNvdW50cnk6IENvdW50cnlJLCBpbnB1dFBsYWNlaG9sZGVyOiBzdHJpbmcsIHNlcGFyYXRlRGlhbENvZGU6IGJvb2xlYW4sIGZhbGxiYWNrUGxhY2Vob2xkZXI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoaW5wdXRQbGFjZWhvbGRlciAmJiBpbnB1dFBsYWNlaG9sZGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIGlucHV0UGxhY2Vob2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGhvbmVVdGlsID0gUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHBob25lVXRpbC5mb3JtYXQocGhvbmVVdGlsLmdldEV4YW1wbGVOdW1iZXIoY291bnRyeS5pc29Db2RlKSwgUGhvbmVOdW1iZXJGb3JtYXQuSU5URVJOQVRJT05BTCk7XHJcbiAgICAgIGlmIChwbGFjZWhvbGRlcikge1xyXG4gICAgICAgIGlmIChzZXBhcmF0ZURpYWxDb2RlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXIuc3Vic3RyKHBsYWNlaG9sZGVyLmluZGV4T2YoJyAnKSArIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBmYWxsYmFja1BsYWNlaG9sZGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=