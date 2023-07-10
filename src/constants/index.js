import { BsTools } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { PiShareNetworkDuotone } from "react-icons/pi";

export const navLinks = [
  {
    id: "1",
    title: "Acceuil",
    url: "/",
  },
  {
    id: "2",
    title: "A propos de nous",
    url: "/about",
  },
  {
    id: "3",
    title: "Services",
    url: "/services",
  },
  {
    id: "4",
    title: "Contact",
    url: "/contact",
  },
];

export const footerLinks = [
  {
    id: "1",
    title: "Nos Services",
    links: [
      {
        id: "1",
        name: "IT solution",
        url: "#",
      },
      {
        id: "2",
        name: "web development",
        url: "#",
      },
      {
        id: "3",
        name: "services réseautage",
        url: "#",
      },
      {
        id: "4",
        name: "SEO optimisation",
        url: "#",
      },
      {
        id: "5",
        name: "app optimisation",
        url: "#",
      },
    ],
  },
  {
    id: "2",
    title: "Liens Rapides",
    links: [
      {
        id: "1",
        name: "a propos",
        url: "#",
      },
      {
        id: "2",
        name: "étude de cas",
        url: "#",
      },
      {
        id: "3",
        name: "contact-nous",
        url: "#",
      },
      {
        id: "4",
        name: "politique de confidentialité",
        url: "#",
      },
      {
        id: "5",
        name: "termes et conditions",
        url: "#",
      },
    ],
  },
];

export const solutions = [
  {
    id: "1",
    icon: <BsTools className="icon" />,
    desc: "Libérez la puissance de la technologie avec nos solutions informatiques innovantes.",
  },
  {
    id: "2",
    icon: <FaLaptopCode className="icon" />,
    desc: "Améliorez votre présence en ligne avec des solutions expertes de développement Web.",
  },
  {
    id: "3",
    icon: <PiShareNetworkDuotone className="icon" />,
    desc: "Connecter les entreprises et favoriser la croissance grâce à des services de mise en réseau fiables.",
  },
];

export const websiteSolution = [
  {
    id: "1",
    title: "développement e-commerce",
  },
  {
    id: "2",
    title: "développement WordPress",
  },
  {
    id: "3",
    title: "Optimisater la vitesse des pages",
  },
  {
    id: "4",
    title: "Web Design",
  },
  {
    id: "5",
    title: "Surveillance du réseau",
  },
  {
    id: "6",
    title: "développement shopify",
  },
];

export const techsoul = [
  {
    id: "1",
    title: "Découverte & Stratégie",
  },
  {
    id: "2",
    title: "iOS apps (Swift)",
  },
  {
    id: "3",
    title: "Service informatique géré",
  },
  {
    id: "4",
    title: "UX/UI Design",
  },
  {
    id: "5",
    title: "Android apps (Java)",
  },
  {
    id: "6",
    title: "Cloud Services",
  },
];
