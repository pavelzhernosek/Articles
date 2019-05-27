import React, { Component } from "react";
import ArticleList from "../ArticleList";

export default class App extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div>
        <ArticleList articles={articles} />
      </div>
    );
  }
}
