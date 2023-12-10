import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 196px;
  padding-left: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;
`;

export const Title = styled.p`
  padding: 15px 0;

  font-size: 25px;
  font-weight: 700;
`;

export const Sub = styled.p`
  padding: 3px 0;

  color: #8b95a1;
  font-size: 18px;
  font-weight: 700;
`;

export const Year = styled.span`
  width: 65px;
  height: 20px;
  margin-right: 10px;
  margin-top: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  border-radius: 4px;
  color: rgb(233, 155, 48);
  background-color: rgb(255, 237, 211);
`;

export const Slope = styled.span`
  width: 55px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  border-radius: 4px;
  color: rgb(124, 66, 248);
  background-color: rgb(233, 223, 255);
`;
