import {HashRouter as Router} from 'react-router-dom';
import React, { Component } from 'react';
import creatHistory from 'history/createBrowserHistory' ;
import '../styles/Register.css';
import $ from 'jquery'

class Register extends Component{
    can(){
            const history = creatHistory();
            history.goBack();
        }
    tap(){

    }
    sure(){
    	var _this=this;
		$.ajax({
		    type:"get",
		    url:"http://jx.xuzhixiang.top/ap/api/reg.php",
		    dataType:'json',
		    data:{username:_this.refs.ipt.value,password:_this.refs.ipt1.value},
		    success:function(data){
		    	console.log(data)
		    	if(data.code==1){
		    		alert("注册成功")
		    		_this.props.history.push("/login")
		    	}


		    }
		})
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
                        <input type='password' ref='ipt1' className='username' placeholder='请输入密码'/>
                    </div>
                    <div className='yzm'>

                    </div>
                    <button onClick={this.sure.bind(this)} className='sure'>确定</button>

                </section>
            </div>
        )
    }
}

export default Register;
