import { Link } from 'react-router-dom';
import { typographyProp } from '../types/type';

const TypographyText = (props: typographyProp) => {
  if (props.routename){
    return(<Link to={`/${props.routename}`} className='link' >
      <div className={props.className}>{props.content}</div>
    </Link>)
    
  }
  return (
    <div className={props.className}>{props.content}</div>
  );
}

export default TypographyText;
