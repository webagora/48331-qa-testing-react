import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  state = {
    person: null
  };

  handleClick = () =>{
    axios.get("https://randomuser.me/api/")
    .then((res) => {
      // debugger
      this.setState({
        person:res.data.results[0] 
      })
    });
  }

  render() {
    console.log('this.state.person: ', this.state.person );
    return (
        <div className="App">
          <button onClick ={this.handleClick}>api call</button>
          {this.state.person && <div>{this.state.person.name.first}</div>}
        </div>
    );
  }
}

export default App;
