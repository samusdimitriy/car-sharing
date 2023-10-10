import Hero from "component/Hero/Hero";
import CarsInStock from "component/CarsInStock/CarsInStock";
import About from "component/About/About";
import Section from "component/kit/Section/Section";

const Home = () => {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section title="Cars in stock">
        <CarsInStock />
      </Section>
      <Section title="About us">
        <About />
      </Section>
    </>
  );
};

export default Home;
