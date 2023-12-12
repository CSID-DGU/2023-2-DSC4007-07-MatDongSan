import { useState } from 'react';
import { CustomOverlayMap, Map, MarkerClusterer, Polygon } from 'react-kakao-maps-sdk';

import { MAP_ICON_SOURCE, MAP_ICON_TYPE } from '@/constants';
import { useGetBuilding } from '@/hooks/useGetBuilding';
import { useGetBuildings } from '@/hooks/useGetBuildings';
import { useGetPrice } from '@/hooks/useGetPrice';
import { calcAging } from '@/utils/calcAging';
import { calcSlope } from '@/utils/calcSlope';
import { combineText } from '@/utils/combineText';
import { parsePolygon } from '@/utils/parsePolygon';

import { Marker } from '@/components/atoms/Markers';
import { SideBar } from '@/components/organisms/SideBar';

import * as Style from './style';

export const Main = () => {
  const [state, setState] = useState<any>({
    leftBottomLat: 126.95198855680806,
    leftBottomLon: 37.54295795260525,
    rightTopLat: 127.04325523896432,
    rightTopLon: 37.575684001127335,
  });

  const [addressState, setAddressState] = useState<any>(1111010100100040014);

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
  const { data: price } = useGetPrice(addressState);

  return (
    <Style.Container>
      <SideBar building={building} price={price} />
      <Style.MapBox>
        <Map
          center={{ lat: 37.57445003663945, lng: 126.97358804955081 }}
          style={{ width: '100%', height: '100%' }}
          onDragEnd={handleCenterChanged}
          onZoomChanged={handleCenterChanged}
        >
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
