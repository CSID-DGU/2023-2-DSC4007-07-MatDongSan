import { RADAR_ICON_SORUCE, RADAR_ICON_TYPE } from '@/constants';

import { Marker } from '@/components/atoms/Markers';
import { RadarMarker } from '@/components/atoms/Markers/RadarMarker';

import * as Style from './style';

export const RadarChart = () => {
  return (
    <Style.Container>
      <Style.Text>9 Km</Style.Text>
      <Style.Wrapper>
        <Style.IconBox top={'30px'} left={'20px'}>
          <Marker image={RADAR_ICON_SORUCE.school.image}>
            <Marker.Tooltip text='휘카페' distance='70m' />
          </Marker>
          {/* <RadarMarker text='학교' distance='70' type={RADAR_ICON_TYPE.SCHOOL} /> */}
        </Style.IconBox>
        <Style.IconBox top={'50px'} left={'10px'}>
          <RadarMarker text='지하철' distance='90' type={RADAR_ICON_TYPE.SUBWAY} />
        </Style.IconBox>
        <Style.SubText>7 Km</Style.SubText>
        <Style.Box>
          <Style.Center></Style.Center>
        </Style.Box>
      </Style.Wrapper>
    </Style.Container>
  );
};
