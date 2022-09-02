import React, { useEffect, useState } from 'react';

import workouts from '../../api/workout.json';

type WorkoutDetailProps = {
  id: string;
};
const WorkoutDetail = ({ id }: WorkoutDetailProps) => {
  const [workout, setWorkout] = useState({});

  useEffect(() => {
    const findWorkout = workouts.find(work => work.id === id);
    if (findWorkout) {
      setWorkout(findWorkout);
    }
  }, [id]);

  return <div>{JSON.stringify(workout)}</div>;
};

export default WorkoutDetail;
