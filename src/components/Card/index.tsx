import React from 'react';
import { useHistory } from 'react-router-dom';
import { Workout } from '../../types/workout';

import * as S from './style';

type CardProps = {
  card: Workout;
};

const Card = ({ card }: CardProps) => {
  const history = useHistory();

  const handleClick = (id: string): void => {
    history.push(`/workout/${id}`);
  };

  return (
    <S.CardContainer
      thumbnail={card.thumbnail}
      onClick={() => {
        handleClick(card.id);
      }}
    >
      <S.CardLevel>{card.levelTag}</S.CardLevel>
      <S.CardImpactLevel>{card.impactTag} impact</S.CardImpactLevel>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </S.CardContainer>
  );
};

export default Card;
