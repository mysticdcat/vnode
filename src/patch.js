
import vnode from "./vnode.js";
import createElement from "./createElement.js";
import pacthVnode from "./pacthVnode.js"
export default function (oldVnode,newVnode) {
    // 判断传入的节点是否是vnode
    if (!oldVnode.sel) {
        oldVnode = vnode(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode)
    }
    // 判断新旧节点是否是同一个节点
    if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
        pacthVnode(oldVnode,newVnode)
    } else {
        let newDom = createElement(newVnode)
        oldVnode.elm.parentNode.insertBefore(newDom,oldVnode.elm)
        oldVnode.elm.parentNode.removeChild(oldVnode.elm)
    }
}