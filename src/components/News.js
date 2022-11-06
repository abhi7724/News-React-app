import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
     articles =  [
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "AFP",
            "title": "No WhatsApp, only cricket talk for Proteas quicks, says Parnell",
            "description": "Wayne Parnell said South Africa's \"world-class\" fast bowlers have avoided social media to form a strong bond as the team looks to go the distance at the T20 World Cup.",
            "url": "https://www.news24.com/sport/cricket/t20worldcup/no-whatsapp-only-cricket-talk-for-proteas-quicks-says-parnell-20221105",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/2918/4f1544e09a8f4b5193bd57afa73eae84.jpg",
            "publishedAt": "2022-11-05T09:36:34+00:00",
            "content": "Wayne Parnell on Saturday said South Africa's \"world-class\" fast bowlers have avoided social media to form a strong bond as the team looks to go the distance at the T20 World Cup.\r\nThe Proteas need a… [+2755 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]


    
    constructor(){
        super();
        console.log("Hello i am a constructor from News component");
        this.state = {
            articles: this.articles,
            loading:false
            

        }
    }
  render(){
    return (
      <div className="container my-4">
        <h2>ROZANA - Top Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                <Newsitem  title={element.title.slice(0,45)} description={element.description.slice(0,45)} imageurl ={element.urlToImage} newsurl={element.url}/>
       </div>
       })}
        </div>
       
      </div>
    )
  }
}


export default News
