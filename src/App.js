import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import the react-router-dom components
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios'
import List from "./Components/List.jsx"
import HomePage from "./views/HomePage.jsx";
import FavoritesPage from "./views/FavoritesPage.jsx";
import CalendarPage from "./views/CalendarPage.jsx";
import LoginPage from "./views/LoginPage.jsx";
import RegisterPage from "./views/RegisterPage.jsx";
import UpdateProfilePage from "./views/UpdateProfilePage.jsx";
import ShoppingCartPage from "./views/ShoppingCartPage.jsx";

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
    //axios.get('https://www.food2fork.com/api/search?key=ce8876558ef123b507f130ccc0d973cd')
    axios.get('https://randomuser.me/api/?results=10')
    .then(json => json.data.results.map(result => (
    {
      /*f2f_url: result.f2f_url,
      image_url: result.image_url,
      publisher: result.publisher,
      publisher_url: result.publisher_url,
      recipe_id: result.recipe_id,
      rank: result.social_rank,
      source_url: result.source_url,
      title: result.title*/
      gender: result.gender,
      login: result.login.password
    })))
    .then(newData => this.setState({recipes: newData, store: newData}))
    .catch(error => alert(error))
  }

  render() {
    const {recipes} = this.state
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/favorites' component={FavoritesPage} />
          <Route exact path='/calendar' component={CalendarPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/profile' component={UpdateProfilePage} />
          <Route exact path='/cart' component={ShoppingCartPage} />
          <Route
            path='/'
            render={(props) => <List {...props} recipes={recipes} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
