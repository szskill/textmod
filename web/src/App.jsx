import { Component } from "preact";
import Home from "./pages/Home/Home";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Home />
      </div>
    );
  }
}
