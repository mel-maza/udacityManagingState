import React, { Component } from 'react';

class Game extends Component {
 constructor(props) {
  super(props);
  const valuesArray = this.makeNewQuestion(); 
  this.state={
    value1 : valuesArray[0],
    value2 : valuesArray[1],
    value3 : valuesArray[2],
    proposedAnswer : valuesArray[3]
    }
 }
 
 makeNewQuestion = () => {
  const value1 = Math.floor(Math.random() * 100);
  const value2 = Math.floor(Math.random() * 100);
  const value3 = Math.floor(Math.random() * 100);
  const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
  return [value1, value2, value3, proposedAnswer];
 };

updateGame = event => {
  const newValuesArray = this.makeNewQuestion();
  this.setState((currentState) => ({
   value1 : newValuesArray[0],
   value2 : newValuesArray[1],
   value3 : newValuesArray[2],
   proposedAnswer : newValuesArray[3] 
   }));
  this.props.onUpdateScore(this.evaluateAnswer(event.target.name));
}

 evaluateAnswer = (givenAnswer) => {
  const actualNum = this.state.value1 + this.state.value2 + this.state.value3;
  return (
   (actualNum === this.state.proposedAnswer && givenAnswer === "true") ||
   (actualNum !== this.state.proposedAnswer && givenAnswer === "false") 
  )
 }

render() {
 return (
  <div>
   <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.updateGame} name="true">True</button>
          <button onClick={this.updateGame} name="false">False</button>
  </div>
  )
}
}

export default Game;

