import React from 'react';
import { storyData } from '../testData'
import { useParams } from 'react-router-dom'

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
        <div className="individual-story">
            <h2>{title}</h2>
            <img src={urlToImage} alt={description} />
            <p>{description}</p>
            <p>{publishedAt}</p>
            <p>{content}</p>
        </div>
        //}
    )
    //)
}

export default Stories;