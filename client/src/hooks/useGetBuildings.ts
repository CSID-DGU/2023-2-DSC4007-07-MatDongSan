import { useQuery } from '@tanstack/react-query';

import { mock1 } from './mock';

import { getpublicApi } from '@/apis/publicApi';

interface BuildingsType {
  address_id: string;
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
  const response = await getpublicApi<BuildingsType[]>(
    `/buildings?leftBottomLon=${leftBottomLon}&leftBottomLat=${leftBottomLat}&rightTopLon=${rightTopLon}&rightTopLat=${rightTopLat}`,
  );

  return response.data;
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
  const { data = mock1 } = useQuery(['buildings'], () =>
    getBuildings(leftBottomLon, leftBottomLat, rightTopLon, rightTopLat),
  );

  return { data };
};
