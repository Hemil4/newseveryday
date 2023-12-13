import React, { Component } from "react";

export class NewsItem extends Component {
    constructor(){
        super();
        // console.log("i am constructor")
    }
    
  render() {
    let { title, description, imageUrl,url } = this.props;
    return (
      <div>
        <div className="col-md-4 my-3">
          <div className="card" style={{width: "17rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                {description}
              </p>
              <a href={url} target="blank" className="btn btn-primary">
                Read More.
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
