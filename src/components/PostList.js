import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    /* posts para serem consumidos na pagina principal */
    posts: [
      {
        id: 1,
        author: {
          name: "Victor Malheiro",
          avatar: "https://api.adorable.io/avatars/285/"
        },
        date: "03 Ago 2019",
        content: "Pessoal, alguém sabe de vagas para React.js?",
        comments: [
          {
            id: 1,
            author: {
              name: "Antonio Felicio",
              avatar: "https://api.adorable.io/avatars/285/"
            },
            content: "Pesquise por grupos de React.js/React Native existe várias vagas remotas..."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Victor Malheiro",
          avatar: "https://api.adorable.io/avatars/285/"
        },
        date: "03 Ago 2019",
        content: "Ontem o filme do Coringa foi sensacional",
        comments: [
          {
            id: 1,
            author: {
              name: "Antonio Felicio",
              avatar: "https://api.adorable.io/avatars/285/"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Filipe Deschamps",
          avatar: "https://api.adorable.io/avatars/285/"
        },
        date: "03 Ago 2019",
        content: "Turma, o que acham de um vídeo com o Diego Fernandes?",
        comments: [
          {
            id: 1,
            author: {
              name: "Victor Malheiro",
              avatar: "https://api.adorable.io/avatars/285/"
            },
            content: "Maneiro!"
          },
          {
            id: 2,
            author: {
              name: "Juliana Borges",
              avatar: "https://api.adorable.io/avatars/285/"
            },
            content: "TOP DE MAIS!"
          }
        ]
      },
      {
        id: 4,
        author: {
          name: " Juliana Borges",
          avatar: "https://api.adorable.io/avatars/285/"
        },
        date: "03 Ago 2019",
        content: "Ta acabando #caribe",
        img: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        comments: [
          {
            id: 1,
            author: {
              name: "Victor Malheiro",
              avatar: "https://api.adorable.io/avatars/285/"
            },
            content: "Lugar muito lindo!"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <ul class="post-list">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </ul>
    );
  }
}
export default PostList;
