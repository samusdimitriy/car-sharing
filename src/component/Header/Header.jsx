import Navigation from 'component/Navigation/Navigation';
import LogoIcon from 'images/icons/LogoIcon';
import { Container, DataLink, DataList, HeaderLogo } from './Header.styled';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'Favorites', href: '/favorites' },
];

const Header = () => {
  return (
    <Container>
      <div className="header__container">
        <HeaderLogo to="/" className="header__logo">
          <LogoIcon />
        </HeaderLogo>
        <Navigation navLinks={navLinks} />
        <DataList>
          <li>
            <p className="addition-data__text">Contact us:</p>
          </li>
          <li>
            <DataLink href="tel:+380730000000">+380 73 000 00 00</DataLink>
          </li>
        </DataList>
      </div>
    </Container>
  );
};

export default Header;
