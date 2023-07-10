import React from "react";
import { homeFont } from "../assets";

const Connexion = () => {
  return (
    <div className="connexion">
      <form>
        <h1>Connexion</h1>
        <label for="username">Nom d'Utilisateur:</label>
        <input
          type="text"
          name="username"
          id="usename"
          placeholder="Entre votre nom d'utilicateur"
        />

        <label for="pwd">Mot de Pass:</label>
        <input
          type="password"
          name="password"
          id="pwd"
          placeholder="Entre votre mot de pass"
        />

        <button type="submit">Entrer</button>
      </form>

      <img src={homeFont} alt="bg" />
    </div>
  );
};

export default Connexion;
