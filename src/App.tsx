import React from "react";

import "./App.css";
import "@progress/kendo-theme-bootstrap/dist/all.css";

import Header from "./components/Header";
import YouTubeHome from "./components-youtube/YouTubeHome";
import Route from "./components/Route";
import ImageHome from "./components-images/ImageHome";
import TransactionHome from "./components-transaction/transaction-home";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/">
          <YouTubeHome />
        </Route>
        <Route path="/images">
          <ImageHome />
        </Route>
        <Route path="/transaction">
          <TransactionHome />
        </Route>
      </div>
    );
  }
}

export default App;
