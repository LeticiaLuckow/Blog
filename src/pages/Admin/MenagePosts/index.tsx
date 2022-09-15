import axios from 'axios';
import type { NextPage } from 'next';
import Contact from '../../../Components/Contact/Contact';
import Header from '../../../Components/Header/Header';
import Title from '../../../Components/Title/Title';
import { PostType } from '../../../Types/post';
import { useEffect, useState } from 'react';
import { TablePost, TdPost, ThPost } from './styles';

const MenagePosts: NextPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    axios.get('http://localhost:1337/api/titles').then((response) => {
      console.log(response.data.data);
      setPosts(response.data.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <Title texto="Menage Posts" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TablePost>
          <thead>
            <tr>
              <ThPost style={{ width: '2%' }}>ID</ThPost>
              <ThPost style={{ width: '70%' }}>Title</ThPost>
              <ThPost style={{ width: '2%' }}>Actions</ThPost>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr>
                <TdPost>{post.id}</TdPost>
                <TdPost>{post.attributes.Title}</TdPost>
                <TdPost>
                  <button>x</button>
                </TdPost>
              </tr>
            ))}
          </tbody>
        </TablePost>
      </div>
      <Contact />
    </div>
  );
};

export default MenagePosts;
