import React from 'react';
import { storyData } from '../testData'
import { useParams } from 'react-router-dom'
import '../Stories/Stories.css'

function Stories() {
    const { id } = useParams();
    const storyIndex = parseInt(id)

    const story = storyData.articles[storyIndex]
    console.log(story)
    const { title, urlToImage, description, publishedAt, content } = story

    // const findStory = storyData.articles.filter(article => article.index === storyIndex)
    // const storyDetails = findStory.map(article => {
    //     let key = article.publishedAt.toString;
    //     return {
    //         headline: article.title,
    //         image: article.urlToImage,
    //         description: article.description,
    //         date: article.publishedAt,
    //         content: article.content
    //     }
    // })

    return (
        //storyDetails.map(story => {
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
        //}
    )
    //)
}

export default Stories;