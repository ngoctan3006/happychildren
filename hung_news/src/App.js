import React from "react";
import "./App.sass";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import News from "./Pages/News/News.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={News} />
          <Route exact path="/news" component={News} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
