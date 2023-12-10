// import { useState } from 'react';
// import { DIRECTION } from '@/constants';
import { combineText } from '@/utils/combineText';

import { Header } from '@/components/molecules/Header';
import { PriceChart } from '@/components/molecules/PriceChart';
import { RadarChart } from '@/components/molecules/RadarChart';

import * as Style from './style';

interface Props {
  building: {
    address_id: string;
    sido: string;
    sigungu: string;
    eupmyeondong: string;
    slope_avg: number;
    slope_max: number;
    deposit: number;
    slope_min: number;
    building_name: string;
    shape: string;
    construction_year: string;
    rent_type: string;
    rent: number;
  };
}

export const SideBar = ({ building }: Props) => {
  // const [isShow, setIsShow] = useState(true);

  // const direction = isShow ? DIRECTION.LEFT : DIRECTION.RIGHT;

  // function handleShow() {
  //   setIsShow(!isShow);
  // }

  return (
    <Style.Container isShow={true}>
      <Style.Wrapper>
        <Header
          building_name={building.building_name}
          address={`${building.sido} ${building.sigungu} ${building.eupmyeondong}`}
          year={building.construction_year}
          slope_avg={14.2738}
          slope_max={80.5261}
        />
        <PriceChart
          type={building.rent_type}
          price={combineText(building.rent_type, building.deposit, building.rent)}
        />
        {/* <Style.ButtonBox>
          <ArrowButton direction={direction} onClick={handleShow} />
  </Style.ButtonBox>*/}
        <RadarChart />
      </Style.Wrapper>
    </Style.Container>
  );
};
