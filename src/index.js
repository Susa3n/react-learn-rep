import React from './react';
import ReactDOM from './react-dom';

function MyComponent(props) {
  return (<div className='title'>
    <span>hello</span>  
    <hr />
    {props.name}
  </div>)

  // return React.createElement("div", {
  //   className: "title"
  // }, /*#__PURE__*/React.createElement("span", null, "hello"), /*#__PURE__*/React.createElement("hr", null), props.name);
}

let element = <MyComponent name="susa3n"></MyComponent>
console.log(element); // 其中type属性是一个函数
console.log(JSON.stringify(element, null, 2));
/**
 {
  "key": null,
  "ref": null,
  "props": {
    "name": "susa3n"
  },
  "_owner": null,
  "_store": {}
}
 */

// 和上面一样的写法
element = React.createElement(MyComponent, { name: 'susa3n' }) // 和上面的element的结果是一样的
console.log(element);

// 实现render方法，将虚拟dom编译成真实dom插入到页面中
ReactDOM.render(element, document.getElementById('root'));


