import styled from 'styled-components';

const TextDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const TitleText = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 54px;
  position: relative;
  padding-bottom: 12px;
  width: fit-content;
  text-align: center;
  max-width: 80%;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 90%;
    background: black;
  }
`;

export { TitleText, TextDiv };
