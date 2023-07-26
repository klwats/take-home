const fetchTodaysTopStories = async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=97869d4f31d14d58993e2cee144514d4');
    if (response.ok) {
        return (await response.json()).articles;
    } else {
        throw new Error('Please try again later')
    }
}

export { fetchTodaysTopStories }