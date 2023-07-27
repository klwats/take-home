import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header'
import Home from '../Home/Home'
import Stories from '../Stories/Stories'
import Topics from '../Topics/Topics'
import { fetchTodaysTopStories, selectTopics } from '../apiCalls'


const App = () => {
  const [selectedTopic, setSelectedTopic] = useState('')
  const [date, setDate] = useState(new Date())
  const [todaysStories, setTodaysStories] = useState([])

  const getTodaysStories = useCallback(async () => {
    try {
      const jsonData = await fetchTodaysTopStories()
      setTodaysStories(jsonData)
    } catch (err) {
      console.error("error fetching")
    }
  }, []);


  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic)
  }

  useEffect(() => {
    getTodaysStories()
  }, [getTodaysStories])



  const getYesterday = () => {
    const yesterday = new Date(date);
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
  }

  useEffect(() => {
    const yesterdayDate = getYesterday();
    setDate(yesterdayDate)
  }, []);



  return (
    <div>
      <Header onSelectTopic={handleTopicSelect} selectedTopic={selectedTopic} />
      <Switch>
        <Route exact path="/">
          <main>
            <Home date={date} todaysStories={todaysStories} />
          </main>
        </Route>
        <Route exact path='/stories/:id' render={({ match }) => (
          <main>
            <Stories date={date} id={match.params.id} todaysStories={todaysStories} />
          </main>
        )}>
        </Route>
        <Route exact path='/topics/:id' component={Topics} />

        {/* render={({ match }) => (
        //   <main>
        //     <Topics id={match.params.id} selectedTopic={selectedTopic} />
        //   </main>
        // )}> */}

        {/* //</div></Route> */}
      </Switch >
    </div>
  )
}


export default App;
