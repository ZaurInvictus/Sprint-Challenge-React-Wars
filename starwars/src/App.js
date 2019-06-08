import React, { Component } from 'react';
import './App.css';
import Star from './components/StarWars'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        console.log('Next Page', data.next);
        this.setState({ starwarsChars: data.results });
     
        //Pagination system that looping and loading all pages
          if(data.next !== null) {
             this.getCharacters(data.next)
          } else if (data.next == null){
            this.getCharacters('https://swapi.co/api/people/')
          }
          
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {this.state.starwarsChars.map((item, index) => {
          return <Star star={item} key={index} />
        })}
      </div>
    );
  }
}

export default App;
