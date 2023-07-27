import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { selectTopics } from '../apiCalls'
import '../Topics/Topics.css'

const Topics = () => {
    const { id } = useParams()
    const [topicArticles, setTopicArticles] = useState([])

    const fetchSelectedTopic = useCallback(async () => {
        try {
            const jsonData = await selectTopics(id)
            setTopicArticles(jsonData)
            console.log(jsonData)
        } catch (err) {
            console.error("error fetching")
        }
    }, [id]);

    useEffect(() => {
        fetchSelectedTopic()
    }, [fetchSelectedTopic])


    return (
        <div>
            <h1>Articles related to {id}</h1>
            <div >
                {topicArticles.map((article, index) => (
                    <div key={index} className='grid-container'>
                        <h2>{article.title}</h2>
                        <img src={article.urlToImage} alt={article.description} className='topic-image' />
                        <p>{article.description}</p>
                        <p>{article.publishedAt}</p>
                        <Link>{article.url}</Link>
                    </div>
                ))
                }
            </div >
        </div>
    );
}

export default Topics;