import React, { Component } from 'react'
import NewsComponent from './NewsComponent';
import './News.css';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {
    static defaultProps = {
        country:'in',
        pageSize: 4,
        category: 'general'
    }
    static PropTypes = {
        country:PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 20,
            nextButtonState: false
        }
    }
    

    /*Runs after the return thing is rendered*/
    async componentDidMount() {
        console.log("Fetching through API");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c1aa2105825b431591bdd4ee903f5165&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
        
        console.log("Fetch Done");
    }
    handleNext = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
            console.log("Exceeded max number of pages");
            this.setState({ nextButtonState: true }); // Next button gets disabled if max number of pages is found
        }
        else {
            this.setState({
                page: this.state.page + 1, loading:true
            })
            console.log("Fetching through API");
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c1aa2105825b431591bdd4ee903f5165&page=${this.state.page}&pageSize=${this.props.pageSize}`
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
            console.log("Fetch Done");
            
            this.setState({loading:false});
        }

    }

    handlePrevious = async () => {

        if (this.state.page === 1) {

        }
        else {
            this.setState({
                page: this.state.page - 1

            })
            this.setState({ nextButtonState: false, loading:true });
            console.log("Fetching through API");
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c1aa2105825b431591bdd4ee903f5165&page=${this.state.page}&pageSize=${this.props.pageSize}`
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
            console.log("Fetch Done");
            
            this.setState({loading:false});
        }
    }

    render() {


        return (
            <div className='container my-3' id='news-container'>

                <h2 id='top-headlines my-2'>Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {this.state.articles && this.state.articles.map((element) => {
                        if (!element.urlToImage) {
                            return null;
                        }
                        return (
                            <div className=' col-sm-12 col-lg-3 col-md-4' >
                                <NewsComponent title={element.title ? element.title.slice(0, 40) + "..." : ""} description={element.description ? element.description.slice(0, 50) + "..." : ""} imageLink={element.urlToImage} articleLink={element.url} />

                            </div>
                        )
                    })}
                    <div className="d-flex bd-highlight mb-3">
                        <div className="p-2 bd-highlight">
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handlePrevious}>&larr; Previous</button>
                        </div>
                        <div className="ms-auto p-2 bd-highlight">
                            <button disabled={this.state.nextButtonState} type="button" className="btn btn-danger" onClick={this.handleNext}>
                                {this.state.loading ? "Loading" : "Next\u2192"}
                                </button></div>
                    </div>
                </div>

            </div>

        )
    }
}
