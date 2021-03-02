import h from "./h";
import patch from "./patch";
let vnode1 = h('ul',{},[
    h('li',{},'son1'),
    h('li',{},'son2')
])
const container = document.getElementById('container')
patch(container,vnode1)
let vnode2 = h('ol',{},[
    h('li',{},'儿子'),
    h('li',{},'女儿')
])

let button = document.querySelector('.change-button')
console.log(button)
button.addEventListener('click',() => {
    patch(vnode1,vnode2)
})