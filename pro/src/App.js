import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Danpin from './components/Danpin';
import Dapei from './components/Dapei';
import Wode from './components/Wode';
import './styles/iconfont.css';
	{/*document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);*/}
class App extends Component {
  render() {
    return (
    	<Router>
      <div className="App">
      
      
      	
      	{/*<section>*/}

      		<Switch>
		        <Route path="/home" component={Home}></Route>
		        <Route path="/danpin" component={Danpin}></Route>
		        <Route path="/dapei" component={Dapei}></Route>
		        <Route path="/wode" component={Wode}></Route>
		        
		        <Redirect to="/home"/>
		        </Switch>
      	{/*</section>*/}
      	<footer>
        
	        <div className="foo">
		        <NavLink to="/home" className="jiao">
			        <span className="iconfont">&#xe60c;</span>
			        <span>首页</span>
		        </NavLink>
		        <NavLink to="/danpin" className="jiao">
		        	<span className="iconfont">&#xe609;</span>
			        <span>单品</span>
		        </NavLink>
		        <NavLink to="/dapei" className="jiao">
		        	<span className="iconfont">&#xe631;</span>
			        <span>搭配</span>
		        </NavLink>
		        <NavLink to="/wode" className="jiao">
		        	<span className="iconfont">&#xe519;</span>
			        <span>我的</span>
		        </NavLink>
		        
		      </div>
        
        </footer>
        
      </div>
      </Router>
    );
  }
}
export default App;
