
import './App.css';
import { Component } from 'react';
import React from 'react';
import Header from './components/containers/Header';
import PoemList from './components/containers/PoemList';
import PoemForm from '../src/PoemForm';
import PoemDetail from '../src/PoemDetail';
import {
  BrowserRouter as Router,
  Route,
  Outlet
} from 'react-router-dom';



class App extends Component {
  render() {



    return (


      <>

        <Router>

          <Header />



          <Route>
            <Route exact path="/" component={PoemList} />
            <Route exact path="/create" component={PoemForm} />
            <Route exact path="/poem/:id" component={PoemDetail} />



            <Outlet to="/" />

          </Route>
        </Router>
      </>
    );
  }


}

export default App;
