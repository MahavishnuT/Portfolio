import WorkCard from "../Work Cards/WorkCards"
import javascriptLogo from "../../../public/logos/javascript.png"
import "./works.scss"

function Works() {
  return (
    <section id="works">
      <WorkCard picture="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg" title="prout" text="Un projet commencé sur JavaScript qui permet de faire des graphiques en réalité augmentée avec des piou piou et des doggos en lévitation" logo1={javascriptLogo}/>
    </section>
  )
}

export default Works