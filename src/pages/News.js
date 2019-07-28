import React from 'react';
import news from '../news';

function News() {
    const articles = {news};
    console.log(articles);
    return (
        <div className="container text-center my-3 white-text">
            <h3 className="red-text accent-4 m-5">Breaking News Page</h3>
            {news.map(article => (
                <>
                    <h5 className="border-bottom mb-5" key={article.key}>{article.title}</h5>
                    <p className="mb-5">{article.body}</p>
                </>
            ))}
        </div>
    );
}

export default News;
