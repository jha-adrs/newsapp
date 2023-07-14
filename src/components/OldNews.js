import React, { Component } from 'react'
import NewsComponent from './NewsComponent';
import './News.css';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 4,
        category: 'general',
        headline: 'Top'
    };
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    };
    capitalize = (data) => { return data.charAt(0).toUpperCase() + data.slice(1); }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            pageSize: this.props.pageSize,
            totalPages: 0
        }
        document.title = `${this.capitalize(this.props.category)} - News with React`;
    }
    async update() {
        console.log(`Updating page ${this.state.page}`)

        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f7f2e8d1214b487680cd3f321b04995a&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        const totalPages = Math.ceil(parsedData.totalResults / this.props.pageSize);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, totalPages: totalPages });
        console.log("Fetch Done update");
        this.setState({ loading: false });
    }

    /*Runs after the return thing is rendered*/
    async componentDidMount() {

        this.update();
    }


    handleNext = async () => {
        // Use callback instead
        this.setState({ page: this.state.page + 1 }, () => { this.update(); });

    }

    handlePrevious = async () => {
        this.setState({ page: this.state.page - 1 }, () => { this.update(); });

    }

    render() {
        return (
            <div className='container my-3' id='news-container'>
                <h2 id='top-headlines my-2'>Latest in Category: {this.capitalize(this.props.category)} </h2>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {this.state.articles && this.state.articles.map((element) => {
                        if (!element.urlToImage) {
                            return null;
                        }
                        return (
                            <div className=' col-sm-12 col-lg-3 col-md-4' key={element.url} >
                                <NewsComponent title={element.title ? element.title.slice(0, 40) + "..." : ""} description={element.description ? element.description.slice(0, 50) + "..." : ""} imageLink={element.urlToImage} articleLink={element.url} author={element.author} publishDate={element.publishedAt} source={element.source.name} />
                            </div>
                        )
                    })}
                    <div className="d-flex bd-highlight mb-3">
                        <div className="p-2 bd-highlight">
                            <button disabled={this.state.loading || this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handlePrevious}>&larr; Previous</button>
                        </div>
                        <div className="ms-auto p-2 bd-highlight">
                            <button disabled={this.state.loading || this.state.page >= this.state.totalPages} type="button" className="btn btn-danger" onClick={this.handleNext}>
                                {this.state.loading ? "Loading" : "Next\u2192"}
                            </button></div>
                    </div>
                </div>
            </div>

        )
    }
}
