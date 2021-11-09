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
      debugger
      console.log('res.data: ', res.data);
    });
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
