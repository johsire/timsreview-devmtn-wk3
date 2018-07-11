import React, { Component } from 'react';
import axios from 'axios';

import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      text: '',
      input: '',
      color: ''
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

  handleClick() {
    axios.post('/cat', { input: this.state.input, color: this.state.color }). then(results => {
      console.l
    })
  }


  render() {
    return (
      <div className="App">
       <p>Dog</p>
       <input placeholder="put in some text" onChange={(e) => this.handleChange(e.target.value)} />
       <button onClick={(e) => this.handleClick(e.target.value)}>Send to server via post</button>
      </div>
    );
  }
}

export default App;
