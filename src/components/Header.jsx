import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBox>
      <div>
        <div>MY TODO LIST</div>
      </div>
      <div>React</div>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.div`
  background: navy;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
`;
