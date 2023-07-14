import React, { Component } from 'react'
export default class NewsComponent extends Component {
    static defaultProps = {
        title: 'Error Occured',
        description: 'Could not retrieve data',
        articleLink: 'www.google.com',
        imageLink: 'https://dog.ceo/api/breeds/image/random',
       
    };

    render() {
        let { title, description, articleLink, imageLink } = this.props;
        const darkStyle = {backgroundColor:"#2C3333", color:"#CBE4DE"};
        const buttonStyle = {
            display: "block",
        width: "100%",
        height: "2.5rem",
        border: "none",
        padding : "0.5rem 15px",
        fontsize: "16px",
        cursor: "pointer",
        textalign: "center",
        backgroundColor:"#B71375"
        };
        return (
            <div >
                <div className="card border my-3 " style={darkStyle} >
                    <img src={imageLink} className="card-img-top " alt="..." style={{ height: "200px" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={articleLink} target="_blank" className="btn btn-block btn-danger  " style={buttonStyle}>Read More</a>
                    </div>
                    <div className="card-footer " style = {darkStyle}>
                    Source: {this.props.source} <br/>Published On {this.props.publishDate.slice(0,10)}
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}
