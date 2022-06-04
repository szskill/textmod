import { Component } from "preact";
import "./Statistics.css";

export default class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = { numGuilds: 0 };
  }

  componentDidMount() {
    fetch("/api/v1/numGuilds")
      .then((res) => res.text())
      .then((text) => this.setState({ numGuilds: Number(text) }));
  }

  render() {
    return (
      <div className="statistics">
        <span className="statistics__title">Statistics</span>
        <br />
        <br />
        <span>🚀 In {this.state.numGuilds} servers</span>
      </div>
    );
  }
}
