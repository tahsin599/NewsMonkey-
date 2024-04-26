import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(0);
  const [page, setPage] = useState(1);
  // document.title = this.capitalize(this.props.category) + '-' + "NewsMonkey"
  const updatenews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
    
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    
    setArticles(articles.concat(parsedData.articles));
    setLoading(false);
    setResults(parsedData.totalResults);
  

    props.setProgress(100);

  }

  useEffect(() => {
    updatenews();
  }, []);

  
  const handlenextClick = async () => {
    setPage(page+1);
      updatenews();

  }

  const handleprevClick = async () => {
   setPage(page-1);
    updatenews();

  }
  const fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
   
    setPage(page+1);
    updatenews();
  };

  
    return (
      <div className="container my-3">
        <h2 className=" text-center my-3">NewsMonkey-Top HeadLines</h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}


          hasMore={articles.length !== results}
          loader={<h4>Loading...</h4>}

        >



          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem key={element.url} title={element.title ? element.title.slice(0, 45) : ""} imageUrl={element.urlToImage} description={element.description ? element.description.slice(0, 88) : ""} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />


              </div>
            })}


          </div>
        </InfiniteScroll>




      </div>

    )
  
}

News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string

}

export default News
