import React from 'react'
import {useRouter} from 'next/router'

const PostDetail = ({post}) => {
    // const router = useRouter();
    // if (router.isFallback){
    //     return <h1>Loading...</h1>
    // }

  return (
    <div>
        <p>{post.id} - {post.title}</p>
        <p>{post.body}</p>
    </div>
  )
}

export default PostDetail

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    const data = await response.json()
    console.log(`Generating page for posts/${params.postid}`)
    if (!data.id){
        return {
            notFound: true
        }
    }
    return{
        props:{
            post: data
        }
    }
}

export async function getStaticPaths(){
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await response.json()

    // const paths = data.map(post=>{
    //     return {
    //         params:{ postid: `${post.id}` }
    //     }
    // })
    console.log("Get Static Paths....")
    return {
        paths:[
            {
                params: {postid: '1'}
            },
            {
                params: {postid: '2'}
            },
            {
                params: {postid: '3'}
            },
        ]
        //paths
        ,fallback:'blocking',
    }

}