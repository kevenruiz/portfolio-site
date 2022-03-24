
import './App.css';
import { Component } from 'react';


class App extends Component {
  render() {

    return (
      <>

        <Router>

          <Header />

          <Switch>
            <Route exact path="/" component={PoemList} />
            <Route exact path="/create" component={PoemForm} />
            <Route exact path="/npc/:id" component={PoemDetail} />


            <Redirect to="/" />

          </Switch>
        </Router>
      </>
    );
  }


}

export default App;
