import React from 'react';
import { storyData } from '../testData'
import { useParams } from 'react-router-dom';
import Stories from '../Stories/Stories'

function Topics() {
    const { id } = useParams()
    return (
        <Stories />
    )
}

export default Topics;