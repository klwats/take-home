import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header'
import Home from '../Home/Home'


function App() {

  return (
    <Switch>
      <Route exact path="/">
        <main>
          <Header />
          <Home />
        </main>
      </Route>
      <Route exact path="/stories">
        <main>
          <Header />

        </main>
      </Route>
    </Switch>
  )
}


export default App;
