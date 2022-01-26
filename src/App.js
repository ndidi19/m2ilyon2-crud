import React, {Component} from "react";
import TitrePrincipal from "./components/Titres/TitrePrincipal";
import Books from "./containers/Books/Books";

class App extends Component {

  state = {

  }

  render() {
    return (
      <div className="container">
        <TitrePrincipal>Ma liste de livres</TitrePrincipal>
        <Books />
      </div>
    );
  }
}

export default App;
