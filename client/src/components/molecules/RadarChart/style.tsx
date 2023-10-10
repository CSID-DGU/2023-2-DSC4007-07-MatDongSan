import styled from '@emotion/styled';

export const Center = styled.div`
  width: 1.125rem;
  height: 1.125rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  position: absolute;
  z-index: 2;

  border-radius: 100%;
  background-color: rgb(54, 204, 104);
  border: 3px solid white;
  box-shadow: rgb(54, 204, 104) 0px 0px 0.5rem;
`;

export const Box = styled.div`
  width: 5rem;
  height: 5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 0;

  background-color: rgba(54, 204, 104, 0.1);
  border-radius: 100%;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 74%;
  padding-bottom: 74%;
  border-radius: 100%;
  border: 1px solid rgba(54, 204, 104, 0.1);
  background-color: rgba(54, 204, 104, 0.05);

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 68%;
    padding-bottom: 68%;
    border-radius: 100%;
    background-color: rgba(54, 204, 104, 0.05);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 90%;
  padding-bottom: 90%;
  border-radius: 100%;
  border: 1px dashed rgb(209, 214, 219);
`;

export const Text = styled.p`
  position: absolute;
  top: 5%;
  right: 9%;
  z-index: 0;
  color: rgb(107, 118, 132);
  font-size: 0.75rem;
`;

export const SubText = styled.p`
  position: absolute;
  top: 4%;
  right: 7%;
  z-index: 0;
  color: rgba(49, 184, 94, 0.7);
  font-size: 0.75rem;
`;
