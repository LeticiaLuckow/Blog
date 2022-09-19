import styled from 'styled-components';

const PostCard = styled.div`
  width: 600px;
  margin-bottom: 42px;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

const TitleP = styled.p`
  display: flex;
  color: #977317;
  justify-content: space-between;
  font-size: 28px;
`;

const PostImg = styled.img`
width: auto;
height: auto;
width: 100%;
}
`;
export { TitleP, PostCard, PostImg };
