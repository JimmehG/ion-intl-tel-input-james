/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicSelectableModule } from 'ionic-selectable';
import { CountryPlaceholder } from './pipes/country-placeholder';
import { IonIntlTelInputValidatorDirective } from './ion-intl-tel-input.directive';
import { IonIntlTelInputComponent } from './ion-intl-tel-input/ion-intl-tel-input.component';
import { IonIntlTelInputService } from './ion-intl-tel-input.service';
export class IonIntlTelInputModule {
}
IonIntlTelInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    CountryPlaceholder,
                    IonIntlTelInputValidatorDirective,
                    IonIntlTelInputComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    IonicModule,
                    IonicSelectableModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9pb24taW50bC10ZWwtaW5wdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBNkIsaUNBQWlDLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQXNCdEUsTUFBTSxPQUFPLHFCQUFxQjs7O1lBcEJqQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGtCQUFrQjtvQkFDbEIsaUNBQWlDO29CQUNqQyx3QkFBd0I7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxxQkFBcUI7aUJBQ3RCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx3QkFBd0I7b0JBQ3hCLGlDQUFpQztpQkFDbEM7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULHNCQUFzQjtpQkFDdkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlTW9kdWxlIH0gZnJvbSAnaW9uaWMtc2VsZWN0YWJsZSc7XG5cbmltcG9ydCB7IENvdW50cnlQbGFjZWhvbGRlciB9IGZyb20gJy4vcGlwZXMvY291bnRyeS1wbGFjZWhvbGRlcic7XG5pbXBvcnQgeyBJb25JbnRsVGVsSW5wdXRWYWxpZGF0b3JzLCBJb25JbnRsVGVsSW5wdXRWYWxpZGF0b3JEaXJlY3RpdmUgfSBmcm9tICcuL2lvbi1pbnRsLXRlbC1pbnB1dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uSW50bFRlbElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9pb24taW50bC10ZWwtaW5wdXQvaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJb25JbnRsVGVsSW5wdXRTZXJ2aWNlIH0gZnJvbSAnLi9pb24taW50bC10ZWwtaW5wdXQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvdW50cnlQbGFjZWhvbGRlcixcbiAgICBJb25JbnRsVGVsSW5wdXRWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgSW9uaWNTZWxlY3RhYmxlTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBJb25JbnRsVGVsSW5wdXRDb21wb25lbnQsXG4gICAgSW9uSW50bFRlbElucHV0VmFsaWRhdG9yRGlyZWN0aXZlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIElvbkludGxUZWxJbnB1dFNlcnZpY2VcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSW9uSW50bFRlbElucHV0TW9kdWxlIHsgfVxuIl19