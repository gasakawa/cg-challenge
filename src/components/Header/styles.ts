import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
  padding: var(--padding-default);

  img {
    width: 180px;
    height: 80px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 650px;
  margin-left: 150px;

  h1 {
    color: #fff;
    font-size: var(--font-lg);
    font-weight: 700;
  }

  h3 {
    color: #fff;
    font-size: var(--font-md);
    font-weight: 500;
  }
`;
