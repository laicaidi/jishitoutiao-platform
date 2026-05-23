(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/Popup/Arrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Arrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function Arrow(props) {
    const { prefixCls, align, arrow, arrowPos } = props;
    const { className, content, style } = arrow || {};
    const { x = 0, y = 0 } = arrowPos;
    const arrowRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // Skip if no align
    if (!align || !align.points) {
        return null;
    }
    const alignStyle = {
        position: 'absolute'
    };
    // Skip if no need to align
    if (align.autoArrow !== false) {
        const popupPoints = align.points[0];
        const targetPoints = align.points[1];
        const popupTB = popupPoints[0];
        const popupLR = popupPoints[1];
        const targetTB = targetPoints[0];
        const targetLR = targetPoints[1];
        // Top & Bottom
        if (popupTB === targetTB || ![
            't',
            'b'
        ].includes(popupTB)) {
            alignStyle.top = y;
        } else if (popupTB === 't') {
            alignStyle.top = 0;
        } else {
            alignStyle.bottom = 0;
        }
        // Left & Right
        if (popupLR === targetLR || ![
            'l',
            'r'
        ].includes(popupLR)) {
            alignStyle.left = x;
        } else if (popupLR === 'l') {
            alignStyle.left = 0;
        } else {
            alignStyle.right = 0;
        }
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: arrowRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-arrow`, className),
        style: {
            ...alignStyle,
            ...style
        }
    }, content);
}
}),
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/Popup/Mask.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Mask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$motion$40$1$2e$3$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+motion@1.3.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
function Mask(props) {
    const { prefixCls, open, zIndex, mask, motion, mobile } = props;
    if (!mask) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$motion$40$1$2e$3$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], _extends({}, motion, {
        motionAppear: true,
        visible: open,
        removeOnLeave: true
    }), ({ className })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            style: {
                zIndex
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-mask`, mobile && `${prefixCls}-mobile-mask`, className)
        }));
}
}),
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/Popup/PopupContent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const PopupContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](({ children })=>children, (_, next)=>next.cache);
if ("TURBOPACK compile-time truthy", 1) {
    PopupContent.displayName = 'PopupContent';
}
const __TURBOPACK__default__export__ = PopupContent;
}),
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/hooks/useOffsetStyle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useOffsetStyle
]);
function useOffsetStyle(isMobile, ready, open, align, offsetR, offsetB, offsetX, offsetY) {
    // >>>>> Offset
    const AUTO = 'auto';
    const offsetStyle = isMobile ? {} : {
        left: '-1000vw',
        top: '-1000vh',
        right: AUTO,
        bottom: AUTO
    };
    // Set align style
    if (!isMobile && (ready || !open)) {
        const { points } = align;
        const dynamicInset = align.dynamicInset || align._experimental?.dynamicInset;
        const alignRight = dynamicInset && points[0][1] === 'r';
        const alignBottom = dynamicInset && points[0][0] === 'b';
        if (alignRight) {
            offsetStyle.right = offsetR;
            offsetStyle.left = AUTO;
        } else {
            offsetStyle.left = offsetX;
            offsetStyle.right = AUTO;
        }
        if (alignBottom) {
            offsetStyle.bottom = offsetB;
            offsetStyle.top = AUTO;
        } else {
            offsetStyle.top = offsetY;
            offsetStyle.bottom = AUTO;
        }
    }
    return offsetStyle;
}
}),
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/Popup/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$motion$40$1$2e$3$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+motion@1.3.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$resize$2d$observer$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+resize-observer@1.1.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/resize-observer/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$Arrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/Popup/Arrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$Mask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/Popup/Mask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$PopupContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/Popup/PopupContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useOffsetStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/hooks/useOffsetStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
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
const Popup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { onEsc, popup, className, prefixCls, style, target, onVisibleChanged, // Open
    open, keepDom, fresh, // Click
    onClick, // Mask
    mask, // Arrow
    arrow, arrowPos, align, // Motion
    motion, maskMotion, // Mobile
    mobile, // Portal
    forceRender, getPopupContainer, autoDestroy, portal: Portal, children, zIndex, onMouseEnter, onMouseLeave, onPointerEnter, onPointerDownCapture, ready, offsetX, offsetY, offsetR, offsetB, onAlign, onPrepare, // Resize
    onResize, stretch, targetWidth, targetHeight } = props;
    const popupContent = typeof popup === 'function' ? popup() : popup;
    // We can not remove holder only when motion finished.
    const isNodeVisible = open || keepDom;
    // ========================= Mobile =========================
    const isMobile = !!mobile;
    // ========================== Mask ==========================
    const [mergedMask, mergedMaskMotion, mergedPopupMotion] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Popup.useMemo": ()=>{
            if (mobile) {
                return [
                    mobile.mask,
                    mobile.maskMotion,
                    mobile.motion
                ];
            }
            return [
                mask,
                maskMotion,
                motion
            ];
        }
    }["Popup.useMemo"], [
        mobile,
        mask,
        maskMotion,
        motion
    ]);
    // ======================= Container ========================
    const getPopupContainerNeedParams = getPopupContainer?.length > 0;
    const [show, setShow] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](!getPopupContainer || !getPopupContainerNeedParams);
    // Delay to show since `getPopupContainer` need target element
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Popup.useLayoutEffect": ()=>{
            if (!show && getPopupContainerNeedParams && target) {
                setShow(true);
            }
        }
    }["Popup.useLayoutEffect"], [
        show,
        getPopupContainerNeedParams,
        target
    ]);
    // ========================= Resize =========================
    const onInternalResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "Popup.useEvent[onInternalResize]": (size, ele)=>{
            onResize?.(size, ele);
            onAlign();
        }
    }["Popup.useEvent[onInternalResize]"]);
    // ========================= Styles =========================
    const offsetStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useOffsetStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(isMobile, ready, open, align, offsetR, offsetB, offsetX, offsetY);
    // ========================= Render =========================
    if (!show) {
        return null;
    }
    // >>>>> Misc
    const miscStyle = {};
    if (stretch) {
        if (stretch.includes('height') && targetHeight) {
            miscStyle.height = targetHeight;
        } else if (stretch.includes('minHeight') && targetHeight) {
            miscStyle.minHeight = targetHeight;
        }
        if (stretch.includes('width') && targetWidth) {
            miscStyle.width = targetWidth;
        } else if (stretch.includes('minWidth') && targetWidth) {
            miscStyle.minWidth = targetWidth;
        }
    }
    if (!open) {
        miscStyle.pointerEvents = 'none';
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Portal, {
        open: forceRender || isNodeVisible,
        getContainer: getPopupContainer && (()=>getPopupContainer(target)),
        autoDestroy: autoDestroy,
        onEsc: onEsc
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$Mask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        open: open,
        zIndex: zIndex,
        mask: mergedMask,
        motion: mergedMaskMotion,
        mobile: isMobile
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$resize$2d$observer$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: onInternalResize,
        disabled: !open
    }, (resizeObserverRef)=>{
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$motion$40$1$2e$3$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], _extends({
            motionAppear: true,
            motionEnter: true,
            motionLeave: true,
            removeOnLeave: false,
            forceRender: forceRender,
            leavedClassName: `${prefixCls}-hidden`
        }, mergedPopupMotion, {
            onAppearPrepare: onPrepare,
            onEnterPrepare: onPrepare,
            visible: open,
            onVisibleChanged: (nextVisible)=>{
                motion?.onVisibleChanged?.(nextVisible);
                onVisibleChanged(nextVisible);
            }
        }), ({ className: motionClassName, style: motionStyle }, motionRef)=>{
            const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, motionClassName, className, {
                [`${prefixCls}-mobile`]: isMobile
            });
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
                ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(resizeObserverRef, ref, motionRef),
                className: cls,
                style: {
                    '--arrow-x': `${arrowPos.x || 0}px`,
                    '--arrow-y': `${arrowPos.y || 0}px`,
                    ...offsetStyle,
                    ...miscStyle,
                    ...motionStyle,
                    boxSizing: 'border-box',
                    zIndex,
                    ...style
                },
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave,
                onPointerEnter: onPointerEnter,
                onClick: onClick,
                onPointerDownCapture: onPointerDownCapture
            }, arrow && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$Arrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                prefixCls: prefixCls,
                arrow: arrow,
                arrowPos: arrowPos,
                align: align
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$PopupContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                cache: !open && !fresh
            }, popupContent));
        });
    }), children);
});
if ("TURBOPACK compile-time truthy", 1) {
    Popup.displayName = 'Popup';
}
const __TURBOPACK__default__export__ = Popup;
}),
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UniqueContext",
    ()=>UniqueContext,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
// ===================== Nest =====================
const TriggerContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
const __TURBOPACK__default__export__ = TriggerContext;
const UniqueContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
}),
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/hooks/useAction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function toArray(val) {
    return val ? Array.isArray(val) ? val : [
        val
    ] : [];
}
function useAction(action, showAction, hideAction) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useAction.useMemo": ()=>{
            const mergedShowAction = toArray(showAction ?? action);
            const mergedHideAction = toArray(hideAction ?? action);
            const showActionSet = new Set(mergedShowAction);
            const hideActionSet = new Set(mergedHideAction);
            if (showActionSet.has('hover') && !showActionSet.has('click')) {
                showActionSet.add('touch');
            }
            if (hideActionSet.has('hover') && !hideActionSet.has('click')) {
                hideActionSet.add('touch');
            }
            return [
                showActionSet,
                hideActionSet
            ];
        }
    }["useAction.useMemo"], [
        action,
        showAction,
        hideAction
    ]);
}
}),
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectScroller",
    ()=>collectScroller,
    "getAlignPopupClassName",
    ()=>getAlignPopupClassName,
    "getVisibleArea",
    ()=>getVisibleArea,
    "getWin",
    ()=>getWin,
    "toNum",
    ()=>toNum
]);
function isPointsEq(a1 = [], a2 = [], isAlignPoint) {
    const getVal = (a, index)=>a[index] || '';
    if (isAlignPoint) {
        return getVal(a1, 0) === getVal(a2, 0);
    }
    return getVal(a1, 0) === getVal(a2, 0) && getVal(a1, 1) === getVal(a2, 1);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
    const { points } = align;
    const placements = Object.keys(builtinPlacements);
    for(let i = 0; i < placements.length; i += 1){
        const placement = placements[i];
        if (isPointsEq(builtinPlacements[placement]?.points, points, isAlignPoint)) {
            return `${prefixCls}-placement-${placement}`;
        }
    }
    return '';
}
function getWin(ele) {
    return ele.ownerDocument.defaultView;
}
function collectScroller(ele) {
    const scrollerList = [];
    let current = ele?.parentElement;
    const scrollStyle = [
        'hidden',
        'scroll',
        'clip',
        'auto'
    ];
    while(current){
        const { overflowX, overflowY, overflow } = getWin(current).getComputedStyle(current);
        if ([
            overflowX,
            overflowY,
            overflow
        ].some((o)=>scrollStyle.includes(o))) {
            scrollerList.push(current);
        }
        current = current.parentElement;
    }
    return scrollerList;
}
function toNum(num, defaultValue = 1) {
    return Number.isNaN(num) ? defaultValue : num;
}
function getPxValue(val) {
    return toNum(parseFloat(val), 0);
}
function getVisibleArea(initArea, scrollerList) {
    const visibleArea = {
        ...initArea
    };
    (scrollerList || []).forEach((ele)=>{
        if (ele instanceof HTMLBodyElement || ele instanceof HTMLHtmlElement) {
            return;
        }
        // Skip if static position which will not affect visible area
        const { overflow, overflowClipMargin, borderTopWidth, borderBottomWidth, borderLeftWidth, borderRightWidth } = getWin(ele).getComputedStyle(ele);
        const eleRect = ele.getBoundingClientRect();
        const { offsetHeight: eleOutHeight, clientHeight: eleInnerHeight, offsetWidth: eleOutWidth, clientWidth: eleInnerWidth } = ele;
        const borderTopNum = getPxValue(borderTopWidth);
        const borderBottomNum = getPxValue(borderBottomWidth);
        const borderLeftNum = getPxValue(borderLeftWidth);
        const borderRightNum = getPxValue(borderRightWidth);
        const scaleX = toNum(Math.round(eleRect.width / eleOutWidth * 1000) / 1000);
        const scaleY = toNum(Math.round(eleRect.height / eleOutHeight * 1000) / 1000);
        // Original visible area
        const eleScrollWidth = (eleOutWidth - eleInnerWidth - borderLeftNum - borderRightNum) * scaleX;
        const eleScrollHeight = (eleOutHeight - eleInnerHeight - borderTopNum - borderBottomNum) * scaleY;
        // Cut border size
        const scaledBorderTopWidth = borderTopNum * scaleY;
        const scaledBorderBottomWidth = borderBottomNum * scaleY;
        const scaledBorderLeftWidth = borderLeftNum * scaleX;
        const scaledBorderRightWidth = borderRightNum * scaleX;
        // Clip margin
        let clipMarginWidth = 0;
        let clipMarginHeight = 0;
        if (overflow === 'clip') {
            const clipNum = getPxValue(overflowClipMargin);
            clipMarginWidth = clipNum * scaleX;
            clipMarginHeight = clipNum * scaleY;
        }
        // Region
        const eleLeft = eleRect.x + scaledBorderLeftWidth - clipMarginWidth;
        const eleTop = eleRect.y + scaledBorderTopWidth - clipMarginHeight;
        const eleRight = eleLeft + eleRect.width + 2 * clipMarginWidth - scaledBorderLeftWidth - scaledBorderRightWidth - eleScrollWidth;
        const eleBottom = eleTop + eleRect.height + 2 * clipMarginHeight - scaledBorderTopWidth - scaledBorderBottomWidth - eleScrollHeight;
        visibleArea.left = Math.max(visibleArea.left, eleLeft);
        visibleArea.top = Math.max(visibleArea.top, eleTop);
        visibleArea.right = Math.min(visibleArea.right, eleRight);
        visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
    });
    return visibleArea;
}
}),
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/hooks/useAlign.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useAlign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/Dom/findDOMNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$isVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/Dom/isVisible.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/util.js [app-client] (ecmascript)");
;
;
;
;
;
;
function getUnitOffset(size, offset = 0) {
    const offsetStr = `${offset}`;
    const cells = offsetStr.match(/^(.*)\%$/);
    if (cells) {
        return size * (parseFloat(cells[1]) / 100);
    }
    return parseFloat(offsetStr);
}
function getNumberOffset(rect, offset) {
    const [offsetX, offsetY] = offset || [];
    return [
        getUnitOffset(rect.width, offsetX),
        getUnitOffset(rect.height, offsetY)
    ];
}
function splitPoints(points = '') {
    return [
        points[0],
        points[1]
    ];
}
function getAlignPoint(rect, points) {
    const topBottom = points[0];
    const leftRight = points[1];
    let x;
    let y;
    // Top & Bottom
    if (topBottom === 't') {
        y = rect.y;
    } else if (topBottom === 'b') {
        y = rect.y + rect.height;
    } else {
        y = rect.y + rect.height / 2;
    }
    // Left & Right
    if (leftRight === 'l') {
        x = rect.x;
    } else if (leftRight === 'r') {
        x = rect.x + rect.width;
    } else {
        x = rect.x + rect.width / 2;
    }
    return {
        x,
        y
    };
}
function reversePoints(points, index) {
    const reverseMap = {
        t: 'b',
        b: 't',
        l: 'r',
        r: 'l'
    };
    const clone = [
        ...points
    ];
    clone[index] = reverseMap[points[index]] || 'c';
    return clone;
}
function flatPoints(points) {
    return points.join('');
}
function useAlign(open, popupEle, target, placement, builtinPlacements, popupAlign, onPopupAlign, mobile) {
    const [offsetInfo, setOffsetInfo] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        ready: false,
        offsetX: 0,
        offsetY: 0,
        offsetR: 0,
        offsetB: 0,
        arrowX: 0,
        arrowY: 0,
        scaleX: 1,
        scaleY: 1,
        align: builtinPlacements[placement] || {}
    });
    const alignCountRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const scrollerList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useAlign.useMemo[scrollerList]": ()=>{
            if (!popupEle || mobile) {
                return [];
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectScroller"])(popupEle);
        }
    }["useAlign.useMemo[scrollerList]"], [
        popupEle
    ]);
    // ========================= Flip ==========================
    // We will memo flip info.
    // If size change to make flip, it will memo the flip info and use it in next align.
    const prevFlipRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({});
    const resetFlipCache = ()=>{
        prevFlipRef.current = {};
    };
    if (!open) {
        resetFlipCache();
    }
    // ========================= Align =========================
    const onAlign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useAlign.useEvent[onAlign]": ()=>{
            if (popupEle && target && open && !mobile) {
                const popupElement = popupEle;
                const doc = popupElement.ownerDocument;
                const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWin"])(popupElement);
                const { position: popupPosition } = win.getComputedStyle(popupElement);
                const originLeft = popupElement.style.left;
                const originTop = popupElement.style.top;
                const originRight = popupElement.style.right;
                const originBottom = popupElement.style.bottom;
                const originOverflow = popupElement.style.overflow;
                // Placement
                const placementInfo = {
                    ...builtinPlacements[placement],
                    ...popupAlign
                };
                // placeholder element
                const placeholderElement = doc.createElement('div');
                popupElement.parentElement?.appendChild(placeholderElement);
                placeholderElement.style.left = `${popupElement.offsetLeft}px`;
                placeholderElement.style.top = `${popupElement.offsetTop}px`;
                placeholderElement.style.position = popupPosition;
                placeholderElement.style.height = `${popupElement.offsetHeight}px`;
                placeholderElement.style.width = `${popupElement.offsetWidth}px`;
                // Reset first
                popupElement.style.left = '0';
                popupElement.style.top = '0';
                popupElement.style.right = 'auto';
                popupElement.style.bottom = 'auto';
                popupElement.style.overflow = 'hidden';
                // Calculate align style, we should consider `transform` case
                let targetRect;
                if (Array.isArray(target)) {
                    targetRect = {
                        x: target[0],
                        y: target[1],
                        width: 0,
                        height: 0
                    };
                } else {
                    const rect = target.getBoundingClientRect();
                    rect.x = rect.x ?? rect.left;
                    rect.y = rect.y ?? rect.top;
                    targetRect = {
                        x: rect.x,
                        y: rect.y,
                        width: rect.width,
                        height: rect.height
                    };
                }
                const popupRect = popupElement.getBoundingClientRect();
                const { height, width } = win.getComputedStyle(popupElement);
                popupRect.x = popupRect.x ?? popupRect.left;
                popupRect.y = popupRect.y ?? popupRect.top;
                const { clientWidth, clientHeight, scrollWidth, scrollHeight, scrollTop, scrollLeft } = doc.documentElement;
                const popupHeight = popupRect.height;
                const popupWidth = popupRect.width;
                const targetHeight = targetRect.height;
                const targetWidth = targetRect.width;
                // Get bounding of visible area
                const visibleRegion = {
                    left: 0,
                    top: 0,
                    right: clientWidth,
                    bottom: clientHeight
                };
                const scrollRegion = {
                    left: -scrollLeft,
                    top: -scrollTop,
                    right: scrollWidth - scrollLeft,
                    bottom: scrollHeight - scrollTop
                };
                let { htmlRegion } = placementInfo;
                const VISIBLE = 'visible';
                const VISIBLE_FIRST = 'visibleFirst';
                if (htmlRegion !== 'scroll' && htmlRegion !== VISIBLE_FIRST) {
                    htmlRegion = VISIBLE;
                }
                const isVisibleFirst = htmlRegion === VISIBLE_FIRST;
                const scrollRegionArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibleArea"])(scrollRegion, scrollerList);
                const visibleRegionArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibleArea"])(visibleRegion, scrollerList);
                const visibleArea = htmlRegion === VISIBLE ? visibleRegionArea : scrollRegionArea;
                // When set to `visibleFirst`,
                // the check `adjust` logic will use `visibleRegion` for check first.
                const adjustCheckVisibleArea = isVisibleFirst ? visibleRegionArea : visibleArea;
                // Record right & bottom align data
                popupElement.style.left = 'auto';
                popupElement.style.top = 'auto';
                popupElement.style.right = '0';
                popupElement.style.bottom = '0';
                const popupMirrorRect = popupElement.getBoundingClientRect();
                // Reset back
                popupElement.style.left = originLeft;
                popupElement.style.top = originTop;
                popupElement.style.right = originRight;
                popupElement.style.bottom = originBottom;
                popupElement.style.overflow = originOverflow;
                popupElement.parentElement?.removeChild(placeholderElement);
                // Calculate scale
                const scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNum"])(Math.round(popupWidth / parseFloat(width) * 1000) / 1000);
                const scaleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNum"])(Math.round(popupHeight / parseFloat(height) * 1000) / 1000);
                // No need to align since it's not visible in view
                if (scaleX === 0 || scaleY === 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOM"])(target) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$isVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(target)) {
                    return;
                }
                // Offset
                const { offset, targetOffset } = placementInfo;
                let [popupOffsetX, popupOffsetY] = getNumberOffset(popupRect, offset);
                const [targetOffsetX, targetOffsetY] = getNumberOffset(targetRect, targetOffset);
                targetRect.x -= targetOffsetX;
                targetRect.y -= targetOffsetY;
                // Points
                const [popupPoint, targetPoint] = placementInfo.points || [];
                const targetPoints = splitPoints(targetPoint);
                const popupPoints = splitPoints(popupPoint);
                const targetAlignPoint = getAlignPoint(targetRect, targetPoints);
                const popupAlignPoint = getAlignPoint(popupRect, popupPoints);
                // Real align info may not same as origin one
                const nextAlignInfo = {
                    ...placementInfo
                };
                let nextPoints = [
                    popupPoints,
                    targetPoints
                ];
                // Next Offset
                let nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
                let nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;
                // ============== Intersection ===============
                // Get area by position. Used for check if flip area is better
                function getIntersectionVisibleArea(offsetX, offsetY, area = visibleArea) {
                    const l = popupRect.x + offsetX;
                    const t = popupRect.y + offsetY;
                    const r = l + popupWidth;
                    const b = t + popupHeight;
                    const visibleL = Math.max(l, area.left);
                    const visibleT = Math.max(t, area.top);
                    const visibleR = Math.min(r, area.right);
                    const visibleB = Math.min(b, area.bottom);
                    return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
                }
                const originIntersectionVisibleArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY);
                // As `visibleFirst`, we prepare this for check
                const originIntersectionRecommendArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY, visibleRegionArea);
                // ========================== Overflow ===========================
                const targetAlignPointTL = getAlignPoint(targetRect, [
                    't',
                    'l'
                ]);
                const popupAlignPointTL = getAlignPoint(popupRect, [
                    't',
                    'l'
                ]);
                const targetAlignPointBR = getAlignPoint(targetRect, [
                    'b',
                    'r'
                ]);
                const popupAlignPointBR = getAlignPoint(popupRect, [
                    'b',
                    'r'
                ]);
                const overflow = placementInfo.overflow || {};
                const { adjustX, adjustY, shiftX, shiftY } = overflow;
                const supportAdjust = {
                    "useAlign.useEvent[onAlign].supportAdjust": (val)=>{
                        if (typeof val === 'boolean') {
                            return val;
                        }
                        return val >= 0;
                    }
                }["useAlign.useEvent[onAlign].supportAdjust"];
                // Prepare position
                let nextPopupY;
                let nextPopupBottom;
                let nextPopupX;
                let nextPopupRight;
                function syncNextPopupPosition() {
                    nextPopupY = popupRect.y + nextOffsetY;
                    nextPopupBottom = nextPopupY + popupHeight;
                    nextPopupX = popupRect.x + nextOffsetX;
                    nextPopupRight = nextPopupX + popupWidth;
                }
                syncNextPopupPosition();
                // >>>>>>>>>> Top & Bottom
                const needAdjustY = supportAdjust(adjustY);
                const sameTB = popupPoints[0] === targetPoints[0];
                // Bottom to Top
                if (needAdjustY && popupPoints[0] === 't' && (nextPopupBottom > adjustCheckVisibleArea.bottom || prevFlipRef.current.bt)) {
                    let tmpNextOffsetY = nextOffsetY;
                    if (sameTB) {
                        tmpNextOffsetY -= popupHeight - targetHeight;
                    } else {
                        tmpNextOffsetY = targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
                    }
                    const newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
                    const newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
                    if (// Of course use larger one
                    newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
                    newVisibleRecommendArea >= originIntersectionRecommendArea)) {
                        prevFlipRef.current.bt = true;
                        nextOffsetY = tmpNextOffsetY;
                        popupOffsetY = -popupOffsetY;
                        nextPoints = [
                            reversePoints(nextPoints[0], 0),
                            reversePoints(nextPoints[1], 0)
                        ];
                    } else {
                        prevFlipRef.current.bt = false;
                    }
                }
                // Top to Bottom
                if (needAdjustY && popupPoints[0] === 'b' && (nextPopupY < adjustCheckVisibleArea.top || prevFlipRef.current.tb)) {
                    let tmpNextOffsetY = nextOffsetY;
                    if (sameTB) {
                        tmpNextOffsetY += popupHeight - targetHeight;
                    } else {
                        tmpNextOffsetY = targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
                    }
                    const newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
                    const newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
                    if (// Of course use larger one
                    newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
                    newVisibleRecommendArea >= originIntersectionRecommendArea)) {
                        prevFlipRef.current.tb = true;
                        nextOffsetY = tmpNextOffsetY;
                        popupOffsetY = -popupOffsetY;
                        nextPoints = [
                            reversePoints(nextPoints[0], 0),
                            reversePoints(nextPoints[1], 0)
                        ];
                    } else {
                        prevFlipRef.current.tb = false;
                    }
                }
                // >>>>>>>>>> Left & Right
                const needAdjustX = supportAdjust(adjustX);
                // >>>>> Flip
                const sameLR = popupPoints[1] === targetPoints[1];
                // Right to Left
                if (needAdjustX && popupPoints[1] === 'l' && (nextPopupRight > adjustCheckVisibleArea.right || prevFlipRef.current.rl)) {
                    let tmpNextOffsetX = nextOffsetX;
                    if (sameLR) {
                        tmpNextOffsetX -= popupWidth - targetWidth;
                    } else {
                        tmpNextOffsetX = targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
                    }
                    const newVisibleArea = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
                    const newVisibleRecommendArea = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
                    if (// Of course use larger one
                    newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
                    newVisibleRecommendArea >= originIntersectionRecommendArea)) {
                        prevFlipRef.current.rl = true;
                        nextOffsetX = tmpNextOffsetX;
                        popupOffsetX = -popupOffsetX;
                        nextPoints = [
                            reversePoints(nextPoints[0], 1),
                            reversePoints(nextPoints[1], 1)
                        ];
                    } else {
                        prevFlipRef.current.rl = false;
                    }
                }
                // Left to Right
                if (needAdjustX && popupPoints[1] === 'r' && (nextPopupX < adjustCheckVisibleArea.left || prevFlipRef.current.lr)) {
                    let tmpNextOffsetX = nextOffsetX;
                    if (sameLR) {
                        tmpNextOffsetX += popupWidth - targetWidth;
                    } else {
                        tmpNextOffsetX = targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
                    }
                    const newVisibleArea = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
                    const newVisibleRecommendArea = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
                    if (// Of course use larger one
                    newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
                    newVisibleRecommendArea >= originIntersectionRecommendArea)) {
                        prevFlipRef.current.lr = true;
                        nextOffsetX = tmpNextOffsetX;
                        popupOffsetX = -popupOffsetX;
                        nextPoints = [
                            reversePoints(nextPoints[0], 1),
                            reversePoints(nextPoints[1], 1)
                        ];
                    } else {
                        prevFlipRef.current.lr = false;
                    }
                }
                nextAlignInfo.points = [
                    flatPoints(nextPoints[0]),
                    flatPoints(nextPoints[1])
                ];
                // ============================ Shift ============================
                syncNextPopupPosition();
                const numShiftX = shiftX === true ? 0 : shiftX;
                if (typeof numShiftX === 'number') {
                    // Left
                    if (nextPopupX < visibleRegionArea.left) {
                        nextOffsetX -= nextPopupX - visibleRegionArea.left - popupOffsetX;
                        if (targetRect.x + targetWidth < visibleRegionArea.left + numShiftX) {
                            nextOffsetX += targetRect.x - visibleRegionArea.left + targetWidth - numShiftX;
                        }
                    }
                    // Right
                    if (nextPopupRight > visibleRegionArea.right) {
                        nextOffsetX -= nextPopupRight - visibleRegionArea.right - popupOffsetX;
                        if (targetRect.x > visibleRegionArea.right - numShiftX) {
                            nextOffsetX += targetRect.x - visibleRegionArea.right + numShiftX;
                        }
                    }
                }
                const numShiftY = shiftY === true ? 0 : shiftY;
                if (typeof numShiftY === 'number') {
                    // Top
                    if (nextPopupY < visibleRegionArea.top) {
                        nextOffsetY -= nextPopupY - visibleRegionArea.top - popupOffsetY;
                        // When target if far away from visible area
                        // Stop shift
                        if (targetRect.y + targetHeight < visibleRegionArea.top + numShiftY) {
                            nextOffsetY += targetRect.y - visibleRegionArea.top + targetHeight - numShiftY;
                        }
                    }
                    // Bottom
                    if (nextPopupBottom > visibleRegionArea.bottom) {
                        nextOffsetY -= nextPopupBottom - visibleRegionArea.bottom - popupOffsetY;
                        if (targetRect.y > visibleRegionArea.bottom - numShiftY) {
                            nextOffsetY += targetRect.y - visibleRegionArea.bottom + numShiftY;
                        }
                    }
                }
                // ============================ Arrow ============================
                // Arrow center align
                const popupLeft = popupRect.x + nextOffsetX;
                const popupRight = popupLeft + popupWidth;
                const popupTop = popupRect.y + nextOffsetY;
                const popupBottom = popupTop + popupHeight;
                const targetLeft = targetRect.x;
                const targetRight = targetLeft + targetWidth;
                const targetTop = targetRect.y;
                const targetBottom = targetTop + targetHeight;
                /** Max left of the popup and target element */ const maxLeft = Math.max(popupLeft, targetLeft);
                /** Min right of the popup and target element */ const minRight = Math.min(popupRight, targetRight);
                /** The center X of popup & target cross area */ const xCenter = (maxLeft + minRight) / 2;
                /** Arrow X of popup offset */ const nextArrowX = xCenter - popupLeft;
                const maxTop = Math.max(popupTop, targetTop);
                const minBottom = Math.min(popupBottom, targetBottom);
                const yCenter = (maxTop + minBottom) / 2;
                const nextArrowY = yCenter - popupTop;
                onPopupAlign?.(popupEle, nextAlignInfo);
                // Additional calculate right & bottom position
                let offsetX4Right = popupMirrorRect.right - popupRect.x - (nextOffsetX + popupRect.width);
                let offsetY4Bottom = popupMirrorRect.bottom - popupRect.y - (nextOffsetY + popupRect.height);
                if (scaleX === 1) {
                    nextOffsetX = Math.floor(nextOffsetX);
                    offsetX4Right = Math.floor(offsetX4Right);
                }
                if (scaleY === 1) {
                    nextOffsetY = Math.floor(nextOffsetY);
                    offsetY4Bottom = Math.floor(offsetY4Bottom);
                }
                const nextOffsetInfo = {
                    ready: true,
                    offsetX: nextOffsetX / scaleX,
                    offsetY: nextOffsetY / scaleY,
                    offsetR: offsetX4Right / scaleX,
                    offsetB: offsetY4Bottom / scaleY,
                    arrowX: nextArrowX / scaleX,
                    arrowY: nextArrowY / scaleY,
                    scaleX,
                    scaleY,
                    align: nextAlignInfo
                };
                setOffsetInfo(nextOffsetInfo);
            }
        }
    }["useAlign.useEvent[onAlign]"]);
    const triggerAlign = ()=>{
        alignCountRef.current += 1;
        const id = alignCountRef.current;
        // Merge all align requirement into one frame
        Promise.resolve().then(()=>{
            if (alignCountRef.current === id) {
                onAlign();
            }
        });
    };
    // Reset ready status when placement & open changed
    const resetReady = ()=>{
        setOffsetInfo((ori)=>({
                ...ori,
                ready: false
            }));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(resetReady, [
        placement
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useAlign.useLayoutEffect": ()=>{
            if (!open) {
                resetReady();
            }
        }
    }["useAlign.useLayoutEffect"], [
        open
    ]);
    return [
        offsetInfo.ready,
        offsetInfo.offsetX,
        offsetInfo.offsetY,
        offsetInfo.offsetR,
        offsetInfo.offsetB,
        offsetInfo.arrowX,
        offsetInfo.arrowY,
        offsetInfo.scaleX,
        offsetInfo.scaleY,
        offsetInfo.align,
        triggerAlign
    ];
}
}),
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/hooks/useDelay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useDelay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useDelay() {
    const delayRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const clearDelay = ()=>{
        if (delayRef.current) {
            clearTimeout(delayRef.current);
            delayRef.current = null;
        }
    };
    const delayInvoke = (callback, delay)=>{
        clearDelay();
        if (delay === 0) {
            callback();
        } else {
            delayRef.current = setTimeout(()=>{
                callback();
            }, delay * 1000);
        }
    };
    // Clean up on unmount
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useDelay.useEffect": ()=>{
            return ({
                "useDelay.useEffect": ()=>{
                    clearDelay();
                }
            })["useDelay.useEffect"];
        }
    }["useDelay.useEffect"], []);
    return delayInvoke;
}
}),
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/hooks/useWatch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useWatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/util.js [app-client] (ecmascript)");
;
;
function useWatch(open, target, popup, onAlign, onScroll) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useWatch.useLayoutEffect": ()=>{
            if (open && target && popup) {
                const targetElement = target;
                const popupElement = popup;
                const targetScrollList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectScroller"])(targetElement);
                const popupScrollList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectScroller"])(popupElement);
                const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWin"])(popupElement);
                const mergedList = new Set([
                    win,
                    ...targetScrollList,
                    ...popupScrollList
                ]);
                function notifyScroll() {
                    onAlign();
                    onScroll();
                }
                mergedList.forEach({
                    "useWatch.useLayoutEffect": (scroller)=>{
                        scroller.addEventListener('scroll', notifyScroll, {
                            passive: true
                        });
                    }
                }["useWatch.useLayoutEffect"]);
                win.addEventListener('resize', notifyScroll, {
                    passive: true
                });
                // First time always do align
                onAlign();
                return ({
                    "useWatch.useLayoutEffect": ()=>{
                        mergedList.forEach({
                            "useWatch.useLayoutEffect": (scroller)=>{
                                scroller.removeEventListener('scroll', notifyScroll);
                                win.removeEventListener('resize', notifyScroll);
                            }
                        }["useWatch.useLayoutEffect"]);
                    }
                })["useWatch.useLayoutEffect"];
            }
        }
    }["useWatch.useLayoutEffect"], [
        open,
        target,
        popup
    ]);
}
}),
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/hooks/useWinClick.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useWinClick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$shadow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/Dom/shadow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/util.js [app-client] (ecmascript)");
;
;
;
;
function useWinClick(open, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen) {
    const openRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](open);
    openRef.current = open;
    const popupPointerDownRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    // Click to hide is special action since click popup element should not hide
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useWinClick.useEffect": ()=>{
            if (clickToHide && popupEle && (!mask || maskClosable)) {
                const onPointerDown = {
                    "useWinClick.useEffect.onPointerDown": ()=>{
                        popupPointerDownRef.current = false;
                    }
                }["useWinClick.useEffect.onPointerDown"];
                const onTriggerClose = {
                    "useWinClick.useEffect.onTriggerClose": (e)=>{
                        if (openRef.current && !inPopupOrChild(e.composedPath?.()?.[0] || e.target) && !popupPointerDownRef.current) {
                            triggerOpen(false);
                        }
                    }
                }["useWinClick.useEffect.onTriggerClose"];
                const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWin"])(popupEle);
                win.addEventListener('pointerdown', onPointerDown, true);
                win.addEventListener('mousedown', onTriggerClose, true);
                win.addEventListener('contextmenu', onTriggerClose, true);
                // shadow root
                const targetShadowRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$shadow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getShadowRoot"])(targetEle);
                if (targetShadowRoot) {
                    targetShadowRoot.addEventListener('mousedown', onTriggerClose, true);
                    targetShadowRoot.addEventListener('contextmenu', onTriggerClose, true);
                }
                // Warning if target and popup not in same root
                if (("TURBOPACK compile-time value", "development") !== 'production' && targetEle) {
                    const targetRoot = targetEle.getRootNode?.();
                    const popupRoot = popupEle.getRootNode?.();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warning"])(targetRoot === popupRoot, `trigger element and popup element should in same shadow root.`);
                }
                return ({
                    "useWinClick.useEffect": ()=>{
                        win.removeEventListener('pointerdown', onPointerDown, true);
                        win.removeEventListener('mousedown', onTriggerClose, true);
                        win.removeEventListener('contextmenu', onTriggerClose, true);
                        if (targetShadowRoot) {
                            targetShadowRoot.removeEventListener('mousedown', onTriggerClose, true);
                            targetShadowRoot.removeEventListener('contextmenu', onTriggerClose, true);
                        }
                    }
                })["useWinClick.useEffect"];
            }
        }
    }["useWinClick.useEffect"], [
        clickToHide,
        targetEle,
        popupEle,
        mask,
        maskClosable
    ]);
    function onPopupPointerDown() {
        popupPointerDownRef.current = true;
    }
    return onPopupPointerDown;
}
}),
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/UniqueProvider/useTargetState.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useTargetState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
;
;
function useTargetState() {
    const [options, setOptions] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [isAnimating, setIsAnimating] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const pendingOptionsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "useTargetState.useEvent[trigger]": (nextOptions)=>{
            if (nextOptions === false) {
                // Clear pending options when hiding
                pendingOptionsRef.current = null;
                setOpen(false);
            } else {
                if (isAnimating && open) {
                    // If animating (appear or enter), cache new options
                    pendingOptionsRef.current = nextOptions;
                } else {
                    setOpen(true);
                    // Set new options
                    setOptions(nextOptions);
                    pendingOptionsRef.current = null;
                    // Only mark as animating when transitioning from closed to open
                    if (!open) {
                        setIsAnimating(true);
                    }
                }
            }
        }
    }["useTargetState.useEvent[trigger]"]);
    const onVisibleChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "useTargetState.useEvent[onVisibleChanged]": (visible)=>{
            if (visible) {
                // Animation enter completed, check if there are pending options
                setIsAnimating(false);
                if (pendingOptionsRef.current) {
                    // Apply pending options
                    setOptions(pendingOptionsRef.current);
                    pendingOptionsRef.current = null;
                }
            } else {
                // Animation leave completed
                setIsAnimating(false);
                pendingOptionsRef.current = null;
            }
        }
    }["useTargetState.useEvent[onVisibleChanged]"]);
    return [
        trigger,
        open,
        options,
        onVisibleChanged
    ];
}
}),
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/UniqueProvider/UniqueContainer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useOffsetStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/hooks/useOffsetStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$motion$40$1$2e$3$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+motion@1.3.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
const UniqueContainer = (props)=>{
    const { prefixCls, isMobile, ready, open, align, offsetR, offsetB, offsetX, offsetY, arrowPos, popupSize, motion, uniqueContainerClassName, uniqueContainerStyle } = props;
    const containerCls = `${prefixCls}-unique-container`;
    const [motionVisible, setMotionVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    // ========================= Styles =========================
    const offsetStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useOffsetStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(isMobile, ready, open, align, offsetR, offsetB, offsetX, offsetY);
    // Cache for offsetStyle when ready is true
    const cachedOffsetStyleRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(offsetStyle);
    // Update cached offset style when ready is true
    if (ready) {
        cachedOffsetStyleRef.current = offsetStyle;
    }
    // Apply popup size if available
    const sizeStyle = {};
    if (popupSize) {
        sizeStyle.width = popupSize.width;
        sizeStyle.height = popupSize.height;
    }
    // ========================= Render =========================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$motion$40$1$2e$3$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], _extends({
        motionAppear: true,
        motionEnter: true,
        motionLeave: true,
        removeOnLeave: false,
        leavedClassName: `${containerCls}-hidden`
    }, motion, {
        visible: open,
        onVisibleChanged: (nextVisible)=>{
            setMotionVisible(nextVisible);
        }
    }), ({ className: motionClassName, style: motionStyle })=>{
        const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(containerCls, motionClassName, uniqueContainerClassName, {
            [`${containerCls}-visible`]: motionVisible
        });
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: cls,
            style: {
                '--arrow-x': `${arrowPos?.x || 0}px`,
                '--arrow-y': `${arrowPos?.y || 0}px`,
                ...cachedOffsetStyleRef.current,
                ...sizeStyle,
                ...motionStyle,
                ...uniqueContainerStyle
            }
        });
    });
};
const __TURBOPACK__default__export__ = UniqueContainer;
}),
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/UniqueProvider/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$portal$40$2$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$portal$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+portal@2.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/portal/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useDelay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/hooks/useDelay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useAlign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/hooks/useAlign.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/Popup/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$UniqueProvider$2f$useTargetState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/UniqueProvider/useTargetState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/Dom/findDOMNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$UniqueProvider$2f$UniqueContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/UniqueProvider/UniqueContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/util.js [app-client] (ecmascript)");
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
const UniqueProvider = ({ children, postTriggerProps })=>{
    const [trigger, open, options, onTargetVisibleChanged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$UniqueProvider$2f$useTargetState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // ========================== Options ===========================
    const mergedOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "UniqueProvider.useMemo[mergedOptions]": ()=>{
            if (!options || !postTriggerProps) {
                return options;
            }
            return postTriggerProps(options);
        }
    }["UniqueProvider.useMemo[mergedOptions]"], [
        options,
        postTriggerProps
    ]);
    // =========================== Popup ============================
    const [popupEle, setPopupEle] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [popupSize, setPopupSize] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    // Used for forwardRef popup. Not use internal
    const externalPopupRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const setPopupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "UniqueProvider.useEvent[setPopupRef]": (node)=>{
            externalPopupRef.current = node;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOM"])(node) && popupEle !== node) {
                setPopupEle(node);
            }
        }
    }["UniqueProvider.useEvent[setPopupRef]"]);
    // ========================== Register ==========================
    // Store the isOpen function from the latest show call
    const isOpenRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const delayInvoke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useDelay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const show = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "UniqueProvider.useEvent[show]": (showOptions, isOpen)=>{
            // Store the isOpen function for later use in hide
            isOpenRef.current = isOpen;
            delayInvoke({
                "UniqueProvider.useEvent[show]": ()=>{
                    trigger(showOptions);
                }
            }["UniqueProvider.useEvent[show]"], showOptions.delay);
        }
    }["UniqueProvider.useEvent[show]"]);
    const hide = (delay)=>{
        delayInvoke(()=>{
            // Check if we should still hide by calling the isOpen function
            // If isOpen returns true, it means another trigger wants to keep it open
            if (isOpenRef.current?.()) {
                return; // Don't hide if something else wants it open
            }
            trigger(false);
        // Don't clear target, currentNode, options immediately, wait until animation completes
        }, delay);
    };
    // Callback after animation completes
    const onVisibleChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "UniqueProvider.useEvent[onVisibleChanged]": (visible)=>{
            // Call useTargetState callback to handle animation state
            onTargetVisibleChanged(visible);
        }
    }["UniqueProvider.useEvent[onVisibleChanged]"]);
    // =========================== Align ============================
    const [ready, offsetX, offsetY, offsetR, offsetB, arrowX, arrowY, , , // scaleY - not used in UniqueProvider
    alignInfo, onAlign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useAlign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(open, popupEle, mergedOptions?.target, mergedOptions?.popupPlacement, mergedOptions?.builtinPlacements || {}, mergedOptions?.popupAlign, undefined, // onPopupAlign
    false // isMobile
    );
    const alignedClassName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "UniqueProvider.useMemo[alignedClassName]": ()=>{
            if (!mergedOptions) {
                return '';
            }
            const baseClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignPopupClassName"])(mergedOptions.builtinPlacements || {}, mergedOptions.prefixCls || '', alignInfo, false // alignPoint is false for UniqueProvider
            );
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(baseClassName, mergedOptions.getPopupClassNameFromAlign?.(alignInfo));
        }
    }["UniqueProvider.useMemo[alignedClassName]"], [
        alignInfo,
        mergedOptions?.getPopupClassNameFromAlign,
        mergedOptions?.builtinPlacements,
        mergedOptions?.prefixCls
    ]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "UniqueProvider.useMemo[contextValue]": ()=>({
                show,
                hide
            })
    }["UniqueProvider.useMemo[contextValue]"], []);
    // =========================== Align ============================
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "UniqueProvider.useEffect": ()=>{
            onAlign();
        }
    }["UniqueProvider.useEffect"], [
        mergedOptions?.target
    ]);
    // =========================== Motion ===========================
    const onPrepare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "UniqueProvider.useEvent[onPrepare]": ()=>{
            onAlign();
            return Promise.resolve();
        }
    }["UniqueProvider.useEvent[onPrepare]"]);
    // ======================== Trigger Context =====================
    const subPopupElements = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({});
    const parentContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const triggerContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "UniqueProvider.useMemo[triggerContextValue]": ()=>({
                registerSubPopup: ({
                    "UniqueProvider.useMemo[triggerContextValue]": (id, subPopupEle)=>{
                        subPopupElements.current[id] = subPopupEle;
                        parentContext?.registerSubPopup(id, subPopupEle);
                    }
                })["UniqueProvider.useMemo[triggerContextValue]"]
            })
    }["UniqueProvider.useMemo[triggerContextValue]"], [
        parentContext
    ]);
    // =========================== Render ===========================
    const prefixCls = mergedOptions?.prefixCls;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniqueContext"].Provider, {
        value: contextValue
    }, children, mergedOptions && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: triggerContextValue
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: setPopupRef,
        portal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$portal$40$2$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$portal$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
        onEsc: mergedOptions.onEsc,
        prefixCls: prefixCls,
        popup: mergedOptions.popup,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedOptions.popupClassName, alignedClassName, `${prefixCls}-unique-controlled`),
        style: mergedOptions.popupStyle,
        target: mergedOptions.target,
        open: open,
        keepDom: true,
        fresh: true,
        autoDestroy: false,
        onVisibleChanged: onVisibleChanged,
        ready: ready,
        offsetX: offsetX,
        offsetY: offsetY,
        offsetR: offsetR,
        offsetB: offsetB,
        onAlign: onAlign,
        onPrepare: onPrepare,
        onResize: (size)=>setPopupSize({
                width: size.offsetWidth,
                height: size.offsetHeight
            }),
        arrowPos: {
            x: arrowX,
            y: arrowY
        },
        align: alignInfo,
        zIndex: mergedOptions.zIndex,
        mask: mergedOptions.mask,
        arrow: mergedOptions.arrow,
        motion: mergedOptions.popupMotion,
        maskMotion: mergedOptions.maskMotion,
        getPopupContainer: mergedOptions.getPopupContainer
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$UniqueProvider$2f$UniqueContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        isMobile: false,
        ready: ready,
        open: open,
        align: alignInfo,
        offsetR: offsetR,
        offsetB: offsetB,
        offsetX: offsetX,
        offsetY: offsetY,
        arrowPos: {
            x: arrowX,
            y: arrowY
        },
        popupSize: popupSize,
        motion: mergedOptions.popupMotion,
        uniqueContainerClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedOptions.uniqueContainerClassName, alignedClassName),
        uniqueContainerStyle: mergedOptions.uniqueContainerStyle
    }))));
};
const __TURBOPACK__default__export__ = UniqueProvider;
}),
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "generateTrigger",
    ()=>generateTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$portal$40$2$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$portal$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+portal@2.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/portal/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$resize$2d$observer$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+resize-observer@1.1.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/resize-observer/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$resize$2d$observer$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$useResizeObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useResizeObserver$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+resize-observer@1.1.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/resize-observer/es/useResizeObserver.js [app-client] (ecmascript) <export default as useResizeObserver>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/Dom/findDOMNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$shadow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/Dom/shadow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/Popup/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/hooks/useAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useAlign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/hooks/useAlign.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useDelay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/hooks/useDelay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useWatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/hooks/useWatch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useWinClick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/hooks/useWinClick.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/UniqueProvider/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript) <export default as useControlledState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
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
;
;
;
;
;
function generateTrigger(PortalComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$portal$40$2$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$portal$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]) {
    const Trigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
        const { prefixCls = 'rc-trigger-popup', children, // Action
        action = 'hover', showAction, hideAction, // Open
        popupVisible, defaultPopupVisible, onOpenChange, afterOpenChange, onPopupVisibleChange, afterPopupVisibleChange, // Delay
        mouseEnterDelay, mouseLeaveDelay = 0.1, focusDelay, blurDelay, // Mask
        mask, maskClosable = true, // Portal
        getPopupContainer, forceRender, autoDestroy, // Popup
        popup, popupClassName, uniqueContainerClassName, uniqueContainerStyle, popupStyle, popupPlacement, builtinPlacements = {}, popupAlign, zIndex, stretch, getPopupClassNameFromAlign, fresh, unique, alignPoint, onPopupClick, onPopupAlign, // Arrow
        arrow, // Motion
        popupMotion, maskMotion, // Private
        mobile, ...restProps } = props;
        const mergedAutoDestroy = autoDestroy || false;
        const openUncontrolled = popupVisible === undefined;
        // =========================== Mobile ===========================
        const isMobile = !!mobile;
        // ========================== Context ===========================
        const subPopupElements = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({});
        const parentContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
            "generateTrigger.Trigger.useMemo[context]": ()=>{
                return {
                    registerSubPopup: ({
                        "generateTrigger.Trigger.useMemo[context]": (id, subPopupEle)=>{
                            subPopupElements.current[id] = subPopupEle;
                            parentContext?.registerSubPopup(id, subPopupEle);
                        }
                    })["generateTrigger.Trigger.useMemo[context]"]
                };
            }
        }["generateTrigger.Trigger.useMemo[context]"], [
            parentContext
        ]);
        // ======================== UniqueContext =========================
        const uniqueContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniqueContext"]);
        // =========================== Popup ============================
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        const [popupEle, setPopupEle] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
        // Used for forwardRef popup. Not use internal
        const externalPopupRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
        const setPopupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            "generateTrigger.Trigger.useEvent[setPopupRef]": (node)=>{
                externalPopupRef.current = node;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOM"])(node) && popupEle !== node) {
                    setPopupEle(node);
                }
                parentContext?.registerSubPopup(id, node);
            }
        }["generateTrigger.Trigger.useEvent[setPopupRef]"]);
        // =========================== Target ===========================
        // Use state to control here since `useRef` update not trigger render
        const [targetEle, setTargetEle] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
        // Used for forwardRef target. Not use internal
        const externalForwardRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
        const setTargetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            "generateTrigger.Trigger.useEvent[setTargetRef]": (node)=>{
                const domNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDOM"])(node);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOM"])(domNode) && targetEle !== domNode) {
                    setTargetEle(domNode);
                    externalForwardRef.current = domNode;
                }
            }
        }["generateTrigger.Trigger.useEvent[setTargetRef]"]);
        const cloneProps = {};
        const inPopupOrChild = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            "generateTrigger.Trigger.useEvent[inPopupOrChild]": (ele)=>{
                const childDOM = targetEle;
                return childDOM?.contains(ele) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$shadow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getShadowRoot"])(childDOM)?.host === ele || ele === childDOM || popupEle?.contains(ele) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$shadow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getShadowRoot"])(popupEle)?.host === ele || ele === popupEle || Object.values(subPopupElements.current).some({
                    "generateTrigger.Trigger.useEvent[inPopupOrChild]": (subPopupEle)=>subPopupEle?.contains(ele) || ele === subPopupEle
                }["generateTrigger.Trigger.useEvent[inPopupOrChild]"]);
            }
        }["generateTrigger.Trigger.useEvent[inPopupOrChild]"]);
        // =========================== Arrow ============================
        const innerArrow = arrow ? {
            // true and Object likely
            ...arrow !== true ? arrow : {}
        } : null;
        // ============================ Open ============================
        const [internalOpen, setInternalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])(defaultPopupVisible || false, popupVisible);
        const mergedOpen = internalOpen || false;
        // ========================== Children ==========================
        const child = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
            "generateTrigger.Trigger.useMemo[child]": ()=>{
                const nextChild = typeof children === 'function' ? children({
                    open: mergedOpen
                }) : children;
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(nextChild);
            }
        }["generateTrigger.Trigger.useMemo[child]"], [
            children,
            mergedOpen
        ]);
        const originChildProps = child?.props || {};
        // Support ref
        const isOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            "generateTrigger.Trigger.useEvent[isOpen]": ()=>mergedOpen
        }["generateTrigger.Trigger.useEvent[isOpen]"]);
        // Extract common options for UniqueProvider
        const getUniqueOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            "generateTrigger.Trigger.useEvent[getUniqueOptions]": (delay = 0)=>({
                    popup,
                    target: targetEle,
                    delay,
                    prefixCls,
                    popupClassName,
                    uniqueContainerClassName,
                    uniqueContainerStyle,
                    popupStyle,
                    popupPlacement,
                    builtinPlacements,
                    popupAlign,
                    zIndex,
                    mask,
                    maskClosable,
                    popupMotion,
                    maskMotion,
                    arrow: innerArrow,
                    getPopupContainer,
                    getPopupClassNameFromAlign,
                    id,
                    onEsc
                })
        }["generateTrigger.Trigger.useEvent[getUniqueOptions]"]);
        // Handle controlled state changes for UniqueProvider
        // Only sync to UniqueProvider when it's controlled mode
        // If there is a parentContext, don't call uniqueContext methods
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            "generateTrigger.Trigger.useLayoutEffect": ()=>{
                if (uniqueContext && unique && targetEle && !openUncontrolled && !parentContext) {
                    if (mergedOpen) {
                        uniqueContext.show(getUniqueOptions(mouseEnterDelay), isOpen);
                    } else {
                        uniqueContext.hide(mouseLeaveDelay);
                    }
                }
            }
        }["generateTrigger.Trigger.useLayoutEffect"], [
            mergedOpen,
            targetEle
        ]);
        const openRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](mergedOpen);
        openRef.current = mergedOpen;
        const internalTriggerOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            "generateTrigger.Trigger.useEvent[internalTriggerOpen]": (nextOpen)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])({
                    "generateTrigger.Trigger.useEvent[internalTriggerOpen]": ()=>{
                        if (mergedOpen !== nextOpen) {
                            setInternalOpen(nextOpen);
                            onOpenChange?.(nextOpen);
                            onPopupVisibleChange?.(nextOpen);
                        }
                    }
                }["generateTrigger.Trigger.useEvent[internalTriggerOpen]"]);
            }
        }["generateTrigger.Trigger.useEvent[internalTriggerOpen]"]);
        // Trigger for delay
        const delayInvoke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useDelay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        const triggerOpen = (nextOpen, delay = 0)=>{
            // If it's controlled mode, always use internal trigger logic
            // UniqueProvider will be synced through useLayoutEffect
            if (popupVisible !== undefined) {
                delayInvoke(()=>{
                    internalTriggerOpen(nextOpen);
                }, delay);
                return;
            }
            // If UniqueContext exists and not controlled, pass delay to Provider instead of handling it internally
            // If there is a parentContext, don't call uniqueContext methods
            if (uniqueContext && unique && openUncontrolled && !parentContext) {
                if (nextOpen) {
                    uniqueContext.show(getUniqueOptions(delay), isOpen);
                } else {
                    uniqueContext.hide(delay);
                }
                return;
            }
            delayInvoke(()=>{
                internalTriggerOpen(nextOpen);
            }, delay);
        };
        function onEsc({ top }) {
            if (top) {
                triggerOpen(false);
            }
        }
        // ========================== Motion ============================
        const [inMotion, setInMotion] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            "generateTrigger.Trigger.useLayoutEffect": (firstMount)=>{
                if (!firstMount || mergedOpen) {
                    setInMotion(true);
                }
            }
        }["generateTrigger.Trigger.useLayoutEffect"], [
            mergedOpen
        ]);
        const [motionPrepareResolve, setMotionPrepareResolve] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
        // =========================== Align ============================
        const [mousePos, setMousePos] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
        const setMousePosByEvent = (event)=>{
            setMousePos([
                event.clientX,
                event.clientY
            ]);
        };
        const [ready, offsetX, offsetY, offsetR, offsetB, arrowX, arrowY, scaleX, scaleY, alignInfo, onAlign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useAlign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedOpen, popupEle, alignPoint && mousePos !== null ? mousePos : targetEle, popupPlacement, builtinPlacements, popupAlign, onPopupAlign, isMobile);
        const [showActions, hideActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(action, showAction, hideAction);
        const clickToShow = showActions.has('click');
        const clickToHide = hideActions.has('click') || hideActions.has('contextMenu');
        const triggerAlign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            "generateTrigger.Trigger.useEvent[triggerAlign]": ()=>{
                if (!inMotion) {
                    onAlign();
                }
            }
        }["generateTrigger.Trigger.useEvent[triggerAlign]"]);
        const onScroll = ()=>{
            if (openRef.current && alignPoint && clickToHide) {
                triggerOpen(false);
            }
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useWatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedOpen, targetEle, popupEle, triggerAlign, onScroll);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            "generateTrigger.Trigger.useLayoutEffect": ()=>{
                triggerAlign();
            }
        }["generateTrigger.Trigger.useLayoutEffect"], [
            mousePos,
            popupPlacement
        ]);
        // When no builtinPlacements and popupAlign changed
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            "generateTrigger.Trigger.useLayoutEffect": ()=>{
                if (mergedOpen && !builtinPlacements?.[popupPlacement]) {
                    triggerAlign();
                }
            }
        }["generateTrigger.Trigger.useLayoutEffect"], [
            JSON.stringify(popupAlign)
        ]);
        const alignedClassName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
            "generateTrigger.Trigger.useMemo[alignedClassName]": ()=>{
                const baseClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignPopupClassName"])(builtinPlacements, prefixCls, alignInfo, alignPoint);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(baseClassName, getPopupClassNameFromAlign?.(alignInfo));
            }
        }["generateTrigger.Trigger.useMemo[alignedClassName]"], [
            alignInfo,
            getPopupClassNameFromAlign,
            builtinPlacements,
            prefixCls,
            alignPoint
        ]);
        // ============================ Refs ============================
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
            "generateTrigger.Trigger.useImperativeHandle": ()=>({
                    nativeElement: externalForwardRef.current,
                    popupElement: externalPopupRef.current,
                    forceAlign: triggerAlign
                })
        }["generateTrigger.Trigger.useImperativeHandle"]);
        // ========================== Stretch ===========================
        const [targetWidth, setTargetWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
        const [targetHeight, setTargetHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
        const syncTargetSize = ()=>{
            if (stretch && targetEle) {
                const rect = targetEle.getBoundingClientRect();
                setTargetWidth(rect.width);
                setTargetHeight(rect.height);
            }
        };
        const onTargetResize = ()=>{
            syncTargetSize();
            triggerAlign();
        };
        // ========================== Motion ============================
        const onVisibleChanged = (visible)=>{
            setInMotion(false);
            onAlign();
            afterOpenChange?.(visible);
            afterPopupVisibleChange?.(visible);
        };
        // We will trigger align when motion is in prepare
        const onPrepare = ()=>new Promise((resolve)=>{
                syncTargetSize();
                setMotionPrepareResolve(()=>resolve);
            });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            "generateTrigger.Trigger.useLayoutEffect": ()=>{
                if (motionPrepareResolve) {
                    onAlign();
                    motionPrepareResolve();
                    setMotionPrepareResolve(null);
                }
            }
        }["generateTrigger.Trigger.useLayoutEffect"], [
            motionPrepareResolve
        ]);
        // =========================== Action ===========================
        /**
     * Util wrapper for trigger action
     * @param eventName  Listen event name
     * @param nextOpen  Next open state after trigger
     * @param delay Delay to trigger open change
     * @param callback Callback if current event need additional action
     * @param ignoreCheck  Ignore current event if check return true
     */ function wrapperAction(eventName, nextOpen, delay, callback, ignoreCheck) {
            cloneProps[eventName] = (event, ...args)=>{
                if (!ignoreCheck || !ignoreCheck()) {
                    callback?.(event);
                    triggerOpen(nextOpen, delay);
                }
                // Pass to origin
                originChildProps[eventName]?.(event, ...args);
            };
        }
        // ======================= Action: Touch ========================
        const touchToShow = showActions.has('touch');
        const touchToHide = hideActions.has('touch');
        /** Used for prevent `hover` event conflict with mobile env */ const touchedRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
        if (touchToShow || touchToHide) {
            cloneProps.onTouchStart = (...args)=>{
                touchedRef.current = true;
                if (openRef.current && touchToHide) {
                    triggerOpen(false);
                } else if (!openRef.current && touchToShow) {
                    triggerOpen(true);
                }
                // Pass to origin
                originChildProps.onTouchStart?.(...args);
            };
        }
        // ======================= Action: Click ========================
        if (clickToShow || clickToHide) {
            cloneProps.onClick = (event, ...args)=>{
                if (openRef.current && clickToHide) {
                    triggerOpen(false);
                } else if (!openRef.current && clickToShow) {
                    setMousePosByEvent(event);
                    triggerOpen(true);
                }
                // Pass to origin
                originChildProps.onClick?.(event, ...args);
                touchedRef.current = false;
            };
        }
        // Click to hide is special action since click popup element should not hide
        const onPopupPointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useWinClick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedOpen, clickToHide || touchToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen);
        // ======================= Action: Hover ========================
        const hoverToShow = showActions.has('hover');
        const hoverToHide = hideActions.has('hover');
        let onPopupMouseEnter;
        let onPopupMouseLeave;
        const ignoreMouseTrigger = ()=>{
            return touchedRef.current;
        };
        if (hoverToShow) {
            const onMouseEnterCallback = (event)=>{
                setMousePosByEvent(event);
            };
            // Compatible with old browser which not support pointer event
            wrapperAction('onMouseEnter', true, mouseEnterDelay, onMouseEnterCallback, ignoreMouseTrigger);
            wrapperAction('onPointerEnter', true, mouseEnterDelay, onMouseEnterCallback, ignoreMouseTrigger);
            onPopupMouseEnter = (event)=>{
                // Only trigger re-open when popup is visible
                if ((mergedOpen || inMotion) && popupEle?.contains(event.target)) {
                    triggerOpen(true, mouseEnterDelay);
                }
            };
            // Align Point
            if (alignPoint) {
                cloneProps.onMouseMove = (event)=>{
                    originChildProps.onMouseMove?.(event);
                };
            }
        }
        if (hoverToHide) {
            wrapperAction('onMouseLeave', false, mouseLeaveDelay, undefined, ignoreMouseTrigger);
            wrapperAction('onPointerLeave', false, mouseLeaveDelay, undefined, ignoreMouseTrigger);
            onPopupMouseLeave = ()=>{
                triggerOpen(false, mouseLeaveDelay);
            };
        }
        // ======================= Action: Focus ========================
        if (showActions.has('focus')) {
            wrapperAction('onFocus', true, focusDelay);
        }
        if (hideActions.has('focus')) {
            wrapperAction('onBlur', false, blurDelay);
        }
        // ==================== Action: ContextMenu =====================
        if (showActions.has('contextMenu')) {
            cloneProps.onContextMenu = (event, ...args)=>{
                if (openRef.current && hideActions.has('contextMenu')) {
                    triggerOpen(false);
                } else {
                    setMousePosByEvent(event);
                    triggerOpen(true);
                }
                event.preventDefault();
                // Pass to origin
                originChildProps.onContextMenu?.(event, ...args);
            };
        }
        // ============================ Perf ============================
        const rendedRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
        rendedRef.current ||= forceRender || mergedOpen || inMotion;
        // =========================== Render ===========================
        const mergedChildrenProps = {
            ...originChildProps,
            ...cloneProps
        };
        // Pass props into cloneProps for nest usage
        const passedProps = {};
        const passedEventList = [
            'onContextMenu',
            'onClick',
            'onMouseDown',
            'onTouchStart',
            'onMouseEnter',
            'onMouseLeave',
            'onFocus',
            'onBlur'
        ];
        passedEventList.forEach((eventName)=>{
            if (restProps[eventName]) {
                passedProps[eventName] = (...args)=>{
                    mergedChildrenProps[eventName]?.(...args);
                    restProps[eventName](...args);
                };
            }
        });
        const arrowPos = {
            x: arrowX,
            y: arrowY
        };
        // =================== Resize Observer ===================
        // Use hook to observe target element resize
        // Pass targetEle directly instead of a function so the hook will re-observe when target changes
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$resize$2d$observer$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$useResizeObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useResizeObserver$3e$__["useResizeObserver"])(mergedOpen, targetEle, onTargetResize);
        // Compose refs
        const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeRef"])(setTargetRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeRef"])(child));
        // Child Node
        const triggerNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](child, {
            ...mergedChildrenProps,
            ...passedProps,
            ref: mergedRef
        });
        // Render
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, triggerNode, rendedRef.current && (!uniqueContext || !unique) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: context
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            portal: PortalComponent,
            ref: setPopupRef,
            prefixCls: prefixCls,
            popup: popup,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(popupClassName, !isMobile && alignedClassName),
            style: popupStyle,
            target: targetEle,
            onMouseEnter: onPopupMouseEnter,
            onMouseLeave: onPopupMouseLeave,
            onPointerEnter: onPopupMouseEnter,
            zIndex: zIndex,
            open: mergedOpen,
            keepDom: inMotion,
            fresh: fresh,
            onClick: onPopupClick,
            onPointerDownCapture: onPopupPointerDown,
            mask: mask,
            motion: popupMotion,
            maskMotion: maskMotion,
            onVisibleChanged: onVisibleChanged,
            onPrepare: onPrepare,
            forceRender: forceRender,
            autoDestroy: mergedAutoDestroy,
            getPopupContainer: getPopupContainer,
            onEsc: onEsc,
            align: alignInfo,
            arrow: innerArrow,
            arrowPos: arrowPos,
            ready: ready,
            offsetX: offsetX,
            offsetY: offsetY,
            offsetR: offsetR,
            offsetB: offsetB,
            onAlign: triggerAlign,
            stretch: stretch,
            targetWidth: targetWidth / scaleX,
            targetHeight: targetHeight / scaleY,
            mobile: mobile
        })));
    });
    if ("TURBOPACK compile-time truthy", 1) {
        Trigger.displayName = 'Trigger';
    }
    return Trigger;
}
const __TURBOPACK__default__export__ = generateTrigger(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$portal$40$2$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$portal$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]);
}),
"[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/UniqueProvider/index.js [app-client] (ecmascript) <export default as UniqueProvider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UniqueProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/UniqueProvider/index.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=0yw__%40rc-component_trigger_es_0l9tw7r._.js.map