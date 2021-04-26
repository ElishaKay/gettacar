import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'

import { getCarsAndFilters,
          getCarsByMake,
          getCarsByModel,
          getCarsBySearch
       } from './actions/cars'

import { Cars } from './components/Cars'
import Select from 'react-select';
const selectify= (filters)=>{
  return filters.map((filter)=>{
    return {label: filter, value: filter} 
  })
}

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
        this.setState({cars, makes: selectify(uniqueMakes), models: selectify(uniqueModels), colors: uniqueColors})
      });
  }

  onSelectMake(opt){
    let make = opt.value;
    getCarsByMake(opt.value)
      .then(cars => {
        console.log('cars', cars)
        this.setState({selectedMake: make, selectedModel: '', cars})
      });
  }

  onSelectModel(opt){
    console.log(opt)
    getCarsByModel(opt.value)
      .then(cars => {
        console.log('cars', cars)
        this.setState({selectedModel: opt.value, selectedMake: '', cars, search: ''})
      });
  }

  handleSearchChange(event) {
    this.setState({search: event.target.value});
  }

  handleSearchSubmit(event){
    event.preventDefault();

    getCarsBySearch(this.state.search)
      .then(response => {
        console.log('cars', response.cars)
        let {cars} = response;
        this.setState({selectedMake: '', selectedModel: '', cars})
      });
  }

  render() {
    let {makes, models, search, selectedMake, selectedModel} = this.state;

    return (
      <div className="App">
        <Header></Header>
        <div className="row filter-options">
            <div className="col-md-2">
                Search By Make
                <Select
                  options={makes}
                  value={selectedMake || ''}
                  onChange={this.onSelectMake.bind(this)}
                />  
            </div>
            <div className="col-md-2">
              Search By Model
                <Select
                  value={selectedModel || ''}
                  options={models}
                  onChange={this.onSelectModel.bind(this)}
                />  
            </div>
            <form className="col-md-2" onSubmit={this.handleSearchSubmit.bind(this)}>
              <label>
                Search By Anything
                <input className="form-control" 
                  type="text" 
                  value={this.state.search}
                  onChange={this.handleSearchChange.bind(this)}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
        </div>

        <center>
          <h1 className="currently-viewing">{selectedMake || selectedModel}</h1>
        </center>

        <div >
          <Cars cars={this.state.cars}></Cars>
        </div>

      </div>
    );
  }
}

export default App;
