import React from 'react';
import { useParams } from 'react-router-dom';
import WorkoutDetail from '../../components/WorkoutDetail';

type Params = {
  id: string;
};

const Workout = () => {
  const params = useParams<Params>();
  return (
    <div>
      <WorkoutDetail id={params.id} />
    </div>
  );
};

export default Workout;
