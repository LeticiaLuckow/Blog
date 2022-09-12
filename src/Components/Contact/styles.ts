import styled from 'styled-components';

const DivInfo = styled.div`
  font-family: sans-serif;
  align-items: flex-start;
  display: flex;

  flex-direction: column;
  font-size: 14px;
  color: white;
`;

const MediaContact = styled.div`
  display: flex;
  color: white;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const ContactDiv = styled.div`
  background: black;
  padding: 32px 48px;
  margin-top: 40px;
`;
export { DivInfo, ContactDiv, MediaContact };
