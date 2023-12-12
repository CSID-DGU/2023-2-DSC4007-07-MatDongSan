import { useQuery } from '@tanstack/react-query';

import { priceMock } from './yearPrice';

import { getpublicApi } from '@/apis/publicApi';

interface BuildingType {
  date: string;
  rent_type: string;
  deposit: number;
  rent: number;
  address_id: string;
  building_name: string;
}
export const getPrice = async (address_id: string) => {
  const response = await getpublicApi<BuildingType[]>(`map/price`, {
    params: {
      address_id: address_id,
    },
  });

  return response;
};

export const useGetPrice = (address_id: string) => {
  const { data = priceMock } = useQuery(['price', address_id], () => getPrice(address_id));
  console.log(data);
  return { data };
};
