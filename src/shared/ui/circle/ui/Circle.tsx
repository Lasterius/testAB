import { Props } from '../model/types';
import css from './Circle.module.css';

export const Circle = ({
  text,
  width,
  height,
  bgcolor,
  color,
  fz,
  mr,
}: Props) => {
  return (
    <div
      style={{
        fontSize: fz || 'auto',
        color: color,
        width: width,
        height: height,
        backgroundColor: bgcolor,
        marginRight: mr || '0',
      }}
      className={css.circle}
    >
      {text}
    </div>
  );
};
