import React from 'react';
import Story from '../Story/Story'

const Home = ({ date }) => {

    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })

    return (
        <div>
            <h1>Today's Top Stories</h1>
            <h3>{formattedDate}</h3>
            <Story date={date} />
        </div>
    )
}
export default Home;