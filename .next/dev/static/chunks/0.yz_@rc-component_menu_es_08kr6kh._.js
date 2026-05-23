(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/IdContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IdContext",
    ()=>IdContext,
    "getMenuId",
    ()=>getMenuId,
    "useMenuId",
    ()=>useMenuId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const IdContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function getMenuId(uuid, eventKey) {
    return `${uuid}-${eventKey}`;
}
function useMenuId(eventKey) {
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](IdContext);
    return getMenuId(id, eventKey);
}
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/MenuContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuContext",
    ()=>MenuContext,
    "default",
    ()=>InheritableContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useMemo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/isEqual.js [app-client] (ecmascript)");
;
;
;
const MenuContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function mergeProps(origin, target) {
    const clone = {
        ...origin
    };
    Object.keys(target).forEach((key)=>{
        const value = target[key];
        if (value !== undefined) {
            clone[key] = value;
        }
    });
    return clone;
}
function InheritableContextProvider({ children, locked, ...restProps }) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](MenuContext);
    const inheritableContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "InheritableContextProvider.useMemo[inheritableContext]": ()=>mergeProps(context, restProps)
    }["InheritableContextProvider.useMemo[inheritableContext]"], [
        context,
        restProps
    ], {
        "InheritableContextProvider.useMemo[inheritableContext]": (prev, next)=>!locked && (prev[0] !== next[0] || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prev[1], next[1], true))
    }["InheritableContextProvider.useMemo[inheritableContext]"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](MenuContext.Provider, {
        value: inheritableContext
    }, children);
}
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/PathContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PathRegisterContext",
    ()=>PathRegisterContext,
    "PathTrackerContext",
    ()=>PathTrackerContext,
    "PathUserContext",
    ()=>PathUserContext,
    "useFullPath",
    ()=>useFullPath,
    "useMeasure",
    ()=>useMeasure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const EmptyList = [];
const PathRegisterContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function useMeasure() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](PathRegisterContext);
}
const PathTrackerContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](EmptyList);
function useFullPath(eventKey) {
    const parentKeyPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](PathTrackerContext);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFullPath.useMemo": ()=>eventKey !== undefined ? [
                ...parentKeyPath,
                eventKey
            ] : parentKeyPath
    }["useFullPath.useMemo"], [
        parentKeyPath,
        eventKey
    ]);
}
const PathUserContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/PrivateContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const PrivateContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
const __TURBOPACK__default__export__ = PrivateContext;
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/hooks/useAccessibility.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFocusableElements",
    ()=>getFocusableElements,
    "refreshElements",
    ()=>refreshElements,
    "useAccessibility",
    ()=>useAccessibility
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/Dom/focus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/KeyCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/raf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$IdContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/IdContext.js [app-client] (ecmascript)");
;
;
;
;
;
// destruct to reduce minify size
const { LEFT, RIGHT, UP, DOWN, ENTER, ESC, HOME, END } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const ArrowKeys = [
    UP,
    DOWN,
    LEFT,
    RIGHT
];
function getOffset(mode, isRootLevel, isRtl, which) {
    const prev = 'prev';
    const next = 'next';
    const children = 'children';
    const parent = 'parent';
    // Inline enter is special that we use unique operation
    if (mode === 'inline' && which === ENTER) {
        return {
            inlineTrigger: true
        };
    }
    const inline = {
        [UP]: prev,
        [DOWN]: next
    };
    const horizontal = {
        [LEFT]: isRtl ? next : prev,
        [RIGHT]: isRtl ? prev : next,
        [DOWN]: children,
        [ENTER]: children
    };
    const vertical = {
        [UP]: prev,
        [DOWN]: next,
        [ENTER]: children,
        [ESC]: parent,
        [LEFT]: isRtl ? children : parent,
        [RIGHT]: isRtl ? parent : children
    };
    const offsets = {
        inline,
        horizontal,
        vertical,
        inlineSub: inline,
        horizontalSub: vertical,
        verticalSub: vertical
    };
    const type = offsets[`${mode}${isRootLevel ? '' : 'Sub'}`]?.[which];
    switch(type){
        case prev:
            return {
                offset: -1,
                sibling: true
            };
        case next:
            return {
                offset: 1,
                sibling: true
            };
        case parent:
            return {
                offset: -1,
                sibling: false
            };
        case children:
            return {
                offset: 1,
                sibling: false
            };
        default:
            return null;
    }
}
function findContainerUL(element) {
    let current = element;
    while(current){
        if (current.getAttribute('data-menu-list')) {
            return current;
        }
        current = current.parentElement;
    }
    // Normally should not reach this line
    /* istanbul ignore next */ return null;
}
/**
 * Find focused element within element set provided
 */ function getFocusElement(activeElement, elements) {
    let current = activeElement || document.activeElement;
    while(current){
        if (elements.has(current)) {
            return current;
        }
        current = current.parentElement;
    }
    return null;
}
function getFocusableElements(container, elements) {
    const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusNodeList"])(container, true);
    return list.filter((ele)=>elements.has(ele));
}
function getNextFocusElement(parentQueryContainer, elements, focusMenuElement, offset = 1) {
    // Key on the menu item will not get validate parent container
    if (!parentQueryContainer) {
        return null;
    }
    // List current level menu item elements
    const sameLevelFocusableMenuElementList = getFocusableElements(parentQueryContainer, elements);
    // Find next focus index
    const count = sameLevelFocusableMenuElementList.length;
    let focusIndex = sameLevelFocusableMenuElementList.findIndex((ele)=>focusMenuElement === ele);
    if (offset < 0) {
        if (focusIndex === -1) {
            focusIndex = count - 1;
        } else {
            focusIndex -= 1;
        }
    } else if (offset > 0) {
        focusIndex += 1;
    }
    focusIndex = (focusIndex + count) % count;
    // Focus menu item
    return sameLevelFocusableMenuElementList[focusIndex];
}
const refreshElements = (keys, id)=>{
    const elements = new Set();
    const key2element = new Map();
    const element2key = new Map();
    keys.forEach((key)=>{
        const element = document.querySelector(`[data-menu-id='${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$IdContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMenuId"])(id, key)}']`);
        if (element) {
            elements.add(element);
            element2key.set(element, key);
            key2element.set(key, element);
        }
    });
    return {
        elements,
        key2element,
        element2key
    };
};
function useAccessibility(mode, activeKey, isRtl, id, containerRef, getKeys, getKeyPath, triggerActiveKey, triggerAccessibilityOpen, originOnKeyDown) {
    const rafRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const activeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    activeRef.current = activeKey;
    const cleanRaf = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cancel(rafRef.current);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useAccessibility.useEffect": ()=>({
                "useAccessibility.useEffect": ()=>{
                    cleanRaf();
                }
            })["useAccessibility.useEffect"]
    }["useAccessibility.useEffect"], []);
    return (e)=>{
        const { which } = e;
        if ([
            ...ArrowKeys,
            ENTER,
            ESC,
            HOME,
            END
        ].includes(which)) {
            const keys = getKeys();
            let refreshedElements = refreshElements(keys, id);
            const { elements, key2element, element2key } = refreshedElements;
            // First we should find current focused MenuItem/SubMenu element
            const activeElement = key2element.get(activeKey);
            const focusMenuElement = getFocusElement(activeElement, elements);
            const focusMenuKey = element2key.get(focusMenuElement);
            const offsetObj = getOffset(mode, getKeyPath(focusMenuKey, true).length === 1, isRtl, which);
            // Some mode do not have fully arrow operation like inline
            if (!offsetObj && which !== HOME && which !== END) {
                return;
            }
            // Arrow prevent default to avoid page scroll
            if (ArrowKeys.includes(which) || [
                HOME,
                END
            ].includes(which)) {
                e.preventDefault();
            }
            const tryFocus = (menuElement)=>{
                if (menuElement) {
                    let focusTargetElement = menuElement;
                    // Focus to link instead of menu item if possible
                    const link = menuElement.querySelector('a');
                    if (link?.getAttribute('href')) {
                        focusTargetElement = link;
                    }
                    const targetKey = element2key.get(menuElement);
                    triggerActiveKey(targetKey);
                    /**
           * Do not `useEffect` here since `tryFocus` may trigger async
           * which makes React sync update the `activeKey`
           * that force render before `useRef` set the next activeKey
           */ cleanRaf();
                    rafRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>{
                        if (activeRef.current === targetKey) {
                            focusTargetElement.focus();
                        }
                    });
                }
            };
            if ([
                HOME,
                END
            ].includes(which) || offsetObj.sibling || !focusMenuElement) {
                // ========================== Sibling ==========================
                // Find walkable focus menu element container
                let parentQueryContainer;
                if (!focusMenuElement || mode === 'inline') {
                    parentQueryContainer = containerRef.current;
                } else {
                    parentQueryContainer = findContainerUL(focusMenuElement);
                }
                // Get next focus element
                let targetElement;
                const focusableElements = getFocusableElements(parentQueryContainer, elements);
                if (which === HOME) {
                    targetElement = focusableElements[0];
                } else if (which === END) {
                    targetElement = focusableElements[focusableElements.length - 1];
                } else {
                    targetElement = getNextFocusElement(parentQueryContainer, elements, focusMenuElement, offsetObj.offset);
                }
                // Focus menu item
                tryFocus(targetElement);
            // ======================= InlineTrigger =======================
            } else if (offsetObj.inlineTrigger) {
                // Inline trigger no need switch to sub menu item
                triggerAccessibilityOpen(focusMenuKey);
            // =========================== Level ===========================
            } else if (offsetObj.offset > 0) {
                triggerAccessibilityOpen(focusMenuKey, true);
                cleanRaf();
                rafRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>{
                    // Async should resync elements
                    refreshedElements = refreshElements(keys, id);
                    const controlId = focusMenuElement.getAttribute('aria-controls');
                    const subQueryContainer = document.getElementById(controlId);
                    // Get sub focusable menu item
                    const targetElement = getNextFocusElement(subQueryContainer, refreshedElements.elements);
                    // Focus menu item
                    tryFocus(targetElement);
                }, 5);
            } else if (offsetObj.offset < 0) {
                const keyPath = getKeyPath(focusMenuKey, true);
                const parentKey = keyPath[keyPath.length - 2];
                const parentMenuElement = key2element.get(parentKey);
                // Focus menu item
                triggerAccessibilityOpen(parentKey, false);
                tryFocus(parentMenuElement);
            }
        }
        // Pass origin key down event
        originOnKeyDown?.(e);
    };
}
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/utils/timeUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nextSlice",
    ()=>nextSlice
]);
function nextSlice(callback) {
    /* istanbul ignore next */ Promise.resolve().then(callback);
}
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/hooks/useKeyRecords.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OVERFLOW_KEY",
    ()=>OVERFLOW_KEY,
    "default",
    ()=>useKeyRecords
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$timeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/utils/timeUtil.js [app-client] (ecmascript)");
;
;
;
;
const PATH_SPLIT = '__RC_UTIL_PATH_SPLIT__';
const getPathStr = (keyPath)=>keyPath.join(PATH_SPLIT);
const getPathKeys = (keyPathStr)=>keyPathStr.split(PATH_SPLIT);
const OVERFLOW_KEY = 'rc-menu-more';
function useKeyRecords() {
    const [, internalForceUpdate] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({});
    const key2pathRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const path2keyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const [overflowKeys, setOverflowKeys] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const updateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const destroyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const forceUpdate = ()=>{
        if (!destroyRef.current) {
            internalForceUpdate({});
        }
    };
    const registerPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKeyRecords.useCallback[registerPath]": (key, keyPath)=>{
            // Warning for invalidate or duplicated `key`
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!key2pathRef.current.has(key), `Duplicated key '${key}' used in Menu by path [${keyPath.join(' > ')}]`);
            }
            // Fill map
            const connectedPath = getPathStr(keyPath);
            path2keyRef.current.set(connectedPath, key);
            key2pathRef.current.set(key, connectedPath);
            updateRef.current += 1;
            const id = updateRef.current;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$timeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextSlice"])({
                "useKeyRecords.useCallback[registerPath]": ()=>{
                    if (id === updateRef.current) {
                        forceUpdate();
                    }
                }
            }["useKeyRecords.useCallback[registerPath]"]);
        }
    }["useKeyRecords.useCallback[registerPath]"], []);
    const unregisterPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKeyRecords.useCallback[unregisterPath]": (key, keyPath)=>{
            const connectedPath = getPathStr(keyPath);
            path2keyRef.current.delete(connectedPath);
            key2pathRef.current.delete(key);
        }
    }["useKeyRecords.useCallback[unregisterPath]"], []);
    const refreshOverflowKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKeyRecords.useCallback[refreshOverflowKeys]": (keys)=>{
            setOverflowKeys(keys);
        }
    }["useKeyRecords.useCallback[refreshOverflowKeys]"], []);
    const getKeyPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKeyRecords.useCallback[getKeyPath]": (eventKey, includeOverflow)=>{
            const fullPath = key2pathRef.current.get(eventKey) || '';
            const keys = getPathKeys(fullPath);
            if (includeOverflow && overflowKeys.includes(keys[0])) {
                keys.unshift(OVERFLOW_KEY);
            }
            return keys;
        }
    }["useKeyRecords.useCallback[getKeyPath]"], [
        overflowKeys
    ]);
    const isSubPathKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKeyRecords.useCallback[isSubPathKey]": (pathKeys, eventKey)=>pathKeys.filter({
                "useKeyRecords.useCallback[isSubPathKey]": (item)=>item !== undefined
            }["useKeyRecords.useCallback[isSubPathKey]"]).some({
                "useKeyRecords.useCallback[isSubPathKey]": (pathKey)=>{
                    const pathKeyList = getKeyPath(pathKey, true);
                    return pathKeyList.includes(eventKey);
                }
            }["useKeyRecords.useCallback[isSubPathKey]"])
    }["useKeyRecords.useCallback[isSubPathKey]"], [
        getKeyPath
    ]);
    const getKeys = ()=>{
        const keys = [
            ...key2pathRef.current.keys()
        ];
        if (overflowKeys.length) {
            keys.push(OVERFLOW_KEY);
        }
        return keys;
    };
    /**
   * Find current key related child path keys
   */ const getSubPathKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKeyRecords.useCallback[getSubPathKeys]": (key)=>{
            const connectedPath = `${key2pathRef.current.get(key)}${PATH_SPLIT}`;
            const pathKeys = new Set();
            [
                ...path2keyRef.current.keys()
            ].forEach({
                "useKeyRecords.useCallback[getSubPathKeys]": (pathKey)=>{
                    if (pathKey.startsWith(connectedPath)) {
                        pathKeys.add(path2keyRef.current.get(pathKey));
                    }
                }
            }["useKeyRecords.useCallback[getSubPathKeys]"]);
            return pathKeys;
        }
    }["useKeyRecords.useCallback[getSubPathKeys]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useKeyRecords.useEffect": ()=>({
                "useKeyRecords.useEffect": ()=>{
                    destroyRef.current = true;
                }
            })["useKeyRecords.useEffect"]
    }["useKeyRecords.useEffect"], []);
    return {
        // Register
        registerPath,
        unregisterPath,
        refreshOverflowKeys,
        // Util
        isSubPathKey,
        getKeyPath,
        getKeys,
        getSubPathKeys
    };
}
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/hooks/useMemoCallback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useMemoCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useMemoCallback(func) {
    const funRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](func);
    funRef.current = func;
    const callback = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMemoCallback.useCallback[callback]": (...args)=>funRef.current?.(...args)
    }["useMemoCallback.useCallback[callback]"], []);
    return func ? callback : undefined;
}
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/hooks/useActive.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useActive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/MenuContext.js [app-client] (ecmascript)");
;
;
function useActive(eventKey, disabled, onMouseEnter, onMouseLeave) {
    const { // Active
    activeKey, onActive, onInactive } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]);
    const ret = {
        active: activeKey === eventKey
    };
    // Skip when disabled
    if (!disabled) {
        ret.onMouseEnter = (domEvent)=>{
            onMouseEnter?.({
                key: eventKey,
                domEvent
            });
            onActive(eventKey);
        };
        ret.onMouseLeave = (domEvent)=>{
            onMouseLeave?.({
                key: eventKey,
                domEvent
            });
            onInactive(eventKey);
        };
    }
    return ret;
}
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/hooks/useDirectionStyle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useDirectionStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/MenuContext.js [app-client] (ecmascript)");
;
;
function useDirectionStyle(level) {
    const { mode, rtl, inlineIndent } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]);
    if (mode !== 'inline') {
        return null;
    }
    const len = level;
    return rtl ? {
        paddingRight: len * inlineIndent
    } : {
        paddingLeft: len * inlineIndent
    };
}
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function Icon({ icon, props, children }) {
    let iconNode;
    if (icon === null || icon === false) {
        return null;
    }
    if (typeof icon === 'function') {
        iconNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](icon, {
            ...props
        });
    } else if (typeof icon !== "boolean") {
        // Compatible for origin definition
        iconNode = icon;
    }
    return iconNode || children || null;
}
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/utils/warnUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "warnItemProp",
    ()=>warnItemProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/warning.js [app-client] (ecmascript)");
;
function warnItemProp({ item, ...restInfo }) {
    Object.defineProperty(restInfo, 'item', {
        get: ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.');
            return item;
        }
    });
    return restInfo;
}
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/MenuItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$overflow$40$1$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+overflow@1.0.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/overflow/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/KeyCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$IdContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/IdContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/MenuContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/PathContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PrivateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/PrivateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useActive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/hooks/useActive.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useDirectionStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/hooks/useDirectionStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$warnUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/utils/warnUtil.js [app-client] (ecmascript)");
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
// Since Menu event provide the `info.item` which point to the MenuItem node instance.
// We have to use class component here.
// This should be removed from doc & api in future.
class LegacyMenuItem extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    render() {
        const { title, attribute, elementRef, ...restProps } = this.props;
        // Here the props are eventually passed to the DOM element.
        // React does not recognize non-standard attributes.
        // Therefore, remove the props that is not used here.
        // ref: https://github.com/ant-design/ant-design/issues/41395
        const passedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(restProps, [
            'eventKey',
            'popupClassName',
            'popupOffset',
            'onTitleClick'
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!attribute, '`attribute` of Menu.Item is deprecated. Please pass attribute directly.');
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$overflow$40$1$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, _extends({}, attribute, {
            title: typeof title === 'string' ? title : undefined
        }, passedProps, {
            ref: elementRef
        }));
    }
}
/**
 * Real Menu Item component
 */ const InternalMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { style, className, eventKey, warnKey, disabled, itemIcon, children, // Aria
    role, // Active
    onMouseEnter, onMouseLeave, onClick, onKeyDown, onFocus, ...restProps } = props;
    const domDataId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$IdContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuId"])(eventKey);
    const { prefixCls, onItemClick, disabled: contextDisabled, overflowDisabled, // Icon
    itemIcon: contextItemIcon, // Select
    selectedKeys, // Active
    onActive } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]);
    const { _internalRenderMenuItem } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PrivateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const itemCls = `${prefixCls}-item`;
    const legacyMenuItemRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const elementRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const mergedDisabled = contextDisabled || disabled;
    const mergedEleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeRef"])(ref, elementRef);
    const connectedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFullPath"])(eventKey);
    // ================================ Warn ================================
    if (("TURBOPACK compile-time value", "development") !== 'production' && warnKey) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'MenuItem should not leave undefined `key`.');
    }
    // ============================= Info =============================
    const getEventInfo = (e)=>{
        return {
            key: eventKey,
            // Note: For legacy code is reversed which not like other antd component
            keyPath: [
                ...connectedKeys
            ].reverse(),
            item: legacyMenuItemRef.current,
            domEvent: e
        };
    };
    // ============================= Icon =============================
    const mergedItemIcon = itemIcon || contextItemIcon;
    // ============================ Active ============================
    const { active, ...activeProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useActive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(eventKey, mergedDisabled, onMouseEnter, onMouseLeave);
    // ============================ Select ============================
    const selected = selectedKeys.includes(eventKey);
    // ======================== DirectionStyle ========================
    const directionStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useDirectionStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(connectedKeys.length);
    // ============================ Events ============================
    const onInternalClick = (e)=>{
        if (mergedDisabled) {
            return;
        }
        const info = getEventInfo(e);
        onClick?.((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$warnUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnItemProp"])(info));
        onItemClick(info);
    };
    const onInternalKeyDown = (e)=>{
        onKeyDown?.(e);
        if (e.which === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ENTER) {
            const info = getEventInfo(e);
            // Legacy. Key will also trigger click event
            onClick?.((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$warnUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnItemProp"])(info));
            onItemClick(info);
        }
    };
    /**
   * Used for accessibility. Helper will focus element without key board.
   * We should manually trigger an active
   */ const onInternalFocus = (e)=>{
        onActive(eventKey);
        onFocus?.(e);
    };
    // ============================ Render ============================
    const optionRoleProps = {};
    if (props.role === 'option') {
        optionRoleProps['aria-selected'] = selected;
    }
    let renderNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](LegacyMenuItem, _extends({
        ref: legacyMenuItemRef,
        elementRef: mergedEleRef,
        role: role === null ? 'none' : role || 'menuitem',
        tabIndex: disabled ? null : -1,
        "data-menu-id": overflowDisabled && domDataId ? null : domDataId
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(restProps, [
        'extra'
    ]), activeProps, optionRoleProps, {
        component: "li",
        "aria-disabled": disabled,
        style: {
            ...directionStyle,
            ...style
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(itemCls, {
            [`${itemCls}-active`]: active,
            [`${itemCls}-selected`]: selected,
            [`${itemCls}-disabled`]: mergedDisabled
        }, className),
        onClick: onInternalClick,
        onKeyDown: onInternalKeyDown,
        onFocus: onInternalFocus
    }), children, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        props: {
            ...props,
            isSelected: selected
        },
        icon: mergedItemIcon
    }));
    if (_internalRenderMenuItem) {
        renderNode = _internalRenderMenuItem(renderNode, props, {
            selected
        });
    }
    return renderNode;
});
function MenuItem(props, ref) {
    const { eventKey } = props;
    // ==================== Record KeyPath ====================
    const measure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeasure"])();
    const connectedKeyPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFullPath"])(eventKey);
    // eslint-disable-next-line consistent-return
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "MenuItem.useEffect": ()=>{
            if (measure) {
                measure.registerPath(eventKey, connectedKeyPath);
                return ({
                    "MenuItem.useEffect": ()=>{
                        measure.unregisterPath(eventKey, connectedKeyPath);
                    }
                })["MenuItem.useEffect"];
            }
        }
    }["MenuItem.useEffect"], [
        connectedKeyPath
    ]);
    if (measure) {
        return null;
    }
    // ======================== Render ========================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](InternalMenuItem, _extends({}, props, {
        ref: ref
    }));
}
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](MenuItem);
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/SubMenu/SubMenuList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/MenuContext.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
const InternalSubMenuList = ({ className, children, ...restProps }, ref)=>{
    const { prefixCls, mode, rtl } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("ul", _extends({
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, rtl && `${prefixCls}-rtl`, `${prefixCls}-sub`, `${prefixCls}-${mode === 'inline' ? 'inline' : 'vertical'}`, className),
        role: "menu"
    }, restProps, {
        "data-menu-list": true,
        ref: ref
    }), children);
};
const SubMenuList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](InternalSubMenuList);
if ("TURBOPACK compile-time truthy", 1) {
    SubMenuList.displayName = 'SubMenuList';
}
const __TURBOPACK__default__export__ = SubMenuList;
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/utils/commonUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseChildren",
    ()=>parseChildren
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function parseChildren(children, keyPath) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(children).map((child, index)=>{
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child)) {
            const { key } = child;
            let eventKey = child.props?.eventKey ?? key;
            const emptyKey = eventKey === null || eventKey === undefined;
            if (emptyKey) {
                eventKey = `tmp_key-${[
                    ...keyPath,
                    index
                ].join('-')}`;
            }
            const cloneProps = {
                key: eventKey,
                eventKey
            };
            if (("TURBOPACK compile-time value", "development") !== 'production' && emptyKey) {
                cloneProps.warnKey = true;
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](child, cloneProps);
        }
        return child;
    });
}
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/placements.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "placements",
    ()=>placements,
    "placementsRtl",
    ()=>placementsRtl
]);
const autoAdjustOverflow = {
    adjustX: 1,
    adjustY: 1
};
const placements = {
    topLeft: {
        points: [
            'bl',
            'tl'
        ],
        overflow: autoAdjustOverflow
    },
    topRight: {
        points: [
            'br',
            'tr'
        ],
        overflow: autoAdjustOverflow
    },
    bottomLeft: {
        points: [
            'tl',
            'bl'
        ],
        overflow: autoAdjustOverflow
    },
    bottomRight: {
        points: [
            'tr',
            'br'
        ],
        overflow: autoAdjustOverflow
    },
    leftTop: {
        points: [
            'tr',
            'tl'
        ],
        overflow: autoAdjustOverflow
    },
    leftBottom: {
        points: [
            'br',
            'bl'
        ],
        overflow: autoAdjustOverflow
    },
    rightTop: {
        points: [
            'tl',
            'tr'
        ],
        overflow: autoAdjustOverflow
    },
    rightBottom: {
        points: [
            'bl',
            'br'
        ],
        overflow: autoAdjustOverflow
    }
};
const placementsRtl = {
    topLeft: {
        points: [
            'bl',
            'tl'
        ],
        overflow: autoAdjustOverflow
    },
    topRight: {
        points: [
            'br',
            'tr'
        ],
        overflow: autoAdjustOverflow
    },
    bottomLeft: {
        points: [
            'tl',
            'bl'
        ],
        overflow: autoAdjustOverflow
    },
    bottomRight: {
        points: [
            'tr',
            'br'
        ],
        overflow: autoAdjustOverflow
    },
    rightTop: {
        points: [
            'tr',
            'tl'
        ],
        overflow: autoAdjustOverflow
    },
    rightBottom: {
        points: [
            'br',
            'bl'
        ],
        overflow: autoAdjustOverflow
    },
    leftTop: {
        points: [
            'tl',
            'tr'
        ],
        overflow: autoAdjustOverflow
    },
    leftBottom: {
        points: [
            'bl',
            'br'
        ],
        overflow: autoAdjustOverflow
    }
};
const __TURBOPACK__default__export__ = placements;
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/utils/motionUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMotion",
    ()=>getMotion
]);
function getMotion(mode, motion, defaultMotions) {
    if (motion) {
        return motion;
    }
    if (defaultMotions) {
        return defaultMotions[mode] || defaultMotions.other;
    }
    return undefined;
}
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/SubMenu/PopupTrigger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PopupTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+trigger@3.9.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/trigger/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/raf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/MenuContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$placements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/placements.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$motionUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/utils/motionUtil.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const popupPlacementMap = {
    horizontal: 'bottomLeft',
    vertical: 'rightTop',
    'vertical-left': 'rightTop',
    'vertical-right': 'leftTop'
};
function PopupTrigger({ prefixCls, visible, children, popup, popupStyle, popupClassName, popupOffset, disabled, mode, onVisibleChange }) {
    const { getPopupContainer, rtl, subMenuOpenDelay, subMenuCloseDelay, builtinPlacements, triggerSubMenuAction, forceSubMenuRender, rootClassName, // Motion
    motion, defaultMotions } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]);
    const [innerVisible, setInnerVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const placement = rtl ? {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$placements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placementsRtl"],
        ...builtinPlacements
    } : {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$placements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"],
        ...builtinPlacements
    };
    const popupPlacement = popupPlacementMap[mode];
    const targetMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$motionUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMotion"])(mode, motion, defaultMotions);
    const targetMotionRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](targetMotion);
    if (mode !== 'inline') {
        /**
     * PopupTrigger is only used for vertical and horizontal types.
     * When collapsed is unfolded, the inline animation will destroy the vertical animation.
     */ targetMotionRef.current = targetMotion;
    }
    const mergedMotion = {
        ...targetMotionRef.current,
        leavedClassName: `${prefixCls}-hidden`,
        removeOnLeave: false,
        motionAppear: true
    };
    // Delay to change visible
    const visibleRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PopupTrigger.useEffect": ()=>{
            visibleRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                "PopupTrigger.useEffect": ()=>{
                    setInnerVisible(visible);
                }
            }["PopupTrigger.useEffect"]);
            return ({
                "PopupTrigger.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cancel(visibleRef.current);
                }
            })["PopupTrigger.useEffect"];
        }
    }["PopupTrigger.useEffect"], [
        visible
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$3$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        prefixCls: prefixCls,
        popupClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-popup`, {
            [`${prefixCls}-rtl`]: rtl
        }, popupClassName, rootClassName),
        stretch: mode === 'horizontal' ? 'minWidth' : null,
        getPopupContainer: getPopupContainer,
        builtinPlacements: placement,
        popupPlacement: popupPlacement,
        popupVisible: innerVisible,
        popup: popup,
        popupStyle: popupStyle,
        popupAlign: popupOffset && {
            offset: popupOffset
        },
        action: disabled ? [] : [
            triggerSubMenuAction
        ],
        mouseEnterDelay: subMenuOpenDelay,
        mouseLeaveDelay: subMenuCloseDelay,
        onPopupVisibleChange: onVisibleChange,
        forceRender: forceSubMenuRender,
        popupMotion: mergedMotion,
        fresh: true
    }, children);
}
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/SubMenu/InlineSubMenuList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InlineSubMenuList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$motion$40$1$2e$3$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+motion@1.3.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$motionUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/utils/motionUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/MenuContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$SubMenu$2f$SubMenuList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/SubMenu/SubMenuList.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
function InlineSubMenuList({ id, open, keyPath, children }) {
    const fixedMode = 'inline';
    const { prefixCls, forceSubMenuRender, motion, defaultMotions, mode } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]);
    // Always use latest mode check
    const sameModeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    sameModeRef.current = mode === fixedMode;
    // We record `destroy` mark here since when mode change from `inline` to others.
    // The inline list should remove when motion end.
    const [destroy, setDestroy] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](!sameModeRef.current);
    const mergedOpen = sameModeRef.current ? open : false;
    // ================================= Effect =================================
    // Reset destroy state when mode change back
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "InlineSubMenuList.useEffect": ()=>{
            if (sameModeRef.current) {
                setDestroy(false);
            }
        }
    }["InlineSubMenuList.useEffect"], [
        mode
    ]);
    // ================================= Render =================================
    const mergedMotion = {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$motionUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMotion"])(fixedMode, motion, defaultMotions)
    };
    // No need appear since nest inlineCollapse changed
    if (keyPath.length > 1) {
        mergedMotion.motionAppear = false;
    }
    // Hide inline list when mode changed and motion end
    const originOnVisibleChanged = mergedMotion.onVisibleChanged;
    mergedMotion.onVisibleChanged = (newVisible)=>{
        if (!sameModeRef.current && !newVisible) {
            setDestroy(true);
        }
        return originOnVisibleChanged?.(newVisible);
    };
    if (destroy) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        mode: fixedMode,
        locked: !sameModeRef.current
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$motion$40$1$2e$3$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], _extends({
        visible: mergedOpen
    }, mergedMotion, {
        forceRender: forceSubMenuRender,
        removeOnLeave: false,
        leavedClassName: `${prefixCls}-hidden`
    }), ({ className: motionClassName, style: motionStyle })=>{
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$SubMenu$2f$SubMenuList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: id,
            className: motionClassName,
            style: motionStyle
        }, children);
    }));
}
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/SubMenu/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$overflow$40$1$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+overflow@1.0.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/overflow/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$SubMenu$2f$SubMenuList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/SubMenu/SubMenuList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/utils/commonUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/MenuContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useMemoCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/hooks/useMemoCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$SubMenu$2f$PopupTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/SubMenu/PopupTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useActive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/hooks/useActive.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$warnUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/utils/warnUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useDirectionStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/hooks/useDirectionStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$SubMenu$2f$InlineSubMenuList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/SubMenu/InlineSubMenuList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/PathContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$IdContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/IdContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PrivateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/PrivateContext.js [app-client] (ecmascript)");
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
const InternalSubMenu = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { style, className, styles, classNames: menuClassNames, title, eventKey, warnKey, disabled, internalPopupClose, children, // Icons
    itemIcon, expandIcon, // Popup
    popupClassName, popupOffset, popupStyle, // Events
    onClick, onMouseEnter, onMouseLeave, onTitleClick, onTitleMouseEnter, onTitleMouseLeave, popupRender: propsPopupRender, ...restProps } = props;
    const domDataId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$IdContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuId"])(eventKey);
    const { prefixCls, mode, openKeys, // Disabled
    disabled: contextDisabled, overflowDisabled, // ActiveKey
    activeKey, // SelectKey
    selectedKeys, // Icon
    itemIcon: contextItemIcon, expandIcon: contextExpandIcon, // Events
    onItemClick, onOpenChange, onActive, popupRender: contextPopupRender } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]);
    const { _internalRenderSubMenuItem } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PrivateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const { isSubPathKey } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PathUserContext"]);
    const connectedPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFullPath"])();
    const subMenuPrefixCls = `${prefixCls}-submenu`;
    const mergedDisabled = contextDisabled || disabled;
    const elementRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const popupRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    // ================================ Warn ================================
    if (("TURBOPACK compile-time value", "development") !== 'production' && warnKey) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'SubMenu should not leave undefined `key`.');
    }
    // ================================ Icon ================================
    const mergedItemIcon = itemIcon ?? contextItemIcon;
    const mergedExpandIcon = expandIcon ?? contextExpandIcon;
    // ================================ Open ================================
    const originOpen = openKeys.includes(eventKey);
    const open = !overflowDisabled && originOpen;
    // =============================== Select ===============================
    const childrenSelected = isSubPathKey(selectedKeys, eventKey);
    // =============================== Active ===============================
    const { active, ...activeProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useActive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(eventKey, mergedDisabled, onTitleMouseEnter, onTitleMouseLeave);
    // Fallback of active check to avoid hover on menu title or disabled item
    const [childrenActive, setChildrenActive] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const triggerChildrenActive = (newActive)=>{
        if (!mergedDisabled) {
            setChildrenActive(newActive);
        }
    };
    const onInternalMouseEnter = (domEvent)=>{
        triggerChildrenActive(true);
        onMouseEnter?.({
            key: eventKey,
            domEvent
        });
    };
    const onInternalMouseLeave = (domEvent)=>{
        triggerChildrenActive(false);
        onMouseLeave?.({
            key: eventKey,
            domEvent
        });
    };
    const mergedActive = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalSubMenu.useMemo[mergedActive]": ()=>{
            if (active) {
                return active;
            }
            if (mode !== 'inline') {
                return childrenActive || isSubPathKey([
                    activeKey
                ], eventKey);
            }
            return false;
        }
    }["InternalSubMenu.useMemo[mergedActive]"], [
        mode,
        active,
        activeKey,
        childrenActive,
        eventKey,
        isSubPathKey
    ]);
    // ========================== DirectionStyle ==========================
    const directionStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useDirectionStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(connectedPath.length);
    // =============================== Events ===============================
    // >>>> Title click
    const onInternalTitleClick = (e)=>{
        // Skip if disabled
        if (mergedDisabled) {
            return;
        }
        onTitleClick?.({
            key: eventKey,
            domEvent: e
        });
        // Trigger open by click when mode is `inline`
        if (mode === 'inline') {
            onOpenChange(eventKey, !originOpen);
        }
    };
    // >>>> Context for children click
    const onMergedItemClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useMemoCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "InternalSubMenu.useMemoCallback[onMergedItemClick]": (info)=>{
            onClick?.((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$warnUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnItemProp"])(info));
            onItemClick(info);
        }
    }["InternalSubMenu.useMemoCallback[onMergedItemClick]"]);
    // >>>>> Visible change
    const onPopupVisibleChange = (newVisible)=>{
        if (mode !== 'inline') {
            onOpenChange(eventKey, newVisible);
        }
    };
    /**
   * Used for accessibility. Helper will focus element without key board.
   * We should manually trigger an active
   */ const onInternalFocus = ()=>{
        onActive(eventKey);
    };
    // =============================== Render ===============================
    const popupId = domDataId && `${domDataId}-popup`;
    const expandIconNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalSubMenu.useMemo[expandIconNode]": ()=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                icon: mode !== 'horizontal' ? mergedExpandIcon : undefined,
                props: {
                    ...props,
                    isOpen: open,
                    // [Legacy] Not sure why need this mark
                    isSubMenu: true
                }
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("i", {
                className: `${subMenuPrefixCls}-arrow`
            }))
    }["InternalSubMenu.useMemo[expandIconNode]"], [
        mode,
        mergedExpandIcon,
        props,
        open,
        subMenuPrefixCls
    ]);
    // >>>>> Title
    let titleNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", _extends({
        role: "menuitem",
        style: directionStyle,
        className: `${subMenuPrefixCls}-title`,
        tabIndex: mergedDisabled ? null : -1,
        ref: elementRef,
        title: typeof title === 'string' ? title : null,
        "data-menu-id": overflowDisabled && domDataId ? null : domDataId,
        "aria-expanded": open,
        "aria-haspopup": true,
        "aria-controls": popupId,
        "aria-disabled": mergedDisabled,
        onClick: onInternalTitleClick,
        onFocus: onInternalFocus
    }, activeProps), title, expandIconNode);
    // Cache mode if it change to `inline` which do not have popup motion
    const triggerModeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](mode);
    if (mode !== 'inline' && connectedPath.length > 1) {
        triggerModeRef.current = 'vertical';
    } else {
        triggerModeRef.current = mode;
    }
    const popupContentTriggerMode = triggerModeRef.current;
    const renderPopupContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalSubMenu.useMemo[renderPopupContent]": ()=>{
            const originNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                classNames: menuClassNames,
                styles: styles,
                mode: popupContentTriggerMode === 'horizontal' ? 'vertical' : popupContentTriggerMode
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$SubMenu$2f$SubMenuList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: popupId,
                ref: popupRef
            }, children));
            const mergedPopupRender = propsPopupRender || contextPopupRender;
            if (mergedPopupRender) {
                const node = mergedPopupRender(originNode, {
                    item: props,
                    keys: connectedPath
                });
                return node;
            }
            return originNode;
        }
    }["InternalSubMenu.useMemo[renderPopupContent]"], [
        propsPopupRender,
        contextPopupRender,
        connectedPath,
        popupId,
        children,
        props,
        popupContentTriggerMode
    ]);
    if (!overflowDisabled) {
        const triggerMode = triggerModeRef.current;
        // Still wrap with Trigger here since we need avoid react re-mount dom node
        // Which makes motion failed
        titleNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$SubMenu$2f$PopupTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            mode: triggerMode,
            prefixCls: subMenuPrefixCls,
            visible: !internalPopupClose && open && mode !== 'inline',
            popupClassName: popupClassName,
            popupOffset: popupOffset,
            popupStyle: popupStyle,
            popup: renderPopupContent,
            disabled: mergedDisabled,
            onVisibleChange: onPopupVisibleChange
        }, titleNode);
    }
    // >>>>> List node
    let listNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$overflow$40$1$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Item, _extends({
        ref: ref,
        role: "none"
    }, restProps, {
        component: "li",
        style: style,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(subMenuPrefixCls, `${subMenuPrefixCls}-${mode}`, className, {
            [`${subMenuPrefixCls}-open`]: open,
            [`${subMenuPrefixCls}-active`]: mergedActive,
            [`${subMenuPrefixCls}-selected`]: childrenSelected,
            [`${subMenuPrefixCls}-disabled`]: mergedDisabled
        }),
        onMouseEnter: onInternalMouseEnter,
        onMouseLeave: onInternalMouseLeave
    }), titleNode, !overflowDisabled && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$SubMenu$2f$InlineSubMenuList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: popupId,
        open: open,
        keyPath: connectedPath
    }, children));
    if (_internalRenderSubMenuItem) {
        listNode = _internalRenderSubMenuItem(listNode, props, {
            selected: childrenSelected,
            active: mergedActive,
            open,
            disabled: mergedDisabled
        });
    }
    // >>>>> Render
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        classNames: menuClassNames,
        styles: styles,
        onItemClick: onMergedItemClick,
        mode: mode === 'horizontal' ? 'vertical' : mode,
        itemIcon: mergedItemIcon,
        expandIcon: mergedExpandIcon
    }, listNode);
});
const SubMenu = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { eventKey, children } = props;
    const connectedKeyPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFullPath"])(eventKey);
    const childList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseChildren"])(children, connectedKeyPath);
    // ==================== Record KeyPath ====================
    const measure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeasure"])();
    // eslint-disable-next-line consistent-return
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SubMenu.useEffect": ()=>{
            if (measure) {
                measure.registerPath(eventKey, connectedKeyPath);
                return ({
                    "SubMenu.useEffect": ()=>{
                        measure.unregisterPath(eventKey, connectedKeyPath);
                    }
                })["SubMenu.useEffect"];
            }
        }
    }["SubMenu.useEffect"], [
        connectedKeyPath
    ]);
    let renderNode;
    // ======================== Render ========================
    if (measure) {
        renderNode = childList;
    } else {
        renderNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](InternalSubMenu, _extends({
            ref: ref
        }, props), childList);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PathTrackerContext"].Provider, {
        value: connectedKeyPath
    }, renderNode);
});
if ("TURBOPACK compile-time truthy", 1) {
    SubMenu.displayName = 'SubMenu';
}
const __TURBOPACK__default__export__ = SubMenu;
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/Divider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Divider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/MenuContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/PathContext.js [app-client] (ecmascript)");
;
;
;
;
function Divider({ className, style }) {
    const { prefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]);
    const measure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeasure"])();
    if (measure) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("li", {
        role: "separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-item-divider`, className),
        style: style
    });
}
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/MenuItemGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/MenuContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/PathContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/utils/commonUtil.js [app-client] (ecmascript)");
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
const InternalMenuItemGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { className, title, eventKey, children, ...restProps } = props;
    const { prefixCls, classNames: menuClassNames, styles } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"]);
    const groupPrefixCls = `${prefixCls}-item-group`;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("li", _extends({
        ref: ref,
        role: "presentation"
    }, restProps, {
        onClick: (e)=>e.stopPropagation(),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(groupPrefixCls, className)
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        role: "presentation",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${groupPrefixCls}-title`, menuClassNames?.listTitle),
        style: styles?.listTitle,
        title: typeof title === 'string' ? title : undefined
    }, title), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("ul", {
        role: "group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${groupPrefixCls}-list`, menuClassNames?.list),
        style: styles?.list
    }, children));
});
const MenuItemGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { eventKey, children } = props;
    const connectedKeyPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFullPath"])(eventKey);
    const childList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseChildren"])(children, connectedKeyPath);
    const measure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeasure"])();
    if (measure) {
        return childList;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](InternalMenuItemGroup, _extends({
        ref: ref
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, [
        'warnKey'
    ])), childList);
});
if ("TURBOPACK compile-time truthy", 1) {
    MenuItemGroup.displayName = 'MenuItemGroup';
}
const __TURBOPACK__default__export__ = MenuItemGroup;
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/utils/nodeUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseItems",
    ()=>parseItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/Divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/MenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItemGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/MenuItemGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/SubMenu/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/utils/commonUtil.js [app-client] (ecmascript)");
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
function convertItemsToNodes(list, components, prefixCls) {
    const { item: MergedMenuItem, group: MergedMenuItemGroup, submenu: MergedSubMenu, divider: MergedDivider } = components;
    return (list || []).map((opt, index)=>{
        if (opt && typeof opt === 'object') {
            const { label, children, key, type, extra, ...restProps } = opt;
            const mergedKey = key ?? `tmp-${index}`;
            // MenuItemGroup & SubMenuItem
            if (children || type === 'group') {
                if (type === 'group') {
                    // Group
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](MergedMenuItemGroup, _extends({
                        key: mergedKey
                    }, restProps, {
                        title: label
                    }), convertItemsToNodes(children, components, prefixCls));
                }
                // Sub Menu
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](MergedSubMenu, _extends({
                    key: mergedKey
                }, restProps, {
                    title: label
                }), convertItemsToNodes(children, components, prefixCls));
            }
            // MenuItem & Divider
            if (type === 'divider') {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](MergedDivider, _extends({
                    key: mergedKey
                }, restProps));
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](MergedMenuItem, _extends({
                key: mergedKey
            }, restProps, {
                extra: extra
            }), label, (!!extra || extra === 0) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
                className: `${prefixCls}-item-extra`
            }, extra));
        }
        return null;
    }).filter((opt)=>opt);
}
function parseItems(children, items, keyPath, components, prefixCls) {
    let childNodes = children;
    const mergedComponents = {
        divider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        item: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        group: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItemGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        submenu: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        ...components
    };
    if (items) {
        childNodes = convertItemsToNodes(items, mergedComponents, prefixCls);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$commonUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseChildren"])(childNodes, keyPath);
}
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/Menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$overflow$40$1$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+overflow@1.0.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/overflow/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/isEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$IdContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/IdContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/MenuContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/PathContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PrivateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/PrivateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useAccessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/hooks/useAccessibility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useKeyRecords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/hooks/useKeyRecords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useMemoCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/hooks/useMemoCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/MenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/SubMenu/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$nodeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/utils/nodeUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$warnUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/utils/warnUtil.js [app-client] (ecmascript)");
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
;
;
;
/**
 * Menu modify after refactor:
 * ## Add
 * - disabled
 *
 * ## Remove
 * - openTransitionName
 * - openAnimation
 * - onDestroy
 * - siderCollapsed: Seems antd do not use this prop (Need test in antd)
 * - collapsedWidth: Seems this logic should be handle by antd Layout.Sider
 */ // optimize for render
const EMPTY_LIST = [];
const Menu = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls = 'rc-menu', rootClassName, style, className, styles, classNames: menuClassNames, tabIndex = 0, items, children, direction, id, // Mode
    mode = 'vertical', inlineCollapsed, // Disabled
    disabled, disabledOverflow, // Open
    subMenuOpenDelay = 0.1, subMenuCloseDelay = 0.1, forceSubMenuRender, defaultOpenKeys, openKeys, // Active
    activeKey, defaultActiveFirst, // Selection
    selectable = true, multiple = false, defaultSelectedKeys, selectedKeys, onSelect, onDeselect, // Level
    inlineIndent = 24, // Motion
    motion, defaultMotions, // Popup
    triggerSubMenuAction = 'hover', builtinPlacements, // Icon
    itemIcon, expandIcon, overflowedIndicator = '...', overflowedIndicatorPopupClassName, // Function
    getPopupContainer, // Events
    onClick, onOpenChange, onKeyDown, // Deprecated
    openAnimation, openTransitionName, // Internal
    _internalRenderMenuItem, _internalRenderSubMenuItem, _internalComponents, popupRender, ...restProps } = props;
    const [childList, measureChildList] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Menu.useMemo": ()=>[
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$nodeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseItems"])(children, items, EMPTY_LIST, _internalComponents, prefixCls),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$nodeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseItems"])(children, items, EMPTY_LIST, {}, prefixCls)
            ]
    }["Menu.useMemo"], [
        children,
        items,
        _internalComponents
    ]);
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const uuid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(id ? `rc-menu-uuid-${id}` : 'rc-menu-uuid');
    const isRtl = direction === 'rtl';
    // ========================= Warn =========================
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!openAnimation && !openTransitionName, '`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.');
    }
    // ========================= Open =========================
    const [innerOpenKeys, setMergedOpenKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultOpenKeys, openKeys);
    const mergedOpenKeys = innerOpenKeys || EMPTY_LIST;
    // React 18 will merge mouse event which means we open key will not sync
    // ref: https://github.com/ant-design/ant-design/issues/38818
    const triggerOpenKeys = (keys, forceFlush = false)=>{
        function doUpdate() {
            setMergedOpenKeys(keys);
            onOpenChange?.(keys);
        }
        if (forceFlush) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(doUpdate);
        } else {
            doUpdate();
        }
    };
    // >>>>> Cache & Reset open keys when inlineCollapsed changed
    const [inlineCacheOpenKeys, setInlineCacheOpenKeys] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](mergedOpenKeys);
    const mountRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    // ========================= Mode =========================
    const [mergedMode, mergedInlineCollapsed] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Menu.useMemo": ()=>{
            if ((mode === 'inline' || mode === 'vertical') && inlineCollapsed) {
                return [
                    'vertical',
                    inlineCollapsed
                ];
            }
            return [
                mode,
                false
            ];
        }
    }["Menu.useMemo"], [
        mode,
        inlineCollapsed
    ]);
    const isInlineMode = mergedMode === 'inline';
    const [internalMode, setInternalMode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](mergedMode);
    const [internalInlineCollapsed, setInternalInlineCollapsed] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](mergedInlineCollapsed);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Menu.useEffect": ()=>{
            setInternalMode(mergedMode);
            setInternalInlineCollapsed(mergedInlineCollapsed);
            if (!mountRef.current) {
                return;
            }
            // Synchronously update MergedOpenKeys
            if (isInlineMode) {
                setMergedOpenKeys(inlineCacheOpenKeys);
            } else {
                // Trigger open event in case its in control
                triggerOpenKeys(EMPTY_LIST);
            }
        }
    }["Menu.useEffect"], [
        mergedMode,
        mergedInlineCollapsed
    ]);
    // ====================== Responsive ======================
    const [lastVisibleIndex, setLastVisibleIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const allVisible = lastVisibleIndex >= childList.length - 1 || internalMode !== 'horizontal' || disabledOverflow;
    // Cache
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Menu.useEffect": ()=>{
            if (isInlineMode) {
                setInlineCacheOpenKeys(mergedOpenKeys);
            }
        }
    }["Menu.useEffect"], [
        mergedOpenKeys
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Menu.useEffect": ()=>{
            mountRef.current = true;
            return ({
                "Menu.useEffect": ()=>{
                    mountRef.current = false;
                }
            })["Menu.useEffect"];
        }
    }["Menu.useEffect"], []);
    // ========================= Path =========================
    const { registerPath, unregisterPath, refreshOverflowKeys, isSubPathKey, getKeyPath, getKeys, getSubPathKeys } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useKeyRecords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const registerPathContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Menu.useMemo[registerPathContext]": ()=>({
                registerPath,
                unregisterPath
            })
    }["Menu.useMemo[registerPathContext]"], [
        registerPath,
        unregisterPath
    ]);
    const pathUserContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Menu.useMemo[pathUserContext]": ()=>({
                isSubPathKey
            })
    }["Menu.useMemo[pathUserContext]"], [
        isSubPathKey
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Menu.useEffect": ()=>{
            refreshOverflowKeys(allVisible ? EMPTY_LIST : childList.slice(lastVisibleIndex + 1).map({
                "Menu.useEffect": (child)=>child.key
            }["Menu.useEffect"]));
        }
    }["Menu.useEffect"], [
        lastVisibleIndex,
        allVisible
    ]);
    // ======================== Active ========================
    const [mergedActiveKey, setMergedActiveKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(activeKey || defaultActiveFirst && childList[0]?.key, activeKey);
    const onActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useMemoCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Menu.useMemoCallback[onActive]": (key)=>{
            setMergedActiveKey(key);
        }
    }["Menu.useMemoCallback[onActive]"]);
    const onInactive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useMemoCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Menu.useMemoCallback[onInactive]": ()=>{
            setMergedActiveKey(undefined);
        }
    }["Menu.useMemoCallback[onInactive]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "Menu.useImperativeHandle": ()=>{
            return {
                list: containerRef.current,
                focus: ({
                    "Menu.useImperativeHandle": (options)=>{
                        const keys = getKeys();
                        const { elements, key2element, element2key } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useAccessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refreshElements"])(keys, uuid);
                        const focusableElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useAccessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusableElements"])(containerRef.current, elements);
                        let shouldFocusKey;
                        if (mergedActiveKey && keys.includes(mergedActiveKey)) {
                            shouldFocusKey = mergedActiveKey;
                        } else {
                            shouldFocusKey = focusableElements[0] ? element2key.get(focusableElements[0]) : childList.find({
                                "Menu.useImperativeHandle": (node)=>!node.props.disabled
                            }["Menu.useImperativeHandle"])?.key;
                        }
                        const elementToFocus = key2element.get(shouldFocusKey);
                        if (shouldFocusKey && elementToFocus) {
                            elementToFocus?.focus?.(options);
                        }
                    }
                })["Menu.useImperativeHandle"],
                findItem: ({
                    "Menu.useImperativeHandle": ({ key: itemKey })=>{
                        const keys = getKeys();
                        const { key2element } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useAccessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refreshElements"])(keys, uuid);
                        return key2element.get(itemKey) || null;
                    }
                })["Menu.useImperativeHandle"]
            };
        }
    }["Menu.useImperativeHandle"]);
    // ======================== Select ========================
    // >>>>> Select keys
    const [internalSelectKeys, setMergedSelectKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultSelectedKeys || [], selectedKeys);
    const mergedSelectKeys = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Menu.useMemo[mergedSelectKeys]": ()=>{
            if (Array.isArray(internalSelectKeys)) {
                return internalSelectKeys;
            }
            if (internalSelectKeys === null || internalSelectKeys === undefined) {
                return EMPTY_LIST;
            }
            return [
                internalSelectKeys
            ];
        }
    }["Menu.useMemo[mergedSelectKeys]"], [
        internalSelectKeys
    ]);
    // >>>>> Trigger select
    const triggerSelection = (info)=>{
        if (selectable) {
            // Insert or Remove
            const { key: targetKey } = info;
            const exist = mergedSelectKeys.includes(targetKey);
            let newSelectKeys;
            if (multiple) {
                if (exist) {
                    newSelectKeys = mergedSelectKeys.filter((key)=>key !== targetKey);
                } else {
                    newSelectKeys = [
                        ...mergedSelectKeys,
                        targetKey
                    ];
                }
            } else {
                newSelectKeys = [
                    targetKey
                ];
            }
            setMergedSelectKeys(newSelectKeys);
            // Trigger event
            const selectInfo = {
                ...info,
                selectedKeys: newSelectKeys
            };
            if (exist) {
                onDeselect?.(selectInfo);
            } else {
                onSelect?.(selectInfo);
            }
        }
        // Whatever selectable, always close it
        if (!multiple && mergedOpenKeys.length && internalMode !== 'inline') {
            triggerOpenKeys(EMPTY_LIST);
        }
    };
    // ========================= Open =========================
    /**
   * Click for item. SubMenu do not have selection status
   */ const onInternalClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useMemoCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Menu.useMemoCallback[onInternalClick]": (info)=>{
            onClick?.((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$utils$2f$warnUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnItemProp"])(info));
            triggerSelection(info);
        }
    }["Menu.useMemoCallback[onInternalClick]"]);
    const onInternalOpenChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useMemoCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Menu.useMemoCallback[onInternalOpenChange]": (key, open)=>{
            let newOpenKeys = mergedOpenKeys.filter({
                "Menu.useMemoCallback[onInternalOpenChange].newOpenKeys": (k)=>k !== key
            }["Menu.useMemoCallback[onInternalOpenChange].newOpenKeys"]);
            if (open) {
                newOpenKeys.push(key);
            } else if (internalMode !== 'inline') {
                // We need find all related popup to close
                const subPathKeys = getSubPathKeys(key);
                newOpenKeys = newOpenKeys.filter({
                    "Menu.useMemoCallback[onInternalOpenChange]": (k)=>!subPathKeys.has(k)
                }["Menu.useMemoCallback[onInternalOpenChange]"]);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedOpenKeys, newOpenKeys, true)) {
                triggerOpenKeys(newOpenKeys, true);
            }
        }
    }["Menu.useMemoCallback[onInternalOpenChange]"]);
    // ==================== Accessibility =====================
    const triggerAccessibilityOpen = (key, open)=>{
        const nextOpen = open ?? !mergedOpenKeys.includes(key);
        onInternalOpenChange(key, nextOpen);
    };
    const onInternalKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useAccessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccessibility"])(internalMode, mergedActiveKey, isRtl, uuid, containerRef, getKeys, getKeyPath, setMergedActiveKey, triggerAccessibilityOpen, onKeyDown);
    // ======================== Effect ========================
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Menu.useEffect": ()=>{
            setMounted(true);
        }
    }["Menu.useEffect"], []);
    // ======================= Context ========================
    const privateContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Menu.useMemo[privateContext]": ()=>({
                _internalRenderMenuItem,
                _internalRenderSubMenuItem
            })
    }["Menu.useMemo[privateContext]"], [
        _internalRenderMenuItem,
        _internalRenderSubMenuItem
    ]);
    // ======================== Render ========================
    // >>>>> Children
    const wrappedChildList = internalMode !== 'horizontal' || disabledOverflow ? childList : // Need wrap for overflow dropdown that do not response for open
    childList.map((child, index)=>/*#__PURE__*/ // Always wrap provider to avoid sub node re-mount
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            key: child.key,
            overflowDisabled: index > lastVisibleIndex,
            classNames: menuClassNames,
            styles: styles
        }, child));
    // >>>>> Container
    const container = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$overflow$40$1$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({
        id: id,
        ref: containerRef,
        prefixCls: `${prefixCls}-overflow`,
        component: "ul",
        itemComponent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-root`, `${prefixCls}-${internalMode}`, className, {
            [`${prefixCls}-inline-collapsed`]: internalInlineCollapsed,
            [`${prefixCls}-rtl`]: isRtl
        }, rootClassName),
        dir: direction,
        style: style,
        role: "menu",
        tabIndex: tabIndex,
        data: wrappedChildList,
        renderRawItem: (node)=>node,
        renderRawRest: (omitItems)=>{
            // We use origin list since wrapped list use context to prevent open
            const len = omitItems.length;
            const originOmitItems = len ? childList.slice(-len) : null;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                eventKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$hooks$2f$useKeyRecords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OVERFLOW_KEY"],
                title: overflowedIndicator,
                disabled: allVisible,
                internalPopupClose: len === 0,
                popupClassName: overflowedIndicatorPopupClassName
            }, originOmitItems);
        },
        maxCount: internalMode !== 'horizontal' || disabledOverflow ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$overflow$40$1$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].INVALIDATE : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$overflow$40$1$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$overflow$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RESPONSIVE,
        ssr: "full",
        "data-menu-list": true,
        onVisibleChange: (newLastIndex)=>{
            setLastVisibleIndex(newLastIndex);
        },
        onKeyDown: onInternalKeyDown
    }, restProps));
    // >>>>> Render
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PrivateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: privateContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$IdContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdContext"].Provider, {
        value: uuid
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        rootClassName: rootClassName,
        classNames: menuClassNames,
        styles: styles,
        mode: internalMode,
        openKeys: mergedOpenKeys,
        rtl: isRtl,
        disabled: disabled,
        motion: mounted ? motion : null,
        defaultMotions: mounted ? defaultMotions : null,
        activeKey: mergedActiveKey,
        onActive: onActive,
        onInactive: onInactive,
        selectedKeys: mergedSelectKeys,
        inlineIndent: inlineIndent,
        subMenuOpenDelay: subMenuOpenDelay,
        subMenuCloseDelay: subMenuCloseDelay,
        forceSubMenuRender: forceSubMenuRender,
        builtinPlacements: builtinPlacements,
        triggerSubMenuAction: triggerSubMenuAction,
        getPopupContainer: getPopupContainer,
        itemIcon: itemIcon,
        expandIcon: expandIcon,
        onItemClick: onInternalClick,
        onOpenChange: onInternalOpenChange,
        popupRender: popupRender
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PathUserContext"].Provider, {
        value: pathUserContext
    }, container), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        style: {
            display: 'none'
        },
        "aria-hidden": true
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PathRegisterContext"].Provider, {
        value: registerPathContext
    }, measureChildList)))));
});
const __TURBOPACK__default__export__ = Menu;
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/Menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/MenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/SubMenu/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItemGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/MenuItemGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/context/PathContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/Divider.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const ExportMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ExportMenu.Item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ExportMenu.SubMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ExportMenu.ItemGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItemGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ExportMenu.Divider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = ExportMenu;
}),
"[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$menu$40$1$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+menu@1.2.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/menu/es/MenuItem.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=0.yz_%40rc-component_menu_es_08kr6kh._.js.map