import React, { Component } from "react";

import Article from "../Article";

export default class ArticleList extends Component {
  state = {
    openArticleId: null
  };
  render() {
    const { articles } = this.props;
    const articleElements = articles.map(article => {
      return (
        <li className="list-group-item" key={article.id}>
          <Article
            article={article}
            // isOpen={article.id === this.state.openArticleId}
            // toggleOpen={this.toggleOpenArticle(article.id)}
          />
        </li>
      );
    });
    return <ul className="list-group">{articleElements}</ul>;
  }

  // toggleOpenArticle = openArticleId => {
  //   this.setState({ openArticleId   });
  // };
}
