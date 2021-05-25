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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbi1pbnRsLXRlbC1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi91dGlsL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxNQUFNLE9BQU8sR0FBRzs7OztBQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7SUFDNUIsSUFBSSxPQUFPLG9DQUFvQyxLQUFLLFVBQVUsRUFBRTtRQUM5RCxPQUFPLG9DQUFvQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hEO0lBQ0QsSUFBSSxPQUFPLHFCQUFxQixLQUFLLFVBQVUsRUFBRTtRQUMvQyxPQUFPLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pDO0lBQ0QsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCBfX3pvbmVfc3ltYm9sX19yZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IGFueTtcclxuZGVjbGFyZSBjb25zdCByZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IGFueTtcclxuXHJcbmV4cG9ydCBjb25zdCByYWYgPSAoaDogYW55KSA9PiB7XHJcbiAgaWYgKHR5cGVvZiBfX3pvbmVfc3ltYm9sX19yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiBfX3pvbmVfc3ltYm9sX19yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaCk7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGgpO1xyXG4gIH1cclxuICByZXR1cm4gc2V0VGltZW91dChoKTtcclxufTtcclxuIl19