/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import MaltLogo from 'images/malt.png';
import RBLogo from 'images/rb-logo.png';
import {
  StyledLayout,
  CenterDiv,
  Content,
  Links,
  ResponsiveImg,
  RBLogoImage,
  RBLogoWrapper,
} from './styles';
// Ant Design is pre installed , use included components for faster delivery

export default function HomePage() {
  return (
    <StyledLayout>
      <CenterDiv>
        <Content>
          <ResponsiveImg src={MaltLogo} />
          <Links>
            <a href="https://docs.thebrewery.dev/maltjs/quickstart">Documentation</a>
          </Links>
          <RBLogoWrapper>
            <p>powered by:</p>
            <RBLogoImage src={RBLogo} />
          </RBLogoWrapper>
        </Content>
      </CenterDiv>
    </StyledLayout>
  );
}
