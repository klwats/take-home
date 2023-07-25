import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header'


function App() {

  return (
    <Switch>
      <Route exact path="/">
        <main>
          <Header />
        </main>
      </Route>
      <Route exact path="/stories">
        <main>

        </main>
      </Route>
    </Switch>
  )
}


export default App;
