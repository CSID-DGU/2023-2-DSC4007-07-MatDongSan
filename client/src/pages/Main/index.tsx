import { useState } from 'react';
import { CustomOverlayMap, Map, MarkerClusterer, Polygon } from 'react-kakao-maps-sdk';

import { MAP_ICON_SOURCE, MAP_ICON_TYPE } from '@/constants';
import { mock1 } from '@/hooks/mock';
import { useGetBuilding } from '@/hooks/useGetBuilding';
import { useGetPrice } from '@/hooks/useGetPrice';
import { calcAging } from '@/utils/calcAging';
import { calcSlope } from '@/utils/calcSlope';
import { combineText } from '@/utils/combineText';
import { parsePolygon } from '@/utils/parsePolygon';

import { Marker } from '@/components/atoms/Markers';
import { SideBar } from '@/components/organisms/SideBar';

import * as Style from './style';

export const Main = () => {
  const [addressState, setAddressState] = useState<any>(1111010100100040014);

  function handleAdddress(address: string) {
    setAddressState(address);
  }
  const buildings = mock1;
  const { data: building } = useGetBuilding(addressState);
  const { data: price } = useGetPrice(addressState);

  return (
    <Style.Container>
      <SideBar building={building} price={price} />
      <Style.MapBox>
        <Map center={{ lat: 37.57445003663945, lng: 126.97358804955081 }} style={{ width: '100%', height: '100%' }}>
          <MarkerClusterer averageCenter minLevel={2}>
            {buildings.map(
              ({ address_id, shape, lat, lon, construction_year, rent_type, deposit, rent, slope_avg, slope_max }) => {
                const agingColor = calcAging(construction_year!);

                return (
                  <div key={address_id}>
                    <CustomOverlayMap position={{ lat: lon, lng: lat }} yAnchor={1} zIndex={1}>
                      <Marker
                        image={MAP_ICON_SOURCE[MAP_ICON_TYPE.HOUSE].image}
                        onClick={() => handleAdddress(address_id)}
                      >
                        <Marker.TextField
                          price={combineText(rent_type, deposit, rent)}
                          date={calcSlope(slope_avg, slope_max)}
                        />
                      </Marker>
                    </CustomOverlayMap>
                    <Polygon
                      path={parsePolygon(shape)}
                      strokeWeight={3} // 선의 두께입니다
                      strokeColor={agingColor} // 선의 색깔입니다
                      strokeOpacity={0.3}
                      strokeStyle={'longdash'}
                      fillColor={agingColor} // 채우기 색깔입니다
                      fillOpacity={0.7} // 채우기 불투명도 입니다
                    />
                  </div>
                );
              },
            )}
          </MarkerClusterer>
        </Map>
      </Style.MapBox>
    </Style.Container>
  );
};
