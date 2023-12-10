import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  isRight: boolean;
}

export const Container = styled.button`
  width: 22px;
  height: 49px;

  box-shadow: rgba(0, 0, 0, 0.1) 3px 5px 5px;
  border: 0px;
  border-radius: 0px 5px 5px 0px;
  background-color: #31b851;
`;

export const Icon = styled.svg<Props>`
  ${({ isRight }) => {
    return css`
      transform: scale(${isRight ? '1' : '-1'});

      transition: transform 0.2s ease-in-out;
    `;
  }}
`;
