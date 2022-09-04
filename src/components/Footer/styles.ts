import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  background-color: var(--bgc-secondary);
  min-height: 100px;
  margin-top: var(--margin-lg);
  padding: var(--padding-default);
  justify-content: center;
  align-items: center;
  color: #fff;

  img {
    width: 32px;
    height: 32px;
  }

  span {
    margin-left: var(--margin-lg);
    font-size: var(--font-xs);
    text-transform: uppercase;
    font-weight: 400;

    @media (max-width: 400px) {
      font-size: 0.6rem;
    }
  }
`;
