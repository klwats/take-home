import React from 'react';
import Story from '../Story/Story';
import '../Home/Home.css'

const Home = ({ date, todaysStories }) => {

    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })

    return (
        <div>
            <h1 className='top-stories'>Today's Top Stories</h1>
            <h3 className='date'>{formattedDate}</h3>
            <Story date={date} todaysStories={todaysStories} />
        </div>
    )
}
export default Home;