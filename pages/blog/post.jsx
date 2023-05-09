import Link from 'next/link';
import Head from 'next/head';

export default function Post(){
    return <div>
        <Head>
            <title>Post</title>
        </Head>
        <h3>Post page</h3>
        <Link href='/'>
            Geri don
        </Link>
    </div>
}