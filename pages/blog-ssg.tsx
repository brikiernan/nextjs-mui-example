import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Post } from '../types';

export default function BlogSSG(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Posts</title>
      </Head>
      <Layout>
        <h1>Server Side Rendering Example</h1>
        <h2>Blog Posts</h2>
        <h5>TIMESTAMP: {Date.now()}</h5>
        <h4>Latest Posts</h4>
        <ul>
          {props.posts.map((post) => {
            return (
              <li key={post.id}>
                <Link href="/post/[id]" as={`/post/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <p>
          <Link href="/create-post">
            <a>Create a Post</a>
          </Link>
        </p>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();
  return { props: { posts } };
};
