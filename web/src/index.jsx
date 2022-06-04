import { render } from "preact";
import Router from "preact-router";
import CommandList from "./pages/CommandList/CommandList";
import Home from "./pages/Home/Home";
import "./index.css";

function Main() {
  return (
    <Router>
      <Home path="/" />
      <CommandList path="/commands" />
    </Router>
  );
}

render(<Main />, document.getElementById("app"));
