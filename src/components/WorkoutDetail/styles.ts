import styled from 'styled-components';

export const WorkoutDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const WorkoutDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--margin-md);

  h1 {
    font-size: var(--font-lg);
    margin-bottom: var(--margin-default);
  }

  h3 {
    font-size: var(--font-sm);
    margin-bottom: var(--margin-sm);
  }
`;

export const WorkoutDetailVideo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WorkoutDetailLevel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    background: #c8102e;
    color: #fff;
    font-weight: 700;
    font-size: var(--font-xs);
    padding: var(--padding-sm);
    margin-top: var(--margin-sm);

    & + span {
      margin-left: var(--margin-sm);
    }
  }
`;

export const WorkoutDetailFooter = styled.section`
  display: flex;
  margin: var(--margin-md) var(--margin-lg);
  font-size: var(--font-xs);
  color: var(--color-text);
  font-weight: 500;

  a {
    text-decoration: none;
    color: var(--color-text);
  }
`;
