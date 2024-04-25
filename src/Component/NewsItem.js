import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date ,source} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:'1'}}>{source}
            </span>
          <img src={imageUrl} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} class="btn btn-sm btn-success" target="_blank">Read More</a>
          </div>
        </div>



      </div>
    )
  }
}

export default NewsItem
