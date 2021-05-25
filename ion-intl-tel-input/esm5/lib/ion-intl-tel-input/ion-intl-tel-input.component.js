/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, forwardRef, Output, EventEmitter, ViewChild, ElementRef, HostBinding, } from '@angular/core';
import { NG_VALUE_ACCESSOR, } from '@angular/forms';
import { IonInput, Platform } from '@ionic/angular';
import { PhoneNumberFormat, PhoneNumberUtil, } from 'google-libphonenumber';
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
        this.phoneNumber = '';
        this.countries = [];
        this.disabled = false;
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
                'ion-pristine',
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
            console.log('set value');
            console.log('value:', value);
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
            this.countries = this.countries.filter((/**
             * @param {?} country
             * @return {?}
             */
            function (country) {
                return _this.onlyCountries.includes(country.isoCode);
            }));
        }
        if (this.selectFirstCountry) {
            if (this.defaultCountryiso) {
                this.setCountry(this.getCountryByIsoCode(this.defaultCountryiso));
            }
            else {
                if (this.preferredCountries.length &&
                    this.preferredCountries.includes(this.defaultCountryiso)) {
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
        if (this.countries &&
            changes.defaulyCountryisoCode &&
            changes.defaulyCountryisoCode.currentValue !==
                changes.defaulyCountryisoCode.previousValue) {
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
        console.log('write value');
        console.log(obj);
        console.log(this.value);
        this.fillValues(obj);
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
     * @param {?} value
     * @return {?}
     */
    IonIntlTelInputComponent.prototype.fillValues = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (value &&
            value !== null &&
            typeof value === 'object' &&
            !this.isNullOrWhiteSpace(value)) {
            console.log('do');
            this.phoneNumber = value.nationalNumber;
            this.setCountry(this.getCountryByIsoCode(value.isoCode));
            this.value = value;
        }
        else if (this.value &&
            this.value !== null &&
            typeof this.value === 'object' &&
            !this.isNullOrWhiteSpace(this.value)) {
            console.log('doi');
            this.phoneNumber = this.value.nationalNumber;
            this.setCountry(this.getCountryByIsoCode(this.value.isoCode));
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.onNumberChange();
        }), 1);
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
        console.log('code changed');
        if (this.isNullOrWhiteSpace(this.phoneNumber)) {
            console.log('its null');
            this.emitValueChange(null);
        }
        else {
            /** @type {?} */
            var googleNumber = void 0;
            try {
                googleNumber = this.phoneUtil.parse(this.phoneNumber, this.country.isoCode.toUpperCase());
            }
            catch (e) { }
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
                internationalNumber: internationallNo,
                nationalNumber: nationalNo,
                isoCode: this.country.isoCode,
                dialCode: this.dialCodePrefix + this.country.dialCode,
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
        console.log('on number change');
        if (!this.phoneNumber) {
            this.value = null;
            this.emitValueChange(null);
            return;
        }
        if (this.country) {
            this.emitValueChange({
                internationalNumber: this.dialCodePrefix + this.country.dialCode + ' ' + this.phoneNumber,
                nationalNumber: this.phoneNumber,
                isoCode: this.country.isoCode,
                dialCode: this.dialCodePrefix + this.country.dialCode,
            });
        }
        /** @type {?} */
        var googleNumber;
        try {
            googleNumber = this.phoneUtil.parse(this.phoneNumber, this.country.isoCode.toUpperCase());
        }
        catch (e) {
            return;
        }
        /** @type {?} */
        var isoCode = this.country ? this.country.isoCode : null;
        // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
        if (this.enableAutoCountrySelect) {
            isoCode =
                googleNumber && googleNumber.getCountryCode()
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
        isoCode = isoCode ? isoCode : this.country ? this.country.isoCode : null;
        if (!this.phoneNumber || !isoCode) {
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
                internationalNumber: internationallNo,
                nationalNumber: nationalNo,
                isoCode: this.country.isoCode,
                dialCode: this.dialCodePrefix + this.country.dialCode,
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
            'ArrowLeft',
            'ArrowUp',
            'ArrowRight',
            'ArrowDown',
            'Home',
            'End',
            'Insert',
            'Delete',
            'Backspace',
        ];
        if (!allowedChars.test(event.key) &&
            !(event.ctrlKey && allowedCtrlChars.test(event.key)) &&
            !allowedOtherKeys.includes(event.key)) {
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
            return (country.name.toLowerCase().indexOf(text) !== -1 ||
                country.name.toLowerCase().indexOf(text) !== -1 ||
                country.dialCode.toString().toLowerCase().indexOf(text) !== -1);
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
        if (typeof value === 'string' && value === '') {
            return true;
        }
        if (typeof value === 'object' && Object.keys(value).length === 0) {
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
        function (a, b) {
            return a.priority > b.priority ? -1 : a.priority < b.priority ? 1 : 0;
        }));
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
                            multi: true,
                        },
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
    IonIntlTelInputComponent.prototype.phoneNumber;
    /** @type {?} */
    IonIntlTelInputComponent.prototype.countries;
    /** @type {?} */
    IonIntlTelInputComponent.prototype.disabled;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9pb24taW50bC10ZWwtaW5wdXQvaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sWUFBWSxFQUdaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxpQkFBaUIsR0FHbEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3BELE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsZUFBZSxHQUNoQixNQUFNLHVCQUF1QixDQUFDO0FBSS9CLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUV2RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBS25DO0lBdVVFLGtDQUNVLEVBQWMsRUFDZCxRQUFrQixFQUNsQixzQkFBOEM7UUFIeEQsaUJBSUk7UUFITSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBdFR4RCxhQUFRLEdBQUcsSUFBSSxDQUFDOzs7Ozs7OztRQXlCaEIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDOzs7Ozs7Ozs7UUFXdkIsbUJBQWMsR0FBZSxHQUFHLENBQUM7Ozs7Ozs7O1FBVWpDLDRCQUF1QixHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7UUFVaEMsc0JBQWlCLEdBQUcsSUFBSSxDQUFDOzs7Ozs7OztRQVV6Qix3QkFBbUIsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7OztR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Ozs7O0lBU2hDLHFEQUN5Qjs7Ozs7Ozs7O0lBU3pCLHVEQUN5Qjs7Ozs7Ozs7OztJQVV6QixvREFDc0I7Ozs7Ozs7OztJQVN0Qiw2Q0FDaUI7Ozs7Ozs7OztJQVNqQiw4Q0FDOEI7Ozs7Ozs7OztJQVM5QixpREFDbUI7Ozs7Ozs7OztJQVNuQiwwREFDOEM7Ozs7Ozs7OztJQVM5QyxrREFDeUI7Ozs7Ozs7OztJQVN6Qix3REFDd0U7Ozs7Ozs7OztJQVN4RSxrREFDc0I7Ozs7Ozs7OztJQVN0Qiw0REFDZ0M7Ozs7Ozs7OztJQVNoQyw2REFDaUM7Ozs7Ozs7OztJQVNqQyx1REFDMkM7Ozs7Ozs7Ozs7SUFVM0MsaURBQ2tDOzs7Ozs7Ozs7O0lBVWxDLHNEQUN1Qzs7Ozs7Ozs7O0lBU3ZDLHNEQUMwQjs7Ozs7Ozs7O0lBUzFCLG9EQUN3Qjs7Ozs7Ozs7SUFReEIsZ0RBQ2tEOzs7Ozs7OztJQVFsRCw4Q0FDK0M7Ozs7Ozs7O0lBUS9DLCtDQUNnRDs7Ozs7Ozs7SUFRaEQsK0NBQ3lEOzs7Ozs7OztJQVF6RCw4Q0FDOEM7Ozs7Ozs7O0lBUTlDLDRDQUM0Qzs7Ozs7Ozs7SUFRNUMsNkNBQzZDOzs7Ozs7OztJQVE3Qyw4Q0FDOEM7O0lBRTlDLGlEQUFxRTs7Ozs7SUFHckUsMENBQTRDOztJQUU1QywyQ0FBa0I7O0lBQ2xCLCtDQUFpQjs7SUFDakIsNkNBQTJCOztJQUMzQiw0Q0FBaUI7O0lBQ2pCLDZDQUErQzs7SUFFL0MsNkNBQWlDOztJQUNqQyxtREFBeUQ7Ozs7O0lBNlh6RCw4Q0FFRTs7Ozs7SUFFRiw4Q0FVRTs7Ozs7SUFFRiw4Q0FZRTs7Ozs7SUFFRixtREFXRTs7Ozs7SUFFRixnREFlRTs7Ozs7SUFwYkEsc0NBQXNCOzs7OztJQUN0Qiw0Q0FBMEI7Ozs7O0lBQzFCLDBEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgZm9yd2FyZFJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgTkdfVkFMSURBVE9SUyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBJb25JbnB1dCwgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCB9IGZyb20gJ2lvbmljLXNlbGVjdGFibGUnO1xuaW1wb3J0IHtcbiAgUGhvbmVOdW1iZXIsXG4gIFBob25lTnVtYmVyRm9ybWF0LFxuICBQaG9uZU51bWJlclV0aWwsXG59IGZyb20gJ2dvb2dsZS1saWJwaG9uZW51bWJlcic7XG5cbmltcG9ydCB7IENvdW50cnlJIH0gZnJvbSAnLi4vbW9kZWxzL2NvdW50cnkubW9kZWwnO1xuaW1wb3J0IHsgSW9uSW50bFRlbElucHV0TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvaW9uLWludGwtdGVsLWlucHV0Lm1vZGVsJztcbmltcG9ydCB7IElvbkludGxUZWxJbnB1dFNlcnZpY2UgfSBmcm9tICcuLi9pb24taW50bC10ZWwtaW5wdXQuc2VydmljZSc7XG4vLyBpbXBvcnQgeyBpb25JbnRsVGVsSW5wdXRWYWxpZGF0b3IgfSBmcm9tICcuLi9pb24taW50bC10ZWwtaW5wdXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IHJhZiB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdpb24taW50bC10ZWwtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW9uSW50bFRlbElucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuXG4vKipcbiAqIEBhdXRob3IgQXp6YW0gQXNnaGFyIDxhenphbS5hc2doYXJAaW50ZXJzdGVsbHVzLmNvbT5cbiAqL1xuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLWludGwtdGVsLWlucHV0JylcbiAgY3NzQ2xhc3MgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbi1pbnRsLXRlbC1pbnB1dC1pb3MnKVxuICBpc0lvczogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb24taW50bC10ZWwtaW5wdXQtbWQnKVxuICBpc01EOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhhcy1mb2N1cycpXG4gIGhhc0ZvY3VzO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbi1pbnRsLXRlbC1pbnB1dC1oYXMtdmFsdWUnKVxuICBnZXQgaGFzVmFsdWVDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNWYWx1ZSgpO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLWludGwtdGVsLWlucHV0LWlzLWVuYWJsZWQnKVxuICBASW5wdXQoJ2lzRW5hYmxlZCcpXG4gIGdldCBpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIElzbyBDb2RlIG9mIGRlZmF1bHQgc2VsZWN0ZWQgQ291bnRyeS5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICcnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRDb3VudHJ5aXNvID0gJyc7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byB1c2UgYDAwYCBvciBgK2AgYXMgZGlhbCBjb2RlIHByZWZpeC5cbiAgICogQXZhaWxhYmxlIGF0dHJpYnV0ZXMgYXJlICcrJyB8ICcwMCcuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCArXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRpYWxDb2RlUHJlZml4OiAnKycgfCAnMDAnID0gJysnO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2VsZWN0IGF1dG9tYXRpYyBjb3VudHJ5IGJhc2VkIG9uIHVzZXIgaW5wdXQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBlbmFibGVBdXRvQ291bnRyeVNlbGVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gZXhhbXBsZSBudW1iZXIgd2lsbCBiZSBzaG93biBhcyBhIHBsYWNlaG9sZGVyIGluIGlucHV0LlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBlbmFibGVQbGFjZWhvbGRlciA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgZmFsbGFiYWNrIHBsYWNlaG9sZGVyIHRvIGJlIHVzZWQgaWYgbm8gZXhhbXBsZSBudW1iZXIgaXMgZm91bmQgZm9yIGEgY291bnRyeS5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICcnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGZhbGxiYWNrUGxhY2Vob2xkZXIgPSAnJztcblxuICAvKipcbiAgICogSWYgYSBjdXN0b20gcGxhY2Vob2xkZXIgaXMgbmVlZGVkIGZvciBpbnB1dC5cbiAgICogSWYgdGhpcyBwcm9wZXJ0eSBpcyBzZXQgaXQgd2lsbCBvdmVycmlkZSBgZW5hYmxlUGxhY2Vob2xkZXJgIGFuZCBvbmx5IHRoaXMgcGxhY2Vob2xkZXIgd2lsbCBiZSBzaG93bi5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICcnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGlucHV0UGxhY2Vob2xkZXIgPSAnJztcblxuICAvKipcbiAgICogTWF4aW11bSBMZW5ndGggZm9yIGlucHV0LlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJzE1J1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtYXhMZW5ndGggPSAnMTUnO1xuXG4gIC8qKlxuICAgKiBUaXRsZSBvZiBtb2RhbCBvcGVuZWQgdG8gc2VsZWN0IGNvdW50cnkgZGlhbCBjb2RlLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ1NlbGVjdCBDb3VudHJ5J1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbFRpdGxlID0gJ1NlbGVjdCBDb3VudHJ5JztcblxuICAvKipcbiAgICogQ1NTIGNsYXNzIHRvIGF0dGFjaCB0byBkaWFsIGNvZGUgc2VsZWN0aW9ubW9kYWwuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbENzc0NsYXNzID0gJyc7XG5cbiAgLyoqXG4gICAqIFBsYWNlaG9sZGVyIGZvciBpbnB1dCBpbiBkaWFsIGNvZGUgc2VsZWN0aW9uIG1vZGFsLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ0VudGVyIGNvdW50cnkgbmFtZSdcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxTZWFyY2hQbGFjZWhvbGRlciA9ICdFbnRlciBjb3VudHJ5IG5hbWUnO1xuXG4gIC8qKlxuICAgKiBUZXh0IGZvciBjbG9zZSBidXR0b24gaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICdDbG9zZSdcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxDbG9zZVRleHQgPSAnQ2xvc2UnO1xuXG4gIC8qKlxuICAgKiBTbG90IGZvciBjbG9zZSBidXR0b24gaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC4gW0lvbmljIHNsb3RzXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9pdGVtKSBhcmUgc3VwcG9ydGVkXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnZW5kJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbENsb3NlQnV0dG9uU2xvdDogJ3N0YXJ0JyB8ICdlbmQnIHwgJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgPSAnZW5kJztcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwgc2hvdWxkIGJlIHNlYXJjaGFibGUgb3Igbm90LlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ3RydWUnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsQ2FuU2VhcmNoID0gdHJ1ZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwgaXMgY2xvc2VkIG9uIGJhY2tkcm9wIGNsaWNrLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ3RydWUnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsU2hvdWxkQmFja2Ryb3BDbG9zZSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBpbnB1dCBzaG91bGQgYmUgZm9jdXNlZCB3aGVuIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwgaXMgb3BlbmVkLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ3RydWUnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsU2hvdWxkRm9jdXNTZWFyY2hiYXIgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIHRvIHNob3cgd2hlbiBubyBjb3VudHJpZXMgYXJlIGZvdW5kIGZvciBzZWFyY2ggaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICd0cnVlJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbFNlYXJjaEZhaWxUZXh0ID0gJ05vIGNvdW50cmllcyBmb3VuZCc7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgaXNvIGNvZGVzIG9mIG1hbnVhbGx5IHNlbGVjdGVkIGNvdW50cmllcyBhcyBzdHJpbmcsIHdoaWNoIHdpbGwgYXBwZWFyIGluIHRoZSBkcm9wZG93bi5cbiAgICogKipOb3RlKio6IGBvbmx5Q291bnRyaWVzYCBzaG91bGQgYmUgYSBzdHJpbmcgYXJyYXkgb2YgY291bnRyeSBpc28gY29kZXMuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG9ubHlDb3VudHJpZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAvKipcbiAgICogTGlzdCBvZiBpc28gY29kZXNuIGFzIHN0cmluZyBvZiAgY291bnRyaWVzLCB3aGljaCB3aWxsIGFwcGVhciBhdCB0aGUgdG9wIGluIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwuXG4gICAqICoqTm90ZSoqOiBgcHJlZmVycmVkQ291bnRyaWVzYCBzaG91bGQgYmUgYSBzdHJpbmcgYXJyYXkgb2YgY291bnRyeSBpc28gY29kZXMuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHByZWZlcnJlZENvdW50cmllczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgZmlyc3QgY291bnRyeSBzaG91bGQgYmUgc2VsZWN0ZWQgaW4gZGlhbCBjb2RlIHNlbGVjdCBvciBub3QuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNlbGVjdEZpcnN0Q291bnRyeSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byB2aXN1YWxseSBzZXBhcmF0ZSBkaWFsY29kZSBpbnRvIHRoZSBkcm9wIGRvd24gZWxlbWVudC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2VwYXJhdGVEaWFsQ29kZSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIFBob25lIG51bWJlciBJbnB1dCBpcyBjaGFuZ2VkLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG51bWJlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIFBob25lIG51bWJlciBJbnB1dCBpcyBibHVycmVkLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG51bWJlckJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIFBob25lIG51bWJlciBJbnB1dCBpcyBmb2N1c2VkLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG51bWJlckZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB1c2VyIGlzIHR5cGluZyBpbiBQaG9uZSBudW1iZXIgSW5wdXQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnVtYmVySW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIGRpYWwgY29kZSBzZWxlY3Rpb24gaXMgY2hhbmdlZC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwgaXMgb3BlbmVkLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGNvZGVPcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwgaXMgY2xvc2VkLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGNvZGVDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgZGlhbCBjb2RlIGlzIHNlbGVjdGVkIGluIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY29kZVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ251bWJlcklucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIG51bWJlcklucHV0RWw6IElvbklucHV0O1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF92YWx1ZTogSW9uSW50bFRlbElucHV0TW9kZWwgPSBudWxsO1xuXG4gIGNvdW50cnk6IENvdW50cnlJO1xuICBwaG9uZU51bWJlciA9ICcnO1xuICBjb3VudHJpZXM6IENvdW50cnlJW10gPSBbXTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgcGhvbmVVdGlsOiBhbnkgPSBQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKTtcblxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJvcGFnYXRlQ2hhbmdlID0gKF86IElvbkludGxUZWxJbnB1dE1vZGVsIHwgbnVsbCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGlvbkludGxUZWxJbnB1dFNlcnZpY2U6IElvbkludGxUZWxJbnB1dFNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldCB2YWx1ZSgpOiBJb25JbnRsVGVsSW5wdXRNb2RlbCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogSW9uSW50bFRlbElucHV0TW9kZWwgfCBudWxsKSB7XG4gICAgY29uc29sZS5sb2coJ3NldCB2YWx1ZScpO1xuICAgIGNvbnNvbGUubG9nKCd2YWx1ZTonLCB2YWx1ZSk7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldElvbmljQ2xhc3Nlcyh0aGlzLmVsKTtcbiAgfVxuXG4gIGVtaXRWYWx1ZUNoYW5nZShjaGFuZ2U6IElvbkludGxUZWxJbnB1dE1vZGVsIHwgbnVsbCkge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKGNoYW5nZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzSW9zID0gdGhpcy5wbGF0Zm9ybS5pcygnaW9zJyk7XG4gICAgdGhpcy5pc01EID0gIXRoaXMuaXNJb3M7XG4gICAgdGhpcy5zZXRJdGVtQ2xhc3ModGhpcy5lbCwgJ2l0ZW0taW50ZXJhY3RpdmUnLCB0cnVlKTtcblxuICAgIHRoaXMuZmV0Y2hBbGxDb3VudHJpZXMoKTtcbiAgICB0aGlzLnNldFByZWZlcnJlZENvdW50cmllcygpO1xuXG4gICAgaWYgKHRoaXMub25seUNvdW50cmllcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy5jb3VudHJpZXMuZmlsdGVyKChjb3VudHJ5OiBDb3VudHJ5SSkgPT5cbiAgICAgICAgdGhpcy5vbmx5Q291bnRyaWVzLmluY2x1ZGVzKGNvdW50cnkuaXNvQ29kZSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0Rmlyc3RDb3VudHJ5KSB7XG4gICAgICBpZiAodGhpcy5kZWZhdWx0Q291bnRyeWlzbykge1xuICAgICAgICB0aGlzLnNldENvdW50cnkodGhpcy5nZXRDb3VudHJ5QnlJc29Db2RlKHRoaXMuZGVmYXVsdENvdW50cnlpc28pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLnByZWZlcnJlZENvdW50cmllcy5sZW5ndGggJiZcbiAgICAgICAgICB0aGlzLnByZWZlcnJlZENvdW50cmllcy5pbmNsdWRlcyh0aGlzLmRlZmF1bHRDb3VudHJ5aXNvKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNldENvdW50cnkodGhpcy5nZXRDb3VudHJ5QnlJc29Db2RlKHRoaXMucHJlZmVycmVkQ291bnRyaWVzWzBdKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRDb3VudHJ5KHRoaXMuY291bnRyaWVzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNvdW50cmllcyAmJlxuICAgICAgY2hhbmdlcy5kZWZhdWx5Q291bnRyeWlzb0NvZGUgJiZcbiAgICAgIGNoYW5nZXMuZGVmYXVseUNvdW50cnlpc29Db2RlLmN1cnJlbnRWYWx1ZSAhPT1cbiAgICAgICAgY2hhbmdlcy5kZWZhdWx5Q291bnRyeWlzb0NvZGUucHJldmlvdXNWYWx1ZVxuICAgICkge1xuICAgICAgdGhpcy5zZXRDb3VudHJ5KGNoYW5nZXMuZGVmYXVseUNvdW50cnlpc29Db2RlLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IElvbkludGxUZWxJbnB1dE1vZGVsKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ3dyaXRlIHZhbHVlJyk7XG4gICAgY29uc29sZS5sb2cob2JqKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLmZpbGxWYWx1ZXMob2JqKTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgZmlsbFZhbHVlcyh2YWx1ZTogSW9uSW50bFRlbElucHV0TW9kZWwpIHtcbiAgICBpZiAoXG4gICAgICB2YWx1ZSAmJlxuICAgICAgdmFsdWUgIT09IG51bGwgJiZcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICF0aGlzLmlzTnVsbE9yV2hpdGVTcGFjZSh2YWx1ZSlcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkbycpO1xuICAgICAgdGhpcy5waG9uZU51bWJlciA9IHZhbHVlLm5hdGlvbmFsTnVtYmVyO1xuICAgICAgdGhpcy5zZXRDb3VudHJ5KHRoaXMuZ2V0Q291bnRyeUJ5SXNvQ29kZSh2YWx1ZS5pc29Db2RlKSk7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMudmFsdWUgJiZcbiAgICAgIHRoaXMudmFsdWUgIT09IG51bGwgJiZcbiAgICAgIHR5cGVvZiB0aGlzLnZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgIXRoaXMuaXNOdWxsT3JXaGl0ZVNwYWNlKHRoaXMudmFsdWUpXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZygnZG9pJyk7XG4gICAgICB0aGlzLnBob25lTnVtYmVyID0gdGhpcy52YWx1ZS5uYXRpb25hbE51bWJlcjtcbiAgICAgIHRoaXMuc2V0Q291bnRyeSh0aGlzLmdldENvdW50cnlCeUlzb0NvZGUodGhpcy52YWx1ZS5pc29Db2RlKSk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vbk51bWJlckNoYW5nZSgpO1xuICAgIH0sIDEpO1xuICB9XG5cbiAgaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmlzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIG9uQ29kZU9wZW4oKSB7XG4gICAgdGhpcy5jb2RlT3Blbi5lbWl0KCk7XG4gIH1cblxuICBvbkNvZGVDaGFuZ2UoZXZlbnQ6IHtcbiAgICBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudDtcbiAgICB2YWx1ZTogYW55O1xuICB9KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2NvZGUgY2hhbmdlZCcpO1xuICAgIGlmICh0aGlzLmlzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLnBob25lTnVtYmVyKSkge1xuICAgICAgY29uc29sZS5sb2coJ2l0cyBudWxsJyk7XG4gICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZShudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGdvb2dsZU51bWJlcjogUGhvbmVOdW1iZXI7XG4gICAgICB0cnkge1xuICAgICAgICBnb29nbGVOdW1iZXIgPSB0aGlzLnBob25lVXRpbC5wYXJzZShcbiAgICAgICAgICB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgICAgIHRoaXMuY291bnRyeS5pc29Db2RlLnRvVXBwZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIGNvbnN0IGludGVybmF0aW9uYWxsTm8gPSBnb29nbGVOdW1iZXJcbiAgICAgICAgPyB0aGlzLnBob25lVXRpbC5mb3JtYXQoZ29vZ2xlTnVtYmVyLCBQaG9uZU51bWJlckZvcm1hdC5JTlRFUk5BVElPTkFMKVxuICAgICAgICA6ICcnO1xuICAgICAgY29uc3QgbmF0aW9uYWxObyA9IGdvb2dsZU51bWJlclxuICAgICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChnb29nbGVOdW1iZXIsIFBob25lTnVtYmVyRm9ybWF0Lk5BVElPTkFMKVxuICAgICAgICA6ICcnO1xuXG4gICAgICBpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIGludGVybmF0aW9uYWxsTm8pIHtcbiAgICAgICAgdGhpcy5waG9uZU51bWJlciA9IHRoaXMucmVtb3ZlRGlhbENvZGUoaW50ZXJuYXRpb25hbGxObyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKHtcbiAgICAgICAgaW50ZXJuYXRpb25hbE51bWJlcjogaW50ZXJuYXRpb25hbGxObyxcbiAgICAgICAgbmF0aW9uYWxOdW1iZXI6IG5hdGlvbmFsTm8sXG4gICAgICAgIGlzb0NvZGU6IHRoaXMuY291bnRyeS5pc29Db2RlLFxuICAgICAgICBkaWFsQ29kZTogdGhpcy5kaWFsQ29kZVByZWZpeCArIHRoaXMuY291bnRyeS5kaWFsQ29kZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jb2RlQ2hhbmdlLmVtaXQoKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm51bWJlcklucHV0RWwuc2V0Rm9jdXMoKTtcbiAgICB9LCA0MDApO1xuICB9XG5cbiAgb25Db2RlQ2xvc2UoKSB7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLnNldElvbmljQ2xhc3Nlcyh0aGlzLmVsKTtcbiAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy5zZXRJdGVtQ2xhc3ModGhpcy5lbCwgJ2l0ZW0taGFzLWZvY3VzJywgZmFsc2UpO1xuICAgIHRoaXMuY29kZUNsb3NlLmVtaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNvZGVTZWFyY2hDb3VudHJpZXMoZXZlbnQ6IHtcbiAgICBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudDtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gIH0pOiB2b2lkIHtcbiAgICBjb25zdCB0ZXh0ID0gZXZlbnQudGV4dC50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICBldmVudC5jb21wb25lbnQuc3RhcnRTZWFyY2goKTtcblxuICAgIGV2ZW50LmNvbXBvbmVudC5pdGVtcyA9IHRoaXMuZmlsdGVyQ291bnRyaWVzKHRleHQpO1xuICAgIGV2ZW50LmNvbXBvbmVudC5lbmRTZWFyY2goKTtcbiAgfVxuXG4gIG9uQ29kZVNlbGVjdCgpIHtcbiAgICB0aGlzLmNvZGVTZWxlY3QuZW1pdCgpO1xuICB9XG5cbiAgb25Jb25OdW1iZXJDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5zZXRJb25pY0NsYXNzZXModGhpcy5lbCk7XG4gICAgdGhpcy5udW1iZXJDaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxuICBvbklvbk51bWJlckJsdXIoKSB7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLnNldElvbmljQ2xhc3Nlcyh0aGlzLmVsKTtcbiAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy5zZXRJdGVtQ2xhc3ModGhpcy5lbCwgJ2l0ZW0taGFzLWZvY3VzJywgZmFsc2UpO1xuICAgIHRoaXMubnVtYmVyQmx1ci5lbWl0KCk7XG4gIH1cblxuICBvbklvbk51bWJlckZvY3VzKCkge1xuICAgIHRoaXMuaGFzRm9jdXMgPSB0cnVlO1xuICAgIHRoaXMuc2V0SXRlbUNsYXNzKHRoaXMuZWwsICdpdGVtLWhhcy1mb2N1cycsIHRydWUpO1xuICAgIHRoaXMubnVtYmVyRm9jdXMuZW1pdCgpO1xuICB9XG5cbiAgb25Jb25OdW1iZXJJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMubnVtYmVySW5wdXQuZW1pdChldmVudCk7XG4gIH1cblxuICBvbk51bWJlckNoYW5nZSgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnb24gbnVtYmVyIGNoYW5nZScpO1xuICAgIGlmICghdGhpcy5waG9uZU51bWJlcikge1xuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY291bnRyeSkge1xuICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2Uoe1xuICAgICAgICBpbnRlcm5hdGlvbmFsTnVtYmVyOlxuICAgICAgICAgIHRoaXMuZGlhbENvZGVQcmVmaXggKyB0aGlzLmNvdW50cnkuZGlhbENvZGUgKyAnICcgKyB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgICBuYXRpb25hbE51bWJlcjogdGhpcy5waG9uZU51bWJlcixcbiAgICAgICAgaXNvQ29kZTogdGhpcy5jb3VudHJ5Lmlzb0NvZGUsXG4gICAgICAgIGRpYWxDb2RlOiB0aGlzLmRpYWxDb2RlUHJlZml4ICsgdGhpcy5jb3VudHJ5LmRpYWxDb2RlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBnb29nbGVOdW1iZXI6IFBob25lTnVtYmVyO1xuICAgIHRyeSB7XG4gICAgICBnb29nbGVOdW1iZXIgPSB0aGlzLnBob25lVXRpbC5wYXJzZShcbiAgICAgICAgdGhpcy5waG9uZU51bWJlcixcbiAgICAgICAgdGhpcy5jb3VudHJ5Lmlzb0NvZGUudG9VcHBlckNhc2UoKVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGlzb0NvZGUgPSB0aGlzLmNvdW50cnkgPyB0aGlzLmNvdW50cnkuaXNvQ29kZSA6IG51bGw7XG4gICAgLy8gYXV0byBzZWxlY3QgY291bnRyeSBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uIChhbmQgYXJlYUNvZGUgaWYgbmVlZGVkKSAoZS5nIHNlbGVjdCBDYW5hZGEgaWYgbnVtYmVyIHN0YXJ0cyB3aXRoICsxIDQxNilcbiAgICBpZiAodGhpcy5lbmFibGVBdXRvQ291bnRyeVNlbGVjdCkge1xuICAgICAgaXNvQ29kZSA9XG4gICAgICAgIGdvb2dsZU51bWJlciAmJiBnb29nbGVOdW1iZXIuZ2V0Q291bnRyeUNvZGUoKVxuICAgICAgICAgID8gdGhpcy5nZXRDb3VudHJ5SXNvQ29kZShnb29nbGVOdW1iZXIuZ2V0Q291bnRyeUNvZGUoKSwgZ29vZ2xlTnVtYmVyKVxuICAgICAgICAgIDogdGhpcy5jb3VudHJ5Lmlzb0NvZGU7XG4gICAgICBpZiAoaXNvQ29kZSAmJiBpc29Db2RlICE9PSB0aGlzLmNvdW50cnkuaXNvQ29kZSkge1xuICAgICAgICBjb25zdCBuZXdDb3VudHJ5ID0gdGhpcy5jb3VudHJpZXMuZmluZChcbiAgICAgICAgICAoY291bnRyeTogQ291bnRyeUkpID0+IGNvdW50cnkuaXNvQ29kZSA9PT0gaXNvQ29kZVxuICAgICAgICApO1xuICAgICAgICBpZiAobmV3Q291bnRyeSkge1xuICAgICAgICAgIHRoaXMuY291bnRyeSA9IG5ld0NvdW50cnk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaXNvQ29kZSA9IGlzb0NvZGUgPyBpc29Db2RlIDogdGhpcy5jb3VudHJ5ID8gdGhpcy5jb3VudHJ5Lmlzb0NvZGUgOiBudWxsO1xuXG4gICAgaWYgKCF0aGlzLnBob25lTnVtYmVyIHx8ICFpc29Db2RlKSB7XG4gICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZShudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW50ZXJuYXRpb25hbGxObyA9IGdvb2dsZU51bWJlclxuICAgICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChnb29nbGVOdW1iZXIsIFBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpXG4gICAgICAgIDogJyc7XG4gICAgICBjb25zdCBuYXRpb25hbE5vID0gZ29vZ2xlTnVtYmVyXG4gICAgICAgID8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KGdvb2dsZU51bWJlciwgUGhvbmVOdW1iZXJGb3JtYXQuTkFUSU9OQUwpXG4gICAgICAgIDogJyc7XG5cbiAgICAgIGlmICh0aGlzLnNlcGFyYXRlRGlhbENvZGUgJiYgaW50ZXJuYXRpb25hbGxObykge1xuICAgICAgICB0aGlzLnBob25lTnVtYmVyID0gdGhpcy5yZW1vdmVEaWFsQ29kZShpbnRlcm5hdGlvbmFsbE5vKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2Uoe1xuICAgICAgICBpbnRlcm5hdGlvbmFsTnVtYmVyOiBpbnRlcm5hdGlvbmFsbE5vLFxuICAgICAgICBuYXRpb25hbE51bWJlcjogbmF0aW9uYWxObyxcbiAgICAgICAgaXNvQ29kZTogdGhpcy5jb3VudHJ5Lmlzb0NvZGUsXG4gICAgICAgIGRpYWxDb2RlOiB0aGlzLmRpYWxDb2RlUHJlZml4ICsgdGhpcy5jb3VudHJ5LmRpYWxDb2RlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25OdW1iZXJLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgY29uc3QgYWxsb3dlZENoYXJzID0gL15bMC05XFwrXFwtXFwgXS87XG4gICAgY29uc3QgYWxsb3dlZEN0cmxDaGFycyA9IC9bYXhjdl0vO1xuICAgIGNvbnN0IGFsbG93ZWRPdGhlcktleXMgPSBbXG4gICAgICAnQXJyb3dMZWZ0JyxcbiAgICAgICdBcnJvd1VwJyxcbiAgICAgICdBcnJvd1JpZ2h0JyxcbiAgICAgICdBcnJvd0Rvd24nLFxuICAgICAgJ0hvbWUnLFxuICAgICAgJ0VuZCcsXG4gICAgICAnSW5zZXJ0JyxcbiAgICAgICdEZWxldGUnLFxuICAgICAgJ0JhY2tzcGFjZScsXG4gICAgXTtcblxuICAgIGlmIChcbiAgICAgICFhbGxvd2VkQ2hhcnMudGVzdChldmVudC5rZXkpICYmXG4gICAgICAhKGV2ZW50LmN0cmxLZXkgJiYgYWxsb3dlZEN0cmxDaGFycy50ZXN0KGV2ZW50LmtleSkpICYmXG4gICAgICAhYWxsb3dlZE90aGVyS2V5cy5pbmNsdWRlcyhldmVudC5rZXkpXG4gICAgKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyQ291bnRyaWVzKHRleHQ6IHN0cmluZyk6IENvdW50cnlJW10ge1xuICAgIHJldHVybiB0aGlzLmNvdW50cmllcy5maWx0ZXIoKGNvdW50cnkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dCkgIT09IC0xIHx8XG4gICAgICAgIGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dCkgIT09IC0xIHx8XG4gICAgICAgIGNvdW50cnkuZGlhbENvZGUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dCkgIT09IC0xXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb3VudHJ5SXNvQ29kZShcbiAgICBjb3VudHJ5Q29kZTogbnVtYmVyLFxuICAgIGdvb2dsZU51bWJlcjogUGhvbmVOdW1iZXJcbiAgKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCByYXdOdW1iZXIgPSAoZ29vZ2xlTnVtYmVyIGFzIGFueSkudmFsdWVzX1syXS50b1N0cmluZygpO1xuXG4gICAgY29uc3QgY291bnRyaWVzID0gdGhpcy5jb3VudHJpZXMuZmlsdGVyKFxuICAgICAgKGNvdW50cnk6IENvdW50cnlJKSA9PiBjb3VudHJ5LmRpYWxDb2RlID09PSBjb3VudHJ5Q29kZS50b1N0cmluZygpXG4gICAgKTtcbiAgICBjb25zdCBtYWluQ291bnRyeSA9IGNvdW50cmllcy5maW5kKFxuICAgICAgKGNvdW50cnk6IENvdW50cnlJKSA9PiBjb3VudHJ5LmFyZWFDb2RlcyA9PT0gdW5kZWZpbmVkXG4gICAgKTtcbiAgICBjb25zdCBzZWNvbmRhcnlDb3VudHJpZXMgPSBjb3VudHJpZXMuZmlsdGVyKFxuICAgICAgKGNvdW50cnk6IENvdW50cnlJKSA9PiBjb3VudHJ5LmFyZWFDb2RlcyAhPT0gdW5kZWZpbmVkXG4gICAgKTtcblxuICAgIGxldCBtYXRjaGVkQ291bnRyeSA9IG1haW5Db3VudHJ5ID8gbWFpbkNvdW50cnkuaXNvQ29kZSA6IHVuZGVmaW5lZDtcblxuICAgIHNlY29uZGFyeUNvdW50cmllcy5mb3JFYWNoKChjb3VudHJ5KSA9PiB7XG4gICAgICBjb3VudHJ5LmFyZWFDb2Rlcy5mb3JFYWNoKChhcmVhQ29kZSkgPT4ge1xuICAgICAgICBpZiAocmF3TnVtYmVyLnN0YXJ0c1dpdGgoYXJlYUNvZGUpKSB7XG4gICAgICAgICAgbWF0Y2hlZENvdW50cnkgPSBjb3VudHJ5Lmlzb0NvZGU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXRjaGVkQ291bnRyeTtcbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2hBbGxDb3VudHJpZXMoKSB7XG4gICAgdGhpcy5jb3VudHJpZXMgPSB0aGlzLmlvbkludGxUZWxJbnB1dFNlcnZpY2UuZ2V0TGlzdE9mQ291bnRyaWVzKCk7XG4gIH1cblxuICBwcml2YXRlIGdldENvdW50cnlCeUlzb0NvZGUoaXNvQ29kZTogc3RyaW5nKTogQ291bnRyeUkge1xuICAgIGZvciAoY29uc3QgY291bnRyeSBvZiB0aGlzLmNvdW50cmllcykge1xuICAgICAgaWYgKGNvdW50cnkuaXNvQ29kZSA9PT0gaXNvQ29kZSkge1xuICAgICAgICByZXR1cm4gY291bnRyeTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpdmF0ZSBpc051bGxPcldoaXRlU3BhY2UodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlRGlhbENvZGUocGhvbmVOdW1iZXI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc2VwYXJhdGVEaWFsQ29kZSAmJiBwaG9uZU51bWJlcikge1xuICAgICAgcGhvbmVOdW1iZXIgPSBwaG9uZU51bWJlci5zdWJzdHIocGhvbmVOdW1iZXIuaW5kZXhPZignICcpICsgMSk7XG4gICAgfVxuICAgIHJldHVybiBwaG9uZU51bWJlcjtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q291bnRyeShjb3VudHJ5OiBDb3VudHJ5SSk6IHZvaWQge1xuICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnk7XG4gICAgdGhpcy5jb2RlQ2hhbmdlLmVtaXQodGhpcy5jb3VudHJ5KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0UHJlZmVycmVkQ291bnRyaWVzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcHJlZmVyZWRDb3VudHJ5SXNvQ29kZSBvZiB0aGlzLnByZWZlcnJlZENvdW50cmllcykge1xuICAgICAgY29uc3QgY291bnRyeSA9IHRoaXMuZ2V0Q291bnRyeUJ5SXNvQ29kZShwcmVmZXJlZENvdW50cnlJc29Db2RlKTtcbiAgICAgIGNvdW50cnkucHJpb3JpdHkgPSBjb3VudHJ5ID8gMSA6IGNvdW50cnkucHJpb3JpdHk7XG4gICAgfVxuICAgIHRoaXMuY291bnRyaWVzLnNvcnQoKGEsIGIpID0+XG4gICAgICBhLnByaW9yaXR5ID4gYi5wcmlvcml0eSA/IC0xIDogYS5wcmlvcml0eSA8IGIucHJpb3JpdHkgPyAxIDogMFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0c1dpdGggPSAoaW5wdXQ6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gaW5wdXQuc3Vic3RyKDAsIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XG4gIH07XG5cbiAgcHJpdmF0ZSBnZXRDbGFzc2VzID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gY2xhc3NMaXN0Lml0ZW0oaSk7XG4gICAgICBpZiAoaXRlbSAhPT0gbnVsbCAmJiB0aGlzLnN0YXJ0c1dpdGgoaXRlbSwgJ25nLScpKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChgaW9uLSR7aXRlbS5zdWJzdHIoMyl9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9O1xuXG4gIHByaXZhdGUgc2V0Q2xhc3NlcyA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgY2xhc3Nlczogc3RyaW5nW10pID0+IHtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgICBbXG4gICAgICAnaW9uLXZhbGlkJyxcbiAgICAgICdpb24taW52YWxpZCcsXG4gICAgICAnaW9uLXRvdWNoZWQnLFxuICAgICAgJ2lvbi11bnRvdWNoZWQnLFxuICAgICAgJ2lvbi1kaXJ0eScsXG4gICAgICAnaW9uLXByaXN0aW5lJyxcbiAgICBdLmZvckVhY2goKGMpID0+IGNsYXNzTGlzdC5yZW1vdmUoYykpO1xuXG4gICAgY2xhc3Nlcy5mb3JFYWNoKChjKSA9PiBjbGFzc0xpc3QuYWRkKGMpKTtcbiAgfTtcblxuICBwcml2YXRlIHNldElvbmljQ2xhc3NlcyA9IChlbGVtZW50OiBFbGVtZW50UmVmKSA9PiB7XG4gICAgcmFmKCgpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuZ2V0Q2xhc3NlcyhpbnB1dCk7XG4gICAgICB0aGlzLnNldENsYXNzZXMoaW5wdXQsIGNsYXNzZXMpO1xuXG4gICAgICBjb25zdCBpdGVtID0gaW5wdXQuY2xvc2VzdCgnaW9uLWl0ZW0nKTtcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3NlcyhpdGVtLCBjbGFzc2VzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBwcml2YXRlIHNldEl0ZW1DbGFzcyA9IChcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIGNsYXNzTmFtZTogc3RyaW5nLFxuICAgIGFkZENsYXNzOiBib29sZWFuXG4gICkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGl0ZW0gPSBpbnB1dC5jbG9zZXN0KCdpb24taXRlbScpO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBpdGVtLmNsYXNzTGlzdDtcbiAgICAgIGlmIChhZGRDbGFzcykge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIl19