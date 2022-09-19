import styled from 'styled-components';

const PostImg = styled.img`
  width: auto;
  height: auto;
  max-height: 400px;
  max-width: 350px;
`;

const PostDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 48px;
`;

const OutsideDiv = styled.div`
  width: 600px;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;
const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  margin-bottom: 30px;
  width: 100%;
`;

const FormText = styled.textarea`
  margin-bottom: 30px;
`;
export { PostImg, PostDiv, OutsideDiv, FormDiv, FormInput, FormText };
