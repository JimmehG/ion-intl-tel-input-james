(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('google-libphonenumber'), require('@ionic/angular'), require('@angular/common'), require('ionic-selectable')) :
    typeof define === 'function' && define.amd ? define('ion-intl-tel-input', ['exports', '@angular/core', '@angular/forms', 'google-libphonenumber', '@ionic/angular', '@angular/common', 'ionic-selectable'], factory) :
    (global = global || self, factory(global['ion-intl-tel-input'] = {}, global.ng.core, global.ng.forms, global['google-libphonenumber'], global['@ionic/angular'], global.ng.common, global['ionic-selectable']));
}(this, (function (exports, core, forms, googleLibphonenumber, angular, common, ionicSelectable) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
    var   /* const validateInput: ValidatorFn = (
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
    IonIntlTelInputValidators = /** @class */ (function () {
        function IonIntlTelInputValidators() {
        }
        /**
         * @param {?} control
         * @return {?}
         */
        IonIntlTelInputValidators.phone = /**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var error = { phone: true };
            /** @type {?} */
            var isRequired = control.errors && control.errors.required;
            /** @type {?} */
            var phoneNumber;
            try {
                phoneNumber = googleLibphonenumber.PhoneNumberUtil.getInstance().parse(control.value.number, control.value.isoCode);
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
                    if (!googleLibphonenumber.PhoneNumberUtil.getInstance().isValidNumberForRegion(phoneNumber, control.value.isoCode)) {
                        return error;
                    }
                }
            }
            return;
        };
        return IonIntlTelInputValidators;
    }());
    var IonIntlTelInputValidatorDirective = /** @class */ (function () {
        function IonIntlTelInputValidatorDirective() {
        }
        /**
         * @param {?} control
         * @return {?}
         */
        IonIntlTelInputValidatorDirective.prototype.validate = /**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            console.log('validate');
            return IonIntlTelInputValidators.phone(control);
        };
        IonIntlTelInputValidatorDirective.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line: directive-selector
                        selector: '[ionIntlTelInputValid]',
                        providers: [
                            {
                                provide: forms.NG_VALIDATORS,
                                useExisting: IonIntlTelInputValidatorDirective,
                                multi: true,
                            },
                        ],
                    },] }
        ];
        return IonIntlTelInputValidatorDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var countries = [
        {
            name: 'Afghanistan',
            isoCode: 'af',
            dialCode: '93',
            flagClass: 'af',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Albania',
            isoCode: 'al',
            dialCode: '355',
            flagClass: 'al',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Algeria',
            isoCode: 'dz',
            dialCode: '213',
            flagClass: 'dz',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'AmericanSamoa',
            isoCode: 'as',
            dialCode: '1 684',
            flagClass: 'as',
            priority: 0,
            areaCodes: [
                '684'
            ],
            placeholder: ''
        },
        {
            name: 'Andorra',
            isoCode: 'ad',
            dialCode: '376',
            flagClass: 'ad',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Angola',
            isoCode: 'ao',
            dialCode: '244',
            flagClass: 'ao',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Anguilla',
            isoCode: 'ai',
            dialCode: '1 264',
            flagClass: 'ai',
            priority: 0,
            areaCodes: [
                '264'
            ],
            placeholder: ''
        },
        {
            name: 'Antigua and Barbuda',
            isoCode: 'ag',
            dialCode: '1 268',
            flagClass: 'ag',
            priority: 0,
            areaCodes: [
                '268'
            ],
            placeholder: ''
        },
        {
            name: 'Argentina',
            isoCode: 'ar',
            dialCode: '54',
            flagClass: 'ar',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Armenia',
            isoCode: 'am',
            dialCode: '374',
            flagClass: 'am',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Aruba',
            isoCode: 'aw',
            dialCode: '297',
            flagClass: 'aw',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Australia',
            isoCode: 'au',
            dialCode: '61',
            flagClass: 'au',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Austria',
            isoCode: 'at',
            dialCode: '43',
            flagClass: 'at',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Azerbaijan',
            isoCode: 'az',
            dialCode: '994',
            flagClass: 'az',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Bahamas',
            isoCode: 'bs',
            dialCode: '1 242',
            flagClass: 'bs',
            priority: 0,
            areaCodes: [
                '242'
            ],
            placeholder: ''
        },
        {
            name: 'Bahrain',
            isoCode: 'bh',
            dialCode: '973',
            flagClass: 'bh',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Bangladesh',
            isoCode: 'bd',
            dialCode: '880',
            flagClass: 'bd',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Barbados',
            isoCode: 'bb',
            dialCode: '1 246',
            flagClass: 'bb',
            priority: 0,
            areaCodes: [
                '246'
            ],
            placeholder: ''
        },
        {
            name: 'Belarus',
            isoCode: 'by',
            dialCode: '375',
            flagClass: 'by',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Belgium',
            isoCode: 'be',
            dialCode: '32',
            flagClass: 'be',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Belize',
            isoCode: 'bz',
            dialCode: '501',
            flagClass: 'bz',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Benin',
            isoCode: 'bj',
            dialCode: '229',
            flagClass: 'bj',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Bermuda',
            isoCode: 'bm',
            dialCode: '1 441',
            flagClass: 'bm',
            priority: 0,
            areaCodes: [
                '441'
            ],
            placeholder: ''
        },
        {
            name: 'Bhutan',
            isoCode: 'bt',
            dialCode: '975',
            flagClass: 'bt',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Bolivia, Plurinational State of',
            isoCode: 'bo',
            dialCode: '591',
            flagClass: 'bo',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Bosnia and Herzegovina',
            isoCode: 'ba',
            dialCode: '387',
            flagClass: 'ba',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Botswana',
            isoCode: 'bw',
            dialCode: '267',
            flagClass: 'bw',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Brazil',
            isoCode: 'br',
            dialCode: '55',
            flagClass: 'br',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'British Indian Ocean Territory',
            isoCode: 'io',
            dialCode: '246',
            flagClass: 'io',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Virgin Islands, British',
            isoCode: 'vg',
            dialCode: '1 284',
            flagClass: 'vg',
            priority: 0,
            areaCodes: [
                '284'
            ],
            placeholder: ''
        },
        {
            name: 'Brunei Darussalam',
            isoCode: 'bn',
            dialCode: '673',
            flagClass: 'bn',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Bulgaria',
            isoCode: 'bg',
            dialCode: '359',
            flagClass: 'bg',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Burkina Faso',
            isoCode: 'bf',
            dialCode: '226',
            flagClass: 'bf',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Burundi',
            isoCode: 'bi',
            dialCode: '257',
            flagClass: 'bi',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Cambodia',
            isoCode: 'kh',
            dialCode: '855',
            flagClass: 'kh',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Cameroon',
            isoCode: 'cm',
            dialCode: '237',
            flagClass: 'cm',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Canada',
            isoCode: 'ca',
            dialCode: '1',
            flagClass: 'ca',
            priority: 0,
            areaCodes: [
                '204',
                '226',
                '236',
                '249',
                '250',
                '289',
                '306',
                '343',
                '365',
                '387',
                '403',
                '416',
                '418',
                '431',
                '437',
                '438',
                '450',
                '506',
                '514',
                '519',
                '548',
                '579',
                '581',
                '587',
                '604',
                '613',
                '639',
                '647',
                '672',
                '705',
                '709',
                '742',
                '778',
                '780',
                '782',
                '807',
                '819',
                '825',
                '867',
                '873',
                '902',
                '905'
            ],
            placeholder: ''
        },
        {
            name: 'Cape Verde',
            isoCode: 'cv',
            dialCode: '238',
            flagClass: 'cv',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Cayman Islands',
            isoCode: 'ky',
            dialCode: ' 345',
            flagClass: 'ky',
            priority: 0,
            areaCodes: [
                '345'
            ],
            placeholder: ''
        },
        {
            name: 'Central African Republic',
            isoCode: 'cf',
            dialCode: '236',
            flagClass: 'cf',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Chad',
            isoCode: 'td',
            dialCode: '235',
            flagClass: 'td',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Chile',
            isoCode: 'cl',
            dialCode: '56',
            flagClass: 'cl',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'China',
            isoCode: 'cn',
            dialCode: '86',
            flagClass: 'cn',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Christmas Island',
            isoCode: 'cx',
            dialCode: '61',
            flagClass: 'cx',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Cocos (Keeling) Islands',
            isoCode: 'cc',
            dialCode: '61',
            flagClass: 'cc',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Colombia',
            isoCode: 'co',
            dialCode: '57',
            flagClass: 'co',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Comoros',
            isoCode: 'km',
            dialCode: '269',
            flagClass: 'km',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Congo, The Democratic Republic of the Congo',
            isoCode: 'cd',
            dialCode: '243',
            flagClass: 'cd',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Congo',
            isoCode: 'cg',
            dialCode: '242',
            flagClass: 'cg',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Cook Islands',
            isoCode: 'ck',
            dialCode: '682',
            flagClass: 'ck',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Costa Rica',
            isoCode: 'cr',
            dialCode: '506',
            flagClass: 'cr',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Cote d\'Ivoire',
            isoCode: 'ci',
            dialCode: '225',
            flagClass: 'ci',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Croatia',
            isoCode: 'hr',
            dialCode: '385',
            flagClass: 'hr',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Cuba',
            isoCode: 'cu',
            dialCode: '53',
            flagClass: 'cu',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Cyprus',
            isoCode: 'cy',
            dialCode: '357',
            flagClass: 'cy',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Czech Republic',
            isoCode: 'cz',
            dialCode: '420',
            flagClass: 'cz',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Denmark',
            isoCode: 'dk',
            dialCode: '45',
            flagClass: 'dk',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Djibouti',
            isoCode: 'dj',
            dialCode: '253',
            flagClass: 'dj',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Dominica',
            isoCode: 'dm',
            dialCode: '1 767',
            flagClass: 'dm',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Dominican Republic',
            isoCode: 'do',
            dialCode: '1 849',
            flagClass: 'do',
            priority: 0,
            areaCodes: [
                '809',
                '829',
                '849'
            ],
            placeholder: ''
        },
        {
            name: 'Ecuador',
            isoCode: 'ec',
            dialCode: '593',
            flagClass: 'ec',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Egypt',
            isoCode: 'eg',
            dialCode: '20',
            flagClass: 'eg',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'El Salvador',
            isoCode: 'sv',
            dialCode: '503',
            flagClass: 'sv',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Equatorial Guinea',
            isoCode: 'gq',
            dialCode: '240',
            flagClass: 'gq',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Eritrea',
            isoCode: 'er',
            dialCode: '291',
            flagClass: 'er',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Estonia',
            isoCode: 'ee',
            dialCode: '372',
            flagClass: 'ee',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Ethiopia',
            isoCode: 'et',
            dialCode: '251',
            flagClass: 'et',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Falkland Islands (Malvinas)',
            isoCode: 'fk',
            dialCode: '500',
            flagClass: 'fk',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Faroe Islands',
            isoCode: 'fo',
            dialCode: '298',
            flagClass: 'fo',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Fiji',
            isoCode: 'fj',
            dialCode: '679',
            flagClass: 'fj',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Finland',
            isoCode: 'fi',
            dialCode: '358',
            flagClass: 'fi',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'France',
            isoCode: 'fr',
            dialCode: '33',
            flagClass: 'fr',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'French Guiana',
            isoCode: 'gf',
            dialCode: '594',
            flagClass: 'gf',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'French Polynesia',
            isoCode: 'pf',
            dialCode: '689',
            flagClass: 'pf',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Gabon',
            isoCode: 'ga',
            dialCode: '241',
            flagClass: 'ga',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Gambia',
            isoCode: 'gm',
            dialCode: '220',
            flagClass: 'gm',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Georgia',
            isoCode: 'ge',
            dialCode: '995',
            flagClass: 'ge',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Germany',
            isoCode: 'de',
            dialCode: '49',
            flagClass: 'de',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Ghana',
            isoCode: 'gh',
            dialCode: '233',
            flagClass: 'gh',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Gibraltar',
            isoCode: 'gi',
            dialCode: '350',
            flagClass: 'gi',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Greece',
            isoCode: 'gr',
            dialCode: '30',
            flagClass: 'gr',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Greenland',
            isoCode: 'gl',
            dialCode: '299',
            flagClass: 'gl',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Grenada',
            isoCode: 'gd',
            dialCode: '1 473',
            flagClass: 'gd',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Guadeloupe',
            isoCode: 'gp',
            dialCode: '590',
            flagClass: 'gp',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Guam',
            isoCode: 'gu',
            dialCode: '1 671',
            flagClass: 'gu',
            priority: 0,
            areaCodes: [
                '671'
            ],
            placeholder: ''
        },
        {
            name: 'Guatemala',
            isoCode: 'gt',
            dialCode: '502',
            flagClass: 'gt',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Guernsey',
            isoCode: 'gg',
            dialCode: '44',
            flagClass: 'gg',
            priority: 0,
            areaCodes: [
                '1481'
            ],
            placeholder: ''
        },
        {
            name: 'Guinea',
            isoCode: 'gn',
            dialCode: '224',
            flagClass: 'gn',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Guinea-Bissau',
            isoCode: 'gw',
            dialCode: '245',
            flagClass: 'gw',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Guyana',
            isoCode: 'gy',
            dialCode: '595',
            flagClass: 'gy',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Haiti',
            isoCode: 'ht',
            dialCode: '509',
            flagClass: 'ht',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Honduras',
            isoCode: 'hn',
            dialCode: '504',
            flagClass: 'hn',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Hong Kong',
            isoCode: 'hk',
            dialCode: '852',
            flagClass: 'hk',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Hungary',
            isoCode: 'hu',
            dialCode: '36',
            flagClass: 'hu',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Iceland',
            isoCode: 'is',
            dialCode: '354',
            flagClass: 'is',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'India',
            isoCode: 'in',
            dialCode: '91',
            flagClass: 'in',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Indonesia',
            isoCode: 'id',
            dialCode: '62',
            flagClass: 'id',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Iran, Islamic Republic of Persian Gulf',
            isoCode: 'ir',
            dialCode: '98',
            flagClass: 'ir',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Iraq',
            isoCode: 'iq',
            dialCode: '964',
            flagClass: 'iq',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Ireland',
            isoCode: 'ie',
            dialCode: '353',
            flagClass: 'ie',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Isle of Man',
            isoCode: 'im',
            dialCode: '44',
            flagClass: 'im',
            priority: 0,
            areaCodes: [
                '1624'
            ],
            placeholder: ''
        },
        {
            name: 'Israel',
            isoCode: 'il',
            dialCode: '972',
            flagClass: 'il',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Italy',
            isoCode: 'it',
            dialCode: '39',
            flagClass: 'it',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Jamaica',
            isoCode: 'jm',
            dialCode: '1 876',
            flagClass: 'jm',
            priority: 0,
            areaCodes: [
                '876'
            ],
            placeholder: ''
        },
        {
            name: 'Japan',
            isoCode: 'jp',
            dialCode: '81',
            flagClass: 'jp',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Jersey',
            isoCode: 'je',
            dialCode: '44',
            flagClass: 'je',
            priority: 0,
            areaCodes: [
                '1534'
            ],
            placeholder: ''
        },
        {
            name: 'Jordan',
            isoCode: 'jo',
            dialCode: '962',
            flagClass: 'jo',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Kazakhstan',
            isoCode: 'kz',
            dialCode: '7 7',
            flagClass: 'kz',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Kenya',
            isoCode: 'ke',
            dialCode: '254',
            flagClass: 'ke',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Kiribati',
            isoCode: 'ki',
            dialCode: '686',
            flagClass: 'ki',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Kuwait',
            isoCode: 'kw',
            dialCode: '965',
            flagClass: 'kw',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Kyrgyzstan',
            isoCode: 'kg',
            dialCode: '996',
            flagClass: 'kg',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Laos',
            isoCode: 'la',
            dialCode: '856',
            flagClass: 'la',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Latvia',
            isoCode: 'lv',
            dialCode: '371',
            flagClass: 'lv',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Lebanon',
            isoCode: 'lb',
            dialCode: '961',
            flagClass: 'lb',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Lesotho',
            isoCode: 'ls',
            dialCode: '266',
            flagClass: 'ls',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Liberia',
            isoCode: 'lr',
            dialCode: '231',
            flagClass: 'lr',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Libyan Arab Jamahiriya',
            isoCode: 'ly',
            dialCode: '218',
            flagClass: 'ly',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Liechtenstein',
            isoCode: 'li',
            dialCode: '423',
            flagClass: 'li',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Lithuania',
            isoCode: 'lt',
            dialCode: '370',
            flagClass: 'lt',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Luxembourg',
            isoCode: 'lu',
            dialCode: '352',
            flagClass: 'lu',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Macao',
            isoCode: 'mo',
            dialCode: '853',
            flagClass: 'mo',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Macedonia',
            isoCode: 'mk',
            dialCode: '389',
            flagClass: 'mk',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Madagascar',
            isoCode: 'mg',
            dialCode: '261',
            flagClass: 'mg',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Malawi',
            isoCode: 'mw',
            dialCode: '265',
            flagClass: 'mw',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Malaysia',
            isoCode: 'my',
            dialCode: '60',
            flagClass: 'my',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Maldives',
            isoCode: 'mv',
            dialCode: '960',
            flagClass: 'mv',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Mali',
            isoCode: 'ml',
            dialCode: '223',
            flagClass: 'ml',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Malta',
            isoCode: 'mt',
            dialCode: '356',
            flagClass: 'mt',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Marshall Islands',
            isoCode: 'mh',
            dialCode: '692',
            flagClass: 'mh',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Martinique',
            isoCode: 'mq',
            dialCode: '596',
            flagClass: 'mq',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Mauritania',
            isoCode: 'mr',
            dialCode: '222',
            flagClass: 'mr',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Mauritius',
            isoCode: 'mu',
            dialCode: '230',
            flagClass: 'mu',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Mayotte',
            isoCode: 'yt',
            dialCode: '262',
            flagClass: 'yt',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Mexico',
            isoCode: 'mx',
            dialCode: '52',
            flagClass: 'mx',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Micronesia, Federated States of Micronesia',
            isoCode: 'fm',
            dialCode: '691',
            flagClass: 'fm',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Moldova',
            isoCode: 'md',
            dialCode: '373',
            flagClass: 'md',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Monaco',
            isoCode: 'mc',
            dialCode: '377',
            flagClass: 'mc',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Mongolia',
            isoCode: 'mn',
            dialCode: '976',
            flagClass: 'mn',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Montenegro',
            isoCode: 'me',
            dialCode: '382',
            flagClass: 'me',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Montserrat',
            isoCode: 'ms',
            dialCode: '1664',
            flagClass: 'ms',
            priority: 0,
            areaCodes: [
                '664'
            ],
            placeholder: ''
        },
        {
            name: 'Morocco',
            isoCode: 'ma',
            dialCode: '212',
            flagClass: 'ma',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Mozambique',
            isoCode: 'mz',
            dialCode: '258',
            flagClass: 'mz',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Myanmar',
            isoCode: 'mm',
            dialCode: '95',
            flagClass: 'mm',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Namibia',
            isoCode: 'na',
            dialCode: '264',
            flagClass: 'na',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Nauru',
            isoCode: 'nr',
            dialCode: '674',
            flagClass: 'nr',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Nepal',
            isoCode: 'np',
            dialCode: '977',
            flagClass: 'np',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Netherlands',
            isoCode: 'nl',
            dialCode: '31',
            flagClass: 'nl',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'New Caledonia',
            isoCode: 'nc',
            dialCode: '687',
            flagClass: 'nc',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'New Zealand',
            isoCode: 'nz',
            dialCode: '64',
            flagClass: 'nz',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Nicaragua',
            isoCode: 'ni',
            dialCode: '505',
            flagClass: 'ni',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Niger',
            isoCode: 'ne',
            dialCode: '227',
            flagClass: 'ne',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Nigeria',
            isoCode: 'ng',
            dialCode: '234',
            flagClass: 'ng',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Niue',
            isoCode: 'nu',
            dialCode: '683',
            flagClass: 'nu',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Norfolk Island',
            isoCode: 'nf',
            dialCode: '672',
            flagClass: 'nf',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Korea, Democratic People\'s Republic of Korea',
            isoCode: 'kp',
            dialCode: '850',
            flagClass: 'kp',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Northern Mariana Islands',
            isoCode: 'mp',
            dialCode: '1 670',
            flagClass: 'mp',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Norway',
            isoCode: 'no',
            dialCode: '47',
            flagClass: 'no',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Oman',
            isoCode: 'om',
            dialCode: '968',
            flagClass: 'om',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Pakistan',
            isoCode: 'pk',
            dialCode: '92',
            flagClass: 'pk',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Palau',
            isoCode: 'pw',
            dialCode: '680',
            flagClass: 'pw',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Palestinian Territory, Occupied',
            isoCode: 'ps',
            dialCode: '970',
            flagClass: 'ps',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Panama',
            isoCode: 'pa',
            dialCode: '507',
            flagClass: 'pa',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Papua New Guinea',
            isoCode: 'pg',
            dialCode: '675',
            flagClass: 'pg',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Paraguay',
            isoCode: 'py',
            dialCode: '595',
            flagClass: 'py',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Peru',
            isoCode: 'pe',
            dialCode: '51',
            flagClass: 'pe',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Philippines',
            isoCode: 'ph',
            dialCode: '63',
            flagClass: 'ph',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Poland',
            isoCode: 'pl',
            dialCode: '48',
            flagClass: 'pl',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Portugal',
            isoCode: 'pt',
            dialCode: '351',
            flagClass: 'pt',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Puerto Rico',
            isoCode: 'pr',
            dialCode: '1 939',
            flagClass: 'pr',
            priority: 0,
            areaCodes: [
                '787',
                '939'
            ],
            placeholder: ''
        },
        {
            name: 'Qatar',
            isoCode: 'qa',
            dialCode: '974',
            flagClass: 'qa',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Reunion',
            isoCode: 're',
            dialCode: '262',
            flagClass: 're',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Romania',
            isoCode: 'ro',
            dialCode: '40',
            flagClass: 'ro',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Russia',
            isoCode: 'ru',
            dialCode: '7',
            flagClass: 'ru',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Rwanda',
            isoCode: 'rw',
            dialCode: '250',
            flagClass: 'rw',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Saint Barthelemy',
            isoCode: 'bl',
            dialCode: '590',
            flagClass: 'bl',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Saint Helena, Ascension and Tristan Da Cunha',
            isoCode: 'sh',
            dialCode: '290',
            flagClass: 'sh',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Saint Kitts and Nevis',
            isoCode: 'kn',
            dialCode: '1 869',
            flagClass: 'kn',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Saint Lucia',
            isoCode: 'lc',
            dialCode: '1 758',
            flagClass: 'lc',
            priority: 0,
            areaCodes: [
                '758'
            ],
            placeholder: ''
        },
        {
            name: 'Saint Martin',
            isoCode: 'mf',
            dialCode: '590',
            flagClass: 'mf',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Saint Pierre and Miquelon',
            isoCode: 'pm',
            dialCode: '508',
            flagClass: 'pm',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Saint Vincent and the Grenadines',
            isoCode: 'vc',
            dialCode: '1 784',
            flagClass: 'vc',
            priority: 0,
            areaCodes: [
                '784'
            ],
            placeholder: ''
        },
        {
            name: 'Samoa',
            isoCode: 'ws',
            dialCode: '685',
            flagClass: 'ws',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'San Marino',
            isoCode: 'sm',
            dialCode: '378',
            flagClass: 'sm',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Sao Tome and Principe',
            isoCode: 'st',
            dialCode: '239',
            flagClass: 'st',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Saudi Arabia',
            isoCode: 'sa',
            dialCode: '966',
            flagClass: 'sa',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Senegal',
            isoCode: 'sn',
            dialCode: '221',
            flagClass: 'sn',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Serbia',
            isoCode: 'rs',
            dialCode: '381',
            flagClass: 'rs',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Seychelles',
            isoCode: 'sc',
            dialCode: '248',
            flagClass: 'sc',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Sierra Leone',
            isoCode: 'sl',
            dialCode: '232',
            flagClass: 'sl',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Singapore',
            isoCode: 'sg',
            dialCode: '65',
            flagClass: 'sg',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Slovakia',
            isoCode: 'sk',
            dialCode: '421',
            flagClass: 'sk',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Slovenia',
            isoCode: 'si',
            dialCode: '386',
            flagClass: 'si',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Solomon Islands',
            isoCode: 'sb',
            dialCode: '677',
            flagClass: 'sb',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Somalia',
            isoCode: 'so',
            dialCode: '252',
            flagClass: 'so',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'South Africa',
            isoCode: 'za',
            dialCode: '27',
            flagClass: 'za',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Korea, Republic of South Korea',
            isoCode: 'kr',
            dialCode: '82',
            flagClass: 'kr',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Spain',
            isoCode: 'es',
            dialCode: '34',
            flagClass: 'es',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Sri Lanka',
            isoCode: 'lk',
            dialCode: '94',
            flagClass: 'lk',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Sudan',
            isoCode: 'sd',
            dialCode: '249',
            flagClass: 'sd',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Suriname',
            isoCode: 'sr',
            dialCode: '597',
            flagClass: 'sr',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Svalbard and Jan Mayen',
            isoCode: 'sj',
            dialCode: '47',
            flagClass: 'sj',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Swaziland',
            isoCode: 'sz',
            dialCode: '268',
            flagClass: 'sz',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Sweden',
            isoCode: 'se',
            dialCode: '46',
            flagClass: 'se',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Switzerland',
            isoCode: 'ch',
            dialCode: '41',
            flagClass: 'ch',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Syrian Arab Republic',
            isoCode: 'sy',
            dialCode: '963',
            flagClass: 'sy',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Taiwan',
            isoCode: 'tw',
            dialCode: '886',
            flagClass: 'tw',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Tajikistan',
            isoCode: 'tj',
            dialCode: '992',
            flagClass: 'tj',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Tanzania, United Republic of Tanzania',
            isoCode: 'tz',
            dialCode: '255',
            flagClass: 'tz',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Thailand',
            isoCode: 'th',
            dialCode: '66',
            flagClass: 'th',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Timor-Leste',
            isoCode: 'tl',
            dialCode: '670',
            flagClass: 'tl',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Togo',
            isoCode: 'tg',
            dialCode: '228',
            flagClass: 'tg',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Tokelau',
            isoCode: 'tk',
            dialCode: '690',
            flagClass: 'tk',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Tonga',
            isoCode: 'to',
            dialCode: '676',
            flagClass: 'to',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Trinidad and Tobago',
            isoCode: 'tt',
            dialCode: '1 868',
            flagClass: 'tt',
            priority: 0,
            areaCodes: [
                '868'
            ],
            placeholder: ''
        },
        {
            name: 'Tunisia',
            isoCode: 'tn',
            dialCode: '216',
            flagClass: 'tn',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Turkey',
            isoCode: 'tr',
            dialCode: '90',
            flagClass: 'tr',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Turkmenistan',
            isoCode: 'tm',
            dialCode: '993',
            flagClass: 'tm',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Turks and Caicos Islands',
            isoCode: 'tc',
            dialCode: '1 649',
            flagClass: 'tc',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Tuvalu',
            isoCode: 'tv',
            dialCode: '688',
            flagClass: 'tv',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Virgin Islands, U.S.',
            isoCode: 'vi',
            dialCode: '1 340',
            flagClass: 'vi',
            priority: 0,
            areaCodes: [
                '340'
            ],
            placeholder: ''
        },
        {
            name: 'Uganda',
            isoCode: 'ug',
            dialCode: '256',
            flagClass: 'ug',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Ukraine',
            isoCode: 'ua',
            dialCode: '380',
            flagClass: 'ua',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'United Arab Emirates',
            isoCode: 'ae',
            dialCode: '971',
            flagClass: 'ae',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'United Kingdom',
            isoCode: 'gb',
            dialCode: '44',
            flagClass: 'gb',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'United States',
            isoCode: 'us',
            dialCode: '1',
            flagClass: 'us',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Uruguay',
            isoCode: 'uy',
            dialCode: '598',
            flagClass: 'uy',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Uzbekistan',
            isoCode: 'uz',
            dialCode: '998',
            flagClass: 'uz',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Vanuatu',
            isoCode: 'vu',
            dialCode: '678',
            flagClass: 'vu',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Holy See (Vatican City State)',
            isoCode: 'va',
            dialCode: '379',
            flagClass: 'va',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Venezuela, Bolivarian Republic of Venezuela',
            isoCode: 've',
            dialCode: '58',
            flagClass: 've',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Vietnam',
            isoCode: 'vn',
            dialCode: '84',
            flagClass: 'vn',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Wallis and Futuna',
            isoCode: 'wf',
            dialCode: '681',
            flagClass: 'wf',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Yemen',
            isoCode: 'ye',
            dialCode: '967',
            flagClass: 'ye',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Zambia',
            isoCode: 'zm',
            dialCode: '260',
            flagClass: 'zm',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Zimbabwe',
            isoCode: 'zw',
            dialCode: '263',
            flagClass: 'zw',
            priority: 0,
            placeholder: ''
        },
        {
            name: 'Aland Islands',
            isoCode: 'ax',
            dialCode: '358',
            flagClass: 'ax',
            priority: 0,
            placeholder: ''
        }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        IonIntlTelInputService.ctorParameters = function () { return []; };
        /** @nocollapse */ IonIntlTelInputService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function IonIntlTelInputService_Factory() { return new IonIntlTelInputService(); }, token: IonIntlTelInputService, providedIn: "root" });
        return IonIntlTelInputService;
    }());
    if (false) {
        /** @type {?} */
        IonIntlTelInputService.prototype.countryList;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var raf = (/**
     * @param {?} h
     * @return {?}
     */
    function (h) {
        if (typeof __zone_symbol__requestAnimationFrame === 'function') {
            return __zone_symbol__requestAnimationFrame(h);
        }
        if (typeof requestAnimationFrame === 'function') {
            return requestAnimationFrame(h);
        }
        return setTimeout(h);
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            this.numberChange = new core.EventEmitter();
            /**
             * Fires when the Phone number Input is blurred.
             * See more on.
             *
             * \@memberof IonIntlTelInputComponent
             */
            this.numberBlur = new core.EventEmitter();
            /**
             * Fires when the Phone number Input is focused.
             * See more on.
             *
             * \@memberof IonIntlTelInputComponent
             */
            this.numberFocus = new core.EventEmitter();
            /**
             * Fires when the user is typing in Phone number Input.
             * See more on.
             *
             * \@memberof IonIntlTelInputComponent
             */
            this.numberInput = new core.EventEmitter();
            /**
             * Fires when the dial code selection is changed.
             * See more on.
             *
             * \@memberof IonIntlTelInputComponent
             */
            this.codeChange = new core.EventEmitter();
            /**
             * Fires when the dial code selection modal is opened.
             * See more on.
             *
             * \@memberof IonIntlTelInputComponent
             */
            this.codeOpen = new core.EventEmitter();
            /**
             * Fires when the dial code selection modal is closed.
             * See more on.
             *
             * \@memberof IonIntlTelInputComponent
             */
            this.codeClose = new core.EventEmitter();
            /**
             * Fires when a dial code is selected in dial code selection modal.
             * See more on.
             *
             * \@memberof IonIntlTelInputComponent
             */
            this.codeSelect = new core.EventEmitter();
            // tslint:disable-next-line: variable-name
            this._value = null;
            this.countries = [];
            this.disabled = false;
            this.phoneNumber = '';
            this.phoneUtil = googleLibphonenumber.PhoneNumberUtil.getInstance();
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
                    ? this.phoneUtil.format(googleNumber, googleLibphonenumber.PhoneNumberFormat.INTERNATIONAL)
                    : '';
                /** @type {?} */
                var nationalNo = googleNumber
                    ? this.phoneUtil.format(googleNumber, googleLibphonenumber.PhoneNumberFormat.NATIONAL)
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
                    ? this.phoneUtil.format(googleNumber, googleLibphonenumber.PhoneNumberFormat.INTERNATIONAL)
                    : '';
                /** @type {?} */
                var nationalNo = googleNumber
                    ? this.phoneUtil.format(googleNumber, googleLibphonenumber.PhoneNumberFormat.NATIONAL)
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
                for (var _b = __values(this.countries), _c = _b.next(); !_c.done; _c = _b.next()) {
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
                for (var _b = __values(this.preferredCountries), _c = _b.next(); !_c.done; _c = _b.next()) {
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
            { type: core.Component, args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'ion-intl-tel-input',
                        template: "<div class=\"ion-intl-tel-input-code\">\n  <ionic-selectable\n    #codeSelect\n    [(ngModel)]=\"country\"\n    [canSearch]=\"modalCanSearch\"\n    closeButtonText=\"{{modalCloseText}}\"\n    closeButtonSlot=\"{{modalCloseButtonSlot}}\"\n    [disabled] = \"disabled\"\n    [hasVirtualScroll]=\"true\"\n    itemTextField=\"name\"\n    [items]=\"countries\"\n    itemValueField=\"dialCode\"\n    modalCssClass=\"ionic-tel-input-modal {{modalCssClass}}\"\n    placeholder=\"Country\"\n    searchFailText=\"{{modalSearchFailText}}\"\n    searchPlaceholder=\"{{modalSearchPlaceholder}}\"\n    [shouldBackdropClose]=\"modalShouldBackdropClose\"\n    [shouldFocusSearchbar]=\"modalShouldFocusSearchbar\"\n    (onChange)=\"onCodeChange($event)\"\n    (onClose)=\"onCodeClose()\"\n    (onOpen)=\"onCodeOpen()\"\n    (onSearch)=\"onCodeSearchCountries($event)\"\n    (onSelect)=\"onCodeSelect()\"\n  >\n    <ng-template ionicSelectableTitleTemplate>\n      {{modalTitle}}\n    </ng-template>\n    <ng-template ionicSelectableValueTemplate let-country=\"value\">\n      <span class=\"flag-icon flag-icon-{{country.flagClass}}\"></span>\n      <span *ngIf=\"separateDialCode\">{{dialCodePrefix}}{{country.dialCode}}</span>\n    </ng-template>\n    <ng-template ionicSelectableItemTemplate let-country=\"item\">\n        <span class=\"ion-margin-end\">{{country.name}}</span>\n        <span *ngIf=\"separateDialCode\">{{dialCodePrefix}}{{country.dialCode}}</span>\n    </ng-template>\n    <ng-template ionicSelectableItemEndTemplate let-country=\"item\">\n      <span class=\"flag-icon flag-icon-{{country.flagClass}}\"></span>\n    </ng-template>\n  </ionic-selectable>\n</div>\n\n<div class=\"ion-intl-tel-input-number\">\n  <ion-input\n    #numberInput\n    [(ngModel)]=\"phoneNumber\"\n    autocomplete=\"off\"\n    [disabled] = \"disabled\" \n    [attr.maxLength]=\"maxLength\"\n    type=\"tel\"\n    (ionBlur)=\"onIonNumberBlur()\"\n    (ionChange)=\"onIonNumberChange($event)\"\n    (ionFocus)=\"onIonNumberFocus()\"\n    (ionInput)=\"onIonNumberInput($event)\"\n    (keydown)=\"onNumberKeyDown($event)\"\n    (ngModelChange)=\"onNumberChange()\"\n    placeholder=\"{{country | countryPlaceholder: inputPlaceholder:separateDialCode:fallbackPlaceholder}}\" >\n  </ion-input>\n</div>\n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
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
            { type: core.ElementRef },
            { type: angular.Platform },
            { type: IonIntlTelInputService }
        ]; };
        IonIntlTelInputComponent.propDecorators = {
            cssClass: [{ type: core.HostBinding, args: ['class.ion-intl-tel-input',] }],
            isIos: [{ type: core.HostBinding, args: ['class.ion-intl-tel-input-ios',] }],
            isMD: [{ type: core.HostBinding, args: ['class.ion-intl-tel-input-md',] }],
            hasFocus: [{ type: core.HostBinding, args: ['class.has-focus',] }],
            hasValueCssClass: [{ type: core.HostBinding, args: ['class.ion-intl-tel-input-has-value',] }],
            isEnabled: [{ type: core.HostBinding, args: ['class.ion-intl-tel-input-is-enabled',] }, { type: core.Input, args: ['isEnabled',] }],
            defaultCountryiso: [{ type: core.Input }],
            dialCodePrefix: [{ type: core.Input }],
            enableAutoCountrySelect: [{ type: core.Input }],
            enablePlaceholder: [{ type: core.Input }],
            fallbackPlaceholder: [{ type: core.Input }],
            inputPlaceholder: [{ type: core.Input }],
            maxLength: [{ type: core.Input }],
            modalTitle: [{ type: core.Input }],
            modalCssClass: [{ type: core.Input }],
            modalSearchPlaceholder: [{ type: core.Input }],
            modalCloseText: [{ type: core.Input }],
            modalCloseButtonSlot: [{ type: core.Input }],
            modalCanSearch: [{ type: core.Input }],
            modalShouldBackdropClose: [{ type: core.Input }],
            modalShouldFocusSearchbar: [{ type: core.Input }],
            modalSearchFailText: [{ type: core.Input }],
            onlyCountries: [{ type: core.Input }],
            preferredCountries: [{ type: core.Input }],
            selectFirstCountry: [{ type: core.Input }],
            separateDialCode: [{ type: core.Input }],
            numberChange: [{ type: core.Output }],
            numberBlur: [{ type: core.Output }],
            numberFocus: [{ type: core.Output }],
            numberInput: [{ type: core.Output }],
            codeChange: [{ type: core.Output }],
            codeOpen: [{ type: core.Output }],
            codeClose: [{ type: core.Output }],
            codeSelect: [{ type: core.Output }],
            numberInputEl: [{ type: core.ViewChild, args: ['numberInput', { static: false },] }]
        };
        return IonIntlTelInputComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IonIntlTelInputModel() { }
    if (false) {
        /** @type {?} */
        IonIntlTelInputModel.prototype.number;
        /** @type {?} */
        IonIntlTelInputModel.prototype.internationalNumber;
        /** @type {?} */
        IonIntlTelInputModel.prototype.nationalNumber;
        /** @type {?} */
        IonIntlTelInputModel.prototype.isoCode;
        /** @type {?} */
        IonIntlTelInputModel.prototype.dialCode;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            var phoneUtil = googleLibphonenumber.PhoneNumberUtil.getInstance();
            try {
                /** @type {?} */
                var placeholder = phoneUtil.format(phoneUtil.getExampleNumber(country.isoCode), googleLibphonenumber.PhoneNumberFormat.INTERNATIONAL);
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
            { type: core.Pipe, args: [{ name: 'countryPlaceholder' },] }
        ];
        return CountryPlaceholder;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonIntlTelInputModule = /** @class */ (function () {
        function IonIntlTelInputModule() {
        }
        IonIntlTelInputModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            CountryPlaceholder,
                            IonIntlTelInputValidatorDirective,
                            IonIntlTelInputComponent
                        ],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                            ionicSelectable.IonicSelectableModule
                        ],
                        exports: [
                            IonIntlTelInputComponent,
                            IonIntlTelInputValidatorDirective
                        ],
                        providers: [
                            IonIntlTelInputService
                        ],
                    },] }
        ];
        return IonIntlTelInputModule;
    }());

    exports.IonIntlTelInputComponent = IonIntlTelInputComponent;
    exports.IonIntlTelInputModule = IonIntlTelInputModule;
    exports.IonIntlTelInputValidatorDirective = IonIntlTelInputValidatorDirective;
    exports.IonIntlTelInputValidators = IonIntlTelInputValidators;
    exports.ɵa = IonIntlTelInputService;
    exports.ɵb = CountryPlaceholder;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ion-intl-tel-input.umd.js.map
