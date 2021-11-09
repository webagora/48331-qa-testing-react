import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    person: null
  };

  handleClick = () =>{
    console.log('click');
  }

  render() {
    console.log(this.state.person);
    return (
        <div className="App">
          <button onClick ={this.handleClick}>api call</button>
        </div>
    );
  }
}

export default App;
