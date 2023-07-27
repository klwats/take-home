const fetchTodaysTopStories = async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=1dc288ac69b24baf8142392c19b6146f');
    if (response.ok) {
        return (await response.json()).articles;
    } else {
        throw new Error('Please try again later')
    }
}

const selectTopics = async (topic) => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${topic}&apiKey=1dc288ac69b24baf8142392c19b6146f`);
    if (response.ok) {
        return (await response.json()).articles;
    } else {
        throw new Error('Please try again later')
    }
}

export { fetchTodaysTopStories, selectTopics } 