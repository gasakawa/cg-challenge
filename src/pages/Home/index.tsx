import React from 'react';
import WorkoutList from '../../components/WorkoutList';

import * as S from './styles';

const Home = (): JSX.Element => {
  return (
    <S.HomeContainer>
      <WorkoutList />
    </S.HomeContainer>
  );
};

export default Home;
