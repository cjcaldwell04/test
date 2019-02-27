import React, { Component } from 'react';
// import the react-router-dom components
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios'
import Recipes from "./Components/Recipes.jsx"
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
        <div>
          <nav className="navbar navbar-expand-md navbar-light navbar-laravel fixed-top " style={{marginBottom: 75 + "px"}}>
              <div className="container">
                  <a className="navbar-brand" href="{{ url('/') }}">Recipe Shopper</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav navbar-center">
                      </ul>
                      <ul className="navbar-nav ml-auto">
                        <li><a className="nav-link" href="/">Recipes</a></li>
                        <li><a className="nav-link" href="/favorites">Favorites</a></li>
                        <li><a className="nav-link" href="/calendar">Calendar</a></li>
                        <li><a className="nav-link" href="/cart">Shopping Cart</a></li>
                        <li><a className="nav-link" href="/profile">Account</a></li>
                        <li><a className="nav-link" href="/login">Login</a></li>
                        <li><a className="nav-link" href="/register">Register</a></li>
                        <li><a className="nav-link" href="/">Logout</a></li>
                      </ul>
                  </div>
              </div>
          </nav>
          <Switch>
            <Route exact path='/favorites' component={FavoritesPage} />
            <Route exact path='/calendar' component={CalendarPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={RegisterPage} />
            <Route exact path='/profile' component={UpdateProfilePage} />
            <Route exact path='/cart' component={ShoppingCartPage} />
            <Route
              path='/'
              render={(props) => <Recipes {...props} recipes={recipes} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
