import styled from '@emotion/styled';

export const Container = styled.div`
  top: -1.75rem;
  /* left: 4px; */
  padding: 2px 6px;
  border-radius: 6px;

  position: absolute;
  opacity: 0;

  color: white;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  text-align: center;

  background-color: rgb(232, 76, 185);

  pointer-events: none;
  transform: translateY(4px);
  transition: all 0.2s ease 0s;
`;
