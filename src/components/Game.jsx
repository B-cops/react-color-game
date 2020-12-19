import React, { Component } from 'react'
import './component.css'
import '../App.css'
import OrderTrue from './OrderTrue'
import OrderDisplay from './OrderDisplay'
import DefaultColor from './DefaultColor'
import AddRandom from './AddRandom'

export default class Game extends Component {
state = {
        order : new Array(),
        orderTempo : new Array(),
        newGameButton : false,
        level : 1,
        loser : "",
        correct :"",
        clickNext: "",
        clickNew: "",
        colorNumbr : 4,
        trueFalse : true,
        answerNumbr: 0,
        index : 0,
        four : 4,
        tabPosition : [
            {color:'blueOff'},{color:'redOff'},{color:'greenOff'},{color:'yellowOff'},{color:'white'},
        ],
        tabColor : [
            {color:'blueOn'},{color:'redOn'},{color:'greenOn'},{color:'yellowOn'},{color:'white'},
        ],
        tabTempo :  [
            {color:'blueOff'},{color:'redOff'},{color:'greenOff'},{color:'yellowOff'},{color:'white'},
        ],
    }
    
    handleClick0 = () => {this.setState(OrderTrue(this.state, 0));return 0;};
    handleClick1 = () => {this.setState(OrderTrue(this.state, 1));return 1;};
    handleClick2 = () => {this.setState(OrderTrue(this.state, 2));return 2;};
    handleClick3 = () => {this.setState(OrderTrue(this.state, 3));return 3;};
    displayAndVerif = () => {
      this.state.correct="";
      this.state.clickNext="";
      this.state.level = this.state.level +1 ;
      let time = 0 ;
      for (let i = 0; i < this.state.order.length; i++) {
        setTimeout(() => {this.setState(OrderDisplay(this.state, i))}, time);
        time = time + 500;
        setTimeout(() => {this.setState(DefaultColor(this.state))}, time);
      }
      this.setState(AddRandom(this.state,this.state.order.length));
      this.state.index = 0;
    };

    handleClickStart = () => {
      this.state.order = new Array();
      this.state.index = 0;
      this.state.newGameButton = true;
      this.state.trueFalse=true;
      this.state.level = 0;
      this.state.loser = "";
      this.state.clickNew= "";
      this.state.correct="";
      this.state.clickNext="";
      this.setState(AddRandom(this.state,this.state.order.length));
      this.setState(OrderDisplay(this.state, 0));
      setTimeout(() => {this.setState(DefaultColor(this.state))}, 500);
      this.displayAndVerif();
    }

    wrongAnswer = () => {
      if (this.state.trueFalse==false) {
        this.state.order = new Array();
        this.state.index = 0;
        this.state.level = 0;
        this.state.loser = "loser";
        this.state.clickNew="click on new game";
        return <h3 className="loser">{this.state.loser}<br />{this.state.clickNew}</h3>
      }else if ((this.state.trueFalse==true)&&((this.state.index+1)==this.state.order.length)&&(!(this.state.order.length==0))) {
        this.state.correct ="correct answer !";
        this.state.clickNext= "click on next level";
        return <h3 className="loser">{this.state.correct}<br />{this.state.clickNext}</h3>
      }else if(this.state.level==1){

        if (this.state.newGameButton==false){
        return <h3 className="loser">click on new game</h3>
      }else{
        return <h3 className="loser">choose {this.state.level} color</h3>
      }}
      else {
        return <h3 className="loser">choose {this.state.level} colors</h3>
      }
    }
    render() {
       return (
        <div>
        <div className="gameColor">
        <button onClick={this.handleClickStart} className="button1" >new game</button>
        <button onClick={this.displayAndVerif} className="button1">next level({this.state.level})</button>
        {this.wrongAnswer()}
        <button onClick={this.handleClick0} className={this.state.tabTempo[0].color}></button>
        <button onClick={this.handleClick1} className={this.state.tabTempo[1].color}></button>
        <button onClick={this.handleClick2} className={this.state.tabTempo[2].color}></button>
        <button onClick={this.handleClick3} className={this.state.tabTempo[3].color}></button>
        </div></div>
        )
    }
}