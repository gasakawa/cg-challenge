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
      rgba(200, 16, 46, 0.4) 35%,
      rgba(51, 51, 51, 0.3) 60%
    ),
    url(${props => props.thumbnail}) no-repeat left top;
  background-size: cover;

  border-radius: 10px;
  padding: var(--padding-default);
  margin: var(--margin-default);
  height: 400px;
  background-color: #333;
  position: relative;

  @media (max-width: 400px) {
    height: 300px;
  }

  &:hover {
    cursor: pointer;
  }

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

export const CardLevel = styled.span`
  position: absolute;
  top: 10px;
  background: #fff;
  padding: 5px;
  font-size: 0.8rem;
  color: var(--color-primary);
  font-weight: 500;

  &:after {
    background: #fff;
    -webkit-transform: skew(-25deg);
    -ms-transform: skew(-25deg);
    transform: skew(-25deg);
    content: '';
    width: 10px;
    position: absolute;
    top: 0;
    bottom: 0;
  }
`;

export const CardImpactLevel = styled.span`
  position: absolute;
  bottom: 10px;
  background: #fff;
  padding: 5px;
  font-size: 0.8rem;
  color: var(--color-primary);
  font-weight: 500;

  &:after {
    background: #fff;
    -webkit-transform: skew(-25deg);
    -ms-transform: skew(-25deg);
    transform: skew(-25deg);
    content: '';
    width: 10px;
    position: absolute;
    top: 0;
    bottom: 0;
  }
`;
