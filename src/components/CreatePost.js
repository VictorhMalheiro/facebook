import React from "react";

function CreatePost() {
  return (
    <div class="create">
      <form class="formPost">
        <textarea placeholder="No que você está pensando?" class="inputPost" type="textarea" />
        {/* <div class="divider"></div> */}
        <button class="btnPost" type="submit">Publicar</button>
      </form>
    </div>
  );
}

export default CreatePost;
