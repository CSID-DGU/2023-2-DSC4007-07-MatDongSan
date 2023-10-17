import * as Style from './style';

interface Props {
  price: string;
  date: string;
}

export const TextField = ({ price, date }: Props) => {
  return (
    <Style.Container>
      {price}
      <Style.Date>{date}</Style.Date>
    </Style.Container>
  );
};
