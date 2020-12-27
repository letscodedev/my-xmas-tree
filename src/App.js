import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import mainLogo from'./assets/deer.gif';
import Sound from 'react-sound';

import Decorate from "./components/decorate";

export default class App extends Component {
  state = {
    playing: true
  }
  playAudio() {
    this.setState({playing: !this.state.playing})
    console.log(this.state.playing)
    const audioEl = document.getElementsByClassName("audio-element")[0]
    if(this.state.playing) {
      document.getElementById('audioBtn').src = "https://www.flaticon.com/svg/static/icons/svg/633/633940.svg"
      audioEl.play()
    } else {
      document.getElementById('audioBtn').src = "https://www.flaticon.com/svg/static/icons/svg/727/727245.svg"
      audioEl.pause()
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div id="snowflakeContainer">
            <span class="snowflake"></span>
          </div>
          <button id="audio" onClick={() => {this.playAudio()}}><img id="audioBtn" height="40" src="https://www.flaticon.com/svg/static/icons/svg/727/727245.svg"></img></button>
          <audio className="audio-element">
            <source src="./music/ChristmasPresents.mp3"></source>
          </audio>
          <Route path="/" exact>
            <div className="Home">
              <div className="background">
                <h1>My XMAS Tree</h1>
                <Link to="/decorate"><button className="button" data-toggle="modal" data-target="#aboutus">Let's Decorate</button></Link>
                <div className="space"></div>
              </div>
              <img className="deer" src={mainLogo} />
              <img className="deer1" src={mainLogo} />
            </div>
          </Route>
          <Route path="/decorate" exact component={Decorate} />
        </div>
      </Router>
    );
  }
}