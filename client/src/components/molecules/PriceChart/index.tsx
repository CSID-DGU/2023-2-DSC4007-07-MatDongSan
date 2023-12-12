import { Line } from 'react-chartjs-2';

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

import { combineText } from '@/utils/combineText';

import * as Style from './style';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

interface Props {
  type: string;
  price: string;
  chartData: any;
}
export const PriceChart = ({ chartData }: Props) => {
  const jeonList = chartData?.filter((item: any) => item.rent_type === '전세');

  const jeonPrice = jeonList.map((item: any) => parseInt(item.deposit));

  const wolseList = chartData?.filter((item: any) => item.rent_type === '월세');
  const wolsePrice = wolseList.map((item: any) => `월세 ${item.deposit}/${item.rent}`);
  const wolseLabel = wolseList.map((item: any) => item.date);

  const labels = jeonList.map((item: any) => item.date);

  const data = {
    labels,
    datasets: [
      {
        label: '전세',
        data: jeonPrice,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <Style.Container>
      {jeonList.length !== 0 && (
        <>
          <Style.Title>전세</Style.Title>
          <Style.Sub>{`전세 ${combineText('전세', jeonPrice[jeonPrice.length - 1], 0)}`}</Style.Sub>
          <Line options={options} data={data} />
        </>
      )}
      {wolseList.length !== 0 && (
        <>
          <Style.Label>월세</Style.Label>
          <Style.List>
            {wolsePrice?.map((item: any, index: number) => (
              <Style.Item>
                <Style.Year>{`${wolseLabel[index]}년`}</Style.Year>
                <Style.Price>{item}</Style.Price>
              </Style.Item>
            ))}
          </Style.List>
        </>
      )}
    </Style.Container>
  );
};
