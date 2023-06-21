import { FC } from 'react';
import { Link } from 'react-router-dom';

import Heading from 'components/Heading';

const Home: FC = () => (
  <>
    <Link to="/test">test</Link>
    <Heading text="Home" />
  </>
);

export default Home;
