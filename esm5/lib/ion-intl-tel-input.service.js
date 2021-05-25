/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { countries } from './data/countries';
import * as i0 from "@angular/core";
var IonIntlTelInputService = /** @class */ (function () {
    function IonIntlTelInputService() {
        this.countryList = countries;
    }
    /**
     * @return {?}
     */
    IonIntlTelInputService.prototype.getListOfCountries = /**
     * @return {?}
     */
    function () {
        return this.countryList;
    };
    IonIntlTelInputService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    IonIntlTelInputService.ctorParameters = function () { return []; };
    /** @nocollapse */ IonIntlTelInputService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IonIntlTelInputService_Factory() { return new IonIntlTelInputService(); }, token: IonIntlTelInputService, providedIn: "root" });
    return IonIntlTelInputService;
}());
export { IonIntlTelInputService };
if (false) {
    /** @type {?} */
    IonIntlTelInputService.prototype.countryList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24taW50bC10ZWwtaW5wdXQvIiwic291cmNlcyI6WyJsaWIvaW9uLWludGwtdGVsLWlucHV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUU3QztJQU9FO1FBRkEsZ0JBQVcsR0FBZSxTQUFTLENBQUM7SUFFcEIsQ0FBQzs7OztJQUVqQixtREFBa0I7OztJQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOztnQkFYRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztpQ0FQRDtDQWlCQyxBQVpELElBWUM7U0FUWSxzQkFBc0I7OztJQUVqQyw2Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvdW50cnlJIH0gZnJvbSAnLi9tb2RlbHMvY291bnRyeS5tb2RlbCc7XG5pbXBvcnQgeyBjb3VudHJpZXMgfSBmcm9tICcuL2RhdGEvY291bnRyaWVzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSW9uSW50bFRlbElucHV0U2VydmljZSB7XG5cbiAgY291bnRyeUxpc3Q6IENvdW50cnlJW10gPSBjb3VudHJpZXM7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRMaXN0T2ZDb3VudHJpZXMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5jb3VudHJ5TGlzdDtcbiAgfVxufVxuIl19