import reactLogo from "../../logos/react.png"
import javascriptLogo from "../../logos/javascript.png"
import sassLogo from "../../logos/sass.png"
import bootstrapLogo from "../../logos/bootstrap.png"
import htmlLogo from "../../logos/html5.png"
import cssLogo from "../../logos/css3.png"
import reduxLogo from "../../logos/redux.png"
import wealthHealth from "../../projects pictures/wealth-health.png"
import argentBank from "../../projects pictures/argentBank.png"
import "./works.scss"
import sportsee from "../../projects pictures/sportsee.png"
import kasa from "../../projects pictures/kasa.png"
import petitsPlats from "../../projects pictures/petits-plats.png"
import fisheye from "../../projects pictures/fisheye.png"
import WorkCardLeft from "../Work Cards/WorkCardsLeft"
import WorkCardRight from "../Work Cards/WorkCardsRight"

function Works() {
  return (
    <section id="works">
      <h2>Mes travaux</h2>
      <WorkCardLeft picture={wealthHealth} title="Wealth Health" text="Passer une application web interne de jQuery vers React pour améliorer les performances. Réalisation de tests avec Google Lighthouse et comparaison entre les deux versions." link="https://github.com/MahavishnuT/Projet_14" logo1={reactLogo} logo2={sassLogo} logo3={reduxLogo}/>
      <WorkCardRight picture={argentBank} title="ArgentBank" text="Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil via l'utilisation d'une API, et en spécifier les endpoints." link="https://github.com/MahavishnuT/Projet_13" logo1={reactLogo} logo2={sassLogo} logo3={reduxLogo}/>
      <WorkCardLeft picture={sportsee} title="Sportsee" text="Réalisation d'une application web qui récupère les données de l'utilisateur via une API, pour afficher ses statistiques sportives via la librairie Javascript Recharts" link="https://github.com/MahavishnuT/Projet_12" logo1={reactLogo} logo2={sassLogo}/>
      <WorkCardRight picture={kasa} title="Kasa" text="Refonte graphique d'un site web de location d'appartement entre particuliers. Récupération d'informations sur une base de données et affichage déléments dynamiques (carrousels, menus déroulants...)." link="https://github.com/MahavishnuT/Projet_11" logo1={reactLogo} logo2={sassLogo}/>
      <WorkCardLeft picture={petitsPlats} title="Les Petits Plats" text="Utilisation de différents algorithmes pour retrouver et trier des recettes dans une application web. Recherche via une barre principale, ou par l'utilisation de ''tags''." link="https://github.com/MahavishnuT/Projet_7" logo1={htmlLogo} logo2={bootstrapLogo} logo3={javascriptLogo}/>
      <WorkCardRight picture={fisheye} title="FishEye" text="Création d'un site web de photographes accessible pour des personnes en situation de handicap visuel. Utilisation d'un lecteur d'écran lors de la réalisation pour s'assurer que la navigation au clavier fonctionne bien." link="https://github.com/MahavishnuT/Projet_13" logo1={htmlLogo} logo2={cssLogo} logo3={javascriptLogo}/>
    </section>
  )
}

export default Works