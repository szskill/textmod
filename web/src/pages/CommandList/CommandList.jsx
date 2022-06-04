import { Component } from "preact";
import Navbar from "../../components/Navbar/Navbar";
import "./CommandList.css";

export default class CommandList extends Component {
  constructor(props) {
    super(props);
    this.state = { commands: [] };
  }

  componentDidMount() {
    fetch("/api/v1/commands")
      .then((res) => res.json())
      .then((json) => this.setState({ commands: json }));
  }

  render() {
    return (
      <div className="command-list">
        <Navbar />

        <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>

          {this.state.commands.map((command) => (
            <tr>
              <td>{command.name}</td>
              <td>{command.description}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
