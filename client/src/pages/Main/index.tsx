import { useState } from 'react';
import { CustomOverlayMap, Map, Polygon } from 'react-kakao-maps-sdk';

import { MAP_ICON_SOURCE, MAP_ICON_TYPE } from '@/constants';
import { useGetBuilding } from '@/hooks/useGetBuilding';
import { useGetBuildings } from '@/hooks/useGetBuildings';
import { calcAging } from '@/utils/calcAging';
import { calcSlope } from '@/utils/calcSlope';
import { combineText } from '@/utils/combineText';
import { parsePolygon } from '@/utils/parsePolygon';

import { Marker } from '@/components/atoms/Markers';
import { SideBar } from '@/components/organisms/SideBar';

import * as Style from './style';

export const Main = () => {
  const [state, setState] = useState<any>({
    leftBottomLat: 0,
    leftBottomLon: 0,
    rightTopLat: 0,
    rightTopLon: 0,
  });

  const [addressState, setAddressState] = useState<any>(null);

  function handleCenterChanged(map: any) {
    const { La: leftBottomLat, Ma: leftBottomLon }: any = map.getBounds().getSouthWest();
    const { La: rightTopLat, Ma: rightTopLon }: any = map.getBounds().getNorthEast();
    setState({
      leftBottomLat,
      leftBottomLon,
      rightTopLat,
      rightTopLon,
    });
  }

  function handleAdddress(address: string) {
    setAddressState(address);
  }

  const { data: buildings } = useGetBuildings(state);
  const { data: building } = useGetBuilding(addressState);

  return (
    <Style.Container>
      <SideBar building={building} />
      <Style.MapBox>
        <Map
          center={{ lat: 37.59064170921582, lng: 126.96879769636863 }}
          style={{ width: '100%', height: '100%' }}
          onCenterChanged={handleCenterChanged}
        >
          {buildings.map(({ address_id, shape, lat, lon, construction_year, rent_type, deposit, rent }) => {
            const agingColor = calcAging(construction_year!);

            return (
              <div id={address_id}>
                <CustomOverlayMap position={{ lat: lon, lng: lat }}>
                  <Marker image={MAP_ICON_SOURCE[MAP_ICON_TYPE.HOUSE].image} onClick={() => handleAdddress(address_id)}>
                    <Marker.TextField
                      price={combineText(rent_type, deposit, rent)}
                      date={calcSlope(14.2738, 80.5261)}
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
          })}
        </Map>
      </Style.MapBox>
    </Style.Container>
  );
};
