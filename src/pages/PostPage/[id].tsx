import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Contact from '../../Components/Contact/Contact';
import Header from '../../Components/Header/Header';
import Title from '../../Components/Title/Title';
import { PostDiv, PostImgTwo, PostP } from '../../styles/PostPage';
import axios from 'axios';
import { PostType } from '../../Types/post';

const PostPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState<PostType>();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:1337/api/titles/${id}`).then((response) => {
        console.log(response.data.data);
        setPost(response.data.data);
      });
    }
  }, [id]);

  return (
    <div>
      <Header />
      <div>
        {post && (
          <>
            <Title texto={post.attributes.Title} />

            <PostDiv>
              <PostImgTwo src={post.attributes.Image} />
              <PostP>{post.attributes.LongDescription}</PostP>
            </PostDiv>
          </>
        )}
      </div>
      <Contact />
    </div>
  );
};

export default PostPage;
