import { Component } from "preact";
import Navbar from "../../components/Navbar/Navbar";
import Statistics from "../../components/Statistics/Statistics";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <h1>TextMod</h1>
        <Statistics />
      </div>
    );
  }
}
