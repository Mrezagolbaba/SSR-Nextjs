import Image from 'next/image'
import Link from "next/link";
import Layout from '../components/Layout';

export default function About() {
    return (
        <Layout title="About"> 
            <Image src="/vercel.svg" alt="me" width="200" height="200" />
        </Layout>
    )
  }
  