import Home from "./home/page";
import Resume from "./resume/page";
import About from "./aboutme/page";
import Contact from "./contact/page";
import Testimonal from "./testimonial/page";
import Work from "./work/page";

export default async function Main() {
  return (
    <main>
      <Home></Home>
      <About></About>
      <Resume></Resume>
      <Work></Work>
      <Testimonal></Testimonal>
      <Contact></Contact>
    </main>
  );
}
