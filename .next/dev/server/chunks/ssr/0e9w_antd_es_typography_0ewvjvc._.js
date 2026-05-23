module.exports = [
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/style/mixins.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCopyableStyles",
    ()=>getCopyableStyles,
    "getEditableStyles",
    ()=>getEditableStyles,
    "getEllipsisStyles",
    ()=>getEllipsisStyles,
    "getLinkStyles",
    ()=>getLinkStyles,
    "getResetStyles",
    ()=>getResetStyles,
    "getTitleStyles",
    ()=>getTitleStyles
]);
/*
.typography-title(@fontSize; @fontWeight; @lineHeight; @headingColor; @headingMarginBottom;) {
 margin-bottom: @headingMarginBottom;
 color: @headingColor;
 font-weight: @fontWeight;
 fontSize: @fontSize;
 line-height: @lineHeight;
}
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$colors$40$8$2e$0$2e$1$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ant-design+colors@8.0.1/node_modules/@ant-design/colors/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$colors$40$8$2e$0$2e$1$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ant-design+colors@8.0.1/node_modules/@ant-design/colors/es/presets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/style/index.js [app-ssr] (ecmascript)");
;
;
const getTitleStyle = (fontSize, lineHeight, color, token)=>{
    const { titleMarginBottom, fontWeightStrong } = token;
    return {
        marginBottom: titleMarginBottom,
        color,
        fontWeight: fontWeightStrong,
        fontSize,
        lineHeight
    };
};
const getTitleStyles = (token)=>{
    const headings = [
        1,
        2,
        3,
        4,
        5
    ];
    const styles = {};
    headings.forEach((headingLevel)=>{
        styles[`
      h${headingLevel}&,
      div&-h${headingLevel},
      div&-h${headingLevel} > textarea,
      h${headingLevel}
    `] = getTitleStyle(token[`fontSizeHeading${headingLevel}`], token[`lineHeightHeading${headingLevel}`], token.colorTextHeading, token);
    });
    return styles;
};
const getLinkStyles = (token)=>{
    const { componentCls } = token;
    const linkCls = `${componentCls}-link`;
    return {
        [`&${linkCls}`]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["operationUnit"])(token),
            userSelect: 'text',
            [`&[disabled], &${componentCls}-disabled`]: {
                color: token.colorTextDisabled,
                cursor: 'not-allowed',
                '&:active, &:hover': {
                    color: token.colorTextDisabled
                },
                '&:active': {
                    pointerEvents: 'none',
                    // Action buttons (copy, edit, expand) must remain interactive even when
                    // the disabled link is being clicked, otherwise their click events get
                    // swallowed by the parent's pointer-events: none during :active.
                    [`${componentCls}-actions`]: {
                        pointerEvents: 'auto'
                    }
                }
            }
        }
    };
};
const getResetStyles = (token)=>({
        code: {
            margin: '0 0.2em',
            paddingInline: '0.4em',
            paddingBlock: '0.2em 0.1em',
            fontSize: '85%',
            fontFamily: token.fontFamilyCode,
            background: 'rgba(150, 150, 150, 0.1)',
            border: '1px solid rgba(100, 100, 100, 0.2)',
            borderRadius: 3
        },
        kbd: {
            margin: '0 0.2em',
            paddingInline: '0.4em',
            paddingBlock: '0.15em 0.1em',
            fontSize: '90%',
            fontFamily: token.fontFamilyCode,
            background: 'rgba(150, 150, 150, 0.06)',
            border: '1px solid rgba(100, 100, 100, 0.2)',
            borderBottomWidth: 2,
            borderRadius: 3
        },
        mark: {
            padding: 0,
            // FIXME hardcode in v4
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$colors$40$8$2e$0$2e$1$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gold"][2]
        },
        'u, ins': {
            textDecoration: 'underline',
            textDecorationSkipInk: 'auto'
        },
        's, del': {
            textDecoration: 'line-through'
        },
        strong: {
            fontWeight: token.fontWeightStrong
        },
        // list
        'ul, ol': {
            marginInline: 0,
            marginBlock: '0 1em',
            padding: 0,
            li: {
                marginInline: '20px 0',
                marginBlock: 0,
                paddingInline: '4px 0',
                paddingBlock: 0
            }
        },
        ul: {
            listStyleType: 'circle',
            ul: {
                listStyleType: 'disc'
            }
        },
        ol: {
            listStyleType: 'decimal'
        },
        // pre & block
        'pre, blockquote': {
            margin: '1em 0'
        },
        pre: {
            padding: '0.4em 0.6em',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            background: 'rgba(150, 150, 150, 0.1)',
            border: '1px solid rgba(100, 100, 100, 0.2)',
            borderRadius: 3,
            fontFamily: token.fontFamilyCode,
            // Compatible for marked
            code: {
                display: 'inline',
                margin: 0,
                padding: 0,
                fontSize: 'inherit',
                fontFamily: 'inherit',
                background: 'transparent',
                border: 0
            }
        },
        blockquote: {
            paddingInline: '0.6em 0',
            paddingBlock: 0,
            borderInlineStart: '4px solid rgba(100, 100, 100, 0.2)',
            opacity: 0.85
        }
    });
const getEditableStyles = (token)=>{
    const { componentCls, paddingSM } = token;
    const inputShift = paddingSM;
    return {
        '&-edit-content': {
            position: 'relative',
            'div&': {
                insetInlineStart: token.calc(token.paddingSM).mul(-1).equal(),
                insetBlockStart: token.calc(inputShift).div(-2).add(1).equal(),
                marginBottom: token.calc(inputShift).div(2).sub(2).equal()
            },
            [`${componentCls}-edit-content-confirm`]: {
                position: 'absolute',
                insetInlineEnd: token.calc(token.marginXS).add(2).equal(),
                insetBlockEnd: token.marginXS,
                color: token.colorIcon,
                // default style
                fontWeight: 'normal',
                fontSize: token.fontSize,
                fontStyle: 'normal',
                pointerEvents: 'none'
            },
            textarea: {
                margin: '0!important',
                // Fix Editable Textarea flash in Firefox
                MozTransition: 'none',
                height: '1em'
            }
        }
    };
};
const getCopyableStyles = (token)=>({
        [`${token.componentCls}-copy-success`]: {
            '&, &:hover, &:focus': {
                color: token.colorSuccess
            }
        },
        [`${token.componentCls}-copy-icon-only`]: {
            marginInlineStart: 0
        }
    });
const getEllipsisStyles = ()=>({
        'a&-ellipsis, span&-ellipsis': {
            display: 'inline-block',
            maxWidth: '100%'
        },
        '&-ellipsis-single-line': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            // https://blog.csdn.net/iefreer/article/details/50421025
            'a&, span&': {
                verticalAlign: 'bottom'
            },
            '> code': {
                paddingBlock: 0,
                maxWidth: 'calc(100% - 1.2em)',
                display: 'inline-block',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                verticalAlign: 'bottom',
                // https://github.com/ant-design/ant-design/issues/45953
                boxSizing: 'content-box'
            }
        },
        '&-ellipsis-multiple-line': {
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical'
        }
    });
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/style/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/style/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/theme/util/genStyleUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$mixins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/style/mixins.js [app-ssr] (ecmascript)");
;
;
;
const genTypographyStyle = (token)=>{
    const { componentCls, titleMarginTop } = token;
    return {
        [componentCls]: {
            color: token.colorText,
            wordBreak: 'break-word',
            lineHeight: token.lineHeight,
            [`&${componentCls}-secondary, &${componentCls}-link${componentCls}-secondary`]: {
                color: token.colorTextDescription
            },
            [`&${componentCls}-success, &${componentCls}-link${componentCls}-success`]: {
                color: token.colorSuccessText
            },
            [`&${componentCls}-warning, &${componentCls}-link${componentCls}-warning`]: {
                color: token.colorWarningText
            },
            [`&${componentCls}-danger, &${componentCls}-link${componentCls}-danger`]: {
                color: token.colorErrorText,
                [`&${componentCls}-link:active, &${componentCls}-link:focus`]: {
                    color: token.colorErrorTextActive
                },
                [`&${componentCls}-link:hover`]: {
                    color: token.colorErrorTextHover
                }
            },
            [`&${componentCls}-disabled`]: {
                color: token.colorTextDisabled,
                cursor: 'not-allowed',
                userSelect: 'none'
            },
            'div&, p': {
                marginBottom: '1em'
            },
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$mixins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTitleStyles"])(token),
            [`& + h1${componentCls}, & + h2${componentCls}, & + h3${componentCls}, & + h4${componentCls}, & + h5${componentCls}`]: {
                marginTop: titleMarginTop
            },
            'div, ul, li, p, h1, h2, h3, h4, h5': {
                '+ h1, + h2, + h3, + h4, + h5': {
                    marginTop: titleMarginTop
                }
            },
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$mixins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResetStyles"])(token),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$mixins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLinkStyles"])(token),
            // Operation
            [`${componentCls}-actions`]: {
                display: 'inline'
            },
            [`
        ${componentCls}-expand,
        ${componentCls}-collapse,
        ${componentCls}-edit,
        ${componentCls}-copy
      `]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["operationUnit"])(token),
                marginInlineStart: token.marginXXS
            },
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$mixins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEditableStyles"])(token),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$mixins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCopyableStyles"])(token),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$mixins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEllipsisStyles"])(),
            '&-rtl': {
                direction: 'rtl'
            }
        }
    };
};
const prepareComponentToken = ()=>({
        titleMarginTop: '1.2em',
        titleMarginBottom: '0.5em'
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Typography', genTypographyStyle, prepareComponentToken);
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Editable.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EnterOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ant-design+icons@6.2.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@ant-design/icons/es/icons/EnterOutlined.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/KeyCode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/_util/reactNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$input$2f$TextArea$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/input/TextArea.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/style/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const Editable = (props)=>{
    const { prefixCls, 'aria-label': ariaLabel, className, style, direction, maxLength, autoSize = true, value, onSave, onCancel, onEnd, component, enterIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EnterOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], null) } = props;
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const inCompositionRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const lastKeyCodeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const [current, setCurrent] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](value);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setCurrent(value);
    }, [
        value
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (ref.current?.resizableTextArea) {
            const { textArea } = ref.current.resizableTextArea;
            textArea.focus();
            const { length } = textArea.value;
            textArea.setSelectionRange(length, length);
        }
    }, []);
    const onChange = ({ target })=>{
        setCurrent(target.value.replace(/[\n\r]/g, ''));
    };
    const onCompositionStart = ()=>{
        inCompositionRef.current = true;
    };
    const onCompositionEnd = ()=>{
        inCompositionRef.current = false;
    };
    const onKeyDown = ({ keyCode })=>{
        // We don't record keyCode when IME is using
        if (inCompositionRef.current) {
            return;
        }
        lastKeyCodeRef.current = keyCode;
    };
    const confirmChange = ()=>{
        onSave(current.trim());
    };
    const onKeyUp = ({ keyCode, ctrlKey, altKey, metaKey, shiftKey })=>{
        // Check if it's a real key
        if (lastKeyCodeRef.current !== keyCode || inCompositionRef.current || ctrlKey || altKey || metaKey || shiftKey) {
            return;
        }
        if (keyCode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ENTER) {
            confirmChange();
            onEnd?.();
        } else if (keyCode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ESC) {
            onCancel();
        }
    };
    const onBlur = ()=>{
        confirmChange();
    };
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const textAreaClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-edit-content`, {
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-${component}`]: !!component
    }, className, hashId, cssVarCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: textAreaClassName,
        style: style
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$input$2f$TextArea$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        maxLength: maxLength,
        value: current,
        onChange: onChange,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp,
        onCompositionStart: onCompositionStart,
        onCompositionEnd: onCompositionEnd,
        onBlur: onBlur,
        "aria-label": ariaLabel,
        rows: 1,
        autoSize: autoSize
    }), enterIcon !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(enterIcon, {
        className: `${prefixCls}-edit-content-confirm`
    }) : null);
};
const __TURBOPACK__default__export__ = Editable;
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/hooks/useCopyClick.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useEvent.js [app-ssr] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/_util/copy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$toList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/_util/toList.js [app-ssr] (ecmascript)");
;
;
;
;
const useCopyClick = ({ copyConfig, children })=>{
    const [copied, setCopied] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [copyLoading, setCopyLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const copyIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const cleanCopyId = ()=>{
        if (copyIdRef.current) {
            clearTimeout(copyIdRef.current);
        }
    };
    const copyOptions = {};
    if (copyConfig.format) {
        copyOptions.format = copyConfig.format;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>cleanCopyId, []);
    // Keep copy action up to date
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])(async (e)=>{
        e?.preventDefault();
        e?.stopPropagation();
        setCopyLoading(true);
        try {
            const text = typeof copyConfig.text === 'function' ? await copyConfig.text() : copyConfig.text;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(text || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$toList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(children, {
                skipEmpty: true
            }).join('') || '', copyOptions);
            setCopyLoading(false);
            setCopied(true);
            // Trigger tips update
            cleanCopyId();
            copyIdRef.current = setTimeout(()=>{
                setCopied(false);
            }, 3000);
            copyConfig.onCopy?.(e);
        } catch (error) {
            setCopyLoading(false);
            throw error;
        }
    });
    return {
        copied,
        copyLoading,
        onClick
    };
};
const __TURBOPACK__default__export__ = useCopyClick;
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/hooks/useMergedConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useMergedConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useMergedConfig(propConfig, templateConfig) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const support = !!propConfig;
        return [
            support,
            {
                ...templateConfig,
                ...support && typeof propConfig === 'object' ? propConfig : null
            }
        ];
    }, [
        propConfig
    ]);
}
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/hooks/usePrevious.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const usePrevious = (value)=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        ref.current = value;
    });
    return ref.current;
};
const __TURBOPACK__default__export__ = usePrevious;
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/hooks/useTooltipProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/_util/is.js [app-ssr] (ecmascript)");
;
;
const useTooltipProps = (tooltip, editConfigText, children)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (tooltip === true) {
            return {
                title: editConfigText ?? children
            };
        }
        if (/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(tooltip)) {
            return {
                title: tooltip
            };
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(tooltip)) {
            return {
                title: editConfigText ?? children,
                ...tooltip
            };
        }
        return {
            title: tooltip
        };
    }, [
        tooltip,
        editConfigText,
        children
    ]);
const __TURBOPACK__default__export__ = useTooltipProps;
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Typography.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/style/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Typography = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, component: Component = 'article', className, rootClassName, children, direction: typographyDirection, style, ...restProps } = props;
    const { getPrefixCls, direction: contextDirection, className: contextClassName, style: contextStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComponentConfig"])('typography');
    const direction = typographyDirection ?? contextDirection;
    const prefixCls = getPrefixCls('typography', customizePrefixCls);
    // Style
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const componentClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, contextClassName, {
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, rootClassName, hashId, cssVarCls);
    const mergedStyle = {
        ...contextStyle,
        ...style
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Component, {
        className: componentClassName,
        style: mergedStyle,
        ref: ref,
        ...restProps
    }, children);
});
if ("TURBOPACK compile-time truthy", 1) {
    Typography.displayName = 'Typography';
}
const __TURBOPACK__default__export__ = Typography;
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Base/util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNode",
    ()=>getNode,
    "isEleEllipsis",
    ()=>isEleEllipsis,
    "isValidText",
    ()=>isValidText,
    "toCopyConfigList",
    ()=>toCopyConfigList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$toList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/_util/toList.js [app-ssr] (ecmascript)");
;
const toCopyConfigList = (val)=>{
    if (val === false) {
        return [
            false,
            false
        ];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$toList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(val);
};
function getNode(dom, defaultNode, needDom) {
    if (dom === true || dom === undefined) {
        return defaultNode;
    }
    return dom || needDom && defaultNode;
}
function isEleEllipsis(ele) {
    // Create a new div to get the size
    const childDiv = document.createElement('em');
    ele.appendChild(childDiv);
    // For test case
    if ("TURBOPACK compile-time truthy", 1) {
        childDiv.className = 'ant-typography-css-ellipsis-content-measure';
    }
    const rect = ele.getBoundingClientRect();
    const childRect = childDiv.getBoundingClientRect();
    // Reset
    ele.removeChild(childDiv);
    // Range checker
    return(// Horizontal out of range
    rect.left > childRect.left || childRect.right > rect.right || // Vertical out of range
    rect.top > childRect.top || childRect.bottom > rect.bottom);
}
const isValidText = (val)=>[
        'string',
        'number'
    ].includes(typeof val);
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Base/CopyBtn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ant-design+icons@6.2.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@ant-design/icons/es/icons/CheckOutlined.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CopyOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ant-design+icons@6.2.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@ant-design/icons/es/icons/CopyOutlined.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ant-design+icons@6.2.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/tooltip/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Base/util.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const CopyBtn = (props)=>{
    const { prefixCls, copied, locale, iconOnly, tooltips, icon, tabIndex, onCopy, loading: btnLoading } = props;
    const tooltipNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCopyConfigList"])(tooltips);
    const iconNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCopyConfigList"])(icon);
    const { copied: copiedText, copy: copyText } = locale ?? {};
    const systemStr = copied ? copiedText : copyText;
    const copyTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNode"])(tooltipNodes[copied ? 1 : 0], systemStr);
    const ariaLabel = typeof copyTitle === 'string' ? copyTitle : systemStr;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: copyTitle
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("button", {
        type: "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-copy`, {
            [`${prefixCls}-copy-success`]: copied,
            [`${prefixCls}-copy-icon-only`]: iconOnly
        }),
        onClick: onCopy,
        "aria-label": ariaLabel,
        tabIndex: tabIndex
    }, copied ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNode"])(iconNodes[1], /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], null), true) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNode"])(iconNodes[0], btnLoading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CopyOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], null), true)));
};
const __TURBOPACK__default__export__ = CopyBtn;
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Base/Ellipsis.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EllipsisMeasure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$2$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/Children/toArray.js [app-ssr] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Base/util.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const MeasureText = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ style, children }, ref)=>{
    const spanRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, ()=>({
            isExceed: ()=>{
                const span = spanRef.current;
                return span.scrollHeight > span.clientHeight;
            },
            getHeight: ()=>spanRef.current.clientHeight
        }));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
        "aria-hidden": true,
        ref: spanRef,
        style: {
            position: 'fixed',
            display: 'block',
            left: 0,
            top: 0,
            pointerEvents: 'none',
            backgroundColor: 'rgba(255, 0, 0, 0.65)',
            ...style
        }
    }, children);
});
const getNodesLen = (nodeList)=>nodeList.reduce((totalLen, node)=>totalLen + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidText"])(node) ? String(node).length : 1), 0);
function sliceNodes(nodeList, len) {
    let currLen = 0;
    const currentNodeList = [];
    for(let i = 0; i < nodeList.length; i += 1){
        // Match to return
        if (currLen === len) {
            return currentNodeList;
        }
        const node = nodeList[i];
        const canCut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidText"])(node);
        const nodeLen = canCut ? String(node).length : 1;
        const nextLen = currLen + nodeLen;
        // Exceed but current not which means we need cut this
        // This will not happen on validate ReactElement
        if (nextLen > len) {
            const restLen = len - currLen;
            currentNodeList.push(String(node).slice(0, restLen));
            return currentNodeList;
        }
        currentNodeList.push(node);
        currLen = nextLen;
    }
    return nodeList;
}
// Measure for the `text` is exceed the `rows` or not
const STATUS_MEASURE_NONE = 0;
const STATUS_MEASURE_PREPARE = 1;
const STATUS_MEASURE_START = 2;
const STATUS_MEASURE_NEED_ELLIPSIS = 3;
const STATUS_MEASURE_NO_NEED_ELLIPSIS = 4;
const lineClipStyle = {
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical'
};
function EllipsisMeasure(props) {
    const { enableMeasure, width, text, children, rows, expanded, miscDeps, onEllipsis } = props;
    const nodeList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(text), [
        text
    ]);
    const nodeLen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>getNodesLen(nodeList), [
        text
    ]);
    // ========================= Full Content =========================
    // Used for measure only, which means it's always render as no need ellipsis
    const fullContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>children(nodeList, false), [
        text
    ]);
    // ========================= Cut Content ==========================
    const [ellipsisCutIndex, setEllipsisCutIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const cutMidRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    // ========================= NeedEllipsis =========================
    const measureWhiteSpaceRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const needEllipsisRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    // Measure for `rows-1` height, to avoid operation exceed the line height
    const descRowsEllipsisRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const symbolRowEllipsisRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const [canEllipsis, setCanEllipsis] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [needEllipsis, setNeedEllipsis] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](STATUS_MEASURE_NONE);
    const [ellipsisHeight, setEllipsisHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [parentWhiteSpace, setParentWhiteSpace] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    // Trigger start measure
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        if (enableMeasure && width && nodeLen) {
            setNeedEllipsis(STATUS_MEASURE_PREPARE);
        } else {
            setNeedEllipsis(STATUS_MEASURE_NONE);
        }
    }, [
        width,
        text,
        rows,
        enableMeasure,
        nodeList
    ]);
    // Measure process
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        if (needEllipsis === STATUS_MEASURE_PREPARE) {
            setNeedEllipsis(STATUS_MEASURE_START);
            // Parent ref `white-space`
            const nextWhiteSpace = measureWhiteSpaceRef.current && getComputedStyle(measureWhiteSpaceRef.current).whiteSpace;
            setParentWhiteSpace(nextWhiteSpace);
        } else if (needEllipsis === STATUS_MEASURE_START) {
            const isOverflow = !!needEllipsisRef.current?.isExceed();
            setNeedEllipsis(isOverflow ? STATUS_MEASURE_NEED_ELLIPSIS : STATUS_MEASURE_NO_NEED_ELLIPSIS);
            setEllipsisCutIndex(isOverflow ? [
                0,
                nodeLen
            ] : null);
            setCanEllipsis(isOverflow);
            // Get the basic height of ellipsis rows
            const baseRowsEllipsisHeight = needEllipsisRef.current?.getHeight() || 0;
            // Get the height of `rows - 1` + symbol height
            const descRowsEllipsisHeight = rows === 1 ? 0 : descRowsEllipsisRef.current?.getHeight() || 0;
            const symbolRowEllipsisHeight = symbolRowEllipsisRef.current?.getHeight() || 0;
            const maxRowsHeight = Math.max(baseRowsEllipsisHeight, // height of rows with ellipsis
            descRowsEllipsisHeight + symbolRowEllipsisHeight);
            setEllipsisHeight(maxRowsHeight + 1);
            onEllipsis(isOverflow);
        }
    }, [
        needEllipsis
    ]);
    // ========================= Cut Measure ==========================
    const cutMidIndex = ellipsisCutIndex ? Math.ceil((ellipsisCutIndex[0] + ellipsisCutIndex[1]) / 2) : 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        const [minIndex, maxIndex] = ellipsisCutIndex || [
            0,
            0
        ];
        if (minIndex !== maxIndex) {
            const midHeight = cutMidRef.current?.getHeight() || 0;
            const isOverflow = midHeight > ellipsisHeight;
            let targetMidIndex = cutMidIndex;
            if (maxIndex - minIndex === 1) {
                targetMidIndex = isOverflow ? minIndex : maxIndex;
            }
            setEllipsisCutIndex(isOverflow ? [
                minIndex,
                targetMidIndex
            ] : [
                targetMidIndex,
                maxIndex
            ]);
        }
    }, [
        ellipsisCutIndex,
        cutMidIndex
    ]);
    // ========================= Text Content =========================
    const finalContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        // Skip everything if `enableMeasure` is disabled
        if (!enableMeasure) {
            return children(nodeList, false);
        }
        if (needEllipsis !== STATUS_MEASURE_NEED_ELLIPSIS || !ellipsisCutIndex || ellipsisCutIndex[0] !== ellipsisCutIndex[1]) {
            const content = children(nodeList, false);
            // Limit the max line count to avoid scrollbar blink unless no need ellipsis
            // https://github.com/ant-design/ant-design/issues/42958
            if ([
                STATUS_MEASURE_NO_NEED_ELLIPSIS,
                STATUS_MEASURE_NONE
            ].includes(needEllipsis)) {
                return content;
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
                style: {
                    ...lineClipStyle,
                    WebkitLineClamp: rows
                }
            }, content);
        }
        return children(expanded ? nodeList : sliceNodes(nodeList, ellipsisCutIndex[0]), canEllipsis);
    }, [
        expanded,
        needEllipsis,
        ellipsisCutIndex,
        nodeList
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$2$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(miscDeps)));
    // ============================ Render ============================
    const measureStyle = {
        width,
        margin: 0,
        padding: 0,
        whiteSpace: parentWhiteSpace === 'nowrap' ? 'normal' : 'inherit'
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, finalContent, needEllipsis === STATUS_MEASURE_START && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](MeasureText, {
        style: {
            ...measureStyle,
            ...lineClipStyle,
            WebkitLineClamp: rows
        },
        ref: needEllipsisRef
    }, fullContent), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](MeasureText, {
        style: {
            ...measureStyle,
            ...lineClipStyle,
            WebkitLineClamp: rows - 1
        },
        ref: descRowsEllipsisRef
    }, fullContent), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](MeasureText, {
        style: {
            ...measureStyle,
            ...lineClipStyle,
            WebkitLineClamp: 1
        },
        ref: symbolRowEllipsisRef
    }, children([], true))), needEllipsis === STATUS_MEASURE_NEED_ELLIPSIS && ellipsisCutIndex && ellipsisCutIndex[0] !== ellipsisCutIndex[1] && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](MeasureText, {
        style: {
            ...measureStyle,
            top: 400
        },
        ref: cutMidRef
    }, children(sliceNodes(nodeList, cutMidIndex), true)), needEllipsis === STATUS_MEASURE_PREPARE && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
        style: {
            whiteSpace: 'inherit'
        },
        ref: measureWhiteSpaceRef
    }));
}
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Base/EllipsisTooltip.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/tooltip/index.js [app-ssr] (ecmascript)");
"use client";
;
;
const EllipsisTooltip = ({ enableEllipsis, isEllipsis, open, children, tooltipProps })=>{
    if (!tooltipProps?.title || !enableEllipsis) {
        return children;
    }
    const mergedOpen = open && isEllipsis;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        open: mergedOpen,
        ...tooltipProps
    }, children);
};
if ("TURBOPACK compile-time truthy", 1) {
    EllipsisTooltip.displayName = 'EllipsisTooltip';
}
const __TURBOPACK__default__export__ = EllipsisTooltip;
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Base/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$2$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EditOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ant-design+icons@6.2.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@ant-design/icons/es/icons/EditOutlined.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$resize$2d$observer$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+resize-observer@1.1.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/resize-observer/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/omit.js [app-ssr] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/Children/toArray.js [app-ssr] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-ssr] (ecmascript) <export default as useControlledState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/ref.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/_util/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$styleChecker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/Dom/styleChecker.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/locale/useLocale.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/tooltip/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Editable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Editable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useCopyClick$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/hooks/useCopyClick.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useMergedConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/hooks/useMergedConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$usePrevious$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/hooks/usePrevious.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useTooltipProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/hooks/useTooltipProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$CopyBtn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Base/CopyBtn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$Ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Base/Ellipsis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$EllipsisTooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Base/EllipsisTooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Base/util.js [app-ssr] (ecmascript)");
"use client";
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
;
function wrapperDecorations({ mark, code, underline, delete: del, strong, keyboard, italic }, content) {
    let currentContent = content;
    function wrap(tag, needed) {
        if (!needed) {
            return;
        }
        currentContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](tag, {}, currentContent);
    }
    wrap('strong', strong);
    wrap('u', underline);
    wrap('del', del);
    wrap('code', code);
    wrap('mark', mark);
    wrap('kbd', keyboard);
    wrap('i', italic);
    return currentContent;
}
const ELLIPSIS_STR = '...';
const DECORATION_PROPS = [
    'delete',
    'mark',
    'code',
    'underline',
    'strong',
    'keyboard',
    'italic'
];
const Base = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, className, style, type, disabled, children, ellipsis, editable, copyable, component, title, onMouseEnter, onMouseLeave, ...restProps } = props;
    const { getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const [textLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('Text');
    const typographyRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const editIconRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    // ============================ MISC ============================
    const prefixCls = getPrefixCls('typography', customizePrefixCls);
    const textProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(restProps, DECORATION_PROPS);
    // ========================== Editable ==========================
    const [enableEdit, editConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useMergedConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(editable);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])(false, editConfig.editing);
    const { triggerType = [
        'icon'
    ] } = editConfig;
    const triggerEdit = (edit)=>{
        if (edit) {
            editConfig.onStart?.();
        }
        setEditing(edit);
    };
    // Focus edit icon when back
    const prevEditing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$usePrevious$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(editing);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        if (!editing && prevEditing) {
            editIconRef.current?.focus();
        }
    }, [
        editing
    ]);
    const onEditClick = (e)=>{
        e?.preventDefault();
        triggerEdit(true);
    };
    const onEditChange = (value)=>{
        editConfig.onChange?.(value);
        triggerEdit(false);
    };
    const onEditCancel = ()=>{
        editConfig.onCancel?.();
        triggerEdit(false);
    };
    // ========================== Copyable ==========================
    const [enableCopy, copyConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useMergedConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(copyable);
    const { copied, copyLoading, onClick: onCopyClick } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useCopyClick$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        copyConfig,
        children
    });
    // ========================== Ellipsis ==========================
    const [isLineClampSupport, setIsLineClampSupport] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [isTextOverflowSupport, setIsTextOverflowSupport] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [isJsEllipsis, setIsJsEllipsis] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [isNativeEllipsis, setIsNativeEllipsis] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [isNativeVisible, setIsNativeVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](true);
    const [enableEllipsis, ellipsisConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useMergedConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ellipsis, {
        expandable: false,
        symbol: (isExpanded)=>isExpanded ? textLocale?.collapse : textLocale?.expand
    });
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])(ellipsisConfig.defaultExpanded || false, ellipsisConfig.expanded);
    const mergedEnableEllipsis = enableEllipsis && (!expanded || ellipsisConfig.expandable === 'collapsible');
    // Shared prop to reduce bundle size
    const { rows = 1 } = ellipsisConfig;
    const needMeasureEllipsis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>// Disable ellipsis
        mergedEnableEllipsis && (// Provide suffix
        ellipsisConfig.suffix !== undefined || ellipsisConfig.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
        ellipsisConfig.expandable || enableEdit || enableCopy), [
        mergedEnableEllipsis,
        ellipsisConfig,
        enableEdit,
        enableCopy
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        if (enableEllipsis && !needMeasureEllipsis) {
            setIsLineClampSupport((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$styleChecker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStyleSupport"])('webkitLineClamp'));
            setIsTextOverflowSupport((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$styleChecker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStyleSupport"])('textOverflow'));
        }
    }, [
        needMeasureEllipsis,
        enableEllipsis
    ]);
    const [cssEllipsis, setCssEllipsis] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](mergedEnableEllipsis);
    const canUseCssEllipsis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (needMeasureEllipsis) {
            return false;
        }
        if (rows === 1) {
            return isTextOverflowSupport;
        }
        return isLineClampSupport;
    }, [
        needMeasureEllipsis,
        isTextOverflowSupport,
        isLineClampSupport
    ]);
    // We use effect to change from css ellipsis to js ellipsis.
    // To make SSR still can see the ellipsis.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        setCssEllipsis(canUseCssEllipsis && mergedEnableEllipsis);
    }, [
        canUseCssEllipsis,
        mergedEnableEllipsis
    ]);
    const tooltipProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useTooltipProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ellipsisConfig.tooltip, editConfig.text, children);
    const needNativeEllipsisMeasure = cssEllipsis && !!tooltipProps.title;
    const isMergedEllipsis = mergedEnableEllipsis && (cssEllipsis ? needNativeEllipsisMeasure && isNativeEllipsis : isJsEllipsis);
    const cssTextOverflow = mergedEnableEllipsis && rows === 1 && cssEllipsis;
    const cssLineClamp = mergedEnableEllipsis && rows > 1 && cssEllipsis;
    // >>>>> Expand
    const onExpandClick = (e, info)=>{
        setExpanded(info.expanded);
        ellipsisConfig.onExpand?.(e, info);
    };
    const [ellipsisWidth, setEllipsisWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [isHoveringOperations, setIsHoveringOperations] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [isHoveringTypography, setIsHoveringTypography] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const onResize = ({ offsetWidth })=>{
        setEllipsisWidth(offsetWidth);
    };
    // >>>>> JS Ellipsis
    const onJsEllipsis = (jsEllipsis)=>{
        setIsJsEllipsis(jsEllipsis);
        // Trigger if changed
        if (isJsEllipsis !== jsEllipsis) {
            ellipsisConfig.onEllipsis?.(jsEllipsis);
        }
    };
    // >>>>> Native ellipsis
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const textEle = typographyRef.current;
        if (enableEllipsis && needNativeEllipsisMeasure && textEle) {
            const currentEllipsis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEleEllipsis"])(textEle);
            if (isNativeEllipsis !== currentEllipsis) {
                setIsNativeEllipsis(currentEllipsis);
            }
        }
    }, [
        enableEllipsis,
        needNativeEllipsisMeasure,
        children,
        cssLineClamp,
        isNativeVisible,
        ellipsisWidth
    ]);
    // https://github.com/ant-design/ant-design/issues/36786
    // Use IntersectionObserver to check if element is invisible
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const textEle = typographyRef.current;
        if (typeof IntersectionObserver === 'undefined' || !textEle || !needNativeEllipsisMeasure || !mergedEnableEllipsis) {
            return;
        }
        const observer = new IntersectionObserver(()=>{
            setIsNativeVisible(!!textEle.offsetParent);
        });
        observer.observe(textEle);
        return ()=>{
            observer.disconnect();
        };
    }, [
        needNativeEllipsisMeasure,
        mergedEnableEllipsis
    ]);
    // ========================== Tooltip ===========================
    const topAriaLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!enableEllipsis || cssEllipsis) {
            return undefined;
        }
        return [
            editConfig.text,
            children,
            title,
            tooltipProps.title
        ].find(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidText"]);
    }, [
        enableEllipsis,
        cssEllipsis,
        title,
        tooltipProps.title,
        isMergedEllipsis
    ]);
    // =========================== Render ===========================
    // >>>>>>>>>>> Editing input
    if (editing) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Editable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            value: editConfig.text ?? (typeof children === 'string' ? children : ''),
            onSave: onEditChange,
            onCancel: onEditCancel,
            onEnd: editConfig.onEnd,
            prefixCls: prefixCls,
            className: className,
            style: style,
            direction: direction,
            component: component,
            maxLength: editConfig.maxLength,
            autoSize: editConfig.autoSize,
            enterIcon: editConfig.enterIcon
        });
    }
    // >>>>>>>>>>> Typography
    // Expand
    const renderExpand = ()=>{
        const { expandable, symbol } = ellipsisConfig;
        return expandable ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("button", {
            type: "button",
            key: "expand",
            className: `${prefixCls}-${expanded ? 'collapse' : 'expand'}`,
            onClick: (e)=>onExpandClick(e, {
                    expanded: !expanded
                }),
            "aria-label": expanded ? textLocale.collapse : textLocale?.expand
        }, typeof symbol === 'function' ? symbol(expanded) : symbol) : null;
    };
    // Edit
    const renderEdit = ()=>{
        if (!enableEdit) {
            return;
        }
        const { icon, tooltip, tabIndex } = editConfig;
        const editTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(tooltip)[0] || textLocale?.edit;
        const ariaLabel = typeof editTitle === 'string' ? editTitle : '';
        return triggerType.includes('icon') ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            key: "edit",
            title: tooltip === false ? '' : editTitle
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("button", {
            type: "button",
            ref: editIconRef,
            className: `${prefixCls}-edit`,
            onClick: onEditClick,
            "aria-label": ariaLabel,
            tabIndex: tabIndex
        }, icon || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$6$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EditOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            role: "button"
        }))) : null;
    };
    // Copy
    const renderCopy = ()=>{
        if (!enableCopy) {
            return null;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$CopyBtn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            key: "copy",
            ...copyConfig,
            prefixCls: prefixCls,
            copied: copied,
            locale: textLocale,
            onCopy: onCopyClick,
            loading: copyLoading,
            iconOnly: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullable"])(children)
        });
    };
    const renderOperations = (canEllipsis)=>{
        const expandNode = canEllipsis && renderExpand();
        const editNode = renderEdit();
        const copyNode = renderCopy();
        if (!expandNode && !editNode && !copyNode) {
            return null;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
            key: "operations",
            className: `${prefixCls}-actions`,
            onMouseEnter: ()=>setIsHoveringOperations(true),
            onMouseLeave: ()=>setIsHoveringOperations(false)
        }, expandNode, editNode, copyNode);
    };
    const renderEllipsis = (canEllipsis)=>[
            canEllipsis && !expanded && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
                "aria-hidden": true,
                key: "ellipsis"
            }, ELLIPSIS_STR),
            ellipsisConfig.suffix,
            renderOperations(canEllipsis)
        ];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$resize$2d$observer$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: onResize,
        disabled: !mergedEnableEllipsis
    }, (resizeRef)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$EllipsisTooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            tooltipProps: tooltipProps,
            enableEllipsis: mergedEnableEllipsis,
            isEllipsis: isMergedEllipsis,
            open: isHoveringTypography && !isHoveringOperations
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onMouseEnter: (e)=>{
                setIsHoveringTypography(true);
                onMouseEnter?.(e);
            },
            onMouseLeave: (e)=>{
                setIsHoveringTypography(false);
                onMouseLeave?.(e);
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])({
                [`${prefixCls}-${type}`]: type,
                [`${prefixCls}-disabled`]: disabled,
                [`${prefixCls}-ellipsis`]: enableEllipsis,
                [`${prefixCls}-ellipsis-single-line`]: cssTextOverflow,
                [`${prefixCls}-ellipsis-multiple-line`]: cssLineClamp,
                [`${prefixCls}-link`]: component === 'a'
            }, className),
            prefixCls: customizePrefixCls,
            style: {
                ...style,
                WebkitLineClamp: cssLineClamp ? rows : undefined
            },
            component: component,
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRef"])(resizeRef, typographyRef, ref),
            direction: direction,
            onClick: triggerType.includes('text') ? onEditClick : undefined,
            "aria-label": topAriaLabel?.toString(),
            title: title,
            ...textProps
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$Ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            enableMeasure: mergedEnableEllipsis && !cssEllipsis,
            text: children,
            rows: rows,
            width: ellipsisWidth,
            onEllipsis: onJsEllipsis,
            expanded: expanded,
            miscDeps: [
                copied,
                expanded,
                copyLoading,
                enableEdit,
                enableCopy,
                textLocale
            ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$29$2e$2$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(DECORATION_PROPS.map((key)=>props[key])))
        }, (node, canEllipsis)=>wrapperDecorations(props, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, node.length > 0 && canEllipsis && !expanded && topAriaLabel ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
                key: "show-content",
                "aria-hidden": true
            }, node) : node, renderEllipsis(canEllipsis)))))));
});
const __TURBOPACK__default__export__ = Base;
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Link.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/_util/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Base/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const Link = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { ellipsis, rel, children, // @ts-expect-error: https://github.com/ant-design/ant-design/issues/26622
    navigate: _navigate, ...restProps } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Typography.Link');
        ("TURBOPACK compile-time truthy", 1) ? warning(typeof ellipsis !== 'object', 'usage', '`ellipsis` only supports boolean value.') : "TURBOPACK unreachable";
    }
    const mergedProps = {
        ...restProps,
        rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ...mergedProps,
        ref: ref,
        ellipsis: !!ellipsis,
        component: "a"
    }, children);
});
const __TURBOPACK__default__export__ = Link;
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Paragraph.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Base/index.js [app-ssr] (ecmascript)");
"use client";
;
;
const Paragraph = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { children, ...restProps } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        ...restProps,
        component: "div"
    }, children);
});
const __TURBOPACK__default__export__ = Paragraph;
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Text.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/omit.js [app-ssr] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/_util/is.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/_util/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Base/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Text = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { ellipsis, children, ...restProps } = props;
    const mergedEllipsis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPlainObject"])(ellipsis)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(ellipsis, [
                'expandable',
                'rows'
            ]);
        }
        return ellipsis;
    }, [
        ellipsis
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Typography.Text');
        ("TURBOPACK compile-time truthy", 1) ? warning(typeof ellipsis !== 'object' || !ellipsis || !('expandable' in ellipsis) && !('rows' in ellipsis), 'usage', '`ellipsis` do not support `expandable` or `rows` props.') : "TURBOPACK unreachable";
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        ...restProps,
        ellipsis: mergedEllipsis,
        component: "span"
    }, children);
});
const __TURBOPACK__default__export__ = Text;
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Title.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/_util/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Base/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const TITLE_ELE_LIST = [
    1,
    2,
    3,
    4,
    5
];
const Title = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { level = 1, children, ...restProps } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Typography.Title');
        ("TURBOPACK compile-time truthy", 1) ? warning(TITLE_ELE_LIST.includes(level), 'usage', 'Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.') : "TURBOPACK unreachable";
    }
    const component = TITLE_ELE_LIST.includes(level) ? `h${level}` : `h1`;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        ...restProps,
        component: component
    }, children);
});
const __TURBOPACK__default__export__ = Title;
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Paragraph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Paragraph.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Title$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Title.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/Typography.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Typography = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Typography.Text = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Typography.Link = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Typography.Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Title$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Typography.Paragraph = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Paragraph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Typography;
}),
"[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/index.js [app-ssr] (ecmascript) <export default as Typography>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Typography",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$6$2e$3$2e$7_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/antd@6.3.7_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/antd/es/typography/index.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=0e9w_antd_es_typography_0ewvjvc._.js.map