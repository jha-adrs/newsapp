import React, { Component } from 'react'
import NewsComponent from './NewsComponent';
import './News.css';

export default class News extends Component {


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    /*Runs after the return thing is renderd*/
    async componentDidMount() {
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c1aa2105825b431591bdd4ee903f5165`
        let data = await fetch(url);
        let parsedData =await data.json();
        this.setState({articles: parsedData.articles});
        
    }

    render() {


        return (
            <div className='container my-3' id='news-container'>
                <h2>Top Headlines</h2>
                <div className='row'>
                    {this.state.articles && this.state.articles.map((element) => {
                        if(!element.urlToImage){
                            return null;
                        }
                        return (
                            <div className=' col-sm-12 col-lg-3 col-md-4' >
                                <NewsComponent title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,40):""} imageLink={element.urlToImage} articleLink={element.url} />
                            </div>
                        )
                    })}
                </div>





            </div>

        )
    }
}
