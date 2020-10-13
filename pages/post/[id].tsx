// using static side generation
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { Post } from '../../types';

export default function SinglePost({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{post.title}</title>
      </Head>
      <Layout>
        <h1>{post.title}</h1>
        <div>{post.body}</div>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return {
    paths: posts.map((post) => {
      return { params: { id: `${post.id}` } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post[] = await res.json();
  return { props: { post } };
};
