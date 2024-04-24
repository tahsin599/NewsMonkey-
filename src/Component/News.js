import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  articles=[
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Sandi Sidhu, Sophie Tanno",
        "title": "One man shot and multiple people stabbed at Sydney shopping center, say police - CNN",
        "description": "One man was shot and multiple people were stabbed at a Sydney shopping center on Saturday, Australian police said.",
        "url": "https://www.cnn.com/2024/04/13/australia/australia-multiple-people-stabbed-intl-hnk/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2147763119.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-04-13T07:17:00Z",
        "content": "Five people have been killed in a mass stabbing at a busy shopping center in Sydney, Australian police said.\r\nPolice were called to Westfield Bondi Junction on Saturday afternoon local time following… [+2219 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "UFC 300 Embedded: Vlog Series - Episode 6 - UFC",
        "description": "In the lead-up to UFC 300, fighters prepare for the pivotal weigh-ins at UFC Apex before intense face-offs at MGM Grand Garden Arena, setting the stage for a...",
        "url": "https://www.youtube.com/watch?v=pGg7ddGmvg4",
        "urlToImage": "https://i.ytimg.com/vi/pGg7ddGmvg4/maxresdefault.jpg",
        "publishedAt": "2024-04-13T04:50:56Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": null,
        "title": "Deadly violence after Israeli boy vanishes in West Bank - BBC.com",
        "description": "Three Palestinians are killed in West Bank clashes as Israelis search for a missing teenage boy.",
        "url": "https://www.bbc.com/news/world-middle-east-68803939",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4FF9/production/_133137402_mediaitem133137401.jpg",
        "publishedAt": "2024-04-13T04:15:52Z",
        "content": null
    },
    {
        "source": {
            "id": "associated-press",
            "name": "Associated Press"
        },
        "author": "MICHAEL R. SISAK, ERIC TUCKER",
        "title": "How a hush money scandal tied to a porn star led to Trump's first criminal trial - The Associated Press",
        "description": "It was the kind of tawdry tale Donald Trump might’ve shrugged off before his life in politics: a porn actress claiming they’d had sex. But on the eve of the 2016 presidential election, Trump feared the story would cost him votes. So, prosecutors say he arrang…",
        "url": "https://apnews.com/article/donald-trump-michael-cohen-stormy-daniels-e40532d3bce7768e296fdaf9591ef05b",
        "urlToImage": "https://dims.apnews.com/dims4/default/d039f47/2147483647/strip/true/crop/2000x1125+0+105/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F99%2Fe9%2Fd15a3b380c9e451f4541932f3f18%2F6bbac647cf8e4be5b65e28196d65ba53",
        "publishedAt": "2024-04-13T04:00:00Z",
        "content": "NEW YORK (AP) It was the kind of tawdry tale Donald Trump mightve relished before politics: a porn actress claiming theyd had sex.\r\nBut on the eve of the 2016 presidential election, Trump feared the … [+7588 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "MASTERS DAY 2 RECAP ⛳️ Tiger Woods makes HISTORY & 3-way tie for the lead | SportsCenter - ESPN",
        "description": "Andy North joins SportsCenter to detail the tight race for who win the 2024 Masters after Day 2 at Augusta National.✔️Subscribe to ESPN+ http://espnplus.com/...",
        "url": "https://www.youtube.com/watch?v=8KOQGiqVZ_4",
        "urlToImage": "https://i.ytimg.com/vi/8KOQGiqVZ_4/maxresdefault.jpg",
        "publishedAt": "2024-04-13T03:55:48Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Www.geo.tv"
        },
        "author": "Web Desk",
        "title": "People fear going blind after witnessing Total Solar Eclipse without eye protection - Geo News",
        "description": "It hasn’t been long since the day when some lucky Earthlings witnessed this year’s Total Solar Eclipse but doctors, in areas that fell in the path of totality, have reported a surge in cases of...",
        "url": "https://www.geo.tv/latest/538866-people-fear-going-blind-after-witnessing-total-solar-eclipse-without-eye-protection",
        "urlToImage": "https://www.geo.tv/assets/uploads/updates/2024-04-12/l_538866_023754_updates.jpg",
        "publishedAt": "2024-04-13T03:51:00Z",
        "content": "Doctors see surge in eye-related injuries days after Total Solar Eclipse. \r\nIt hasnt been long since the day when some lucky Earthlings witnessed this years Total Solar Eclipse but doctors, in areas … [+1848 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Mariana Alfaro, Sabrina Rodriguez",
        "title": "Voters in Arizona reminded of Trump and Republicans’ role in abortion bans - The Washington Post",
        "description": "Democrats in Arizona went on the attack against Republicans over their apparent about-face on abortion rights.",
        "url": "https://www.washingtonpost.com/politics/2024/04/12/arizona-senate-trump-abortion/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/04-12-2024/t_4294657fc7db43a78459aa5590edb95c_name_NCSDQ2I5JEDVBDKBQOAAFTLWU4_scaled.jpg&w=1440",
        "publishedAt": "2024-04-13T03:32:00Z",
        "content": "Democrats went on the attack in Arizona on Friday against Republicans over their apparent about-face on abortion rights and vowed to keep the issue front and center in the swing state that could sway… [+6353 chars]"
    },
    {
        "source": {
            "id": "abc-news",
            "name": "ABC News"
        },
        "author": "JENNIFER SINCO KELLEHER Associated Press",
        "title": "Heavy rain across Kauai prompts rescues from floodwater, but no immediate reports of injuries - ABC News",
        "description": "Several people on the Hawaiian island of Kauai needed to be rescued from floodwaters during heavy rain, but there were no immediate reports of injuries",
        "url": "https://abcnews.go.com/US/wireStory/heavy-rain-kauai-prompts-rescues-floodwater-immediate-reports-109184908",
        "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
        "publishedAt": "2024-04-13T02:16:05Z",
        "content": "HONOLULU -- Several people on the Hawaiian island of Kauai needed to be rescued from floodwaters during heavy rain, authorities said Friday, but there were no immediate reports of injuries. \r\nHeavy r… [+1956 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Newsnationnow.com"
        },
        "author": "Garrett Phillips",
        "title": "DeSantis signs bill banning outdoor worker heat protection laws - NewsNation Now",
        "description": "Thursday night, Governor DeSantis signed a Florida bill barring local governments from requiring heat protection for outdoor workers.",
        "url": "https://www.newsnationnow.com/politics/desantis-signs-bill-banning-worker-heat-protection-laws/",
        "urlToImage": "https://www.newsnationnow.com/wp-content/uploads/sites/108/2024/04/State-Watch-DeSantis_031524_AP_Phil-Sears.jpg?w=1280",
        "publishedAt": "2024-04-13T02:06:59Z",
        "content": "Related video: Governor Ron DeSantis signs new bills aimed at protecting children\r\nTAMPA, Fla. (WFLA) Florida Gov. Ron DeSantis signed a bill Thursday barring local governments from requiring heat pr… [+1821 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "12news.com KPNX"
        },
        "author": "Jeff Vinton",
        "title": "Report: Arizona Coyotes players told they are moving to Salt Lake City - 12news.com KPNX",
        "description": "A new report from PHNX Sports' Craig Morgan says the players were told in a meeting that they will be leaving the Valley. Here is the latest.",
        "url": "https://www.12news.com/article/sports/nhl/coyotes/report-arizona-coyotes-moving-to-salt-lake-city/75-7411b07d-bc01-4335-adcd-4b6cde8f7044",
        "urlToImage": "https://media.12news.com/assets/KPNX/images/bde44aa6-833d-4ac3-ac8c-05ba0aadae7a/bde44aa6-833d-4ac3-ac8c-05ba0aadae7a_1140x641.jpg",
        "publishedAt": "2024-04-13T02:00:00Z",
        "content": "TEMPE, Ariz. The Arizona Coyotes players were told they are moving to Salt Lake City in a meeting before their game in Edmonton Friday, according to a new report from PHNX Sports' Craig Morgan.  \r\nTh… [+5332 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "WESH Orlando"
        },
        "author": "Deanna Clement",
        "title": "SpaceX launches Starlink satellites from Cape Canaveral - WESH 2 Orlando",
        "description": "A SpaceX launch went up Friday night.",
        "url": "https://www.wesh.com/article/spacex-cape-canaveral-launch-starlink/60485542",
        "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/spacex-64f5444264b71.jpg?crop=0.930xw:1.00xh;0.0359xw,0&resize=1200:*",
        "publishedAt": "2024-04-13T01:58:00Z",
        "content": "BREVARD COUNTY, Fla. —A SpaceX launch went up Friday night.\r\nAt the Cape Canaveral Space Force Station, 23 Starlink satellites were sent into orbit during a Falcon 9 launch. \r\nThe launch took off at … [+113 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": null,
        "title": "Sudan civil war: The children living between starvation and death in Darfur - BBC.com",
        "description": "Millions have fled Sudan's year-long civil war and hunger is now leading to the deaths of many children.",
        "url": "https://www.bbc.com/news/world-africa-68788650",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15DBC/production/_133123598_e50f4559-6613-4f66-bd62-f592cf8380c6.jpg",
        "publishedAt": "2024-04-13T01:05:03Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "pgatour.com"
        },
        "author": "Sean Martin",
        "title": "Tiger Woods makes cut at Masters, breaks all-time record with 24 consecutive cuts - PGA TOUR - PGA TOUR",
        "description": "AUGUSTA, Ga. – The second day of the 88th Masters was never going to be kind to Tiger Woods. It was an intersection of worst-case scenarios, with Woods having t",
        "url": "https://www.pgatour.com/article/news/latest/2024/04/12/tiger-woods-makes-cut-masters-tournament-augusta-national-breaks-record-most-consecutive-cuts",
        "urlToImage": "https://res.cloudinary.com/pgatour-prod/w_1200,h_628,c_fill,f_auto,q_auto/pgatour/news/editorial/2024/04/12/tiger-woods-cut-streak-new.jpg",
        "publishedAt": "2024-04-13T00:40:58Z",
        "content": "Tiger Woods during the second round of the 2024 Masters Tournament. (Ben Jared/PGA TOUR))AUGUSTA, Ga. The second day of the 88th Masters was never going to be kind to Tiger Woods. It was an intersect… [+6397 chars]"
    },
    {
        "source": {
            "id": "bloomberg",
            "name": "Bloomberg"
        },
        "author": "Brody Ford",
        "title": "Salesforce in Talks to Buy Informatica, Wall Street Journal Says - Bloomberg",
        "description": "Salesforce Inc., the top maker of customer relations software, is in advanced talks to acquire Informatica Inc., the Wall Street Journal reported, citing people familiar with the discussions.",
        "url": "https://www.bloomberg.com/news/articles/2024-04-13/salesforce-in-talks-to-buy-informatica-wall-street-journal-says",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iLbXUhbLkUgA/v0/1200x799.jpg",
        "publishedAt": "2024-04-13T00:21:00Z",
        "content": "Salesforce Inc., the top maker of customer relations software, is in advanced talks to acquire Informatica Inc., the Wall Street Journal reportedBloomberg Terminal\r\n, citing people familiar with the … [+338 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": null,
        "title": "Fact checking Trump and Johnson’s election integrity announcement - CNN",
        "description": "Former President Donald Trump and House Speaker Mike Johnson raised concerns Friday about the integrity of US elections, in a joint appearance at Mar-a-Lago that featured false claims about voting.",
        "url": "https://www.cnn.com/2024/04/12/politics/fact-check-trump-johnson-elections/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24103765261238.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-04-12T23:54:00Z",
        "content": "Former President Donald Trump and House Speaker Mike Johnson raised concerns Friday about the integrity of US elections in a joint appearance at Mar-a-Lago that featured false claims about voting, im… [+7377 chars]"
    },
    {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": "Cara Tabachnick",
        "title": "1 killed, several injured when big rig plows into Texas Department of Public Safety office in apparent \"intentional\" act, officials say - CBS News",
        "description": "The 18-wheeler was stolen and crashed into the office in Brenham in a \"deliberate, heinous act,\" said Texas State Sen. Lois Kolkhorst.",
        "url": "https://www.cbsnews.com/news/truck-crash-texas-department-of-public-safety-intentional-injuries-brenham/",
        "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/04/12/c5a0bcb4-59b7-4fde-b737-8e0829e71a5b/thumbnail/1200x630g6/677b242ae7d9f4b690f3c946b0a88d6f/ap24103683195145.jpg?v=c0ff3069549804234360eec4c5e30dea",
        "publishedAt": "2024-04-12T23:53:13Z",
        "content": "A big rig plowed into a Texas Department of Public Safety office in an apparent \"intentional\" act, officials said Friday. One person was killed and at least a dozen people were injured, said DPS Sgt.… [+3029 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Honolulu Star-Advertiser"
        },
        "author": "Nina Wu",
        "title": "Another case of travel-related dengue reported on Oahu - Honolulu Star-Advertiser",
        "description": "Another confirmed case of travel-related dengue has been reported to the state Health Department — this time, in Haleiwa.",
        "url": "https://www.staradvertiser.com/2024/04/12/breaking-news/another-case-of-travel-related-dengue-reported-in-haleiwa/",
        "urlToImage": "https://www.staradvertiser.com/wp-content/uploads/2024/04/web1_dengue.jpg",
        "publishedAt": "2024-04-12T23:51:51Z",
        "content": "Another confirmed case of travel-related dengue has been reported to the state Health Department — this time, in Haleiwa.\r\nThe latest case was reported Thursday, just a few days after another travel-… [+2241 chars]"
    },
    {
        "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
        },
        "author": "Ali Harb",
        "title": "‘Disastrous’: Israel-Iran tensions test limits of US policy amid Gaza war - Al Jazeera English",
        "description": "Biden’s ‘ironclad’ backing of Israel is coming into conflict with stated US goal of averting regional war, analysts say.",
        "url": "https://www.aljazeera.com/news/2024/4/12/disastrous-israel-iran-tensions-test-limits-of-us-policy-amid-gaza-war",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/04/2024-04-12T212914Z_2082068738_RC2757AZLV4E_RTRMADP_3_USA-BIDEN-WEALTH-GAP-1712962104.jpg?resize=1920%2C1440",
        "publishedAt": "2024-04-12T23:46:55Z",
        "content": "Washington, DC United States President Joe Biden had a brief but stern warning for Iran as it promised to retaliate against Israel for a deadly air raid on its consulate in Damascus: Dont.\r\nBut analy… [+7711 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "GamesRadar+"
        },
        "author": "Lauren Milici",
        "title": "Fallout TV show didn't need to use CGI to create the Wasteland because it found the perfect real-life location - Gamesradar",
        "description": "Anyone fancy a trip to the Namib desert?",
        "url": "https://www.gamesradar.com/fallout-tv-show-wasteland-namib-desert/",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/2XyXWE5C8p2EDRds5TcQrM-1200-80.jpg",
        "publishedAt": "2024-04-12T23:38:25Z",
        "content": "Prime Video's live-action TV adaptation of Fallout is visually stunning – and those wild desert sets are real.\r\nRather than throw some sand under a green screen, The Wasteland was shot in Namibia on … [+1444 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Fox Business"
        },
        "author": "Lydia Hu",
        "title": "US Steel shareholders vote on controversial Nippon deal - Fox Business",
        "description": "Japan's Nippon Steel cleared one hurdle in acquiring U.S. Steel with a key vote on Friday, even as lawmakers raise red flags about foreign ownership of an American company.",
        "url": "https://www.foxbusiness.com/markets/us-steel-shareholders-vote-on-controversial-nippon-deal",
        "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/03/0/0/Nippon-Steel-Wheeling.jpg?ve=1&tl=1",
        "publishedAt": "2024-04-12T23:25:50Z",
        "content": "U.S. Steel shareholders approved the $14.1 billion controversial takeover by Japanese-owned Nippon Steel. \r\nMore than 98% of the shares voted at Friday’s meeting to approve the merger, making up abou… [+6175 chars]"
    }
]
  constructor(){
    super();
    this.state={
      articles:[],
      page:1,
      results:0,
      loading:false
      
    }

    
  }
  static defaultProps = {
    country:'in',
    pageSize:5,
    category:'general'
  }

  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=15e09deffa454dd19cb65a643ae384a6&page=1&pagesize=${this.props.pageSize}`
    this.setState({
        loading:true
    })
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
        articles:parsedData.articles,
        results:parsedData.totalResults,
        loading:false
    })
  }
  handlenextClick=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=15e09deffa454dd19cb65a643ae384a6&page=${this.state.page+1}&pagesize=${this.props.pageSize}`
    this.setState({
        loading:true
    })
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
        articles:parsedData.articles
    })
    this.setState({
        loading:false,
        page:this.state.page+1,
        results:parsedData.totalResults
    })

  }

  handleprevClick=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=15e09deffa454dd19cb65a643ae384a6&page=${this.state.page-1}&pagesize=${this.props.pageSize}`
    this.setState({
        loading:true
    })
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
        articles:parsedData.articles
    })
    this.setState({
        loading:false,
        page:this.state.page-1,
        results:parsedData.totalResults
    })

  }
 
  render() {
    return (
      <div className="container my-3">
        <h2 className=" text-center my-3">NewsMonkey-Top HeadLines</h2>

        {this.state.loading && <Spinner/>} 
        
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{ 
          return <div className="col-md-4" key={element.url}>
                   <NewsItem key={element.url} title={element.title?element.title.slice(0,45):""} imageUrl={element.urlToImage} description={element.description?element.description.slice(0,88):""} newsUrl={element.url} author={element.author} date={element.publishedAt}/>

          
                  </div>
        })}
            
            
          </div>
          <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark mx-3" onClick={this.handleprevClick}> &larr; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.results/10)} type="button" className="btn btn-dark mx-3" onClick={this.handlenextClick}> Next &rarr; </button>

          </div>

        
      </div>
    )
  }
}

export default News
