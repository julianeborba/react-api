import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { busca } from "../api/api";

const ListaPost = ({ url }) => {
  const [posts, setPosts] = useState([]); //Array vazio é o estado inicial da nossa aplicacao

  useEffect(() => {
    // Se nao rodasse ia ficar recarregando e rodando direto a aplciacao devido o efeito colateral aí contra isso usa o useEffect
    busca(url, setPosts);
  }, [url]);

  /*Alternativa correta! A tag <Link to=””> do React simula o comportamento da tag <a href=””> mas sem fazer novas requisições para o servidor.*/

  return (
    <section className="posts container">
    { 
     posts.map((post)=> (
       <Link className={`cartao-post cartao-post--${post.categoria}`} to={`/posts/${post.id}`}>
         <article key={post.id}>
            <h3 className="cartao-post__titulo">
              {post.title}
            </h3>
            <p className="cartao-post__meta">{post.metadescription}</p>
         </article> 
       </Link>
     ))
    }
  </section>
  ); //Nos montamos um card de acordo com o que vem no db.json
};
export default ListaPost;
