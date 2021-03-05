import createElement from "./createElement";
import updateChildren from "./updateChildren"
export default function pacthVnode(oldVnode, newVnode) {
    // console.log(...arguments,'是一个节点')
    // // 
    //  if ()
    // 我们规定children和text不允许同时出现
    // 所以当出现text时   我们只需要直接替换文本值即可
    if (newVnode.text) {
        if (newVnode.text != oldVnode.text) {
            // 如果新虚拟节点中的text和老的虚拟节点的text不同，那么直接让新的text写入老的elm中即可。如果老的elm中是children，那么也会立即消失掉。
            oldVnode.elm.innerText = newVnode.text;
        }
    } else {
        // 此时说明有children
        // 判断老的有没有children
        if (oldVnode.children != undefined && oldVnode.children.length > 0) {
            // 老的有children，新的也有children，此时就是最复杂的情况。
            updateChildren(oldVnode.elm, oldVnode.children, newVnode.children);
        } else {
             // 清空老的节点的内容
             oldVnode.elm.innerHTML = '';
            // 老的没有children   这时候我们直接创建
            for (let i = 0; i < newVnode.children.length; i++) {
                let dom = createElement(newVnode.children[i]);
                oldVnode.elm.appendChild(dom);
            }
        }
    }

}