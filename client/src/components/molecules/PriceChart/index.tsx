// import { Line } from 'react-chartjs-2';
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

const labels = ['2017', '2018', '2019', '2020', '2021', '2022', '2023'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3, 4, 5, 6, 7],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

interface Props {
  type: string;
  price: string;
}
export const PriceChart = ({ type, price }: Props) => {
  return (
    <Style.Container>
      <Style.Title>추정가</Style.Title>
      <Style.Sub>{`${type} ${price}`}</Style.Sub>
      {/* <Line options={options} data={data} /> */}
    </Style.Container>
  );
};
