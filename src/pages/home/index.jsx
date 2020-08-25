import React from 'react';

import { useHistory, useLocation } from 'react-router-dom';

function Home() {
  const history = useHistory();
  const location = useLocation();

  console.log({ history });
  console.log({ location });

  return <div className="Home">Hello World Home</div>;
}

export default Home;
