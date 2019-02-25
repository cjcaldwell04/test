import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import List from "./Components/List.jsx"

class App extends Component {
  //create a state to store data
  constructor(props){
    super(props)
    this.state = {
      recipes: [],
      store: []
    }
  }
  //lifecycle hook to grab the jason and format it into variables
  componentDidMount(){
    axios.get('https://www.food2fork.com/api/search?key=ce8876558ef123b507f130ccc0d973cd')
    .then(json => json.data.recipes.map(recipes => (
    {
      f2f_url: recipes.f2f_url,
      image_url: recipes.image_url,
      publisher: recipes.publisher,
      publisher_url: recipes.publisher_url,
      recipe_id: recipes.recipe_id,
      rank: recipes.social_rank,
      source_url: recipes.source_url,
      title: recipes.title
    })))
    .then(newData => this.setState({recipes: newData, store: newData}))
    .catch(error => alert(error))
  }

  render() {
    const {recipes} = this.state
    return (
        <List recipes={recipes} />
    );
  }
}

export default App;
