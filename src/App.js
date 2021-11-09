import React from 'react';
import axios from 'axios'
import './App.css';

const getPerson = () => {

  return axios.get("https://randomuser.me/api/");
  
}

class App extends React.Component {
  state = {
    person: null
  };

  handleClick = () =>{
    getPerson().then( res  => {
        console.log('res.data.results: ', res.data.results);
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
