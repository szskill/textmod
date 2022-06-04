import { Component } from "preact";
import "./Statistics.css";

export default class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = { numGuilds: 0, numUsers: 0 };
  }

  componentDidMount() {
    fetch("/api/v1/numGuilds")
      .then((res) => res.text())
      .then((text) => this.setState({ numGuilds: Number(text) }));

    fetch("/api/v1/numUsers")
      .then((res) => res.text())
      .then((text) => this.setState({ numUsers: Number(text) }));
  }

  render() {
    return (
      <div className="statistics">
        <span>{this.state.numGuilds} servers</span>
        <br />
        <span>{this.state.numUsers} users</span>
      </div>
    );
  }
}
