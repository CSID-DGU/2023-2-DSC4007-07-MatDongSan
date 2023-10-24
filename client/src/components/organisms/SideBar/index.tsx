import { useState } from 'react';

import { DIRECTION } from '@/constants';

import { ArrowButton } from '@/components/atoms/Buttons/ArrowButton';
import { RadarChart } from '@/components/molecules/RadarChart';

import * as Style from './style';

export const SideBar = () => {
  const [isShow, setIsShow] = useState(true);

  const direction = isShow ? DIRECTION.LEFT : DIRECTION.RIGHT;

  function handleShow() {
    setIsShow(!isShow);
  }
  return (
    <Style.Container isShow={isShow}>
      <Style.ButtonBox>
        <ArrowButton direction={direction} onClick={handleShow} />
      </Style.ButtonBox>
      <RadarChart />
    </Style.Container>
  );
};
