import React, { useState, useEffect } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { busca } from "../api/api";
import ListaCategorias from "../components/ListaCategorias";
import SubCategoria from "./SubCategoria";
import ListaPost from "../components/ListaPost";

const Categorias = () => {
  //Nessa classe ocorre rota aninhadas
  const { id } = useParams();
  const { url, path } = useRouteMatch(); //Mostra que path ta na url

  const [subcategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    busca(`/categorias/${id}`, (categorias) => {
      //Ao inves de passar direto setSubCategroia, passa uma funcao anonima para conseguir atualizar categoria e depois
      setSubCategorias(categorias.subcategorias);
    });
  }, [id]); //Array de dependência, toda vez que ele é alterado tem que fazer essa chamada

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias />
      <ul>
        {subcategorias.map((subcategoria) => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPost url={`/posts?categoria=${id}`} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  );
};

export default Categorias;
