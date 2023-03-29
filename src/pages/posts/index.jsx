import React from 'react'
import Link from 'next/link'
const PostsList = ({posts}) => {
  return (
    <div>
        {
            posts.map(post => {
                return (
                    <div key={post.id}>
                       <Link href={`posts/${post.id}`} > 
                        <p>{post.id} - {post.title}</p>
                       </Link>
                    </div>
                )
            })
        }        
    </div>
  )
}

export default PostsList

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return {
        props:{
            posts: data
        }
    }
}

