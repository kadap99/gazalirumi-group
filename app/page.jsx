import About from "./component/about";
import Gallery from "./component/gallery";
import Hero from "./component/hero";

export default function Home() {
  return (
    <>
    <section id="home">
      <Hero />
    </section>

    <section id='gallery'>
      <Gallery />
    </section>

    {/* <section id="about">
      <About />
    </section> */}
    </>
  )
}
