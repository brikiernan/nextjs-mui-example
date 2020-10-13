// import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';

interface Values {
  title: string;
  body: string;
}

export default function CreatePort() {
  const { register, handleSubmit } = useForm<Values>();
  // const router = useRouter();
  const onSubmit = async (values: Values) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: values.title,
        body: values.body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await res.json();
    console.log(data); // no resource actually created
    //router.push('/blog-ssr');
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input name="title" ref={register} />
        </div>
        <div>
          <label>Content</label>
          <textarea name="body" ref={register} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
}
