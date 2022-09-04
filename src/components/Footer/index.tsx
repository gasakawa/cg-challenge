import React from 'react';

import * as S from './styles';

import iconWhite from '../../assets/images/icon-white.svg';

const Footer = () => {
  return (
    <S.FooterContainer>
      <img src={iconWhite} alt='Camp Gladiator Icon' />
      <span>© - camp gladiator. all rights reserved.</span>
    </S.FooterContainer>
  );
};

export default Footer;
