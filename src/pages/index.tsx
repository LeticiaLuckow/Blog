import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Contact from '../Components/Contact/Contact';
import Header from '../Components/Header/Header';
import Post from '../Components/Post/Post';
import Title from '../Components/Title/Title';
import axios from 'axios';
import { PostType } from '../Types/post';

const Home: NextPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    axios.get('http://localhost:1337/api/titles').then((response) => {
      console.log(response.data.data);
      setPosts(response.data.data);
    });
  }, []);
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
            date={post.attributes.DatePost}
            description={post.attributes.ShortDescription}
            img={post.attributes.Image}
            link=""
            title={post.attributes.Title}
          />
        ))}
      </div>
      <Contact />
    </div>
  );
};

export default Home;
