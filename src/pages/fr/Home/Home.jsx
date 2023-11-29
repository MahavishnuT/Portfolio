import Experience from "../../../components/Experience/Experience";
import Footer from "../../../components/Footer/Footer";
import Landing from "../../../components/Landing/Landing";
import Works from "../../../components/Works/Works";
import "./home.scss";

function Home() {
  const userLanguage = navigator.language;

  console.log(`User's preferred language is: ${userLanguage}`);

  return (
    <>
      <div className="noise"></div>
      <Landing />
      <Experience />
      <Works />
      <Footer />
    </>
  );
}

export default Home;
