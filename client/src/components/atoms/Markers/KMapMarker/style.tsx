import styled from '@emotion/styled';

export const Container = styled.button`
  /* width: 90px; */

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

export const Tooltip = styled.div`
  top: -1.75rem;
  padding: 2px 6px;
  border-radius: 6px;

  position: absolute;
  opacity: 0;

  color: white;
  font-size: 12px;
  font-weight: 700;

  background-color: rgb(232, 76, 185);

  pointer-events: none;
  transform: translateY(4px);
  transition: all 0.2s ease 0s;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  margin: 5px;

  border-radius: 50px;
`;

export const Price = styled.p`
  font-size: 11px;
  font-weight: bold;
`;
