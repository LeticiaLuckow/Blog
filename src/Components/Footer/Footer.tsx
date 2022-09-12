import { FooterBoxDiv, SpanSubtitle, SpanTitle } from './styles';
import { StyledIcon } from '@styled-icons/styled-icon';

type FooterType = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  link: string;
};

const Footer = ({ icon, title, subtitle, link }: FooterType) => {
  return (
    <FooterBoxDiv href={link} target="_blank">
      <>
        {' '}
        {icon}
        <SpanTitle>{title}</SpanTitle>
        <SpanSubtitle>{subtitle}</SpanSubtitle>
      </>
    </FooterBoxDiv>
  );
};

export default Footer;
