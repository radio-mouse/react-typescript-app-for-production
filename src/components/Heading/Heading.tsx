import { FC } from 'react';

import classes from './module.scss';

const { heading } = classes;

const Heading: FC<{ text: string }> = ({ text }) => (
  <h1 className={heading}>
    hello <span>{text}</span>
  </h1>
);

export default Heading;
