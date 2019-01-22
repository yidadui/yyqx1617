

import React, { Component } from 'react';
import '../styles/Login.css';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';


class Login extends Component{
    register(){
         this.props.history.push('/register')
    }
    render(){
        return(
            <div className='Login'>
                <header className='z-head'>
                    <span>取消</span>
                    <b>登陆</b>
                    
                </header>
                <section className='z-login'>
                    <nav>
                        <h2>男衣邦</h2>
                        <p>nanyibang.com</p>
                    </nav>
                    <div className='zhang'>
                        <span>账号</span>
                        <input type='text' ref='ipt' className='username' placeholder='请输入手机号'/>
                    </div> 
                    <div className='mima'>
                        <span>密码</span>
                        <input type='password' ref='ipt' className='password' placeholder='请输入密码'/>
                    </div>
                    <div className='btn'>
                        <button onClick={this.register.bind(this)}>注册</button> 
                        <button>登陆</button>
                    </div>
                    
                    
                </section>
            </div>
        )
    }

}


export default Login; 