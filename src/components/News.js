import React, { Component } from 'react'
import NewsComponent from './NewsComponent';

export default class News extends Component {
  render() {
    

    return (
      <div className='container my-3' id = 'news-container'>
        <h2>Top Headlines</h2>
        <div className='row'>
            <div className='p-4 col-sm-12 col-lg-3 col-md-4'>
            <NewsComponent title={this.props.title} description = {this.props.description}  />
            </div>
            <div className='p-4 col-sm-12 col-lg-3 col-md-4'>
            <NewsComponent title={this.props.title} description = {this.props.description}  />
            </div>
            <div className='p-4 col-sm-12 col-lg-3 col-md-4'>
            <NewsComponent title={this.props.title} description = {this.props.description}  />
            </div>
            <div className='p-4 col-sm-12 col-lg-3 col-md-4'>
            <NewsComponent title={this.props.title} description = {this.props.description}  />
            </div>
        </div>
        
        <div className='row'>
            <div className='p-4 col-sm-12 col-lg-3 col-md-4'>
            <NewsComponent title={this.props.title} description = {this.props.description}  />
            </div>
            <div className='p-4 col-sm-12 col-lg-3 col-md-4'>
            <NewsComponent title={this.props.title} description = {this.props.description}  />
            </div>
            <div className='p-4 col-sm-12 col-lg-3 col-md-4'>
            <NewsComponent title={this.props.title} description = {this.props.description}  />
            </div>
            <div className='p-4 col-sm-12 col-lg-3 col-md-4'>
            <NewsComponent title={this.props.title} description = {this.props.description}  />
            </div>
        </div>
      </div>

    )
  }
}
