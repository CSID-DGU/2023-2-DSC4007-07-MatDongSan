import { PropsWithChildren } from 'react';

import { TextField } from './TextField';
import { Tooltip } from './Tooltip';

import * as Style from './style';

interface Props extends PropsWithChildren {
  image: string;
  onClick?: () => void;
}

const MarkerMain = ({ children, image, onClick }: Props) => {
  return (
    <Style.Container onClick={onClick}>
      <Style.Image src={image} />
      {children}
    </Style.Container>
  );
};

export const Marker = Object.assign(MarkerMain, {
  Tooltip: Tooltip,
  TextField: TextField,
});
