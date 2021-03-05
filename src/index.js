import h from "./h";
import patch from "./patch";
let vnode1 = h('ul', {}, [
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'C' }, 'C'),
    h('li', { key: 'D' }, 'D'),
    h('li', { key: 'E' }, 'E')
])
const container = document.getElementById('container')
patch(container, vnode1)
let vnode2 = h('ul', {}, [
    h('li', { key: 'Q' }, 'Q'),
    h('li', { key: 'T' }, 'T'),
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'Z' }, 'Z'),
    h('li', { key: 'C' }, 'C'),
    h('li', { key: 'D' }, 'D'),
    h('li', { key: 'E' }, 'E')
])

let button = document.querySelector('.change-button')
console.log(button)
button.addEventListener('click', () => {
    patch(vnode1, vnode2)
})