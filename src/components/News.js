import React, { Component } from 'react'
import NewsComponent from './NewsComponent';
import './News.css';

export default class News extends Component {


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    } 
    
    
    /*Runs after the return thing is renderd*/
    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c1aa2105825b431591bdd4ee903f5165&page=${this.state.page}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles });

    }
    handleNext = () => {
        this.setState({
            page: this.state.page + 1
        })
        this.componentDidMount();

    }

    handlePrevious = () => {

        if (this.state.page === 1) {

        }
        else {
            this.setState({
                page: this.state.page - 1
                
            })
            this.componentDidMount();
        }
    }

    render() {


        return (
            <div className='container my-3' id='news-container'>
                <h2 id='top-headlines'>Top Headlines</h2>
                <div className='row'>
                    {this.state.articles && this.state.articles.map((element) => {
                        if (!element.urlToImage) {
                            return null;
                        }
                        return (
                            <div className=' col-sm-12 col-lg-3 col-md-4' >
                                <NewsComponent title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 40) : ""} imageLink={element.urlToImage} articleLink={element.url} />

                            </div>
                        )
                    })}
                    <div className="d-flex bd-highlight mb-3">
                        <div className="p-2 bd-highlight">
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handlePrevious}>&larr; Previous</button>
                        </div>
                        <div className="ms-auto p-2 bd-highlight">
                            <button type="button" className="btn btn-danger" onClick={this.handleNext}>Next &rarr;</button></div>
                    </div>
                </div>

            </div>

        )
    }
}
