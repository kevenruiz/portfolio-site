
import './App.css';
import { Component } from 'react';
import React from 'react';
import Header from './containers/Header';
import PoemList from './containers/PoemList';
import PoemForm from './PoemForm';
import PoemDetail from './PoemDetail';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


class App extends Component {
  render() {

    return (
      <>

        <Router>

          <Header />

          <Switch>
            <Route exact path="/" component={PoemList} />
            <Route exact path="/create" component={PoemForm} />
            <Route exact path="/poem/:id" component={PoemDetail} />


            <Redirect to="/" />

          </Switch>
        </Router>
      </>
    );
  }


}

export default App;
