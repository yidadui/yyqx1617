import React, { Component } from 'react';
import '../styles/Cart.css';
import $ from 'jquery';
import pic1 from "../img/1.jpg";
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';
import Action from "../redux/Action";
import Store from "../redux/Store";

class Cart extends Component{
    constructor(props){
        super(props)
        this.state={
                list:Store.getState()[0].list

        }
        this.change=this.change.bind(this);
    }
    sub(i){
      Store.dispatch(Action.sub(i));

    }
    add(i){
      Store.dispatch(Action.add(i));
    }
    change(){
        console.log(Store.getState()[0].list);
        this.setState({list:Store.getState()[0].list});
    }
    goback(){
      this.props.history.goBack();
    }
    componentDidMount(){
        Store.subscribe(this.change);
        $('.mid').click(function(){

        })
    }
    render(){
      var _this=this;
        return(
            <div className='Cart'>
                <header className='c-header'>
                            <span onClick={this.goback.bind(this)}>&lt;</span>
                             <b>男衣邦商城</b>
							<em>more</em>
                </header>
                <section className='c-section'>
                    <ul>
                    {
                      this.state.list.map(function(item,i){
                        return(
                          <li>
                              <div className="left"><input type="checkbox"/></div>
                              <div className='right'>
                                  <img src={item.src} className='img'/>
                                  <div className='xinxi'>
                                    <div className='top'>
                                      <h3>六色加绒卫衣</h3>
                                      <h4>连帽卫衣：宝蓝色</h4>
                                   </div>
                                      <div className='sum'>
                                          <span>￥{item.price}</span>
                                          <nav>
                                              <button className='mid' onClick={_this.sub.bind(_this,i)}>-</button>
                                              <input type="text" ref='ipt' value={item.sum}/>
                                              <button className='add' onClick={_this.add.bind(_this,i)}>+</button>
                                          </nav>

                                      </div>
                                  </div>
                              </div>
                          </li>

                        )
                    }
                  )}
                    </ul>






                </section>
                <footer className='c-footer'>
                    <div className='total'>
                        <span>共计：</span>
                        <em>￥{this.state.total}</em>

                    </div>
                    <button>结算</button>
                </footer>
            </div>
        )
    }
}

export default Cart;
