import type { NextPage } from 'next';
import Header from '../Components/Header/Header';
import Post from '../Components/Post/Post';
import Title from '../Components/Title/Title';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Title texto="Lv Blog" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Post />
      </div>
    </div>
  );
};

export default Home;
