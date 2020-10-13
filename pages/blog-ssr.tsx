import { InferGetServerSidePropsType } from 'next';
import Layout from '../components/Layout';
import { Post } from '../types';

export default function BlogSSR(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <h1>Server Side Rendering Example</h1>
      <h2>Blog Posts</h2>
      <h5>TIMESTAMP: {Date.now()}</h5>
      <h4>Latest Posts</h4>
      <ul>
        {props.posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();
  return { props: { posts } };
};
