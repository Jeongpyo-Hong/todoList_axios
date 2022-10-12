import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <LayoutBox>{children}</LayoutBox>;
};

export default Layout;

const LayoutBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
