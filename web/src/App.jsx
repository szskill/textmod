import { Component } from "preact";
import CommandList from "./components/CommandList/CommandList";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <p>
          TextMod's site is still in progress; here's the command list for now
        </p>
        <CommandList />
      </div>
    );
  }
}
