import About from "../../components/main/aboutme";
import Home from "../../components/main/home";

import Testimonial from "../../components/main/task";
import Work from "../../components/main/work";
import Contact from "../../components/main/contact";
import ScrollHashUpdater from "../../components/hooks/scrollHashUpdate";

export default function Main() {
  return (
    <main className="w-full md:px-11">
      <ScrollHashUpdater />
      <Home></Home>
      <About></About>
      <Work></Work>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </main>
  );
}

// #D1A9CD  #B8CAF4
// Abril Fatface Regular
// Nunito Regular
// Muli
