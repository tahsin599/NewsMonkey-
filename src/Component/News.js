import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
  capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  constructor(props) {
    super(props);
    this.props.setProgress(10);
    this.state = {
      articles: [],
      page: 1,
      results: 0,
      loading: false

    }

    document.title = this.capitalize(this.props.category) + '-' + "NewsMonkey"


  }
  static defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

  }
  async updatenews() {
    //this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles)
    })
    this.setState({
      loading: false,

      results: parsedData.totalResults
    })
    this.props.setProgress(100);

  }
  async componentDidMount() {
    this.updatenews();
  }
  handlenextClick = async () => {
    this.setState({
      page: this.state.page + 1
    })
    this.updatenews();

  }

  handleprevClick = async () => {
    this.setState({
      page: this.state.page - 1
    })
    this.updatenews();

  }
  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    this.setState({
      page: this.state.page + 1
    })
    this.updatenews();
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className=" text-center my-3">NewsMonkey-Top HeadLines</h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}


          hasMore={this.state.articles.length !== this.state.results}
          loader={<h4>Loading...</h4>}

        >



          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem key={element.url} title={element.title ? element.title.slice(0, 45) : ""} imageUrl={element.urlToImage} description={element.description ? element.description.slice(0, 88) : ""} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />


              </div>
            })}


          </div>
        </InfiniteScroll>




      </div>

    )
  }
}

export default News
