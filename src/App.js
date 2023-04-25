import React, { Component } from 'react';
import './style.css';


class App extends Component {
  constructor(props) {
    super(props);
​
    this.state = {
      name: '',
      displayName: ''
    };
  }
  
  handleChange = evt => {
    this.setState({
      name: evt.target.value
    });
    };

  render() {
    return (
      <>
      <h1>Welcome to My Greeting Application!</h1>
      <p> Hi there, {this.state.displayName || "we have not been introduced."}
        </p>
        <p>If you would enter your name below so we can get better acquainted.</p>
        <input value={this.state.name} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Name</button>
      </>
    );
  }
}


export default App;



