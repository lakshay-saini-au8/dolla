import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages";
// import SigninPage from "./pages/signin";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/signin" component={SigninPage} /> */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
