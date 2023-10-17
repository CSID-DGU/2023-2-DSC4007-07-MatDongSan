import { DIRECTION } from '@/constants';

import { ArrowButton } from '@/components/atoms/Buttons/ArrowButton';
import { RadarChart } from '@/components/molecules/RadarChart';

import * as Style from './style';

interface Props {
  isShow: boolean;
  handleShow: () => void;
}

export const SideBar = ({ isShow, handleShow }: Props) => {
  const direction = isShow ? DIRECTION.LEFT : DIRECTION.RIGHT;

  return (
    <Style.Container isShow={isShow}>
      <Style.ButtonBox>
        <ArrowButton direction={direction} onClick={handleShow} />
      </Style.ButtonBox>
      <RadarChart />
    </Style.Container>
  );
};
