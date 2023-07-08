import React, { Component } from 'react'
import logo from '../assets/android-chrome-512x512.png'
export default class NewsComponent extends Component {
    static defaultProps = {
        title: 'Error Occured',
        description: 'Could not retrieve data',
        articleLink: 'www.google.com',
        imageLink :{logo}
    };

    render() {
        let {title, description, articleLink, imageLink} = this.props;

        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }
}
