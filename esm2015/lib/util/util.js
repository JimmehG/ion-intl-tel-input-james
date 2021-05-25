/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const raf = (/**
 * @param {?} h
 * @return {?}
 */
(h) => {
    if (typeof __zone_symbol__requestAnimationFrame === 'function') {
        return __zone_symbol__requestAnimationFrame(h);
    }
    if (typeof requestAnimationFrame === 'function') {
        return requestAnimationFrame(h);
    }
    return setTimeout(h);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi91dGlsL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxNQUFNLE9BQU8sR0FBRzs7OztBQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7SUFDNUIsSUFBSSxPQUFPLG9DQUFvQyxLQUFLLFVBQVUsRUFBRTtRQUM5RCxPQUFPLG9DQUFvQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hEO0lBQ0QsSUFBSSxPQUFPLHFCQUFxQixLQUFLLFVBQVUsRUFBRTtRQUMvQyxPQUFPLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pDO0lBQ0QsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCBfX3pvbmVfc3ltYm9sX19yZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IGFueTtcbmRlY2xhcmUgY29uc3QgcmVxdWVzdEFuaW1hdGlvbkZyYW1lOiBhbnk7XG5cbmV4cG9ydCBjb25zdCByYWYgPSAoaDogYW55KSA9PiB7XG4gIGlmICh0eXBlb2YgX196b25lX3N5bWJvbF9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIF9fem9uZV9zeW1ib2xfX3JlcXVlc3RBbmltYXRpb25GcmFtZShoKTtcbiAgfVxuICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaCk7XG4gIH1cbiAgcmV0dXJuIHNldFRpbWVvdXQoaCk7XG59O1xuIl19