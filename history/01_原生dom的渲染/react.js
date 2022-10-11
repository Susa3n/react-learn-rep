import {wrapDom} from './utils'

function createElement(type,config,Children) {
  let props = {...config}
  if(arguments.length > 3) {
    props.Children = Array.prototype.slice.call(arguments,2).map(item =>wrapDom(item))
  }else {
    props.Children = wrapDom(Children)
  }
  return {
    type,
    props
  }
}

export default {createElement}