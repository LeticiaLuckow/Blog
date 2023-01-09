import Link from 'next/link';
import { PostCard, PostImg, TitleP } from './styles';

type Post = {
  title: string;
  date: string;
  img: string;
  description: string;
  link: string;
};

const Post = ({ title, date, img, description, link }: Post) => {
  return (
    <PostCard id="posts">
      <TitleP>{title}</TitleP>
      <p>
        <b style={{ fontSize: '14px' }}>Posted at {date}</b>
      </p>
      <PostImg src={img} alt="" />
      <p>{description}</p>
      <Link href={link}>ver mais</Link>
    </PostCard>
  );
};

export default Post;
