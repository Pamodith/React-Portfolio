import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { typographyProp } from '../types/type';



const TypographyText = (props:typographyProp) => {
    
  return (
    <div className={props.className}>{props.content}</div>
  )
}

export default TypographyText