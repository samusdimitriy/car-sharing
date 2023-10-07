import styled from 'styled-components';

const AdvertsListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  justify-items: center;
  gap: 28px;
`;

const AdvertCardStyled = styled.p`
  text-align: center;
  font-size: larger;
  font-weight: bolder;
`;

export { AdvertsListStyled, AdvertCardStyled };
