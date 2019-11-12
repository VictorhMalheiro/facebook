import React from "react";
import "./App.css";

/* importando components */
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  return (
    /* colocando estrutura da pagina principal */
    <> 
      <Header />
      <CreatePost />
      <PostList />
    </>
  );
}

export default App;
