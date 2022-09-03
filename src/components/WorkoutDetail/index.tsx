import React, { useEffect, useState } from 'react';

import * as S from './styles';

import workouts from '../../api/workout.json';
import { Workout } from '../../types/workout';
import { Link } from 'react-router-dom';

type WorkoutDetailProps = {
  id: string;
};
const WorkoutDetail = ({ id }: WorkoutDetailProps) => {
  const [workout, setWorkout] = useState<Workout>(() => ({
    description: '',
    thumbnail: '',
    levelTag: '',
    media: '',
    title: '',
    impactTag: '',
    id: '',
    trainerId: '',
    duration: 0,
  }));

  useEffect(() => {
    const findWorkout = workouts.find(work => work.id === id) as Workout;
    if (findWorkout) {
      setWorkout(findWorkout);
    }
  }, [id]);

  return (
    <S.WorkoutDetailContainer>
      <S.WorkoutDetailInfo>
        <h1>{workout.title}</h1>
        <h3>{workout.description}</h3>
        <S.WorkoutDetailLevel>
          <span>{workout.levelTag}</span>
          <span>{workout.impactTag} impact</span>
          <span>duration: {workout.duration}</span>
        </S.WorkoutDetailLevel>
      </S.WorkoutDetailInfo>
      <S.WorkoutDetailVideo>
        <video autoPlay>
          <source src={workout.media} type='video/mp4' />
        </video>
      </S.WorkoutDetailVideo>
      <S.WorkoutDetailFooter>
        <Link to='/'>
          <span>&larr; Back to list</span>
        </Link>
      </S.WorkoutDetailFooter>
    </S.WorkoutDetailContainer>
  );
};

export default WorkoutDetail;
