import type { NextPage } from 'next';
import Contact from '../../Components/Contact/Contact';
import Header from '../../Components/Header/Header';
import { PostImg } from '../../Components/Post/styles';
import Title from '../../Components/Title/Title';
import { PostDiv } from './styles';

const PostPage: NextPage = () => {
  return (
    <div>
      <Header />
      <div>
        <Title texto="Omaha Dundee Garden Tour" />

        <PostDiv>
          <PostImg
            src="https://cdn.shopify.com/s/files/1/0056/1952/files/21-bourbon-on-guitar-1180x1480_600x600.jpg?v=1646331096"
            alt=""
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet. Vel omnis ipsa sit possimus commodi
              vel aspernatur consequatur ut numquam iure cum unde esse. Et
              quibusdam doloremque aut commodi consequuntur et doloremque enim.
              Aut eligendi magni et sunt facilis qui doloremque commodi et saepe
              Quis eum recusandae consequatur!{' '}
            </p>
            <p>
              Et quia veniam ut deserunt dolor aut odio repellat id odit
              commodi! Est commodi alias nam sint magni et possimus possimus hic
              laboriosam doloribus id iure reprehenderit et sequi enim. Est quae
              enim sed maiores reprehenderit et quia dolor et modi eveniet non
              voluptas voluptates aut molestiae aspernatur quo necessitatibus
              recusandae!{' '}
            </p>
            <p>
              Est reprehenderit dolorem est sunt beatae et itaque iste et
              obcaecati sunt cum ipsam velit non assumenda laborum. Non
              reprehenderit labore ut nisi minima ad ipsam earum id sint
              assumenda. Corporis voluptatum aut voluptatem rerum eos magnam
              amet! Est illum accusantium sit sint nihil sit quod iusto?{' '}
            </p>
          </div>
        </PostDiv>
      </div>
      <Contact />
    </div>
  );
};

export default PostPage;
