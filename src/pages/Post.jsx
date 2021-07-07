import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { busca } from "../api/api";


const Post = () => {
  let history = useHistory(); //Hook do react que da acesso ao histórico de navegacao e faz uma transformacao nesse histórico
  const { id } = useParams(); // Hook do react: para quando clicar no card pegar o id dele e passar no post
  const [post, setPost] = useState({});
  useEffect(() => {
    busca(`/posts/${id}`, setPost).catch(() => {
      history.push('/404'); //Método dentro do hook que permite navegar até a rota indicada
    });
  }, [id,history]);

  return (
    <main>
      <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    </main>
  );
};

export default Post;
