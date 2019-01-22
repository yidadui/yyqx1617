import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import Footer from './Footer';
import '../styles/Dapei.css';
import $ from 'jquery';
class Dapei extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[
            {lpic:'',ltit:"休闲",lid:'111'},
            {lpic:'',ltit:"商务",lid:'112'},
            {lpic:'',ltit:"运动",lid:'113'},
            {lpic:'',ltit:"简约",lid:'114'},
            {lpic:'',ltit:"欧美",lid:'115'},
            {lpic:'',ltit:"英伦",lid:'116'},
            {lpic:'',ltit:"韩风",lid:'117'},
            {lpic:'',ltit:"日系",lid:'118'},
            {lpic:'',ltit:"复古",lid:'119'},
            {lpic:'',ltit:"街头范",lid:'110'},
            {lpic:'',ltit:"微胖界",lid:'121'},
            {lpic:'',ltit:"设计师",lid:'122'}],
      imglist:[
              {
              id:"111",
              msg:"大受到了看见快乐的",
              style:{width:'47vw',height:'32vh',background:'#ccc'},
              },
              {
              id:"112",
              msg:"大受到了看见快乐的",
              style:{width:'47vw',height:'32vh',background:'#ccc'},
              },
              {
              id:"113",
              msg:"大受到了看见快乐的",
              style:{width:'47vw',height:'32vh',background:'#ccc'},
              },
              {
                id:"222",
                msg:"大撒旦撒打算",
                style:{width:'47vw',height:'35vh',background:'#ccc'},
              },
              ],
      hlist:[],
    }
  }
  componentDidMount(){
    var _this=this;
  $(".ld-sect").on("scroll",function(){
    var h1 = 0;
    var h2 = 0;
    for(let i = 0 ; i <$(".detail-tag").length;i++){
      if(i%2==0){
        h1+=$(".detail-tag").eq(i).height();
      }else{
        h2+=$(".detail-tag").eq(i).height();
      }
      if(h1<h2){
        var min=h1;
      }else{
        var min=h2;
      }
    }
    var height=this.offsetHeight-$(".ld-sect h2").eq(0).height()-$(".ld-sect h2").eq(1).height()-$(".ld-sect nav").eq(0).height()+this.scrollTop;
      console.log(min,height);
    if(height>min){
      var brr=_this.state.imglist;
      brr.push({
      id:"111",
      msg:"大受到了看见快乐的",
      style:{width:'47vw',height:'32vh',background:'#ccc'},
    },);
    brr.push({
    id:"111",
    msg:"大受到了看见快乐的",
    style:{width:'47vw',height:'35vh',background:'#ccc'},
    },);
    _this.setState({imglist:brr});
    }
  })
  }
  render() {
    return (
      <div className="Dapei">
      <header className="ld-head">
        <p>搭配</p>
      </header>
      <section className="ld-sect">
            <h2>风格</h2>
      <nav className="ld-list">
      {
        this.state.list.map(function(item,i){
          return(
            <NavLink to={"/listshow/"+item.lid} className="ld-tag" key={i}>
            <img  src={item.lpic}/>
            <p>{item.ltit}</p>
            </NavLink>
          )
        })
      }
        </nav>
        <div className="ld-jx">
        <h2>搭配精选<span>OUTFIT</span></h2>
        <article>
        {
          this.state.imglist.map(function(item,i){
            return(
            <NavLink to={"/detail/"+item.id} className="detail-tag" key={i}>
            <dl>
            <dt>
            <img src="" style={item.style}/>
            </dt>
            <dd>{item.msg}</dd>
            </dl>
            </NavLink>
          )
          })
        }
        </article>
        </div>
      </section>
        <Footer/>
      </div>
    );
  }
}

export default Dapei;
