import {wrapDom} from './utils'

// 将虚拟dom进行整合
function createElement(type,config,Children) {
  if(config) {
    delete config.__self
    delete config.__source
  }
  let props = {...config}
  if(arguments.length > 3) {
    props.Children = Array.prototype.slice.call(arguments,2).map(item =>wrapDom(item))
  }else{
    props.Children = wrapDom(Children)
  }
  return {
    type,
    props
  }
}

export default {createElement}