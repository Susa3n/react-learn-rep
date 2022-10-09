import { TYPE_TEXT } from "./constants"
export function wrapDom(element) {
  if(typeof element == 'string' || typeof element == 'number') {
    return {
      type: TYPE_TEXT,
      props: {
        content: element
      }
    }
  }else {
    return element
  }
}