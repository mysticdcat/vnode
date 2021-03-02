import vnode from "./vnode.js";
/**
 * 1 h('div,{}, '文字)
 * 2 h('div,{}, '[])
 * 3 h('div,{}, '{})
 * @param {*} sel 
 * @param {*} data 
 * @param {*} c 
 */
export default function (sel, data, c) {
    let children = []
    if (typeof c === 'string' || typeof c === 'number') {
        return vnode(sel,data,[],c,undefined)
    } else if (Array.isArray(c)) {
        
        for (let index = 0; index < c.length; index++) {
            const element = c[index];
            if (!typeof element === 'object' && element.hasOwnProperty('sel')) {
                throw new Error('children中有一项不是h函数')
            }
            children.push(element)
        }
        return vnode(sel,data,children,undefined,undefined)
    } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
        return vnode(sel,data,[c],undefined,undefined)
    } else {
        throw new Error('传入的第三个参数不对')
    }
    
}