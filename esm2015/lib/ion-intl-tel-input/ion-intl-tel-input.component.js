/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/**
 * @author Azzam Asghar <azzam.asghar@interstellus.com>
 */
export class IonIntlTelInputComponent {
    /**
     * @param {?} el
     * @param {?} platform
     * @param {?} ionIntlTelInputService
     */
    constructor(el, platform, ionIntlTelInputService) {
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
        () => { });
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.startsWith = (/**
         * @param {?} input
         * @param {?} search
         * @return {?}
         */
        (input, search) => {
            return input.substr(0, search.length) === search;
        });
        this.getClasses = (/**
         * @param {?} element
         * @return {?}
         */
        (element) => {
            /** @type {?} */
            const classList = element.classList;
            /** @type {?} */
            const classes = [];
            for (let i = 0; i < classList.length; i++) {
                /** @type {?} */
                const item = classList.item(i);
                if (item !== null && this.startsWith(item, 'ng-')) {
                    classes.push(`ion-${item.substr(3)}`);
                }
            }
            return classes;
        });
        this.setClasses = (/**
         * @param {?} element
         * @param {?} classes
         * @return {?}
         */
        (element, classes) => {
            /** @type {?} */
            const classList = element.classList;
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
            (c) => classList.remove(c)));
            classes.forEach((/**
             * @param {?} c
             * @return {?}
             */
            (c) => classList.add(c)));
        });
        this.setIonicClasses = (/**
         * @param {?} element
         * @return {?}
         */
        (element) => {
            raf((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const input = (/** @type {?} */ (element.nativeElement));
                /** @type {?} */
                const classes = this.getClasses(input);
                this.setClasses(input, classes);
                /** @type {?} */
                const item = input.closest('ion-item');
                if (item) {
                    this.setClasses(item, classes);
                }
            }));
        });
        this.setItemClass = (/**
         * @param {?} element
         * @param {?} className
         * @param {?} addClass
         * @return {?}
         */
        (element, className, addClass) => {
            /** @type {?} */
            const input = (/** @type {?} */ (element.nativeElement));
            /** @type {?} */
            const item = input.closest('ion-item');
            if (item) {
                /** @type {?} */
                const classList = item.classList;
                if (addClass) {
                    classList.add(className);
                }
                else {
                    classList.remove(className);
                }
            }
        });
    }
    /**
     * @return {?}
     */
    get hasValueCssClass() {
        return this.hasValue();
    }
    /**
     * @return {?}
     */
    get isEnabled() {
        return !this.disabled;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        console.log('set value');
        console.log('value:', value);
        this._value = value;
        this.setIonicClasses(this.el);
    }
    /**
     * @param {?} change
     * @return {?}
     */
    emitValueChange(change) {
        this.propagateChange(change);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
            (country) => this.onlyCountries.includes(country.isoCode)));
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.countries &&
            changes.defaulyCountryisoCode &&
            changes.defaulyCountryisoCode.currentValue !==
                changes.defaulyCountryisoCode.previousValue) {
            this.setCountry(changes.defaulyCountryisoCode.currentValue);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        console.log('write value');
        console.log(obj);
        console.log(this.value);
        this.fillValues(obj);
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    fillValues(value) {
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
        () => {
            this.onNumberChange();
        }), 1);
    }
    /**
     * @return {?}
     */
    hasValue() {
        return !this.isNullOrWhiteSpace(this.value);
    }
    /**
     * @return {?}
     */
    onCodeOpen() {
        this.codeOpen.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCodeChange(event) {
        console.log('code changed');
        if (this.isNullOrWhiteSpace(this.phoneNumber)) {
            console.log('its null');
            this.emitValueChange(null);
        }
        else {
            /** @type {?} */
            let googleNumber;
            try {
                googleNumber = this.phoneUtil.parse(this.phoneNumber, this.country.isoCode.toUpperCase());
            }
            catch (e) { }
            /** @type {?} */
            const internationallNo = googleNumber
                ? this.phoneUtil.format(googleNumber, PhoneNumberFormat.INTERNATIONAL)
                : '';
            /** @type {?} */
            const nationalNo = googleNumber
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
        () => {
            this.numberInputEl.setFocus();
        }), 400);
    }
    /**
     * @return {?}
     */
    onCodeClose() {
        this.onTouched();
        this.setIonicClasses(this.el);
        this.hasFocus = false;
        this.setItemClass(this.el, 'item-has-focus', false);
        this.codeClose.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCodeSearchCountries(event) {
        /** @type {?} */
        const text = event.text.trim().toLowerCase();
        event.component.startSearch();
        event.component.items = this.filterCountries(text);
        event.component.endSearch();
    }
    /**
     * @return {?}
     */
    onCodeSelect() {
        this.codeSelect.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onIonNumberChange(event) {
        this.setIonicClasses(this.el);
        this.numberChange.emit(event);
    }
    /**
     * @return {?}
     */
    onIonNumberBlur() {
        this.onTouched();
        this.setIonicClasses(this.el);
        this.hasFocus = false;
        this.setItemClass(this.el, 'item-has-focus', false);
        this.numberBlur.emit();
    }
    /**
     * @return {?}
     */
    onIonNumberFocus() {
        this.hasFocus = true;
        this.setItemClass(this.el, 'item-has-focus', true);
        this.numberFocus.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onIonNumberInput(event) {
        this.numberInput.emit(event);
    }
    /**
     * @return {?}
     */
    onNumberChange() {
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
        let googleNumber;
        try {
            googleNumber = this.phoneUtil.parse(this.phoneNumber, this.country.isoCode.toUpperCase());
        }
        catch (e) {
            return;
        }
        /** @type {?} */
        let isoCode = this.country ? this.country.isoCode : null;
        // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
        if (this.enableAutoCountrySelect) {
            isoCode =
                googleNumber && googleNumber.getCountryCode()
                    ? this.getCountryIsoCode(googleNumber.getCountryCode(), googleNumber)
                    : this.country.isoCode;
            if (isoCode && isoCode !== this.country.isoCode) {
                /** @type {?} */
                const newCountry = this.countries.find((/**
                 * @param {?} country
                 * @return {?}
                 */
                (country) => country.isoCode === isoCode));
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
            const internationallNo = googleNumber
                ? this.phoneUtil.format(googleNumber, PhoneNumberFormat.INTERNATIONAL)
                : '';
            /** @type {?} */
            const nationalNo = googleNumber
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onNumberKeyDown(event) {
        /** @type {?} */
        const allowedChars = /^[0-9\+\-\ ]/;
        /** @type {?} */
        const allowedCtrlChars = /[axcv]/;
        /** @type {?} */
        const allowedOtherKeys = [
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
    }
    /**
     * @private
     * @param {?} text
     * @return {?}
     */
    filterCountries(text) {
        return this.countries.filter((/**
         * @param {?} country
         * @return {?}
         */
        (country) => {
            return (country.name.toLowerCase().indexOf(text) !== -1 ||
                country.name.toLowerCase().indexOf(text) !== -1 ||
                country.dialCode.toString().toLowerCase().indexOf(text) !== -1);
        }));
    }
    /**
     * @private
     * @param {?} countryCode
     * @param {?} googleNumber
     * @return {?}
     */
    getCountryIsoCode(countryCode, googleNumber) {
        /** @type {?} */
        const rawNumber = ((/** @type {?} */ (googleNumber))).values_[2].toString();
        /** @type {?} */
        const countries = this.countries.filter((/**
         * @param {?} country
         * @return {?}
         */
        (country) => country.dialCode === countryCode.toString()));
        /** @type {?} */
        const mainCountry = countries.find((/**
         * @param {?} country
         * @return {?}
         */
        (country) => country.areaCodes === undefined));
        /** @type {?} */
        const secondaryCountries = countries.filter((/**
         * @param {?} country
         * @return {?}
         */
        (country) => country.areaCodes !== undefined));
        /** @type {?} */
        let matchedCountry = mainCountry ? mainCountry.isoCode : undefined;
        secondaryCountries.forEach((/**
         * @param {?} country
         * @return {?}
         */
        (country) => {
            country.areaCodes.forEach((/**
             * @param {?} areaCode
             * @return {?}
             */
            (areaCode) => {
                if (rawNumber.startsWith(areaCode)) {
                    matchedCountry = country.isoCode;
                }
            }));
        }));
        return matchedCountry;
    }
    /**
     * @private
     * @return {?}
     */
    fetchAllCountries() {
        this.countries = this.ionIntlTelInputService.getListOfCountries();
    }
    /**
     * @private
     * @param {?} isoCode
     * @return {?}
     */
    getCountryByIsoCode(isoCode) {
        for (const country of this.countries) {
            if (country.isoCode === isoCode) {
                return country;
            }
        }
        return;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isNullOrWhiteSpace(value) {
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
    }
    /**
     * @private
     * @param {?} phoneNumber
     * @return {?}
     */
    removeDialCode(phoneNumber) {
        if (this.separateDialCode && phoneNumber) {
            phoneNumber = phoneNumber.substr(phoneNumber.indexOf(' ') + 1);
        }
        return phoneNumber;
    }
    /**
     * @private
     * @param {?} country
     * @return {?}
     */
    setCountry(country) {
        this.country = country;
        this.codeChange.emit(this.country);
    }
    /**
     * @private
     * @return {?}
     */
    setPreferredCountries() {
        for (const preferedCountryIsoCode of this.preferredCountries) {
            /** @type {?} */
            const country = this.getCountryByIsoCode(preferedCountryIsoCode);
            country.priority = country ? 1 : country.priority;
        }
        this.countries.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.priority > b.priority ? -1 : a.priority < b.priority ? 1 : 0));
    }
}
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
                        () => IonIntlTelInputComponent)),
                        multi: true,
                    },
                ],
                styles: [":host{width:100%;display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end}:host .ion-intl-tel-input-code{position:relative}:host .ion-intl-tel-input-number{-webkit-box-flex:1;flex:1}:host .ionic-selectable-label-default,:host .ionic-selectable-label-fixed{max-width:100%}:host .ionic-selectable:not(:host.ionic-selectable-label-stacked):not(:host.ionic-selectable-label-floating) ::ng-deep .ionic-selectable-inner .ionic-selectable-value{padding-top:10px;padding-bottom:10px}:host .ionic-selectable:not(:host.ionic-selectable-label-stacked):not(:host.ionic-selectable-label-floating) ::ng-deep .ionic-selectable-icon-inner{top:17px}:host .flag-icon{margin-right:var(--flag-code-gap,15px)}"]
            }] }
];
/** @nocollapse */
IonIntlTelInputComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Platform },
    { type: IonIntlTelInputService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9pb24taW50bC10ZWwtaW5wdXQvaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixZQUFZLEVBR1osU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLGlCQUFpQixHQUdsQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHcEQsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixlQUFlLEdBQ2hCLE1BQU0sdUJBQXVCLENBQUM7QUFJL0IsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRXZFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFtQm5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBc1RuQyxZQUNVLEVBQWMsRUFDZCxRQUFrQixFQUNsQixzQkFBOEM7UUFGOUMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQXRUeEQsYUFBUSxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7UUF5QmhCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7O1FBV3ZCLG1CQUFjLEdBQWUsR0FBRyxDQUFDOzs7Ozs7OztRQVVqQyw0QkFBdUIsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7O1FBVWhDLHNCQUFpQixHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7UUFVekIsd0JBQW1CLEdB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LDhDQUMrQzs7Ozs7Ozs7SUFRL0MsK0NBQ2dEOzs7Ozs7OztJQVFoRCwrQ0FDeUQ7Ozs7Ozs7O0lBUXpELDhDQUM4Qzs7Ozs7Ozs7SUFROUMsNENBQzRDOzs7Ozs7OztJQVE1Qyw2Q0FDNkM7Ozs7Ozs7O0lBUTdDLDhDQUM4Qzs7SUFFOUMsaURBQXFFOzs7OztJQUdyRSwwQ0FBNEM7O0lBRTVDLDJDQUFrQjs7SUFDbEIsK0NBQWlCOztJQUNqQiw2Q0FBMkI7O0lBQzNCLDRDQUFpQjs7SUFDakIsNkNBQStDOztJQUUvQyw2Q0FBaUM7O0lBQ2pDLG1EQUF5RDs7Ozs7SUE2WHpELDhDQUVFOzs7OztJQUVGLDhDQVVFOzs7OztJQUVGLDhDQVlFOzs7OztJQUVGLG1EQVdFOzs7OztJQUVGLGdEQWVFOzs7OztJQXBiQSxzQ0FBc0I7Ozs7O0lBQ3RCLDRDQUEwQjs7Ozs7SUFDMUIsMERBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBmb3J3YXJkUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOR19WQUxJREFUT1JTLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElvbklucHV0LCBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50IH0gZnJvbSAnaW9uaWMtc2VsZWN0YWJsZSc7XG5pbXBvcnQge1xuICBQaG9uZU51bWJlcixcbiAgUGhvbmVOdW1iZXJGb3JtYXQsXG4gIFBob25lTnVtYmVyVXRpbCxcbn0gZnJvbSAnZ29vZ2xlLWxpYnBob25lbnVtYmVyJztcblxuaW1wb3J0IHsgQ291bnRyeUkgfSBmcm9tICcuLi9tb2RlbHMvY291bnRyeS5tb2RlbCc7XG5pbXBvcnQgeyBJb25JbnRsVGVsSW5wdXRNb2RlbCB9IGZyb20gJy4uL21vZGVscy9pb24taW50bC10ZWwtaW5wdXQubW9kZWwnO1xuaW1wb3J0IHsgSW9uSW50bFRlbElucHV0U2VydmljZSB9IGZyb20gJy4uL2lvbi1pbnRsLXRlbC1pbnB1dC5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IGlvbkludGxUZWxJbnB1dFZhbGlkYXRvciB9IGZyb20gJy4uL2lvbi1pbnRsLXRlbC1pbnB1dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgcmFmIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2lvbi1pbnRsLXRlbC1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pb24taW50bC10ZWwtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pb24taW50bC10ZWwtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5cbi8qKlxuICogQGF1dGhvciBBenphbSBBc2doYXIgPGF6emFtLmFzZ2hhckBpbnRlcnN0ZWxsdXMuY29tPlxuICovXG5leHBvcnQgY2xhc3MgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb24taW50bC10ZWwtaW5wdXQnKVxuICBjc3NDbGFzcyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLWludGwtdGVsLWlucHV0LWlvcycpXG4gIGlzSW9zOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbi1pbnRsLXRlbC1pbnB1dC1tZCcpXG4gIGlzTUQ6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGFzLWZvY3VzJylcbiAgaGFzRm9jdXM7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLWludGwtdGVsLWlucHV0LWhhcy12YWx1ZScpXG4gIGdldCBoYXNWYWx1ZUNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc1ZhbHVlKCk7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb24taW50bC10ZWwtaW5wdXQtaXMtZW5hYmxlZCcpXG4gIEBJbnB1dCgnaXNFbmFibGVkJylcbiAgZ2V0IGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogSXNvIENvZGUgb2YgZGVmYXVsdCBzZWxlY3RlZCBDb3VudHJ5LlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJydcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZGVmYXVsdENvdW50cnlpc28gPSAnJztcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHVzZSBgMDBgIG9yIGArYCBhcyBkaWFsIGNvZGUgcHJlZml4LlxuICAgKiBBdmFpbGFibGUgYXR0cmlidXRlcyBhcmUgJysnIHwgJzAwJy5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICtcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZGlhbENvZGVQcmVmaXg6ICcrJyB8ICcwMCcgPSAnKyc7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBzZWxlY3QgYXV0b21hdGljIGNvdW50cnkgYmFzZWQgb24gdXNlciBpbnB1dC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGVuYWJsZUF1dG9Db3VudHJ5U2VsZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBhbiBleGFtcGxlIG51bWJlciB3aWxsIGJlIHNob3duIGFzIGEgcGxhY2Vob2xkZXIgaW4gaW5wdXQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGVuYWJsZVBsYWNlaG9sZGVyID0gdHJ1ZTtcblxuICAvKipcbiAgICogQSBmYWxsYWJhY2sgcGxhY2Vob2xkZXIgdG8gYmUgdXNlZCBpZiBubyBleGFtcGxlIG51bWJlciBpcyBmb3VuZCBmb3IgYSBjb3VudHJ5LlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJydcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZmFsbGJhY2tQbGFjZWhvbGRlciA9ICcnO1xuXG4gIC8qKlxuICAgKiBJZiBhIGN1c3RvbSBwbGFjZWhvbGRlciBpcyBuZWVkZWQgZm9yIGlucHV0LlxuICAgKiBJZiB0aGlzIHByb3BlcnR5IGlzIHNldCBpdCB3aWxsIG92ZXJyaWRlIGBlbmFibGVQbGFjZWhvbGRlcmAgYW5kIG9ubHkgdGhpcyBwbGFjZWhvbGRlciB3aWxsIGJlIHNob3duLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJydcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaW5wdXRQbGFjZWhvbGRlciA9ICcnO1xuXG4gIC8qKlxuICAgKiBNYXhpbXVtIExlbmd0aCBmb3IgaW5wdXQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnMTUnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1heExlbmd0aCA9ICcxNSc7XG5cbiAgLyoqXG4gICAqIFRpdGxlIG9mIG1vZGFsIG9wZW5lZCB0byBzZWxlY3QgY291bnRyeSBkaWFsIGNvZGUuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnU2VsZWN0IENvdW50cnknXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsVGl0bGUgPSAnU2VsZWN0IENvdW50cnknO1xuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3MgdG8gYXR0YWNoIHRvIGRpYWwgY29kZSBzZWxlY3Rpb25tb2RhbC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICcnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsQ3NzQ2xhc3MgPSAnJztcblxuICAvKipcbiAgICogUGxhY2Vob2xkZXIgZm9yIGlucHV0IGluIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnRW50ZXIgY291bnRyeSBuYW1lJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbFNlYXJjaFBsYWNlaG9sZGVyID0gJ0VudGVyIGNvdW50cnkgbmFtZSc7XG5cbiAgLyoqXG4gICAqIFRleHQgZm9yIGNsb3NlIGJ1dHRvbiBpbiBkaWFsIGNvZGUgc2VsZWN0aW9uIG1vZGFsLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ0Nsb3NlJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbENsb3NlVGV4dCA9ICdDbG9zZSc7XG5cbiAgLyoqXG4gICAqIFNsb3QgZm9yIGNsb3NlIGJ1dHRvbiBpbiBkaWFsIGNvZGUgc2VsZWN0aW9uIG1vZGFsLiBbSW9uaWMgc2xvdHNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2l0ZW0pIGFyZSBzdXBwb3J0ZWRcbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICdlbmQnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsQ2xvc2VCdXR0b25TbG90OiAnc3RhcnQnIHwgJ2VuZCcgfCAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyA9ICdlbmQnO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBzaG91bGQgYmUgc2VhcmNoYWJsZSBvciBub3QuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAndHJ1ZSdcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxDYW5TZWFyY2ggPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBjbG9zZWQgb24gYmFja2Ryb3AgY2xpY2suXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAndHJ1ZSdcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxTaG91bGRCYWNrZHJvcENsb3NlID0gdHJ1ZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGlucHV0IHNob3VsZCBiZSBmb2N1c2VkIHdoZW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBvcGVuZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAndHJ1ZSdcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxTaG91bGRGb2N1c1NlYXJjaGJhciA9IHRydWU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgdG8gc2hvdyB3aGVuIG5vIGNvdW50cmllcyBhcmUgZm91bmQgZm9yIHNlYXJjaCBpbiBkaWFsIGNvZGUgc2VsZWN0aW9uIG1vZGFsLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ3RydWUnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsU2VhcmNoRmFpbFRleHQgPSAnTm8gY291bnRyaWVzIGZvdW5kJztcblxuICAvKipcbiAgICogTGlzdCBvZiBpc28gY29kZXMgb2YgbWFudWFsbHkgc2VsZWN0ZWQgY291bnRyaWVzIGFzIHN0cmluZywgd2hpY2ggd2lsbCBhcHBlYXIgaW4gdGhlIGRyb3Bkb3duLlxuICAgKiAqKk5vdGUqKjogYG9ubHlDb3VudHJpZXNgIHNob3VsZCBiZSBhIHN0cmluZyBhcnJheSBvZiBjb3VudHJ5IGlzbyBjb2Rlcy5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgb25seUNvdW50cmllczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGlzbyBjb2Rlc24gYXMgc3RyaW5nIG9mICBjb3VudHJpZXMsIHdoaWNoIHdpbGwgYXBwZWFyIGF0IHRoZSB0b3AgaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC5cbiAgICogKipOb3RlKio6IGBwcmVmZXJyZWRDb3VudHJpZXNgIHNob3VsZCBiZSBhIHN0cmluZyBhcnJheSBvZiBjb3VudHJ5IGlzbyBjb2Rlcy5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgcHJlZmVycmVkQ291bnRyaWVzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBmaXJzdCBjb3VudHJ5IHNob3VsZCBiZSBzZWxlY3RlZCBpbiBkaWFsIGNvZGUgc2VsZWN0IG9yIG5vdC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2VsZWN0Rmlyc3RDb3VudHJ5ID0gdHJ1ZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHZpc3VhbGx5IHNlcGFyYXRlIGRpYWxjb2RlIGludG8gdGhlIGRyb3AgZG93biBlbGVtZW50LlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXBhcmF0ZURpYWxDb2RlID0gdHJ1ZTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgUGhvbmUgbnVtYmVyIElucHV0IGlzIGNoYW5nZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnVtYmVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgUGhvbmUgbnVtYmVyIElucHV0IGlzIGJsdXJyZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnVtYmVyQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgUGhvbmUgbnVtYmVyIElucHV0IGlzIGZvY3VzZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnVtYmVyRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHVzZXIgaXMgdHlwaW5nIGluIFBob25lIG51bWJlciBJbnB1dC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBudW1iZXJJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgZGlhbCBjb2RlIHNlbGVjdGlvbiBpcyBjaGFuZ2VkLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGNvZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBvcGVuZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY29kZU9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBjbG9zZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY29kZUNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBkaWFsIGNvZGUgaXMgc2VsZWN0ZWQgaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjb2RlU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgnbnVtYmVySW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgbnVtYmVySW5wdXRFbDogSW9uSW5wdXQ7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX3ZhbHVlOiBJb25JbnRsVGVsSW5wdXRNb2RlbCA9IG51bGw7XG5cbiAgY291bnRyeTogQ291bnRyeUk7XG4gIHBob25lTnVtYmVyID0gJyc7XG4gIGNvdW50cmllczogQ291bnRyeUlbXSA9IFtdO1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuICBwaG9uZVV0aWw6IGFueSA9IFBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpO1xuXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogSW9uSW50bFRlbElucHV0TW9kZWwgfCBudWxsKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgaW9uSW50bFRlbElucHV0U2VydmljZTogSW9uSW50bFRlbElucHV0U2VydmljZVxuICApIHt9XG5cbiAgZ2V0IHZhbHVlKCk6IElvbkludGxUZWxJbnB1dE1vZGVsIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBJb25JbnRsVGVsSW5wdXRNb2RlbCB8IG51bGwpIHtcbiAgICBjb25zb2xlLmxvZygnc2V0IHZhbHVlJyk7XG4gICAgY29uc29sZS5sb2coJ3ZhbHVlOicsIHZhbHVlKTtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0SW9uaWNDbGFzc2VzKHRoaXMuZWwpO1xuICB9XG5cbiAgZW1pdFZhbHVlQ2hhbmdlKGNoYW5nZTogSW9uSW50bFRlbElucHV0TW9kZWwgfCBudWxsKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UoY2hhbmdlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNJb3MgPSB0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKTtcbiAgICB0aGlzLmlzTUQgPSAhdGhpcy5pc0lvcztcbiAgICB0aGlzLnNldEl0ZW1DbGFzcyh0aGlzLmVsLCAnaXRlbS1pbnRlcmFjdGl2ZScsIHRydWUpO1xuXG4gICAgdGhpcy5mZXRjaEFsbENvdW50cmllcygpO1xuICAgIHRoaXMuc2V0UHJlZmVycmVkQ291bnRyaWVzKCk7XG5cbiAgICBpZiAodGhpcy5vbmx5Q291bnRyaWVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5jb3VudHJpZXMgPSB0aGlzLmNvdW50cmllcy5maWx0ZXIoKGNvdW50cnk6IENvdW50cnlJKSA9PlxuICAgICAgICB0aGlzLm9ubHlDb3VudHJpZXMuaW5jbHVkZXMoY291bnRyeS5pc29Db2RlKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3RGaXJzdENvdW50cnkpIHtcbiAgICAgIGlmICh0aGlzLmRlZmF1bHRDb3VudHJ5aXNvKSB7XG4gICAgICAgIHRoaXMuc2V0Q291bnRyeSh0aGlzLmdldENvdW50cnlCeUlzb0NvZGUodGhpcy5kZWZhdWx0Q291bnRyeWlzbykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCAmJlxuICAgICAgICAgIHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmluY2x1ZGVzKHRoaXMuZGVmYXVsdENvdW50cnlpc28pXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuc2V0Q291bnRyeSh0aGlzLmdldENvdW50cnlCeUlzb0NvZGUodGhpcy5wcmVmZXJyZWRDb3VudHJpZXNbMF0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldENvdW50cnkodGhpcy5jb3VudHJpZXNbMF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY291bnRyaWVzICYmXG4gICAgICBjaGFuZ2VzLmRlZmF1bHlDb3VudHJ5aXNvQ29kZSAmJlxuICAgICAgY2hhbmdlcy5kZWZhdWx5Q291bnRyeWlzb0NvZGUuY3VycmVudFZhbHVlICE9PVxuICAgICAgICBjaGFuZ2VzLmRlZmF1bHlDb3VudHJ5aXNvQ29kZS5wcmV2aW91c1ZhbHVlXG4gICAgKSB7XG4gICAgICB0aGlzLnNldENvdW50cnkoY2hhbmdlcy5kZWZhdWx5Q291bnRyeWlzb0NvZGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKG9iajogSW9uSW50bFRlbElucHV0TW9kZWwpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnd3JpdGUgdmFsdWUnKTtcbiAgICBjb25zb2xlLmxvZyhvYmopO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuZmlsbFZhbHVlcyhvYmopO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBmaWxsVmFsdWVzKHZhbHVlOiBJb25JbnRsVGVsSW5wdXRNb2RlbCkge1xuICAgIGlmIChcbiAgICAgIHZhbHVlICYmXG4gICAgICB2YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgIXRoaXMuaXNOdWxsT3JXaGl0ZVNwYWNlKHZhbHVlKVxuICAgICkge1xuICAgICAgY29uc29sZS5sb2coJ2RvJyk7XG4gICAgICB0aGlzLnBob25lTnVtYmVyID0gdmFsdWUubmF0aW9uYWxOdW1iZXI7XG4gICAgICB0aGlzLnNldENvdW50cnkodGhpcy5nZXRDb3VudHJ5QnlJc29Db2RlKHZhbHVlLmlzb0NvZGUpKTtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy52YWx1ZSAmJlxuICAgICAgdGhpcy52YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIHRoaXMudmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgICAhdGhpcy5pc051bGxPcldoaXRlU3BhY2UodGhpcy52YWx1ZSlcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkb2knKTtcbiAgICAgIHRoaXMucGhvbmVOdW1iZXIgPSB0aGlzLnZhbHVlLm5hdGlvbmFsTnVtYmVyO1xuICAgICAgdGhpcy5zZXRDb3VudHJ5KHRoaXMuZ2V0Q291bnRyeUJ5SXNvQ29kZSh0aGlzLnZhbHVlLmlzb0NvZGUpKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm9uTnVtYmVyQ2hhbmdlKCk7XG4gICAgfSwgMSk7XG4gIH1cblxuICBoYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaXNOdWxsT3JXaGl0ZVNwYWNlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgb25Db2RlT3BlbigpIHtcbiAgICB0aGlzLmNvZGVPcGVuLmVtaXQoKTtcbiAgfVxuXG4gIG9uQ29kZUNoYW5nZShldmVudDoge1xuICAgIGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50O1xuICAgIHZhbHVlOiBhbnk7XG4gIH0pOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnY29kZSBjaGFuZ2VkJyk7XG4gICAgaWYgKHRoaXMuaXNOdWxsT3JXaGl0ZVNwYWNlKHRoaXMucGhvbmVOdW1iZXIpKSB7XG4gICAgICBjb25zb2xlLmxvZygnaXRzIG51bGwnKTtcbiAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZ29vZ2xlTnVtYmVyOiBQaG9uZU51bWJlcjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGdvb2dsZU51bWJlciA9IHRoaXMucGhvbmVVdGlsLnBhcnNlKFxuICAgICAgICAgIHRoaXMucGhvbmVOdW1iZXIsXG4gICAgICAgICAgdGhpcy5jb3VudHJ5Lmlzb0NvZGUudG9VcHBlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgY29uc3QgaW50ZXJuYXRpb25hbGxObyA9IGdvb2dsZU51bWJlclxuICAgICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChnb29nbGVOdW1iZXIsIFBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpXG4gICAgICAgIDogJyc7XG4gICAgICBjb25zdCBuYXRpb25hbE5vID0gZ29vZ2xlTnVtYmVyXG4gICAgICAgID8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KGdvb2dsZU51bWJlciwgUGhvbmVOdW1iZXJGb3JtYXQuTkFUSU9OQUwpXG4gICAgICAgIDogJyc7XG5cbiAgICAgIGlmICh0aGlzLnNlcGFyYXRlRGlhbENvZGUgJiYgaW50ZXJuYXRpb25hbGxObykge1xuICAgICAgICB0aGlzLnBob25lTnVtYmVyID0gdGhpcy5yZW1vdmVEaWFsQ29kZShpbnRlcm5hdGlvbmFsbE5vKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2Uoe1xuICAgICAgICBpbnRlcm5hdGlvbmFsTnVtYmVyOiBpbnRlcm5hdGlvbmFsbE5vLFxuICAgICAgICBuYXRpb25hbE51bWJlcjogbmF0aW9uYWxObyxcbiAgICAgICAgaXNvQ29kZTogdGhpcy5jb3VudHJ5Lmlzb0NvZGUsXG4gICAgICAgIGRpYWxDb2RlOiB0aGlzLmRpYWxDb2RlUHJlZml4ICsgdGhpcy5jb3VudHJ5LmRpYWxDb2RlLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmNvZGVDaGFuZ2UuZW1pdCgpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubnVtYmVySW5wdXRFbC5zZXRGb2N1cygpO1xuICAgIH0sIDQwMCk7XG4gIH1cblxuICBvbkNvZGVDbG9zZSgpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMuc2V0SW9uaWNDbGFzc2VzKHRoaXMuZWwpO1xuICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLnNldEl0ZW1DbGFzcyh0aGlzLmVsLCAnaXRlbS1oYXMtZm9jdXMnLCBmYWxzZSk7XG4gICAgdGhpcy5jb2RlQ2xvc2UuZW1pdCgpO1xuICB9XG5cbiAgcHVibGljIG9uQ29kZVNlYXJjaENvdW50cmllcyhldmVudDoge1xuICAgIGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50O1xuICAgIHRleHQ6IHN0cmluZztcbiAgfSk6IHZvaWQge1xuICAgIGNvbnN0IHRleHQgPSBldmVudC50ZXh0LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIGV2ZW50LmNvbXBvbmVudC5zdGFydFNlYXJjaCgpO1xuXG4gICAgZXZlbnQuY29tcG9uZW50Lml0ZW1zID0gdGhpcy5maWx0ZXJDb3VudHJpZXModGV4dCk7XG4gICAgZXZlbnQuY29tcG9uZW50LmVuZFNlYXJjaCgpO1xuICB9XG5cbiAgb25Db2RlU2VsZWN0KCkge1xuICAgIHRoaXMuY29kZVNlbGVjdC5lbWl0KCk7XG4gIH1cblxuICBvbklvbk51bWJlckNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnNldElvbmljQ2xhc3Nlcyh0aGlzLmVsKTtcbiAgICB0aGlzLm51bWJlckNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uSW9uTnVtYmVyQmx1cigpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMuc2V0SW9uaWNDbGFzc2VzKHRoaXMuZWwpO1xuICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLnNldEl0ZW1DbGFzcyh0aGlzLmVsLCAnaXRlbS1oYXMtZm9jdXMnLCBmYWxzZSk7XG4gICAgdGhpcy5udW1iZXJCbHVyLmVtaXQoKTtcbiAgfVxuXG4gIG9uSW9uTnVtYmVyRm9jdXMoKSB7XG4gICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgdGhpcy5zZXRJdGVtQ2xhc3ModGhpcy5lbCwgJ2l0ZW0taGFzLWZvY3VzJywgdHJ1ZSk7XG4gICAgdGhpcy5udW1iZXJGb2N1cy5lbWl0KCk7XG4gIH1cblxuICBvbklvbk51bWJlcklucHV0KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5udW1iZXJJbnB1dC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uTnVtYmVyQ2hhbmdlKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdvbiBudW1iZXIgY2hhbmdlJyk7XG4gICAgaWYgKCF0aGlzLnBob25lTnVtYmVyKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb3VudHJ5KSB7XG4gICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZSh7XG4gICAgICAgIGludGVybmF0aW9uYWxOdW1iZXI6XG4gICAgICAgICAgdGhpcy5kaWFsQ29kZVByZWZpeCArIHRoaXMuY291bnRyeS5kaWFsQ29kZSArICcgJyArIHRoaXMucGhvbmVOdW1iZXIsXG4gICAgICAgIG5hdGlvbmFsTnVtYmVyOiB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgICBpc29Db2RlOiB0aGlzLmNvdW50cnkuaXNvQ29kZSxcbiAgICAgICAgZGlhbENvZGU6IHRoaXMuZGlhbENvZGVQcmVmaXggKyB0aGlzLmNvdW50cnkuZGlhbENvZGUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgbGV0IGdvb2dsZU51bWJlcjogUGhvbmVOdW1iZXI7XG4gICAgdHJ5IHtcbiAgICAgIGdvb2dsZU51bWJlciA9IHRoaXMucGhvbmVVdGlsLnBhcnNlKFxuICAgICAgICB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgICB0aGlzLmNvdW50cnkuaXNvQ29kZS50b1VwcGVyQ2FzZSgpXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaXNvQ29kZSA9IHRoaXMuY291bnRyeSA/IHRoaXMuY291bnRyeS5pc29Db2RlIDogbnVsbDtcbiAgICAvLyBhdXRvIHNlbGVjdCBjb3VudHJ5IGJhc2VkIG9uIHRoZSBleHRlbnNpb24gKGFuZCBhcmVhQ29kZSBpZiBuZWVkZWQpIChlLmcgc2VsZWN0IENhbmFkYSBpZiBudW1iZXIgc3RhcnRzIHdpdGggKzEgNDE2KVxuICAgIGlmICh0aGlzLmVuYWJsZUF1dG9Db3VudHJ5U2VsZWN0KSB7XG4gICAgICBpc29Db2RlID1cbiAgICAgICAgZ29vZ2xlTnVtYmVyICYmIGdvb2dsZU51bWJlci5nZXRDb3VudHJ5Q29kZSgpXG4gICAgICAgICAgPyB0aGlzLmdldENvdW50cnlJc29Db2RlKGdvb2dsZU51bWJlci5nZXRDb3VudHJ5Q29kZSgpLCBnb29nbGVOdW1iZXIpXG4gICAgICAgICAgOiB0aGlzLmNvdW50cnkuaXNvQ29kZTtcbiAgICAgIGlmIChpc29Db2RlICYmIGlzb0NvZGUgIT09IHRoaXMuY291bnRyeS5pc29Db2RlKSB7XG4gICAgICAgIGNvbnN0IG5ld0NvdW50cnkgPSB0aGlzLmNvdW50cmllcy5maW5kKFxuICAgICAgICAgIChjb3VudHJ5OiBDb3VudHJ5SSkgPT4gY291bnRyeS5pc29Db2RlID09PSBpc29Db2RlXG4gICAgICAgICk7XG4gICAgICAgIGlmIChuZXdDb3VudHJ5KSB7XG4gICAgICAgICAgdGhpcy5jb3VudHJ5ID0gbmV3Q291bnRyeTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpc29Db2RlID0gaXNvQ29kZSA/IGlzb0NvZGUgOiB0aGlzLmNvdW50cnkgPyB0aGlzLmNvdW50cnkuaXNvQ29kZSA6IG51bGw7XG5cbiAgICBpZiAoIXRoaXMucGhvbmVOdW1iZXIgfHwgIWlzb0NvZGUpIHtcbiAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbnRlcm5hdGlvbmFsbE5vID0gZ29vZ2xlTnVtYmVyXG4gICAgICAgID8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KGdvb2dsZU51bWJlciwgUGhvbmVOdW1iZXJGb3JtYXQuSU5URVJOQVRJT05BTClcbiAgICAgICAgOiAnJztcbiAgICAgIGNvbnN0IG5hdGlvbmFsTm8gPSBnb29nbGVOdW1iZXJcbiAgICAgICAgPyB0aGlzLnBob25lVXRpbC5mb3JtYXQoZ29vZ2xlTnVtYmVyLCBQaG9uZU51bWJlckZvcm1hdC5OQVRJT05BTClcbiAgICAgICAgOiAnJztcblxuICAgICAgaWYgKHRoaXMuc2VwYXJhdGVEaWFsQ29kZSAmJiBpbnRlcm5hdGlvbmFsbE5vKSB7XG4gICAgICAgIHRoaXMucGhvbmVOdW1iZXIgPSB0aGlzLnJlbW92ZURpYWxDb2RlKGludGVybmF0aW9uYWxsTm8pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZSh7XG4gICAgICAgIGludGVybmF0aW9uYWxOdW1iZXI6IGludGVybmF0aW9uYWxsTm8sXG4gICAgICAgIG5hdGlvbmFsTnVtYmVyOiBuYXRpb25hbE5vLFxuICAgICAgICBpc29Db2RlOiB0aGlzLmNvdW50cnkuaXNvQ29kZSxcbiAgICAgICAgZGlhbENvZGU6IHRoaXMuZGlhbENvZGVQcmVmaXggKyB0aGlzLmNvdW50cnkuZGlhbENvZGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbk51bWJlcktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBhbGxvd2VkQ2hhcnMgPSAvXlswLTlcXCtcXC1cXCBdLztcbiAgICBjb25zdCBhbGxvd2VkQ3RybENoYXJzID0gL1theGN2XS87XG4gICAgY29uc3QgYWxsb3dlZE90aGVyS2V5cyA9IFtcbiAgICAgICdBcnJvd0xlZnQnLFxuICAgICAgJ0Fycm93VXAnLFxuICAgICAgJ0Fycm93UmlnaHQnLFxuICAgICAgJ0Fycm93RG93bicsXG4gICAgICAnSG9tZScsXG4gICAgICAnRW5kJyxcbiAgICAgICdJbnNlcnQnLFxuICAgICAgJ0RlbGV0ZScsXG4gICAgICAnQmFja3NwYWNlJyxcbiAgICBdO1xuXG4gICAgaWYgKFxuICAgICAgIWFsbG93ZWRDaGFycy50ZXN0KGV2ZW50LmtleSkgJiZcbiAgICAgICEoZXZlbnQuY3RybEtleSAmJiBhbGxvd2VkQ3RybENoYXJzLnRlc3QoZXZlbnQua2V5KSkgJiZcbiAgICAgICFhbGxvd2VkT3RoZXJLZXlzLmluY2x1ZGVzKGV2ZW50LmtleSlcbiAgICApIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJDb3VudHJpZXModGV4dDogc3RyaW5nKTogQ291bnRyeUlbXSB7XG4gICAgcmV0dXJuIHRoaXMuY291bnRyaWVzLmZpbHRlcigoY291bnRyeSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0KSAhPT0gLTEgfHxcbiAgICAgICAgY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0KSAhPT0gLTEgfHxcbiAgICAgICAgY291bnRyeS5kaWFsQ29kZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0KSAhPT0gLTFcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldENvdW50cnlJc29Db2RlKFxuICAgIGNvdW50cnlDb2RlOiBudW1iZXIsXG4gICAgZ29vZ2xlTnVtYmVyOiBQaG9uZU51bWJlclxuICApOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHJhd051bWJlciA9IChnb29nbGVOdW1iZXIgYXMgYW55KS52YWx1ZXNfWzJdLnRvU3RyaW5nKCk7XG5cbiAgICBjb25zdCBjb3VudHJpZXMgPSB0aGlzLmNvdW50cmllcy5maWx0ZXIoXG4gICAgICAoY291bnRyeTogQ291bnRyeUkpID0+IGNvdW50cnkuZGlhbENvZGUgPT09IGNvdW50cnlDb2RlLnRvU3RyaW5nKClcbiAgICApO1xuICAgIGNvbnN0IG1haW5Db3VudHJ5ID0gY291bnRyaWVzLmZpbmQoXG4gICAgICAoY291bnRyeTogQ291bnRyeUkpID0+IGNvdW50cnkuYXJlYUNvZGVzID09PSB1bmRlZmluZWRcbiAgICApO1xuICAgIGNvbnN0IHNlY29uZGFyeUNvdW50cmllcyA9IGNvdW50cmllcy5maWx0ZXIoXG4gICAgICAoY291bnRyeTogQ291bnRyeUkpID0+IGNvdW50cnkuYXJlYUNvZGVzICE9PSB1bmRlZmluZWRcbiAgICApO1xuXG4gICAgbGV0IG1hdGNoZWRDb3VudHJ5ID0gbWFpbkNvdW50cnkgPyBtYWluQ291bnRyeS5pc29Db2RlIDogdW5kZWZpbmVkO1xuXG4gICAgc2Vjb25kYXJ5Q291bnRyaWVzLmZvckVhY2goKGNvdW50cnkpID0+IHtcbiAgICAgIGNvdW50cnkuYXJlYUNvZGVzLmZvckVhY2goKGFyZWFDb2RlKSA9PiB7XG4gICAgICAgIGlmIChyYXdOdW1iZXIuc3RhcnRzV2l0aChhcmVhQ29kZSkpIHtcbiAgICAgICAgICBtYXRjaGVkQ291bnRyeSA9IGNvdW50cnkuaXNvQ29kZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoZWRDb3VudHJ5O1xuICB9XG5cbiAgcHJpdmF0ZSBmZXRjaEFsbENvdW50cmllcygpIHtcbiAgICB0aGlzLmNvdW50cmllcyA9IHRoaXMuaW9uSW50bFRlbElucHV0U2VydmljZS5nZXRMaXN0T2ZDb3VudHJpZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q291bnRyeUJ5SXNvQ29kZShpc29Db2RlOiBzdHJpbmcpOiBDb3VudHJ5SSB7XG4gICAgZm9yIChjb25zdCBjb3VudHJ5IG9mIHRoaXMuY291bnRyaWVzKSB7XG4gICAgICBpZiAoY291bnRyeS5pc29Db2RlID09PSBpc29Db2RlKSB7XG4gICAgICAgIHJldHVybiBjb3VudHJ5O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBwcml2YXRlIGlzTnVsbE9yV2hpdGVTcGFjZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVEaWFsQ29kZShwaG9uZU51bWJlcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIHBob25lTnVtYmVyKSB7XG4gICAgICBwaG9uZU51bWJlciA9IHBob25lTnVtYmVyLnN1YnN0cihwaG9uZU51bWJlci5pbmRleE9mKCcgJykgKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHBob25lTnVtYmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb3VudHJ5KGNvdW50cnk6IENvdW50cnlJKTogdm9pZCB7XG4gICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcbiAgICB0aGlzLmNvZGVDaGFuZ2UuZW1pdCh0aGlzLmNvdW50cnkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQcmVmZXJyZWRDb3VudHJpZXMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwcmVmZXJlZENvdW50cnlJc29Db2RlIG9mIHRoaXMucHJlZmVycmVkQ291bnRyaWVzKSB7XG4gICAgICBjb25zdCBjb3VudHJ5ID0gdGhpcy5nZXRDb3VudHJ5QnlJc29Db2RlKHByZWZlcmVkQ291bnRyeUlzb0NvZGUpO1xuICAgICAgY291bnRyeS5wcmlvcml0eSA9IGNvdW50cnkgPyAxIDogY291bnRyeS5wcmlvcml0eTtcbiAgICB9XG4gICAgdGhpcy5jb3VudHJpZXMuc29ydCgoYSwgYikgPT5cbiAgICAgIGEucHJpb3JpdHkgPiBiLnByaW9yaXR5ID8gLTEgOiBhLnByaW9yaXR5IDwgYi5wcmlvcml0eSA/IDEgOiAwXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRzV2l0aCA9IChpbnB1dDogc3RyaW5nLCBzZWFyY2g6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiBpbnB1dC5zdWJzdHIoMCwgc2VhcmNoLmxlbmd0aCkgPT09IHNlYXJjaDtcbiAgfTtcblxuICBwcml2YXRlIGdldENsYXNzZXMgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBjbGFzc0xpc3QuaXRlbShpKTtcbiAgICAgIGlmIChpdGVtICE9PSBudWxsICYmIHRoaXMuc3RhcnRzV2l0aChpdGVtLCAnbmctJykpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKGBpb24tJHtpdGVtLnN1YnN0cigzKX1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH07XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc2VzID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc2VzOiBzdHJpbmdbXSkgPT4ge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIFtcbiAgICAgICdpb24tdmFsaWQnLFxuICAgICAgJ2lvbi1pbnZhbGlkJyxcbiAgICAgICdpb24tdG91Y2hlZCcsXG4gICAgICAnaW9uLXVudG91Y2hlZCcsXG4gICAgICAnaW9uLWRpcnR5JyxcbiAgICAgICdpb24tcHJpc3RpbmUnLFxuICAgIF0uZm9yRWFjaCgoYykgPT4gY2xhc3NMaXN0LnJlbW92ZShjKSk7XG5cbiAgICBjbGFzc2VzLmZvckVhY2goKGMpID0+IGNsYXNzTGlzdC5hZGQoYykpO1xuICB9O1xuXG4gIHByaXZhdGUgc2V0SW9uaWNDbGFzc2VzID0gKGVsZW1lbnQ6IEVsZW1lbnRSZWYpID0+IHtcbiAgICByYWYoKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5nZXRDbGFzc2VzKGlucHV0KTtcbiAgICAgIHRoaXMuc2V0Q2xhc3NlcyhpbnB1dCwgY2xhc3Nlcyk7XG5cbiAgICAgIGNvbnN0IGl0ZW0gPSBpbnB1dC5jbG9zZXN0KCdpb24taXRlbScpO1xuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5zZXRDbGFzc2VzKGl0ZW0sIGNsYXNzZXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHByaXZhdGUgc2V0SXRlbUNsYXNzID0gKFxuICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gICAgYWRkQ2xhc3M6IGJvb2xlYW5cbiAgKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgaXRlbSA9IGlucHV0LmNsb3Nlc3QoJ2lvbi1pdGVtJyk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGl0ZW0uY2xhc3NMaXN0O1xuICAgICAgaWYgKGFkZENsYXNzKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iXX0=