import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header'
import Home from '../Home/Home'
import Stories from '../Stories/Stories'
import Topics from '../Topics/Topics'
import { fetchTodaysTopStories } from '../apiCalls'



const App = () => {
  const [selectedTopic, setSelectedTopic] = useState('')
  const [date, setDate] = useState(new Date())
  const [todaysStories, setTodaysStories] = useState('')

  const getTodaysStories = useCallback(async () => {
    try {
      const jsonData = await fetchTodaysTopStories()
      console.log(jsonData)
      setTodaysStories(jsonData)
    } catch (err) {
      throw new Error(err)
    }
  }, []);


  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic)
  }

  useEffect(() => {
    getTodaysStories()
  }, [getTodaysStories])

  // const getYesterday = () => {
  //   const yesterday = new Date(date);
  //   yesterday.setDate(yesterday.getDate() - 1);
  //   return yesterday;
  // }

  // useEffect(() => {
  //   const yesterdayDate = getYesterday();
  //   setDate(yesterdayDate)
  // }, []);



  return (
    <div>
      <Header onSelectTopic={handleTopicSelect} />
      <Switch>
        <Route exact path="/">
          <main>
            <Home date={date} />
          </main>
        </Route>
        <Route exact path='/stories/:id' render={({ match }) => (
          <main>
            <Stories date={date} id={match.params.id} />
          </main>
        )}>
        </Route>
        <Route exact path='/topics/:id' render={({ match }) => (
          <main>
            <Topics id={match.params.id} selectedTopic={selectedTopic} />
          </main>
        )}>

        </Route>
      </Switch >
    </div>
  )
}


export default App;
