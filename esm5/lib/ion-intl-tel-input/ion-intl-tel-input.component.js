/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, forwardRef, Output, EventEmitter, ViewChild, ElementRef, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonInput, Platform } from '@ionic/angular';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import { IonIntlTelInputService } from '../ion-intl-tel-input.service';
// import { ionIntlTelInputValidator } from '../ion-intl-tel-input.directive';
import { raf } from '../util/util';
/**
 * @ignore
 */
var IonIntlTelInputComponent = /** @class */ (function () {
    function IonIntlTelInputComponent(el, platform, ionIntlTelInputService) {
        var _this = this;
        this.el = el;
        this.platform = platform;
        this.ionIntlTelInputService = ionIntlTelInputService;
        this.cssClass = true;
        /**
         * Iso Code of default selected Country.
         * See more on.
         *
         * \@default ''
         * \@memberof IonIntlTelInputComponent
         */
        this.defaultCountryiso = '';
        /**
         * Determines whether to use `00` or `+` as dial code prefix.
         * Available attributes are '+' | '00'.
         * See more on.
         *
         * \@default +
         * \@memberof IonIntlTelInputComponent
         */
        this.dialCodePrefix = '+';
        /**
         * Determines whether to select automatic country based on user input.
         * See more on.
         *
         * \@default false
         * \@memberof IonIntlTelInputComponent
         */
        this.enableAutoCountrySelect = false;
        /**
         * Determines whether an example number will be shown as a placeholder in input.
         * See more on.
         *
         * \@default true
         * \@memberof IonIntlTelInputComponent
         */
        this.enablePlaceholder = true;
        /**
         * A fallaback placeholder to be used if no example number is found for a country.
         * See more on.
         *
         * \@default ''
         * \@memberof IonIntlTelInputComponent
         */
        this.fallbackPlaceholder = '';
        /**
         * If a custom placeholder is needed for input.
         * If this property is set it will override `enablePlaceholder` and only this placeholder will be shown.
         * See more on.
         *
         * \@default ''
         * \@memberof IonIntlTelInputComponent
         */
        this.inputPlaceholder = '';
        /**
         * Maximum Length for input.
         * See more on.
         *
         * \@default '15'
         * \@memberof IonIntlTelInputComponent
         */
        this.maxLength = '15';
        /**
         * Title of modal opened to select country dial code.
         * See more on.
         *
         * \@default 'Select Country'
         * \@memberof IonIntlTelInputComponent
         */
        this.modalTitle = 'Select Country';
        /**
         * CSS class to attach to dial code selectionmodal.
         * See more on.
         *
         * \@default ''
         * \@memberof IonIntlTelInputComponent
         */
        this.modalCssClass = '';
        /**
         * Placeholder for input in dial code selection modal.
         * See more on.
         *
         * \@default 'Enter country name'
         * \@memberof IonIntlTelInputComponent
         */
        this.modalSearchPlaceholder = 'Enter country name';
        /**
         * Text for close button in dial code selection modal.
         * See more on.
         *
         * \@default 'Close'
         * \@memberof IonIntlTelInputComponent
         */
        this.modalCloseText = 'Close';
        /**
         * Slot for close button in dial code selection modal. [Ionic slots](https://ionicframework.com/docs/api/item) are supported
         * See more on.
         *
         * \@default 'end'
         * \@memberof IonIntlTelInputComponent
         */
        this.modalCloseButtonSlot = 'end';
        /**
         * Determines whether dial code selection modal should be searchable or not.
         * See more on.
         *
         * \@default 'true'
         * \@memberof IonIntlTelInputComponent
         */
        this.modalCanSearch = true;
        /**
         * Determines whether dial code selection modal is closed on backdrop click.
         * See more on.
         *
         * \@default 'true'
         * \@memberof IonIntlTelInputComponent
         */
        this.modalShouldBackdropClose = true;
        /**
         * Determines whether input should be focused when dial code selection modal is opened.
         * See more on.
         *
         * \@default 'true'
         * \@memberof IonIntlTelInputComponent
         */
        this.modalShouldFocusSearchbar = true;
        /**
         * Message to show when no countries are found for search in dial code selection modal.
         * See more on.
         *
         * \@default 'true'
         * \@memberof IonIntlTelInputComponent
         */
        this.modalSearchFailText = 'No countries found';
        /**
         * List of iso codes of manually selected countries as string, which will appear in the dropdown.
         * **Note**: `onlyCountries` should be a string array of country iso codes.
         * See more on.
         *
         * \@default null
         * \@memberof IonIntlTelInputComponent
         */
        this.onlyCountries = [];
        /**
         * List of iso codesn as string of  countries, which will appear at the top in dial code selection modal.
         * **Note**: `preferredCountries` should be a string array of country iso codes.
         * See more on.
         *
         * \@default null
         * \@memberof IonIntlTelInputComponent
         */
        this.preferredCountries = [];
        /**
         * Determines whether first country should be selected in dial code select or not.
         * See more on.
         *
         * \@default true
         * \@memberof IonIntlTelInputComponent
         */
        this.selectFirstCountry = true;
        /**
         * Determines whether to visually separate dialcode into the drop down element.
         * See more on.
         *
         * \@default true
         * \@memberof IonIntlTelInputComponent
         */
        this.separateDialCode = true;
        /**
         * Fires when the Phone number Input is changed.
         * See more on.
         *
         * \@memberof IonIntlTelInputComponent
         */
        this.numberChange = new EventEmitter();
        /**
         * Fires when the Phone number Input is blurred.
         * See more on.
         *
         * \@memberof IonIntlTelInputComponent
         */
        this.numberBlur = new EventEmitter();
        /**
         * Fires when the Phone number Input is focused.
         * See more on.
         *
         * \@memberof IonIntlTelInputComponent
         */
        this.numberFocus = new EventEmitter();
        /**
         * Fires when the user is typing in Phone number Input.
         * See more on.
         *
         * \@memberof IonIntlTelInputComponent
         */
        this.numberInput = new EventEmitter();
        /**
         * Fires when the dial code selection is changed.
         * See more on.
         *
         * \@memberof IonIntlTelInputComponent
         */
        this.codeChange = new EventEmitter();
        /**
         * Fires when the dial code selection modal is opened.
         * See more on.
         *
         * \@memberof IonIntlTelInputComponent
         */
        this.codeOpen = new EventEmitter();
        /**
         * Fires when the dial code selection modal is closed.
         * See more on.
         *
         * \@memberof IonIntlTelInputComponent
         */
        this.codeClose = new EventEmitter();
        /**
         * Fires when a dial code is selected in dial code selection modal.
         * See more on.
         *
         * \@memberof IonIntlTelInputComponent
         */
        this.codeSelect = new EventEmitter();
        // tslint:disable-next-line: variable-name
        this._value = null;
        this.countries = [];
        this.disabled = false;
        this.phoneNumber = '';
        this.phoneUtil = PhoneNumberUtil.getInstance();
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.startsWith = (/**
         * @param {?} input
         * @param {?} search
         * @return {?}
         */
        function (input, search) {
            return input.substr(0, search.length) === search;
        });
        this.getClasses = (/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            /** @type {?} */
            var classList = element.classList;
            /** @type {?} */
            var classes = [];
            for (var i = 0; i < classList.length; i++) {
                /** @type {?} */
                var item = classList.item(i);
                if (item !== null && _this.startsWith(item, 'ng-')) {
                    classes.push("ion-" + item.substr(3));
                }
            }
            return classes;
        });
        this.setClasses = (/**
         * @param {?} element
         * @param {?} classes
         * @return {?}
         */
        function (element, classes) {
            /** @type {?} */
            var classList = element.classList;
            [
                'ion-valid',
                'ion-invalid',
                'ion-touched',
                'ion-untouched',
                'ion-dirty',
                'ion-pristine'
            ].forEach((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return classList.remove(c); }));
            classes.forEach((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return classList.add(c); }));
        });
        this.setIonicClasses = (/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            raf((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var input = (/** @type {?} */ (element.nativeElement));
                /** @type {?} */
                var classes = _this.getClasses(input);
                _this.setClasses(input, classes);
                /** @type {?} */
                var item = input.closest('ion-item');
                if (item) {
                    _this.setClasses(item, classes);
                }
            }));
        });
        this.setItemClass = (/**
         * @param {?} element
         * @param {?} className
         * @param {?} addClass
         * @return {?}
         */
        function (element, className, addClass) {
            /** @type {?} */
            var input = (/** @type {?} */ (element.nativeElement));
            /** @type {?} */
            var item = input.closest('ion-item');
            if (item) {
                /** @type {?} */
                var classList = item.classList;
                if (addClass) {
                    classList.add(className);
                }
                else {
                    classList.remove(className);
                }
            }
        });
    }
    Object.defineProperty(IonIntlTelInputComponent.prototype, "hasValueCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hasValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonIntlTelInputComponent.prototype, "isEnabled", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonIntlTelInputComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            this.setIonicClasses(this.el);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} change
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.emitValueChange = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        this.propagateChange(change);
    };
    /**
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isIos = this.platform.is('ios');
        this.isMD = !this.isIos;
        this.setItemClass(this.el, 'item-interactive', true);
        this.fetchAllCountries();
        this.setPreferredCountries();
        if (this.onlyCountries.length) {
            this.countries = this.countries
                .filter((/**
             * @param {?} country
             * @return {?}
             */
            function (country) { return _this.onlyCountries.includes(country.isoCode); }));
        }
        if (this.selectFirstCountry) {
            if (this.defaultCountryiso) {
                this.setCountry(this.getCountryByIsoCode(this.defaultCountryiso));
            }
            else {
                if (this.preferredCountries.length && this.preferredCountries.includes(this.defaultCountryiso)) {
                    this.setCountry(this.getCountryByIsoCode(this.preferredCountries[0]));
                }
                else {
                    this.setCountry(this.countries[0]);
                }
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.countries && changes.defaulyCountryisoCode
            && changes.defaulyCountryisoCode.currentValue !== changes.defaulyCountryisoCode.previousValue) {
            this.setCountry(changes.defaulyCountryisoCode.currentValue);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        var _this = this;
        if (obj == null) {
            this.ngOnInit();
        }
        this.phoneNumber = obj;
        this.value = this.phoneNumber;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.onNumberChange();
        }), 1);
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.hasValue = /**
     * @return {?}
     */
    function () {
        return !this.isNullOrWhiteSpace(this.value);
    };
    /**
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.onCodeOpen = /**
     * @return {?}
     */
    function () {
        this.codeOpen.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.onCodeChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.isNullOrWhiteSpace(this.phoneNumber)) {
            this.emitValueChange(null);
        }
        else {
            /** @type {?} */
            var googleNumber = void 0;
            try {
                googleNumber = this.phoneUtil.parse(this.phoneNumber, this.country.isoCode.toUpperCase());
            }
            catch (e) {
            }
            /** @type {?} */
            var internationallNo = googleNumber
                ? this.phoneUtil.format(googleNumber, PhoneNumberFormat.INTERNATIONAL)
                : '';
            /** @type {?} */
            var nationalNo = googleNumber
                ? this.phoneUtil.format(googleNumber, PhoneNumberFormat.NATIONAL)
                : '';
            if (this.separateDialCode && internationallNo) {
                this.phoneNumber = this.removeDialCode(internationallNo);
            }
            this.emitValueChange({
                number: this.phoneNumber,
                internationalNumber: internationallNo,
                nationalNumber: nationalNo,
                isoCode: this.country.isoCode,
                dialCode: this.dialCodePrefix + this.country.dialCode
            });
            this.codeChange.emit();
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.numberInputEl.setFocus();
        }), 400);
    };
    /**
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.onCodeClose = /**
     * @return {?}
     */
    function () {
        this.onTouched();
        this.setIonicClasses(this.el);
        this.hasFocus = false;
        this.setItemClass(this.el, 'item-has-focus', false);
        this.codeClose.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.onCodeSearchCountries = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var text = event.text.trim().toLowerCase();
        event.component.startSearch();
        event.component.items = this.filterCountries(text);
        event.component.endSearch();
    };
    /**
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.onCodeSelect = /**
     * @return {?}
     */
    function () {
        this.codeSelect.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.onIonNumberChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.setIonicClasses(this.el);
        this.numberChange.emit(event);
    };
    /**
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.onIonNumberBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
        this.setIonicClasses(this.el);
        this.hasFocus = false;
        this.setItemClass(this.el, 'item-has-focus', false);
        this.numberBlur.emit();
    };
    /**
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.onIonNumberFocus = /**
     * @return {?}
     */
    function () {
        this.hasFocus = true;
        this.setItemClass(this.el, 'item-has-focus', true);
        this.numberFocus.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.onIonNumberInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.numberInput.emit(event);
    };
    /**
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.onNumberChange = /**
     * @return {?}
     */
    function () {
        this.value = this.phoneNumber;
        /** @type {?} */
        var googleNumber;
        try {
            googleNumber = this.phoneUtil.parse(this.phoneNumber, this.country.isoCode.toUpperCase());
        }
        catch (e) {
        }
        /** @type {?} */
        var isoCode = this.country ? this.country.isoCode : null;
        // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
        if (this.enableAutoCountrySelect) {
            isoCode = googleNumber && googleNumber.getCountryCode()
                ? this.getCountryIsoCode(googleNumber.getCountryCode(), googleNumber)
                : this.country.isoCode;
            if (isoCode && isoCode !== this.country.isoCode) {
                /** @type {?} */
                var newCountry = this.countries.find((/**
                 * @param {?} country
                 * @return {?}
                 */
                function (country) { return country.isoCode === isoCode; }));
                if (newCountry) {
                    this.country = newCountry;
                }
            }
        }
        isoCode = isoCode ?
            isoCode :
            this.country ? this.country.isoCode : null;
        if (this.isNullOrWhiteSpace(this.value) || this.isNullOrWhiteSpace(isoCode)) {
            this.emitValueChange(null);
        }
        else {
            /** @type {?} */
            var internationallNo = googleNumber
                ? this.phoneUtil.format(googleNumber, PhoneNumberFormat.INTERNATIONAL)
                : '';
            /** @type {?} */
            var nationalNo = googleNumber
                ? this.phoneUtil.format(googleNumber, PhoneNumberFormat.NATIONAL)
                : '';
            if (this.separateDialCode && internationallNo) {
                this.phoneNumber = this.removeDialCode(internationallNo);
            }
            this.emitValueChange({
                number: this.phoneNumber,
                internationalNumber: internationallNo,
                nationalNumber: nationalNo,
                isoCode: this.country.isoCode,
                dialCode: this.dialCodePrefix + this.country.dialCode
            });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.onNumberKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var allowedChars = /^[0-9\+\-\ ]/;
        /** @type {?} */
        var allowedCtrlChars = /[axcv]/;
        /** @type {?} */
        var allowedOtherKeys = [
            'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown',
            'Home', 'End', 'Insert', 'Delete', 'Backspace'
        ];
        if (!allowedChars.test(event.key) &&
            !(event.ctrlKey && allowedCtrlChars.test(event.key)) &&
            !(allowedOtherKeys.includes(event.key))) {
            event.preventDefault();
        }
    };
    /**
     * @private
     * @param {?} text
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.filterCountries = /**
     * @private
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return this.countries.filter((/**
         * @param {?} country
         * @return {?}
         */
        function (country) {
            return country.name.toLowerCase().indexOf(text) !== -1 ||
                country.name.toLowerCase().indexOf(text) !== -1 ||
                country.dialCode.toString().toLowerCase().indexOf(text) !== -1;
        }));
    };
    /**
     * @private
     * @param {?} countryCode
     * @param {?} googleNumber
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.getCountryIsoCode = /**
     * @private
     * @param {?} countryCode
     * @param {?} googleNumber
     * @return {?}
     */
    function (countryCode, googleNumber) {
        /** @type {?} */
        var rawNumber = ((/** @type {?} */ (googleNumber))).values_[2].toString();
        /** @type {?} */
        var countries = this.countries.filter((/**
         * @param {?} country
         * @return {?}
         */
        function (country) { return country.dialCode === countryCode.toString(); }));
        /** @type {?} */
        var mainCountry = countries.find((/**
         * @param {?} country
         * @return {?}
         */
        function (country) { return country.areaCodes === undefined; }));
        /** @type {?} */
        var secondaryCountries = countries.filter((/**
         * @param {?} country
         * @return {?}
         */
        function (country) { return country.areaCodes !== undefined; }));
        /** @type {?} */
        var matchedCountry = mainCountry ? mainCountry.isoCode : undefined;
        secondaryCountries.forEach((/**
         * @param {?} country
         * @return {?}
         */
        function (country) {
            country.areaCodes.forEach((/**
             * @param {?} areaCode
             * @return {?}
             */
            function (areaCode) {
                if (rawNumber.startsWith(areaCode)) {
                    matchedCountry = country.isoCode;
                }
            }));
        }));
        return matchedCountry;
    };
    /**
     * @private
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.fetchAllCountries = /**
     * @private
     * @return {?}
     */
    function () {
        this.countries = this.ionIntlTelInputService.getListOfCountries();
    };
    /**
     * @private
     * @param {?} isoCode
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.getCountryByIsoCode = /**
     * @private
     * @param {?} isoCode
     * @return {?}
     */
    function (isoCode) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.countries), _c = _b.next(); !_c.done; _c = _b.next()) {
                var country = _c.value;
                if (country.isoCode === isoCode) {
                    return country;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.isNullOrWhiteSpace = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === null || value === undefined) {
            return true;
        }
        if (typeof (value) === 'string' && value === '') {
            return true;
        }
        return false;
    };
    /**
     * @private
     * @param {?} phoneNumber
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.removeDialCode = /**
     * @private
     * @param {?} phoneNumber
     * @return {?}
     */
    function (phoneNumber) {
        if (this.separateDialCode && phoneNumber) {
            phoneNumber = phoneNumber.substr(phoneNumber.indexOf(' ') + 1);
        }
        return phoneNumber;
    };
    /**
     * @private
     * @param {?} country
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.setCountry = /**
     * @private
     * @param {?} country
     * @return {?}
     */
    function (country) {
        this.country = country;
        this.codeChange.emit(this.country);
    };
    /**
     * @private
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.setPreferredCountries = /**
     * @private
     * @return {?}
     */
    function () {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(this.preferredCountries), _c = _b.next(); !_c.done; _c = _b.next()) {
                var preferedCountryIsoCode = _c.value;
                /** @type {?} */
                var country = this.getCountryByIsoCode(preferedCountryIsoCode);
                country.priority = country ? 1 : country.priority;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.countries.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return (a.priority > b.priority) ? -1 : ((a.priority < b.priority) ? 1 : 0); }));
    };
    IonIntlTelInputComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'ion-intl-tel-input',
                    template: "<div class=\"ion-intl-tel-input-code\">\n  <ionic-selectable\n    #codeSelect\n    [(ngModel)]=\"country\"\n    [canSearch]=\"modalCanSearch\"\n    closeButtonText=\"{{modalCloseText}}\"\n    closeButtonSlot=\"{{modalCloseButtonSlot}}\"\n    [disabled] = \"disabled\"\n    [hasVirtualScroll]=\"true\"\n    itemTextField=\"name\"\n    [items]=\"countries\"\n    itemValueField=\"dialCode\"\n    modalCssClass=\"ionic-tel-input-modal {{modalCssClass}}\"\n    placeholder=\"Country\"\n    searchFailText=\"{{modalSearchFailText}}\"\n    searchPlaceholder=\"{{modalSearchPlaceholder}}\"\n    [shouldBackdropClose]=\"modalShouldBackdropClose\"\n    [shouldFocusSearchbar]=\"modalShouldFocusSearchbar\"\n    (onChange)=\"onCodeChange($event)\"\n    (onClose)=\"onCodeClose()\"\n    (onOpen)=\"onCodeOpen()\"\n    (onSearch)=\"onCodeSearchCountries($event)\"\n    (onSelect)=\"onCodeSelect()\"\n  >\n    <ng-template ionicSelectableTitleTemplate>\n      {{modalTitle}}\n    </ng-template>\n    <ng-template ionicSelectableValueTemplate let-country=\"value\">\n      <span class=\"flag-icon flag-icon-{{country.flagClass}}\"></span>\n      <span *ngIf=\"separateDialCode\">{{dialCodePrefix}}{{country.dialCode}}</span>\n    </ng-template>\n    <ng-template ionicSelectableItemTemplate let-country=\"item\">\n        <span class=\"ion-margin-end\">{{country.name}}</span>\n        <span *ngIf=\"separateDialCode\">{{dialCodePrefix}}{{country.dialCode}}</span>\n    </ng-template>\n    <ng-template ionicSelectableItemEndTemplate let-country=\"item\">\n      <span class=\"flag-icon flag-icon-{{country.flagClass}}\"></span>\n    </ng-template>\n  </ionic-selectable>\n</div>\n\n<div class=\"ion-intl-tel-input-number\">\n  <ion-input\n    #numberInput\n    [(ngModel)]=\"phoneNumber\"\n    autocomplete=\"off\"\n    [disabled] = \"disabled\" \n    [attr.maxLength]=\"maxLength\"\n    type=\"tel\"\n    (ionBlur)=\"onIonNumberBlur()\"\n    (ionChange)=\"onIonNumberChange($event)\"\n    (ionFocus)=\"onIonNumberFocus()\"\n    (ionInput)=\"onIonNumberInput($event)\"\n    (keydown)=\"onNumberKeyDown($event)\"\n    (ngModelChange)=\"onNumberChange()\"\n    placeholder=\"{{country | countryPlaceholder: inputPlaceholder:separateDialCode:fallbackPlaceholder}}\" >\n  </ion-input>\n</div>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return IonIntlTelInputComponent; })),
                            multi: true
                        } /* ,
                        {
                          provide: NG_VALIDATORS,
                          useValue: ionIntlTelInputValidator,
                          multi: true
                        } */
                    ],
                    styles: [":host{width:100%;display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end}:host .ion-intl-tel-input-code{position:relative}:host .ion-intl-tel-input-number{-webkit-box-flex:1;flex:1}:host .ionic-selectable-label-default,:host .ionic-selectable-label-fixed{max-width:100%}:host .ionic-selectable:not(:host.ionic-selectable-label-stacked):not(:host.ionic-selectable-label-floating) ::ng-deep .ionic-selectable-inner .ionic-selectable-value{padding-top:10px;padding-bottom:10px}:host .ionic-selectable:not(:host.ionic-selectable-label-stacked):not(:host.ionic-selectable-label-floating) ::ng-deep .ionic-selectable-icon-inner{top:17px}:host .flag-icon{margin-right:var(--flag-code-gap,15px)}"]
                }] }
    ];
    /** @nocollapse */
    IonIntlTelInputComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Platform },
        { type: IonIntlTelInputService }
    ]; };
    IonIntlTelInputComponent.propDecorators = {
        cssClass: [{ type: HostBinding, args: ['class.ion-intl-tel-input',] }],
        isIos: [{ type: HostBinding, args: ['class.ion-intl-tel-input-ios',] }],
        isMD: [{ type: HostBinding, args: ['class.ion-intl-tel-input-md',] }],
        hasFocus: [{ type: HostBinding, args: ['class.has-focus',] }],
        hasValueCssClass: [{ type: HostBinding, args: ['class.ion-intl-tel-input-has-value',] }],
        isEnabled: [{ type: HostBinding, args: ['class.ion-intl-tel-input-is-enabled',] }, { type: Input, args: ['isEnabled',] }],
        defaultCountryiso: [{ type: Input }],
        dialCodePrefix: [{ type: Input }],
        enableAutoCountrySelect: [{ type: Input }],
        enablePlaceholder: [{ type: Input }],
        fallbackPlaceholder: [{ type: Input }],
        inputPlaceholder: [{ type: Input }],
        maxLength: [{ type: Input }],
        modalTitle: [{ type: Input }],
        modalCssClass: [{ type: Input }],
        modalSearchPlaceholder: [{ type: Input }],
        modalCloseText: [{ type: Input }],
        modalCloseButtonSlot: [{ type: Input }],
        modalCanSearch: [{ type: Input }],
        modalShouldBackdropClose: [{ type: Input }],
        modalShouldFocusSearchbar: [{ type: Input }],
        modalSearchFailText: [{ type: Input }],
        onlyCountries: [{ type: Input }],
        preferredCountries: [{ type: Input }],
        selectFirstCountry: [{ type: Input }],
        separateDialCode: [{ type: Input }],
        numberChange: [{ type: Output }],
        numberBlur: [{ type: Output }],
        numberFocus: [{ type: Output }],
        numberInput: [{ type: Output }],
        codeChange: [{ type: Output }],
        codeOpen: [{ type: Output }],
        codeClose: [{ type: Output }],
        codeSelect: [{ type: Output }],
        numberInputEl: [{ type: ViewChild, args: ['numberInput', { static: false },] }]
    };
    return IonIntlTelInputComponent;
}());
export { IonIntlTelInputComponent };
if (false) {
    /** @type {?} */
    IonIntlTelInputComponent.prototype.cssClass;
    /** @type {?} */
    IonIntlTelInputComponent.prototype.isIos;
    /** @type {?} */
    IonIntlTelInputComponent.prototype.isMD;
    /** @type {?} */
    IonIntlTelInputComponent.prototype.hasFocus;
    /**
     * Iso Code of default selected Country.
     * See more on.
     *
     * \@default ''
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.defaultCountryiso;
    /**
     * Determines whether to use `00` or `+` as dial code prefix.
     * Available attributes are '+' | '00'.
     * See more on.
     *
     * \@default +
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.dialCodePrefix;
    /**
     * Determines whether to select automatic country based on user input.
     * See more on.
     *
     * \@default false
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.enableAutoCountrySelect;
    /**
     * Determines whether an example number will be shown as a placeholder in input.
     * See more on.
     *
     * \@default true
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.enablePlaceholder;
    /**
     * A fallaback placeholder to be used if no example number is found for a country.
     * See more on.
     *
     * \@default ''
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.fallbackPlaceholder;
    /**
     * If a custom placeholder is needed for input.
     * If this property is set it will override `enablePlaceholder` and only this placeholder will be shown.
     * See more on.
     *
     * \@default ''
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.inputPlaceholder;
    /**
     * Maximum Length for input.
     * See more on.
     *
     * \@default '15'
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.maxLength;
    /**
     * Title of modal opened to select country dial code.
     * See more on.
     *
     * \@default 'Select Country'
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.modalTitle;
    /**
     * CSS class to attach to dial code selectionmodal.
     * See more on.
     *
     * \@default ''
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.modalCssClass;
    /**
     * Placeholder for input in dial code selection modal.
     * See more on.
     *
     * \@default 'Enter country name'
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.modalSearchPlaceholder;
    /**
     * Text for close button in dial code selection modal.
     * See more on.
     *
     * \@default 'Close'
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.modalCloseText;
    /**
     * Slot for close button in dial code selection modal. [Ionic slots](https://ionicframework.com/docs/api/item) are supported
     * See more on.
     *
     * \@default 'end'
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.modalCloseButtonSlot;
    /**
     * Determines whether dial code selection modal should be searchable or not.
     * See more on.
     *
     * \@default 'true'
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.modalCanSearch;
    /**
     * Determines whether dial code selection modal is closed on backdrop click.
     * See more on.
     *
     * \@default 'true'
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.modalShouldBackdropClose;
    /**
     * Determines whether input should be focused when dial code selection modal is opened.
     * See more on.
     *
     * \@default 'true'
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.modalShouldFocusSearchbar;
    /**
     * Message to show when no countries are found for search in dial code selection modal.
     * See more on.
     *
     * \@default 'true'
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.modalSearchFailText;
    /**
     * List of iso codes of manually selected countries as string, which will appear in the dropdown.
     * **Note**: `onlyCountries` should be a string array of country iso codes.
     * See more on.
     *
     * \@default null
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.onlyCountries;
    /**
     * List of iso codesn as string of  countries, which will appear at the top in dial code selection modal.
     * **Note**: `preferredCountries` should be a string array of country iso codes.
     * See more on.
     *
     * \@default null
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.preferredCountries;
    /**
     * Determines whether first country should be selected in dial code select or not.
     * See more on.
     *
     * \@default true
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.selectFirstCountry;
    /**
     * Determines whether to visually separate dialcode into the drop down element.
     * See more on.
     *
     * \@default true
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.separateDialCode;
    /**
     * Fires when the Phone number Input is changed.
     * See more on.
     *
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.numberChange;
    /**
     * Fires when the Phone number Input is blurred.
     * See more on.
     *
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.numberBlur;
    /**
     * Fires when the Phone number Input is focused.
     * See more on.
     *
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.numberFocus;
    /**
     * Fires when the user is typing in Phone number Input.
     * See more on.
     *
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.numberInput;
    /**
     * Fires when the dial code selection is changed.
     * See more on.
     *
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.codeChange;
    /**
     * Fires when the dial code selection modal is opened.
     * See more on.
     *
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.codeOpen;
    /**
     * Fires when the dial code selection modal is closed.
     * See more on.
     *
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.codeClose;
    /**
     * Fires when a dial code is selected in dial code selection modal.
     * See more on.
     *
     * \@memberof IonIntlTelInputComponent
     * @type {?}
     */
    IonIntlTelInputComponent.prototype.codeSelect;
    /** @type {?} */
    IonIntlTelInputComponent.prototype.numberInputEl;
    /**
     * @type {?}
     * @private
     */
    IonIntlTelInputComponent.prototype._value;
    /** @type {?} */
    IonIntlTelInputComponent.prototype.country;
    /** @type {?} */
    IonIntlTelInputComponent.prototype.countries;
    /** @type {?} */
    IonIntlTelInputComponent.prototype.disabled;
    /** @type {?} */
    IonIntlTelInputComponent.prototype.phoneNumber;
    /** @type {?} */
    IonIntlTelInputComponent.prototype.phoneUtil;
    /** @type {?} */
    IonIntlTelInputComponent.prototype.onTouched;
    /** @type {?} */
    IonIntlTelInputComponent.prototype.propagateChange;
    /**
     * @type {?}
     * @private
     */
    IonIntlTelInputComponent.prototype.startsWith;
    /**
     * @type {?}
     * @private
     */
    IonIntlTelInputComponent.prototype.getClasses;
    /**
     * @type {?}
     * @private
     */
    IonIntlTelInputComponent.prototype.setClasses;
    /**
     * @type {?}
     * @private
     */
    IonIntlTelInputComponent.prototype.setIonicClasses;
    /**
     * @type {?}
     * @private
     */
    IonIntlTelInputComponent.prototype.setItemClass;
    /**
     * @type {?}
     * @private
     */
    IonIntlTelInputComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    IonIntlTelInputComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    IonIntlTelInputComponent.prototype.ionIntlTelInputService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9pb24taW50bC10ZWwtaW5wdXQvaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sWUFBWSxFQUdaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBdUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RixPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3BELE9BQU8sRUFBZSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUl4RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFFdkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQU1uQztJQTRVRSxrQ0FDVSxFQUFjLEVBQ2QsUUFBa0IsRUFDbEIsc0JBQThDO1FBSHhELGlCQUlLO1FBSEssT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQXRUeEQsYUFBUSxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7UUF5QmhCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7O1FBV3ZCLG1CQUFjLEdBQWUsR0FBRyxDQUFDOzs7Ozs7OztRQVVqQyw0QkFBdUIsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7O1FBVWhDLHNCQUFpQixHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7UUFVekIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDOzs7Ozs7Ozs7UUFX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RDs7Ozs7Ozs7SUFRaEQsK0NBQ3lEOzs7Ozs7OztJQVF6RCw4Q0FDOEM7Ozs7Ozs7O0lBUTlDLDRDQUM0Qzs7Ozs7Ozs7SUFRNUMsNkNBQzZDOzs7Ozs7OztJQVE3Qyw4Q0FDOEM7O0lBRTlDLGlEQUFtRTs7Ozs7SUFHbkUsMENBQThCOztJQUU5QiwyQ0FBa0I7O0lBQ2xCLDZDQUEyQjs7SUFDM0IsNENBQWlCOztJQUNqQiwrQ0FBaUI7O0lBQ2pCLDZDQUErQzs7SUFFL0MsNkNBQWlDOztJQUNqQyxtREFBMEQ7Ozs7O0lBcVQxRCw4Q0FFQzs7Ozs7SUFFRCw4Q0FVQzs7Ozs7SUFFRCw4Q0FZQzs7Ozs7SUFFRCxtREFXQzs7Ozs7SUFFRCxnREFXQzs7Ozs7SUF4V0Msc0NBQXNCOzs7OztJQUN0Qiw0Q0FBMEI7Ozs7O0lBQzFCLDBEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgZm9yd2FyZFJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxJREFUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBJb25JbnB1dCwgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCB9IGZyb20gJ2lvbmljLXNlbGVjdGFibGUnO1xuaW1wb3J0IHsgUGhvbmVOdW1iZXIsIFBob25lTnVtYmVyRm9ybWF0LCBQaG9uZU51bWJlclV0aWwgfSBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xuXG5pbXBvcnQgeyBDb3VudHJ5SSB9IGZyb20gJy4uL21vZGVscy9jb3VudHJ5Lm1vZGVsJztcbmltcG9ydCB7IElvbkludGxUZWxJbnB1dE1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL2lvbi1pbnRsLXRlbC1pbnB1dC5tb2RlbCc7XG5pbXBvcnQgeyBJb25JbnRsVGVsSW5wdXRTZXJ2aWNlIH0gZnJvbSAnLi4vaW9uLWludGwtdGVsLWlucHV0LnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgaW9uSW50bFRlbElucHV0VmFsaWRhdG9yIH0gZnJvbSAnLi4vaW9uLWludGwtdGVsLWlucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyByYWYgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuXG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdpb24taW50bC10ZWwtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW9uSW50bFRlbElucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfS8qICxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlVmFsdWU6IGlvbkludGxUZWxJbnB1dFZhbGlkYXRvcixcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSAqL1xuICBdXG59KVxuXG4vKipcbiAqIEBhdXRob3IgQXp6YW0gQXNnaGFyIDxhenphbS5hc2doYXJAaW50ZXJzdGVsbHVzLmNvbT5cbiAqL1xuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb24taW50bC10ZWwtaW5wdXQnKVxuICBjc3NDbGFzcyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLWludGwtdGVsLWlucHV0LWlvcycpXG4gIGlzSW9zOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbi1pbnRsLXRlbC1pbnB1dC1tZCcpXG4gIGlzTUQ6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGFzLWZvY3VzJylcbiAgaGFzRm9jdXM7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLWludGwtdGVsLWlucHV0LWhhcy12YWx1ZScpXG4gIGdldCBoYXNWYWx1ZUNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc1ZhbHVlKCk7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb24taW50bC10ZWwtaW5wdXQtaXMtZW5hYmxlZCcpXG4gIEBJbnB1dCgnaXNFbmFibGVkJylcbiAgZ2V0IGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogSXNvIENvZGUgb2YgZGVmYXVsdCBzZWxlY3RlZCBDb3VudHJ5LlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJydcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZGVmYXVsdENvdW50cnlpc28gPSAnJztcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHVzZSBgMDBgIG9yIGArYCBhcyBkaWFsIGNvZGUgcHJlZml4LlxuICAgKiBBdmFpbGFibGUgYXR0cmlidXRlcyBhcmUgJysnIHwgJzAwJy5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICtcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZGlhbENvZGVQcmVmaXg6ICcrJyB8ICcwMCcgPSAnKyc7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBzZWxlY3QgYXV0b21hdGljIGNvdW50cnkgYmFzZWQgb24gdXNlciBpbnB1dC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGVuYWJsZUF1dG9Db3VudHJ5U2VsZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBhbiBleGFtcGxlIG51bWJlciB3aWxsIGJlIHNob3duIGFzIGEgcGxhY2Vob2xkZXIgaW4gaW5wdXQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGVuYWJsZVBsYWNlaG9sZGVyID0gdHJ1ZTtcblxuICAvKipcbiAgICogQSBmYWxsYWJhY2sgcGxhY2Vob2xkZXIgdG8gYmUgdXNlZCBpZiBubyBleGFtcGxlIG51bWJlciBpcyBmb3VuZCBmb3IgYSBjb3VudHJ5LlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJydcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZmFsbGJhY2tQbGFjZWhvbGRlciA9ICcnO1xuXG4gIC8qKlxuICAgKiBJZiBhIGN1c3RvbSBwbGFjZWhvbGRlciBpcyBuZWVkZWQgZm9yIGlucHV0LlxuICAgKiBJZiB0aGlzIHByb3BlcnR5IGlzIHNldCBpdCB3aWxsIG92ZXJyaWRlIGBlbmFibGVQbGFjZWhvbGRlcmAgYW5kIG9ubHkgdGhpcyBwbGFjZWhvbGRlciB3aWxsIGJlIHNob3duLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJydcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaW5wdXRQbGFjZWhvbGRlciA9ICcnO1xuXG4gIC8qKlxuICAgKiBNYXhpbXVtIExlbmd0aCBmb3IgaW5wdXQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnMTUnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1heExlbmd0aCA9ICcxNSc7XG5cbiAgLyoqXG4gICAqIFRpdGxlIG9mIG1vZGFsIG9wZW5lZCB0byBzZWxlY3QgY291bnRyeSBkaWFsIGNvZGUuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnU2VsZWN0IENvdW50cnknXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsVGl0bGUgPSAnU2VsZWN0IENvdW50cnknO1xuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3MgdG8gYXR0YWNoIHRvIGRpYWwgY29kZSBzZWxlY3Rpb25tb2RhbC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICcnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsQ3NzQ2xhc3MgPSAnJztcblxuICAvKipcbiAgICogUGxhY2Vob2xkZXIgZm9yIGlucHV0IGluIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnRW50ZXIgY291bnRyeSBuYW1lJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbFNlYXJjaFBsYWNlaG9sZGVyID0gJ0VudGVyIGNvdW50cnkgbmFtZSc7XG5cbiAgLyoqXG4gICAqIFRleHQgZm9yIGNsb3NlIGJ1dHRvbiBpbiBkaWFsIGNvZGUgc2VsZWN0aW9uIG1vZGFsLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ0Nsb3NlJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbENsb3NlVGV4dCA9ICdDbG9zZSc7XG5cbiAgLyoqXG4gICAqIFNsb3QgZm9yIGNsb3NlIGJ1dHRvbiBpbiBkaWFsIGNvZGUgc2VsZWN0aW9uIG1vZGFsLiBbSW9uaWMgc2xvdHNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2l0ZW0pIGFyZSBzdXBwb3J0ZWRcbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICdlbmQnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsQ2xvc2VCdXR0b25TbG90OiAnc3RhcnQnIHwgJ2VuZCcgfCAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyA9ICdlbmQnO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBzaG91bGQgYmUgc2VhcmNoYWJsZSBvciBub3QuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAndHJ1ZSdcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxDYW5TZWFyY2ggPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBjbG9zZWQgb24gYmFja2Ryb3AgY2xpY2suXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAndHJ1ZSdcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxTaG91bGRCYWNrZHJvcENsb3NlID0gdHJ1ZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGlucHV0IHNob3VsZCBiZSBmb2N1c2VkIHdoZW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBvcGVuZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAndHJ1ZSdcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxTaG91bGRGb2N1c1NlYXJjaGJhciA9IHRydWU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgdG8gc2hvdyB3aGVuIG5vIGNvdW50cmllcyBhcmUgZm91bmQgZm9yIHNlYXJjaCBpbiBkaWFsIGNvZGUgc2VsZWN0aW9uIG1vZGFsLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ3RydWUnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsU2VhcmNoRmFpbFRleHQgPSAnTm8gY291bnRyaWVzIGZvdW5kJztcblxuICAvKipcbiAgICogTGlzdCBvZiBpc28gY29kZXMgb2YgbWFudWFsbHkgc2VsZWN0ZWQgY291bnRyaWVzIGFzIHN0cmluZywgd2hpY2ggd2lsbCBhcHBlYXIgaW4gdGhlIGRyb3Bkb3duLlxuICAgKiAqKk5vdGUqKjogYG9ubHlDb3VudHJpZXNgIHNob3VsZCBiZSBhIHN0cmluZyBhcnJheSBvZiBjb3VudHJ5IGlzbyBjb2Rlcy5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgb25seUNvdW50cmllczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGlzbyBjb2Rlc24gYXMgc3RyaW5nIG9mICBjb3VudHJpZXMsIHdoaWNoIHdpbGwgYXBwZWFyIGF0IHRoZSB0b3AgaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC5cbiAgICogKipOb3RlKio6IGBwcmVmZXJyZWRDb3VudHJpZXNgIHNob3VsZCBiZSBhIHN0cmluZyBhcnJheSBvZiBjb3VudHJ5IGlzbyBjb2Rlcy5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgcHJlZmVycmVkQ291bnRyaWVzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBmaXJzdCBjb3VudHJ5IHNob3VsZCBiZSBzZWxlY3RlZCBpbiBkaWFsIGNvZGUgc2VsZWN0IG9yIG5vdC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2VsZWN0Rmlyc3RDb3VudHJ5ID0gdHJ1ZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHZpc3VhbGx5IHNlcGFyYXRlIGRpYWxjb2RlIGludG8gdGhlIGRyb3AgZG93biBlbGVtZW50LlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXBhcmF0ZURpYWxDb2RlID0gdHJ1ZTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgUGhvbmUgbnVtYmVyIElucHV0IGlzIGNoYW5nZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnVtYmVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgUGhvbmUgbnVtYmVyIElucHV0IGlzIGJsdXJyZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnVtYmVyQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgUGhvbmUgbnVtYmVyIElucHV0IGlzIGZvY3VzZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnVtYmVyRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHVzZXIgaXMgdHlwaW5nIGluIFBob25lIG51bWJlciBJbnB1dC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBudW1iZXJJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgZGlhbCBjb2RlIHNlbGVjdGlvbiBpcyBjaGFuZ2VkLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGNvZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBvcGVuZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY29kZU9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBjbG9zZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY29kZUNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBkaWFsIGNvZGUgaXMgc2VsZWN0ZWQgaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjb2RlU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgnbnVtYmVySW5wdXQnLCB7c3RhdGljOiBmYWxzZX0pIG51bWJlcklucHV0RWw6IElvbklucHV0O1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nID0gbnVsbDtcblxuICBjb3VudHJ5OiBDb3VudHJ5STtcbiAgY291bnRyaWVzOiBDb3VudHJ5SVtdID0gW107XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIHBob25lTnVtYmVyID0gJyc7XG4gIHBob25lVXRpbDogYW55ID0gUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCk7XG5cbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBJb25JbnRsVGVsSW5wdXRNb2RlbCB8IG51bGwpID0+IHsgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgaW9uSW50bFRlbElucHV0U2VydmljZTogSW9uSW50bFRlbElucHV0U2VydmljZSxcbiAgKSB7IH1cblxuICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRJb25pY0NsYXNzZXModGhpcy5lbCk7XG4gIH1cblxuICBlbWl0VmFsdWVDaGFuZ2UoY2hhbmdlOiBJb25JbnRsVGVsSW5wdXRNb2RlbCB8IG51bGwpIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZShjaGFuZ2UpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0lvcyA9IHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpO1xuICAgIHRoaXMuaXNNRCA9ICF0aGlzLmlzSW9zO1xuICAgIHRoaXMuc2V0SXRlbUNsYXNzKHRoaXMuZWwsICdpdGVtLWludGVyYWN0aXZlJywgdHJ1ZSk7XG5cbiAgICB0aGlzLmZldGNoQWxsQ291bnRyaWVzKCk7XG4gICAgdGhpcy5zZXRQcmVmZXJyZWRDb3VudHJpZXMoKTtcblxuICAgIGlmICh0aGlzLm9ubHlDb3VudHJpZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNvdW50cmllcyA9IHRoaXMuY291bnRyaWVzXG4gICAgICAuZmlsdGVyKChjb3VudHJ5OiBDb3VudHJ5SSkgPT4gdGhpcy5vbmx5Q291bnRyaWVzLmluY2x1ZGVzKGNvdW50cnkuaXNvQ29kZSkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdEZpcnN0Q291bnRyeSkge1xuICAgICAgaWYgKHRoaXMuZGVmYXVsdENvdW50cnlpc28pIHtcbiAgICAgICAgdGhpcy5zZXRDb3VudHJ5KHRoaXMuZ2V0Q291bnRyeUJ5SXNvQ29kZSh0aGlzLmRlZmF1bHRDb3VudHJ5aXNvKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5wcmVmZXJyZWRDb3VudHJpZXMubGVuZ3RoICYmIHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmluY2x1ZGVzKHRoaXMuZGVmYXVsdENvdW50cnlpc28pKSB7XG4gICAgICAgICAgdGhpcy5zZXRDb3VudHJ5KHRoaXMuZ2V0Q291bnRyeUJ5SXNvQ29kZSh0aGlzLnByZWZlcnJlZENvdW50cmllc1swXSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0Q291bnRyeSh0aGlzLmNvdW50cmllc1swXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuY291bnRyaWVzICYmIGNoYW5nZXMuZGVmYXVseUNvdW50cnlpc29Db2RlXG4gICAgJiYgY2hhbmdlcy5kZWZhdWx5Q291bnRyeWlzb0NvZGUuY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzLmRlZmF1bHlDb3VudHJ5aXNvQ29kZS5wcmV2aW91c1ZhbHVlKSB7XG4gICAgICB0aGlzLnNldENvdW50cnkoY2hhbmdlcy5kZWZhdWx5Q291bnRyeWlzb0NvZGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKG9iajogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuICAgIHRoaXMucGhvbmVOdW1iZXIgPSBvYmo7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMucGhvbmVOdW1iZXI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm9uTnVtYmVyQ2hhbmdlKCk7XG4gICAgfSwgMSk7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIGhhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc051bGxPcldoaXRlU3BhY2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICBvbkNvZGVPcGVuKCkge1xuICAgIHRoaXMuY29kZU9wZW4uZW1pdCgpO1xuICB9XG5cbiAgb25Db2RlQ2hhbmdlKGV2ZW50OiB7XG4gICAgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsXG4gICAgdmFsdWU6IGFueVxuICB9KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNOdWxsT3JXaGl0ZVNwYWNlKHRoaXMucGhvbmVOdW1iZXIpKSB7XG4gICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZShudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGdvb2dsZU51bWJlcjogUGhvbmVOdW1iZXI7XG4gICAgICB0cnkge1xuICAgICAgICBnb29nbGVOdW1iZXIgPSB0aGlzLnBob25lVXRpbC5wYXJzZShcbiAgICAgICAgICB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgICAgIHRoaXMuY291bnRyeS5pc29Db2RlLnRvVXBwZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW50ZXJuYXRpb25hbGxObyA9IGdvb2dsZU51bWJlclxuICAgICAgPyB0aGlzLnBob25lVXRpbC5mb3JtYXQoZ29vZ2xlTnVtYmVyLCBQaG9uZU51bWJlckZvcm1hdC5JTlRFUk5BVElPTkFMKVxuICAgICAgOiAnJztcbiAgICAgIGNvbnN0IG5hdGlvbmFsTm8gPSBnb29nbGVOdW1iZXJcbiAgICAgID8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KGdvb2dsZU51bWJlciwgUGhvbmVOdW1iZXJGb3JtYXQuTkFUSU9OQUwpXG4gICAgICA6ICcnO1xuXG4gICAgICBpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIGludGVybmF0aW9uYWxsTm8pIHtcbiAgICAgICAgdGhpcy5waG9uZU51bWJlciA9IHRoaXMucmVtb3ZlRGlhbENvZGUoaW50ZXJuYXRpb25hbGxObyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKHtcbiAgICAgICAgbnVtYmVyOiB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgICBpbnRlcm5hdGlvbmFsTnVtYmVyOiBpbnRlcm5hdGlvbmFsbE5vLFxuICAgICAgICBuYXRpb25hbE51bWJlcjogbmF0aW9uYWxObyxcbiAgICAgICAgaXNvQ29kZTogdGhpcy5jb3VudHJ5Lmlzb0NvZGUsXG4gICAgICAgIGRpYWxDb2RlOiB0aGlzLmRpYWxDb2RlUHJlZml4ICsgdGhpcy5jb3VudHJ5LmRpYWxDb2RlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29kZUNoYW5nZS5lbWl0KCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5udW1iZXJJbnB1dEVsLnNldEZvY3VzKCk7XG4gICAgfSwgNDAwKTtcbiAgfVxuXG4gIG9uQ29kZUNsb3NlKCkge1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5zZXRJb25pY0NsYXNzZXModGhpcy5lbCk7XG4gICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgIHRoaXMuc2V0SXRlbUNsYXNzKHRoaXMuZWwsICdpdGVtLWhhcy1mb2N1cycsIGZhbHNlKTtcbiAgICB0aGlzLmNvZGVDbG9zZS5lbWl0KCk7XG4gIH1cblxuICBwdWJsaWMgb25Db2RlU2VhcmNoQ291bnRyaWVzKGV2ZW50OiB7XG4gICAgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsXG4gICAgdGV4dDogc3RyaW5nXG4gIH0pOiB2b2lkIHtcbiAgICBjb25zdCB0ZXh0ID0gZXZlbnQudGV4dC50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICBldmVudC5jb21wb25lbnQuc3RhcnRTZWFyY2goKTtcblxuICAgIGV2ZW50LmNvbXBvbmVudC5pdGVtcyA9IHRoaXMuZmlsdGVyQ291bnRyaWVzKHRleHQpO1xuICAgIGV2ZW50LmNvbXBvbmVudC5lbmRTZWFyY2goKTtcbiAgfVxuXG4gIG9uQ29kZVNlbGVjdCgpIHtcbiAgICB0aGlzLmNvZGVTZWxlY3QuZW1pdCgpO1xuICB9XG5cbiAgb25Jb25OdW1iZXJDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5zZXRJb25pY0NsYXNzZXModGhpcy5lbCk7XG4gICAgdGhpcy5udW1iZXJDaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxuICBvbklvbk51bWJlckJsdXIoKSB7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLnNldElvbmljQ2xhc3Nlcyh0aGlzLmVsKTtcbiAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy5zZXRJdGVtQ2xhc3ModGhpcy5lbCwgJ2l0ZW0taGFzLWZvY3VzJywgZmFsc2UpO1xuICAgIHRoaXMubnVtYmVyQmx1ci5lbWl0KCk7XG4gIH1cblxuICBvbklvbk51bWJlckZvY3VzKCkge1xuICAgIHRoaXMuaGFzRm9jdXMgPSB0cnVlO1xuICAgIHRoaXMuc2V0SXRlbUNsYXNzKHRoaXMuZWwsICdpdGVtLWhhcy1mb2N1cycsIHRydWUpO1xuICAgIHRoaXMubnVtYmVyRm9jdXMuZW1pdCgpO1xuICB9XG5cbiAgb25Jb25OdW1iZXJJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMubnVtYmVySW5wdXQuZW1pdChldmVudCk7XG4gIH1cblxuICBvbk51bWJlckNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5waG9uZU51bWJlcjtcbiAgICBsZXQgZ29vZ2xlTnVtYmVyOiBQaG9uZU51bWJlcjtcbiAgICB0cnkge1xuICAgICAgZ29vZ2xlTnVtYmVyID0gdGhpcy5waG9uZVV0aWwucGFyc2UodGhpcy5waG9uZU51bWJlciwgdGhpcy5jb3VudHJ5Lmlzb0NvZGUudG9VcHBlckNhc2UoKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cblxuICAgIGxldCBpc29Db2RlID0gdGhpcy5jb3VudHJ5ID8gdGhpcy5jb3VudHJ5Lmlzb0NvZGUgOiBudWxsO1xuICAgIC8vIGF1dG8gc2VsZWN0IGNvdW50cnkgYmFzZWQgb24gdGhlIGV4dGVuc2lvbiAoYW5kIGFyZWFDb2RlIGlmIG5lZWRlZCkgKGUuZyBzZWxlY3QgQ2FuYWRhIGlmIG51bWJlciBzdGFydHMgd2l0aCArMSA0MTYpXG4gICAgaWYgKHRoaXMuZW5hYmxlQXV0b0NvdW50cnlTZWxlY3QpIHtcbiAgICAgIGlzb0NvZGUgPSBnb29nbGVOdW1iZXIgJiYgZ29vZ2xlTnVtYmVyLmdldENvdW50cnlDb2RlKClcbiAgICAgID8gdGhpcy5nZXRDb3VudHJ5SXNvQ29kZShnb29nbGVOdW1iZXIuZ2V0Q291bnRyeUNvZGUoKSwgZ29vZ2xlTnVtYmVyKVxuICAgICAgOiB0aGlzLmNvdW50cnkuaXNvQ29kZTtcbiAgICAgIGlmIChpc29Db2RlICYmIGlzb0NvZGUgIT09IHRoaXMuY291bnRyeS5pc29Db2RlKSB7XG4gICAgICAgIGNvbnN0IG5ld0NvdW50cnkgPSB0aGlzLmNvdW50cmllcy5maW5kKChjb3VudHJ5OiBDb3VudHJ5SSkgPT4gY291bnRyeS5pc29Db2RlID09PSBpc29Db2RlKTtcbiAgICAgICAgaWYgKG5ld0NvdW50cnkpIHtcbiAgICAgICAgICB0aGlzLmNvdW50cnkgPSBuZXdDb3VudHJ5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlzb0NvZGUgPSBpc29Db2RlID9cbiAgICBpc29Db2RlIDpcbiAgICB0aGlzLmNvdW50cnkgPyB0aGlzLmNvdW50cnkuaXNvQ29kZSA6IG51bGw7XG5cbiAgICBpZiAodGhpcy5pc051bGxPcldoaXRlU3BhY2UodGhpcy52YWx1ZSkgfHwgdGhpcy5pc051bGxPcldoaXRlU3BhY2UoaXNvQ29kZSkpIHtcbiAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbnRlcm5hdGlvbmFsbE5vID0gZ29vZ2xlTnVtYmVyXG4gICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChnb29nbGVOdW1iZXIsIFBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpXG4gICAgICA6ICcnO1xuICAgICAgY29uc3QgbmF0aW9uYWxObyA9IGdvb2dsZU51bWJlclxuICAgICAgPyB0aGlzLnBob25lVXRpbC5mb3JtYXQoZ29vZ2xlTnVtYmVyLCBQaG9uZU51bWJlckZvcm1hdC5OQVRJT05BTClcbiAgICAgIDogJyc7XG5cbiAgICAgIGlmICh0aGlzLnNlcGFyYXRlRGlhbENvZGUgJiYgaW50ZXJuYXRpb25hbGxObykge1xuICAgICAgICB0aGlzLnBob25lTnVtYmVyID0gdGhpcy5yZW1vdmVEaWFsQ29kZShpbnRlcm5hdGlvbmFsbE5vKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2Uoe1xuICAgICAgICBudW1iZXI6IHRoaXMucGhvbmVOdW1iZXIsXG4gICAgICAgIGludGVybmF0aW9uYWxOdW1iZXI6IGludGVybmF0aW9uYWxsTm8sXG4gICAgICAgIG5hdGlvbmFsTnVtYmVyOiBuYXRpb25hbE5vLFxuICAgICAgICBpc29Db2RlOiB0aGlzLmNvdW50cnkuaXNvQ29kZSxcbiAgICAgICAgZGlhbENvZGU6IHRoaXMuZGlhbENvZGVQcmVmaXggKyB0aGlzLmNvdW50cnkuZGlhbENvZGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uTnVtYmVyS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IGFsbG93ZWRDaGFycyA9IC9eWzAtOVxcK1xcLVxcIF0vO1xuICAgIGNvbnN0IGFsbG93ZWRDdHJsQ2hhcnMgPSAvW2F4Y3ZdLztcbiAgICBjb25zdCBhbGxvd2VkT3RoZXJLZXlzID0gW1xuICAgICAgJ0Fycm93TGVmdCcsICdBcnJvd1VwJywgJ0Fycm93UmlnaHQnLCAnQXJyb3dEb3duJyxcbiAgICAgICdIb21lJywgJ0VuZCcsICdJbnNlcnQnLCAnRGVsZXRlJywgJ0JhY2tzcGFjZSdcbiAgICBdO1xuXG4gICAgaWYgKFxuICAgICAgIWFsbG93ZWRDaGFycy50ZXN0KGV2ZW50LmtleSkgJiZcbiAgICAgICEoZXZlbnQuY3RybEtleSAmJiBhbGxvd2VkQ3RybENoYXJzLnRlc3QoZXZlbnQua2V5KSkgJiZcbiAgICAgICEoYWxsb3dlZE90aGVyS2V5cy5pbmNsdWRlcyhldmVudC5rZXkpKVxuICAgICkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckNvdW50cmllcyh0ZXh0OiBzdHJpbmcpOiBDb3VudHJ5SVtdIHtcbiAgICByZXR1cm4gdGhpcy5jb3VudHJpZXMuZmlsdGVyKGNvdW50cnkgPT4ge1xuICAgICAgcmV0dXJuIGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dCkgIT09IC0xIHx8XG4gICAgICAgIGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dCkgIT09IC0xIHx8XG4gICAgICAgIGNvdW50cnkuZGlhbENvZGUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dCkgIT09IC0xO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb3VudHJ5SXNvQ29kZShjb3VudHJ5Q29kZTogbnVtYmVyLCBnb29nbGVOdW1iZXI6IFBob25lTnVtYmVyKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCByYXdOdW1iZXIgPSAoZ29vZ2xlTnVtYmVyIGFzIGFueSkudmFsdWVzX1syXS50b1N0cmluZygpO1xuXG4gICAgY29uc3QgY291bnRyaWVzID0gdGhpcy5jb3VudHJpZXMuZmlsdGVyKChjb3VudHJ5OiBDb3VudHJ5SSkgPT4gY291bnRyeS5kaWFsQ29kZSA9PT0gY291bnRyeUNvZGUudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgbWFpbkNvdW50cnkgPSBjb3VudHJpZXMuZmluZCgoY291bnRyeTogQ291bnRyeUkpID0+IGNvdW50cnkuYXJlYUNvZGVzID09PSB1bmRlZmluZWQpO1xuICAgIGNvbnN0IHNlY29uZGFyeUNvdW50cmllcyA9IGNvdW50cmllcy5maWx0ZXIoKGNvdW50cnk6IENvdW50cnlJKSA9PiBjb3VudHJ5LmFyZWFDb2RlcyAhPT0gdW5kZWZpbmVkKTtcblxuICAgIGxldCBtYXRjaGVkQ291bnRyeSA9IG1haW5Db3VudHJ5ID8gbWFpbkNvdW50cnkuaXNvQ29kZSA6IHVuZGVmaW5lZDtcblxuICAgIHNlY29uZGFyeUNvdW50cmllcy5mb3JFYWNoKGNvdW50cnkgPT4ge1xuICAgICAgY291bnRyeS5hcmVhQ29kZXMuZm9yRWFjaChhcmVhQ29kZSA9PiB7XG4gICAgICAgIGlmIChyYXdOdW1iZXIuc3RhcnRzV2l0aChhcmVhQ29kZSkpIHtcbiAgICAgICAgICBtYXRjaGVkQ291bnRyeSA9IGNvdW50cnkuaXNvQ29kZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoZWRDb3VudHJ5O1xuICB9XG5cblxuICBwcml2YXRlIGZldGNoQWxsQ291bnRyaWVzKCkge1xuICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy5pb25JbnRsVGVsSW5wdXRTZXJ2aWNlLmdldExpc3RPZkNvdW50cmllcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb3VudHJ5QnlJc29Db2RlKGlzb0NvZGU6IHN0cmluZyk6IENvdW50cnlJIHtcbiAgICBmb3IgKGNvbnN0IGNvdW50cnkgb2YgdGhpcy5jb3VudHJpZXMpIHtcbiAgICAgIGlmIChjb3VudHJ5Lmlzb0NvZGUgPT09IGlzb0NvZGUpIHtcbiAgICAgICAgcmV0dXJuIGNvdW50cnk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIHByaXZhdGUgaXNOdWxsT3JXaGl0ZVNwYWNlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YodmFsdWUpID09PSAnc3RyaW5nJyAmJiB2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZURpYWxDb2RlKHBob25lTnVtYmVyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnNlcGFyYXRlRGlhbENvZGUgJiYgcGhvbmVOdW1iZXIpIHtcbiAgICAgIHBob25lTnVtYmVyID0gcGhvbmVOdW1iZXIuc3Vic3RyKHBob25lTnVtYmVyLmluZGV4T2YoJyAnKSArIDEpO1xuICAgIH1cbiAgICByZXR1cm4gcGhvbmVOdW1iZXI7XG4gIH1cblxuICBwcml2YXRlIHNldENvdW50cnkoY291bnRyeTogQ291bnRyeUkpOiB2b2lkIHtcbiAgICB0aGlzLmNvdW50cnkgPSBjb3VudHJ5O1xuICAgIHRoaXMuY29kZUNoYW5nZS5lbWl0KHRoaXMuY291bnRyeSk7XG4gIH1cblxuICBwcml2YXRlIHNldFByZWZlcnJlZENvdW50cmllcygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHByZWZlcmVkQ291bnRyeUlzb0NvZGUgb2YgdGhpcy5wcmVmZXJyZWRDb3VudHJpZXMpIHtcbiAgICAgIGNvbnN0IGNvdW50cnkgPSB0aGlzLmdldENvdW50cnlCeUlzb0NvZGUocHJlZmVyZWRDb3VudHJ5SXNvQ29kZSk7XG4gICAgICBjb3VudHJ5LnByaW9yaXR5ID0gY291bnRyeSA/IDEgOiBjb3VudHJ5LnByaW9yaXR5O1xuICAgIH1cbiAgICB0aGlzLmNvdW50cmllcy5zb3J0KChhLCBiKSA9PiAoYS5wcmlvcml0eSA+IGIucHJpb3JpdHkpID8gLTEgOiAoKGEucHJpb3JpdHkgPCBiLnByaW9yaXR5KSA/IDEgOiAwKSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0c1dpdGggPSAoaW5wdXQ6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gaW5wdXQuc3Vic3RyKDAsIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XG4gIH1cblxuICBwcml2YXRlIGdldENsYXNzZXMgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBjbGFzc0xpc3QuaXRlbShpKTtcbiAgICAgIGlmIChpdGVtICE9PSBudWxsICYmIHRoaXMuc3RhcnRzV2l0aChpdGVtLCAnbmctJykpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKGBpb24tJHtpdGVtLnN1YnN0cigzKX1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzZXMgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIGNsYXNzZXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgW1xuICAgICAgJ2lvbi12YWxpZCcsXG4gICAgICAnaW9uLWludmFsaWQnLFxuICAgICAgJ2lvbi10b3VjaGVkJyxcbiAgICAgICdpb24tdW50b3VjaGVkJyxcbiAgICAgICdpb24tZGlydHknLFxuICAgICAgJ2lvbi1wcmlzdGluZSdcbiAgICBdLmZvckVhY2goYyA9PiBjbGFzc0xpc3QucmVtb3ZlKGMpKTtcblxuICAgIGNsYXNzZXMuZm9yRWFjaChjID0+IGNsYXNzTGlzdC5hZGQoYykpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRJb25pY0NsYXNzZXMgPSAoZWxlbWVudDogRWxlbWVudFJlZikgPT4ge1xuICAgIHJhZigoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmdldENsYXNzZXMoaW5wdXQpO1xuICAgICAgdGhpcy5zZXRDbGFzc2VzKGlucHV0LCBjbGFzc2VzKTtcblxuICAgICAgY29uc3QgaXRlbSA9IGlucHV0LmNsb3Nlc3QoJ2lvbi1pdGVtJyk7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICB0aGlzLnNldENsYXNzZXMoaXRlbSwgY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldEl0ZW1DbGFzcyA9IChlbGVtZW50OiBFbGVtZW50UmVmLCBjbGFzc05hbWU6IHN0cmluZywgYWRkQ2xhc3M6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBpdGVtID0gaW5wdXQuY2xvc2VzdCgnaW9uLWl0ZW0nKTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gaXRlbS5jbGFzc0xpc3Q7XG4gICAgICBpZiAoYWRkQ2xhc3MpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=