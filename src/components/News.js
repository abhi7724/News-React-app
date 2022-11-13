import React, {useEffect,useState}  from 'react'

import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {
  const [articles,setarticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,settotalResults] = useState(0)
  
  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

    
    
    const updateNews = async ()=>{
      
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
        
        setLoading(true)
        let data =  await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setLoading(false)
        console.log(parsedData);
        
      props.setProgress(100);

    }
    useEffect(() => {
      document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`;
  
      updateNews();
    }, [])
    
    

         const handlePrevClick = async()=>{
        
        setPage(page - 1)
        updateNews();
        }


         const handleNextClick = async()=>{
          
          setPage(page+1)
            console.log("Next");
         

        
        setPage(page+1)
        updateNews();
         }
         const fetchMoreData = async() => {
          setPage(page + 1)
          
          const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        
        let data =  await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setarticles( articles.concat(parsedData.articles))
        settotalResults (parsedData.totalResults)
        
        
      

        };
    
  
   
    return (
      <div className="container my-4">
        <h1 className='text-center' style={{margin: '35px 0px' , marginTop: '90px'}}>ROZANA - Top {capitalizeFirstLetter(props.category)} Headlines </h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >

          
          
        
        
        <div className="row">
        { this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                <Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl ={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
       </div>
       })}
        </div>
       

        </InfiniteScroll>
       
      </div>
    )
  

}

News.defaultProps = {
  country: 'in',
  pageSize:8,
  category: 'general',
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
 



export default News
