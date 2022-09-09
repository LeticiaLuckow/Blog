import Link from 'next/link';
import { PostCard, PostImg, TitleP } from './styles';

const Post = () => {
  const date = new Date();
  return (
    <PostCard>
      <TitleP>Não é um Lorem Ipsum, mas seu Lorem Ipsum!</TitleP>
      <p>
        <b style={{ fontSize: '14px' }}>
          Posted at {date.toLocaleDateString()}
        </b>
      </p>
      <PostImg
        src="https://cdn.shopify.com/s/files/1/0056/1952/files/21-bourbon-on-guitar-1180x1480_600x600.jpg?v=1646331096"
        alt=""
      />
      <p>
        Com o gerador de texto on-line você pode processar seu Lorem Ipsum rico
        em elementos html que definem sua estrutura, com a possibilidade de
        inserir links externos, mas não apenas.
      </p>
      <Link href="/">ver mais</Link>
    </PostCard>
  );
};

export default Post;
