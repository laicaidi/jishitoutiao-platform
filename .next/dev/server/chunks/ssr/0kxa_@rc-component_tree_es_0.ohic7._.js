module.exports = [
"[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/contextTypes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TreeContext",
    ()=>TreeContext,
    "UnstableContext",
    ()=>UnstableContext
]);
/**
 * Webpack has bug for import loop, which is not the same behavior as ES module.
 * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const TreeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const UnstableContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({});
}),
"[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/Indent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const Indent = ({ prefixCls, level, isStart, isEnd })=>{
    const baseClassName = `${prefixCls}-indent-unit`;
    const list = [];
    for(let i = 0; i < level; i += 1){
        list.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
            key: i,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(baseClassName, {
                [`${baseClassName}-start`]: isStart[i],
                [`${baseClassName}-end`]: isEnd[i]
            })
        }));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
        "aria-hidden": "true",
        className: `${prefixCls}-indent`
    }, list);
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"](Indent);
}),
"[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/utils/keyUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getEntity
]);
function getEntity(keyEntities, key) {
    return keyEntities[key];
}
}),
"[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/utils/treeUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertDataToEntities",
    ()=>convertDataToEntities,
    "convertNodePropsToEventData",
    ()=>convertNodePropsToEventData,
    "convertTreeToData",
    ()=>convertTreeToData,
    "fillFieldNames",
    ()=>fillFieldNames,
    "flattenTreeData",
    ()=>flattenTreeData,
    "getKey",
    ()=>getKey,
    "getPosition",
    ()=>getPosition,
    "getTreeNodeProps",
    ()=>getTreeNodeProps,
    "isLeafNode",
    ()=>isLeafNode,
    "isTreeNode",
    ()=>isTreeNode,
    "traverseDataNodes",
    ()=>traverseDataNodes,
    "warningWithoutKey",
    ()=>warningWithoutKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/Children/toArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/omit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/utils/keyUtil.js [app-ssr] (ecmascript)");
;
;
;
;
function getPosition(level, index) {
    return `${level}-${index}`;
}
function isTreeNode(node) {
    return node && node.type && node.type.isTreeNode;
}
function getKey(key, pos) {
    if (key !== null && key !== undefined) {
        return key;
    }
    return pos;
}
function fillFieldNames(fieldNames) {
    const { title, _title, key, children } = fieldNames || {};
    const mergedTitle = title || 'title';
    return {
        title: mergedTitle,
        _title: _title || [
            mergedTitle
        ],
        key: key || 'key',
        children: children || 'children'
    };
}
function warningWithoutKey(treeData, fieldNames) {
    const keys = new Map();
    function dig(list, path = '') {
        (list || []).forEach((treeNode)=>{
            const key = treeNode[fieldNames.key];
            const children = treeNode[fieldNames.children];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(key !== null && key !== undefined, `Tree node must have a certain key: [${path}${key}]`);
            const recordKey = String(key);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!keys.has(recordKey) || key === null || key === undefined, `Same 'key' exist in the Tree: ${recordKey}`);
            keys.set(recordKey, true);
            dig(children, `${path}${recordKey} > `);
        });
    }
    dig(treeData);
}
function convertTreeToData(rootNodes) {
    function dig(node) {
        const treeNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node);
        return treeNodes.map((treeNode)=>{
            // Filter invalidate node
            if (!isTreeNode(treeNode)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!treeNode, 'Tree/TreeNode can only accept TreeNode as children.');
                return null;
            }
            const { key } = treeNode;
            const { children, ...rest } = treeNode.props;
            const dataNode = {
                key: key,
                ...rest
            };
            const parsedChildren = dig(children);
            if (parsedChildren.length) {
                dataNode.children = parsedChildren;
            }
            return dataNode;
        }).filter((dataNode)=>dataNode);
    }
    return dig(rootNodes);
}
function flattenTreeData(treeNodeList, expandedKeys, fieldNames) {
    const { _title: fieldTitles, key: fieldKey, children: fieldChildren } = fillFieldNames(fieldNames);
    const expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
    const flattenList = [];
    function dig(list, parent = null) {
        return list.map((treeNode, index)=>{
            const pos = getPosition(parent ? parent.pos : '0', index);
            const mergedKey = getKey(treeNode[fieldKey], pos);
            // Pick matched title in field title list
            let mergedTitle;
            for(let i = 0; i < fieldTitles.length; i += 1){
                const fieldTitle = fieldTitles[i];
                if (treeNode[fieldTitle] !== undefined) {
                    mergedTitle = treeNode[fieldTitle];
                    break;
                }
            }
            // Add FlattenDataNode into list
            // We use `Object.assign` here to save perf since babel's `objectSpread` has perf issue
            const flattenNode = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(treeNode, [
                ...fieldTitles,
                fieldKey,
                fieldChildren
            ]), {
                title: mergedTitle,
                key: mergedKey,
                parent,
                pos,
                children: null,
                data: treeNode,
                isStart: [
                    ...parent ? parent.isStart : [],
                    index === 0
                ],
                isEnd: [
                    ...parent ? parent.isEnd : [],
                    index === list.length - 1
                ]
            });
            flattenList.push(flattenNode);
            // Loop treeNode children
            if (expandedKeys === true || expandedKeySet.has(mergedKey)) {
                flattenNode.children = dig(treeNode[fieldChildren] || [], flattenNode);
            } else {
                flattenNode.children = [];
            }
            return flattenNode;
        });
    }
    dig(treeNodeList);
    return flattenList;
}
function traverseDataNodes(dataNodes, callback, // To avoid too many params, let use config instead of origin param
config) {
    let mergedConfig = {};
    if (typeof config === 'object') {
        mergedConfig = config;
    } else {
        mergedConfig = {
            externalGetKey: config
        };
    }
    mergedConfig = mergedConfig || {};
    // Init config
    const { childrenPropName, externalGetKey, fieldNames } = mergedConfig;
    const { key: fieldKey, children: fieldChildren } = fillFieldNames(fieldNames);
    const mergeChildrenPropName = childrenPropName || fieldChildren;
    // Get keys
    let syntheticGetKey;
    if (externalGetKey) {
        if (typeof externalGetKey === 'string') {
            syntheticGetKey = (node)=>node[externalGetKey];
        } else if (typeof externalGetKey === 'function') {
            syntheticGetKey = (node)=>externalGetKey(node);
        }
    } else {
        syntheticGetKey = (node, pos)=>getKey(node[fieldKey], pos);
    }
    // Process
    function processNode(node, index, parent, pathNodes) {
        const children = node ? node[mergeChildrenPropName] : dataNodes;
        const pos = node ? getPosition(parent.pos, index) : '0';
        const connectNodes = node ? [
            ...pathNodes,
            node
        ] : [];
        // Process node if is not root
        if (node) {
            const key = syntheticGetKey(node, pos);
            const data = {
                node,
                index,
                pos,
                key,
                parentPos: parent.node ? parent.pos : null,
                level: parent.level + 1,
                nodes: connectNodes
            };
            callback(data);
        }
        // Process children node
        if (children) {
            children.forEach((subNode, subIndex)=>{
                processNode(subNode, subIndex, {
                    node,
                    pos,
                    level: parent ? parent.level + 1 : -1
                }, connectNodes);
            });
        }
    }
    processNode(null);
}
function convertDataToEntities(dataNodes, { initWrapper, processEntity, onProcessFinished, externalGetKey, childrenPropName, fieldNames } = {}, /** @deprecated Use `config.externalGetKey` instead */ legacyExternalGetKey) {
    // Init config
    const mergedExternalGetKey = externalGetKey || legacyExternalGetKey;
    const posEntities = {};
    const keyEntities = {};
    let wrapper = {
        posEntities,
        keyEntities
    };
    if (initWrapper) {
        wrapper = initWrapper(wrapper) || wrapper;
    }
    traverseDataNodes(dataNodes, (item)=>{
        const { node, index, pos, key, parentPos, level, nodes } = item;
        const entity = {
            node,
            nodes,
            index,
            key,
            pos,
            level
        };
        const mergedKey = getKey(key, pos);
        posEntities[pos] = entity;
        keyEntities[mergedKey] = entity;
        // Fill children
        entity.parent = posEntities[parentPos];
        if (entity.parent) {
            entity.parent.children = entity.parent.children || [];
            entity.parent.children.push(entity);
        }
        if (processEntity) {
            processEntity(entity, wrapper);
        }
    }, {
        externalGetKey: mergedExternalGetKey,
        childrenPropName,
        fieldNames
    });
    if (onProcessFinished) {
        onProcessFinished(wrapper);
    }
    return wrapper;
}
function isLeafNode(isLeaf, loadData, hasChildren, loaded) {
    if (isLeaf === false) {
        return false;
    }
    return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
}
function getTreeNodeProps(key, { expandedKeys, selectedKeys, loadedKeys, loadingKeys, checkedKeys, halfCheckedKeys, dragOverNodeKey, dropPosition, keyEntities }) {
    const entity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, key);
    const treeNodeProps = {
        eventKey: key,
        expanded: expandedKeys.indexOf(key) !== -1,
        selected: selectedKeys.indexOf(key) !== -1,
        loaded: loadedKeys.indexOf(key) !== -1,
        loading: loadingKeys.indexOf(key) !== -1,
        checked: checkedKeys.indexOf(key) !== -1,
        halfChecked: halfCheckedKeys.indexOf(key) !== -1,
        pos: String(entity ? entity.pos : ''),
        // [Legacy] Drag props
        // Since the interaction of drag is changed, the semantic of the props are
        // not accuracy, I think it should be finally removed
        dragOver: dragOverNodeKey === key && dropPosition === 0,
        dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
        dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
    };
    return treeNodeProps;
}
function convertNodePropsToEventData(props) {
    const { data, expanded, selected, checked, loaded, loading, halfChecked, dragOver, dragOverGapTop, dragOverGapBottom, pos, active, eventKey } = props;
    const eventData = {
        ...data,
        expanded,
        selected,
        checked,
        loaded,
        loading,
        halfChecked,
        dragOver,
        dragOverGapTop,
        dragOverGapBottom,
        pos,
        active,
        key: eventKey
    };
    if (!('props' in eventData)) {
        Object.defineProperty(eventData, 'props', {
            get () {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.');
                return props;
            }
        });
    }
    return eventData;
}
}),
"[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/TreeNode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/pickAttrs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$contextTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/contextTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$Indent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/Indent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/utils/keyUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/utils/treeUtil.js [app-ssr] (ecmascript)");
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
const ICON_OPEN = 'open';
const ICON_CLOSE = 'close';
const defaultTitle = '---';
const TreeNode = (props)=>{
    const { eventKey, className, style, dragOver, dragOverGapTop, dragOverGapBottom, isLeaf, isStart, isEnd, expanded, selected, checked, halfChecked, loading, domRef, active, data, onMouseMove, selectable, treeId, ...otherProps } = props;
    const nodeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getId"])(treeId, eventKey);
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$contextTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TreeContext"]);
    const { classNames: treeClassNames, styles } = context || {};
    const unstableContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$contextTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstableContext"]);
    const selectHandleRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const [dragNodeHighlight, setDragNodeHighlight] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    // ======= State: Disabled State =======
    const isDisabled = !!(context.disabled || props.disabled || unstableContext.nodeDisabled?.(data));
    const isCheckable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        // Return false if tree or treeNode is not checkable
        if (!context.checkable || props.checkable === false) {
            return false;
        }
        return context.checkable;
    }, [
        context.checkable,
        props.checkable
    ]);
    // ======= Event Handlers: Selection and Check =======
    const onSelect = (e)=>{
        if (isDisabled) {
            return;
        }
        context.onNodeSelect(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(props));
    };
    const onCheck = (e)=>{
        if (isDisabled) {
            return;
        }
        if (!isCheckable || props.disableCheckbox) {
            return;
        }
        context.onNodeCheck(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(props), !checked);
    };
    // ======= State: Selectable Check =======
    const isSelectable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        // Ignore when selectable is undefined or null
        if (typeof selectable === 'boolean') {
            return selectable;
        }
        return context.selectable;
    }, [
        selectable,
        context.selectable
    ]);
    const onSelectorClick = (e)=>{
        // Click trigger before select/check operation
        context.onNodeClick(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(props));
        if (isSelectable) {
            onSelect(e);
        } else {
            onCheck(e);
        }
    };
    const onSelectorDoubleClick = (e)=>{
        context.onNodeDoubleClick(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(props));
    };
    const onMouseEnter = (e)=>{
        context.onNodeMouseEnter(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(props));
    };
    const onMouseLeave = (e)=>{
        context.onNodeMouseLeave(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(props));
    };
    const onContextMenu = (e)=>{
        context.onNodeContextMenu(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(props));
    };
    // ======= Drag: Drag Enabled =======
    const isDraggable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        return !!(context.draggable && (!context.draggable.nodeDraggable || context.draggable.nodeDraggable(data)));
    }, [
        context.draggable,
        data
    ]);
    // ======= Drag: Drag Event Handlers =======
    const onDragStart = (e)=>{
        e.stopPropagation();
        setDragNodeHighlight(true);
        context.onNodeDragStart(e, props);
        try {
            // ie throw error
            // firefox-need-it
            e.dataTransfer.setData('text/plain', '');
        } catch  {
        // empty
        }
    };
    const onDragEnter = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        context.onNodeDragEnter(e, props);
    };
    const onDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        context.onNodeDragOver(e, props);
    };
    const onDragLeave = (e)=>{
        e.stopPropagation();
        context.onNodeDragLeave(e, props);
    };
    const onDragEnd = (e)=>{
        e.stopPropagation();
        setDragNodeHighlight(false);
        context.onNodeDragEnd(e, props);
    };
    const onDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragNodeHighlight(false);
        context.onNodeDrop(e, props);
    };
    // ======= Expand: Node Expansion =======
    const onExpand = (e)=>{
        if (loading) {
            return;
        }
        context.onNodeExpand(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(props));
    };
    // ======= State: Has Children =======
    const hasChildren = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        const { children } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(context.keyEntities, eventKey) || {};
        return Boolean((children || []).length);
    }, [
        context.keyEntities,
        eventKey
    ]);
    // ======= State: Leaf Check =======
    const memoizedIsLeaf = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLeafNode"])(isLeaf, context.loadData, hasChildren, props.loaded);
    }, [
        isLeaf,
        context.loadData,
        hasChildren,
        props.loaded
    ]);
    // ============== Effect ==============
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        // Load data to avoid default expanded tree without data
        if (loading) {
            return;
        }
        // read from state to avoid loadData at same time
        if (typeof context.loadData === 'function' && expanded && !memoizedIsLeaf && !props.loaded) {
            // We needn't reload data when has children in sync logic
            // It's only needed in node expanded
            context.onNodeLoad((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(props));
        }
    }, [
        loading,
        context.loadData,
        context.onNodeLoad,
        expanded,
        memoizedIsLeaf,
        props
    ]);
    // ==================== Render: Drag Handler ====================
    const dragHandlerNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (!context.draggable?.icon) {
            return null;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: `${context.prefixCls}-draggable-icon`
        }, context.draggable.icon);
    }, [
        context.draggable
    ]);
    // ====================== Render: Switcher ======================
    const renderSwitcherIconDom = (isInternalLeaf)=>{
        const switcherIcon = props.switcherIcon || context.switcherIcon;
        // if switcherIconDom is null, no render switcher span
        if (typeof switcherIcon === 'function') {
            return switcherIcon({
                ...props,
                isLeaf: isInternalLeaf
            });
        }
        return switcherIcon;
    };
    // Switcher
    const renderSwitcher = ()=>{
        if (memoizedIsLeaf) {
            // if switcherIconDom is null, no render switcher span
            const switcherIconDom = renderSwitcherIconDom(true);
            return switcherIconDom !== false ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(`${context.prefixCls}-switcher`, `${context.prefixCls}-switcher-noop`)
            }, switcherIconDom) : null;
        }
        const switcherIconDom = renderSwitcherIconDom(false);
        return switcherIconDom !== false ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            onClick: onExpand,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(`${context.prefixCls}-switcher`, `${context.prefixCls}-switcher_${expanded ? ICON_OPEN : ICON_CLOSE}`)
        }, switcherIconDom) : null;
    };
    // ====================== Checkbox ======================
    const checkboxNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (!isCheckable) {
            return null;
        }
        // [Legacy] Custom element should be separate with `checkable` in future
        const $custom = typeof isCheckable !== 'boolean' ? isCheckable : null;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(`${context.prefixCls}-checkbox`, {
                [`${context.prefixCls}-checkbox-checked`]: checked,
                [`${context.prefixCls}-checkbox-indeterminate`]: !checked && halfChecked,
                [`${context.prefixCls}-checkbox-disabled`]: isDisabled || props.disableCheckbox
            }),
            onClick: onCheck,
            role: "checkbox",
            "aria-checked": halfChecked ? 'mixed' : checked,
            "aria-disabled": isDisabled || props.disableCheckbox,
            "aria-labelledby": nodeId
        }, $custom);
    }, [
        isCheckable,
        checked,
        halfChecked,
        isDisabled,
        props.disableCheckbox,
        nodeId
    ]);
    // ============== State: Node State (Open/Close) ==============
    const nodeState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (memoizedIsLeaf) {
            return null;
        }
        return expanded ? ICON_OPEN : ICON_CLOSE;
    }, [
        memoizedIsLeaf,
        expanded
    ]);
    // ==================== Render: Title + Icon ====================
    const iconNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(treeClassNames?.itemIcon, `${context.prefixCls}-iconEle`, `${context.prefixCls}-icon__${nodeState || 'docu'}`, {
                [`${context.prefixCls}-icon_loading`]: loading
            }),
            style: styles?.itemIcon
        });
    }, [
        context.prefixCls,
        nodeState,
        loading
    ]);
    // =================== Drop Indicator ===================
    const dropIndicatorNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        const rootDraggable = Boolean(context.draggable);
        // allowDrop is calculated in Tree.tsx, there is no need for calc it here
        const showIndicator = !props.disabled && rootDraggable && context.dragOverNodeKey === eventKey;
        if (!showIndicator) {
            return null;
        }
        return context.dropIndicatorRender({
            dropPosition: context.dropPosition,
            dropLevelOffset: context.dropLevelOffset,
            indent: context.indent,
            prefixCls: context.prefixCls,
            direction: context.direction
        });
    }, [
        context.dropPosition,
        context.dropLevelOffset,
        context.indent,
        context.prefixCls,
        context.direction,
        context.draggable,
        context.dragOverNodeKey,
        context.dropIndicatorRender
    ]);
    // Icon + Title
    const selectorNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        const { title = defaultTitle } = props;
        const wrapClass = `${context.prefixCls}-node-content-wrapper`;
        // Icon - Still show loading icon when loading without showIcon
        let $icon;
        if (context.showIcon) {
            const currentIcon = props.icon || context.icon;
            $icon = currentIcon ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(treeClassNames?.itemIcon, `${context.prefixCls}-iconEle`, `${context.prefixCls}-icon__customize`),
                style: styles?.itemIcon
            }, typeof currentIcon === 'function' ? currentIcon(props) : currentIcon) : iconNode;
        } else if (context.loadData && loading) {
            $icon = iconNode;
        }
        // Title
        let titleNode;
        if (typeof title === 'function') {
            titleNode = title(data);
        } else if (context.titleRender) {
            titleNode = context.titleRender(data);
        } else {
            titleNode = title;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            ref: selectHandleRef,
            title: typeof title === 'string' ? title : '',
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(wrapClass, `${wrapClass}-${nodeState || 'normal'}`, {
                [`${context.prefixCls}-node-selected`]: !isDisabled && (selected || dragNodeHighlight)
            }),
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onContextMenu: onContextMenu,
            onClick: onSelectorClick,
            onDoubleClick: onSelectorDoubleClick
        }, $icon, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(`${context.prefixCls}-title`, treeClassNames?.itemTitle),
            style: styles?.itemTitle
        }, titleNode), dropIndicatorNode);
    }, [
        context.prefixCls,
        context.showIcon,
        props,
        context.icon,
        iconNode,
        context.titleRender,
        data,
        nodeState,
        onMouseEnter,
        onMouseLeave,
        onContextMenu,
        onSelectorClick,
        onSelectorDoubleClick
    ]);
    const dataOrAriaAttributeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(otherProps, {
        aria: true,
        data: true
    });
    const { level } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(context.keyEntities, eventKey) || {};
    const isEndNode = isEnd[isEnd.length - 1];
    const draggableWithoutDisabled = !isDisabled && isDraggable;
    const dragging = context.draggingNodeKey === eventKey;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", _extends({
        ref: domRef,
        role: "treeitem",
        id: nodeId,
        "aria-expanded": memoizedIsLeaf ? undefined : expanded,
        "aria-selected": isSelectable && !isDisabled ? selected : undefined,
        "aria-checked": isCheckable && !isDisabled ? halfChecked ? 'mixed' : checked : undefined,
        "aria-disabled": isDisabled,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(className, `${context.prefixCls}-treenode`, treeClassNames?.item, {
            [`${context.prefixCls}-treenode-disabled`]: isDisabled,
            [`${context.prefixCls}-treenode-switcher-${expanded ? 'open' : 'close'}`]: !isLeaf,
            [`${context.prefixCls}-treenode-checkbox-checked`]: checked,
            [`${context.prefixCls}-treenode-checkbox-indeterminate`]: halfChecked,
            [`${context.prefixCls}-treenode-selected`]: selected,
            [`${context.prefixCls}-treenode-loading`]: loading,
            [`${context.prefixCls}-treenode-active`]: active,
            [`${context.prefixCls}-treenode-leaf-last`]: isEndNode,
            [`${context.prefixCls}-treenode-draggable`]: isDraggable,
            dragging,
            'drop-target': context.dropTargetKey === eventKey,
            'drop-container': context.dropContainerKey === eventKey,
            'drag-over': !isDisabled && dragOver,
            'drag-over-gap-top': !isDisabled && dragOverGapTop,
            'drag-over-gap-bottom': !isDisabled && dragOverGapBottom,
            'filter-node': context.filterTreeNode?.((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(props)),
            [`${context.prefixCls}-treenode-leaf`]: memoizedIsLeaf
        }),
        style: {
            ...style,
            ...styles?.item
        },
        draggable: draggableWithoutDisabled,
        onDragStart: draggableWithoutDisabled ? onDragStart : undefined,
        onDragEnter: isDraggable ? onDragEnter : undefined,
        onDragOver: isDraggable ? onDragOver : undefined,
        onDragLeave: isDraggable ? onDragLeave : undefined,
        onDrop: isDraggable ? onDrop : undefined,
        onDragEnd: isDraggable ? onDragEnd : undefined,
        onMouseMove: onMouseMove
    }, dataOrAriaAttributeProps), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$Indent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: context.prefixCls,
        level: level,
        isStart: isStart,
        isEnd: isEnd
    }), dragHandlerNode, renderSwitcher(), checkboxNode, selectorNode);
};
TreeNode.isTreeNode = 1;
if ("TURBOPACK compile-time truthy", 1) {
    TreeNode.displayName = 'TreeNode';
}
const __TURBOPACK__default__export__ = TreeNode;
}),
"[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/util.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrAdd",
    ()=>arrAdd,
    "arrDel",
    ()=>arrDel,
    "calcDropPosition",
    ()=>calcDropPosition,
    "calcSelectedKeys",
    ()=>calcSelectedKeys,
    "conductExpandParent",
    ()=>conductExpandParent,
    "convertDataToTree",
    ()=>convertDataToTree,
    "getDragChildrenKeys",
    ()=>getDragChildrenKeys,
    "isFirstChild",
    ()=>isFirstChild,
    "isLastChild",
    ()=>isLastChild,
    "parseCheckedKeys",
    ()=>parseCheckedKeys,
    "posToArr",
    ()=>posToArr
]);
/* eslint-disable no-lonely-if */ /**
 * Legacy code. Should avoid to use if you are new to import these code.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/TreeNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/utils/keyUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/utils/treeUtil.js [app-ssr] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
function arrDel(list, value) {
    if (!list) return [];
    const clone = list.slice();
    const index = clone.indexOf(value);
    if (index >= 0) {
        clone.splice(index, 1);
    }
    return clone;
}
function arrAdd(list, value) {
    const clone = (list || []).slice();
    if (clone.indexOf(value) === -1) {
        clone.push(value);
    }
    return clone;
}
function posToArr(pos) {
    return pos.split('-');
}
function getDragChildrenKeys(dragNodeKey, keyEntities) {
    // not contains self
    // self for left or right drag
    const dragChildrenKeys = [];
    const entity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, dragNodeKey);
    function dig(list = []) {
        list.forEach(({ key, children })=>{
            dragChildrenKeys.push(key);
            dig(children);
        });
    }
    dig(entity.children);
    return dragChildrenKeys;
}
function isLastChild(treeNodeEntity) {
    if (treeNodeEntity.parent) {
        const posArr = posToArr(treeNodeEntity.pos);
        return Number(posArr[posArr.length - 1]) === treeNodeEntity.parent.children.length - 1;
    }
    return false;
}
function isFirstChild(treeNodeEntity) {
    const posArr = posToArr(treeNodeEntity.pos);
    return Number(posArr[posArr.length - 1]) === 0;
}
function calcDropPosition(event, dragNodeProps, targetNodeProps, indent, startMousePosition, allowDrop, flattenedNodes, keyEntities, expandKeys, direction) {
    const { clientX, clientY } = event;
    const { top, height } = event.target.getBoundingClientRect();
    // optional chain for testing
    const horizontalMouseOffset = (direction === 'rtl' ? -1 : 1) * ((startMousePosition?.x || 0) - clientX);
    const rawDropLevelOffset = (horizontalMouseOffset - 12) / indent;
    // Filter the expanded keys to exclude the node that not has children currently (like async nodes).
    const filteredExpandKeys = expandKeys.filter((key)=>keyEntities[key]?.children?.length);
    // find abstract drop node by horizontal offset
    let abstractDropNodeEntity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, targetNodeProps.eventKey);
    if (clientY < top + height / 2) {
        // first half, set abstract drop node to previous node
        const nodeIndex = flattenedNodes.findIndex((flattenedNode)=>flattenedNode.key === abstractDropNodeEntity.key);
        const prevNodeIndex = nodeIndex <= 0 ? 0 : nodeIndex - 1;
        const prevNodeKey = flattenedNodes[prevNodeIndex].key;
        abstractDropNodeEntity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, prevNodeKey);
    }
    const initialAbstractDropNodeKey = abstractDropNodeEntity.key;
    const abstractDragOverEntity = abstractDropNodeEntity;
    const dragOverNodeKey = abstractDropNodeEntity.key;
    let dropPosition = 0;
    let dropLevelOffset = 0;
    // Only allow cross level drop when dragging on a non-expanded node
    if (!filteredExpandKeys.includes(initialAbstractDropNodeKey)) {
        for(let i = 0; i < rawDropLevelOffset; i += 1){
            if (isLastChild(abstractDropNodeEntity)) {
                abstractDropNodeEntity = abstractDropNodeEntity.parent;
                dropLevelOffset += 1;
            } else {
                break;
            }
        }
    }
    const abstractDragDataNode = dragNodeProps.data;
    const abstractDropDataNode = abstractDropNodeEntity.node;
    let dropAllowed = true;
    if (isFirstChild(abstractDropNodeEntity) && abstractDropNodeEntity.level === 0 && clientY < top + height / 2 && allowDrop({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: -1
    }) && abstractDropNodeEntity.key === targetNodeProps.eventKey) {
        // first half of first node in first level
        dropPosition = -1;
    } else if ((abstractDragOverEntity.children || []).length && filteredExpandKeys.includes(dragOverNodeKey)) {
        // drop on expanded node
        // only allow drop inside
        if (allowDrop({
            dragNode: abstractDragDataNode,
            dropNode: abstractDropDataNode,
            dropPosition: 0
        })) {
            dropPosition = 0;
        } else {
            dropAllowed = false;
        }
    } else if (dropLevelOffset === 0) {
        if (rawDropLevelOffset > -1.5) {
            // | Node     | <- abstractDropNode
            // | -^-===== | <- mousePosition
            // 1. try drop after
            // 2. do not allow drop
            if (allowDrop({
                dragNode: abstractDragDataNode,
                dropNode: abstractDropDataNode,
                dropPosition: 1
            })) {
                dropPosition = 1;
            } else {
                dropAllowed = false;
            }
        } else {
            // | Node     | <- abstractDropNode
            // | ---==^== | <- mousePosition
            // whether it has children or doesn't has children
            // always
            // 1. try drop inside
            // 2. try drop after
            // 3. do not allow drop
            if (allowDrop({
                dragNode: abstractDragDataNode,
                dropNode: abstractDropDataNode,
                dropPosition: 0
            })) {
                dropPosition = 0;
            } else if (allowDrop({
                dragNode: abstractDragDataNode,
                dropNode: abstractDropDataNode,
                dropPosition: 1
            })) {
                dropPosition = 1;
            } else {
                dropAllowed = false;
            }
        }
    } else {
        // | Node1 | <- abstractDropNode
        //      |  Node2  |
        // --^--|----=====| <- mousePosition
        // 1. try insert after Node1
        // 2. do not allow drop
        if (allowDrop({
            dragNode: abstractDragDataNode,
            dropNode: abstractDropDataNode,
            dropPosition: 1
        })) {
            dropPosition = 1;
        } else {
            dropAllowed = false;
        }
    }
    return {
        dropPosition,
        dropLevelOffset,
        dropTargetKey: abstractDropNodeEntity.key,
        dropTargetPos: abstractDropNodeEntity.pos,
        dragOverNodeKey,
        dropContainerKey: dropPosition === 0 ? null : abstractDropNodeEntity.parent?.key || null,
        dropAllowed
    };
}
function calcSelectedKeys(selectedKeys, props) {
    if (!selectedKeys) return undefined;
    const { multiple } = props;
    if (multiple) {
        return selectedKeys.slice();
    }
    if (selectedKeys.length) {
        return [
            selectedKeys[0]
        ];
    }
    return selectedKeys;
}
const internalProcessProps = (props)=>props;
function convertDataToTree(treeData, processor) {
    if (!treeData) return [];
    const { processProps = internalProcessProps } = processor || {};
    const list = Array.isArray(treeData) ? treeData : [
        treeData
    ];
    return list.map(({ children, ...props })=>{
        const childrenNodes = convertDataToTree(children, processor);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], _extends({
            key: props.key
        }, processProps(props)), childrenNodes);
    });
}
function parseCheckedKeys(keys) {
    if (!keys) {
        return null;
    }
    // Convert keys to object format
    let keyProps;
    if (Array.isArray(keys)) {
        // [Legacy] Follow the api doc
        keyProps = {
            checkedKeys: keys,
            halfCheckedKeys: undefined
        };
    } else if (typeof keys === 'object') {
        keyProps = {
            checkedKeys: keys.checked || undefined,
            halfCheckedKeys: keys.halfChecked || undefined
        };
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, '`checkedKeys` is not an array or an object');
        return null;
    }
    return keyProps;
}
function conductExpandParent(keyList, keyEntities) {
    const expandedKeys = new Set();
    function conductUp(key) {
        if (expandedKeys.has(key)) return;
        const entity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, key);
        if (!entity) return;
        expandedKeys.add(key);
        const { parent, node } = entity;
        if (node.disabled) return;
        if (parent) {
            conductUp(parent.key);
        }
    }
    (keyList || []).forEach((key)=>{
        conductUp(key);
    });
    return [
        ...expandedKeys
    ];
}
}),
"[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/utils/conductUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "conductCheck",
    ()=>conductCheck,
    "isCheckDisabled",
    ()=>isCheckDisabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/utils/keyUtil.js [app-ssr] (ecmascript)");
;
;
function removeFromCheckedKeys(halfCheckedKeys, checkedKeys) {
    const filteredKeys = new Set();
    halfCheckedKeys.forEach((key)=>{
        if (!checkedKeys.has(key)) {
            filteredKeys.add(key);
        }
    });
    return filteredKeys;
}
function isCheckDisabled(node) {
    const { disabled, disableCheckbox, checkable } = node || {};
    return !!(disabled || disableCheckbox) || checkable === false;
}
// Fill miss keys
function fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
    const checkedKeys = new Set(keys);
    const halfCheckedKeys = new Set();
    // Add checked keys top to bottom
    for(let level = 0; level <= maxLevel; level += 1){
        const entities = levelEntities.get(level) || new Set();
        entities.forEach((entity)=>{
            const { key, node, children = [] } = entity;
            if (checkedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
                children.filter((childEntity)=>!syntheticGetCheckDisabled(childEntity.node)).forEach((childEntity)=>{
                    checkedKeys.add(childEntity.key);
                });
            }
        });
    }
    // Add checked keys from bottom to top
    const visitedKeys = new Set();
    for(let level = maxLevel; level >= 0; level -= 1){
        const entities = levelEntities.get(level) || new Set();
        entities.forEach((entity)=>{
            const { parent, node } = entity;
            // Skip if no need to check
            if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
                return;
            }
            // Skip if parent is disabled
            if (syntheticGetCheckDisabled(entity.parent.node)) {
                visitedKeys.add(parent.key);
                return;
            }
            let allChecked = true;
            let partialChecked = false;
            (parent.children || []).filter((childEntity)=>!syntheticGetCheckDisabled(childEntity.node)).forEach(({ key })=>{
                const checked = checkedKeys.has(key);
                if (allChecked && !checked) {
                    allChecked = false;
                }
                if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
                    partialChecked = true;
                }
            });
            if (allChecked) {
                checkedKeys.add(parent.key);
            }
            if (partialChecked) {
                halfCheckedKeys.add(parent.key);
            }
            visitedKeys.add(parent.key);
        });
    }
    return {
        checkedKeys: Array.from(checkedKeys),
        halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
    };
}
// Remove useless key
function cleanConductCheck(keys, halfKeys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
    const checkedKeys = new Set(keys);
    let halfCheckedKeys = new Set(halfKeys);
    // Remove checked keys from top to bottom
    for(let level = 0; level <= maxLevel; level += 1){
        const entities = levelEntities.get(level) || new Set();
        entities.forEach((entity)=>{
            const { key, node, children = [] } = entity;
            if (!checkedKeys.has(key) && !halfCheckedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
                children.filter((childEntity)=>!syntheticGetCheckDisabled(childEntity.node)).forEach((childEntity)=>{
                    checkedKeys.delete(childEntity.key);
                });
            }
        });
    }
    // Remove checked keys form bottom to top
    halfCheckedKeys = new Set();
    const visitedKeys = new Set();
    for(let level = maxLevel; level >= 0; level -= 1){
        const entities = levelEntities.get(level) || new Set();
        entities.forEach((entity)=>{
            const { parent, node } = entity;
            // Skip if no need to check
            if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
                return;
            }
            // Skip if parent is disabled
            if (syntheticGetCheckDisabled(entity.parent.node)) {
                visitedKeys.add(parent.key);
                return;
            }
            let allChecked = true;
            let partialChecked = false;
            (parent.children || []).filter((childEntity)=>!syntheticGetCheckDisabled(childEntity.node)).forEach(({ key })=>{
                const checked = checkedKeys.has(key);
                if (allChecked && !checked) {
                    allChecked = false;
                }
                if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
                    partialChecked = true;
                }
            });
            if (!allChecked) {
                checkedKeys.delete(parent.key);
            }
            if (partialChecked) {
                halfCheckedKeys.add(parent.key);
            }
            visitedKeys.add(parent.key);
        });
    }
    return {
        checkedKeys: Array.from(checkedKeys),
        halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
    };
}
function conductCheck(keyList, checked, keyEntities, getCheckDisabled) {
    const warningMissKeys = [];
    let syntheticGetCheckDisabled;
    if (getCheckDisabled) {
        syntheticGetCheckDisabled = getCheckDisabled;
    } else {
        syntheticGetCheckDisabled = isCheckDisabled;
    }
    // We only handle exist keys
    const keys = new Set(keyList.filter((key)=>{
        const hasEntity = !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, key);
        if (!hasEntity) {
            warningMissKeys.push(key);
        }
        return hasEntity;
    }));
    const levelEntities = new Map();
    let maxLevel = 0;
    // Convert entities by level for calculation
    Object.keys(keyEntities).forEach((key)=>{
        const entity = keyEntities[key];
        const { level } = entity;
        let levelSet = levelEntities.get(level);
        if (!levelSet) {
            levelSet = new Set();
            levelEntities.set(level, levelSet);
        }
        levelSet.add(entity);
        maxLevel = Math.max(maxLevel, level);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!warningMissKeys.length, `Tree missing follow keys: ${warningMissKeys.slice(0, 100).map((key)=>`'${key}'`).join(', ')}`);
    let result;
    if (checked === true) {
        result = fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled);
    } else {
        result = cleanConductCheck(keys, checked.halfCheckedKeys, levelEntities, maxLevel, syntheticGetCheckDisabled);
    }
    return result;
}
}),
"[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/DropIndicator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const DropIndicator = (props)=>{
    const { dropPosition, dropLevelOffset, indent } = props;
    const style = {
        pointerEvents: 'none',
        position: 'absolute',
        right: 0,
        backgroundColor: 'red',
        height: 2
    };
    switch(dropPosition){
        case -1:
            style.top = 0;
            style.left = -dropLevelOffset * indent;
            break;
        case 1:
            style.bottom = 0;
            style.left = -dropLevelOffset * indent;
            break;
        case 0:
            style.bottom = 0;
            style.left = indent;
            break;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: style
    });
};
if ("TURBOPACK compile-time truthy", 1) {
    DropIndicator.displayName = 'DropIndicator';
}
const __TURBOPACK__default__export__ = DropIndicator;
}),
"[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/useUnmount.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript)");
;
;
/**
 * Trigger only when component unmount
 */ function useUnmount(triggerStart, triggerEnd) {
    const [firstMount, setFirstMount] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        if (firstMount) {
            triggerStart();
            return ()=>{
                triggerEnd();
            };
        }
    }, [
        firstMount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        setFirstMount(true);
        return ()=>{
            setFirstMount(false);
        };
    }, []);
}
const __TURBOPACK__default__export__ = useUnmount;
}),
"[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/MotionTreeNode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$motion$40$1$2e$3$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+motion@1.3.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/motion/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$contextTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/contextTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/TreeNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$useUnmount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/useUnmount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/utils/treeUtil.js [app-ssr] (ecmascript)");
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
const MotionTreeNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((oriProps, ref)=>{
    const { className, style, motion, motionNodes, motionType, onMotionStart: onOriginMotionStart, onMotionEnd: onOriginMotionEnd, active, treeNodeRequiredProps, ...props } = oriProps;
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](true);
    const { prefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$contextTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TreeContext"]);
    // Calculate target visible here.
    // And apply in effect to make `leave` motion work.
    const targetVisible = motionNodes && motionType !== 'hide';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        if (motionNodes) {
            if (targetVisible !== visible) {
                setVisible(targetVisible);
            }
        }
    }, [
        motionNodes
    ]);
    const triggerMotionStart = ()=>{
        if (motionNodes) {
            onOriginMotionStart();
        }
    };
    // Should only trigger once
    const triggerMotionEndRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const triggerMotionEnd = ()=>{
        if (motionNodes && !triggerMotionEndRef.current) {
            triggerMotionEndRef.current = true;
            onOriginMotionEnd();
        }
    };
    // Effect if unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$useUnmount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(triggerMotionStart, triggerMotionEnd);
    // Motion end event
    const onVisibleChanged = (nextVisible)=>{
        if (targetVisible === nextVisible) {
            triggerMotionEnd();
        }
    };
    if (motionNodes) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$motion$40$1$2e$3$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], _extends({
            ref: ref,
            visible: visible
        }, motion, {
            motionAppear: motionType === 'show',
            onVisibleChanged: onVisibleChanged
        }), ({ className: motionClassName, style: motionStyle }, motionRef)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
                ref: motionRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-treenode-motion`, motionClassName),
                style: motionStyle
            }, motionNodes.map((treeNode)=>{
                const { data: { ...restProps }, title, key, isStart, isEnd } = treeNode;
                delete restProps.children;
                const treeNodeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTreeNodeProps"])(key, treeNodeRequiredProps);
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], _extends({}, restProps, treeNodeProps, {
                    title: title,
                    active: active,
                    data: treeNode.data,
                    key: key,
                    isStart: isStart,
                    isEnd: isEnd
                }));
            })));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], _extends({
        domRef: ref,
        className: className,
        style: style
    }, props, {
        active: active
    }));
});
if ("TURBOPACK compile-time truthy", 1) {
    MotionTreeNode.displayName = 'MotionTreeNode';
}
const __TURBOPACK__default__export__ = MotionTreeNode;
}),
"[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/utils/diffUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findExpandedKeys",
    ()=>findExpandedKeys,
    "getExpandRange",
    ()=>getExpandRange
]);
function findExpandedKeys(prev = [], next = []) {
    const prevLen = prev.length;
    const nextLen = next.length;
    if (Math.abs(prevLen - nextLen) !== 1) {
        return {
            add: false,
            key: null
        };
    }
    function find(shorter, longer) {
        const cache = new Map();
        shorter.forEach((key)=>{
            cache.set(key, true);
        });
        const keys = longer.filter((key)=>!cache.has(key));
        return keys.length === 1 ? keys[0] : null;
    }
    if (prevLen < nextLen) {
        return {
            add: true,
            key: find(prev, next)
        };
    }
    return {
        add: false,
        key: find(next, prev)
    };
}
function getExpandRange(shorter, longer, key) {
    const shorterStartIndex = shorter.findIndex((data)=>data.key === key);
    const shorterEndNode = shorter[shorterStartIndex + 1];
    const longerStartIndex = longer.findIndex((data)=>data.key === key);
    if (shorterEndNode) {
        const longerEndIndex = longer.findIndex((data)=>data.key === shorterEndNode.key);
        return longer.slice(longerStartIndex + 1, longerEndIndex);
    }
    return longer.slice(longerStartIndex + 1);
}
}),
"[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/NodeList.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOTION_KEY",
    ()=>MOTION_KEY,
    "MotionEntity",
    ()=>MotionEntity,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getMinimumRangeTransitionRange",
    ()=>getMinimumRangeTransitionRange
]);
/**
 * Handle virtual list of the TreeNodes.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$virtual$2d$list$40$1$2e$0$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$virtual$2d$list$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+virtual-list@1.0.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/virtual-list/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$MotionTreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/MotionTreeNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$diffUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/utils/diffUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/utils/treeUtil.js [app-ssr] (ecmascript)");
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
const MOTION_KEY = `RC_TREE_MOTION_${Math.random()}`;
const MotionNode = {
    key: MOTION_KEY
};
const MotionEntity = {
    key: MOTION_KEY,
    level: 0,
    index: 0,
    pos: '0',
    node: MotionNode,
    nodes: [
        MotionNode
    ]
};
const MotionFlattenData = {
    parent: null,
    children: [],
    pos: MotionEntity.pos,
    data: MotionNode,
    title: null,
    key: MOTION_KEY,
    /** Hold empty list here since we do not use it */ isStart: [],
    isEnd: []
};
function getMinimumRangeTransitionRange(list, virtual, height, itemHeight) {
    if (virtual === false || !height) {
        return list;
    }
    return list.slice(0, Math.ceil(height / itemHeight) + 1);
}
function itemKey(item) {
    const { key, pos } = item;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getKey"])(key, pos);
}
const NodeList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls, data, selectable, checkable, expandedKeys, selectedKeys, checkedKeys, loadedKeys, loadingKeys, halfCheckedKeys, keyEntities, disabled, dragging, dragOverNodeKey, dropPosition, motion, height, itemHeight, virtual, scrollWidth, focusable, activeItem, tabIndex, onKeyDown, onFocus, onBlur, onMouseDown, onMouseUp, onActiveChange, onListChangeStart, onListChangeEnd, ...domProps } = props;
    const treeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // =============================== Ref ================================
    const listRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const indentMeasurerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, ()=>({
            scrollTo: (scroll)=>{
                listRef.current.scrollTo(scroll);
            },
            getIndentWidth: ()=>indentMeasurerRef.current.offsetWidth
        }));
    // ============================== Motion ==============================
    const [prevExpandedKeys, setPrevExpandedKeys] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](expandedKeys);
    const [prevData, setPrevData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](data);
    const [transitionData, setTransitionData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](data);
    const [transitionRange, setTransitionRange] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const [motionType, setMotionType] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    // When motion end but data change, this will makes data back to previous one
    const dataRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](data);
    dataRef.current = data;
    function onMotionEnd() {
        const latestData = dataRef.current;
        setPrevData(latestData);
        setTransitionData(latestData);
        setTransitionRange([]);
        setMotionType(null);
        onListChangeEnd();
    }
    // Do animation if expanded keys changed
    // layoutEffect here to avoid blink of node removing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        setPrevExpandedKeys(expandedKeys);
        const diffExpanded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$diffUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findExpandedKeys"])(prevExpandedKeys, expandedKeys);
        if (diffExpanded.key !== null) {
            if (diffExpanded.add) {
                const keyIndex = prevData.findIndex(({ key })=>key === diffExpanded.key);
                const rangeNodes = getMinimumRangeTransitionRange((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$diffUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExpandRange"])(prevData, data, diffExpanded.key), virtual, height, itemHeight);
                const newTransitionData = prevData.slice();
                newTransitionData.splice(keyIndex + 1, 0, MotionFlattenData);
                setTransitionData(newTransitionData);
                setTransitionRange(rangeNodes);
                setMotionType('show');
            } else {
                const keyIndex = data.findIndex(({ key })=>key === diffExpanded.key);
                const rangeNodes = getMinimumRangeTransitionRange((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$diffUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExpandRange"])(data, prevData, diffExpanded.key), virtual, height, itemHeight);
                const newTransitionData = data.slice();
                newTransitionData.splice(keyIndex + 1, 0, MotionFlattenData);
                setTransitionData(newTransitionData);
                setTransitionRange(rangeNodes);
                setMotionType('hide');
            }
        } else if (prevData !== data) {
            // If whole data changed, we just refresh the list
            setPrevData(data);
            setTransitionData(data);
        }
    }, [
        expandedKeys,
        data
    ]);
    // We should clean up motion if is changed by dragging
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!dragging) {
            onMotionEnd();
        }
    }, [
        dragging
    ]);
    const mergedData = motion ? transitionData : data;
    const treeNodeRequiredProps = {
        expandedKeys,
        selectedKeys,
        loadedKeys,
        loadingKeys,
        checkedKeys,
        halfCheckedKeys,
        dragOverNodeKey,
        dropPosition,
        keyEntities
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${prefixCls}-treenode`,
        "aria-hidden": true,
        style: {
            position: 'absolute',
            pointerEvents: 'none',
            visibility: 'hidden',
            height: 0,
            overflow: 'hidden',
            border: 0,
            padding: 0
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${prefixCls}-indent`
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: indentMeasurerRef,
        className: `${prefixCls}-indent-unit`
    }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$virtual$2d$list$40$1$2e$0$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$virtual$2d$list$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], _extends({}, domProps, {
        data: mergedData,
        itemKey: itemKey,
        height: height,
        fullHeight: false,
        virtual: virtual,
        itemHeight: itemHeight,
        scrollWidth: scrollWidth,
        prefixCls: `${prefixCls}-list`,
        ref: listRef,
        role: "tree",
        tabIndex: focusable !== false && !disabled ? tabIndex : undefined,
        "aria-activedescendant": activeItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getId"])(treeId, activeItem.key) : undefined,
        onKeyDown: onKeyDown,
        onFocus: onFocus,
        onBlur: onBlur,
        onMouseDown: onMouseDown,
        onMouseUp: onMouseUp,
        onVisibleChange: (originList)=>{
            // The best match is using `fullList` - `originList` = `restList`
            // and check the `restList` to see if has the MOTION_KEY node
            // but this will cause performance issue for long list compare
            // we just check `originList` and repeat trigger `onMotionEnd`
            if (originList.every((item)=>itemKey(item) !== MOTION_KEY)) {
                onMotionEnd();
            }
        }
    }), (treeNode)=>{
        const { pos, data: { ...restProps }, title, key, isStart, isEnd } = treeNode;
        const mergedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getKey"])(key, pos);
        delete restProps.key;
        delete restProps.children;
        const treeNodeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTreeNodeProps"])(mergedKey, treeNodeRequiredProps);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$MotionTreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], _extends({}, restProps, treeNodeProps, {
            title: title,
            active: !!activeItem && key === activeItem.key,
            pos: pos,
            data: treeNode.data,
            isStart: isStart,
            isEnd: isEnd,
            motion: motion,
            motionNodes: key === MOTION_KEY ? transitionRange : null,
            motionType: motionType,
            onMotionStart: onListChangeStart,
            onMotionEnd: onMotionEnd,
            treeNodeRequiredProps: treeNodeRequiredProps,
            treeId: treeId,
            onMouseMove: ()=>{
                onActiveChange(null);
            }
        }));
    }));
});
if ("TURBOPACK compile-time truthy", 1) {
    NodeList.displayName = 'NodeList';
}
const __TURBOPACK__default__export__ = NodeList;
}),
"[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/Tree.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// TODO: Fully accessibility support
// Reference: https://www.w3.org/WAI/ARIA/apg/patterns/treeview
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/pickAttrs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+util@1.10.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/util/es/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$contextTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/contextTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$DropIndicator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/DropIndicator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$NodeList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/NodeList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/TreeNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/util.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$conductUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/utils/conductUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/utils/keyUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/utils/treeUtil.js [app-ssr] (ecmascript)");
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
const MAX_RETRY_TIMES = 10;
class Tree extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    static defaultProps = {
        prefixCls: 'rc-tree',
        showLine: false,
        showIcon: true,
        selectable: true,
        multiple: false,
        checkable: false,
        disabled: false,
        checkStrictly: false,
        draggable: false,
        defaultExpandParent: true,
        autoExpandParent: false,
        defaultExpandAll: false,
        defaultExpandedKeys: [],
        defaultCheckedKeys: [],
        defaultSelectedKeys: [],
        dropIndicatorRender: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$DropIndicator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        allowDrop: ()=>true,
        expandAction: false
    };
    static TreeNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    destroyed = false;
    delayedDragEnterLogic;
    loadingRetryTimes = {};
    state = {
        keyEntities: {},
        indent: null,
        selectedKeys: [],
        checkedKeys: [],
        halfCheckedKeys: [],
        loadedKeys: [],
        loadingKeys: [],
        expandedKeys: [],
        draggingNodeKey: null,
        dragChildrenKeys: [],
        // dropTargetKey is the key of abstract-drop-node
        // the abstract-drop-node is the real drop node when drag and drop
        // not the DOM drag over node
        dropTargetKey: null,
        dropPosition: null,
        // the drop position of abstract-drop-node, inside 0, top -1, bottom 1
        dropContainerKey: null,
        // the container key of abstract-drop-node if dropPosition is -1 or 1
        dropLevelOffset: null,
        // the drop level offset of abstract-drag-over-node
        dropTargetPos: null,
        // the pos of abstract-drop-node
        dropAllowed: true,
        // if drop to abstract-drop-node is allowed
        // the abstract-drag-over-node
        // if mouse is on the bottom of top dom node or no the top of the bottom dom node
        // abstract-drag-over-node is the top node
        dragOverNodeKey: null,
        treeData: [],
        flattenNodes: [],
        activeKey: null,
        listChanging: false,
        prevProps: null,
        fieldNames: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fillFieldNames"])()
    };
    dragStartMousePosition = null;
    dragNodeProps = null;
    currentMouseOverDroppableNodeKey = null;
    focusedByMouse = false;
    listRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRef"]();
    componentDidMount() {
        this.destroyed = false;
        this.onUpdated();
    }
    componentDidUpdate() {
        this.onUpdated();
    }
    onUpdated() {
        const { activeKey, itemScrollOffset = 0 } = this.props;
        if (activeKey !== undefined && activeKey !== this.state.activeKey) {
            this.setState({
                activeKey
            });
            if (activeKey !== null) {
                this.scrollTo({
                    key: activeKey,
                    offset: itemScrollOffset
                });
            }
        }
    }
    componentWillUnmount() {
        window.removeEventListener('dragend', this.onWindowDragEnd);
        this.destroyed = true;
    }
    static getDerivedStateFromProps(props, prevState) {
        const { prevProps } = prevState;
        const newState = {
            prevProps: props
        };
        function needSync(name) {
            return !prevProps && props.hasOwnProperty(name) || prevProps && prevProps[name] !== props[name];
        }
        // ================== Tree Node ==================
        let treeData;
        // fieldNames
        let { fieldNames } = prevState;
        if (needSync('fieldNames')) {
            fieldNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fillFieldNames"])(props.fieldNames);
            newState.fieldNames = fieldNames;
        }
        // Check if `treeData` or `children` changed and save into the state.
        if (needSync('treeData')) {
            ({ treeData } = props);
        } else if (needSync('children')) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, '`children` of Tree is deprecated. Please use `treeData` instead.');
            treeData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertTreeToData"])(props.children);
        }
        // Save flatten nodes info and convert `treeData` into keyEntities
        if (treeData) {
            newState.treeData = treeData;
            const entitiesMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertDataToEntities"])(treeData, {
                fieldNames
            });
            newState.keyEntities = {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$NodeList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOTION_KEY"]]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$NodeList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionEntity"],
                ...entitiesMap.keyEntities
            };
            // Warning if treeNode not provide key
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warningWithoutKey"])(treeData, fieldNames);
            }
        }
        const keyEntities = newState.keyEntities || prevState.keyEntities;
        // ================ expandedKeys =================
        if (needSync('expandedKeys') || prevProps && needSync('autoExpandParent')) {
            newState.expandedKeys = props.autoExpandParent || !prevProps && props.defaultExpandParent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["conductExpandParent"])(props.expandedKeys, keyEntities) : props.expandedKeys;
        } else if (!prevProps && props.defaultExpandAll) {
            const cloneKeyEntities = {
                ...keyEntities
            };
            delete cloneKeyEntities[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$NodeList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOTION_KEY"]];
            // Only take the key who has the children to enhance the performance
            const nextExpandedKeys = [];
            Object.keys(cloneKeyEntities).forEach((key)=>{
                const entity = cloneKeyEntities[key];
                if (entity.children && entity.children.length) {
                    nextExpandedKeys.push(entity.key);
                }
            });
            newState.expandedKeys = nextExpandedKeys;
        } else if (!prevProps && props.defaultExpandedKeys) {
            newState.expandedKeys = props.autoExpandParent || props.defaultExpandParent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["conductExpandParent"])(props.defaultExpandedKeys, keyEntities) : props.defaultExpandedKeys;
        }
        if (!newState.expandedKeys) {
            delete newState.expandedKeys;
        }
        // ================ flattenNodes =================
        if (treeData || newState.expandedKeys) {
            const flattenNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flattenTreeData"])(treeData || prevState.treeData, newState.expandedKeys || prevState.expandedKeys, fieldNames);
            newState.flattenNodes = flattenNodes;
        }
        // ================ selectedKeys =================
        if (props.selectable) {
            if (needSync('selectedKeys')) {
                newState.selectedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["calcSelectedKeys"])(props.selectedKeys, props);
            } else if (!prevProps && props.defaultSelectedKeys) {
                newState.selectedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["calcSelectedKeys"])(props.defaultSelectedKeys, props);
            }
        }
        // ================= checkedKeys =================
        if (props.checkable) {
            let checkedKeyEntity;
            if (needSync('checkedKeys')) {
                checkedKeyEntity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseCheckedKeys"])(props.checkedKeys) || {};
            } else if (!prevProps && props.defaultCheckedKeys) {
                checkedKeyEntity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseCheckedKeys"])(props.defaultCheckedKeys) || {};
            } else if (treeData) {
                // If `treeData` changed, we also need check it
                checkedKeyEntity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseCheckedKeys"])(props.checkedKeys) || {
                    checkedKeys: prevState.checkedKeys,
                    halfCheckedKeys: prevState.halfCheckedKeys
                };
            }
            if (checkedKeyEntity) {
                let { checkedKeys = [], halfCheckedKeys = [] } = checkedKeyEntity;
                if (!props.checkStrictly) {
                    const conductKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$conductUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["conductCheck"])(checkedKeys, true, keyEntities);
                    ({ checkedKeys, halfCheckedKeys } = conductKeys);
                }
                newState.checkedKeys = checkedKeys;
                newState.halfCheckedKeys = halfCheckedKeys;
            }
        }
        // ================= loadedKeys ==================
        if (needSync('loadedKeys')) {
            newState.loadedKeys = props.loadedKeys;
        }
        return newState;
    }
    onNodeDragStart = (event, nodeProps)=>{
        const { expandedKeys, keyEntities } = this.state;
        const { onDragStart } = this.props;
        const { eventKey } = nodeProps;
        this.dragNodeProps = nodeProps;
        this.dragStartMousePosition = {
            x: event.clientX,
            y: event.clientY
        };
        const newExpandedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(expandedKeys, eventKey);
        this.setState({
            draggingNodeKey: eventKey,
            dragChildrenKeys: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDragChildrenKeys"])(eventKey, keyEntities),
            indent: this.listRef.current.getIndentWidth()
        });
        this.setExpandedKeys(newExpandedKeys);
        window.addEventListener('dragend', this.onWindowDragEnd);
        onDragStart?.({
            event,
            node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(nodeProps)
        });
    };
    /**
   * [Legacy] Select handler is smaller than node,
   * so that this will trigger when drag enter node or select handler.
   * This is a little tricky if customize css without padding.
   * Better for use mouse move event to refresh drag state.
   * But let's just keep it to avoid event trigger logic change.
   */ onNodeDragEnter = (event, nodeProps)=>{
        const { expandedKeys, keyEntities, dragChildrenKeys, flattenNodes, indent } = this.state;
        const { onDragEnter, onExpand, allowDrop, direction } = this.props;
        const { pos, eventKey } = nodeProps;
        // record the key of node which is latest entered, used in dragleave event.
        if (this.currentMouseOverDroppableNodeKey !== eventKey) {
            this.currentMouseOverDroppableNodeKey = eventKey;
        }
        if (!this.dragNodeProps) {
            this.resetDragState();
            return;
        }
        const { dropPosition, dropLevelOffset, dropTargetKey, dropContainerKey, dropTargetPos, dropAllowed, dragOverNodeKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["calcDropPosition"])(event, this.dragNodeProps, nodeProps, indent, this.dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction);
        if (// don't allow drop inside its children
        dragChildrenKeys.includes(dropTargetKey) || // don't allow drop when drop is not allowed caculated by calcDropPosition
        !dropAllowed) {
            this.resetDragState();
            return;
        }
        // Side effect for delay drag
        if (!this.delayedDragEnterLogic) {
            this.delayedDragEnterLogic = {};
        }
        Object.keys(this.delayedDragEnterLogic).forEach((key)=>{
            clearTimeout(this.delayedDragEnterLogic[key]);
        });
        if (this.dragNodeProps.eventKey !== nodeProps.eventKey) {
            // hoist expand logic here
            // since if logic is on the bottom
            // it will be blocked by abstract dragover node check
            //   => if you dragenter from top, you mouse will still be consider as in the top node
            event.persist();
            this.delayedDragEnterLogic[pos] = window.setTimeout(()=>{
                if (this.state.draggingNodeKey === null) {
                    return;
                }
                let newExpandedKeys = [
                    ...expandedKeys
                ];
                const entity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, nodeProps.eventKey);
                if (entity && (entity.children || []).length) {
                    newExpandedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrAdd"])(expandedKeys, nodeProps.eventKey);
                }
                if (!this.props.hasOwnProperty('expandedKeys')) {
                    this.setExpandedKeys(newExpandedKeys);
                }
                onExpand?.(newExpandedKeys, {
                    node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(nodeProps),
                    expanded: true,
                    nativeEvent: event.nativeEvent
                });
            }, 800);
        }
        // Skip if drag node is self
        if (this.dragNodeProps.eventKey === dropTargetKey && dropLevelOffset === 0) {
            this.resetDragState();
            return;
        }
        // Update drag over node and drag state
        this.setState({
            dragOverNodeKey,
            dropPosition,
            dropLevelOffset,
            dropTargetKey,
            dropContainerKey,
            dropTargetPos,
            dropAllowed
        });
        onDragEnter?.({
            event,
            node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(nodeProps),
            expandedKeys
        });
    };
    onNodeDragOver = (event, nodeProps)=>{
        const { dragChildrenKeys, flattenNodes, keyEntities, expandedKeys, indent } = this.state;
        const { onDragOver, allowDrop, direction } = this.props;
        if (!this.dragNodeProps) {
            return;
        }
        const { dropPosition, dropLevelOffset, dropTargetKey, dropContainerKey, dropTargetPos, dropAllowed, dragOverNodeKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["calcDropPosition"])(event, this.dragNodeProps, nodeProps, indent, this.dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction);
        if (dragChildrenKeys.includes(dropTargetKey) || !dropAllowed) {
            // don't allow drop inside its children
            // don't allow drop when drop is not allowed calculated by calcDropPosition
            return;
        }
        // Update drag position
        if (this.dragNodeProps.eventKey === dropTargetKey && dropLevelOffset === 0) {
            if (!(this.state.dropPosition === null && this.state.dropLevelOffset === null && this.state.dropTargetKey === null && this.state.dropContainerKey === null && this.state.dropTargetPos === null && this.state.dropAllowed === false && this.state.dragOverNodeKey === null)) {
                this.resetDragState();
            }
        } else if (!(dropPosition === this.state.dropPosition && dropLevelOffset === this.state.dropLevelOffset && dropTargetKey === this.state.dropTargetKey && dropContainerKey === this.state.dropContainerKey && dropTargetPos === this.state.dropTargetPos && dropAllowed === this.state.dropAllowed && dragOverNodeKey === this.state.dragOverNodeKey)) {
            this.setState({
                dropPosition,
                dropLevelOffset,
                dropTargetKey,
                dropContainerKey,
                dropTargetPos,
                dropAllowed,
                dragOverNodeKey
            });
        }
        onDragOver?.({
            event,
            node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(nodeProps)
        });
    };
    onNodeDragLeave = (event, nodeProps)=>{
        // if it is outside the droppable area
        // currentMouseOverDroppableNodeKey will be updated in dragenter event when into another droppable receiver.
        if (this.currentMouseOverDroppableNodeKey === nodeProps.eventKey && !event.currentTarget.contains(event.relatedTarget)) {
            this.resetDragState();
            this.currentMouseOverDroppableNodeKey = null;
        }
        const { onDragLeave } = this.props;
        onDragLeave?.({
            event,
            node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(nodeProps)
        });
    };
    // since stopPropagation() is called in treeNode
    // if onWindowDrag is called, whice means state is keeped, drag state should be cleared
    onWindowDragEnd = (event)=>{
        this.onNodeDragEnd(event, null, true);
        window.removeEventListener('dragend', this.onWindowDragEnd);
    };
    // if onNodeDragEnd is called, onWindowDragEnd won't be called since stopPropagation() is called
    onNodeDragEnd = (event, nodeProps)=>{
        const { onDragEnd } = this.props;
        this.setState({
            dragOverNodeKey: null
        });
        this.cleanDragState();
        onDragEnd?.({
            event,
            node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(nodeProps)
        });
        this.dragNodeProps = null;
        window.removeEventListener('dragend', this.onWindowDragEnd);
    };
    onNodeDrop = (event, _, outsideTree = false)=>{
        const { dragChildrenKeys, dropPosition, dropTargetKey, dropTargetPos, dropAllowed } = this.state;
        if (!dropAllowed) {
            return;
        }
        const { onDrop } = this.props;
        this.setState({
            dragOverNodeKey: null
        });
        this.cleanDragState();
        if (dropTargetKey === null) return;
        const abstractDropNodeProps = {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTreeNodeProps"])(dropTargetKey, this.getTreeNodeRequiredProps()),
            active: this.getActiveItem()?.key === dropTargetKey,
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this.state.keyEntities, dropTargetKey).node
        };
        const dropToChild = dragChildrenKeys.includes(dropTargetKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!dropToChild, "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
        const posArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["posToArr"])(dropTargetPos);
        const dropResult = {
            event,
            node: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(abstractDropNodeProps),
            dragNode: this.dragNodeProps ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])(this.dragNodeProps) : null,
            dragNodesKeys: [
                this.dragNodeProps.eventKey
            ].concat(dragChildrenKeys),
            dropToGap: dropPosition !== 0,
            dropPosition: dropPosition + Number(posArr[posArr.length - 1])
        };
        if (!outsideTree) {
            onDrop?.(dropResult);
        }
        this.dragNodeProps = null;
    };
    resetDragState() {
        this.setState({
            dragOverNodeKey: null,
            dropPosition: null,
            dropLevelOffset: null,
            dropTargetKey: null,
            dropContainerKey: null,
            dropTargetPos: null,
            dropAllowed: false
        });
    }
    cleanDragState = ()=>{
        const { draggingNodeKey } = this.state;
        if (draggingNodeKey !== null) {
            this.setState({
                draggingNodeKey: null,
                dropPosition: null,
                dropContainerKey: null,
                dropTargetKey: null,
                dropLevelOffset: null,
                dropAllowed: true,
                dragOverNodeKey: null
            });
        }
        this.dragStartMousePosition = null;
        this.currentMouseOverDroppableNodeKey = null;
    };
    triggerExpandActionExpand = (e, treeNode)=>{
        const { expandedKeys, flattenNodes } = this.state;
        const { expanded, key, isLeaf } = treeNode;
        if (isLeaf || e.shiftKey || e.metaKey || e.ctrlKey) {
            return;
        }
        const node = flattenNodes.filter((nodeItem)=>nodeItem.key === key)[0];
        const eventNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])({
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTreeNodeProps"])(key, this.getTreeNodeRequiredProps()),
            data: node.data
        });
        this.setExpandedKeys(expanded ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(expandedKeys, key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrAdd"])(expandedKeys, key));
        this.onNodeExpand(e, eventNode);
    };
    onNodeClick = (e, treeNode)=>{
        const { onClick, expandAction } = this.props;
        if (expandAction === 'click') {
            this.triggerExpandActionExpand(e, treeNode);
        }
        onClick?.(e, treeNode);
    };
    onNodeDoubleClick = (e, treeNode)=>{
        const { onDoubleClick, expandAction } = this.props;
        if (expandAction === 'doubleClick') {
            this.triggerExpandActionExpand(e, treeNode);
        }
        onDoubleClick?.(e, treeNode);
    };
    onNodeSelect = (e, treeNode)=>{
        let { selectedKeys } = this.state;
        const { keyEntities, fieldNames } = this.state;
        const { onSelect, multiple } = this.props;
        const { selected } = treeNode;
        const key = treeNode[fieldNames.key];
        const targetSelected = !selected;
        // Update selected keys
        if (!targetSelected) {
            selectedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(selectedKeys, key);
        } else if (!multiple) {
            selectedKeys = [
                key
            ];
        } else {
            selectedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrAdd"])(selectedKeys, key);
        }
        // [Legacy] Not found related usage in doc or upper libs
        const selectedNodes = selectedKeys.map((selectedKey)=>{
            const entity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, selectedKey);
            return entity ? entity.node : null;
        }).filter(Boolean);
        this.setUncontrolledState({
            selectedKeys
        });
        onSelect?.(selectedKeys, {
            event: 'select',
            selected: targetSelected,
            node: treeNode,
            selectedNodes,
            nativeEvent: e.nativeEvent
        });
    };
    onNodeCheck = (e, treeNode, checked)=>{
        const { keyEntities, checkedKeys: oriCheckedKeys, halfCheckedKeys: oriHalfCheckedKeys } = this.state;
        const { checkStrictly, onCheck } = this.props;
        const { key } = treeNode;
        // Prepare trigger arguments
        let checkedObj;
        const eventObj = {
            event: 'check',
            node: treeNode,
            checked,
            nativeEvent: e.nativeEvent
        };
        if (checkStrictly) {
            const checkedKeys = checked ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrAdd"])(oriCheckedKeys, key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(oriCheckedKeys, key);
            const halfCheckedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(oriHalfCheckedKeys, key);
            checkedObj = {
                checked: checkedKeys,
                halfChecked: halfCheckedKeys
            };
            eventObj.checkedNodes = checkedKeys.map((checkedKey)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, checkedKey)).filter(Boolean).map((entity)=>entity.node);
            this.setUncontrolledState({
                checkedKeys
            });
        } else {
            // Always fill first
            let { checkedKeys, halfCheckedKeys } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$conductUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["conductCheck"])([
                ...oriCheckedKeys,
                key
            ], true, keyEntities);
            // If remove, we do it again to correction
            if (!checked) {
                const keySet = new Set(checkedKeys);
                keySet.delete(key);
                ({ checkedKeys, halfCheckedKeys } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$conductUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["conductCheck"])(Array.from(keySet), {
                    checked: false,
                    halfCheckedKeys
                }, keyEntities));
            }
            checkedObj = checkedKeys;
            // [Legacy] This is used for `rc-tree-select`
            eventObj.checkedNodes = [];
            eventObj.checkedNodesPositions = [];
            eventObj.halfCheckedKeys = halfCheckedKeys;
            checkedKeys.forEach((checkedKey)=>{
                const entity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, checkedKey);
                if (!entity) return;
                const { node, pos } = entity;
                eventObj.checkedNodes.push(node);
                eventObj.checkedNodesPositions.push({
                    node,
                    pos
                });
            });
            this.setUncontrolledState({
                checkedKeys
            }, false, {
                halfCheckedKeys
            });
        }
        onCheck?.(checkedObj, eventObj);
    };
    onNodeLoad = (treeNode)=>{
        const { key } = treeNode;
        const { keyEntities } = this.state;
        // Skip if has children already
        const entity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, key);
        if (entity?.children?.length) {
            return;
        }
        const loadPromise = new Promise((resolve, reject)=>{
            // We need to get the latest state of loading/loaded keys
            this.setState(({ loadedKeys = [], loadingKeys = [] })=>{
                const { loadData, onLoad } = this.props;
                if (!loadData || loadedKeys.includes(key) || loadingKeys.includes(key)) {
                    return null;
                }
                // Process load data
                const promise = loadData(treeNode);
                promise.then(()=>{
                    const { loadedKeys: currentLoadedKeys } = this.state;
                    const newLoadedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrAdd"])(currentLoadedKeys, key);
                    // onLoad should trigger before internal setState to avoid `loadData` trigger twice.
                    // https://github.com/ant-design/ant-design/issues/12464
                    onLoad?.(newLoadedKeys, {
                        event: 'load',
                        node: treeNode
                    });
                    this.setUncontrolledState({
                        loadedKeys: newLoadedKeys
                    });
                    this.setState((prevState)=>({
                            loadingKeys: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(prevState.loadingKeys, key)
                        }));
                    resolve();
                }).catch((e)=>{
                    this.setState((prevState)=>({
                            loadingKeys: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(prevState.loadingKeys, key)
                        }));
                    // If exceed max retry times, we give up retry
                    this.loadingRetryTimes[key] = (this.loadingRetryTimes[key] || 0) + 1;
                    if (this.loadingRetryTimes[key] >= MAX_RETRY_TIMES) {
                        const { loadedKeys: currentLoadedKeys } = this.state;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'Retry for `loadData` many times but still failed. No more retry.');
                        this.setUncontrolledState({
                            loadedKeys: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrAdd"])(currentLoadedKeys, key)
                        });
                        resolve();
                    }
                    reject(e);
                });
                return {
                    loadingKeys: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrAdd"])(loadingKeys, key)
                };
            });
        });
        // Not care warning if we ignore this
        loadPromise.catch(()=>{});
        return loadPromise;
    };
    onNodeMouseEnter = (event, node)=>{
        const { onMouseEnter } = this.props;
        onMouseEnter?.({
            event,
            node
        });
    };
    onNodeMouseLeave = (event, node)=>{
        const { onMouseLeave } = this.props;
        onMouseLeave?.({
            event,
            node
        });
    };
    onNodeContextMenu = (event, node)=>{
        const { onRightClick } = this.props;
        if (onRightClick) {
            event.preventDefault();
            onRightClick({
                event,
                node
            });
        }
    };
    onMouseDown = (event)=>{
        this.focusedByMouse = true;
        const { onMouseDown } = this.props;
        onMouseDown?.(event);
    };
    onMouseUp = (event)=>{
        this.focusedByMouse = false;
        const { onMouseUp } = this.props;
        onMouseUp?.(event);
    };
    onFocus = (...args)=>{
        const { onFocus, disabled } = this.props;
        const { activeKey, selectedKeys, flattenNodes } = this.state;
        if (!this.focusedByMouse && !disabled && activeKey === null) {
            const visibleSelectedKey = selectedKeys.find((key)=>{
                return flattenNodes.some((nodeItem)=>nodeItem.key === key);
            });
            if (visibleSelectedKey !== undefined) {
                this.onActiveChange(visibleSelectedKey);
            } else {
                this.onActiveChange(flattenNodes?.[0]?.key || null);
            }
        }
        onFocus?.(...args);
    };
    onBlur = (...args)=>{
        this.focusedByMouse = false;
        const { onBlur } = this.props;
        this.onActiveChange(null);
        onBlur?.(...args);
    };
    getTreeNodeRequiredProps = ()=>{
        const { expandedKeys, selectedKeys, loadedKeys, loadingKeys, checkedKeys, halfCheckedKeys, dragOverNodeKey, dropPosition, keyEntities } = this.state;
        return {
            expandedKeys: expandedKeys || [],
            selectedKeys: selectedKeys || [],
            loadedKeys: loadedKeys || [],
            loadingKeys: loadingKeys || [],
            checkedKeys: checkedKeys || [],
            halfCheckedKeys: halfCheckedKeys || [],
            dragOverNodeKey,
            dropPosition,
            keyEntities: keyEntities
        };
    };
    // =========================== Expanded ===========================
    /** Set uncontrolled `expandedKeys`. This will also auto update `flattenNodes`. */ setExpandedKeys = (expandedKeys)=>{
        const { treeData, fieldNames } = this.state;
        const flattenNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flattenTreeData"])(treeData, expandedKeys, fieldNames);
        this.setUncontrolledState({
            expandedKeys,
            flattenNodes
        }, true);
    };
    onNodeExpand = (e, treeNode)=>{
        let { expandedKeys } = this.state;
        const { listChanging, fieldNames } = this.state;
        const { onExpand, loadData } = this.props;
        const { expanded } = treeNode;
        const key = treeNode[fieldNames.key];
        // Do nothing when motion is in progress
        if (listChanging) {
            return;
        }
        // Update selected keys
        const certain = expandedKeys.includes(key);
        const targetExpanded = !expanded;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(expanded && certain || !expanded && !certain, 'Expand state not sync with index check');
        expandedKeys = targetExpanded ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrAdd"])(expandedKeys, key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(expandedKeys, key);
        this.setExpandedKeys(expandedKeys);
        onExpand?.(expandedKeys, {
            node: treeNode,
            expanded: targetExpanded,
            nativeEvent: e.nativeEvent
        });
        // Async Load data
        if (targetExpanded && loadData) {
            const loadPromise = this.onNodeLoad(treeNode);
            if (loadPromise) {
                loadPromise.then(()=>{
                    // [Legacy] Refresh logic
                    const newFlattenTreeData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flattenTreeData"])(this.state.treeData, expandedKeys, fieldNames);
                    this.setUncontrolledState({
                        flattenNodes: newFlattenTreeData
                    });
                }).catch(()=>{
                    const { expandedKeys: currentExpandedKeys } = this.state;
                    const expandedKeysToRestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrDel"])(currentExpandedKeys, key);
                    this.setExpandedKeys(expandedKeysToRestore);
                });
            }
        }
    };
    onListChangeStart = ()=>{
        this.setUncontrolledState({
            listChanging: true
        });
    };
    onListChangeEnd = ()=>{
        setTimeout(()=>{
            this.setUncontrolledState({
                listChanging: false
            });
        });
    };
    // =========================== Keyboard ===========================
    onActiveChange = (newActiveKey)=>{
        const { activeKey } = this.state;
        const { onActiveChange, itemScrollOffset = 0 } = this.props;
        if (activeKey === newActiveKey) {
            return;
        }
        this.setState({
            activeKey: newActiveKey
        });
        if (newActiveKey !== null) {
            this.scrollTo({
                key: newActiveKey,
                offset: itemScrollOffset
            });
        }
        onActiveChange?.(newActiveKey);
    };
    getActiveItem = ()=>{
        const { activeKey, flattenNodes } = this.state;
        if (activeKey === null) {
            return null;
        }
        return flattenNodes.find(({ key })=>key === activeKey) || null;
    };
    offsetActiveKey = (offset)=>{
        const { flattenNodes, activeKey } = this.state;
        let index = flattenNodes.findIndex(({ key })=>key === activeKey);
        // Align with index
        if (index === -1 && offset < 0) {
            index = flattenNodes.length;
        }
        index = (index + offset + flattenNodes.length) % flattenNodes.length;
        const item = flattenNodes[index];
        if (item) {
            const { key } = item;
            this.onActiveChange(key);
        } else {
            this.onActiveChange(null);
        }
    };
    onKeyDown = (event)=>{
        const { activeKey, expandedKeys, checkedKeys, flattenNodes, keyEntities } = this.state;
        const { onKeyDown, checkable, selectable, disabled, loadData } = this.props;
        if (disabled) {
            return;
        }
        // >>>>>>>>>> Direction
        switch(event.key){
            case 'ArrowUp':
                {
                    this.offsetActiveKey(-1);
                    event.preventDefault();
                    break;
                }
            case 'ArrowDown':
                {
                    this.offsetActiveKey(1);
                    event.preventDefault();
                    break;
                }
            case 'Home':
                {
                    this.onActiveChange(flattenNodes?.[0]?.key);
                    event.preventDefault();
                    break;
                }
            case 'End':
                {
                    this.onActiveChange(flattenNodes?.[flattenNodes.length - 1]?.key);
                    event.preventDefault();
                    break;
                }
        }
        // >>>>>>>>>> Expand & Selection
        const activeItem = this.getActiveItem();
        if (activeItem && activeItem.data) {
            const treeNodeRequiredProps = this.getTreeNodeRequiredProps();
            const eventNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertNodePropsToEventData"])({
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTreeNodeProps"])(activeKey, treeNodeRequiredProps),
                data: activeItem.data,
                active: true
            });
            const entity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$keyUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(keyEntities, activeKey);
            const hasChildren = !!entity?.children?.length;
            const expandable = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$utils$2f$treeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLeafNode"])(activeItem.data.isLeaf, loadData, hasChildren, eventNode.loaded);
            const canCheck = checkable && !eventNode.disabled && eventNode.checkable !== false && !eventNode.disableCheckbox;
            const canSelect = !checkable && selectable && !eventNode.disabled && eventNode.selectable !== false;
            switch(event.key){
                // >>> Expand
                case 'ArrowLeft':
                    {
                        // Collapse if possible
                        if (expandable && expandedKeys.includes(activeKey)) {
                            this.onNodeExpand({}, eventNode);
                        } else if (activeItem.parent) {
                            this.onActiveChange(activeItem.parent.key);
                        }
                        event.preventDefault();
                        break;
                    }
                case 'ArrowRight':
                    {
                        // Expand if possible
                        if (expandable && !expandedKeys.includes(activeKey)) {
                            this.onNodeExpand({}, eventNode);
                        } else if (activeItem.children && activeItem.children.length) {
                            this.onActiveChange(activeItem.children[0].key);
                        }
                        event.preventDefault();
                        break;
                    }
                case 'Enter':
                    {
                        if (expandable) {
                            event.preventDefault();
                            this.onNodeExpand({}, eventNode);
                        } else if (canCheck) {
                            if (!checkedKeys.includes(activeKey)) {
                                event.preventDefault();
                                this.onNodeCheck({}, eventNode, true);
                            }
                        } else if (canSelect && !eventNode.selected) {
                            event.preventDefault();
                            this.onNodeSelect({}, eventNode);
                        }
                        break;
                    }
                case ' ':
                    {
                        if (canCheck) {
                            event.preventDefault();
                            this.onNodeCheck({}, eventNode, !checkedKeys.includes(activeKey));
                        } else if (canSelect) {
                            event.preventDefault();
                            this.onNodeSelect({}, eventNode);
                        }
                        break;
                    }
            }
        }
        onKeyDown?.(event);
    };
    /**
   * Only update the value which is not in props
   */ setUncontrolledState = (state, atomic = false, forceState = null)=>{
        if (!this.destroyed) {
            let needSync = false;
            let allPassed = true;
            const newState = {};
            Object.keys(state).forEach((name)=>{
                if (this.props.hasOwnProperty(name)) {
                    allPassed = false;
                    return;
                }
                needSync = true;
                newState[name] = state[name];
            });
            if (needSync && (!atomic || allPassed)) {
                this.setState({
                    ...newState,
                    ...forceState
                });
            }
        }
    };
    scrollTo = (scroll)=>{
        this.listRef.current.scrollTo(scroll);
    };
    render() {
        const { flattenNodes, keyEntities, draggingNodeKey, dropLevelOffset, dropContainerKey, dropTargetKey, dropPosition, dragOverNodeKey, indent } = this.state;
        const { prefixCls, className, style, styles, classNames: treeClassNames, showLine, focusable, tabIndex = 0, selectable, showIcon, icon, switcherIcon, draggable, checkable, checkStrictly, disabled, motion, loadData, filterTreeNode, height, itemHeight, scrollWidth, virtual, titleRender, dropIndicatorRender, onContextMenu, onScroll, direction, rootClassName, rootStyle } = this.props;
        const domProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$util$40$1$2e$10$2e$1_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this.props, {
            aria: true,
            data: true
        });
        // It's better move to hooks but we just simply keep here
        let draggableConfig;
        if (draggable) {
            if (typeof draggable === 'object') {
                draggableConfig = draggable;
            } else if (typeof draggable === 'function') {
                draggableConfig = {
                    nodeDraggable: draggable
                };
            } else {
                draggableConfig = {};
            }
        }
        const contextValue = {
            styles,
            classNames: treeClassNames,
            prefixCls,
            selectable,
            showIcon,
            icon,
            switcherIcon,
            draggable: draggableConfig,
            draggingNodeKey,
            checkable,
            checkStrictly,
            disabled,
            keyEntities,
            dropLevelOffset,
            dropContainerKey,
            dropTargetKey,
            dropPosition,
            dragOverNodeKey,
            indent,
            direction,
            dropIndicatorRender,
            loadData,
            filterTreeNode,
            titleRender,
            onNodeClick: this.onNodeClick,
            onNodeDoubleClick: this.onNodeDoubleClick,
            onNodeExpand: this.onNodeExpand,
            onNodeSelect: this.onNodeSelect,
            onNodeCheck: this.onNodeCheck,
            onNodeLoad: this.onNodeLoad,
            onNodeMouseEnter: this.onNodeMouseEnter,
            onNodeMouseLeave: this.onNodeMouseLeave,
            onNodeContextMenu: this.onNodeContextMenu,
            onNodeDragStart: this.onNodeDragStart,
            onNodeDragEnter: this.onNodeDragEnter,
            onNodeDragOver: this.onNodeDragOver,
            onNodeDragLeave: this.onNodeDragLeave,
            onNodeDragEnd: this.onNodeDragEnd,
            onNodeDrop: this.onNodeDrop
        };
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$contextTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TreeContext"].Provider, {
            value: contextValue
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, className, rootClassName, {
                [`${prefixCls}-show-line`]: showLine
            }),
            style: rootStyle
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$NodeList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], _extends({
            ref: this.listRef,
            prefixCls: prefixCls,
            style: style,
            data: flattenNodes,
            disabled: disabled,
            selectable: selectable,
            checkable: !!checkable,
            motion: motion,
            dragging: draggingNodeKey !== null,
            height: height,
            itemHeight: itemHeight,
            virtual: virtual,
            focusable: focusable,
            tabIndex: tabIndex,
            activeItem: this.getActiveItem(),
            onFocus: this.onFocus,
            onMouseDown: this.onMouseDown,
            onMouseUp: this.onMouseUp,
            onBlur: this.onBlur,
            onKeyDown: this.onKeyDown,
            onActiveChange: this.onActiveChange,
            onListChangeStart: this.onListChangeStart,
            onListChangeEnd: this.onListChangeEnd,
            onContextMenu: onContextMenu,
            onScroll: onScroll,
            scrollWidth: scrollWidth
        }, this.getTreeNodeRequiredProps(), domProps))));
    }
}
const __TURBOPACK__default__export__ = Tree;
}),
"[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$Tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/Tree.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/TreeNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$contextTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/contextTypes.js [app-ssr] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$Tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/TreeNode.js [app-ssr] (ecmascript) <export default as TreeNode>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TreeNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$tree$40$1$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$rc$2d$component$2f$tree$2f$es$2f$TreeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@rc-component+tree@1.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@rc-component/tree/es/TreeNode.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=0kxa_%40rc-component_tree_es_0.ohic7._.js.map