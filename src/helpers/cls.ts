const cls = (...classNames: (string | boolean)[]) => classNames.filter((className) => className).join(' ');

export default cls;
