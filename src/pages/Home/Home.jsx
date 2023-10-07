import Adventure from '../../components/Adventure/Adventure';
import Benefits from '../../components/Benefits/Benefits';
import Hero from '../../components/Hero/Hero';
import Container from './Home.styled';

const HomePage = () => {
  return (
    <Container>
      <Hero />
      <Benefits />
      <Adventure />
    </Container>
  );
};

export default HomePage;
