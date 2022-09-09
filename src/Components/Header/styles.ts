import styled from 'styled-components';

const DivLogo = styled.div`
  display: flex;
  background: #222222;
  color: white;
  justify-content: space-between;
  padding: 12px 48px`;


const DivFlex = styled.div`
  display: flex;
  justify-content: flex-end;

`;

const MenuDiv = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  color: white;
`;

const SpanDiv = styled.span`
  height: 100%;
  vertical-align: middle;
  display: flex;
  position: relative;
  font-family: 'Uchen', serif;
  a {
    text-decoration: none;
    color: white;
  }

  align-items: center;
  &:hover {
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 1px;
    background: white;
    transition: all 300ms ease-in-out;
  }
`;
export { DivFlex, MenuDiv, SpanDiv, DivLogo };
