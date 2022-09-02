import React from 'react';

import * as S from './styles';

import cg from '../../assets/images/cg-black.svg';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderLogoContainer>
        <img src={cg} alt='Logo' />
      </S.HeaderLogoContainer>
    </S.HeaderContainer>
  );
};

export default Header;

// https://s3.amazonaws.com/cgcdn/global-ui/images/logos/campgladiator/full-color-black.svg
