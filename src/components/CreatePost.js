import React from "react";

function CreatePost() {
  return (
    <div className="create">
      <form className="formPost">
        <textarea  placeholder="No que você está pensando?" className="inputPost" type="textarea" />
        <button className="btnPost" type="submit">Publicar</button>
      </form>
    </div>
  );
}

export default CreatePost;
