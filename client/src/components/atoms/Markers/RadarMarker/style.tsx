import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  color: string;
  image: string;
}
export const Container = styled.div<Props>`
  ${({ color, image }) => {
    return css`
      width: 30px;
      height: 30px;

      position: relative;
      z-index: 9999;

      border-radius: 100%;
      border: 2px solid white;
      background-color: ${color};
      background-image: url(${image});
      background-size: cover;

      color: white;
      font-size: 0.875rem;

      &:hover > div {
        opacity: 1;
      }
    `;
  }}
`;

export const Tooltip = styled.div`
  top: -0.25rem;
  left: 50%;
  padding: 4px 10px;
  transform: translate(-50%, -100%);

  position: absolute;
  opacity: 0;

  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 1px 2px,
    rgba(0, 0, 0, 0.05) 0px 6px 32px;
  border: 1px solid rgb(209, 214, 219);
  background-color: white;
  border-radius: 1rem;

  text-align: center;
  white-space: nowrap;
  color: black;

  transition: all 0.2s ease 0s;
  pointer-events: none;
`;
