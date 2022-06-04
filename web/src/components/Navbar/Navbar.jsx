import { Component } from "preact";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.items = [
      { link: "/", name: "Home" },
      { link: "/commands", name: "Commands" },
    ];
  }

  render() {
    return (
      <div className="navbar">
        {this.items.map((item) => (
          <a href={item.link}>{item.name}</a>
        ))}
      </div>
    );
  }
}
