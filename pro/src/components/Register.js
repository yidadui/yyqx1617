
import React, { Component } from 'react';
import creatHistory from 'history/createBrowserHistory' ;
import '../styles/Register.css';


class Register extends Component{
    can(){
            const history = creatHistory();
            history.goBack();
        }
    tap(){

    }
    sure(){

    }
    componentDidMount(){
        let phoneCodeVerification = /^[1][3,4,5,7,8][0-9]{9}$/;
        
    }
    render(){
        
        return(
            <div className='Register'>
                 <header className='z-Rhead'>
                    <span onClick={this.can.bind(this)}>&lt;</span>
                    <b>注册</b>    
                </header>
                <section className='z-Regist'>
                    <div className='phone'>
                        <input type='text' ref='ipt' className='username' placeholder='请输入手机号'/>
                    </div>
                    <div className='pass'>
                        <input type='password' ref='ipt' className='username' placeholder='请输入密码'/>
                    </div>
                    <div className='yzm'>
                        <input type='text' ref='ipt' className='yan' placeholder='请输入验证码'/>
                        <button onClick={this.tap.bind(this)}>验证码</button>
                    </div>
                    <button onClick={this.sure.bind(this)} className='sure'>确定</button>
                    
                </section>
            </div>
        )
    }
}

export default Register;