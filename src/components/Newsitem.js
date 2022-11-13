import React, { Component } from "react"; // (className based components)rce then will get props by this.props

export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date , source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={ {display:'flex', justifyContent: 'flex-end', position: 'absolute', right:'0',}} >
          <span className=" badge rounded-pill bg-danger" >
                {source}
                99+
              
              </span>

          </div>
          <img
            src={
              !imageurl
                ? "https://images.moneycontrol.com/static-mcnews/2022/09/Edtech-failure-Illustration-by-Suneesh-K-770x433.jpg"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              {title}
             
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text text-danger">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a rel="noreferrer" href={newsurl} className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
