import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Works from "./components/Works/Works";
import { Suspense } from "react";
import "./home.scss";

function Home() {
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

// here app catches the suspense from page in case translations are not yet loaded
export default function WrappedHome() {
  return (
    <Suspense fallback="...is loading">
      <Home />
    </Suspense>
  );
}
