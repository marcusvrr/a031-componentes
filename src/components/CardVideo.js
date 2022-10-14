import React from "react";
import { InfosUsuario } from "./InfosUsuario";

export function CardVideo() {
    const titulo = "Título do vídeo";

    function reproduzVideo() {
      alert("O vídeo está sendo reproduzido");
    }
    return (
        <section className="painel-de-videos">
        <div className="box-pagina-principal" onClick={reproduzVideo}>
          <InfosUsuario/>
          <h4>{titulo}</h4>
        </div>
        <div className="box-pagina-principal" onClick={reproduzVideo}>
        <InfosUsuario/>
          <h4>{titulo}</h4>
        </div>
        <div className="box-pagina-principal" onClick={reproduzVideo}>
        <InfosUsuario/>
          <h4>{titulo}</h4>
        </div>
        <div className="box-pagina-principal" onClick={reproduzVideo}>
        <InfosUsuario/>
          <h4>{titulo}</h4>
        </div>
        <div className="box-pagina-principal" onClick={reproduzVideo}>
        <InfosUsuario/>
          <h4>{titulo}</h4>
        </div>
        <div className="box-pagina-principal" onClick={reproduzVideo}>
        <InfosUsuario/>
          <h4>{titulo}</h4>
        </div>
        <div className="box-pagina-principal" onClick={reproduzVideo}>
        <InfosUsuario/>
          <h4>{titulo}</h4>
        </div>
        <div className="box-pagina-principal" onClick={reproduzVideo}>
        <InfosUsuario/>
          <h4>{titulo}</h4>
        </div>
      </section>
    )

}