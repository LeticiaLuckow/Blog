import type { NextPage } from 'next';
import Contact from '../Components/Contact/Contact';
import Header from '../Components/Header/Header';
import Post from '../Components/Post/Post';
import Title from '../Components/Title/Title';
import axios from 'axios';
import { PostType } from '../Types/post';
import { TITLES } from '../mocks/titles';

type HomeType = {
  posts: PostType[];
};

const Home: NextPage<HomeType> = ({ posts }) => {
  return (
    <div>
      <Header showMenu />
      <Title texto="Lv Blog" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        id="posts"
      >
        {posts.map((post) => (
          <Post
            key={post.id}
            date={post.attributes.DatePost}
            description={post.attributes.ShortDescription}
            img={post.attributes.Image}
            link={`/PostPage/${post.id}`}
            title={post.attributes.Title}
          />
        ))}
      </div>
      <Contact />
    </div>
  );
};

//SSR

Home.getInitialProps = async () => {
  let res = TITLES;

  if (process.env.NODE_ENV === 'development') {
    res = await axios.get('http://localhost:1337/api/titles');
  }
  return { posts: res.data.data };
};

export default Home;
