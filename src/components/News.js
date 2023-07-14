import React, { Component, useEffect, useState } from 'react'
import NewsComponent from './NewsComponent';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {

    function capitalize(data) { return data.charAt(0).toUpperCase() + data.slice(1); }
    const [country, setCountry] = useState('in');
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [pageSize, setPageSize] = useState(props.pageSize);

    const update = async () => {
        console.log(`Updating page ${page}`);
        props.setProgress(10);
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        const totalPages = Math.ceil(parsedData.totalResults / props.pageSize);
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setTotalPages(totalPages);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalize(props.category)} - News with React`;
        update();
    }, []);
    async function fetchMoreData() {
        const nextPage = page + 1;
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setPage(nextPage);
    }
    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px my-5', marginTop:"100px" }}>Trending in {capitalize(props.category)} Stories</h1>
            
            <div className="news-container" >
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                    style={{ overflow: 'visible' }}
                    scrollableTarget="news-container"
                    className='news-content'

                >

                    <div className="container" > {/* Remove container from inside the row */}
                        <div className="row">
                            {articles.map((element) => {
                                return (
                                    <div className=' col-sm-12 col-lg-3 col-md-4' key={element.url} >
                                        <NewsComponent title={element.title ? element.title.slice(0, 40) + "..." : ""} 
                                        description={element.description ? element.description.slice(0, 50) + "..." : ""} 
                                        imageLink={element.urlToImage} 
                                        articleLink={element.url} 
                                        author={element.author} 
                                        publishDate={element.publishedAt} 
                                        source={element.source.name} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </InfiniteScroll>
            </div>

        </>
    )
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func.isRequired,
    apiKey: PropTypes.string.isRequired
};