export default  function createElement (vnode) {
    // 看节点是否文字
    let domNode = document.createElement(vnode.sel)
    let children = vnode.children
    if (vnode.text && (children === undefined || children.length === 0)) {
        domNode.innerText = vnode.text
    } else if(Array.isArray(children) && children.length > 0) {
        for (let index = 0; index < children.length; index++) {
            const element = children[index];
            let child = createElement(element)
            domNode.appendChild(child)
        }
    }
    vnode.elm = domNode
    return vnode.elm
}