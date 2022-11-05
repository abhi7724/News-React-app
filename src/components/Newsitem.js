import React, { Component } from 'react' // (className based components)rce then will get props by this.props

export class Newsitem extends Component {
  render() {
   let  {title,description} = this.props;
    return (
      <div>
       <div className="card" style={{width: "18rem;"}}>
            <img src="https://cdn.24.co.za/files/Cms/General/d/2918/4f1544e09a8f4b5193bd57afa73eae84.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"> {title}</h5>
                <p className="card-text">{description}</p>
                <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
      </div>
    )
  }
}

export default Newsitem
