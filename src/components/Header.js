import React from "react";

/* importando imagem logo do facebook png */
import facebookLogo from "../assets/img/facebook-1.png";

function Header() {
  return (
    /* Estrutura basica em HTML */
    <header>
      <nav>
        <img  src={facebookLogo} />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
