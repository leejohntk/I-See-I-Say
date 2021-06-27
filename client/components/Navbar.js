import React from 'react';
import { Logo, Title, TitleWrapper } from './style/StyledComponents';

const Navbar = () => (
  <React.Fragment>
    <Logo>
      <i>👁</i>
      <i>🙈</i> <i>👁</i>
      <i>🙊</i>
    </Logo>
    <TitleWrapper>
      <Title>Take a pic and I'll tell you what I see with a translation!</Title>
    </TitleWrapper>
  </React.Fragment>
);

export default Navbar;
