import React from "react";
import { avatar, chooseOne, chooseTwo, header } from "../assets";
import { Link } from "react-router-dom";
import { solutions, techsoul, websiteSolution } from "../constants";

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header_text">
          <h1>
            Encouragez l'Innovation avec des{" "}
            <span style={{ color: "#f7c59f", fontWeight: 700 }}>
              Solutions Technologiques
            </span>
          </h1>
          <p>
            Bienvenue sur notre site Web de solutions technologiques, où nous
            révolutionnons la façon dont les entreprises prospèrent à l'ère
            numérique. Nous sommes spécialisés dans la fourniture de solutions
            de pointe qui exploitent la puissance de la technologie pour
            accroître l'efficacité, améliorer la productivité et ouvrir de
            nouvelles opportunités. Découvrez notre gamme complète de solutions
            sur mesure conçues pour transformer votre entreprise et profiter du
            potentiel illimité de la technologie.
          </p>

          <button className="btn1">En Savoir plus</button>
          <button className="btn2">Contactez-nous</button>
        </div>
        <img src={header} alt="header" />
      </div>

      <div className="home-solutions">
        {solutions.map(({ id, icon, title, desc }) => (
          <div className="home-solutions_card" key={id}>
            {icon}
            <h3>{title}</h3>
            <p>{desc}</p>
            <Link className="link">Read More</Link>
          </div>
        ))}
      </div>

      <div className="home-section1">
        <div className="home-section1_left">
          <h2>Création de solutions de site Web</h2>
          <p>
            Transformer les idées en solutions de site Web attrayantes pour
            votre réussite numérique.
          </p>

          <div className="home-section1_left-list">
            {websiteSolution.map(({ id, title }) => (
              <Link to={`/service/${id}`} key={id} className="item">
                {title}
              </Link>
            ))}
          </div>
        </div>

        <img src={chooseOne} alt="img" />
      </div>

      <div className="home-section2">
        <div className="home-section1_left">
          <h2>DevTechno pour votre entreprise</h2>
          <p>
            Infuser la brillance technologique dans l'âme de votre entreprise.
          </p>

          <div className="home-section1_left-list">
            {techsoul.map(({ id, title }) => (
              <Link to={`/service/${id}`} key={id} className="item">
                {title}
              </Link>
            ))}
          </div>
        </div>

        <img src={chooseTwo} alt="img" />
      </div>

      <div className="home-stats">
        <div className="home-stats_part">
          <h1>15+</h1>
          <p>ans d'experience</p>
        </div>

        <div className="home-stats_part">
          <h1>200</h1>
          <p>projets completes</p>
        </div>

        <div className="home-stats_part">
          <h1>20+</h1>
          <p>employés</p>
        </div>

        <div className="home-stats_part">
          <h1>150+</h1>
          <p>5 étoiles</p>
        </div>
      </div>

      <div className="home-reviews">
        <div className="home-reviews-card">
          <p>⭐⭐⭐⭐⭐</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            voluptate inventore? Itaque adipisci, fugiat odio commodi enim
            aperiam dolor, alias cum eum dignissimos debitis perspiciatis sint
            officiis quod saepe natus.
          </p>
          <div className="home-reviews-card_profile">
            <img src={avatar} alt="avatar" className="avatar" />
            <p>Mario Houston</p>
            <p>Social Worker</p>
          </div>
        </div>

        <div className="home-reviews-card">
          <p>⭐⭐⭐⭐⭐</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            voluptate inventore? Itaque adipisci, fugiat odio commodi enim
            aperiam dolor, alias cum eum dignissimos debitis perspiciatis sint
            officiis quod saepe natus.
          </p>
          <div className="home-reviews-card_profile">
            <img src={avatar} alt="avatar" className="avatar" />
            <p>Mario Houston</p>
            <p>Social Worker</p>
          </div>
        </div>

        <div className="home-reviews-card">
          <p>⭐⭐⭐⭐⭐</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            voluptate inventore? Itaque adipisci, fugiat odio commodi enim
            aperiam dolor, alias cum eum dignissimos debitis perspiciatis sint
            officiis quod saepe natus.
          </p>
          <div className="home-reviews-card_profile">
            <img src={avatar} alt="avatar" className="avatar" />
            <p style={{ fontWeight: 600, marginBottom: "10px" }}>
              Mario Houston
            </p>
            <p style={{ fontSize: "13px" }}>Social Worker</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
