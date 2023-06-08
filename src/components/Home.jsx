import Contato from "./Contato";
import Exp from "./Exp";
import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Sobre from "./Sobre";
import TrueExp from "./TrueExp";

function Home() {
  return (
    <div className="from-black bg-gradient-to-r to-slate-700 overflow-x-hidden overflow-y-hidden">
      <Header />
      <section>
        <Hero />
      </section>

      <section id="projetos">
        <Exp />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="xp">
        <TrueExp />
      </section>

      <section id="sobre">
        <Sobre />
      </section>

      <section id="contato">
        <Contato />
      </section>
    </div>
  );
}
export default Home;
