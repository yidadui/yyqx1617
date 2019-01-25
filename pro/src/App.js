import React, { Component } from 'react';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import AnimatedRouter from 'react-animated-router';
import 'react-animated-router/animate.css';
import './App.css';
import Home from './components/Home';
import Danpin from './components/Danpin';
import Dapei from './components/Dapei';
import Wode from './components/Wode';
import Login from './components/Login';
import Register from './components/Register';
import Detail from './components/detail';
import style from './styles/iconfont.css';
import Chaopin from './components/Chaopin';
import Guwen from './components/Guwen';
import Xingnan from './components/Xingnan';
import Cart from './components/Cart';
import './styles/iconfont.css';
class App extends Component {
  render() {
    return (
    	<Router>
      <div className="App">


      <AnimatedRouter>
		        <Route path="/home" component={Home}></Route>
		        <Route path="/danpin" component={Danpin}></Route>
		        <Route path="/dapei" component={Dapei}></Route>
		        <Route path="/wode" component={Wode}></Route>
						<Route path="/login" component={Login}></Route>
						<Route path="/register" component={Register}></Route>
						<Route path="/detail/:id" component={Detail}></Route>
            <Route path="/chaopin" component={Chaopin}></Route>
						<Route path="/guwen" component={Guwen}></Route>
						<Route path="/xingnan" component={Xingnan}></Route>
						<Route path="/cart" component={Cart}></Route>

						


		        <Redirect to="/home"/>
		  </AnimatedRouter>


      </div>
      </Router>
    );
  }
}
export default App;
