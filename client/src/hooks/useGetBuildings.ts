import { useQuery } from '@tanstack/react-query';

import { getpublicApi } from '@/apis/publicApi';

interface BuildingsType {
  address_id: string;
  building_name: string;
  slope_avg: number;
  slope_max: number;
  slope_min: number;
  shape: string;
  lat: number;
  lon: number;
  construction_year: string;
  rent_type: string;
  deposit: number;
  rent: number;
}
export const getBuildings = async (
  leftBottomLon: number,
  leftBottomLat: number,
  rightTopLon: number,
  rightTopLat: number,
) => {
  const response = await getpublicApi<BuildingsType[]>(`/map`, {
    params: {
      leftBottomLon: leftBottomLon,
      leftBottomLat: leftBottomLat,
      rightTopLon: rightTopLon,
      rightTopLat: rightTopLat,
    },
  });

  return response;
};

export const useGetBuildings = ({
  leftBottomLon,
  leftBottomLat,
  rightTopLon,
  rightTopLat,
}: {
  leftBottomLon: number;
  leftBottomLat: number;
  rightTopLon: number;
  rightTopLat: number;
}) => {
  const { data = [] } = useQuery(['buildings', leftBottomLon, leftBottomLat, rightTopLon, rightTopLat], () =>
    getBuildings(leftBottomLon, leftBottomLat, rightTopLon, rightTopLat),
  );

  return { data };
};
