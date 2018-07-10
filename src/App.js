import React, { Component } from 'react';
import axios from 'axios';

import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }
  }


  componentDidMount() {
    axios.get('/api/dog').then(results => {
      this.setState({ text: results.data })
    })
  }

  handleChange(input) {
    this.setState({ input: input })
  }


  render() {
    return (
      <div className="App">
       <p>Dog</p>
       <input placeholder="put in some text" />
       <button onChange={(e) => this.handleChange(e.target.value)}>Send to server via post</button>
      </div>
    );
  }
}

export default App;
