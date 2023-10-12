import styled from 'styled-components';

export const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  justify-items: center;
  gap: 28px;
`;

export const Message = styled.p`
  text-align: center;
  font-size: larger;
  font-weight: bolder;
`;
