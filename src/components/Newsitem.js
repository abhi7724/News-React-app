import React, { Component } from 'react' // (className based components)rce then will get props by this.props

export class Newsitem extends Component {
  render() {
   let  {title,description, imageurl,newsurl} = this.props;
    return (
      <div className="my-3">
       <div className="card" >
            <img src={!imageurl?"https://images.moneycontrol.com/static-mcnews/2022/09/Edtech-failure-Illustration-by-Suneesh-K-770x433.jpg":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"> {title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel="noreferrer" href={newsurl} className="btn btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default Newsitem




