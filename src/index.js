import React from './react';
import ReactDOM from './react-dom';

// import React from 'react';
// import ReactDOM from 'react-dom';

function MyComponent(props) {
  return (<div className='title'>
    <span>hello</span>  
    <hr />
    {props.name}
  </div>)
}

class ClassComponent extends React.Component {
  render() {
    return (<div className='title'>
    <span>hello</span>  
    <hr />
    {this.props.name}
  </div>)
  }
}
let element1 = <MyComponent name="susa3n"></MyComponent>
let element2 = <ClassComponent name="susa3n" />
console.log(element2); // 其中type属性是一个类 class,表明是那个类创建出来的组件
// 类组件会继承React.Component类组件，其中Component类的原型上有一个isReactComponent属性 说明为类组件

/**
 * 组件分为内置原生组件和自定义组件
 * 内置组件 p h1 span type字符串
 * 自定义组件 类型是一个函数或者是一个类，类组件会继承React.Component组件
 * 自定义组件的名称必须是大写字符开头
 * 自定组件的返回值只能有一个根元素
 * 
 */



// 实现render方法，将虚拟dom编译成真实dom插入到页面中
ReactDOM.render(element2, document.getElementById('root'));


