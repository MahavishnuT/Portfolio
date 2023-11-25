import "./experience.scss";

function Experience() {
  return (
    <section id="experience">
      <h2>Mon expérience</h2>
      <span>J'ai connu plusieurs parcours très différents qui m'ont</span>
      <span>permis d'obtenir une grande polyvalence et une unique capacité d'adaptation.</span>
      <br />
      <span>Avant de coder, je suis passé par des études en physique-chimie</span>
      <span>et en journalisme, avec un voyage en solitaire en</span>
      <span>Asie du Sud-Est qui m'a permis d'apprendre à me débrouiller seul.</span>
      <br />
      <span className="last-span">Vous pouvez en apprendre plus en téléchargeant mon CV</span>
      <br />
      <button><a href="../../public/MyCV/CV_FR_BRU.pdf" download>CV</a>
      </button>
    </section>
  );
}

export default Experience;
