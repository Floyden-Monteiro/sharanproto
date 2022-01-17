import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./component/Navbar";
import FirstScreen from "./component/FirstScreen";
import SecondPage from "./component/SecondPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={FirstScreen} />
        <Route path="/" component={SecondPage} />
      </Switch>
     
    </Router>
  );
}

export default App;
