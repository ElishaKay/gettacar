import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'

import { getCarsAndFilters,
          getCategoryArticles,
          getCountryArticles,
          getCountryArticlesByIP
       } from './actions/cars'

import { Cars } from './components/Cars'
import Select from 'react-select';

class App extends Component {

  state = {
    makes: [],
    models: [],
    colors: [],
    cars:[],
    selectedMake: '',
    selectedModel: '',
    selectedColor: '',
    search: ''
  }

  componentDidMount(){
    getCarsAndFilters()
      .then(response => {
        let {uniqueMakes, uniqueModels, uniqueColors} = response.allFilters;
        let {cars} = response;
        this.setState({cars, makes: uniqueMakes, models: uniqueModels, colors: uniqueColors})
      });
  }

  // onSelectCategory(opt){
  //   let category = opt.value;
  //   getCategoryArticles(opt.value)
  //     .then(cars => {
  //       console.log('cars', cars)
  //       this.setState({selectedMake: category, selectedCountry: '', cars})
  //     });
  // }

  // onSelectCountry(opt){
  //   console.log(opt)
  //   getCountryArticles(opt.value)
  //     .then(cars => {
  //       console.log('cars', cars)
  //       this.setState({selectedCountry: opt.value, selectedCategory: '', cars, ip: ''})
  //     });
  // }

  // handleIPChange(event) {
  //   this.setState({search: event.target.value});
  // }

  // handleIPSubmit(event){
  //   event.preventDefault();

  //   getCountryArticlesByIP(this.state.ip)
  //     .then(response => {
  //       console.log('cars', response.cars)
  //       this.setState({selectedCategory: '', selectedCountry: response.selectedCountry, cars: response.headlines})
  //     });
  // }

  render() {
    let {selectedCategory, selectedCountry} = this.state;

    return (
      <div className="App">
        <Header></Header>
        {/*<div className="row filter-options">
            <div className="col-md-2">
                Search By Category
                <Select
                  options={Categories}
                  value={selectedCategory || ''}
                  onChange={this.onSelectCategory.bind(this)}
                />  
            </div>
            <div className="col-md-2">
              Search By Country
                <Select
                  value={selectedCountry || ''}
                  options={Countries}
                  onChange={this.onSelectCountry.bind(this)}
                />  
            </div>
            <form className="col-md-2" onSubmit={this.handleIPSubmit.bind(this)}>
              <label>
                Search By IP
                <input className="form-control" 
                  type="text" 
                  value={this.state.ip}
                  onChange={this.handleIPChange.bind(this)}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
        </div>

        <center>
          <h1 className="currently-viewing">{selectedCategory || selectedCountry}</h1>
        </center>*/

        <div >
          <Cars cars={this.state.cars}></Cars>
        </div>}

      </div>
    );
  }
}

export default App;
