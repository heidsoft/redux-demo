import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Toggle from './Toggle';
import Button from '@material-ui/core/Button';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { configureStore } from '@reduxjs/toolkit'
// import { store } from './app/store';
// import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// 配置store信息
const store = configureStore({
    reducer: null
})

// reduce 测试
const sum = [0, 1, 2, 3].reduce(function (acc, val) {
    return acc + val;
}, 0);
console.log(sum)

const app_name = "jake";

// 直接渲染
// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
// );

// 间接渲染
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// 基于组建继承方式获得组建
class Welcome extends React.Component{
    render(){
        console.log("构建组建");
        console.log(this.props);
        return <h1>Hello, {this.props.name}</h1>;
    }
}

// 事件处理
// function ActionLink(){
//     function handleClick(e) {
//         e.preventDefault();
//         console.log('The link was clicked.');
//     }
//
//     //定义链接处理
//     return (
//         <a href="#" onClick={handleClick}>
//             Click me
//         </a>
//     );
// }
// 函数方式构建组建
// 组建内调用函数采用{}
function App(props){
    console.log("App属性内容")
    console.log(props)
    return (
        <div>
            <Welcome name="c"/>
            <Welcome name={props.title}/>
            <Clock date={new Date()}/>
            <Toggle/>
            <Button variant="contained">Material-UI</Button>
            <DatePicker></DatePicker>
        </div>
    )
}

console.log(App)

// 测试return 带参无名函数
function TestApp(){
    return    ("abc");
}

console.log(TestApp());
console.log(("ABC"));
console.log({});

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// }
//
// setInterval(tick, 1000);

// 箭头函数测试
function test1(a){
    return a + 100;
}
console.log(test1(1000))

class Clock extends React.Component{
    // 构造函数
    constructor(props) {
        // 继承父组建
        console.log("start------parent----");
        console.log(props);
        console.log("end------parent----");
        super(props);
        // 增加状态管理
        this.state = {date: new Date()};
    }

    // 组建生命周期函数
    componentDidMount() {
        console.log("组建mount");
        console.log(this);
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

        fetch('/echo/get/json',{
            // mode: 'no-cors',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'X-Requested-With',
                'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS',
            }})
            .then((res) => {
                console.log("GET请求响应")
                console.log(res)
                return res.json();
            })
            .then((res) => {
                console.log("正常响应内容是");
                console.log(res);
            },(error) => {
                console.log("错误响应内容是");
                console.log(error);
            })
    }

    // 组建生命周期函数
    componentWillUnmount() {
        console.log("组建unmount");
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return(
            <div>
                <h2>当前时间 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

class Test{
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }

    hello(){
        console.log(this.age)
        console.log(this.name)
    }
}
console.log("test..class")
console.log(new Test("jake","20"))
console.log(typeof(Test))
console.log(app_name);
const element = <Welcome name={app_name} age={12} book={["java","c++","python"]}/>;
console.log(element);
ReactDOM.render(
    <App title="测试应用"/>,
    document.getElementById('root')
);

// 启动严格模式
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
