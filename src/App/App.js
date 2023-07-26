import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header'
import Home from '../Home/Home'
import Stories from '../Stories/Stories'



const App = () => {

  var [date, setDate] = useState(new Date())
  var [todaysStories, setTodaysStories] = useState('')

  const getYesterday = () => {
    const yesterday = new Date(date);
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
  }

  useEffect(() => {
    const yesterdayDate = getYesterday();
    setDate(yesterdayDate)
  }, []);

  //when fetch call happens to get stories from yesterday; set todaysStories to that data

  return (
    <Switch>
      <Route exact path="/">
        <main>
          <Header />
          <Home date={date} />
        </main>
      </Route>
      <Route exact path='/stories/:id' render={({ match }) => (

        <main>
          <Header />
          <Stories date={date} id={match.params.id} />
        </main>
      )}>
      </Route>
    </Switch >
  )
}


export default App;
