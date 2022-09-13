import { Whatsapp } from '@styled-icons/bootstrap';
import { Mail } from '@styled-icons/material-outlined';
import { Linkedin } from 'styled-icons/bootstrap';
import { Github } from 'styled-icons/bootstrap';
import Footer from '../Footer/Footer';
import { ContactDiv, DivInfo, MediaContact } from './styles';

const Contact = () => {
  return (
    <ContactDiv>
      <DivInfo id="contato">
        <h1
          style={{ textAlign: 'center', width: '100%', marginBottom: '60px' }}
        >
          Contact
        </h1>
        <MediaContact>
          <Footer
            icon={
              <Whatsapp
                width={30}
                style={{ marginRight: '8px', color: 'white' }}
              />
            }
            title="Whatsapp"
            subtitle="(41) 9 9944-4862"
            link="https://wa.me/5541999444862"
          />
          <Footer
            icon={
              <Mail width={30} style={{ marginRight: '8px', color: 'white' }} />
            }
            title="E-mail"
            subtitle="leticia.villasboas99@gmail.com"
            link="https://mail.google.com/mail/u/0/#inbox?compose=new"
          />
          <Footer
            icon={
              <Linkedin
                width={30}
                style={{ marginRight: '8px', color: 'white' }}
              />
            }
            title="Linkedin"
            subtitle="leticia-luckow"
            link="https://www.linkedin.com/in/leticia-luckow/"
          />
          <Footer
            icon={
              <Github
                width={30}
                style={{ marginRight: '8px', color: 'white' }}
              />
            }
            title="Github"
            subtitle="LeticiaLuckow"
            link="https://github.com/LeticiaLuckow"
          />
        </MediaContact>
      </DivInfo>
    </ContactDiv>
  );
};

export default Contact;
