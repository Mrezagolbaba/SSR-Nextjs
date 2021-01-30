import Link from "next/link";
import Head from 'next/head'
import Router from "next/router";
import NProgress from "nprogress";


Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });


 const Layout = ({children,title})=>{
     return(
        <div className="flex flex-col">
            <Head>
                <title>NextJs SSR</title>
                 
            </Head>
            <header className="flex flex-row bg-indigo-700 width-full justify-around p-4 text-xl" >
                <Link  href="/"><a className="text-gray-800 no-underline hover:text-gray-300 hover:font-bold ">Home</a></Link>
                <Link href="/about"><a className="text-gray-800 no-underline hover:text-gray-300 hover:font-bold">About</a></Link>
                <Link href="/hireme"><a className="text-gray-800 no-underline hover:text-gray-300 hover:font-bold">Hire Me</a></Link>
            </header>
            <h1>{title}</h1>
            {children}
            <footer className="p-4">
                &copy;{new Date().getFullYear()}
            </footer>
        </div>
     )
    
}
export default Layout;