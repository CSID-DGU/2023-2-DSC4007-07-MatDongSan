import { useQuery } from '@tanstack/react-query';

import { mock2 } from './mock';

import { getpublicApi } from '@/apis/publicApi';

interface BuildingType {
  address_id: string;
  sido: string;
  sigungu: string;
  eupmyeondong: string;
  slope_avg: number;
  slope_max: number;
  slope_min: number;
  building_name: string;
  shape: string;
  construction_year: string;
  rent_type: string;
  deposit: number;
  rent: number;
}
export const getBuilding = async (address_id: string) => {
  const response = await getpublicApi<BuildingType>(`/buildings/address_id=${address_id}`);

  return response.data;
};

export const useGetBuilding = (address_id: string) => {
  const { data = mock2 } = useQuery(['building'], () => getBuilding(address_id));
  console.log(data);
  return { data };
};
