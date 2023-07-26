import React from 'react';
import Story from '../Story/Story';
import '../Home/Home.css'

const Home = ({ date }) => {

    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })

    return (
        <div>
            <h1 className='top-stories'>Today's Top Stories</h1>
            <h3 className='date'>July 24, 2023</h3>
            {/* <h3>{formattedDate}</h3> */}
            <Story date={date} />
        </div>
    )
}
export default Home;