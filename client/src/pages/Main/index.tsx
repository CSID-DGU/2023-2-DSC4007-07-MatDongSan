import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { SideBar } from '@/components/organisms/SideBar';

import * as Style from './style';

export const Main = () => {
  const [isShow, setIsShow] = useState(true);
  function handleShow() {
    setIsShow(!isShow);
  }

  return (
    <Style.Container>
      <SideBar isShow={isShow} handleShow={handleShow} />
      <Style.MapBox>
        <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: '100%', height: '100%' }}>
          <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
            <div style={{ color: '#000' }}>Hello World!</div>
          </MapMarker>
        </Map>
      </Style.MapBox>
    </Style.Container>
  );
};
