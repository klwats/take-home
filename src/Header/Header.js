import React from 'react';
import '../Header/Header.css'
import { Link } from 'react-router-dom'

const Header = ({ selectedTopic }) => {
    const handleTopicSelect = (event) => {
    };

    return (
        <div>
            <h1 className='header'>NewsReader</h1>
            <select className='news-dropdown' onChange={handleTopicSelect} >
                <option value='' disabled defaultValue>Select a Category</option>
                <option value='Business'>Business</option>
                <option value='Entertainment'>Entertainment</option>
                <option value='General'>General</option>
                <option value='Health'>Health</option>
                <option value='Science'>Science</option>
                <option value='Sports'>Sports</option>
                <option value='Technology'>Technology</option>
            </select>

            <Link to={`/topics/${selectedTopic}`} className='link-to-topics' >
                <button>Go</button>
            </Link>
        </div>
    )
}

export default Header;