import { PipeTransform } from '@angular/core';
import { CountryI } from './../models/country.model';
export declare class CountryPlaceholder implements PipeTransform {
    transform(country: CountryI, inputPlaceholder: string, separateDialCode: boolean, fallbackPlaceholder: string): string;
}
