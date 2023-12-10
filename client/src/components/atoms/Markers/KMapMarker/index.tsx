import { MAP_ICON_SOURCE, MAP_ICON_TYPE } from '@/constants';

import * as Style from './style';

interface Props {
  price: string;
  type: MAP_ICON_TYPE;
}
export const KMapMarker = ({ price, type }: Props) => {
  return (
    <Style.Container>
      <Style.Tooltip>
        <p>{MAP_ICON_SOURCE[type].text}</p>
      </Style.Tooltip>

      <Style.Image src={MAP_ICON_SOURCE[type].image} />
      <Style.Price>{price}</Style.Price>
    </Style.Container>
  );
};
