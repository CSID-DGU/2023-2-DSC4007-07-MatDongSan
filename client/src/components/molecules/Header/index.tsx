import { calcSlope } from '@/utils/calcSlope';

import * as Style from './style';

interface Props {
  building_name: string;
  address: string;
  year: string;
  slope_avg: number;
  slope_max: number;
}
export const Header = ({ building_name, address, year, slope_avg, slope_max }: Props) => {
  return (
    <Style.Container>
      <Style.Title>{building_name}</Style.Title>
      <Style.Sub>{address}</Style.Sub>
      <div>
        <Style.Year>{`${year}년 건설`}</Style.Year>
        <Style.Slope>{calcSlope(slope_avg, slope_max)}</Style.Slope>
      </div>
    </Style.Container>
  );
};
