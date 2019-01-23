

import React, { Component } from 'react';
import '../styles/Login.css';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import creatHistory from 'history/createBrowserHistory' ;
import $ from 'jquery'


class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    register(){
         this.props.history.push('/register')
    }
    cancle(){
        const history = creatHistory();
        history.goBack();
    }
    componentDidMount(){
        console.log(this.refs.ipt.value)
        $('.username')[0].oninput=function(){
            console.log("aaa")
              this.value=this.value.substr(0,11)
              
             
        }
    }
    login(){
        var _this=this;
        console.log(_this.refs.ipt.value)
        $.ajax({
            type:'get',
            url:'',
            async:false,
            dataType:"json",
            data:{username:_this.refs.ipt.value,password:_this.refs.ipts.value},
            success:function(data){
                
            }
        })
    }
   
    render(){
        return(
            <div className='Login'>
                <header className='z-head'>
                    <span onClick={this.cancle.bind(this)}>取消</span>
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
                        <input type='password' ref='ipts' className='password' placeholder='请输入密码'/>
                    </div>
                    <div className='btn'>
                        <button onClick={this.register.bind(this)}>注册</button> 
                        <button onClick={this.login.bind(this)}>登陆</button>
                    </div>
                    
                    
                </section>
            </div>
        )
    }

}


export default Login; 