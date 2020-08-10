import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Name } from './components/Name'
import { Board } from './Board'


class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Router>
            <Switch>
                <Route exact path="/" component={Name} />
                <Route path="/game" component={Board} />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App
