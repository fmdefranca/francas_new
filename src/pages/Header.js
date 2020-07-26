import React from "react";
import styled from "styled-components";

import WatchLaterIcon from "@material-ui/icons/WatchLater";

const HeaderContainer = styled.header`
  /* background-color: lightgrey; */
`;

const Flex = styled.div`
  display: flex;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

function Header() {
  return (
    <header>
      <FlexColumn>
        <Flex>
          <div>Logo</div>
          <Flex>Times</Flex>
        </Flex>
        <FlexColumn>
          <FlexColumn>
            <FlexColumn>
              <div>one</div>
              <div>two</div>
              <div>three</div>
            </FlexColumn>
          </FlexColumn>
        </FlexColumn>
      </FlexColumn>
    </header>
  );
}

export default Header;
