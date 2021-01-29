import Image from 'next/image'
import Link from "next/link";

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <Link href='/'>
                 <a>got to Home</a>
            </Link>
            
            <Image src="/vercel.svg" alt="me" width="200" height="200" />

        </div>
    )
  }
  