import type { NextPage } from 'next';
import Contact from '../Components/Contact/Contact';

import Header from '../Components/Header/Header';
import Post from '../Components/Post/Post';
import Title from '../Components/Title/Title';

const Home: NextPage = () => {
  return (
    <div>
      <Header showMenu />
      <Title texto="Lv Blog" />
      <div style={{ display: 'flex', justifyContent: 'center' }} id="posts">
        <Post
          date="01/01/2022"
          description="Lorem ipsum dolor sit amet. Vel omnis ipsa sit possimus commodi
              vel aspernatur consequatur ut numquam iure cum unde esse. Et
              quibusdam doloremque aut commodi consequuntur et doloremque enim.
              Aut eligendi magni et sunt facilis qui doloremque commodi et saepe
              Quis eum recusandae consequatur!"
          img="https://cdn.shopify.com/s/files/1/0056/1952/files/21-bourbon-on-guitar-1180x1480_600x600.jpg?v=1646331096"
          link=""
          title="Não é um Lorem Ipsum, mas seu Lorem Ipsum!"
        />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
