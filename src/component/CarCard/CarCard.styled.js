import styled from 'styled-components';

export const Card = styled.div`
  display: grid;
  width: 274px;
  height: 426px;
`;

export const ThumbImg = styled.div`
  position: relative;
  margin-bottom: 14px;

  & img {
    width: 100%;
    height: 268px;
    object-fit: cover;
    border-radius: 14px;
  }

  & button {
    position: absolute;
    z-index: 1;
    top: 14px;
    right: 14px;
    padding: 15px;

    & svg {
      stroke: var(--whiteColor);
      transition: stroke 0.5s;
    }

    & svg.favorite {
      fill: var(--accentColor);
      stroke: var(--accentColor);
      transition: stroke 0.5s;
    }

    &:hover,
    &:focus {
      & svg {
        stroke: var(--hoverColor);
      }

      & svg.favorite {
        stroke: var(--whiteColor);
      }
    }
  }
`;

export const ThumbTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
  margin-bottom: 8px;
  color: var(--headingsColor);

  & h3 {
    font-size: var(--headingsFontSize);
    font-weight: 500;
    line-height: 1.33;

    & span {
      color: var(--accentColor);
    }
  }

  & p {
    font-size: var(--standardSize);
    font-weight: 500;
  }
`;

export const Wrapper = styled.div`
  ul {
    height: 40px;
    overflow: hidden;
  }
`;

export const Btn = styled.button`
  margin-top: 28px;
  width: 100%;
`;
