import React, { useState } from "react";

import { Container, Small, Original } from "./styles";

interface IProps {
  smallSource: string;
  source: string;
}

const LazyImage: React.FC<IProps> = ({ smallSource, source }) => {
  const [loaded, setLoaded] = useState(false);
  async function handleAnimate() {
    setLoaded(true);
  }
  return (
    <Container>
      {/*<Body onLoad={handleAnimate} src={smallSource}></Body>*/}
      {!loaded && <Small src={smallSource}></Small>}
      <Original
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={handleAnimate}
        src={source}
      ></Original>
    </Container>
  );
};

export default LazyImage;
