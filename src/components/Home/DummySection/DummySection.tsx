import React from "react";

import styled from "styled-components";



import { rhythm } from "../../../utils/typography";
import { useSiteMetadata } from "../../../hooks";
import { device } from "../../../styles/constants";

const DummySection: React.FunctionComponent<{}> = (): React.ReactElement => {

  return (
    <Root>
      <HeadingContainer>
          <div>
            <h4>Dummy data for first page</h4>
            <p>
              I contribute to the product life cycle with my comprehensive skills in
              web development, my growing knowledge of behavioral sciences and human
              psychology, and my neverending hunger for growth.

              When not building stuff, I love to explore, read fascinating books,
              learn languages, write about my experiences in life, have amazing
              dinners and meet interesting people. I am also obsessed with building
              positive habits. I believe they are the keys to unlock our full
              potential.
            </p>
          </div>
      </HeadingContainer>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    align-items: inherit;
  }
`;

const HeadingContainer = styled.section`
  display: grid;
  grid-template-rows: 150px auto;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: none;
    margin-top: ${rhythm(1.25)};
  }
`;




export default DummySection;
