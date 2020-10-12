import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function ProductCategory() {
  const router = useRouter();

  return (
    <Layout>
      <h1>Category {router.query.category}</h1>
      <button onClick={() => router.push('/')}>Home</button>
    </Layout>
  );
}
