import React, { Component } from 'react'
import NewsComponent from './NewsComponent';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

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
        console.log("Constructor");
        document.title = `${this.capitalize(this.props.category)} - News with React`;
    }
    async update() {
        console.log(`Updating page ${this.state.page}`)

        this.setState({ loading: true });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f7f2e8d1214b487680cd3f321b04995a&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        
        const totalPages = Math.ceil(parsedData.totalResults / this.props.pageSize);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, totalPages: totalPages, loading: false });
        
    }

    /*Runs after the return thing is rendered*/
    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f7f2e8d1214b487680cd3f321b04995a&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        this.update();
    }

    fetchMoreData=async()=>{
        const nextPage = this.state.page +1;
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f7f2e8d1214b487680cd3f321b04995a&page=${nextPage}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            page:nextPage
        })
    };
    render() {
        return (
          <>
            <h1 className="text-center" style={{ margin: '35px 0px' }}>Trending in {this.capitalize(this.props.category)} Stories</h1>
            {this.state.loading && <Spinner />}
            <div className="news-container">
              <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner />}
                style={{ overflow: 'visible' }}
                scrollableTarget="news-container"
              >
                <ul>
                <div className="container"> {/* Remove container from inside the row */}
                  <div className="row">
                    {this.state.articles.map((element) => {
                      return (
                        <div className=' col-sm-12 col-lg-3 col-md-4' key={element.url} >
                                <NewsComponent title={element.title ? element.title.slice(0, 40) + "..." : ""} description={element.description ? element.description.slice(0, 50) + "..." : ""} imageLink={element.urlToImage} articleLink={element.url} author={element.author} publishDate={element.publishedAt} source={element.source.name} />
                            </div>
                      );
                    })}
                  </div>
                </div>
                </ul>
              </InfiniteScroll>
              </div>
            
          </>
        );
      }
    }