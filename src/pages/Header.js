import React from 'react';
import styled from 'styled-components';

import WatchLaterIcon from '@material-ui/icons/WatchLater';

const HeaderContainer = styled.header`
  /* background-color: lightgrey; */
`;

const NavContainer = styled.div`
  display: flex;
  background-color: #54a0ff;
  /* color: #eee; */
  justify-content: space-around;
  padding: 3rem 0;
  > * {
    /* border: 1px solid black; */
  }
`;

const LogoDiv = styled.div`
  img {
    max-width: 8em;
  }
`;

const OpentimesDiv = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1em;

  .times-container {
    background-color: #f5f6fa;
    padding: 1em 2em;
    border-radius: 10px;
    > div {
      margin: 0.5em 0;
    }
  }

  .open-times-head {
    font-size: 0.7em;
  }

  .open-times-main {
    display: flex;
  }
`;

const ContactDiv = styled.div`
  text-align: center;
`;

const Hero = styled.div`
  h1 {
    font-size: 4rem;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        <OpentimesDiv>
          <div class="times-container">
            <div class="open-times-head">
              <span>Open Today</span>
            </div>
            <div class="open-times-main">
              <WatchLaterIcon style={{ fontSize: 40 }} />
              <span>10am to 9pm</span>
            </div>
          </div>
        </OpentimesDiv>
        <LogoDiv>
          <img src="logo.png" alt="Franca's Logo"></img>
        </LogoDiv>
        <ContactDiv>Phone: 01928 744 321</ContactDiv>
      </NavContainer>
      <Hero>
        <h1>Francas FIsh & Chips</h1>
      </Hero>
    </HeaderContainer>
  );
}

export default Header;
