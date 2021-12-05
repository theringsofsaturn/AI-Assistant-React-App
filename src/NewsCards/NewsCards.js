import React from 'react'
import NewsCard from '../NewsCard/NewsCard'

// getting "articles" from the props in App.js
const NewsCards = ({articles}) => {
    return (
        <div>
        {articles.map((article, i) => {
            <NewsCard />
        })}
        </div>
    )
}

export default NewsCards
