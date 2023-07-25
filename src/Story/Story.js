import React from 'react';
import { storyData } from '../testData'

function Story() {
    const indStory = storyData.articles.map(article => {
        let key = article.publishedAt.toString
        return {
            headline: article.title,
            image: article.urlToImage,
            description: article.description,
            date: article.publishedAt
        }

    })

    return (
        <div>
            {indStory.map((story, index) => (
                <div key={index}>
                    <h1>{story.headline}</h1>
                    <img src={story.image} alt={story.description} />
                    <p>{story.description}</p>
                    <date>{story.date}</date>
                </div>
            ))}
        </div>
    )
}

export default Story;