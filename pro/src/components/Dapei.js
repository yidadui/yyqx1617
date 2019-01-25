import React, { Component } from 'react';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import pic1 from "../img/1.jpg";
import pic2 from "../img/j05.png";
import pic3 from "../img/2.jpg";
import Footer from './Footer';
import '../styles/Dapei.css';
import $ from 'jquery';
class Dapei extends Component {

  constructor(props){
    super(props);
    this.state={
      data:[],
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
              src:pic3
              },
              {
              id:"112",
              msg:"大受到了看见快乐的",
              style:{width:'47vw',height:'32vh',background:'#ccc'},
              src:pic2
              },
              {
              id:"113",
              msg:"大受到了看见快乐的",
              style:{width:'47vw',height:'32vh',background:'#ccc'},
                src:pic3
              },
              {
                id:"222",
                msg:"大撒旦撒打算",
                style:{width:'47vw',height:'35vh',background:'#ccc'},
                  src:pic2
              },
              ],
      hlist:[],
    }
  }
  componentDidMount(){
    var str="age=15&channel=xiaomi&hkm_sign2=6efeec6562791cf25f024d1a5163eec5&member_id=1755537&member_type=member&random_key=40832&system_name=android&versionCode=262";
    var str1 = str.split('&');
    var data={};
    for(let i = 0;i<str1.length;i++){
      var brr=str1[i].split("=");
      data[brr[0]]=brr[1];
    }
    console.log(data);
        var _this=this;
    // $.ajax({
    //   type:"GET",
    //   url:"/match-classify",
    //   data:data,
    //   success:function(data){
    //     console.log(111);
    //     console.log(data);
    //   }
    // })
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
      var num = _this.state.imglist[_this.state.imglist.length-1].id;
      brr.push({
      id:num+1,
      msg:"大受到了看见快乐的",
      style:{width:'47vw',height:'32vh',background:'#ccc'},
      src:pic2,
    },);
    brr.push({
    id:num+2,
    msg:"大受到了看见快乐的",
    style:{width:'47vw',height:'35vh',background:'#ccc'},
    src:pic3,
    },
    );
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
            <img  src={pic1}/>
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
            <img src={item.src} style={item.style}/>
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
