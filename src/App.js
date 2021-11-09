import React from 'react';
import './App.css';

import getPerson from './api/getPerson';

class App extends React.Component {
  state = {
    person: null
  };

  handleClick = () =>{
    getPerson().then( (person ) => {
        // console.log('res.data.results: ', res.data.results);
        this.setState({
          ...this.state,
          person: person
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
