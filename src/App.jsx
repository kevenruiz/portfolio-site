
import './App.css';
import { Component } from 'react';
import React from 'react';
import Header from './components/containers/Header';
import PoemList from './components/PoemList';
import PoemForm from './components/PoemForm';
import PoemDetail from './components/PoemDetail';
import {
  BrowserRouter as Router,
  Route,
  Outlet
} from 'react-router-dom';


import ReactDOM from 'react-dom';
import './index.css';



class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}


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

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
