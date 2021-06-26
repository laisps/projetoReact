import React from "react";
import img1 from "../../img/in.png";
import img2 from "../../img/github.png";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h1 class="name">Laís Pereira</h1>
        <p>
          Software engineer associate na Accenture Brasil | Salesforce | Mentora
          e Organizadora Cloud Girls | Aluna reprograma | Estudante de ADS
        </p>
      </div>
      <ul>
        <div className="icon">
          <li>
            <a
              className="link"
              href="https://www.linkedin.com/in/laispereira-/"
            >
              <img src={img1} alt="personagem simpson" />
            </a>
            <a className="link" href="https://github.com/laisps">
              <img src={img2} alt="personagem simpson" />
            </a>
          </li>
        </div>
        <li></li>
      </ul>
    </div>
  );
};

export default Footer;
