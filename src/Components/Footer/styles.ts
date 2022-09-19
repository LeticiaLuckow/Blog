import styled, { keyframes } from 'styled-components';

const FooterBoxDiv = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  text-decoration: none;

  @media only screen and (max-width: 600px) {
    margin-bottom: 12px;
  }
`;
const SpanTitle = styled.span`
  text-decoration: none;
  font-weight: bold;
  margin: 12px 0px;
  color: white;
`;
const SpanSubtitle = styled.span`
  text-decoration: none;
  color: #222222;
  color: white;
`;

export { FooterBoxDiv, SpanTitle, SpanSubtitle };
