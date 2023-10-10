import * as Style from './style';

interface Props {
  text: string;
  distance: string;
}
export const RoundIcon = ({ text, distance }: Props) => {
  return (
    <Style.Container>
      <Style.Tooltip>
        <p>{text}</p>
        <p>{distance}</p>
      </Style.Tooltip>
    </Style.Container>
  );
};
