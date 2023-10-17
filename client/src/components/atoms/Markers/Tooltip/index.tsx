import * as Style from './style';

interface Props {
  text: string;
  distance?: string;
}

export const Tooltip = ({ text, distance }: Props) => {
  return (
    <Style.Container>
      <p>{text}</p>
      {distance && <p>{distance}</p>}
    </Style.Container>
  );
};
