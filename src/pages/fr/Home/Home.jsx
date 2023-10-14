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
      <Works />
    </>
  );
}

export default Home;
