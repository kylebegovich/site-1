import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

type PropTypes = {
  to: string;
  children: ReactNode;
  color?: string;
  highlightEnabled?: boolean;
  highlightColor?: string;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
};

const HighlightedLink = ({ to, children, color = 'white', highlightEnabled = true,
  highlightColor = '#EE6C72', className, style, ...props }: PropTypes): JSX.Element => (
    <NavLink
      className={clsx(styles.highlightedLink, className)}
      to={to}
      style={{ color, ...style }}
      {...props}
      activeClassName={clsx(highlightEnabled && styles.active)}
      exact
    >
      {children}
      <div className={styles.highlight} style={{ backgroundColor: highlightColor }} />
    </NavLink>
);

export default HighlightedLink;
