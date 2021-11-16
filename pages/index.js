import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getFood } from '../lib/data';


export async function getStaticProps() {
  const allData = await getFood();
  return {
    props: {
      allData
    }
  }
}

export default function Home({ allData }) {
  return (
    <Layout home>
      <h1 className="text-center">Headless CMS-Powered App</h1>
        <div className="list-group">
          {allData.map(({ id, name }) => (
            <Link key={id} href={`/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))}
        </div>
    </Layout>
  );
}
