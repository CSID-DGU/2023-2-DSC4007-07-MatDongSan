import { RADAR_ICON_SORUCE, RADAR_ICON_TYPE } from '@/constants';

import * as Style from './style';

interface Props {
  text: string;
  distance: string;
  type: RADAR_ICON_TYPE;
}

export const RadarMarker = ({ text, distance, type }: Props) => {
  return (
    <Style.Container color={RADAR_ICON_SORUCE[type].color} image={RADAR_ICON_SORUCE[type].image}>
      <Style.Tooltip>
        <p>{text}</p>
        <p>{distance}</p>
      </Style.Tooltip>
    </Style.Container>
  );
};
