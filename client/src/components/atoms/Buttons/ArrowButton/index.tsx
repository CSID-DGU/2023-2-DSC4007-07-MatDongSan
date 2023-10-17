import { HTMLAttributes } from 'react';

import { DIRECTION } from '@/constants';

import * as Style from './style';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  direction: DIRECTION;
}

export const ArrowButton = ({ direction, onClick }: Props) => {
  return (
    <Style.Container onClick={onClick}>
      <Style.Icon
        isRight={direction === DIRECTION.RIGHT}
        width='8'
        height='14'
        viewBox='0 0 8 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M1 0.999999L7 7L1 13' stroke='#fff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </Style.Icon>
    </Style.Container>
  );
};
