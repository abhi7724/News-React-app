import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'

export class News extends Component {
    


    
    constructor(){
        super();
        
        this.state = {
            articles: [],
            loading:false,
            page:1,
            
            

        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7b4054165e50428598ddca8bc847ad23&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data =  await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults,
        loading: false})
    }

         handlePrevClick = async()=>{
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7b4054165e50428598ddca8bc847ad23&page=${this.state.page - 1}
        {this.props.pageSize}`;
        let data =  await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        
            this.setState({
              page: this.state.page - 1,
              articles: parsedData.articles,
              loading: false
            })
        }


         handleNextClick = async()=>{
          
            console.log("Next");
          //   console.log(Math.ceil(this.state.page))
          //   if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
          //     this.setState(
          //       {
          //         page: this.state.page+1
          //       }
          //     )

          //     console.log(this.state.page)
          //   }
          //   else{

            
          //       let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7b4054165e50428598ddca8bc847ad23&page=${this.state.page + 1}&pageSize=20`;
                
          //   let data =  await fetch(url);
          //   let parsedData = await data.json()
          //   console.log(parsedData);
            
          //       this.setState({
          //         page: this.state.page + 1,
          //         articles: parsedData.articles
          //       })
          // }

          //get current page by total results
         let  pageResults = this.state.totalResults / 30.00
         let  currentPage = this.state.page

          if (!currentPage >= pageResults){
            console.log("No More Next")
           
          }
          else{
            console.log("There are more pages")
            console.log(this.state.page)
           
          
            this.setState({
              page: this.state.page + 1,
            },async () =>{
              let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7b4054165e50428598ddca8bc847ad23&page=${this.state.page}&pageSize=30`;
              this.setState({loading: true});
                
              let data =  await fetch(url);
              let parsedData = await data.json()
              this.setState({loading: false});
              console.log(parsedData);
              this.setState(
                {
                  articles: parsedData.articles
                }
              )
              if (currentPage + 1 > pageResults){
                console.log("No More Next")
                
               
              }
            })
            // console.log(this.state.page)
          }



        }
    
  render(){
   
    return (
      <div className="container my-4">
        <h1 className='text-center' style={{margin: '35px 0px'}}>ROZANA - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                <Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl ={element.urlToImage} newsurl={element.url}/>
       </div>
       })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        
        <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/30)}type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
       
      </div>
    )
  }
}


export default News
