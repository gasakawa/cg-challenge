import React from 'react';

import Card from '../Card';

import * as S from './styles';
import workouts from '../../api/workout.json';

const WorkoutList = () => {
  return (
    <S.WorkoutListContainer>
      {workouts.map(work => (
        <Card card={work} />
      ))}
    </S.WorkoutListContainer>
  );
};

export default WorkoutList;
