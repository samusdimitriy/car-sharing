import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.section`
  margin: auto;
  padding: 26px 0;
  max-width: 1184px;
  background-color: var(--bgColor);

  & h2 {
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    margin: 0;
  }
`;

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      {title && <h2>{title}</h2>}
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
