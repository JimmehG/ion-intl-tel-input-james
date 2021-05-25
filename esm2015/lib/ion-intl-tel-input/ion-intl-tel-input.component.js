/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        this.countries = [];
        this.disabled = false;
        this.phoneNumber = '';
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
                'ion-pristine'
            ].forEach((/**
             * @param {?} c
             * @return {?}
             */
            c => classList.remove(c)));
            classes.forEach((/**
             * @param {?} c
             * @return {?}
             */
            c => classList.add(c)));
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
            this.countries = this.countries
                .filter((/**
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
                if (this.preferredCountries.length && this.preferredCountries.includes(this.defaultCountryiso)) {
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
        if (this.countries && changes.defaulyCountryisoCode
            && changes.defaulyCountryisoCode.currentValue !== changes.defaulyCountryisoCode.previousValue) {
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
        if (obj == null) {
            this.ngOnInit();
        }
        this.phoneNumber = obj;
        this.value = this.phoneNumber;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.onNumberChange();
        }), 1);
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
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
        if (this.isNullOrWhiteSpace(this.phoneNumber)) {
            this.emitValueChange(null);
        }
        else {
            /** @type {?} */
            let googleNumber;
            try {
                googleNumber = this.phoneUtil.parse(this.phoneNumber, this.country.isoCode.toUpperCase());
            }
            catch (e) {
            }
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
        this.value = this.phoneNumber;
        /** @type {?} */
        let googleNumber;
        try {
            googleNumber = this.phoneUtil.parse(this.phoneNumber, this.country.isoCode.toUpperCase());
        }
        catch (e) {
        }
        /** @type {?} */
        let isoCode = this.country ? this.country.isoCode : null;
        // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
        if (this.enableAutoCountrySelect) {
            isoCode = googleNumber && googleNumber.getCountryCode()
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
        isoCode = isoCode ?
            isoCode :
            this.country ? this.country.isoCode : null;
        if (this.isNullOrWhiteSpace(this.value) || this.isNullOrWhiteSpace(isoCode)) {
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
                number: this.phoneNumber,
                internationalNumber: internationallNo,
                nationalNumber: nationalNo,
                isoCode: this.country.isoCode,
                dialCode: this.dialCodePrefix + this.country.dialCode
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
            'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown',
            'Home', 'End', 'Insert', 'Delete', 'Backspace'
        ];
        if (!allowedChars.test(event.key) &&
            !(event.ctrlKey && allowedCtrlChars.test(event.key)) &&
            !(allowedOtherKeys.includes(event.key))) {
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
        country => {
            return country.name.toLowerCase().indexOf(text) !== -1 ||
                country.name.toLowerCase().indexOf(text) !== -1 ||
                country.dialCode.toString().toLowerCase().indexOf(text) !== -1;
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
        country => {
            country.areaCodes.forEach((/**
             * @param {?} areaCode
             * @return {?}
             */
            areaCode => {
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
        if (typeof (value) === 'string' && value === '') {
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
        (a, b) => (a.priority > b.priority) ? -1 : ((a.priority < b.priority) ? 1 : 0)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9pb24taW50bC10ZWwtaW5wdXQvaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixZQUFZLEVBR1osU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF1QyxNQUFNLGdCQUFnQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHcEQsT0FBTyxFQUFlLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSXhGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUV2RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBeUJuQzs7R0FFRztBQUNILE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQXNUbkMsWUFDVSxFQUFjLEVBQ2QsUUFBa0IsRUFDbEIsc0JBQThDO1FBRjlDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUF0VHhELGFBQVEsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7O1FBeUJoQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7OztRQVd2QixtQkFBYyxHQUFlLEdBQUcsQ0FBQzs7Ozs7Ozs7UUFVakMsNEJBQXVCLEdBQUcsS0FBSyxDQUFDOzs7Ozs7OztRQVVoQyxzQkFBaUIsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7O1FBVXpCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7O1FBV3pCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7UUFVdEIsY0FBUyxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7UUFVakIsZUFBVSxHQUFHLGdCQUFnQixDQUFDOzs7Ozs7OztRQVU5QixrQkFBYSxHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7UUFVbkIsMkJBQXNCLEdBQUcsb0JBQW9CLENBQUM7Ozs7Ozs7O1FBVTlDLG1CQUFjLEdBQUcsT0FBTyxDQUFDOzs7Ozs7OztRQVV6Qix5QkFBb0IsR0FBOEMsS0FBSyxDQUFDOzs7Ozs7OztRQVV4RSxtQkFBYyxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7UUFVdEIsNkJBQXdCLEdBQUcsSUFBSSxDQUFDOzs7Ozs7OztRQVVoQyw4QkFBeUIsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7O1FBVWpDLHdCQUFtQixHQUFHLG9CQUFvQixDQUFDOzs7Ozs7Ozs7UUFXM0Msa0JBQWEsR0FBa0IsRUFBRSxDQUFDOzs7Ozs7Ozs7UUFXbEMsdUJBQWtCLEdBQWtCLEVBQUUsQ0FBQzs7Ozs7Ozs7UUFVdkMsdUJBQWtCLEdBQUcsSUFBSSxDQUFDOzs7Ozs7OztRQVUxQixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7UUFTZixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7Ozs7Ozs7UUFTekMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7Ozs7UUFTdEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOzs7Ozs7O1FBU3ZDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7Ozs7Ozs7UUFTaEQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7Ozs7UUFTckMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7Ozs7UUFTbkMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7Ozs7UUFTcEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7O1FBS3RDLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFHOUIsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUMzQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGNBQVMsR0FBUSxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFL0MsY0FBUzs7O1FBQWUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFDO1FBQ2pDLG9CQUFlOzs7O1FBQUcsQ0FBQyxDQUE4QixFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUM7UUFxVGxELGVBQVU7Ozs7O1FBQUcsQ0FBQyxLQUFhLEVBQUUsTUFBYyxFQUFXLEVBQUU7WUFDOUQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxDQUFDO1FBQ25ELENBQUMsRUFBQTtRQUVPLGVBQVU7Ozs7UUFBRyxDQUFDLE9BQW9CLEVBQUUsRUFBRTs7a0JBQ3RDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUzs7a0JBQzdCLE9BQU8sR0FBRyxFQUFFO1lBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztzQkFDbkMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7b0JBQ2pELE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDdkM7YUFDRjtZQUNELE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsRUFBQTtRQUVPLGVBQVU7Ozs7O1FBQUcsQ0FBQyxPQUFvQixFQUFFLE9BQWlCLEVBQUUsRUFBRTs7a0JBQ3pELFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUztZQUNuQztnQkFDRSxXQUFXO2dCQUNYLGFBQWE7Z0JBQ2IsYUFBYTtnQkFDYixlQUFlO2dCQUNmLFdBQVc7Z0JBQ1gsY0FBYzthQUNmLENBQUMsT0FBTzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBRXBDLE9BQU8sQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFBO1FBRU8sb0JBQWU7Ozs7UUFBRyxDQUFDLE9BQW1CLEVBQUUsRUFBRTtZQUNoRCxHQUFHOzs7WUFBQyxHQUFHLEVBQUU7O3NCQUNELEtBQUssR0FBRyxtQkFBQSxPQUFPLENBQUMsYUFBYSxFQUFlOztzQkFDNUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQzs7c0JBRTFCLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztnQkFDdEMsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ2hDO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUE7UUFFTyxpQkFBWTs7Ozs7O1FBQUcsQ0FBQyxPQUFtQixFQUFFLFNBQWlCLEVBQUUsUUFBaUIsRUFBRSxFQUFFOztrQkFDN0UsS0FBSyxHQUFHLG1CQUFBLE9BQU8sQ0FBQyxhQUFhLEVBQWU7O2tCQUM1QyxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDdEMsSUFBSSxJQUFJLEVBQUU7O3NCQUNGLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUztnQkFDaEMsSUFBSSxRQUFRLEVBQUU7b0JBQ1osU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDMUI7cUJBQU07b0JBQ0wsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDN0I7YUFDRjtRQUNILENBQUMsRUFBQTtJQXJXRyxDQUFDOzs7O0lBaFRMLElBQ0ksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFDRCxJQUVJLFNBQVM7UUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN4QixDQUFDOzs7O0lBMFNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsTUFBbUM7UUFDakQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRTdCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUztpQkFDOUIsTUFBTTs7OztZQUFDLENBQUMsT0FBaUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUM7U0FDOUU7UUFFRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQzthQUNuRTtpQkFBTTtnQkFDTCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRTtvQkFDOUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdkU7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BDO2FBQ0Y7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMscUJBQXFCO2VBQ2hELE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLGFBQWEsRUFBRTtZQUM3RixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBVztRQUNwQixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDOUIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FHWjtRQUNDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO2FBQU07O2dCQUNELFlBQXlCO1lBQzdCLElBQUk7Z0JBQ0YsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUNqQyxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FDbkMsQ0FBQzthQUNIO1lBQUMsT0FBTyxDQUFDLEVBQUU7YUFDWDs7a0JBRUssZ0JBQWdCLEdBQUcsWUFBWTtnQkFDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7Z0JBQ3RFLENBQUMsQ0FBQyxFQUFFOztrQkFDRSxVQUFVLEdBQUcsWUFBWTtnQkFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7Z0JBQ2pFLENBQUMsQ0FBQyxFQUFFO1lBRUosSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksZ0JBQWdCLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQzFEO1lBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUN4QixtQkFBbUIsRUFBRSxnQkFBZ0I7Z0JBQ3JDLGNBQWMsRUFBRSxVQUFVO2dCQUMxQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO2dCQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVE7YUFDdEQsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4QjtRQUNELFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEMsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFTSxxQkFBcUIsQ0FBQyxLQUc1Qjs7Y0FDTyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7UUFDNUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUU5QixLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsS0FBWTtRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFvQjtRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7WUFDMUIsWUFBeUI7UUFDN0IsSUFBSTtZQUNGLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDM0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtTQUNYOztZQUVHLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUN4RCx1SEFBdUg7UUFDdkgsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsT0FBTyxHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsY0FBYyxFQUFFO2dCQUN2RCxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsRUFBRSxZQUFZLENBQUM7Z0JBQ3JFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUN2QixJQUFJLE9BQU8sSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7O3NCQUN6QyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsT0FBaUIsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUM7Z0JBQzFGLElBQUksVUFBVSxFQUFFO29CQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO2lCQUMzQjthQUNGO1NBQ0Y7UUFDRCxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFDbkIsT0FBTyxDQUFDLENBQUM7WUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRTNDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjthQUFNOztrQkFDQyxnQkFBZ0IsR0FBRyxZQUFZO2dCQUNyQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztnQkFDdEUsQ0FBQyxDQUFDLEVBQUU7O2tCQUNFLFVBQVUsR0FBRyxZQUFZO2dCQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztnQkFDakUsQ0FBQyxDQUFDLEVBQUU7WUFFSixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDMUQ7WUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQ3hCLG1CQUFtQixFQUFFLGdCQUFnQjtnQkFDckMsY0FBYyxFQUFFLFVBQVU7Z0JBQzFCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTthQUN0RCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQW9COztjQUM1QixZQUFZLEdBQUcsY0FBYzs7Y0FDN0IsZ0JBQWdCLEdBQUcsUUFBUTs7Y0FDM0IsZ0JBQWdCLEdBQUc7WUFDdkIsV0FBVyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVztZQUNqRCxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVztTQUMvQztRQUVELElBQ0UsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDN0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUN2QztZQUNBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxJQUFZO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BELE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRU8saUJBQWlCLENBQUMsV0FBbUIsRUFBRSxZQUF5Qjs7Y0FDaEUsU0FBUyxHQUFHLENBQUMsbUJBQUEsWUFBWSxFQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFOztjQUV2RCxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxPQUFpQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBQzs7Y0FDckcsV0FBVyxHQUFHLFNBQVMsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxPQUFpQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBQzs7Y0FDcEYsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLE9BQWlCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFDOztZQUUvRixjQUFjLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBRWxFLGtCQUFrQixDQUFDLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNuQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7WUFBQyxRQUFRLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNsQyxjQUFjLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztpQkFDbEM7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFHTyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxPQUFlO1FBQ3pDLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNwQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO2dCQUMvQixPQUFPLE9BQU8sQ0FBQzthQUNoQjtTQUNGO1FBQ0QsT0FBTztJQUNULENBQUM7Ozs7OztJQUVPLGtCQUFrQixDQUFDLEtBQVU7UUFDbkMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksT0FBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQzlDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxXQUFtQjtRQUN4QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxXQUFXLEVBQUU7WUFDeEMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoRTtRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxPQUFpQjtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFTyxxQkFBcUI7UUFDM0IsS0FBSyxNQUFNLHNCQUFzQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTs7a0JBQ3RELE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsc0JBQXNCLENBQUM7WUFDaEUsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUNuRDtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSTs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUN0RyxDQUFDOzs7WUE3bkJGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsaXZFQUFrRDtnQkFFbEQsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsd0JBQXdCLEVBQUM7d0JBQ3ZELEtBQUssRUFBRSxJQUFJO3FCQUNaLENBQUE7Ozs7O3dCQUtHO2lCQUNMOzthQUNGOzs7O1lBdENDLFVBQVU7WUFNTyxRQUFRO1lBT2xCLHNCQUFzQjs7O3VCQWdDNUIsV0FBVyxTQUFDLDBCQUEwQjtvQkFFdEMsV0FBVyxTQUFDLDhCQUE4QjttQkFFMUMsV0FBVyxTQUFDLDZCQUE2Qjt1QkFFekMsV0FBVyxTQUFDLGlCQUFpQjsrQkFFN0IsV0FBVyxTQUFDLG9DQUFvQzt3QkFJaEQsV0FBVyxTQUFDLHFDQUFxQyxjQUNqRCxLQUFLLFNBQUMsV0FBVztnQ0FZakIsS0FBSzs2QkFXTCxLQUFLO3NDQVVMLEtBQUs7Z0NBVUwsS0FBSztrQ0FVTCxLQUFLOytCQVdMLEtBQUs7d0JBVUwsS0FBSzt5QkFVTCxLQUFLOzRCQVVMLEtBQUs7cUNBVUwsS0FBSzs2QkFVTCxLQUFLO21DQVVMLEtBQUs7NkJBVUwsS0FBSzt1Q0FVTCxLQUFLO3dDQVVMLEtBQUs7a0NBVUwsS0FBSzs0QkFXTCxLQUFLO2lDQVdMLEtBQUs7aUNBVUwsS0FBSzsrQkFVTCxLQUFLOzJCQVNMLE1BQU07eUJBU04sTUFBTTswQkFTTixNQUFNOzBCQVNOLE1BQU07eUJBU04sTUFBTTt1QkFTTixNQUFNO3dCQVNOLE1BQU07eUJBU04sTUFBTTs0QkFHTixTQUFTLFNBQUMsYUFBYSxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs7OztJQXRTekMsNENBQ2dCOztJQUNoQix5Q0FDZTs7SUFDZix3Q0FDYzs7SUFDZCw0Q0FDUzs7Ozs7Ozs7O0lBa0JULHFEQUN1Qjs7Ozs7Ozs7OztJQVV2QixrREFDaUM7Ozs7Ozs7OztJQVNqQywyREFDZ0M7Ozs7Ozs7OztJQVNoQyxxREFDeUI7Ozs7Ozs7OztJQVN6Qix1REFDeUI7Ozs7Ozs7Ozs7SUFVekIsb0RBQ3NCOzs7Ozs7Ozs7SUFTdEIsNkNBQ2lCOzs7Ozs7Ozs7SUFTakIsOENBQzhCOzs7Ozs7Ozs7SUFTOUIsaURBQ21COzs7Ozs7Ozs7SUFTbkIsMERBQzhDOzs7Ozs7Ozs7SUFTOUMsa0RBQ3lCOzs7Ozs7Ozs7SUFTekIsd0RBQ3dFOzs7Ozs7Ozs7SUFTeEUsa0RBQ3NCOzs7Ozs7Ozs7SUFTdEIsNERBQ2dDOzs7Ozs7Ozs7SUFTaEMsNkRBQ2lDOzs7Ozs7Ozs7SUFTakMsdURBQzJDOzs7Ozs7Ozs7O0lBVTNDLGlEQUNrQzs7Ozs7Ozs7OztJQVVsQyxzREFDdUM7Ozs7Ozs7OztJQVN2QyxzREFDMEI7Ozs7Ozs7OztJQVMxQixvREFDd0I7Ozs7Ozs7O0lBUXhCLGdEQUNrRDs7Ozs7Ozs7SUFRbEQsOENBQytDOzs7Ozs7OztJQVEvQywrQ0FDZ0Q7Ozs7Ozs7O0lBUWhELCtDQUN5RDs7Ozs7Ozs7SUFRekQsOENBQzhDOzs7Ozs7OztJQVE5Qyw0Q0FDNEM7Ozs7Ozs7O0lBUTVDLDZDQUM2Qzs7Ozs7Ozs7SUFRN0MsOENBQzhDOztJQUU5QyxpREFBbUU7Ozs7O0lBR25FLDBDQUE4Qjs7SUFFOUIsMkNBQWtCOztJQUNsQiw2Q0FBMkI7O0lBQzNCLDRDQUFpQjs7SUFDakIsK0NBQWlCOztJQUNqQiw2Q0FBK0M7O0lBRS9DLDZDQUFpQzs7SUFDakMsbURBQTBEOzs7OztJQXFUMUQsOENBRUM7Ozs7O0lBRUQsOENBVUM7Ozs7O0lBRUQsOENBWUM7Ozs7O0lBRUQsbURBV0M7Ozs7O0lBRUQsZ0RBV0M7Ozs7O0lBeFdDLHNDQUFzQjs7Ozs7SUFDdEIsNENBQTBCOzs7OztJQUMxQiwwREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIGZvcndhcmRSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMSURBVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgSW9uSW5wdXQsIFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVDb21wb25lbnQgfSBmcm9tICdpb25pYy1zZWxlY3RhYmxlJztcbmltcG9ydCB7IFBob25lTnVtYmVyLCBQaG9uZU51bWJlckZvcm1hdCwgUGhvbmVOdW1iZXJVdGlsIH0gZnJvbSAnZ29vZ2xlLWxpYnBob25lbnVtYmVyJztcblxuaW1wb3J0IHsgQ291bnRyeUkgfSBmcm9tICcuLi9tb2RlbHMvY291bnRyeS5tb2RlbCc7XG5pbXBvcnQgeyBJb25JbnRsVGVsSW5wdXRNb2RlbCB9IGZyb20gJy4uL21vZGVscy9pb24taW50bC10ZWwtaW5wdXQubW9kZWwnO1xuaW1wb3J0IHsgSW9uSW50bFRlbElucHV0U2VydmljZSB9IGZyb20gJy4uL2lvbi1pbnRsLXRlbC1pbnB1dC5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IGlvbkludGxUZWxJbnB1dFZhbGlkYXRvciB9IGZyb20gJy4uL2lvbi1pbnRsLXRlbC1pbnB1dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgcmFmIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcblxuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnaW9uLWludGwtdGVsLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lvbi1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lvbi1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElvbkludGxUZWxJbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0vKiAsXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZVZhbHVlOiBpb25JbnRsVGVsSW5wdXRWYWxpZGF0b3IsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0gKi9cbiAgXVxufSlcblxuLyoqXG4gKiBAYXV0aG9yIEF6emFtIEFzZ2hhciA8YXp6YW0uYXNnaGFyQGludGVyc3RlbGx1cy5jb20+XG4gKi9cbmV4cG9ydCBjbGFzcyBJb25JbnRsVGVsSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLWludGwtdGVsLWlucHV0JylcbiAgY3NzQ2xhc3MgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbi1pbnRsLXRlbC1pbnB1dC1pb3MnKVxuICBpc0lvczogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb24taW50bC10ZWwtaW5wdXQtbWQnKVxuICBpc01EOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhhcy1mb2N1cycpXG4gIGhhc0ZvY3VzO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbi1pbnRsLXRlbC1pbnB1dC1oYXMtdmFsdWUnKVxuICBnZXQgaGFzVmFsdWVDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNWYWx1ZSgpO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLWludGwtdGVsLWlucHV0LWlzLWVuYWJsZWQnKVxuICBASW5wdXQoJ2lzRW5hYmxlZCcpXG4gIGdldCBpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIElzbyBDb2RlIG9mIGRlZmF1bHQgc2VsZWN0ZWQgQ291bnRyeS5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICcnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRDb3VudHJ5aXNvID0gJyc7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byB1c2UgYDAwYCBvciBgK2AgYXMgZGlhbCBjb2RlIHByZWZpeC5cbiAgICogQXZhaWxhYmxlIGF0dHJpYnV0ZXMgYXJlICcrJyB8ICcwMCcuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCArXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRpYWxDb2RlUHJlZml4OiAnKycgfCAnMDAnID0gJysnO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2VsZWN0IGF1dG9tYXRpYyBjb3VudHJ5IGJhc2VkIG9uIHVzZXIgaW5wdXQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBlbmFibGVBdXRvQ291bnRyeVNlbGVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gZXhhbXBsZSBudW1iZXIgd2lsbCBiZSBzaG93biBhcyBhIHBsYWNlaG9sZGVyIGluIGlucHV0LlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBlbmFibGVQbGFjZWhvbGRlciA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgZmFsbGFiYWNrIHBsYWNlaG9sZGVyIHRvIGJlIHVzZWQgaWYgbm8gZXhhbXBsZSBudW1iZXIgaXMgZm91bmQgZm9yIGEgY291bnRyeS5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICcnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGZhbGxiYWNrUGxhY2Vob2xkZXIgPSAnJztcblxuICAvKipcbiAgICogSWYgYSBjdXN0b20gcGxhY2Vob2xkZXIgaXMgbmVlZGVkIGZvciBpbnB1dC5cbiAgICogSWYgdGhpcyBwcm9wZXJ0eSBpcyBzZXQgaXQgd2lsbCBvdmVycmlkZSBgZW5hYmxlUGxhY2Vob2xkZXJgIGFuZCBvbmx5IHRoaXMgcGxhY2Vob2xkZXIgd2lsbCBiZSBzaG93bi5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICcnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGlucHV0UGxhY2Vob2xkZXIgPSAnJztcblxuICAvKipcbiAgICogTWF4aW11bSBMZW5ndGggZm9yIGlucHV0LlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJzE1J1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtYXhMZW5ndGggPSAnMTUnO1xuXG4gIC8qKlxuICAgKiBUaXRsZSBvZiBtb2RhbCBvcGVuZWQgdG8gc2VsZWN0IGNvdW50cnkgZGlhbCBjb2RlLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ1NlbGVjdCBDb3VudHJ5J1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbFRpdGxlID0gJ1NlbGVjdCBDb3VudHJ5JztcblxuICAvKipcbiAgICogQ1NTIGNsYXNzIHRvIGF0dGFjaCB0byBkaWFsIGNvZGUgc2VsZWN0aW9ubW9kYWwuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbENzc0NsYXNzID0gJyc7XG5cbiAgLyoqXG4gICAqIFBsYWNlaG9sZGVyIGZvciBpbnB1dCBpbiBkaWFsIGNvZGUgc2VsZWN0aW9uIG1vZGFsLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ0VudGVyIGNvdW50cnkgbmFtZSdcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxTZWFyY2hQbGFjZWhvbGRlciA9ICdFbnRlciBjb3VudHJ5IG5hbWUnO1xuXG4gIC8qKlxuICAgKiBUZXh0IGZvciBjbG9zZSBidXR0b24gaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICdDbG9zZSdcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxDbG9zZVRleHQgPSAnQ2xvc2UnO1xuXG4gIC8qKlxuICAgKiBTbG90IGZvciBjbG9zZSBidXR0b24gaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC4gW0lvbmljIHNsb3RzXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9pdGVtKSBhcmUgc3VwcG9ydGVkXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnZW5kJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbENsb3NlQnV0dG9uU2xvdDogJ3N0YXJ0JyB8ICdlbmQnIHwgJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgPSAnZW5kJztcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwgc2hvdWxkIGJlIHNlYXJjaGFibGUgb3Igbm90LlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ3RydWUnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsQ2FuU2VhcmNoID0gdHJ1ZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwgaXMgY2xvc2VkIG9uIGJhY2tkcm9wIGNsaWNrLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ3RydWUnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsU2hvdWxkQmFja2Ryb3BDbG9zZSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBpbnB1dCBzaG91bGQgYmUgZm9jdXNlZCB3aGVuIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwgaXMgb3BlbmVkLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ3RydWUnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsU2hvdWxkRm9jdXNTZWFyY2hiYXIgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIHRvIHNob3cgd2hlbiBubyBjb3VudHJpZXMgYXJlIGZvdW5kIGZvciBzZWFyY2ggaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICd0cnVlJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbFNlYXJjaEZhaWxUZXh0ID0gJ05vIGNvdW50cmllcyBmb3VuZCc7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgaXNvIGNvZGVzIG9mIG1hbnVhbGx5IHNlbGVjdGVkIGNvdW50cmllcyBhcyBzdHJpbmcsIHdoaWNoIHdpbGwgYXBwZWFyIGluIHRoZSBkcm9wZG93bi5cbiAgICogKipOb3RlKio6IGBvbmx5Q291bnRyaWVzYCBzaG91bGQgYmUgYSBzdHJpbmcgYXJyYXkgb2YgY291bnRyeSBpc28gY29kZXMuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG9ubHlDb3VudHJpZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAvKipcbiAgICogTGlzdCBvZiBpc28gY29kZXNuIGFzIHN0cmluZyBvZiAgY291bnRyaWVzLCB3aGljaCB3aWxsIGFwcGVhciBhdCB0aGUgdG9wIGluIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwuXG4gICAqICoqTm90ZSoqOiBgcHJlZmVycmVkQ291bnRyaWVzYCBzaG91bGQgYmUgYSBzdHJpbmcgYXJyYXkgb2YgY291bnRyeSBpc28gY29kZXMuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHByZWZlcnJlZENvdW50cmllczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgZmlyc3QgY291bnRyeSBzaG91bGQgYmUgc2VsZWN0ZWQgaW4gZGlhbCBjb2RlIHNlbGVjdCBvciBub3QuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNlbGVjdEZpcnN0Q291bnRyeSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byB2aXN1YWxseSBzZXBhcmF0ZSBkaWFsY29kZSBpbnRvIHRoZSBkcm9wIGRvd24gZWxlbWVudC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2VwYXJhdGVEaWFsQ29kZSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIFBob25lIG51bWJlciBJbnB1dCBpcyBjaGFuZ2VkLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG51bWJlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIFBob25lIG51bWJlciBJbnB1dCBpcyBibHVycmVkLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG51bWJlckJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIFBob25lIG51bWJlciBJbnB1dCBpcyBmb2N1c2VkLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG51bWJlckZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB1c2VyIGlzIHR5cGluZyBpbiBQaG9uZSBudW1iZXIgSW5wdXQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnVtYmVySW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIGRpYWwgY29kZSBzZWxlY3Rpb24gaXMgY2hhbmdlZC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwgaXMgb3BlbmVkLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGNvZGVPcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwgaXMgY2xvc2VkLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGNvZGVDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgZGlhbCBjb2RlIGlzIHNlbGVjdGVkIGluIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY29kZVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ251bWJlcklucHV0Jywge3N0YXRpYzogZmFsc2V9KSBudW1iZXJJbnB1dEVsOiBJb25JbnB1dDtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZyA9IG51bGw7XG5cbiAgY291bnRyeTogQ291bnRyeUk7XG4gIGNvdW50cmllczogQ291bnRyeUlbXSA9IFtdO1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuICBwaG9uZU51bWJlciA9ICcnO1xuICBwaG9uZVV0aWw6IGFueSA9IFBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpO1xuXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogSW9uSW50bFRlbElucHV0TW9kZWwgfCBudWxsKSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGlvbkludGxUZWxJbnB1dFNlcnZpY2U6IElvbkludGxUZWxJbnB1dFNlcnZpY2UsXG4gICkgeyB9XG5cbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0SW9uaWNDbGFzc2VzKHRoaXMuZWwpO1xuICB9XG5cbiAgZW1pdFZhbHVlQ2hhbmdlKGNoYW5nZTogSW9uSW50bFRlbElucHV0TW9kZWwgfCBudWxsKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UoY2hhbmdlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNJb3MgPSB0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKTtcbiAgICB0aGlzLmlzTUQgPSAhdGhpcy5pc0lvcztcbiAgICB0aGlzLnNldEl0ZW1DbGFzcyh0aGlzLmVsLCAnaXRlbS1pbnRlcmFjdGl2ZScsIHRydWUpO1xuXG4gICAgdGhpcy5mZXRjaEFsbENvdW50cmllcygpO1xuICAgIHRoaXMuc2V0UHJlZmVycmVkQ291bnRyaWVzKCk7XG5cbiAgICBpZiAodGhpcy5vbmx5Q291bnRyaWVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5jb3VudHJpZXMgPSB0aGlzLmNvdW50cmllc1xuICAgICAgLmZpbHRlcigoY291bnRyeTogQ291bnRyeUkpID0+IHRoaXMub25seUNvdW50cmllcy5pbmNsdWRlcyhjb3VudHJ5Lmlzb0NvZGUpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3RGaXJzdENvdW50cnkpIHtcbiAgICAgIGlmICh0aGlzLmRlZmF1bHRDb3VudHJ5aXNvKSB7XG4gICAgICAgIHRoaXMuc2V0Q291bnRyeSh0aGlzLmdldENvdW50cnlCeUlzb0NvZGUodGhpcy5kZWZhdWx0Q291bnRyeWlzbykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCAmJiB0aGlzLnByZWZlcnJlZENvdW50cmllcy5pbmNsdWRlcyh0aGlzLmRlZmF1bHRDb3VudHJ5aXNvKSkge1xuICAgICAgICAgIHRoaXMuc2V0Q291bnRyeSh0aGlzLmdldENvdW50cnlCeUlzb0NvZGUodGhpcy5wcmVmZXJyZWRDb3VudHJpZXNbMF0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldENvdW50cnkodGhpcy5jb3VudHJpZXNbMF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmNvdW50cmllcyAmJiBjaGFuZ2VzLmRlZmF1bHlDb3VudHJ5aXNvQ29kZVxuICAgICYmIGNoYW5nZXMuZGVmYXVseUNvdW50cnlpc29Db2RlLmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlcy5kZWZhdWx5Q291bnRyeWlzb0NvZGUucHJldmlvdXNWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRDb3VudHJ5KGNoYW5nZXMuZGVmYXVseUNvdW50cnlpc29Db2RlLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChvYmogPT0gbnVsbCkge1xuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cbiAgICB0aGlzLnBob25lTnVtYmVyID0gb2JqO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnBob25lTnVtYmVyO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vbk51bWJlckNoYW5nZSgpO1xuICAgIH0sIDEpO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBoYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaXNOdWxsT3JXaGl0ZVNwYWNlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgb25Db2RlT3BlbigpIHtcbiAgICB0aGlzLmNvZGVPcGVuLmVtaXQoKTtcbiAgfVxuXG4gIG9uQ29kZUNoYW5nZShldmVudDoge1xuICAgIGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LFxuICAgIHZhbHVlOiBhbnlcbiAgfSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLnBob25lTnVtYmVyKSkge1xuICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBnb29nbGVOdW1iZXI6IFBob25lTnVtYmVyO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZ29vZ2xlTnVtYmVyID0gdGhpcy5waG9uZVV0aWwucGFyc2UoXG4gICAgICAgICAgdGhpcy5waG9uZU51bWJlcixcbiAgICAgICAgICB0aGlzLmNvdW50cnkuaXNvQ29kZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGludGVybmF0aW9uYWxsTm8gPSBnb29nbGVOdW1iZXJcbiAgICAgID8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KGdvb2dsZU51bWJlciwgUGhvbmVOdW1iZXJGb3JtYXQuSU5URVJOQVRJT05BTClcbiAgICAgIDogJyc7XG4gICAgICBjb25zdCBuYXRpb25hbE5vID0gZ29vZ2xlTnVtYmVyXG4gICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChnb29nbGVOdW1iZXIsIFBob25lTnVtYmVyRm9ybWF0Lk5BVElPTkFMKVxuICAgICAgOiAnJztcblxuICAgICAgaWYgKHRoaXMuc2VwYXJhdGVEaWFsQ29kZSAmJiBpbnRlcm5hdGlvbmFsbE5vKSB7XG4gICAgICAgIHRoaXMucGhvbmVOdW1iZXIgPSB0aGlzLnJlbW92ZURpYWxDb2RlKGludGVybmF0aW9uYWxsTm8pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZSh7XG4gICAgICAgIG51bWJlcjogdGhpcy5waG9uZU51bWJlcixcbiAgICAgICAgaW50ZXJuYXRpb25hbE51bWJlcjogaW50ZXJuYXRpb25hbGxObyxcbiAgICAgICAgbmF0aW9uYWxOdW1iZXI6IG5hdGlvbmFsTm8sXG4gICAgICAgIGlzb0NvZGU6IHRoaXMuY291bnRyeS5pc29Db2RlLFxuICAgICAgICBkaWFsQ29kZTogdGhpcy5kaWFsQ29kZVByZWZpeCArIHRoaXMuY291bnRyeS5kaWFsQ29kZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmNvZGVDaGFuZ2UuZW1pdCgpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubnVtYmVySW5wdXRFbC5zZXRGb2N1cygpO1xuICAgIH0sIDQwMCk7XG4gIH1cblxuICBvbkNvZGVDbG9zZSgpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMuc2V0SW9uaWNDbGFzc2VzKHRoaXMuZWwpO1xuICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLnNldEl0ZW1DbGFzcyh0aGlzLmVsLCAnaXRlbS1oYXMtZm9jdXMnLCBmYWxzZSk7XG4gICAgdGhpcy5jb2RlQ2xvc2UuZW1pdCgpO1xuICB9XG5cbiAgcHVibGljIG9uQ29kZVNlYXJjaENvdW50cmllcyhldmVudDoge1xuICAgIGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LFxuICAgIHRleHQ6IHN0cmluZ1xuICB9KTogdm9pZCB7XG4gICAgY29uc3QgdGV4dCA9IGV2ZW50LnRleHQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgZXZlbnQuY29tcG9uZW50LnN0YXJ0U2VhcmNoKCk7XG5cbiAgICBldmVudC5jb21wb25lbnQuaXRlbXMgPSB0aGlzLmZpbHRlckNvdW50cmllcyh0ZXh0KTtcbiAgICBldmVudC5jb21wb25lbnQuZW5kU2VhcmNoKCk7XG4gIH1cblxuICBvbkNvZGVTZWxlY3QoKSB7XG4gICAgdGhpcy5jb2RlU2VsZWN0LmVtaXQoKTtcbiAgfVxuXG4gIG9uSW9uTnVtYmVyQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMuc2V0SW9uaWNDbGFzc2VzKHRoaXMuZWwpO1xuICAgIHRoaXMubnVtYmVyQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25Jb25OdW1iZXJCbHVyKCkge1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5zZXRJb25pY0NsYXNzZXModGhpcy5lbCk7XG4gICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgIHRoaXMuc2V0SXRlbUNsYXNzKHRoaXMuZWwsICdpdGVtLWhhcy1mb2N1cycsIGZhbHNlKTtcbiAgICB0aGlzLm51bWJlckJsdXIuZW1pdCgpO1xuICB9XG5cbiAgb25Jb25OdW1iZXJGb2N1cygpIHtcbiAgICB0aGlzLmhhc0ZvY3VzID0gdHJ1ZTtcbiAgICB0aGlzLnNldEl0ZW1DbGFzcyh0aGlzLmVsLCAnaXRlbS1oYXMtZm9jdXMnLCB0cnVlKTtcbiAgICB0aGlzLm51bWJlckZvY3VzLmVtaXQoKTtcbiAgfVxuXG4gIG9uSW9uTnVtYmVySW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLm51bWJlcklucHV0LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25OdW1iZXJDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMucGhvbmVOdW1iZXI7XG4gICAgbGV0IGdvb2dsZU51bWJlcjogUGhvbmVOdW1iZXI7XG4gICAgdHJ5IHtcbiAgICAgIGdvb2dsZU51bWJlciA9IHRoaXMucGhvbmVVdGlsLnBhcnNlKHRoaXMucGhvbmVOdW1iZXIsIHRoaXMuY291bnRyeS5pc29Db2RlLnRvVXBwZXJDYXNlKCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICB9XG5cbiAgICBsZXQgaXNvQ29kZSA9IHRoaXMuY291bnRyeSA/IHRoaXMuY291bnRyeS5pc29Db2RlIDogbnVsbDtcbiAgICAvLyBhdXRvIHNlbGVjdCBjb3VudHJ5IGJhc2VkIG9uIHRoZSBleHRlbnNpb24gKGFuZCBhcmVhQ29kZSBpZiBuZWVkZWQpIChlLmcgc2VsZWN0IENhbmFkYSBpZiBudW1iZXIgc3RhcnRzIHdpdGggKzEgNDE2KVxuICAgIGlmICh0aGlzLmVuYWJsZUF1dG9Db3VudHJ5U2VsZWN0KSB7XG4gICAgICBpc29Db2RlID0gZ29vZ2xlTnVtYmVyICYmIGdvb2dsZU51bWJlci5nZXRDb3VudHJ5Q29kZSgpXG4gICAgICA/IHRoaXMuZ2V0Q291bnRyeUlzb0NvZGUoZ29vZ2xlTnVtYmVyLmdldENvdW50cnlDb2RlKCksIGdvb2dsZU51bWJlcilcbiAgICAgIDogdGhpcy5jb3VudHJ5Lmlzb0NvZGU7XG4gICAgICBpZiAoaXNvQ29kZSAmJiBpc29Db2RlICE9PSB0aGlzLmNvdW50cnkuaXNvQ29kZSkge1xuICAgICAgICBjb25zdCBuZXdDb3VudHJ5ID0gdGhpcy5jb3VudHJpZXMuZmluZCgoY291bnRyeTogQ291bnRyeUkpID0+IGNvdW50cnkuaXNvQ29kZSA9PT0gaXNvQ29kZSk7XG4gICAgICAgIGlmIChuZXdDb3VudHJ5KSB7XG4gICAgICAgICAgdGhpcy5jb3VudHJ5ID0gbmV3Q291bnRyeTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpc29Db2RlID0gaXNvQ29kZSA/XG4gICAgaXNvQ29kZSA6XG4gICAgdGhpcy5jb3VudHJ5ID8gdGhpcy5jb3VudHJ5Lmlzb0NvZGUgOiBudWxsO1xuXG4gICAgaWYgKHRoaXMuaXNOdWxsT3JXaGl0ZVNwYWNlKHRoaXMudmFsdWUpIHx8IHRoaXMuaXNOdWxsT3JXaGl0ZVNwYWNlKGlzb0NvZGUpKSB7XG4gICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZShudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW50ZXJuYXRpb25hbGxObyA9IGdvb2dsZU51bWJlclxuICAgICAgPyB0aGlzLnBob25lVXRpbC5mb3JtYXQoZ29vZ2xlTnVtYmVyLCBQaG9uZU51bWJlckZvcm1hdC5JTlRFUk5BVElPTkFMKVxuICAgICAgOiAnJztcbiAgICAgIGNvbnN0IG5hdGlvbmFsTm8gPSBnb29nbGVOdW1iZXJcbiAgICAgID8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KGdvb2dsZU51bWJlciwgUGhvbmVOdW1iZXJGb3JtYXQuTkFUSU9OQUwpXG4gICAgICA6ICcnO1xuXG4gICAgICBpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIGludGVybmF0aW9uYWxsTm8pIHtcbiAgICAgICAgdGhpcy5waG9uZU51bWJlciA9IHRoaXMucmVtb3ZlRGlhbENvZGUoaW50ZXJuYXRpb25hbGxObyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKHtcbiAgICAgICAgbnVtYmVyOiB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgICBpbnRlcm5hdGlvbmFsTnVtYmVyOiBpbnRlcm5hdGlvbmFsbE5vLFxuICAgICAgICBuYXRpb25hbE51bWJlcjogbmF0aW9uYWxObyxcbiAgICAgICAgaXNvQ29kZTogdGhpcy5jb3VudHJ5Lmlzb0NvZGUsXG4gICAgICAgIGRpYWxDb2RlOiB0aGlzLmRpYWxDb2RlUHJlZml4ICsgdGhpcy5jb3VudHJ5LmRpYWxDb2RlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbk51bWJlcktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBhbGxvd2VkQ2hhcnMgPSAvXlswLTlcXCtcXC1cXCBdLztcbiAgICBjb25zdCBhbGxvd2VkQ3RybENoYXJzID0gL1theGN2XS87XG4gICAgY29uc3QgYWxsb3dlZE90aGVyS2V5cyA9IFtcbiAgICAgICdBcnJvd0xlZnQnLCAnQXJyb3dVcCcsICdBcnJvd1JpZ2h0JywgJ0Fycm93RG93bicsXG4gICAgICAnSG9tZScsICdFbmQnLCAnSW5zZXJ0JywgJ0RlbGV0ZScsICdCYWNrc3BhY2UnXG4gICAgXTtcblxuICAgIGlmIChcbiAgICAgICFhbGxvd2VkQ2hhcnMudGVzdChldmVudC5rZXkpICYmXG4gICAgICAhKGV2ZW50LmN0cmxLZXkgJiYgYWxsb3dlZEN0cmxDaGFycy50ZXN0KGV2ZW50LmtleSkpICYmXG4gICAgICAhKGFsbG93ZWRPdGhlcktleXMuaW5jbHVkZXMoZXZlbnQua2V5KSlcbiAgICApIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJDb3VudHJpZXModGV4dDogc3RyaW5nKTogQ291bnRyeUlbXSB7XG4gICAgcmV0dXJuIHRoaXMuY291bnRyaWVzLmZpbHRlcihjb3VudHJ5ID0+IHtcbiAgICAgIHJldHVybiBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRleHQpICE9PSAtMSB8fFxuICAgICAgICBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRleHQpICE9PSAtMSB8fFxuICAgICAgICBjb3VudHJ5LmRpYWxDb2RlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRleHQpICE9PSAtMTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q291bnRyeUlzb0NvZGUoY291bnRyeUNvZGU6IG51bWJlciwgZ29vZ2xlTnVtYmVyOiBQaG9uZU51bWJlcik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgcmF3TnVtYmVyID0gKGdvb2dsZU51bWJlciBhcyBhbnkpLnZhbHVlc19bMl0udG9TdHJpbmcoKTtcblxuICAgIGNvbnN0IGNvdW50cmllcyA9IHRoaXMuY291bnRyaWVzLmZpbHRlcigoY291bnRyeTogQ291bnRyeUkpID0+IGNvdW50cnkuZGlhbENvZGUgPT09IGNvdW50cnlDb2RlLnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IG1haW5Db3VudHJ5ID0gY291bnRyaWVzLmZpbmQoKGNvdW50cnk6IENvdW50cnlJKSA9PiBjb3VudHJ5LmFyZWFDb2RlcyA9PT0gdW5kZWZpbmVkKTtcbiAgICBjb25zdCBzZWNvbmRhcnlDb3VudHJpZXMgPSBjb3VudHJpZXMuZmlsdGVyKChjb3VudHJ5OiBDb3VudHJ5SSkgPT4gY291bnRyeS5hcmVhQ29kZXMgIT09IHVuZGVmaW5lZCk7XG5cbiAgICBsZXQgbWF0Y2hlZENvdW50cnkgPSBtYWluQ291bnRyeSA/IG1haW5Db3VudHJ5Lmlzb0NvZGUgOiB1bmRlZmluZWQ7XG5cbiAgICBzZWNvbmRhcnlDb3VudHJpZXMuZm9yRWFjaChjb3VudHJ5ID0+IHtcbiAgICAgIGNvdW50cnkuYXJlYUNvZGVzLmZvckVhY2goYXJlYUNvZGUgPT4ge1xuICAgICAgICBpZiAocmF3TnVtYmVyLnN0YXJ0c1dpdGgoYXJlYUNvZGUpKSB7XG4gICAgICAgICAgbWF0Y2hlZENvdW50cnkgPSBjb3VudHJ5Lmlzb0NvZGU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXRjaGVkQ291bnRyeTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBmZXRjaEFsbENvdW50cmllcygpIHtcbiAgICB0aGlzLmNvdW50cmllcyA9IHRoaXMuaW9uSW50bFRlbElucHV0U2VydmljZS5nZXRMaXN0T2ZDb3VudHJpZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q291bnRyeUJ5SXNvQ29kZShpc29Db2RlOiBzdHJpbmcpOiBDb3VudHJ5SSB7XG4gICAgZm9yIChjb25zdCBjb3VudHJ5IG9mIHRoaXMuY291bnRyaWVzKSB7XG4gICAgICBpZiAoY291bnRyeS5pc29Db2RlID09PSBpc29Db2RlKSB7XG4gICAgICAgIHJldHVybiBjb3VudHJ5O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBwcml2YXRlIGlzTnVsbE9yV2hpdGVTcGFjZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mKHZhbHVlKSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVEaWFsQ29kZShwaG9uZU51bWJlcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIHBob25lTnVtYmVyKSB7XG4gICAgICBwaG9uZU51bWJlciA9IHBob25lTnVtYmVyLnN1YnN0cihwaG9uZU51bWJlci5pbmRleE9mKCcgJykgKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHBob25lTnVtYmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb3VudHJ5KGNvdW50cnk6IENvdW50cnlJKTogdm9pZCB7XG4gICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcbiAgICB0aGlzLmNvZGVDaGFuZ2UuZW1pdCh0aGlzLmNvdW50cnkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQcmVmZXJyZWRDb3VudHJpZXMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwcmVmZXJlZENvdW50cnlJc29Db2RlIG9mIHRoaXMucHJlZmVycmVkQ291bnRyaWVzKSB7XG4gICAgICBjb25zdCBjb3VudHJ5ID0gdGhpcy5nZXRDb3VudHJ5QnlJc29Db2RlKHByZWZlcmVkQ291bnRyeUlzb0NvZGUpO1xuICAgICAgY291bnRyeS5wcmlvcml0eSA9IGNvdW50cnkgPyAxIDogY291bnRyeS5wcmlvcml0eTtcbiAgICB9XG4gICAgdGhpcy5jb3VudHJpZXMuc29ydCgoYSwgYikgPT4gKGEucHJpb3JpdHkgPiBiLnByaW9yaXR5KSA/IC0xIDogKChhLnByaW9yaXR5IDwgYi5wcmlvcml0eSkgPyAxIDogMCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFydHNXaXRoID0gKGlucHV0OiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIGlucHV0LnN1YnN0cigwLCBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDbGFzc2VzID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gY2xhc3NMaXN0Lml0ZW0oaSk7XG4gICAgICBpZiAoaXRlbSAhPT0gbnVsbCAmJiB0aGlzLnN0YXJ0c1dpdGgoaXRlbSwgJ25nLScpKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChgaW9uLSR7aXRlbS5zdWJzdHIoMyl9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc2VzID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc2VzOiBzdHJpbmdbXSkgPT4ge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIFtcbiAgICAgICdpb24tdmFsaWQnLFxuICAgICAgJ2lvbi1pbnZhbGlkJyxcbiAgICAgICdpb24tdG91Y2hlZCcsXG4gICAgICAnaW9uLXVudG91Y2hlZCcsXG4gICAgICAnaW9uLWRpcnR5JyxcbiAgICAgICdpb24tcHJpc3RpbmUnXG4gICAgXS5mb3JFYWNoKGMgPT4gY2xhc3NMaXN0LnJlbW92ZShjKSk7XG5cbiAgICBjbGFzc2VzLmZvckVhY2goYyA9PiBjbGFzc0xpc3QuYWRkKGMpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0SW9uaWNDbGFzc2VzID0gKGVsZW1lbnQ6IEVsZW1lbnRSZWYpID0+IHtcbiAgICByYWYoKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5nZXRDbGFzc2VzKGlucHV0KTtcbiAgICAgIHRoaXMuc2V0Q2xhc3NlcyhpbnB1dCwgY2xhc3Nlcyk7XG5cbiAgICAgIGNvbnN0IGl0ZW0gPSBpbnB1dC5jbG9zZXN0KCdpb24taXRlbScpO1xuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5zZXRDbGFzc2VzKGl0ZW0sIGNsYXNzZXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRJdGVtQ2xhc3MgPSAoZWxlbWVudDogRWxlbWVudFJlZiwgY2xhc3NOYW1lOiBzdHJpbmcsIGFkZENsYXNzOiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgaXRlbSA9IGlucHV0LmNsb3Nlc3QoJ2lvbi1pdGVtJyk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGl0ZW0uY2xhc3NMaXN0O1xuICAgICAgaWYgKGFkZENsYXNzKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19