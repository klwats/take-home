import React from 'react';
//import { storyData } from '../testData'
import { NavLink } from 'react-router-dom'
import '../Story/Story.css'


function Story({ date, todaysStories }) {
    console.log('tomato', todaysStories)
    if (todaysStories.length === 0) {
        return <div>Loading...</div>
    }
    const filteredStories = todaysStories.filter(article => {
        const articleDate = new Date(article.publishedAt);
        console.log('publishedAt', articleDate)
        return articleDate.toDateString() === date.toDateString()
    }
    )

    const indStory = filteredStories.map(article => {
        let key = article.publishedAt.toString
        return {
            headline: article.title,
            image: article.urlToImage,
            description: article.description,
            date: article.publishedAt
        }

    })

    return (
        <div className='grid-container'>
            {indStory.map((story, index) => (
                <NavLink to={`/stories/${index}`} key={index}>
                    < div >
                        <h1 className='home-headline'>{story.headline}</h1>
                        <img className='home-image' src={story.image} alt={story.description} />
                        <p>{story.description}</p>
                        <date>{story.date}</date>
                    </div>
                </NavLink>
            ))}
        </div>
    );
}

export default Story;