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
          // if(data.next !== null) {
          //    this.getCharacters(data.next)
          // } else if (data.next == null){
          //   this.getCharacters('https://swapi.co/api/people/')
          // }
      })
      .catch(err => {
        throw new Error(err);
      });
  };

 
  //Pagination System with Buttons
  page1 = () => {
    this.getCharacters( `https://swapi.co/api/people/?page=1`);
  }
  page2 = () => {
     this.getCharacters( `https://swapi.co/api/people/?page=2`);
   }
  page3 = () => {
     this.getCharacters( `https://swapi.co/api/people/?page=3`);
   }
  page4 = () => {
     this.getCharacters( `https://swapi.co/api/people/?page=4`);
   }
  page5 = () => {
     this.getCharacters( `https://swapi.co/api/people/?page=5`);
   }
  

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <button onClick={this.page1}>Page 1</button>
        <button onClick={this.page2}>Page 2</button>
        <button onClick={this.page3}>Page 3</button>
        <button onClick={this.page4}>Page 4</button>
        <button onClick={this.page5}>Page 5</button>
        {this.state.starwarsChars.map((item, index) => {
          return <Star star={item} key={index} />
        })}
      </div>
    );
  }
}

export default App;
