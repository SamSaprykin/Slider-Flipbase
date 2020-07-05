import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GatsbyLocation } from "local-types";
import { Link } from "gatsby";
import Header, { HeaderProps } from "./Header";

import "../../styles/global.css";

import { rhythm } from "../../utils/typography";
import { device, colors } from "../../styles/constants";


interface LayoutProps {
  location?: GatsbyLocation;
  title?: string;
  headerProps?: HeaderProps;
  preivousPath?: string;
  nextPath?: string;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  preivousPath,
  nextPath,
  headerProps,
  location,
}): React.ReactElement => {
  const resizeHeaderOnScroll = (): void => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const shrinkOn = 75;

    const headerEl = document.getElementById("header-root");

    if (headerEl) {
      if (distanceY > shrinkOn) {
        headerEl.classList.add("smaller");
      } else {
        headerEl.classList.remove("smaller");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll);

    return () => window.removeEventListener("scroll", resizeHeaderOnScroll);
  });

  return (
      <ThemeProvider theme={{ colors, device }}>
        <Root>
          <Header location={location} {...headerProps} />
          {nextPath && (
              <ButtonNext to={nextPath} state={{ prevPath: location.pathname }}>Next</ButtonNext>
          )}
          {preivousPath && (
              <ButtonPrevious to={preivousPath} state={{ prevPath: location.pathname }}>Previous</ButtonPrevious>
          )}
          <Main>{children}</Main>
        </Root>
      </ThemeProvider>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  background: #fafafa;
  padding: ${rhythm(3 / 4 + 3)} ${rhythm(3 / 4)} ${rhythm(3 / 4)};

  @media ${device.tablet} {
    padding: ${rhythm(4.5)} ${rhythm(3 / 4)} ${rhythm(1.5)};
  }
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: ${rhythm(42)};
  height: calc(100% - 30px - ${rhythm(1.5)});
  flex: 1 0 auto;
  width: 100%;
`;

const ButtonNext = styled(Link)`
    margin-right: ${rhythm(1 / 2)};
    position: absolute;
    right:0;
`
const ButtonPrevious = styled(Link)`
    margin-right: ${rhythm(1 / 2)};
    position: absolute;
    left:0;
`

export default Layout;
