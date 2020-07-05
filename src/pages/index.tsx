import React, {useEffect} from "react";
import { animated, config } from "react-spring";
import { GatsbyLocation } from "local-types";

import Home from "../components/Home";
import Layout from "../components/Layout";
import { useSiteMetadata, usePageTransitions } from "../hooks";

interface IndexProps {
  location?: GatsbyLocation;
  preivousPath?: string;
  nextPath?: string;
}

const Index: React.FunctionComponent<IndexProps> = ({
  location,
  nextPath="/second"
}): React.ReactElement => {
  const { title: siteTitle } = useSiteMetadata();
  const isBrowser = typeof window !== `undefined`
  let trasnlatePage;
  
  if(location.state !== null && isBrowser) {
    
    if (location.state.prevPath === '/second') {
      trasnlatePage=-100
    }  else {
      trasnlatePage=100 
    }
  }
  
  const transitions = usePageTransitions({
    translateX: trasnlatePage,
    location,
  });

  return (
    <Layout location={location} title={siteTitle} nextPath={nextPath}>
      {transitions.map(({ props, key }) => (
        <animated.div key={key} style={props}>
          <Home location={location} />
        </animated.div>
      ))}
    </Layout>
  );
};

export default Index;
