import React, { Component } from "react";
import './App.css';
import HowToPlay from './components/HowToPlay.jsx';
import {BrowserRouter , Route , Link} from 'react-router-dom';
import ButtonPlay from './components/ButtonPlay';
import Game from "./components/Game.jsx";

class App extends Component {
  state = {
    displaySignUpInfo : false,
    displayGame : false
  }

  handleClickPlay = () => this.setState({
    displayGame : !this.state.displayGame
  })

  handleClickHowToPlay = () => this.setState({
    displaySignUpInfo : !this.state.displaySignUpInfo
  })
  render() {

    const showHowToPlay = this.state.displaySignUpInfo? (<HowToPlay />):(<div></div>);
    const showLobby = this.state.displayGame? (<Game />):(
       <div class="app">
        
    <h1>b rain</h1>
    
    <button className="button1" onClick={this.handleClickPlay}>Play</button>

    <div class="HowToPlay">
      <br />
        <button className="button1" onClick={this.handleClickHowToPlay}>How to play</button><br /><br />
      </div> 

      {showHowToPlay}
  </div>);
    return(<div>
     {showLobby}
     </div>
    )
    }}

export default App;