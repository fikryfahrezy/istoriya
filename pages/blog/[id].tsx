import type {
  GetStaticProps,
  GetStaticPaths,
  InferGetServerSidePropsType,
} from 'next';
import type { BlogType } from '../../components/blog';
import fs from 'fs/promises';
import path from 'path';
import Blog from '../../components/blog';

const IndexPage = ({
  blog,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return <Blog data={blog} />;
};

const getData = async function getData() {
  const blogPath = path.join(process.cwd(), 'data', 'blog.json');
  const dataString = await fs.readFile(blogPath, 'utf-8');
  const data: BlogType[] = JSON.parse(dataString);

  return data;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getData();
  const blog: BlogType | undefined = data.find(({ id }) =>
    params ? params.id === id : '0',
  );

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData();
  const paths = data.map(({ id }) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
};

export default IndexPage;
