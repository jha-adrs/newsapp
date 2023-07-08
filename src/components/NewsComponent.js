import React, { Component } from 'react'
export default class NewsComponent extends Component {
    static defaultProps = {
        title: 'Error Occured',
        description: 'Could not retrieve data',
        articleLink: 'www.google.com',
        imageLink : 'https://dog.ceo/api/breeds/image/random'
    };

    render() {
        let {title, description, articleLink, imageLink} = this.props;

        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageLink} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={articleLink} className="btn btn-primary">Go to Article</a>
                        </div>
                </div>
            </div>
        )
    }
}
