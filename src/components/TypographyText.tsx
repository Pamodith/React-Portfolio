// TypographyText.tsx
import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { typographyProp } from '../types/type';

const TypographyText = (props: typographyProp) => {
  return (
    <Link to={`/${props.routename}`} className='link'>
      <div className={props.className}>{props.content}</div>
    </Link>
  );
}

export default TypographyText;
