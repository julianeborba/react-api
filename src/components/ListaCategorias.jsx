import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { busca } from "../api/api";

const ListaCategorias = () =>{
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        busca(`/categorias`, setCategorias);
      }, []); 
    return(
        <ul>
            {
                categorias.map((categoria) =>(
                    <Link to={`/categoria/${categoria.id}`}>
                        <li className={`categoria--${categoria.id}`}>
                            {categoria.nome}
                        </li>
                    </Link>
                ))
            }
        </ul>
    );
}

export default ListaCategorias;