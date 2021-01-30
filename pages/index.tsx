import Link from "next/link";
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <Link href='/about'>
                 <a className="">got to x</a>
      </Link>
    </Layout>
  )
}
