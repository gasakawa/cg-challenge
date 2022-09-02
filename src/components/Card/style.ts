import styled from 'styled-components';

type Props = {
  thumbnail: string;
};

export const CardContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
      90deg,
      rgba(235, 21, 21, 0.4) 20%,
      rgba(101, 91, 91, 0.6) 85%
    ),
    url(${props => props.thumbnail}) no-repeat left top;
  background-position: inherit;
  background-repeat: no-repeat;
  background-size: cover;
  width: var(--card-width-sm);
  border-radius: 10px;
  padding: var(--padding-default);
  margin: var(--marging-default);
  height: 500px;
  background-color: #333;

  h3 {
    color: #fff;
    font-size: var(--font-md);
    margin-bottom: var(--marging-default);
  }

  p {
    color: #fff;
    font-size: var(--font-sm);
  }
`;
