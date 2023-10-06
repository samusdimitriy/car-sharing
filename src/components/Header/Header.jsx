// import {
//   Container,
//   HeaderContainer,
//   LogoContainer,
//   StyledBtn,
//   Logo,
//   LogoImgContainer,
//   NavContainer,
//   SNavLink,
//   Catalog,
//   Favorite,
// } from './Header.styled';
// import Logotype from '../../img/rent.png';
// import { useLocation } from 'react-router-dom';
// import { useState } from 'react';
// import ContactForm from '../ContactForm/ContactForm';
// import { StyleSheetManager } from 'styled-components';
// import { useMediaQuery } from '@mui/material';
// import { AiOutlineMenu } from 'react-icons/ai';
// import HeaderMenu from './HeaderMenu';

// const Header = () => {
//   const { pathname } = useLocation();
//   const [isOpen, setIsOpen] = useState(false);
//   const [menuIsOpen, setMenuIsOpen] = useState(false);
//   const isMobile = useMediaQuery('(min-width: 768px)');

//   const handleClose = () => {
//     setIsOpen(false);
//     document.body.style.overflow = 'auto';
//   };
//   const handleOpen = () => {
//     setIsOpen(true);
//     document.body.style.overflow = 'hidden';
//   };
//   const handleMenuClose = () => {
//     setMenuIsOpen(false);
//     document.body.style.overflow = 'auto';
//     const root = document.getElementById('root');
//     root.style.overflow = 'auto';
//   };
//   const handleMenuOpen = () => {
//     setMenuIsOpen(true);
//     document.body.style.overflow = 'hidden';
//     const root = document.getElementById('root');
//     root.style.overflow = 'hidden';
//   };

//   return (
//     <StyleSheetManager shouldForwardProp={prop => !['path'].includes(prop)}>
//       <Container path={pathname}>
//         <HeaderContainer>
//           <LogoContainer to="/">
//             <LogoImgContainer>
//               <img src={Logotype} alt="Logotype" />
//             </LogoImgContainer>
//             <Logo>DriveOn</Logo>
//           </LogoContainer>
//           {pathname === '/' ? (
//             <StyledBtn type="button" onClick={handleOpen}>
//               Contact Us
//             </StyledBtn>
//           ) : isMobile ? (
//             <NavContainer>
//               <SNavLink to={'/catalog'}>
//                 <Catalog size={24} />
//                 Catalog
//               </SNavLink>
//               <SNavLink to={'/favorite'}>
//                 <Favorite size={24} />
//                 Favorite
//               </SNavLink>
//             </NavContainer>
//           ) : (
//             <>
//               <AiOutlineMenu onClick={handleMenuOpen} size={30} />
//             </>
//           )}
//         </HeaderContainer>
//         {isOpen && <ContactForm handleClose={handleClose} />}
//         {menuIsOpen && <HeaderMenu handleClose={handleMenuClose} />}
//       </Container>
//     </StyleSheetManager>
//   );
// };

// export default Header;
