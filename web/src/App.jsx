import { Component } from "preact";
import CommandList from "./components/CommandList/CommandList";
import Statistics from "./components/Statistics/Statistics";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <p>
          TextMod's site is still in progress; here's the stats and command list
          for now
        </p>
        <Statistics />
        <CommandList />
      </div>
    );
  }
}
