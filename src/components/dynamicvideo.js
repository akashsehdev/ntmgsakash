import React from 'react'

export default function dynamicvideo(props) {
  return (
   
<div class="flex flex-col justify-center items-center space-y-4 h-full bg-black">
{/* <div class="container flex-col justify-center items-center aspect-w-16 aspect-h-9 m-auto"> */}
  <iframe class="text-center m-auto" width="315" height="560" title="thisframe" src={props.vidurl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
{/* </div> */}
</div>
   
  )
}
