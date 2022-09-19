import Link from 'next/link';
import { DivFlex, DivLogo, MenuDiv, SpanDiv } from './styles';

type HeaderType = {
  showMenu?: boolean;
};
const Header = ({ showMenu = false }: HeaderType) => {
  return (
    <DivLogo>
      <Link href="/">
        <p style={{ fontSize: '36px', margin: 0, cursor: 'pointer' }}>Lv B.</p>
      </Link>
      <DivFlex>
        <MenuDiv>
          {showMenu && (
            <>
              <SpanDiv>
                <Link href="/Admin/AddNew">New Post</Link>
              </SpanDiv>
              <SpanDiv>
                <Link href="/Admin/MenagePosts">Delete Post</Link>
              </SpanDiv>

              <SpanDiv>
                <Link href="#posts">Posts</Link>
              </SpanDiv>
            </>
          )}

          <SpanDiv>
            <Link href="#contato">Contact</Link>
          </SpanDiv>
        </MenuDiv>
      </DivFlex>
    </DivLogo>
  );
};

export default Header;
