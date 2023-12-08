import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { mq } from '@/styles/media';

interface Props {
  isShow: boolean;
}

export const Container = styled.div<Props>`
  ${({ isShow }) => {
    return css`
      height: 100%;

      position: relative;
      z-index: 2;

      background-color: #e5e5e5;

      ${mq({
        width: ['100%', isShow ? '400px' : '0px'],
      })}

      transition: width 0.5s ease;
    `;
  }}
`;

export const Wrapper = styled.div`
  height: 100%;
  overflow: scroll;
`;

export const ButtonBox = styled.div`
  top: 50%;
  left: 100%;

  position: absolute;
  z-index: 10;
  transform: translate(0, -50%);
`;
