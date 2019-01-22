import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Danpin from './components/Danpin';
import Dapei from './components/Dapei';
import Wode from './components/Wode';
import './styles/iconfont.css';
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
      	
        
      </div>
      </Router>
    );
  }
}
export default App;
