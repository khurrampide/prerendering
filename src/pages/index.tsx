import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <h1>Next.js Pre Rendering</h1>
      <Link href="/users">Users</Link>
      <Link href="/posts">Posts</Link>
    </>
  )
}
