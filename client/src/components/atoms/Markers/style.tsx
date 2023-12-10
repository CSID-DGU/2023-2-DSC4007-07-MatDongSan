import styled from '@emotion/styled';

export const Container = styled.button`
  position: relative;
  display: flex;
  align-items: center;

  color: rgb(25, 31, 40);
  font-size: 10px;
  text-align: left;

  border: 1px solid rgb(232, 76, 185);
  background-color: white;
  border-radius: 50px;
  box-shadow: rgba(128, 53, 112, 0.3) 0px 6px 16px;

  pointer-events: all;
  &:hover {
    background-color: rgb(232, 76, 185);
    color: #fff;
  }

  &:hover > div {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  margin: 5px;

  border-radius: 50px;
`;
