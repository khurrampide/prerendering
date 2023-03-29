import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <h1>Next.js Pre Rendering</h1>
      <div>
      < Link href="/users">Users</Link>
      </div>
      <Link href="/posts">Posts</Link>
    </>
  )
}
