import { render } from "preact";
import GrainFilter from "./grain-filter/GrainFilter";

import NavigationBar from "./navigation-bar/NavigationBar";
import Home from "./pages/home/Home";
import SomeoneToArgueWith from "./pages/someone-to-argue-with/SomeoneToArgueWith";
import SearchEngine from "./pages/search-engine/SearchEngine";
import GameJams from "./pages/game-jams/GameJams";
import Footer from "./footer/Footer";

import { Router } from "preact-router";
import "./style.sass";

const Main = () => (
  <>
    <GrainFilter />
    <NavigationBar />
    <main className="wrapper">
      <Router>
        <Home path="/" />
        <SomeoneToArgueWith path="/someone-to-argue-with" />
        <SearchEngine path="/search-engine" />
        <GameJams path="/game-jams" />
      </Router>
    </main>
    <Footer />
  </>
);

render(<Main />, document.getElementById("app"));
