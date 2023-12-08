import { RADAR_ICON_SORUCE } from '@/constants';

import { Marker } from '@/components/atoms/Markers';

import * as Style from './style';

export const RadarChart = () => {
  return (
    <Style.Outer>
      <Style.Title>{`가까운 편의시설을
찾아봤어요`}</Style.Title>
      <Style.OOuter>
        <Style.Container>
          <Style.Text>9 Km</Style.Text>
          <Style.Wrapper>
            <Style.IconBox top={'30px'} left={'20px'}>
              <Marker image={RADAR_ICON_SORUCE.school.image}>
                <Marker.Tooltip text='휘카페' distance='70m' />
              </Marker>
            </Style.IconBox>
            <Style.IconBox top={'50px'} left={'10px'}>
              <Marker image={RADAR_ICON_SORUCE.subway.image}>
                <Marker.Tooltip text='지하철' distance='30m' />
              </Marker>
            </Style.IconBox>
            <Style.SubText>7 Km</Style.SubText>
            <Style.Box>
              <Style.Center></Style.Center>
            </Style.Box>
          </Style.Wrapper>
        </Style.Container>
      </Style.OOuter>
    </Style.Outer>
  );
};
