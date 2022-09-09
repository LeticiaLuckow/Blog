import Link from "next/link";
import { DivFlex, DivLogo, MenuDiv, SpanDiv } from "./styles";

const Header = () =>{
  return (

    <DivLogo>
      <p style={{fontSize:"36px", margin: 0}}>Lv B.</p>
    <DivFlex>
      <MenuDiv>
        <SpanDiv>
          <Link href="#sobre">About</Link>
        </SpanDiv>

        <SpanDiv>
          <Link href="#posts">Posts</Link>
        </SpanDiv>

        <SpanDiv>
          <Link href="#contato">Contact</Link>
        </SpanDiv>
      </MenuDiv>
    </DivFlex>
    </DivLogo>
  );




}

export default Header