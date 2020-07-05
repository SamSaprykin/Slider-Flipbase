import React from "react";
import styled from "styled-components";


import { SiteSiteMetadataAuthor } from "graphql-types";
import { rhythm } from "../../utils/typography";



interface ThirdProps {
  author: SiteSiteMetadataAuthor;
}

const Third: React.FunctionComponent<ThirdProps> = ({
  
}): React.ReactElement => {


  return (
    <Root>

      <Description>
        <h4>Dummy data for second page</h4>
       

        <p>
          I contribute to the product life cycle with my comprehensive skills in
          web development, my growing knowledge of behavioral sciences and human
          psychology, and my neverending hunger for growth.
        </p>

        <p>
          When not building stuff, I love to explore, read fascinating books,
          learn languages, write about my experiences in life, have amazing
          dinners and meet interesting people. I am also obsessed with building
          positive habits. I believe they are the keys to unlock our full
          potential.
        </p>

        
      </Description>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-gap: ${rhythm(2)};
  margin-top: ${rhythm(0.5)};

  
`;



const Description = styled.section`
  h4 {
    margin-top: ${rhythm(0.5)};
  }
`;

export default Third;
