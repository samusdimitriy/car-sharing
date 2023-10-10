import styled from 'styled-components';
import CarCard from 'component/CarCard/CarCard';

const StyledAdvertsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  justify-items: center;
  gap: 28px;
`;

const NoContentMessage = styled.p`
  text-align: center;
  font-size: larger;
  font-weight: bolder;
`;

const AdvertsList = ({ list = [] }) => {
  return (
    <>
      {list.length ? (
        <StyledAdvertsList>
          {list.map(item => (
            <CarCard key={`${item.make}_${Math.random(1)}`} car={item} />
          ))}
        </StyledAdvertsList>
      ) : (
        <NoContentMessage>
          Sorry, there are no cars with this request in stock...
        </NoContentMessage>
      )}
    </>
  );
};

export default AdvertsList;
