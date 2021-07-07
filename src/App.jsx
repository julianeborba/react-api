import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Cabecalho from "./components/Cabecalho";
import Sobre from "./pages/Sobre";
import Post from "./pages/Post";
import Page404 from "./pages/Page404";
import Categorias from "./pages/Categorias";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/categoria/:id">
          <Categorias />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

// :id pra pegar o useParams do id especifico
// Quando não tem um path definido vai pra rota 404

export default App;
