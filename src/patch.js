
import vnode from "./vnode.js";
import createElement from "./createElement.js";
export default function (oldVnode,newVnode) {
    // 判断传入的节点是否是vnode
    if (!oldVnode.sel) {
        oldVnode = vnode(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode)
    }
    console.log(oldVnode)
    // 判断新旧节点是否是同一个节点
    if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
        // 是一个节点
    } else {
        createElement(newVnode,oldVnode.elm)
    }
}