import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-upper">
        <div className="footer-upper_logo">
          <h1 className="logo">DevTechno</h1>
          <div className="footer-upper_logo-socials">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaPinterestP className="icon" />
            <FaLinkedinIn className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>

        <div className="footer-upper_links">
          {footerLinks.map(({ id, title, links }) => (
            <ul key={id} className="footer-upper_links-list">
              <h3>{title}</h3>
              {links.map(({ id, name, url }) => (
                <li key={id} className="footer-upper_links-list-item">
                  <Link to={url} className="link">
                    {name}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          <ul className="footer-upper_links-list">
            <h3>Contact Information</h3>
            <li className="footer-upper_links-list-item">
              Téléphone: +212 5 12 13 14 150
            </li>
            <li className="footer-upper_links-list-item">
              Email: devtechno@example.com
            </li>
            <li className="footer-upper_links-list-item">
              Address: 4035 Heavens, Los Angelos, California
            </li>
            <li className="subscribe">
              <input type="email" name="email" placeholder="Entre vore email" />
              <button>S'inscrire</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-lower">
        <p>©️ 2023 DevTechno - All Rights Reserved</p>
        <p>Terms & Conditions | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
