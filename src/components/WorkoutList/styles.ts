import styled from 'styled-components';

export const WorkoutListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 10px;

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
