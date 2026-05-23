(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useAllowClear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAllowClear",
    ()=>useAllowClear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const useAllowClear = (prefixCls, displayValues, allowClear, clearIcon, disabled = false, mergedSearchValue, mode)=>{
    // Convert boolean to object first
    const allowClearConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAllowClear.useMemo[allowClearConfig]": ()=>{
            if (typeof allowClear === 'boolean') {
                return {
                    allowClear
                };
            }
            if (allowClear && typeof allowClear === 'object') {
                return allowClear;
            }
            return {
                allowClear: false
            };
        }
    }["useAllowClear.useMemo[allowClearConfig]"], [
        allowClear
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAllowClear.useMemo": ()=>{
            const mergedAllowClear = !disabled && allowClearConfig.allowClear !== false && (displayValues.length || mergedSearchValue) && !(mode === 'combobox' && mergedSearchValue === '');
            return {
                allowClear: mergedAllowClear,
                clearIcon: mergedAllowClear ? allowClearConfig.clearIcon || clearIcon || '×' : null
            };
        }
    }["useAllowClear.useMemo"], [
        allowClearConfig,
        clearIcon,
        disabled,
        displayValues.length,
        mergedSearchValue,
        mode
    ]);
};
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useBaseProps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseSelectContext",
    ()=>BaseSelectContext,
    "default",
    ()=>useBaseProps
]);
/**
 * BaseSelect provide some parsed data into context.
 * You can use this hooks to get them.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const BaseSelectContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function useBaseProps() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](BaseSelectContext);
}
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useLock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useLock(duration = 250) {
    const lockRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const timeoutRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // Clean up
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useLock.useEffect": ()=>({
                "useLock.useEffect": ()=>{
                    window.clearTimeout(timeoutRef.current);
                }
            })["useLock.useEffect"]
    }["useLock.useEffect"], []);
    function doLock(locked) {
        if (locked || lockRef.current === null) {
            lockRef.current = locked;
        }
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(()=>{
            lockRef.current = null;
        }, duration);
    }
    return [
        ()=>lockRef.current,
        doLock
    ];
}
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useSelectTriggerControl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useSelectTriggerControl,
    "isInside",
    ()=>isInside
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
;
;
function isInside(elements, target) {
    return elements.filter((element)=>element).some((element)=>element.contains(target) || element === target);
}
function useSelectTriggerControl(elements, open, triggerOpen, customizedTrigger) {
    const onGlobalMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "useSelectTriggerControl.useEvent[onGlobalMouseDown]": (event)=>{
            // If trigger is customized, Trigger will take control of popupVisible
            if (customizedTrigger) {
                return;
            }
            let target = event.target;
            if (target.shadowRoot && event.composed) {
                target = event.composedPath()[0] || target;
            }
            if (event._ori_target) {
                target = event._ori_target;
            }
            if (open && // Marked by SelectInput mouseDown event
            !isInside(elements(), target)) {
                // Should trigger close
                triggerOpen(false);
            }
        }
    }["useSelectTriggerControl.useEvent[onGlobalMouseDown]"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useSelectTriggerControl.useEffect": ()=>{
            window.addEventListener('mousedown', onGlobalMouseDown);
            return ({
                "useSelectTriggerControl.useEffect": ()=>window.removeEventListener('mousedown', onGlobalMouseDown)
            })["useSelectTriggerControl.useEffect"];
        }
    }["useSelectTriggerControl.useEffect"], [
        onGlobalMouseDown
    ]);
}
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectTrigger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
const getBuiltInPlacements = (popupMatchSelectWidth)=>{
    // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
    const adjustX = popupMatchSelectWidth === true ? 0 : 1;
    return {
        bottomLeft: {
            points: [
                'tl',
                'bl'
            ],
            offset: [
                0,
                4
            ],
            overflow: {
                adjustX,
                adjustY: 1
            },
            htmlRegion: 'scroll'
        },
        bottomRight: {
            points: [
                'tr',
                'br'
            ],
            offset: [
                0,
                4
            ],
            overflow: {
                adjustX,
                adjustY: 1
            },
            htmlRegion: 'scroll'
        },
        topLeft: {
            points: [
                'bl',
                'tl'
            ],
            offset: [
                0,
                -4
            ],
            overflow: {
                adjustX,
                adjustY: 1
            },
            htmlRegion: 'scroll'
        },
        topRight: {
            points: [
                'br',
                'tr'
            ],
            offset: [
                0,
                -4
            ],
            overflow: {
                adjustX,
                adjustY: 1
            },
            htmlRegion: 'scroll'
        }
    };
};
const SelectTrigger = (props, ref)=>{
    const { prefixCls, disabled, visible, children, popupElement, animation, transitionName, popupStyle, popupClassName, direction = 'ltr', placement, builtinPlacements, popupMatchSelectWidth, popupRender, popupAlign, getPopupContainer, empty, onPopupVisibleChange, onPopupMouseEnter, onPopupMouseDown, onPopupBlur, ...restProps } = props;
    // We still use `dropdown` className to keep compatibility
    // This is used for:
    // 1. Styles
    // 2. Animation
    // 3. Theme customization
    // Please do not modify this since it's a breaking change
    const popupPrefixCls = `${prefixCls}-dropdown`;
    let popupNode = popupElement;
    if (popupRender) {
        popupNode = popupRender(popupElement);
    }
    const mergedBuiltinPlacements = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SelectTrigger.useMemo[mergedBuiltinPlacements]": ()=>builtinPlacements || getBuiltInPlacements(popupMatchSelectWidth)
    }["SelectTrigger.useMemo[mergedBuiltinPlacements]"], [
        builtinPlacements,
        popupMatchSelectWidth
    ]);
    // ===================== Motion ======================
    const mergedTransitionName = animation ? `${popupPrefixCls}-${animation}` : transitionName;
    // =================== Popup Width ===================
    const isNumberPopupWidth = typeof popupMatchSelectWidth === 'number';
    const stretch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SelectTrigger.useMemo[stretch]": ()=>{
            if (isNumberPopupWidth) {
                return null;
            }
            return popupMatchSelectWidth === false ? 'minWidth' : 'width';
        }
    }["SelectTrigger.useMemo[stretch]"], [
        popupMatchSelectWidth,
        isNumberPopupWidth
    ]);
    let mergedPopupStyle = popupStyle;
    if (isNumberPopupWidth) {
        mergedPopupStyle = {
            ...popupStyle,
            width: popupMatchSelectWidth
        };
    }
    // ======================= Ref =======================
    const triggerPopupRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "SelectTrigger.useImperativeHandle": ()=>({
                getPopupElement: ({
                    "SelectTrigger.useImperativeHandle": ()=>triggerPopupRef.current?.popupElement
                })["SelectTrigger.useImperativeHandle"]
            })
    }["SelectTrigger.useImperativeHandle"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], _extends({}, restProps, {
        showAction: onPopupVisibleChange ? [
            'click'
        ] : [],
        hideAction: onPopupVisibleChange ? [
            'click'
        ] : [],
        popupPlacement: placement || (direction === 'rtl' ? 'bottomRight' : 'bottomLeft'),
        builtinPlacements: mergedBuiltinPlacements,
        prefixCls: popupPrefixCls,
        popupMotion: {
            motionName: mergedTransitionName
        },
        popup: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            onMouseEnter: onPopupMouseEnter,
            onMouseDown: onPopupMouseDown,
            onBlur: onPopupBlur
        }, popupNode),
        ref: triggerPopupRef,
        stretch: stretch,
        popupAlign: popupAlign,
        popupVisible: visible,
        getPopupContainer: getPopupContainer,
        popupClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(popupClassName, {
            [`${popupPrefixCls}-empty`]: empty
        }),
        popupStyle: mergedPopupStyle,
        onPopupVisibleChange: onPopupVisibleChange
    }), children);
};
const RefSelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](SelectTrigger);
if ("TURBOPACK compile-time truthy", 1) {
    RefSelectTrigger.displayName = 'SelectTrigger';
}
const __TURBOPACK__default__export__ = RefSelectTrigger;
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/valueUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fillFieldNames",
    ()=>fillFieldNames,
    "flattenOptions",
    ()=>flattenOptions,
    "getSeparatedContent",
    ()=>getSeparatedContent,
    "injectPropsWithOption",
    ()=>injectPropsWithOption,
    "isValidCount",
    ()=>isValidCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/warning.js [app-client] (ecmascript)");
;
function getKey(data, index) {
    const { key } = data;
    let value;
    if ('value' in data) {
        ({ value } = data);
    }
    if (key !== null && key !== undefined) {
        return key;
    }
    if (value !== undefined) {
        return value;
    }
    return `rc-index-key-${index}`;
}
function isValidCount(value) {
    return typeof value !== 'undefined' && !Number.isNaN(value);
}
function fillFieldNames(fieldNames, childrenAsData) {
    const { label, value, options, groupLabel } = fieldNames || {};
    const mergedLabel = label || (childrenAsData ? 'children' : 'label');
    return {
        label: mergedLabel,
        value: value || 'value',
        options: options || 'options',
        groupLabel: groupLabel || mergedLabel
    };
}
function flattenOptions(options, { fieldNames, childrenAsData } = {}) {
    const flattenList = [];
    const { label: fieldLabel, value: fieldValue, options: fieldOptions, groupLabel } = fillFieldNames(fieldNames, false);
    function dig(list, isGroupOption) {
        if (!Array.isArray(list)) {
            return;
        }
        list.forEach((data)=>{
            if (isGroupOption || !(fieldOptions in data)) {
                const value = data[fieldValue];
                // Option
                flattenList.push({
                    key: getKey(data, flattenList.length),
                    groupOption: isGroupOption,
                    data,
                    label: data[fieldLabel],
                    value
                });
            } else {
                let grpLabel = data[groupLabel];
                if (grpLabel === undefined && childrenAsData) {
                    grpLabel = data.label;
                }
                // Option Group
                flattenList.push({
                    key: getKey(data, flattenList.length),
                    group: true,
                    data,
                    label: grpLabel
                });
                dig(data[fieldOptions], true);
            }
        });
    }
    dig(options, false);
    return flattenList;
}
function injectPropsWithOption(option) {
    const newOption = {
        ...option
    };
    if (!('props' in newOption)) {
        Object.defineProperty(newOption, 'props', {
            get () {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.');
                return newOption;
            }
        });
    }
    return newOption;
}
const getSeparatedContent = (text, tokens, end)=>{
    if (!tokens || !tokens.length) {
        return null;
    }
    let match = false;
    const separate = (str, [token, ...restTokens])=>{
        if (!token) {
            return [
                str
            ];
        }
        const list = str.split(token);
        match = match || list.length > 1;
        return list.reduce((prevList, unitStr)=>[
                ...prevList,
                ...separate(unitStr, restTokens)
            ], []).filter(Boolean);
    };
    const list = separate(text, tokens);
    if (match) {
        return typeof end !== 'undefined' ? list.slice(0, end) : list;
    } else {
        return null;
    }
};
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/BaseSelect/Polite.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Polite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function Polite(props) {
    const { visible, values } = props;
    if (!visible) {
        return null;
    }
    // Only cut part of values since it's a screen reader
    const MAX_COUNT = 50;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        "aria-live": "polite",
        style: {
            width: 0,
            height: 0,
            position: 'absolute',
            overflow: 'hidden',
            opacity: 0
        }
    }, `${values.slice(0, MAX_COUNT).map(({ label, value })=>[
            'number',
            'string'
        ].includes(typeof label) ? label : value).join(', ')}`, values.length > MAX_COUNT ? ', ...' : null);
}
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useOpen.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useOpen,
    "macroTask",
    ()=>macroTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript) <export default as useControlledState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const internalMacroTask = (fn)=>{
    const channel = new MessageChannel();
    channel.port1.onmessage = fn;
    channel.port2.postMessage(null);
};
const macroTask = (fn, times = 1)=>{
    if (times <= 0) {
        fn();
        return;
    }
    internalMacroTask(()=>{
        macroTask(fn, times - 1);
    });
};
function useOpen(defaultOpen, propOpen, onOpen, postOpen) {
    // SSR not support Portal which means we need delay `open` for the first time render
    const [rendered, setRendered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOpen.useEffect": ()=>{
            setRendered(true);
        }
    }["useOpen.useEffect"], []);
    const [stateOpen, internalSetOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])(defaultOpen, propOpen);
    // Lock for options update
    const [lock, setLock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // During SSR, always return false for open state
    const ssrSafeOpen = rendered ? stateOpen : false;
    const mergedOpen = postOpen(ssrSafeOpen);
    const taskIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const triggerEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "useOpen.useEvent[triggerEvent]": (nextOpen)=>{
            if (onOpen && mergedOpen !== nextOpen) {
                onOpen(nextOpen);
            }
            internalSetOpen(nextOpen);
        }
    }["useOpen.useEvent[triggerEvent]"]);
    const toggleOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "useOpen.useEvent[toggleOpen]": (nextOpen, config = {})=>{
            const { cancelFun } = config;
            taskIdRef.current += 1;
            const id = taskIdRef.current;
            const nextOpenVal = typeof nextOpen === 'boolean' ? nextOpen : !mergedOpen;
            setLock(!nextOpenVal);
            function triggerUpdate() {
                if (// Always check if id is match
                id === taskIdRef.current && // Check if need to cancel
                !cancelFun?.()) {
                    triggerEvent(nextOpenVal);
                    setLock(false);
                }
            }
            // Weak update can be ignored
            if (nextOpenVal) {
                triggerUpdate();
            } else {
                macroTask({
                    "useOpen.useEvent[toggleOpen]": ()=>{
                        triggerUpdate();
                    }
                }["useOpen.useEvent[toggleOpen]"]);
            }
        }
    }["useOpen.useEvent[toggleOpen]"]);
    return [
        ssrSafeOpen,
        mergedOpen,
        toggleOpen,
        lock
    ];
}
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/Affix.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Affix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function Affix(props) {
    const { children, ...restProps } = props;
    if (!children) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", restProps, children);
}
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useSelectInputContext",
    ()=>useSelectInputContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const SelectInputContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function useSelectInputContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SelectInputContext);
}
const __TURBOPACK__default__export__ = SelectInputContext;
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/Input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useBaseProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
;
;
;
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { onChange, onKeyDown, onBlur, style, syncWidth, value, className, autoComplete, ...restProps } = props;
    const { prefixCls, mode, onSearch, onSearchSubmit, onInputBlur, autoFocus, tokenWithEnter, placeholder, components: { input: InputComponent = 'input' } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectInputContext"])();
    const { id, classNames, styles, open, activeDescendantId, role, disabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])() || {};
    const inputCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-input`, classNames?.input, className);
    // Used to handle input method composition status
    const compositionStatusRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    // Used to handle paste content, similar to original Selector implementation
    const pastedTextRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // ============================== Refs ==============================
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "Input.useImperativeHandle": ()=>inputRef.current
    }["Input.useImperativeHandle"]);
    // ============================== Data ==============================
    // Handle input changes
    const handleChange = (event)=>{
        let { value: nextVal } = event.target;
        // Handle pasted text with tokenWithEnter, similar to original Selector implementation
        if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
            // CRLF will be treated as a single space for input element
            const replacedText = pastedTextRef.current.replace(/[\r\n]+$/, '').replace(/\r\n/g, ' ').replace(/[\r\n]/g, ' ');
            nextVal = nextVal.replace(replacedText, pastedTextRef.current);
        }
        // Reset pasted text reference
        pastedTextRef.current = null;
        // Call onSearch callback
        if (onSearch) {
            onSearch(nextVal, true, compositionStatusRef.current);
        }
        // Call original onChange callback
        onChange?.(event);
    };
    // ============================ Keyboard ============================
    // Handle keyboard events
    const handleKeyDown = (event)=>{
        const { key } = event;
        const { value: nextVal } = event.currentTarget;
        // Handle Enter key submission - referencing Selector implementation
        if (key === 'Enter' && mode === 'tags' && !open && !compositionStatusRef.current && onSearchSubmit) {
            onSearchSubmit(nextVal);
        }
        // Call original onKeyDown callback
        onKeyDown?.(event);
    };
    // Handle blur events
    const handleBlur = (event)=>{
        // Call onInputBlur callback
        onInputBlur?.();
        // Call original onBlur callback
        onBlur?.(event);
    };
    // Handle input method composition start
    const handleCompositionStart = ()=>{
        compositionStatusRef.current = true;
    };
    // Handle input method composition end
    const handleCompositionEnd = (event)=>{
        compositionStatusRef.current = false;
        // Trigger search when input method composition ends, similar to original Selector
        if (mode !== 'combobox') {
            const { value: nextVal } = event.currentTarget;
            onSearch?.(nextVal, true, false);
        }
    };
    // Handle paste events to track pasted content
    const handlePaste = (event)=>{
        const { clipboardData } = event;
        const pastedValue = clipboardData?.getData('text');
        pastedTextRef.current = pastedValue || '';
    };
    // ============================= Width ==============================
    const [widthCssVar, setWidthCssVar] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](undefined);
    // When syncWidth is enabled, adjust input width based on content
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Input.useLayoutEffect": ()=>{
            const input = inputRef.current;
            if (syncWidth && input) {
                input.style.width = '0px';
                const scrollWidth = input.scrollWidth;
                setWidthCssVar(scrollWidth);
                // Reset input style
                input.style.width = '';
            }
        }
    }["Input.useLayoutEffect"], [
        syncWidth,
        value
    ]);
    // ============================= Render =============================
    // Extract shared input props
    const sharedInputProps = {
        id,
        type: mode === 'combobox' ? 'text' : 'search',
        ...restProps,
        ref: inputRef,
        style: {
            ...styles?.input,
            ...style,
            '--select-input-width': widthCssVar
        },
        autoFocus,
        autoComplete: autoComplete || 'off',
        className: inputCls,
        disabled,
        value: value || '',
        onChange: handleChange,
        onKeyDown: handleKeyDown,
        onBlur: handleBlur,
        onPaste: handlePaste,
        onCompositionStart: handleCompositionStart,
        onCompositionEnd: handleCompositionEnd,
        // Accessibility attributes
        role: role || 'combobox',
        'aria-expanded': open || false,
        'aria-haspopup': 'listbox',
        'aria-owns': open ? `${id}_list` : undefined,
        'aria-autocomplete': 'list',
        'aria-controls': open ? `${id}_list` : undefined,
        'aria-activedescendant': open ? activeDescendantId : undefined
    };
    // Handle different InputComponent types
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](InputComponent)) {
        // If InputComponent is a ReactElement, use cloneElement with merged props
        const existingProps = InputComponent.props || {};
        // Start with shared props as base
        const mergedProps = {
            placeholder: props.placeholder || placeholder,
            ...sharedInputProps,
            ...existingProps
        };
        // Batch update function calls
        Object.keys(existingProps).forEach((key)=>{
            const existingValue = existingProps[key];
            if (typeof existingValue === 'function') {
                // Merge event handlers
                mergedProps[key] = (...args)=>{
                    existingValue(...args);
                    sharedInputProps[key]?.(...args);
                };
            }
        });
        // Update ref
        mergedProps.ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(InputComponent.ref, sharedInputProps.ref);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](InputComponent, mergedProps);
    }
    // If InputComponent is a component type, render normally
    const Component = InputComponent;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Component, sharedInputProps);
});
const __TURBOPACK__default__export__ = Input;
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/Content/Placeholder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Placeholder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useBaseProps.js [app-client] (ecmascript)");
;
;
;
;
function Placeholder(props) {
    const { prefixCls, placeholder, displayValues } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectInputContext"])();
    const { classNames, styles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { show = true } = props;
    if (displayValues.length) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-placeholder`, classNames?.placeholder),
        style: {
            visibility: show ? 'visible' : 'hidden',
            ...styles?.placeholder
        }
    }, placeholder);
}
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
// Use any here since we do not get the type during compilation
/**
 * SelectContext is only used for Select. BaseSelect should not consume this context.
 */ const SelectContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
const __TURBOPACK__default__export__ = SelectContext;
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/commonUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTitle",
    ()=>getTitle,
    "hasValue",
    ()=>hasValue,
    "isBrowserClient",
    ()=>isBrowserClient,
    "isClient",
    ()=>isClient,
    "isComboNoValue",
    ()=>isComboNoValue,
    "toArray",
    ()=>toArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function toArray(value) {
    if (Array.isArray(value)) {
        return value;
    }
    return value !== undefined ? [
        value
    ] : [];
}
const isClient = typeof window !== 'undefined' && window.document && window.document.documentElement;
const isBrowserClient = ("TURBOPACK compile-time value", "development") !== 'test' && isClient;
function hasValue(value) {
    return value !== undefined && value !== null;
}
function isComboNoValue(value) {
    return !value && value !== 0;
}
function isTitleType(title) {
    return [
        'string',
        'number'
    ].includes(typeof title);
}
function getTitle(item) {
    let title = undefined;
    if (item) {
        if (isTitleType(item.title)) {
            title = item.title.toString();
        } else if (isTitleType(item.label)) {
            title = item.label.toString();
        }
    }
    return title;
}
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/Content/SingleContent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useBaseProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Content$2f$Placeholder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/Content/Placeholder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/commonUtil.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
;
;
;
const SingleContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ inputProps }, ref)=>{
    const { prefixCls, searchValue, activeValue, displayValues, maxLength, mode, components } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectInputContext"])();
    const { triggerOpen, title: rootTitle, showSearch, classNames, styles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const selectContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const [inputChanged, setInputChanged] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const combobox = mode === 'combobox';
    const displayValue = displayValues[0];
    // Implement the same logic as the old SingleSelector
    const mergedSearchValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SingleContent.useMemo[mergedSearchValue]": ()=>{
            if (combobox && activeValue && !inputChanged && triggerOpen) {
                return activeValue;
            }
            return showSearch ? searchValue : '';
        }
    }["SingleContent.useMemo[mergedSearchValue]"], [
        combobox,
        activeValue,
        inputChanged,
        triggerOpen,
        searchValue,
        showSearch
    ]);
    const [optionClassName, optionStyle, optionTitle, hasOptionStyle] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SingleContent.useMemo": ()=>{
            let className;
            let style;
            let titleValue;
            if (displayValue && selectContext?.flattenOptions) {
                const option = selectContext.flattenOptions.find({
                    "SingleContent.useMemo.option": (opt)=>opt.value === displayValue.value
                }["SingleContent.useMemo.option"]);
                if (option?.data) {
                    className = option.data.className;
                    style = option.data.style;
                    titleValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTitle"])(option.data);
                }
            }
            if (displayValue && !titleValue) {
                titleValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTitle"])(displayValue);
            }
            if (rootTitle !== undefined) {
                titleValue = rootTitle;
            }
            const nextHasStyle = !!className || !!style;
            return [
                className,
                style,
                titleValue,
                nextHasStyle
            ];
        }
    }["SingleContent.useMemo"], [
        displayValue,
        selectContext?.flattenOptions,
        rootTitle
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SingleContent.useEffect": ()=>{
            if (combobox) {
                setInputChanged(false);
            }
        }
    }["SingleContent.useEffect"], [
        combobox,
        activeValue
    ]);
    // ========================== Render ==========================
    const showHasValueCls = displayValue && displayValue.label !== null && displayValue.label !== undefined && String(displayValue.label).trim() !== '';
    // Render value
    // Only render value when not using custom input in combobox mode
    const shouldRenderValue = !(combobox && components?.input);
    const renderValue = shouldRenderValue ? displayValue ? hasOptionStyle ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-content-value`, optionClassName),
        style: {
            ...mergedSearchValue ? {
                visibility: 'hidden'
            } : {},
            ...optionStyle
        },
        title: optionTitle
    }, displayValue.label) : displayValue.label : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Content$2f$Placeholder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        show: !mergedSearchValue
    }) : null;
    // Render
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-content`, showHasValueCls && `${prefixCls}-content-has-value`, mergedSearchValue && `${prefixCls}-content-has-search-value`, hasOptionStyle && `${prefixCls}-content-has-option-style`, classNames?.content),
        style: styles?.content,
        title: hasOptionStyle ? undefined : optionTitle
    }, renderValue, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({
        ref: ref
    }, inputProps, {
        value: mergedSearchValue,
        maxLength: mode === 'combobox' ? maxLength : undefined,
        onChange: (e)=>{
            setInputChanged(true);
            inputProps.onChange?.(e);
        }
    })));
});
const __TURBOPACK__default__export__ = SingleContent;
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/TransBtn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
/**
 * Small wrapper for Select icons (clear/arrow/etc.).
 * Prevents default mousedown to avoid blurring or caret moves, and
 * renders a custom icon or a fallback icon span.
 *
 * DOM structure:
 * <span className={className} ...>
 *   { icon || <span className={`${className}-icon`}>{children}</span> }
 * </span>
 */ const TransBtn = (props)=>{
    const { className, style, customizeIcon, customizeIconProps, children, onMouseDown, onClick } = props;
    const icon = typeof customizeIcon === 'function' ? customizeIcon(customizeIconProps) : customizeIcon;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: className,
        onMouseDown: (event)=>{
            event.preventDefault();
            onMouseDown?.(event);
        },
        style: {
            userSelect: 'none',
            WebkitUserSelect: 'none',
            ...style
        },
        unselectable: "on",
        onClick: onClick,
        "aria-hidden": true
    }, icon !== undefined ? icon : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className.split(/\s+/).map((cls)=>`${cls}-icon`))
    }, children));
};
const __TURBOPACK__default__export__ = TransBtn;
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/Content/MultipleContent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$overflow$40$1$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+overflow@1.0.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/overflow/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$TransBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/TransBtn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/commonUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useBaseProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Content$2f$Placeholder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/Content/Placeholder.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
;
;
;
;
function itemKey(value) {
    return value.key ?? value.value;
}
const onPreventMouseDown = (event)=>{
    event.preventDefault();
    event.stopPropagation();
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function MultipleContent({ inputProps }, ref) {
    const { prefixCls, displayValues, searchValue, mode, onSelectorRemove, removeIcon: removeIconFromContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectInputContext"])();
    const { disabled, showSearch, triggerOpen, rawOpen, toggleOpen, autoClearSearchValue, tagRender: tagRenderFromContext, maxTagPlaceholder: maxTagPlaceholderFromContext, maxTagTextLength, maxTagCount, classNames, styles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const selectionItemPrefixCls = `${prefixCls}-selection-item`;
    // ===================== Search ======================
    // Apply autoClearSearchValue logic: when dropdown is closed and autoClearSearchValue is not false (default true), clear search value
    // Use rawOpen to avoid clearing search when emptyListContent blocks open
    let computedSearchValue = searchValue;
    if (!rawOpen && mode === 'multiple' && autoClearSearchValue !== false) {
        computedSearchValue = '';
    }
    const inputValue = showSearch ? computedSearchValue || '' : '';
    const inputEditable = showSearch && !disabled;
    // Props from context with safe defaults
    const removeIcon = removeIconFromContext ?? '×';
    const maxTagPlaceholder = maxTagPlaceholderFromContext ?? ((omittedValues)=>`+ ${omittedValues.length} ...`);
    const tagRender = tagRenderFromContext;
    const onToggleOpen = (newOpen)=>{
        toggleOpen(newOpen);
    };
    const onRemove = (value)=>{
        onSelectorRemove?.(value);
    };
    // ======================== Item ========================
    // >>> Render Selector Node. Includes Item & Rest
    const defaultRenderSelector = (item, content, itemDisabled, closable, onClose)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTitle"])(item),
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(selectionItemPrefixCls, {
                [`${selectionItemPrefixCls}-disabled`]: itemDisabled
            }, classNames?.item),
            style: styles?.item
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${selectionItemPrefixCls}-content`, classNames?.itemContent),
            style: styles?.itemContent
        }, content), closable && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$TransBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${selectionItemPrefixCls}-remove`, classNames?.itemRemove),
            style: styles?.itemRemove,
            onMouseDown: onPreventMouseDown,
            onClick: onClose,
            customizeIcon: removeIcon
        }, "\xD7"));
    const customizeRenderSelector = (value, content, itemDisabled, closable, onClose, isMaxTag, info)=>{
        const onMouseDown = (e)=>{
            onPreventMouseDown(e);
            onToggleOpen(!triggerOpen);
        };
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            onMouseDown: onMouseDown
        }, tagRender({
            label: content,
            value,
            index: info?.index,
            disabled: itemDisabled,
            closable,
            onClose,
            isMaxTag: !!isMaxTag
        }));
    };
    // ====================== Overflow ======================
    const renderItem = (valueItem, info)=>{
        const { disabled: itemDisabled, label, value } = valueItem;
        const closable = !disabled && !itemDisabled;
        let displayLabel = label;
        if (typeof maxTagTextLength === 'number') {
            if (typeof label === 'string' || typeof label === 'number') {
                const strLabel = String(displayLabel);
                if (strLabel.length > maxTagTextLength) {
                    displayLabel = `${strLabel.slice(0, maxTagTextLength)}...`;
                }
            }
        }
        const onClose = (event)=>{
            if (event) {
                event.stopPropagation();
            }
            onRemove(valueItem);
        };
        return typeof tagRender === 'function' ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose, undefined, info) : defaultRenderSelector(valueItem, displayLabel, itemDisabled, closable, onClose);
    };
    const renderRest = (omittedValues)=>{
        // https://github.com/ant-design/ant-design/issues/48930
        if (!displayValues.length) {
            return null;
        }
        const content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
        return typeof tagRender === 'function' ? customizeRenderSelector(undefined, content, false, false, undefined, true) : defaultRenderSelector({
            title: content
        }, content, false);
    };
    // ======================= Render =======================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$overflow$40$1$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: `${prefixCls}-content`,
        className: classNames?.content,
        style: styles?.content,
        prefix: !displayValues.length && !inputValue && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Content$2f$Placeholder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
        data: displayValues,
        renderItem: renderItem,
        renderRest: renderRest,
        suffix: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({
            ref: ref,
            disabled: disabled,
            readOnly: !inputEditable
        }, inputProps, {
            value: inputValue || '',
            syncWidth: true
        })),
        itemKey: itemKey,
        maxCount: maxTagCount
    });
});
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/Content/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/pickAttrs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Content$2f$SingleContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/Content/SingleContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Content$2f$MultipleContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/Content/MultipleContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useBaseProps.js [app-client] (ecmascript)");
;
;
;
;
;
;
const SelectContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectContent(_, ref) {
    const { multiple, onInputKeyDown, tabIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectInputContext"])();
    const baseProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { showSearch } = baseProps;
    const ariaProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(baseProps, {
        aria: true
    });
    const sharedInputProps = {
        ...ariaProps,
        onKeyDown: onInputKeyDown,
        readOnly: !showSearch,
        tabIndex
    };
    if (multiple) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Content$2f$MultipleContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref: ref,
            inputProps: sharedInputProps
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Content$2f$SingleContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        inputProps: sharedInputProps
    });
});
const __TURBOPACK__default__export__ = SelectContent;
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/keyUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isValidateOpenKey",
    ()=>isValidateOpenKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/KeyCode.js [app-client] (ecmascript)");
;
function isValidateOpenKey(currentKeyCode) {
    return(// Undefined for Edge bug:
    // https://github.com/ant-design/ant-design/issues/51292
    currentKeyCode && // Other keys
    ![
        // System function button
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ESC,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SHIFT,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].BACKSPACE,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].TAB,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].WIN_KEY,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ALT,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].META,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].WIN_KEY_RIGHT,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CTRL,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SEMICOLON,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].EQUALS,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CAPS_LOCK,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CONTEXT_MENU,
        // Arrow keys - should not trigger open when navigating in input
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].UP,
        // KeyCode.DOWN,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LEFT,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RIGHT,
        // F1-F12
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F1,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F2,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F3,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F4,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F5,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F6,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F7,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F8,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F9,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F10,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F11,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].F12
    ].includes(currentKeyCode));
}
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Affix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/Affix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Content$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/Content/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useBaseProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/KeyCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/keyUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/Dom/findDOMNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/pickAttrs.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
;
;
;
;
;
;
;
const DEFAULT_OMIT_PROPS = [
    'value',
    'onChange',
    'removeIcon',
    'placeholder',
    'maxTagCount',
    'maxTagTextLength',
    'maxTagPlaceholder',
    'choiceTransitionName',
    'onInputKeyDown',
    'onPopupScroll',
    'tabIndex',
    'activeValue',
    'onSelectorRemove',
    'focused'
];
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SelectInput(props, ref) {
    const { // Style
    prefixCls, className, style, // UI
    prefix, suffix, clearIcon, children, // Data
    multiple, displayValues, placeholder, mode, // Search
    searchValue, onSearch, onSearchSubmit, onInputBlur, // Input
    maxLength, autoFocus, // Events
    onMouseDown, onClearMouseDown, onInputKeyDown, onSelectorRemove, // Token handling
    tokenWithEnter, // Components
    components, ...restProps } = props;
    const { triggerOpen, toggleOpen, showSearch, disabled, loading, classNames, styles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const rootRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // Handle keyboard events similar to original Selector
    const onInternalInputKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "SelectInput.useEvent[onInternalInputKeyDown]": (event)=>{
            const { which } = event;
            // Compatible with multiple lines in TextArea
            const isTextAreaElement = inputRef.current instanceof HTMLTextAreaElement;
            // Prevent default behavior for up/down arrows when dropdown is open
            if (!isTextAreaElement && triggerOpen && (which === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].UP || which === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DOWN)) {
                event.preventDefault();
            }
            // Call the original onInputKeyDown callback
            if (onInputKeyDown) {
                onInputKeyDown(event);
            }
            // Move within the text box for TextArea
            if (isTextAreaElement && !triggerOpen && ~[
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].UP,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DOWN,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LEFT,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RIGHT
            ].indexOf(which)) {
                return;
            }
            // Open dropdown when a valid open key is pressed
            const isModifier = event.ctrlKey || event.altKey || event.metaKey;
            if (!isModifier && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidateOpenKey"])(which)) {
                toggleOpen(true);
            }
        }
    }["SelectInput.useEvent[onInternalInputKeyDown]"]);
    // ====================== Refs ======================
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "SelectInput.useImperativeHandle": ()=>{
            return {
                focus: ({
                    "SelectInput.useImperativeHandle": (options)=>{
                        // Focus the inner input if available, otherwise fall back to root div.
                        (inputRef.current || rootRef.current).focus?.(options);
                    }
                })["SelectInput.useImperativeHandle"],
                blur: ({
                    "SelectInput.useImperativeHandle": ()=>{
                        (inputRef.current || rootRef.current).blur?.();
                    }
                })["SelectInput.useImperativeHandle"],
                // Use getDOM to handle nested nativeElement structure (e.g., when RootComponent is antd Input)
                nativeElement: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDOM"])(rootRef.current)
            };
        }
    }["SelectInput.useImperativeHandle"]);
    // ====================== Open ======================
    const onInternalMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "SelectInput.useEvent[onInternalMouseDown]": (event)=>{
            if (!disabled) {
                const inputDOM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDOM"])(inputRef.current);
                // https://github.com/ant-design/ant-design/issues/56002
                // Tell `useSelectTriggerControl` to ignore this event
                // When icon is dynamic render, the parentNode will miss
                // so we need to mark the event directly
                event.nativeEvent._ori_target = inputDOM;
                const isClickOnInput = inputDOM === event.target || inputDOM?.contains(event.target);
                if (inputDOM && !isClickOnInput) {
                    event.preventDefault();
                }
                // Check if we should prevent closing when clicking on selector
                // Don't close if: open && not multiple && (combobox mode || showSearch)
                const shouldPreventCloseOnSingle = triggerOpen && !multiple && (mode === 'combobox' || showSearch);
                // Don't close if: open && multiple && click on input
                const shouldPreventCloseOnMultipleInput = triggerOpen && multiple && isClickOnInput;
                const shouldPreventClose = shouldPreventCloseOnSingle || shouldPreventCloseOnMultipleInput;
                if (!event.nativeEvent._select_lazy) {
                    inputRef.current?.focus();
                    // Only toggle open if we should not prevent close
                    if (!shouldPreventClose) {
                        toggleOpen();
                    }
                } else if (triggerOpen) {
                    // Lazy should also close when click clear icon
                    toggleOpen(false);
                }
            }
            onMouseDown?.(event);
        }
    }["SelectInput.useEvent[onInternalMouseDown]"]);
    // =================== Components ===================
    const { root: RootComponent } = components;
    // ===================== Render =====================
    const domProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(restProps, DEFAULT_OMIT_PROPS);
    const ariaProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(domProps, {
        aria: true
    });
    const ariaKeys = Object.keys(ariaProps);
    // Create context value with wrapped callbacks
    const contextValue = {
        ...props,
        onInputKeyDown: onInternalInputKeyDown
    };
    if (RootComponent) {
        const originProps = RootComponent.props || {};
        const mergedProps = {
            ...originProps,
            ...domProps
        };
        Object.keys(originProps).forEach((key)=>{
            const originVal = originProps[key];
            const domVal = domProps[key];
            if (typeof originVal === 'function' && typeof domVal === 'function') {
                mergedProps[key] = (...args)=>{
                    domVal(...args);
                    originVal(...args);
                };
            }
        });
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](RootComponent)) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](RootComponent, {
                ...mergedProps,
                ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(RootComponent.ref, rootRef)
            });
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](RootComponent, _extends({}, mergedProps, {
            ref: rootRef
        }));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: contextValue
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(domProps, ariaKeys), {
        // Style
        ref: rootRef,
        className: className,
        style: style,
        onMouseDown: onInternalMouseDown
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Affix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-prefix`, classNames?.prefix),
        style: styles?.prefix
    }, prefix), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Content$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: inputRef
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Affix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-suffix`, {
            [`${prefixCls}-suffix-loading`]: loading
        }, classNames?.suffix),
        style: styles?.suffix
    }, suffix), clearIcon && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$Affix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-clear`, classNames?.clear),
        style: styles?.clear,
        onMouseDown: (e)=>{
            // Mark to tell not trigger open or focus
            e.nativeEvent._select_lazy = true;
            onClearMouseDown?.(e);
        }
    }, clearIcon), children));
});
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useComponents.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useComponents(components, getInputElement, getRawInputElement) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useComponents.useMemo": ()=>{
            let { root, input } = components || {};
            // root: getRawInputElement
            if (getRawInputElement) {
                root = getRawInputElement();
            }
            // input: getInputElement
            if (getInputElement) {
                input = getInputElement();
            }
            return {
                root,
                input
            };
        }
    }["useComponents.useMemo"], [
        components,
        getInputElement,
        getRawInputElement
    ]);
}
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/BaseSelect/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isMultiple",
    ()=>isMultiple
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/Dom/findDOMNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useAllowClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useAllowClear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useBaseProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useLock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useLock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useSelectTriggerControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useSelectTriggerControl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/valueUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$BaseSelect$2f$Polite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/BaseSelect/Polite.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useOpen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useOpen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectInput/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useComponents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useComponents.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const isMultiple = (mode)=>mode === 'tags' || mode === 'multiple';
const BaseSelect = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { id, prefixCls, className, styles, classNames, showSearch, tagRender, showScrollBar = 'optional', direction, omitDomProps, // Value
    displayValues, onDisplayValuesChange, emptyOptions, notFoundContent = 'Not Found', onClear, maxCount, placeholder, // Mode
    mode, // Status
    disabled, loading, // Customize Input
    getInputElement, getRawInputElement, // Open
    open, defaultOpen, onPopupVisibleChange, // Active
    activeValue, onActiveValueChange, activeDescendantId, // Search
    searchValue, autoClearSearchValue, onSearch, onSearchSplit, tokenSeparators, // Icons
    allowClear, prefix, suffix, suffixIcon, clearIcon, // Dropdown
    OptionList, animation, transitionName, popupStyle, popupClassName, popupMatchSelectWidth, popupRender, popupAlign, placement, builtinPlacements, getPopupContainer, // Focus
    showAction = [], onFocus, onBlur, // Rest Events
    onKeyUp, onKeyDown, onMouseDown, // Components
    components, // Rest Props
    ...restProps } = props;
    // ============================== MISC ==============================
    const multiple = isMultiple(mode);
    // ============================== Refs ==============================
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const listRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    /** Used for component focused management */ const [focused, setFocused] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    // =========================== Imperative ===========================
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "BaseSelect.useImperativeHandle": ()=>({
                focus: containerRef.current?.focus,
                blur: containerRef.current?.blur,
                scrollTo: ({
                    "BaseSelect.useImperativeHandle": (arg)=>listRef.current?.scrollTo(arg)
                })["BaseSelect.useImperativeHandle"],
                nativeElement: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDOM"])(containerRef.current)
            })
    }["BaseSelect.useImperativeHandle"]);
    // =========================== Components ===========================
    const mergedComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useComponents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(components, getInputElement, getRawInputElement);
    // ========================== Search Value ==========================
    const mergedSearchValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "BaseSelect.useMemo[mergedSearchValue]": ()=>{
            if (mode !== 'combobox') {
                return searchValue;
            }
            const val = displayValues[0]?.value;
            return typeof val === 'string' || typeof val === 'number' ? String(val) : '';
        }
    }["BaseSelect.useMemo[mergedSearchValue]"], [
        searchValue,
        mode,
        displayValues
    ]);
    // ========================== Custom Input ==========================
    // Only works in `combobox`
    const customizeInputElement = mode === 'combobox' && typeof getInputElement === 'function' && getInputElement() || null;
    // ============================== Open ==============================
    // Not trigger `open` when `notFoundContent` is empty
    const emptyListContent = !notFoundContent && emptyOptions;
    const [rawOpen, mergedOpen, triggerOpen, lockOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useOpen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultOpen || false, open, onPopupVisibleChange, {
        "BaseSelect.useOpen": (nextOpen)=>disabled || emptyListContent ? false : nextOpen
    }["BaseSelect.useOpen"]);
    // ============================= Search =============================
    const tokenWithEnter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "BaseSelect.useMemo[tokenWithEnter]": ()=>(tokenSeparators || []).some({
                "BaseSelect.useMemo[tokenWithEnter]": (tokenSeparator)=>[
                        '\n',
                        '\r\n'
                    ].includes(tokenSeparator)
            }["BaseSelect.useMemo[tokenWithEnter]"])
    }["BaseSelect.useMemo[tokenWithEnter]"], [
        tokenSeparators
    ]);
    const onInternalSearch = (searchText, fromTyping, isCompositing)=>{
        if (multiple && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidCount"])(maxCount) && displayValues.length >= maxCount) {
            return;
        }
        let ret = true;
        let newSearchText = searchText;
        onActiveValueChange?.(null);
        const separatedList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeparatedContent"])(searchText, tokenSeparators, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidCount"])(maxCount) ? maxCount - displayValues.length : undefined);
        // Check if match the `tokenSeparators`
        const patchLabels = isCompositing ? null : separatedList;
        // Ignore combobox since it's not split-able
        if (mode !== 'combobox' && patchLabels) {
            newSearchText = '';
            onSearchSplit?.(patchLabels);
            // Should close when paste finish
            triggerOpen(false);
            // Tell Selector that break next actions
            ret = false;
        }
        if (onSearch && mergedSearchValue !== newSearchText) {
            onSearch(newSearchText, {
                source: fromTyping ? 'typing' : 'effect'
            });
        }
        // Open if from typing
        if (searchText && fromTyping && ret) {
            triggerOpen(true);
        }
        return ret;
    };
    // Only triggered when menu is closed & mode is tags
    // If menu is open, OptionList will take charge
    // If mode isn't tags, press enter is not meaningful when you can't see any option
    const onInternalSearchSubmit = (searchText)=>{
        // prevent empty tags from appearing when you click the Enter button
        if (!searchText || !searchText.trim()) {
            return;
        }
        onSearch(searchText, {
            source: 'submit'
        });
    };
    // Clean up search value when the dropdown is closed.
    // We use `rawOpen` here to avoid clearing the search input when the dropdown is
    // programmatically closed due to `notFoundContent={null}` and no matching options.
    // This allows the user to continue typing their search query.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "BaseSelect.useEffect": ()=>{
            if (!rawOpen && !multiple && mode !== 'combobox') {
                onInternalSearch('', false, false);
            }
        }
    }["BaseSelect.useEffect"], [
        rawOpen
    ]);
    // ============================ Disabled ============================
    // Close dropdown & remove focus state when disabled change
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "BaseSelect.useEffect": ()=>{
            // After onBlur is triggered, the focused does not need to be reset
            if (disabled) {
                triggerOpen(false);
                setFocused(false);
            }
        }
    }["BaseSelect.useEffect"], [
        disabled,
        mergedOpen
    ]);
    // ============================ Keyboard ============================
    /**
   * We record input value here to check if can press to clean up by backspace
   * - null: Key is not down, this is reset by key up
   * - true: Search text is empty when first time backspace down
   * - false: Search text is not empty when first time backspace down
   */ const [getClearLock, setClearLock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useLock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const keyLockRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    // KeyDown
    const onInternalKeyDown = (event)=>{
        const clearLock = getClearLock();
        const { key } = event;
        const isEnterKey = key === 'Enter';
        const isSpaceKey = key === ' ';
        // Enter or Space opens dropdown (ARIA combobox: spacebar should open)
        if (isEnterKey || isSpaceKey) {
            // Do not submit form when type in the input; prevent Space from scrolling page
            const isCombobox = mode === 'combobox';
            const isEditable = isCombobox || showSearch;
            if (isSpaceKey && !isEditable || isEnterKey && !isCombobox) {
                event.preventDefault();
            }
            // We only manage open state here, close logic should handle by list component
            if (!mergedOpen) {
                triggerOpen(true);
            }
        }
        setClearLock(!!mergedSearchValue);
        // Remove value by `backspace`
        if (key === 'Backspace' && !clearLock && multiple && !mergedSearchValue && displayValues.length) {
            const cloneDisplayValues = [
                ...displayValues
            ];
            let removedDisplayValue = null;
            for(let i = cloneDisplayValues.length - 1; i >= 0; i -= 1){
                const current = cloneDisplayValues[i];
                if (!current.disabled) {
                    cloneDisplayValues.splice(i, 1);
                    removedDisplayValue = current;
                    break;
                }
            }
            if (removedDisplayValue) {
                onDisplayValuesChange(cloneDisplayValues, {
                    type: 'remove',
                    values: [
                        removedDisplayValue
                    ]
                });
            }
        }
        if (mergedOpen && (!isEnterKey || !keyLockRef.current) && !isSpaceKey) {
            // Lock the Enter key after it is pressed to avoid repeated triggering of the onChange event.
            if (isEnterKey) {
                keyLockRef.current = true;
            }
            listRef.current?.onKeyDown(event);
        }
        onKeyDown?.(event);
    };
    // KeyUp
    const onInternalKeyUp = (event, ...rest)=>{
        if (mergedOpen) {
            listRef.current?.onKeyUp(event, ...rest);
        }
        if (event.key === 'Enter') {
            keyLockRef.current = false;
        }
        onKeyUp?.(event, ...rest);
    };
    // ============================ Selector ============================
    const onSelectorRemove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "BaseSelect.useEvent[onSelectorRemove]": (val)=>{
            const newValues = displayValues.filter({
                "BaseSelect.useEvent[onSelectorRemove].newValues": (i)=>i !== val
            }["BaseSelect.useEvent[onSelectorRemove].newValues"]);
            onDisplayValuesChange(newValues, {
                type: 'remove',
                values: [
                    val
                ]
            });
        }
    }["BaseSelect.useEvent[onSelectorRemove]"]);
    const onInputBlur = ()=>{
        // Unlock the Enter key after the input blur; otherwise, the Enter key needs to be pressed twice to trigger the correct effect.
        keyLockRef.current = false;
    };
    // ========================== Focus / Blur ==========================
    const getSelectElements = ()=>[
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDOM"])(containerRef.current),
            triggerRef.current?.getPopupElement()
        ];
    // Close when click on non-select element
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useSelectTriggerControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(getSelectElements, mergedOpen, triggerOpen, !!mergedComponents.root);
    // ========================== Focus / Blur ==========================
    const internalMouseDownRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const onInternalFocus = (event)=>{
        setFocused(true);
        if (!disabled) {
            // `showAction` should handle `focus` if set
            if (showAction.includes('focus')) {
                triggerOpen(true);
            }
            onFocus?.(event);
        }
    };
    const onRootBlur = ()=>{
        // Delay close should check the activeElement
        if (mergedOpen && !internalMouseDownRef.current) {
            triggerOpen(false, {
                cancelFun: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useSelectTriggerControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInside"])(getSelectElements(), document.activeElement)
            });
        }
    };
    const onInternalBlur = (event)=>{
        setFocused(false);
        if (mergedSearchValue) {
            // `tags` mode should move `searchValue` into values
            if (mode === 'tags') {
                onSearch(mergedSearchValue, {
                    source: 'submit'
                });
            } else if (mode === 'multiple') {
                // `multiple` mode only clean the search value but not trigger event
                onSearch('', {
                    source: 'blur'
                });
            }
        }
        onRootBlur();
        if (!disabled) {
            onBlur?.(event);
        }
    };
    const onRootMouseDown = (event, ...restArgs)=>{
        const { target } = event;
        const popupElement = triggerRef.current?.getPopupElement();
        // We should give focus back to selector if clicked item is not focusable
        if (popupElement?.contains(target) && triggerOpen) {
            // Tell `open` not to close since it's safe in the popup
            triggerOpen(true);
        }
        onMouseDown?.(event, ...restArgs);
        internalMouseDownRef.current = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useOpen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["macroTask"])(()=>{
            internalMouseDownRef.current = false;
        });
    };
    // ============================ Dropdown ============================
    const [, forceUpdate] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({});
    // We need force update here since popup dom is render async
    function onPopupMouseEnter() {
        forceUpdate({});
    }
    // Used for raw custom input trigger
    let onTriggerVisibleChange;
    if (!!mergedComponents.root) {
        onTriggerVisibleChange = (newOpen)=>{
            triggerOpen(newOpen);
        };
    }
    // ============================ Context =============================
    const baseSelectContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "BaseSelect.useMemo[baseSelectContext]": ()=>({
                ...props,
                notFoundContent,
                open: mergedOpen,
                triggerOpen: mergedOpen,
                rawOpen,
                id,
                showSearch,
                multiple,
                toggleOpen: triggerOpen,
                showScrollBar,
                styles,
                classNames,
                lockOptions
            })
    }["BaseSelect.useMemo[baseSelectContext]"], [
        props,
        notFoundContent,
        triggerOpen,
        id,
        showSearch,
        multiple,
        mergedOpen,
        rawOpen,
        showScrollBar,
        styles,
        classNames,
        lockOptions
    ]);
    // ==================================================================
    // ==                            Render                            ==
    // ==================================================================
    // ============================= Suffix =============================
    const mergedSuffixIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "BaseSelect.useMemo[mergedSuffixIcon]": ()=>{
            const nextSuffix = suffix ?? suffixIcon;
            if (typeof nextSuffix === 'function') {
                return nextSuffix({
                    searchValue: mergedSearchValue,
                    open: mergedOpen,
                    focused,
                    showSearch,
                    loading
                });
            }
            return nextSuffix;
        }
    }["BaseSelect.useMemo[mergedSuffixIcon]"], [
        suffix,
        suffixIcon,
        mergedSearchValue,
        mergedOpen,
        focused,
        showSearch,
        loading
    ]);
    // ============================= Clear ==============================
    const onClearMouseDown = ()=>{
        onClear?.();
        containerRef.current?.focus();
        onDisplayValuesChange([], {
            type: 'clear',
            values: displayValues
        });
        onInternalSearch('', false, false);
    };
    const { allowClear: mergedAllowClear, clearIcon: clearNode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useAllowClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllowClear"])(prefixCls, displayValues, allowClear, clearIcon, disabled, mergedSearchValue, mode);
    // =========================== OptionList ===========================
    const optionList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](OptionList, {
        ref: listRef
    });
    // ============================= Select =============================
    const mergedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, className, {
        [`${prefixCls}-focused`]: focused,
        [`${prefixCls}-multiple`]: multiple,
        [`${prefixCls}-single`]: !multiple,
        [`${prefixCls}-allow-clear`]: mergedAllowClear,
        [`${prefixCls}-show-arrow`]: mergedSuffixIcon !== undefined && mergedSuffixIcon !== null,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-open`]: mergedOpen,
        [`${prefixCls}-customize-input`]: customizeInputElement,
        [`${prefixCls}-show-search`]: showSearch
    });
    // >>> Render
    let renderNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectInput$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, restProps, {
        // Ref
        ref: containerRef,
        prefixCls: prefixCls,
        className: mergedClassName,
        focused: focused,
        prefix: prefix,
        suffix: mergedSuffixIcon,
        clearIcon: clearNode,
        multiple: multiple,
        mode: mode,
        displayValues: displayValues,
        placeholder: placeholder,
        searchValue: mergedSearchValue,
        activeValue: activeValue,
        onSearch: onInternalSearch,
        onSearchSubmit: onInternalSearchSubmit,
        onInputBlur: onInputBlur,
        onFocus: onInternalFocus,
        onBlur: onInternalBlur,
        onClearMouseDown: onClearMouseDown,
        onKeyDown: onInternalKeyDown,
        onKeyUp: onInternalKeyUp,
        onSelectorRemove: onSelectorRemove,
        tokenWithEnter: tokenWithEnter,
        onMouseDown: onRootMouseDown,
        components: mergedComponents
    }));
    renderNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: triggerRef,
        disabled: disabled,
        prefixCls: prefixCls,
        visible: mergedOpen,
        popupElement: optionList,
        animation: animation,
        transitionName: transitionName,
        popupStyle: popupStyle,
        popupClassName: popupClassName,
        direction: direction,
        popupMatchSelectWidth: popupMatchSelectWidth,
        popupRender: popupRender,
        popupAlign: popupAlign,
        placement: placement,
        builtinPlacements: builtinPlacements,
        getPopupContainer: getPopupContainer,
        empty: emptyOptions,
        onPopupVisibleChange: onTriggerVisibleChange,
        onPopupMouseEnter: onPopupMouseEnter,
        onPopupMouseDown: onRootMouseDown,
        onPopupBlur: onRootBlur
    }, renderNode);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseSelectContext"].Provider, {
        value: baseSelectContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$BaseSelect$2f$Polite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        visible: focused && !mergedOpen,
        values: displayValues
    }), renderNode);
});
// Set display name for dev
if ("TURBOPACK compile-time truthy", 1) {
    BaseSelect.displayName = 'BaseSelect';
}
const __TURBOPACK__default__export__ = BaseSelect;
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/OptGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/* istanbul ignore file */ /** This is a placeholder, not real render in dom */ const OptGroup = ()=>null;
OptGroup.isSelectOptGroup = true;
const __TURBOPACK__default__export__ = OptGroup;
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/Option.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/* istanbul ignore file */ /** This is a placeholder, not real render in dom */ const Option = ()=>null;
Option.isSelectOption = true;
const __TURBOPACK__default__export__ = Option;
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/platformUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* istanbul ignore file */ __turbopack_context__.s([
    "isPlatformMac",
    ()=>isPlatformMac
]);
function isPlatformMac() {
    return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/OptionList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/KeyCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useMemo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/pickAttrs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$virtual$2d$list$40$1$2e$0$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$virtual$2d$list$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+virtual-list@1.0.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/virtual-list/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$TransBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/TransBtn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useBaseProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$platformUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/platformUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/valueUtil.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
;
;
;
;
;
;
;
;
// export interface OptionListProps<OptionsType extends object[]> {
function isTitleType(content) {
    return typeof content === 'string' || typeof content === 'number';
}
/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */ const OptionList = (_, ref)=>{
    const { prefixCls, id, open, multiple, mode, searchValue, toggleOpen, notFoundContent, onPopupScroll, showScrollBar, lockOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { maxCount, flattenOptions, onActiveValue, defaultActiveFirstOption, onSelect, menuItemSelectedIcon, rawValues, fieldNames, virtual, direction, listHeight, listItemHeight, optionRender, classNames: contextClassNames, styles: contextStyles } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const itemPrefixCls = `${prefixCls}-item`;
    const memoFlattenOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "OptionList.useMemo[memoFlattenOptions]": ()=>flattenOptions
    }["OptionList.useMemo[memoFlattenOptions]"], [
        open,
        lockOptions
    ], {
        "OptionList.useMemo[memoFlattenOptions]": (prev, next)=>next[0] && !next[1]
    }["OptionList.useMemo[memoFlattenOptions]"]);
    // =========================== List ===========================
    const listRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const overMaxCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "OptionList.useMemo[overMaxCount]": ()=>multiple && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidCount"])(maxCount) && rawValues?.size >= maxCount
    }["OptionList.useMemo[overMaxCount]"], [
        multiple,
        maxCount,
        rawValues?.size
    ]);
    const onListMouseDown = (event)=>{
        event.preventDefault();
    };
    const scrollIntoView = (args)=>{
        listRef.current?.scrollTo(typeof args === 'number' ? {
            index: args
        } : args);
    };
    // https://github.com/ant-design/ant-design/issues/34975
    const isSelected = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "OptionList.useCallback[isSelected]": (value)=>{
            if (mode === 'combobox') {
                return false;
            }
            return rawValues.has(value);
        }
    }["OptionList.useCallback[isSelected]"], [
        mode,
        [
            ...rawValues
        ].toString(),
        rawValues.size
    ]);
    // ========================== Active ==========================
    const getEnabledActiveIndex = (index, offset = 1)=>{
        const len = memoFlattenOptions.length;
        for(let i = 0; i < len; i += 1){
            const current = (index + i * offset + len) % len;
            const { group, data } = memoFlattenOptions[current] || {};
            if (!group && !data?.disabled && (isSelected(data.value) || !overMaxCount)) {
                return current;
            }
        }
        return -1;
    };
    const [activeIndex, setActiveIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "OptionList.useState": ()=>getEnabledActiveIndex(0)
    }["OptionList.useState"]);
    const setActive = (index, fromKeyboard = false)=>{
        setActiveIndex(index);
        const info = {
            source: fromKeyboard ? 'keyboard' : 'mouse'
        };
        // Trigger active event
        const flattenItem = memoFlattenOptions[index];
        if (!flattenItem) {
            onActiveValue(null, -1, info);
            return;
        }
        onActiveValue(flattenItem.value, index, info);
    };
    // Auto active first item when list length or searchValue changed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OptionList.useEffect": ()=>{
            setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
        }
    }["OptionList.useEffect"], [
        memoFlattenOptions.length,
        searchValue
    ]);
    // https://github.com/ant-design/ant-design/issues/48036
    const isAriaSelected = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "OptionList.useCallback[isAriaSelected]": (value)=>{
            if (mode === 'combobox') {
                return String(value).toLowerCase() === searchValue.toLowerCase();
            }
            return rawValues.has(value);
        }
    }["OptionList.useCallback[isAriaSelected]"], [
        mode,
        searchValue,
        [
            ...rawValues
        ].toString(),
        rawValues.size
    ]);
    // Auto scroll to item position in single mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OptionList.useEffect": ()=>{
            /**
     * React will skip `onChange` when component update.
     * `setActive` function will call root accessibility state update which makes re-render.
     * So we need to delay to let Input component trigger onChange first.
     */ let timeoutId;
            if (!multiple && open && rawValues.size === 1) {
                const value = Array.from(rawValues)[0];
                // Scroll to the option closest to the searchValue if searching.
                const index = memoFlattenOptions.findIndex({
                    "OptionList.useEffect.index": ({ data })=>searchValue ? String(data.value).startsWith(searchValue) : data.value === value
                }["OptionList.useEffect.index"]);
                if (index !== -1) {
                    setActive(index);
                    timeoutId = setTimeout({
                        "OptionList.useEffect": ()=>{
                            scrollIntoView(index);
                        }
                    }["OptionList.useEffect"]);
                }
            }
            // Force trigger scrollbar visible when open
            if (open) {
                listRef.current?.scrollTo(undefined);
            }
            return ({
                "OptionList.useEffect": ()=>clearTimeout(timeoutId)
            })["OptionList.useEffect"];
        }
    }["OptionList.useEffect"], [
        open,
        searchValue
    ]);
    // ========================== Values ==========================
    const onSelectValue = (value)=>{
        if (value !== undefined) {
            onSelect(value, {
                selected: !rawValues.has(value)
            });
        }
        // Single mode should always close by select
        if (!multiple) {
            toggleOpen(false);
        }
    };
    // ========================= Keyboard =========================
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "OptionList.useImperativeHandle": ()=>({
                onKeyDown: ({
                    "OptionList.useImperativeHandle": (event)=>{
                        const { which, ctrlKey } = event;
                        switch(which){
                            // >>> Arrow keys & ctrl + n/p on Mac
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].N:
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].P:
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].UP:
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DOWN:
                                {
                                    let offset = 0;
                                    if (which === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].UP) {
                                        offset = -1;
                                    } else if (which === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DOWN) {
                                        offset = 1;
                                    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$platformUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlatformMac"])() && ctrlKey) {
                                        if (which === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].N) {
                                            offset = 1;
                                        } else if (which === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].P) {
                                            offset = -1;
                                        }
                                    }
                                    if (offset !== 0) {
                                        const nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
                                        scrollIntoView(nextActiveIndex);
                                        setActive(nextActiveIndex, true);
                                    }
                                    break;
                                }
                            // >>> Select (Tab / Enter)
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].TAB:
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ENTER:
                                {
                                    // value
                                    const item = memoFlattenOptions[activeIndex];
                                    if (!item || item.data.disabled) {
                                        return onSelectValue(undefined);
                                    }
                                    if (!overMaxCount || rawValues.has(item.value)) {
                                        onSelectValue(item.value);
                                    } else {
                                        onSelectValue(undefined);
                                    }
                                    if (open) {
                                        event.preventDefault();
                                    }
                                    break;
                                }
                            // >>> Close
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ESC:
                                {
                                    toggleOpen(false);
                                    if (open) {
                                        event.stopPropagation();
                                    }
                                }
                        }
                    }
                })["OptionList.useImperativeHandle"],
                onKeyUp: ({
                    "OptionList.useImperativeHandle": ()=>{}
                })["OptionList.useImperativeHandle"],
                scrollTo: ({
                    "OptionList.useImperativeHandle": (index)=>{
                        scrollIntoView(index);
                    }
                })["OptionList.useImperativeHandle"]
            })
    }["OptionList.useImperativeHandle"]);
    // ========================== Render ==========================
    if (memoFlattenOptions.length === 0) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            role: "listbox",
            id: `${id}_list`,
            className: `${itemPrefixCls}-empty`,
            onMouseDown: onListMouseDown
        }, notFoundContent);
    }
    const omitFieldNameList = Object.keys(fieldNames).map((key)=>fieldNames[key]);
    const getLabel = (item)=>item.label;
    function getItemAriaProps(item, index) {
        const { group } = item;
        return {
            role: group ? 'presentation' : 'option',
            id: `${id}_list_${index}`
        };
    }
    const renderItem = (index)=>{
        const item = memoFlattenOptions[index];
        if (!item) {
            return null;
        }
        const itemData = item.data || {};
        const { value, disabled } = itemData;
        const { group } = item;
        const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(itemData, true);
        const mergedLabel = getLabel(item);
        return item ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", _extends({
            "aria-label": typeof mergedLabel === 'string' && !group ? mergedLabel : null
        }, attrs, {
            key: index
        }, getItemAriaProps(item, index), {
            "aria-selected": isAriaSelected(value),
            "aria-disabled": disabled
        }), value) : null;
    };
    const a11yProps = {
        role: 'listbox',
        id: `${id}_list`
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, virtual && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", _extends({}, a11yProps, {
        style: {
            height: 0,
            width: 0,
            overflow: 'hidden'
        }
    }), renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$virtual$2d$list$40$1$2e$0$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$virtual$2d$list$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        itemKey: "key",
        ref: listRef,
        data: memoFlattenOptions,
        height: listHeight,
        itemHeight: listItemHeight,
        fullHeight: false,
        onMouseDown: onListMouseDown,
        onScroll: onPopupScroll,
        virtual: virtual,
        direction: direction,
        innerProps: virtual ? null : a11yProps,
        showScrollBar: showScrollBar,
        className: contextClassNames?.popup?.list,
        style: contextStyles?.popup?.list
    }, (item, itemIndex)=>{
        const { group, groupOption, data, label, value } = item;
        const { key } = data;
        // Group
        if (group) {
            const groupTitle = data.title ?? (isTitleType(label) ? label.toString() : undefined);
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(itemPrefixCls, `${itemPrefixCls}-group`, data.className),
                title: groupTitle
            }, label !== undefined ? label : key);
        }
        const { disabled, title, children, style, className, ...otherProps } = data;
        const passedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(otherProps, omitFieldNameList);
        // Option
        const selected = isSelected(value);
        const mergedDisabled = disabled || !selected && overMaxCount;
        const optionPrefixCls = `${itemPrefixCls}-option`;
        const optionClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(itemPrefixCls, optionPrefixCls, className, contextClassNames?.popup?.listItem, {
            [`${optionPrefixCls}-grouped`]: groupOption,
            [`${optionPrefixCls}-active`]: activeIndex === itemIndex && !mergedDisabled,
            [`${optionPrefixCls}-disabled`]: mergedDisabled,
            [`${optionPrefixCls}-selected`]: selected
        });
        const mergedLabel = getLabel(item);
        const iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected;
        // https://github.com/ant-design/ant-design/issues/34145
        const content = typeof mergedLabel === 'number' ? mergedLabel : mergedLabel || value;
        // https://github.com/ant-design/ant-design/issues/26717
        let optionTitle = isTitleType(content) ? content.toString() : undefined;
        if (title !== undefined) {
            optionTitle = title;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(passedProps), !virtual ? getItemAriaProps(item, itemIndex) : {}, {
            "aria-selected": virtual ? undefined : isAriaSelected(value),
            "aria-disabled": mergedDisabled,
            className: optionClassName,
            title: optionTitle,
            onMouseMove: ()=>{
                if (activeIndex === itemIndex || mergedDisabled) {
                    return;
                }
                setActive(itemIndex);
            },
            onClick: ()=>{
                if (!mergedDisabled) {
                    onSelectValue(value);
                }
            },
            style: {
                ...contextStyles?.popup?.listItem,
                ...style
            }
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: `${optionPrefixCls}-content`
        }, typeof optionRender === 'function' ? optionRender(item, {
            index: itemIndex
        }) : content), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](menuItemSelectedIcon) || selected, iconVisible && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$TransBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: `${itemPrefixCls}-option-state`,
            customizeIcon: menuItemSelectedIcon,
            customizeIconProps: {
                value,
                disabled: mergedDisabled,
                isSelected: selected
            }
        }, selected ? '✓' : null));
    }));
};
const RefOptionList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](OptionList);
if ("TURBOPACK compile-time truthy", 1) {
    RefOptionList.displayName = 'OptionList';
}
const __TURBOPACK__default__export__ = RefOptionList;
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useCache.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = (labeledValues, valueOptions)=>{
    const cacheRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        values: new Map(),
        options: new Map()
    });
    const filledLabeledValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useMemo[filledLabeledValues]": ()=>{
            const { values: prevValueCache, options: prevOptionCache } = cacheRef.current;
            // Fill label by cache
            const patchedValues = labeledValues.map({
                "useMemo[filledLabeledValues].patchedValues": (item)=>{
                    if (item.label === undefined) {
                        return {
                            ...item,
                            label: prevValueCache.get(item.value)?.label
                        };
                    }
                    return item;
                }
            }["useMemo[filledLabeledValues].patchedValues"]);
            // Refresh cache
            const valueCache = new Map();
            const optionCache = new Map();
            patchedValues.forEach({
                "useMemo[filledLabeledValues]": (item)=>{
                    valueCache.set(item.value, item);
                    optionCache.set(item.value, valueOptions.get(item.value) || prevOptionCache.get(item.value));
                }
            }["useMemo[filledLabeledValues]"]);
            cacheRef.current.values = valueCache;
            cacheRef.current.options = optionCache;
            return patchedValues;
        }
    }["useMemo[filledLabeledValues]"], [
        labeledValues,
        valueOptions
    ]);
    const getOption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useCallback[getOption]": (val)=>valueOptions.get(val) || cacheRef.current.options.get(val)
    }["useCallback[getOption]"], [
        valueOptions
    ]);
    return [
        filledLabeledValues,
        getOption
    ];
};
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useFilterOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/commonUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/valueUtil.js [app-client] (ecmascript)");
;
;
;
function includes(test, search) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(test).join('').toUpperCase().includes(search);
}
const __TURBOPACK__default__export__ = (options, fieldNames, searchValue, filterOption, optionFilterProp)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useMemo": ()=>{
            if (!searchValue || filterOption === false) {
                return options;
            }
            const { options: fieldOptions, label: fieldLabel, value: fieldValue } = fieldNames;
            const filteredOptions = [];
            const customizeFilter = typeof filterOption === 'function';
            const upperSearch = searchValue.toUpperCase();
            const filterFunc = customizeFilter ? filterOption : ({
                "useMemo": (_, option)=>{
                    // Use provided `optionFilterProp`
                    if (optionFilterProp && optionFilterProp.length) {
                        return optionFilterProp.some({
                            "useMemo": (prop)=>includes(option[prop], upperSearch)
                        }["useMemo"]);
                    }
                    // Auto select `label` or `value` by option type
                    if (option[fieldOptions]) {
                        // hack `fieldLabel` since `OptionGroup` children is not `label`
                        return includes(option[fieldLabel !== 'children' ? fieldLabel : 'label'], upperSearch);
                    }
                    return includes(option[fieldValue], upperSearch);
                }
            })["useMemo"];
            const wrapOption = customizeFilter ? ({
                "useMemo": (opt)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectPropsWithOption"])(opt)
            })["useMemo"] : ({
                "useMemo": (opt)=>opt
            })["useMemo"];
            options.forEach({
                "useMemo": (item)=>{
                    // Group should check child options
                    if (item[fieldOptions]) {
                        // Check group first
                        const matchGroup = filterFunc(searchValue, wrapOption(item));
                        if (matchGroup) {
                            filteredOptions.push(item);
                        } else {
                            // Check option
                            const subOptions = item[fieldOptions].filter({
                                "useMemo.subOptions": (subItem)=>filterFunc(searchValue, wrapOption(subItem))
                            }["useMemo.subOptions"]);
                            if (subOptions.length) {
                                filteredOptions.push({
                                    ...item,
                                    [fieldOptions]: subOptions
                                });
                            }
                        }
                        return;
                    }
                    if (filterFunc(searchValue, wrapOption(item))) {
                        filteredOptions.push(item);
                    }
                }
            }["useMemo"]);
            return filteredOptions;
        }
    }["useMemo"], [
        options,
        filterOption,
        optionFilterProp,
        searchValue,
        fieldNames
    ]);
};
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/legacyUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertChildrenToData",
    ()=>convertChildrenToData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript)");
;
;
function convertNodeToOption(node) {
    const { key, props: { children, value, ...restProps } } = node;
    return {
        key,
        value: value !== undefined ? value : key,
        children,
        ...restProps
    };
}
function convertChildrenToData(nodes, optionOnly = false) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(nodes).map((node, index)=>{
        if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](node) || !node.type) {
            return null;
        }
        const { type: { isSelectOptGroup }, key, props: { children, ...restProps } } = node;
        if (optionOnly || !isSelectOptGroup) {
            return convertNodeToOption(node);
        }
        return {
            key: `__RC_SELECT_GRP__${key === null ? index : key}__`,
            label: key,
            ...restProps,
            options: convertChildrenToData(children)
        };
    }).filter((data)=>data);
}
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/legacyUtil.js [app-client] (ecmascript)");
;
;
/**
 * Parse `children` to `options` if `options` is not provided.
 * Then flatten the `options`.
 */ const useOptions = (options, children, fieldNames, optionFilterProp, optionLabelProp)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useOptions.useMemo": ()=>{
            let mergedOptions = options;
            const childrenAsData = !options;
            if (childrenAsData) {
                mergedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertChildrenToData"])(children);
            }
            const valueOptions = new Map();
            const labelOptions = new Map();
            const setLabelOptions = {
                "useOptions.useMemo.setLabelOptions": (labelOptionsMap, option, key)=>{
                    if (key && typeof key === 'string') {
                        labelOptionsMap.set(option[key], option);
                    }
                }
            }["useOptions.useMemo.setLabelOptions"];
            const dig = {
                "useOptions.useMemo.dig": (optionList, isChildren = false)=>{
                    // for loop to speed up collection speed
                    for(let i = 0; i < optionList.length; i += 1){
                        const option = optionList[i];
                        if (!option[fieldNames.options] || isChildren) {
                            valueOptions.set(option[fieldNames.value], option);
                            setLabelOptions(labelOptions, option, fieldNames.label);
                            // https://github.com/ant-design/ant-design/issues/35304
                            optionFilterProp.forEach({
                                "useOptions.useMemo.dig": (prop)=>{
                                    setLabelOptions(labelOptions, option, prop);
                                }
                            }["useOptions.useMemo.dig"]);
                            setLabelOptions(labelOptions, option, optionLabelProp);
                        } else {
                            dig(option[fieldNames.options], true);
                        }
                    }
                }
            }["useOptions.useMemo.dig"];
            dig(mergedOptions);
            return {
                options: mergedOptions,
                valueOptions,
                labelOptions
            };
        }
    }["useOptions.useMemo"], [
        options,
        children,
        fieldNames,
        optionFilterProp,
        optionLabelProp
    ]);
};
const __TURBOPACK__default__export__ = useOptions;
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useRefFunc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useRefFunc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useRefFunc(callback) {
    const funcRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    funcRef.current = callback;
    const cacheFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useRefFunc.useCallback[cacheFn]": (...args)=>{
            return funcRef.current(...args);
        }
    }["useRefFunc.useCallback[cacheFn]"], []);
    return cacheFn;
}
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/warningPropsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "warningNullOptions",
    ()=>warningNullOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/BaseSelect/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/commonUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/legacyUtil.js [app-client] (ecmascript)");
;
;
;
;
;
;
function warningProps(props) {
    const { mode, options, children, backfill, allowClear, placeholder, getInputElement, showSearch, onSearch, defaultOpen, autoFocus, labelInValue, value, optionLabelProp } = props;
    const multiple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMultiple"])(mode);
    const mergedShowSearch = showSearch !== undefined ? showSearch : multiple || mode === 'combobox';
    const mergedOptions = options || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$legacyUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertChildrenToData"])(children);
    // `tags` should not set option as disabled
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mode !== 'tags' || mergedOptions.every((opt)=>!opt.disabled), 'Please avoid setting option to disabled in tags mode since user can always type text as tag.');
    // `combobox` & `tags` should option be `string` type
    if (mode === 'tags' || mode === 'combobox') {
        const hasNumberValue = mergedOptions.some((item)=>{
            if (item.options) {
                return item.options.some((opt)=>typeof ('value' in opt ? opt.value : opt.key) === 'number');
            }
            return typeof ('value' in item ? item.value : item.key) === 'number';
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!hasNumberValue, '`value` of Option should not use number type when `mode` is `tags` or `combobox`.');
    }
    // `combobox` should not use `optionLabelProp`
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mode !== 'combobox' || !optionLabelProp, '`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.');
    // Only `combobox` support `backfill`
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mode === 'combobox' || !backfill, '`backfill` only works with `combobox` mode.');
    // Only `combobox` support `getInputElement`
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mode === 'combobox' || !getInputElement, '`getInputElement` only work with `combobox` mode.');
    // Customize `getInputElement` should not use `allowClear` & `placeholder`
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noteOnce"])(mode !== 'combobox' || !getInputElement || !allowClear || !placeholder, 'Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.');
    // `onSearch` should use in `combobox` or `showSearch`
    if (onSearch && !mergedShowSearch && mode !== 'combobox' && mode !== 'tags') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, '`onSearch` should work with `showSearch` instead of use alone.');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noteOnce"])(!defaultOpen || autoFocus, '`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed.');
    if (value !== undefined && value !== null) {
        const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(value);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!labelInValue || values.every((val)=>typeof val === 'object' && ('key' in val || 'value' in val)), '`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!multiple || Array.isArray(value), '`value` should be array when `mode` is `multiple` or `tags`');
    }
    // Syntactic sugar should use correct children type
    if (children) {
        let invalidateChildType = null;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(children).some((node)=>{
            if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](node) || !node.type) {
                return false;
            }
            const { type } = node;
            if (type.isSelectOption) {
                return false;
            }
            if (type.isSelectOptGroup) {
                const allChildrenValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node.props.children).every((subNode)=>{
                    if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](subNode) || !node.type || subNode.type.isSelectOption) {
                        return true;
                    }
                    invalidateChildType = subNode.type;
                    return false;
                });
                if (allChildrenValid) {
                    return false;
                }
                return true;
            }
            invalidateChildType = type;
            return true;
        });
        if (invalidateChildType) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, `\`children\` should be \`Select.Option\` or \`Select.OptGroup\` instead of \`${invalidateChildType.displayName || invalidateChildType.name || invalidateChildType}\`.`);
        }
    }
}
function warningNullOptions(options, fieldNames) {
    if (options) {
        const recursiveOptions = (optionsList, inGroup = false)=>{
            for(let i = 0; i < optionsList.length; i++){
                const option = optionsList[i];
                if (option[fieldNames?.value] === null) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, '`value` in Select options should not be `null`.');
                    return true;
                }
                if (!inGroup && Array.isArray(option[fieldNames?.options]) && recursiveOptions(option[fieldNames?.options], true)) {
                    break;
                }
            }
        };
        recursiveOptions(options);
    }
}
const __TURBOPACK__default__export__ = warningProps;
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useSearchConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useSearchConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useSearchConfig(showSearch, props, mode) {
    const { filterOption, searchValue, optionFilterProp, filterSort, onSearch, autoClearSearchValue } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useSearchConfig.useMemo": ()=>{
            const isObject = typeof showSearch === 'object';
            const searchConfig = {
                filterOption,
                searchValue,
                optionFilterProp,
                filterSort,
                onSearch,
                autoClearSearchValue,
                ...isObject ? showSearch : {}
            };
            return [
                isObject || mode === 'combobox' || mode === 'tags' || mode === 'multiple' && showSearch === undefined ? true : showSearch,
                searchConfig
            ];
        }
    }["useSearchConfig.useMemo"], [
        mode,
        showSearch,
        filterOption,
        searchValue,
        optionFilterProp,
        filterSort,
        onSearch,
        autoClearSearchValue
    ]);
}
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/Select.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabIndex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 *
 * New api:
 * - listHeight
 * - listItemHeight
 * - component
 *
 * Remove deprecated api:
 * - multiple
 * - tags
 * - combobox
 * - firstActiveValue
 * - dropdownMenuStyle
 * - openClassName (Not list in api)
 *
 * Update:
 * - `backfill` only support `combobox` mode
 * - `combobox` mode not support `labelInValue` since it's meaningless
 * - `getInputElement` only support `combobox` mode
 * - `onChange` return OptionData instead of ReactNode
 * - `filterOption` `onChange` `onSelect` accept OptionData instead of ReactNode
 * - `combobox` mode trigger `onChange` will get `undefined` if no `value` match in Option
 * - `combobox` mode not support `optionLabelProp`
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/BaseSelect/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$OptGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/OptGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/Option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$OptionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/OptionList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/SelectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useFilterOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useFilterOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useRefFunc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useRefFunc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/commonUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/valueUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$warningPropsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/utils/warningPropsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useSearchConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useSearchConfig.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const OMIT_DOM_PROPS = [
    'inputValue'
];
function isRawValue(value) {
    return !value || typeof value !== 'object';
}
const Select = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { id, mode, prefixCls = 'rc-select', backfill, fieldNames, // Search
    showSearch, searchValue: legacySearchValue, onSearch: legacyOnSearch, autoClearSearchValue: legacyAutoClearSearchValue, filterOption: legacyFilterOption, optionFilterProp: legacyOptionFilterProp, filterSort: legacyFilterSort, // Select
    onSelect, onDeselect, onActive, popupMatchSelectWidth = true, optionLabelProp, options, optionRender, children, defaultActiveFirstOption, menuItemSelectedIcon, virtual, direction, listHeight = 200, listItemHeight = 20, labelRender, // Value
    value, defaultValue, labelInValue, onChange, maxCount, classNames, styles, ...restProps } = props;
    const searchProps = {
        searchValue: legacySearchValue,
        onSearch: legacyOnSearch,
        autoClearSearchValue: legacyAutoClearSearchValue,
        filterOption: legacyFilterOption,
        optionFilterProp: legacyOptionFilterProp,
        filterSort: legacyFilterSort
    };
    const [mergedShowSearch, searchConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useSearchConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(showSearch, searchProps, mode);
    const { filterOption, searchValue, optionFilterProp, filterSort, onSearch, autoClearSearchValue = true } = searchConfig;
    const normalizedOptionFilterProp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Select.useMemo[normalizedOptionFilterProp]": ()=>{
            if (!optionFilterProp) return [];
            return Array.isArray(optionFilterProp) ? optionFilterProp : [
                optionFilterProp
            ];
        }
    }["Select.useMemo[normalizedOptionFilterProp]"], [
        optionFilterProp
    ]);
    const mergedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(id);
    const multiple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMultiple"])(mode);
    const childrenAsData = !!(!options && children);
    const mergedFilterOption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Select.useMemo[mergedFilterOption]": ()=>{
            if (filterOption === undefined && mode === 'combobox') {
                return false;
            }
            return filterOption;
        }
    }["Select.useMemo[mergedFilterOption]"], [
        filterOption,
        mode
    ]);
    // ========================= FieldNames =========================
    const mergedFieldNames = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Select.useMemo[mergedFieldNames]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillFieldNames"])(fieldNames, childrenAsData)
    }["Select.useMemo[mergedFieldNames]"], /* eslint-disable react-hooks/exhaustive-deps */ [
        // We stringify fieldNames to avoid unnecessary re-renders.
        JSON.stringify(fieldNames),
        childrenAsData
    ]);
    // =========================== Search ===========================
    const [internalSearchValue, setSearchValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('', searchValue);
    const mergedSearchValue = internalSearchValue || '';
    // =========================== Option ===========================
    const parsedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(options, children, mergedFieldNames, normalizedOptionFilterProp, optionLabelProp);
    const { valueOptions, labelOptions, options: mergedOptions } = parsedOptions;
    // ========================= Wrap Value =========================
    const convert2LabelValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Select.useCallback[convert2LabelValues]": (draftValues)=>{
            // Convert to array
            const valueList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(draftValues);
            // Convert to labelInValue type
            return valueList.map({
                "Select.useCallback[convert2LabelValues]": (val)=>{
                    let rawValue;
                    let rawLabel;
                    let rawDisabled;
                    let rawTitle;
                    // Fill label & value
                    if (isRawValue(val)) {
                        rawValue = val;
                    } else {
                        rawLabel = val.label;
                        rawValue = val.value;
                    }
                    const option = valueOptions.get(rawValue);
                    if (option) {
                        // Fill missing props
                        if (rawLabel === undefined) rawLabel = option?.[optionLabelProp || mergedFieldNames.label];
                        rawDisabled = option?.disabled;
                        rawTitle = option?.title;
                        // Warning if label not same as provided
                        if (("TURBOPACK compile-time value", "development") !== 'production' && !optionLabelProp) {
                            const optionLabel = option?.[mergedFieldNames.label];
                            if (optionLabel !== undefined && !/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](optionLabel) && !/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](rawLabel) && optionLabel !== rawLabel) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, '`label` of `value` is not same as `label` in Select options.');
                            }
                        }
                    }
                    return {
                        label: rawLabel,
                        value: rawValue,
                        key: rawValue,
                        disabled: rawDisabled,
                        title: rawTitle
                    };
                }
            }["Select.useCallback[convert2LabelValues]"]);
        }
    }["Select.useCallback[convert2LabelValues]"], [
        mergedFieldNames,
        optionLabelProp,
        valueOptions
    ]);
    // =========================== Values ===========================
    const [internalValue, setInternalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultValue, value);
    // Merged value with LabelValueType
    const rawLabeledValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Select.useMemo[rawLabeledValues]": ()=>{
            const newInternalValue = multiple && internalValue === null ? [] : internalValue;
            const values = convert2LabelValues(newInternalValue);
            // combobox no need save value when it's no value (exclude value equal 0)
            if (mode === 'combobox' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isComboNoValue"])(values[0]?.value)) {
                return [];
            }
            return values;
        }
    }["Select.useMemo[rawLabeledValues]"], [
        internalValue,
        convert2LabelValues,
        mode,
        multiple
    ]);
    // Fill label with cache to avoid option remove
    const [mergedValues, getMixedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rawLabeledValues, valueOptions);
    const displayValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Select.useMemo[displayValues]": ()=>{
            // `null` need show as placeholder instead
            // https://github.com/ant-design/ant-design/issues/25057
            if (!mode && mergedValues.length === 1) {
                const firstValue = mergedValues[0];
                if (firstValue.value === null && (firstValue.label === null || firstValue.label === undefined)) {
                    return [];
                }
            }
            return mergedValues.map({
                "Select.useMemo[displayValues]": (item)=>({
                        ...item,
                        label: (typeof labelRender === 'function' ? labelRender(item) : item.label) ?? item.value
                    })
            }["Select.useMemo[displayValues]"]);
        }
    }["Select.useMemo[displayValues]"], [
        mode,
        mergedValues,
        labelRender
    ]);
    /** Convert `displayValues` to raw value type set */ const rawValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Select.useMemo[rawValues]": ()=>new Set(mergedValues.map({
                "Select.useMemo[rawValues]": (val)=>val.value
            }["Select.useMemo[rawValues]"]))
    }["Select.useMemo[rawValues]"], [
        mergedValues
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Select.useEffect": ()=>{
            if (mode === 'combobox') {
                const strValue = mergedValues[0]?.value;
                setSearchValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasValue"])(strValue) ? String(strValue) : '');
            }
        }
    }["Select.useEffect"], [
        mergedValues
    ]);
    // ======================= Display Option =======================
    // Create a placeholder item if not exist in `options`
    const createTagOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useRefFunc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Select.useRefFunc[createTagOption]": (val, label)=>{
            const mergedLabel = label ?? val;
            return {
                [mergedFieldNames.value]: val,
                [mergedFieldNames.label]: mergedLabel
            };
        }
    }["Select.useRefFunc[createTagOption]"]);
    // Fill tag as option if mode is `tags`
    const filledTagOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Select.useMemo[filledTagOptions]": ()=>{
            if (mode !== 'tags') {
                return mergedOptions;
            }
            // >>> Tag mode
            const cloneOptions = [
                ...mergedOptions
            ];
            // Check if value exist in options (include new patch item)
            const existOptions = {
                "Select.useMemo[filledTagOptions].existOptions": (val)=>valueOptions.has(val)
            }["Select.useMemo[filledTagOptions].existOptions"];
            // Fill current value as option
            [
                ...mergedValues
            ].sort({
                "Select.useMemo[filledTagOptions]": (a, b)=>a.value < b.value ? -1 : 1
            }["Select.useMemo[filledTagOptions]"]).forEach({
                "Select.useMemo[filledTagOptions]": (item)=>{
                    const val = item.value;
                    if (!existOptions(val)) {
                        cloneOptions.push(createTagOption(val, item.label));
                    }
                }
            }["Select.useMemo[filledTagOptions]"]);
            return cloneOptions;
        }
    }["Select.useMemo[filledTagOptions]"], [
        createTagOption,
        mergedOptions,
        valueOptions,
        mergedValues,
        mode
    ]);
    const filteredOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useFilterOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, normalizedOptionFilterProp);
    // Fill options with search value if needed
    const filledSearchOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Select.useMemo[filledSearchOptions]": ()=>{
            const hasItemMatchingSearch = {
                "Select.useMemo[filledSearchOptions].hasItemMatchingSearch": (item)=>{
                    if (normalizedOptionFilterProp.length) {
                        return normalizedOptionFilterProp.some({
                            "Select.useMemo[filledSearchOptions].hasItemMatchingSearch": (prop)=>item?.[prop] === mergedSearchValue
                        }["Select.useMemo[filledSearchOptions].hasItemMatchingSearch"]);
                    }
                    return item?.value === mergedSearchValue;
                }
            }["Select.useMemo[filledSearchOptions].hasItemMatchingSearch"];
            if (mode !== 'tags' || !mergedSearchValue || filteredOptions.some({
                "Select.useMemo[filledSearchOptions]": (item)=>hasItemMatchingSearch(item)
            }["Select.useMemo[filledSearchOptions]"])) {
                return filteredOptions;
            }
            // ignore when search value equal select input value
            if (filteredOptions.some({
                "Select.useMemo[filledSearchOptions]": (item)=>item[mergedFieldNames.value] === mergedSearchValue
            }["Select.useMemo[filledSearchOptions]"])) {
                return filteredOptions;
            }
            // Fill search value as option
            return [
                createTagOption(mergedSearchValue),
                ...filteredOptions
            ];
        }
    }["Select.useMemo[filledSearchOptions]"], [
        createTagOption,
        normalizedOptionFilterProp,
        mode,
        filteredOptions,
        mergedSearchValue,
        mergedFieldNames
    ]);
    const sorter = (inputOptions)=>{
        const sortedOptions = [
            ...inputOptions
        ].sort((a, b)=>filterSort(a, b, {
                searchValue: mergedSearchValue
            }));
        return sortedOptions.map((item)=>{
            if (Array.isArray(item.options)) {
                return {
                    ...item,
                    options: item.options.length > 0 ? sorter(item.options) : item.options
                };
            }
            return item;
        });
    };
    const orderedFilteredOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Select.useMemo[orderedFilteredOptions]": ()=>{
            if (!filterSort) {
                return filledSearchOptions;
            }
            return sorter(filledSearchOptions);
        }
    }["Select.useMemo[orderedFilteredOptions]"], [
        filledSearchOptions,
        filterSort,
        mergedSearchValue
    ]);
    const displayOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Select.useMemo[displayOptions]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flattenOptions"])(orderedFilteredOptions, {
                fieldNames: mergedFieldNames,
                childrenAsData
            })
    }["Select.useMemo[displayOptions]"], [
        orderedFilteredOptions,
        mergedFieldNames,
        childrenAsData
    ]);
    // =========================== Change ===========================
    const triggerChange = (values)=>{
        const labeledValues = convert2LabelValues(values);
        setInternalValue(labeledValues);
        if (onChange && (// Trigger event only when value changed
        labeledValues.length !== mergedValues.length || labeledValues.some((newVal, index)=>mergedValues[index]?.value !== newVal?.value))) {
            const returnValues = labelInValue ? labeledValues.map(({ label: l, value: v })=>({
                    label: l,
                    value: v
                })) : labeledValues.map((v)=>v.value);
            const returnOptions = labeledValues.map((v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectPropsWithOption"])(getMixedOption(v.value)));
            onChange(// Value
            multiple ? returnValues : returnValues[0], // Option
            multiple ? returnOptions : returnOptions[0]);
        }
    };
    // ======================= Accessibility ========================
    const [activeValue, setActiveValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [accessibilityIndex, setAccessibilityIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const mergedDefaultActiveFirstOption = defaultActiveFirstOption !== undefined ? defaultActiveFirstOption : mode !== 'combobox';
    const activeEventRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const onActiveValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Select.useCallback[onActiveValue]": (active, index, { source = 'keyboard' } = {})=>{
            setAccessibilityIndex(index);
            if (backfill && mode === 'combobox' && active !== null && source === 'keyboard') {
                setActiveValue(String(active));
            }
            // Active will call multiple times.
            // We only need trigger the last one.
            const promise = Promise.resolve().then({
                "Select.useCallback[onActiveValue].promise": ()=>{
                    if (activeEventRef.current === promise) {
                        onActive?.(active);
                    }
                }
            }["Select.useCallback[onActiveValue].promise"]);
            activeEventRef.current = promise;
        }
    }["Select.useCallback[onActiveValue]"], [
        backfill,
        mode,
        onActive
    ]);
    // ========================= OptionList =========================
    const triggerSelect = (val, selected, type)=>{
        const getSelectEnt = ()=>{
            const option = getMixedOption(val);
            return [
                labelInValue ? {
                    label: option?.[mergedFieldNames.label],
                    value: val
                } : val,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$valueUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectPropsWithOption"])(option)
            ];
        };
        if (selected && onSelect) {
            const [wrappedValue, option] = getSelectEnt();
            onSelect(wrappedValue, option);
        } else if (!selected && onDeselect && type !== 'clear') {
            const [wrappedValue, option] = getSelectEnt();
            onDeselect(wrappedValue, option);
        }
    };
    // Used for OptionList selection
    const onInternalSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useRefFunc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Select.useRefFunc[onInternalSelect]": (val, info)=>{
            let cloneValues;
            // Single mode always trigger select only with option list
            const mergedSelect = multiple ? info.selected : true;
            if (mergedSelect) {
                cloneValues = multiple ? [
                    ...mergedValues,
                    val
                ] : [
                    val
                ];
            } else {
                cloneValues = mergedValues.filter({
                    "Select.useRefFunc[onInternalSelect]": (v)=>v.value !== val
                }["Select.useRefFunc[onInternalSelect]"]);
            }
            triggerChange(cloneValues);
            triggerSelect(val, mergedSelect);
            // Clean search value if single or configured
            if (mode === 'combobox') {
                setActiveValue('');
            } else if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMultiple"] || autoClearSearchValue) {
                setSearchValue('');
                setActiveValue('');
            }
        }
    }["Select.useRefFunc[onInternalSelect]"]);
    // ======================= Display Change =======================
    // BaseSelect display values change
    const onDisplayValuesChange = (nextValues, info)=>{
        triggerChange(nextValues);
        const { type, values } = info;
        if (type === 'remove' || type === 'clear') {
            values.forEach((item)=>{
                triggerSelect(item.value, false, type);
            });
        }
    };
    // =========================== Search ===========================
    const onInternalSearch = (searchText, info)=>{
        setSearchValue(searchText);
        setActiveValue(null);
        // [Submit] Tag mode should flush input
        if (info.source === 'submit') {
            const formatted = (searchText || '').trim();
            // prevent empty tags from appearing when you click the Enter button
            if (formatted) {
                const newRawValues = Array.from(new Set([
                    ...rawValues,
                    formatted
                ]));
                triggerChange(newRawValues);
                triggerSelect(formatted, true);
                setSearchValue('');
            }
            return;
        }
        if (info.source !== 'blur') {
            if (mode === 'combobox') {
                triggerChange(searchText);
            }
            onSearch?.(searchText);
        }
    };
    const onInternalSearchSplit = (words)=>{
        let patchValues = words;
        if (mode !== 'tags') {
            patchValues = words.map((word)=>{
                const opt = labelOptions.get(word);
                return opt?.value;
            }).filter((val)=>val !== undefined);
        }
        const newRawValues = Array.from(new Set([
            ...rawValues,
            ...patchValues
        ]));
        triggerChange(newRawValues);
        newRawValues.forEach((newRawValue)=>{
            triggerSelect(newRawValue, true);
        });
    };
    // ========================== Context ===========================
    const selectContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Select.useMemo[selectContext]": ()=>{
            const realVirtual = virtual !== false && popupMatchSelectWidth !== false;
            return {
                ...parsedOptions,
                flattenOptions: displayOptions,
                onActiveValue,
                defaultActiveFirstOption: mergedDefaultActiveFirstOption,
                onSelect: onInternalSelect,
                menuItemSelectedIcon,
                rawValues,
                fieldNames: mergedFieldNames,
                virtual: realVirtual,
                direction,
                listHeight,
                listItemHeight,
                childrenAsData,
                maxCount,
                optionRender,
                classNames,
                styles
            };
        }
    }["Select.useMemo[selectContext]"], [
        maxCount,
        parsedOptions,
        displayOptions,
        onActiveValue,
        mergedDefaultActiveFirstOption,
        onInternalSelect,
        menuItemSelectedIcon,
        rawValues,
        mergedFieldNames,
        virtual,
        popupMatchSelectWidth,
        direction,
        listHeight,
        listItemHeight,
        childrenAsData,
        optionRender,
        classNames,
        styles
    ]);
    // ========================== Warning ===========================
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$warningPropsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$utils$2f$warningPropsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warningNullOptions"])(mergedOptions, mergedFieldNames);
    }
    // ==============================================================
    // ==                          Render                          ==
    // ==============================================================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$SelectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: selectContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, restProps, {
        // >>> MISC
        id: mergedId,
        prefixCls: prefixCls,
        ref: ref,
        omitDomProps: OMIT_DOM_PROPS,
        mode: mode,
        classNames: classNames,
        styles: styles,
        displayValues: displayValues,
        onDisplayValuesChange: onDisplayValuesChange,
        maxCount: maxCount,
        direction: direction,
        showSearch: mergedShowSearch,
        searchValue: mergedSearchValue,
        onSearch: onInternalSearch,
        autoClearSearchValue: autoClearSearchValue,
        onSearchSplit: onInternalSearchSplit,
        popupMatchSelectWidth: popupMatchSelectWidth,
        OptionList: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$OptionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        emptyOptions: !displayOptions.length,
        activeValue: activeValue,
        activeDescendantId: `${mergedId}_list_${accessibilityIndex}`
    })));
});
if ("TURBOPACK compile-time truthy", 1) {
    Select.displayName = 'Select';
}
const TypedSelect = Select;
TypedSelect.Option = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
TypedSelect.OptGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$OptGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = TypedSelect;
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/Select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/Option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$OptGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/OptGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$BaseSelect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/BaseSelect/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$hooks$2f$useBaseProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/hooks/useBaseProps.js [app-client] (ecmascript)");
;
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/OptGroup.js [app-client] (ecmascript) <export default as OptGroup>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OptGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$OptGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$OptGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/OptGroup.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/Option.js [app-client] (ecmascript) <export default as Option>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Option",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$select$40$1$2e$6$2e$15_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$select$2f$es$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+select@1.6.15_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/select/es/Option.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=13j__%40rc-component_select_es_0.jft89._.js.map