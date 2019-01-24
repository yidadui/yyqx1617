import React, { Component } from 'react';
import '../styles/Cart.css';
import $ from 'jquery'



class Cart extends Component{
    constructor(props){
        super(props)
        this.state={
                total:'99.00',
                sum:'0'
        }
    }

    componentDidMount(){
        
        $('.mid').click(function(){
          
        })
    }
    render(){
        return(
            <div className='Cart'>
                <header className='c-header'>
                            <span>&lt;</span>
                             <b>男衣邦商城</b>
							<em>more</em>
                </header>
                <section className='c-section'>
                    <ul>
                        <li>
                            <div className="left"><input type="checkbox"/></div>
                            <div className='right'>
                                <div className='img'></div>
                                <div className='xinxi'>
                                  <div className='top'>
                                    <h3>六色加绒卫衣（99特卖）</h3>
                                    <h4>连帽卫衣：宝蓝色</h4>
                                 </div>
                                    <div className='sum'>
                                        <span>￥99.00</span>
                                        <nav>
                                            <button className='mid'>-</button>
                                            <input type="text" ref='ipt' defaultValue={this.state.sum}/>
                                            <button className='add'>+</button>
                                        </nav>
                                        
                                    </div>
                                </div>
                            </div>
                        </li>
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