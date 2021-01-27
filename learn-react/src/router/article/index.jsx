import React from 'react'

export default function Article(props) {
  console.log(props)
  return (
    <div>
      <p>Article {props.match.params.id}</p>
    </div>
  )
}
