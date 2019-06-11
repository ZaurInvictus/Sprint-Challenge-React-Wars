import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    };
  }


  componentDidMount() {
    this.dogs('https://dog.ceo/api/breeds/image/random');
  }

  dogs = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        this.setState({ 
           dogs: data.message
        }); 
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextDog = () => {
    // window.location.reload();
    this.dogs('https://dog.ceo/api/breeds/image/random');
  }

  render() {
    return (
      <div className="App">
      <div className='header'>
        <h1 className="Header">Cute and not so cute Dogs API</h1>
        <button onClick={this.nextDog}>Fetch</button>
      </div>
        <img className="dog-img" src= {this.state.dogs} />
      </div>
    );
  }
}

export default App;
