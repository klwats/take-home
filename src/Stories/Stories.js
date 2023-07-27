import React from 'react';
import { storyData } from '../testData'
import { useParams } from 'react-router-dom'
import '../Stories/Stories.css'

function Stories({ todaysStories }) {
    const { id } = useParams();
    const storyIndex = parseInt(id)

    const story = todaysStories[storyIndex]
    console.log(story)
    const { title, urlToImage, description, publishedAt, content } = story

    return (
        <div className="individual-story-container">
            <div className='left-column'>
                <h2>{title}</h2>
                <img className='ind-story-image' src={urlToImage} alt={description} />
                <p>{publishedAt}</p>
            </div>
            <div className='right-column'>
                <p>{description}</p>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Stories;