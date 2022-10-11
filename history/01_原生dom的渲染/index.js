import React from './react';
import ReactDOM from './react-dom';

// let element = (
//   <div className='title' style={{color: 'red'}}>
//     <span>hello</span> world
//   </div>
// )

// 将jsx语法经过babel编译，编译成函数式，实现createElement方法，返回一个虚拟dom
let element = React.createElement("div", {
  className: "title",
  style: {
    color: 'red'
  }
}, /*#__PURE__*/React.createElement("span", null, "hello"), " world");

// console.log(JSON.stringify(element,null,2)); 
/*#__PURE__*/




// 实现render方法，将虚拟dom编译成真实dom插入到页面中
ReactDOM.render(element, document.getElementById('root'));


