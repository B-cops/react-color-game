import React, { Component } from 'react';
import './component.css'
import '../App.css'

export class Game extends Component {

    constructor(props) {  
        super()
        this.tab =new Array() 
        this.tab[0] = "blue"
        this.tab[1] = "red"
        this.tab[2] = "green"
        this.tab[3] = "yellow"
        this.order = new Array()
        this.niveau = 50;
        this.index = 0;
        this.four = 4;
        
    }
    render() {
        const mystyle = {
            color: "white",
        };
        const  randomColor = () => {
            
            return (
                <div></div>
            )
        };
        const getRandomInt = () => {
            return Math.floor(Math.random() * Math.floor(this.four))
        };

        const addNewColor = () => {
            this.order[this.index]=getRandomInt();
            console.log(this.index);
            console.log(this.order[this.index]);
            return 0;
        }
          
        return (
        <div><button className="button1" >start</button>
        <div className="gameColor">
        {addNewColor(0),console.log(this.order[0])}
        <button className={this.tab[0]}></button>
        <button className={this.tab[1]}></button>
        <button className={this.tab[2]}></button>
        <button style={{mystyle}} className={this.tab[3]}></button>
        </div></div>
        )
    }
}

export default Game;