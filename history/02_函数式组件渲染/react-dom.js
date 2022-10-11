import { TYPE_TEXT } from './constants'

function render(vdom,container) {
  let newDOM = createDOM(vdom)
  container.appendChild(newDOM)
}

function createDOM(vdom) {
  let {props,type} = vdom
  let dom;
  if(type === TYPE_TEXT) {
    dom = document.createTextNode(props.content)
  }else if(typeof type == 'function') { // 说明是一个函数式组件
    return mountFunctionComponent(vdom)
  }else  {
    dom = document.createElement(type)
  }


  if(props) {
    // 更新属性
    updateProps(dom,{},props)
    if(typeof props.Children == 'object' && props.Children.type) { // 如果是一个对象标明 是一个子节点
      render(props.Children,dom)
    }else if(Array.isArray(props.Children)) {// 如果是一个数组标明 多个子节点
      reconcileChildren(props.Children,dom)
    }
  }

  return dom

}
function mountFunctionComponent(vdom) {
  const {type,props} = vdom // 拿到函数以及属性
  const renderVdom = type(props) // 执行函数拿到虚拟dom编译成真实dom
  return createDOM(renderVdom)  // 再去调用createDOM方法编译真实dom
}
function reconcileChildren(ChildrenVdom,parentDOM) {
  for (let i = 0; i < ChildrenVdom.length; i++) {
    const childVDOM = ChildrenVdom[i];
    render(childVDOM,parentDOM)
  }
  
}

/**
 * 
 * @param {*} dom  真实dom
 * @param {*} oldProps  旧的属性
 * @param {*} props  新属性
 */
function updateProps(dom,oldProps,newProps) {
  for(let key in newProps) {
    if(key === 'Children') {continue;} // 对于子节点 单独进行处理
    if(key == 'style') { // 样式属性进行处理
      let styleObj = newProps[key] // 拿到样式的对象遍历 添加到真实元素中
      for(let attr in styleObj) {
        dom.style[attr] = styleObj[attr]
      }
    }else { // 对于其他属性直接赋值
      dom[key] = newProps[key]
    }
  }

}
export default {render}