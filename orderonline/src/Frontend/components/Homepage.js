import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { productaction } from "../actions";
import {connect} from 'react-redux'
import { Buffer } from 'buffer';

class Content extends Component {
  componentDidMount() {
    var $ = window.jQuery;

    $(".menuoffront li:not(:first-child)").hover(
      function () {
        $($(this)[0].childNodes[0]).show();
        $($(this)).css("background", "red");
      },
      function () {
        $($(this)[0].childNodes[0]).hide();
        $($(this)).css("background", "transparent");
      }
    );

    $(".butto").hover(
        function () {
          $($(this)).css({"background":"red","color":'white'});
        },
        function () {
          $($(this)).css({"background":"transparent","color":'black'});
        }
      );

      $(window).scroll(function () { 
       if(window.scrollY >= 100){
        $('.headerofmain').css('background','rgba(5, 5, 5, 0.8)')
        $('.after').html(`.headerofmain::after{
            content: '';
            position: absolute;
            background: url(http://glorywebsdemo.com/themeforest/html/carveordering/images/border.png);
            bottom: -2px;
            width: inherit;
            height: 7px;`);
       
       }else{
        $('.headerofmain').css('background','transparent')
        $('.after').html(`.headerofmain::after{
            content: '';
            position: absolute;
            display:none;
            background: url(http://glorywebsdemo.com/themeforest/html/carveordering/images/border.png);
            bottom: -2px;
            width: inherit;
            height: 7px;`);
       }
        
      });
      var s = ' 01 234 567 890'.match(/\d/g).map((x,i) => {
        if(i == 0 || i== 2 || i == 5){
            return ' '+x
        }else{}
                 return x
        
        })
        setTimeout(() => {
            
        }, 300);
        var ss = 0 
       var sss =  setInterval(() => {
            if(ss == s.length){
clearInterval(sss)
return
            }
            $('.subheadoffront span')[0].innerHTML+=s[ss]
            ss++
        }, 700);

        this.props.productaction("true")

  }
  renderpopularlist = () => {
    console.log(Buffer)
    var sss = this.props.productlist
    console.log(sss)

    var firstfour = [...sss.slice(0,4)].map((x,i) => {
        return(
         <div key={i} className="listofpopular" style={{margin: "auto",'margin-right':"0"}}>
                    <div class="border"><div class="top"></div><div class="left"></div><div class="right"></div> <div class="bottom"></div></div>
                    <div style={{position:'relative'}}>
        <div class="border"><div class="right"></div></div>

        <img src={`data:image/png;base64,${Buffer.from(x.avatar.data).toString('base64')}`}></img>
        </div>
         <div className="inn">
           <h1>{x.description}</h1>
           <p>{x.paragraph}</p>
           <div className="topofprice">
             <p  className='price' >
             $<span>{x.price}</span>
             </p>
             <div className="butto" style={{position:"relative"}}>
             <div class="border"><div class="top"></div><div class="left"></div><div class="right"></div> <div class="bottom"></div></div>
             <span >add to cart</span>
             </div>
           </div>
         </div>
       </div>
        )
     })
     var secondfour = [...sss.slice(4,8)].map((x,i) => {
         return(
          <div  key={i}  className="listofpopular" style={{margin: "auto",marginLeft:"20px"}}>
                    <div class="border"><div class="top"></div><div class="left"></div><div class="right"></div> <div class="bottom"></div></div>

        <div style={{position:'relative'}}>
        <div class="border"><div class="right"></div></div>

        <img src={`data:image/png;base64,${Buffer.from(x.avatar.data).toString('base64')}`}></img>
        </div>
          <div className="inn">
          <h1>{x.description}</h1>
          <p>{x.paragraph}</p>
            <div className="topofprice">
              <p  className='price' >
                $<span>{x.price}</span>
              </p>
              <div className="butto" style={{position:"relative"}}>
             <div class="border"><div class="top"></div><div class="left"></div><div class="right"></div> <div class="bottom"></div></div>
             <span >add to cart</span>
             </div>
            </div>
          </div>
        </div>)
     })
   return [firstfour,secondfour]
  };

  render() {
console.log(this.renderpopularlist())
    return (
      <React.Fragment>
        <div className="headerofmain" style={{ padding: "10px 0px" }}>
          <Header />
        </div>
        <div className="frontimage">
          <Container>
            <Row className="headlineoffront">
              <Col>
                <h1 className="mainheadoffront">Order Online Your Food</h1>
                <h2 style={{ color: "yellow" }} className="subheadoffront">
                  Call us<span style={{ color: "white" }}></span>
                </h2>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="ourmenu">
          <Container>
            <Row>
              <Col>
                <ul className="menuoffront">
                  <li>
                    <div className="border">
                      <div className="top"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>
                    <span>Pizza</span>
                  </li>
                  <li>
                    <div className="border">
                      <div className="top"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>
                    <span>Burgers</span>
                  </li>
                  <li>
                    <div className="border">
                      <div className="top"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>
                    <span>Salads</span>
                  </li>
                  <li>
                    <div className="border">
                      <div className="top"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>
                    <span>Fries</span>
                  </li>
                  <li>
                    <div className="border">
                      <div className="top"></div>
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>
                    <span>Drinks</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <Container id="secondoffluid" fluid>
            <Row>
              <Col>
                <ul className="listoficon">
                  <li>
                    <div className="firstoffront"></div>
                    <img src="http://glorywebsdemo.com/themeforest/html/carveordering/images/h_img1.png"></img>
                  </li>
                  <li>
                    <div className="secondoffront"></div>
                  </li>

                  <li>
                    <div className="thirdoffront"></div>
                    <img
                      src="    http://glorywebsdemo.com/themeforest/html/carveordering/images/h_img2.png
"
                    ></img>
                  </li>
                  <li>
                    <div className="secondoffront"></div>
                  </li>

                  <li>
                    <div className="thirdoffront"></div>
                    <img src="http://glorywebsdemo.com/themeforest/html/carveordering/images/h_img1.png"></img>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <Container id="thirdfront">
            <Row>
              <Col>
                <h1 style={{ textAlign: "center" }}>Popular Our Food</h1>
                <p  style={{ textAlign: "center",fontSize:"16px"}}>
                  Choose from over 30 craveable toppings to make your perfect
                  Food.
                  <br />
                  Don’t love what you ordered? Let us know. We’re all about
                  second chances.
                </p>
              </Col>
            </Row>
            <Row style={{marginTop:'40px'}}>
            <Col md={6}>
                {this.renderpopularlist()[0]}
</Col>
<Col md={6}>
{this.renderpopularlist()[1]}

</Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
const mapstate = (state) => {
  return { productlist: state.productget };
};

export default connect(mapstate, { productaction })(Content);
