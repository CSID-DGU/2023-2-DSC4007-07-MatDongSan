import { RoundIcon } from '@/components/atoms/RoundIcon';

import * as Style from './style';

export const RadarChart = () => {
  return (
    <Style.Container>
      <Style.Text>9 Km</Style.Text>
      <Style.Wrapper>
        <RoundIcon text='휘카페' distance='70' />
        <Style.SubText>7 Km</Style.SubText>
        <Style.Box>
          <Style.Center></Style.Center>
        </Style.Box>
      </Style.Wrapper>
    </Style.Container>
  );
};
