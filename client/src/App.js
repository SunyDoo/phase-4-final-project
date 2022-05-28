import "./App.css";
import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
