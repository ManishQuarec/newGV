import React from 'react'
import VideoNews from '@/components/videoNews/VideoNewsed'

function index({article}) {
  console.log("article", article);


  return (<>
    
    <VideoNews data={article} />
  </>

  )
}

export default index

export async function getServerSideProps(context) {
  const { params } = context
  const { videoNews } = params
  // console.log(params);

  // const response = await fetch('http://localhost:5000/call/allNewsData',{data: "Entertainment"} )
  // console.log(response.data);

  // const data = await response.json

  return {
      props: {
          article: videoNews
      }
  }

}