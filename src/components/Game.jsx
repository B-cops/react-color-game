import React, { Component } from 'react'
import './component.css'
import '../App.css'
import OrderTrue from './OrderTrue'
import StartGame from './StartGame'
import OrderDisplay from './orderDisplay'
import DefaultColor from './DefaultColor'

export default class Game extends Component {
state = {
        order : new Array(),
        button : true,
        level : 0,
        colorNumbr : 4,
        trueFalse : false,
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
    
    handleClick0 = () => {
        this.setState(OrderTrue(this.state, 0));
        return 0;
      };
    handleClick1 = () => {
        this.setState(OrderTrue(this.state, 1));
        return 1;
      };
    handleClick2 = () => {
        this.setState(OrderTrue(this.state, 2));
        return 2;
      };
    handleClick3 = () => {
        this.setState(OrderTrue(this.state, 3));
        return 3;
      };
    handleClickStart = () => {
      this.setState(StartGame(this.state));
    }

    displayAndVerif = () => {
      for (let i = 0; i < this.state.order.length; i++) {
        console.log(i);
        this.setState(OrderDisplay(this.state, i));
        setTimeout(() => {this.setState(DefaultColor(this.state))}, 500);
      }
    }

    render() {
       return (
        <div>
        <button onClick={this.handleClickStart} className="button1" >start</button>
        <button onClick={this.displayAndVerif} className="button1">next level{this.state.level}</button>
        <div className="gameColor">
        {this.state.displayAndVerif}
        <button onClick={this.handleClick0} className={this.state.tabTempo[0].color}></button>
        <button onClick={this.handleClick1} className={this.state.tabTempo[1].color}></button>
        <button onClick={this.handleClick2} className={this.state.tabTempo[2].color}></button>
        <button onClick={this.handleClick3} className={this.state.tabTempo[3].color}></button>
        </div></div>
        )
    }
}