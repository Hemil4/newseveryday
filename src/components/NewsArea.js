import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class NewsArea extends Component {
  //   articles = [
  //     {
  //       source: {
  //         id: "reuters",
  //         name: "Reuters",
  //       },
  //       author: "Ananta Agarwal",
  //       title:
  //         "Hawaiian Airlines' parent surges on $1.9 bln buyout deal with Alaska Air - Reuters",
  //       description:
  //         'Shares of Hawaiian Holdings <a href="https://www.reuters.com/markets/companies/HA.O" target="_blank">(HA.O)</a>, the parent of Hawaiian Airlines, nearly tripled on Monday after Alaska Air Group <a href="https://www.reuters.com/markets/companies/ALK.N" target=…',
  //       url: "https://www.reuters.com/technology/aerospace-defense/hawaiian-airlines-parent-surges-19-bln-buyout-deal-with-alaska-air-2023-12-04/",
  //       urlToImage:
  //         "https://www.reuters.com/resizer/MQoe9fA31gjkcKW9sVNs7aAVY54=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MI4SPUDE6ZLFFPN6AOQTCHFKUU.jpg",
  //       publishedAt: "2023-12-05T00:22:00Z",
  //       content:
  //         "Dec 4 (Reuters) - Shares of Hawaiian Holdings (HA.O), the parent of Hawaiian Airlines, nearly tripled on Monday after Alaska Air Group (ALK.N) agreed to acquire it for $1.9 billion, including debt.\r\n… [+2382 chars]",
  //     },
  //     {
  //       source: {
  //         id: "espn",
  //         name: "ESPN",
  //       },
  //       author: null,
  //       title:
  //         "Heisman Trophy names Daniels, Harrison Jr., Nix as finalists - ESPN",
  //       description:
  //         "Jayden Daniels, Marvin Harrison Jr., Bo Nix and Michael Penix Jr. were announced as finalists for the Heisman Trophy on Monday night.",
  //       url: "https://www.espn.com/college-football/story/_/id/39043397/heisman-trophy-names-daniels-harrison-jr-nix-finalists",
  //       urlToImage:
  //         "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1121%2Fr1255835_1296x729_16%2D9.jpg",
  //       publishedAt: "2023-12-05T00:06:00Z",
  //       content:
  //         "LSU's Jayden Daniels, Oregon's Bo Nix and Washington's Michael Penix Jr., transfer quarterbacks who have all played at least five college seasons, and Ohio State receiver Marvin Harrison Jr. were ann… [+3409 chars]",
  //     },
  //     {
  //       source: {
  //         id: "the-washington-post",
  //         name: "The Washington Post",
  //       },
  //       author:
  //         "Rachel Pannett, Niha Masih, Leo Sands, Jennifer Hassan, Ben Brasch, Evan Hill, Shira Rubin, Alex Horton, Emily Eng, Laris Karklis, Cate Brown, Mikhail Klimentov, Sammy Westfall, Helier Cheung, Yasmeen Abutaleb, Adam Taylor, Joe Snell, Miriam Berger, Steve Hendrix, Michael Birnbaum, William Booth, Mariana Alfaro, Kareem Fahim, Hannah Allam",
  //       title:
  //         "Latest Israel-Hamas war news: Israel expands Gaza invasion into south - The Washington Post",
  //       description:
  //         "An Israeli ground incursion of Khan Younis would usher in a new stage of Israel’s war and may exacerbate the refugee crisis in Gaza.",
  //       url: "https://www.washingtonpost.com/world/2023/12/04/israel-hamas-war-gaza-news-palestine/",
  //       urlToImage:
  //         "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/12-04-2023/t_7f6d93b2e8db4f409c738e28bd9c067e_name_20231204_Rafah_Expansion_00_00_57_23_Still045.jpg&w=1440",
  //       publishedAt: "2023-12-05T00:04:42Z",
  //       content: null,
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "Yahoo Entertainment",
  //       },
  //       author: "Danica Creahan",
  //       title:
  //         "Monday Night Football: How to watch the Cincinnati Bengals vs. Jacksonville Jaguars game tonight - Yahoo Sports",
  //       description:
  //         "Here's what you need to know about how to watch Monday Night Football.",
  //       url: "https://sports.yahoo.com/watch-tonight-monday-night-football-tonight-cincinnati-bengals-jacksonville-jaguars-game-204730345.html",
  //       urlToImage:
  //         "https://s.yimg.com/ny/api/res/1.2/Y6grv_vJ9f_tKFPp6pG70g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-11/0f361730-9084-11ee-aacf-b72e51e4f878",
  //       publishedAt: "2023-12-04T23:55:35Z",
  //       content:
  //         "Hulus live TV bundle (with ads) will get you access to ABC, NBC, Fox, CBS and ESPN and access to ESPN+. Plus, for NCAA college football fans, you'll also get ESPNU, Fox, FS1, CBSN, NBC, ACCN, Big Ten… [+535 chars]",
  //     },
  //   ];
  constructor() {
    super();
    // console.log("i am news area");
    this.state = {
      artical: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=5f8fb90a03884327a8c7800f15c02814&page=1&pageSize=20`;
    let data = await fetch(url); 
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ artical: parseData.articles, loading: false });
  }
  handleNext = async () => {
    // console.log("next")
    this.setState({ page: this.state.page + 1, loading: true });
    console.log("1");

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=5f8fb90a03884327a8c7800f15c02814&page=${this.state.page}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ artical: parseData.articles, loading: false });
  };
  handlePrevious = async () => {
    this.setState({ page: this.state.page - 1, loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=5f8fb90a03884327a8c7800f15c02814&page=${this.state.page}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ artical: parseData.articles });
  };
  render() {
    return (
      <div>
        <div className="container">
          {this.state.loading && <Spinner />}
          <div className="row">
            {this.state.artical &&
              this.state.artical.map((element) => {
                return (
                  <NewsItem
                    imageUrl={element.urlToImage}
                    title={element.title}
                    description={element.description}
                    url={element.url}
                  />
                );
              })}
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              onClick={this.handlePrevious}
              className="btn btn-dark"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={this.handleNext}
              className="btn btn-dark"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsArea;
