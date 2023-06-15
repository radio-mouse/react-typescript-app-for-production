import { FC } from "react";

import classes from './Heading.module.scss';

const { text } = classes;

const Heading: FC = () => <h1 className={text}>hello <span>world</span></h1>

export default Heading;
