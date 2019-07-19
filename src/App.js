import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Transcription from "./components/Transcription";
import Translation from "./components/Translation";
import UserLibrary from "./components/UserLibrary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userArr: [],
      userInput: {
        name: "Default",
        DNA: "Please add DNA bases",
        RNA: "Please transcribe your DNA",
        aminoAcids: "Please translate your DNA"
      }
    };
    this.tLateFn = this.tLateFn.bind(this);
    this.tScripFn = this.tScripFn.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleDNA = this.handleDNA.bind(this);
    this.saveFn = this.saveFn.bind(this);
    this.deleteFn = this.deleteFn.bind(this);
  }

  //--------------------COMPONENTDIDMOUNT()------------------------------//

  componentDidMount() {
    //Gets [] from server/userLib
    axios.get("./api/geneticmaterial").then(res => {
      this.setState({ userArr: res.data });
    });
  }

  //-----------------------FUNCTIONS-------------------------------------//

  resetUserInput() {
    this.setState({
      userInput: {
        name: "Default",
        DNA: "Please add DNA bases",
        RNA: "Please transcribe your DNA",
        aminoAcids: "Please translate your DNA"
      }
    });
  }

  handleName(userName) {
    this.setState({ userInput: { name: userName } });
    // if (this.state.userInput.name !== "Default" && this.state.userInput.DNA !== "Please add DNA bases") {
    //   this.setState(userArr: [...userArr, userInput])
    // }
  }
  handleDNA(userDNA) {
    this.setState({ userInput: { DNA: userDNA.toUpperCase() } });
  }

  //Fn for translate button in TLateButton.js
  tLateFn() {
    return "tLateFn temp";
  }
  //Fn for translate button in TLateButton.js
  tScripFn(str) {
    str = this.state.userInput.DNA
    str.map(x => x === "T" ? x = "U" : null)
  }

  //---------------------AXIOS PROMISES-------------------------------------//

  saveFn(id, body) {
    axios.put(`/api/geneticmaterial/${id}`, body).then(res => {
      this.setState({ userArr: res.data });
    });
  }

  deleteFn(id) {
    axios.delete(`/api/geneticmaterial/${id}`).then(res => {
      this.setState({ userArr: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <UserInput
          userArr={this.state.userArr}
          handleName={this.handleName}
          handleDNA={this.handleDNA}
          tLateFn={this.tLateFn}
          tScripFn={this.tScripFn}
        />
        <Transcription userArr={this.state.userArr} />
        <Translation userArr={this.state.userArr} />
        <UserLibrary
          userArr={this.state.userArr}
          saveFn={this.saveFn}
          deleteFn={this.deleteFn}
        />
      </div>
    );
  }
}

export default App;
