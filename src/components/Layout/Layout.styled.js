import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${props => props.bgColor};

  @supports (overflow: clip) {
    overflow: clip;
  }

  min-height: 100vh;

  & > main {
    flex: 1 1 auto;
  }

  & > * {
    min-width: 0;
  }
`;

export default Wrapper;
