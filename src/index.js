import h from "./h";
import patch from "./patch";
let vnode = h('button',{},'文案')
const container = document.getElementById('container')
patch(container,vnode)